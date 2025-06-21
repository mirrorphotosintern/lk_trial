import { syncUserProfileWithDataAction } from "@/actions/db/profiles-actions"
import { Webhook } from "svix"
import { WebhookEvent } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function POST(req: Request) {
  try {
    // Get the headers - this is an async operation in Next.js 15+
    const headersList = await headers()

    // Extract the necessary headers
    const svix_id = headersList.get("svix-id")
    const svix_timestamp = headersList.get("svix-timestamp")
    const svix_signature = headersList.get("svix-signature")

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response("Error: Missing svix headers", {
        status: 400
      })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload)

    // Get the webhook secret
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET

    // If there's no webhook secret, error out
    if (!webhookSecret) {
      console.error("Error: No webhook secret found")
      return new Response("Error: No webhook secret found", {
        status: 500
      })
    }

    // Create a new Webhook instance with your webhook secret
    const webhook = new Webhook(webhookSecret)

    let event: WebhookEvent

    try {
      // Verify the webhook
      event = webhook.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature
      }) as WebhookEvent
    } catch (error) {
      console.error("Error verifying webhook:", error)
      return new Response("Error verifying webhook", {
        status: 400
      })
    }

    // Get the ID and type of the webhook
    const { id } = event.data
    const eventType = event.type

    console.log(`Webhook received: ${eventType} for user: ${id}`)

    // Only process user created or updated events
    if (eventType === "user.created" || eventType === "user.updated") {
      const {
        id: userId,
        first_name,
        last_name,
        image_url,
        email_addresses
      } = event.data

      const primaryEmail = email_addresses?.[0]?.email_address
      let fullName = ""

      if (first_name && last_name) {
        fullName = `${first_name} ${last_name}`
      } else if (first_name) {
        fullName = first_name as string
      } else if (last_name) {
        fullName = last_name as string
      }

      // Sync the user profile
      console.log(`Syncing profile for ${userId} (${fullName})`)

      if (userId) {
        const result = await syncUserProfileWithDataAction({
          userId: userId as string,
          displayName: fullName || `User ${(userId as string).substring(0, 6)}`,
          email: primaryEmail,
          profileImageUrl: (image_url as string) || undefined
        })

        if (result.isSuccess) {
          console.log(`Successfully synced profile for user ${userId}`)
        } else {
          console.error(
            `Failed to sync profile for user ${userId}: ${result.message}`
          )
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error handling webhook:", error)
    return new Response("Error handling webhook", {
      status: 500
    })
  }
}
