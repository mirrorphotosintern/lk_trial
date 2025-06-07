/*
This API route handles Stripe webhook events to manage subscription status changes and updates user profiles accordingly.
*/

import {
  manageSubscriptionStatusChange,
  updateStripeCustomer
} from "@/actions/stripe-actions"
import { addCreditsAction } from "@/actions/db/credits-actions"
import { createPaymentAction } from "@/actions/db/payments-actions"
import { getStripe } from "@/lib/stripe"
import { headers } from "next/headers"
import Stripe from "stripe"

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.updated",
  "customer.subscription.deleted"
])

export async function POST(req: Request) {
  const body = await req.text()
  const sig = (await headers()).get("Stripe-Signature") as string
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  let event: Stripe.Event

  try {
    if (!sig || !webhookSecret) {
      throw new Error("Webhook secret or signature missing")
    }

    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case "customer.subscription.updated":
        case "customer.subscription.deleted":
          await handleSubscriptionChange(event)
          break

        case "checkout.session.completed":
          await handleCheckoutSession(event)
          break

        default:
          throw new Error("Unhandled relevant event!")
      }
    } catch (error) {
      console.error("Webhook handler failed:", error)
      return new Response(
        "Webhook handler failed. View your nextjs function logs.",
        { status: 400 }
      )
    }
  }

  return new Response(JSON.stringify({ received: true }))
}

async function handleSubscriptionChange(event: Stripe.Event) {
  const subscription = event.data.object as Stripe.Subscription
  const productId = subscription.items.data[0].price.product as string
  await manageSubscriptionStatusChange(
    subscription.id,
    subscription.customer as string,
    productId
  )
}

async function handleCheckoutSession(event: Stripe.Event) {
  const checkoutSession = event.data.object as Stripe.Checkout.Session

  console.log("🔍 Processing checkout session:", {
    sessionId: checkoutSession.id,
    mode: checkoutSession.mode,
    paymentStatus: checkoutSession.payment_status,
    metadata: checkoutSession.metadata
  })

  const userId = checkoutSession.metadata?.userId
  const creditsFromMeta = checkoutSession.metadata?.credits

  // Handle credit purchases (one-time payments)
  if (
    checkoutSession.mode === "payment" &&
    checkoutSession.payment_status === "paid"
  ) {
    if (userId && creditsFromMeta) {
      const credits = parseInt(creditsFromMeta)
      const amountPaid = (checkoutSession.amount_total || 0) / 100 // Convert cents to dollars

      try {
        console.log(
          `💳 Processing payment: ${credits} credits for $${amountPaid} (user: ${userId})`
        )

        // Store payment record in database
        const paymentResult = await createPaymentAction({
          id: checkoutSession.id,
          userId,
          stripeSessionId: checkoutSession.id,
          stripePaymentIntentId: checkoutSession.payment_intent as string,
          stripeCustomerId: checkoutSession.customer as string,
          credits,
          amountPaid: amountPaid.toString(),
          currency: checkoutSession.currency || "usd",
          status: "completed",
          metadata: JSON.stringify({
            purchaseType: "credits",
            paymentStatus: checkoutSession.payment_status,
            customerEmail: checkoutSession.customer_details?.email
          })
        })

        if (paymentResult.isSuccess) {
          console.log(`✅ Payment record created: ${paymentResult.data.id}`)
        } else {
          console.error(
            `❌ Failed to create payment record: ${paymentResult.message}`
          )
        }

        // Add credits to user account
        const creditResult = await addCreditsAction(userId, credits)
        if (creditResult.isSuccess) {
          console.log(
            `✅ Credits added: ${credits} credits to user ${userId}. New balance: ${creditResult.data}`
          )
        } else {
          console.error(`❌ Failed to add credits: ${creditResult.message}`)
        }
      } catch (error) {
        console.error("❌ Error processing payment:", error)
      }
    } else {
      console.error("❌ Missing userId or credits in metadata:", {
        userId,
        creditsFromMeta
      })
    }
    return
  }

  // Handle subscriptions if needed
  if (checkoutSession.mode === "subscription") {
    console.log("🔄 Processing subscription checkout")
    const subscriptionId = checkoutSession.subscription as string

    await updateStripeCustomer(
      checkoutSession.client_reference_id as string,
      subscriptionId,
      checkoutSession.customer as string
    )

    const subscription = await getStripe().subscriptions.retrieve(
      subscriptionId,
      { expand: ["default_payment_method"] }
    )

    const productId = subscription.items.data[0].price.product as string

    await manageSubscriptionStatusChange(
      subscription.id,
      subscription.customer as string,
      productId
    )
  }
}
