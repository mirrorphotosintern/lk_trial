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
  const stripe = getStripe()
  const checkoutSession = event.data.object as Stripe.Checkout.Session

  console.log("🔍 Processing checkout session:", {
    sessionId: checkoutSession.id,
    paymentStatus: checkoutSession.payment_status
  })

  // Get credits from checkout session metadata (not price metadata)
  const userId = checkoutSession.metadata?.userId
  const creditsFromMeta = checkoutSession.metadata?.credits
  const credits = creditsFromMeta ? parseInt(creditsFromMeta, 10) : 0
  const amountPaid = (checkoutSession.amount_total || 0) / 100

  console.log("🔍 Extracted from session metadata:", {
    userId,
    credits,
    amountPaid,
    sessionMetadata: checkoutSession.metadata
  })

  if (
    checkoutSession.mode === "payment" &&
    checkoutSession.payment_status === "paid" &&
    userId
  ) {
    try {
      const email = checkoutSession.customer_details?.email || "unknown@example.com"
      const name = checkoutSession.customer_details?.name || null

      const paymentResult = await createPaymentAction({
        id: checkoutSession.id,
        userId,
        stripeSessionId: checkoutSession.id,
        stripePaymentIntentId: checkoutSession.payment_intent as string,
        stripeCustomerId: checkoutSession.customer as string,
        credits: credits,
        amountPaid: amountPaid.toString(),
        currency: checkoutSession.currency || "usd",
        email,
        name,
        status: "completed",
        metadata: JSON.stringify({
          purchaseType: "credits",
          paymentStatus: checkoutSession.payment_status,
          customerEmail: email
        })
      })

      if (paymentResult.isSuccess) {
        console.log(`✅ Payment record created: ${paymentResult.data.id}`)
      }

      // Add credits to user account
      const creditResult = await addCreditsAction(userId, credits)
      
      if (creditResult.isSuccess) {
        console.log(`✅ Credits added: ${credits} credits to user ${userId}. New balance: ${creditResult.data}`)
      } else {
        console.error(`❌ Failed to add credits: ${creditResult.message}`)
      }

    } catch (error) {
      console.error("❌ Error processing Stripe webhook payment:", error)
    }
  } else {
    console.log("⚠️ Session not paid or not a payment:", {
      mode: checkoutSession.mode,
      status: checkoutSession.payment_status
    })
  }
}
