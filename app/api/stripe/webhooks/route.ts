/*
This API route handles Stripe webhook events to manage subscription status changes and updates user profiles accordingly.
Supports both Checkout Sessions and Payment Links.
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
import { eq } from "drizzle-orm"
import { db } from "@/db/db"
import { paymentsTable } from "@/db/schema"

const relevantEvents = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
  "checkout.session.async_payment_failed",
  "payment_intent.succeeded", // ✅ For Payment Links
  "payment_intent.payment_failed", // ✅ For Payment Links
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

  // Log the event details for debugging - with proper type checking
  console.log("🔍 Webhook received:", {
    eventType: event.type,
    objectId: (event.data.object as any).id, // ✅ Type assertion for id property
    objectType: event.data.object.object
  })

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case "customer.subscription.updated":
        case "customer.subscription.deleted":
          await handleSubscriptionChange(event)
          break

        case "checkout.session.completed":
        case "checkout.session.async_payment_succeeded":
          await handleCheckoutSession(event)
          break

        case "checkout.session.async_payment_failed":
          await handleAsyncPaymentFailed(event)
          break

        case "payment_intent.succeeded":
          await handlePaymentIntentSucceeded(event)
          break

        case "payment_intent.payment_failed":
          await handlePaymentIntentFailed(event)
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
  } else {
    console.log("⚠️ Ignoring irrelevant event:", event.type)
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
  const objectId = checkoutSession.id

  console.log("🔍 Processing checkout session:", {
    objectId,
    sessionId: checkoutSession.id,
    paymentStatus: checkoutSession.payment_status,
    eventType: event.type
  })

  // Get credits from checkout session metadata (not price metadata)
  const userId = checkoutSession.metadata?.userId
  const creditsFromMeta = checkoutSession.metadata?.credits
  const credits = creditsFromMeta ? parseInt(creditsFromMeta, 10) : 0
  const amountPaid = (checkoutSession.amount_total || 0) / 100

  console.log("🔍 Extracted from session metadata:", {
    objectId,
    userId,
    credits,
    amountPaid,
    sessionMetadata: checkoutSession.metadata
  })

  // Handle both immediate payments and async payments that succeeded
  const isPaymentSuccessful = 
    checkoutSession.payment_status === "paid" || 
    event.type === "checkout.session.async_payment_succeeded"

  if (
    checkoutSession.mode === "payment" &&
    isPaymentSuccessful &&
    userId
  ) {
    await processPaymentSuccess({
      objectId,
      userId,
      credits,
      amountPaid,
      checkoutSession,
      eventType: event.type
    })
  } else {
    console.log("⚠️ Session not paid or not a payment:", {
      objectId,
      mode: checkoutSession.mode,
      status: checkoutSession.payment_status,
      eventType: event.type,
      hasUserId: !!userId
    })
  }
}

async function handlePaymentIntentSucceeded(event: Stripe.Event) {
  const paymentIntent = event.data.object as Stripe.PaymentIntent
  const objectId = paymentIntent.id

  console.log("🔍 Processing payment intent (Payment Link):", {
    objectId,
    paymentIntentId: paymentIntent.id,
    amount: paymentIntent.amount,
    status: paymentIntent.status
  })

  // For Payment Links, we need to get user info from metadata or client_reference_id
  const userId = paymentIntent.metadata?.userId || 
                 paymentIntent.metadata?.user_id ||
                 null

  // Map amount to credits (since Payment Links don't have credit metadata by default)
  const amountPaid = paymentIntent.amount / 100
  const credits = mapAmountToCredits(amountPaid)

  console.log("🔍 Extracted from payment intent:", {
    objectId,
    userId,
    credits,
    amountPaid,
    metadata: paymentIntent.metadata
  })

  if (userId && credits > 0) {
    await processPaymentSuccess({
      objectId,
      userId,
      credits,
      amountPaid,
      paymentIntent,
      eventType: event.type
    })
  } else {
    console.log("⚠️ Payment intent missing user ID or invalid amount:", {
      objectId,
      hasUserId: !!userId,
      credits,
      amountPaid,
      metadata: paymentIntent.metadata
    })
  }
}

async function handleAsyncPaymentFailed(event: Stripe.Event) {
  const checkoutSession = event.data.object as Stripe.Checkout.Session
  const objectId = checkoutSession.id
  
  console.log("❌ Async payment failed:", {
    objectId,
    sessionId: checkoutSession.id,
    paymentStatus: checkoutSession.payment_status,
    userId: checkoutSession.metadata?.userId
  })
}

async function handlePaymentIntentFailed(event: Stripe.Event) {
  const paymentIntent = event.data.object as Stripe.PaymentIntent
  const objectId = paymentIntent.id
  
  console.log("❌ Payment intent failed:", {
    objectId,
    paymentIntentId: paymentIntent.id,
    lastPaymentError: paymentIntent.last_payment_error?.message,
    userId: paymentIntent.metadata?.userId
  })
}

// Helper function to process successful payments (both checkout sessions and payment intents)
async function processPaymentSuccess({
  objectId,
  userId,
  credits,
  amountPaid,
  checkoutSession,
  paymentIntent,
  eventType
}: {
  objectId: string
  userId: string
  credits: number
  amountPaid: number
  checkoutSession?: Stripe.Checkout.Session
  paymentIntent?: Stripe.PaymentIntent
  eventType: string
}) {
  try {
    // 🛡️ IDEMPOTENCY CHECK: Prevent duplicate payment processing
    const paymentIntentId = paymentIntent?.id || (checkoutSession?.payment_intent as string) || ""
    
    if (paymentIntentId) {
      console.log(`🔍 Checking for existing payment with PaymentIntent ID: ${paymentIntentId}`)
      
      // Check if we've already processed this payment using PaymentIntent ID
      const existingPayment = await db.query.payments.findFirst({
        where: eq(paymentsTable.stripePaymentIntentId, paymentIntentId)
      })
      
      if (existingPayment) {
        console.log(`⚠️ Payment already processed - skipping duplicate:`, {
          existingPaymentId: existingPayment.id,
          paymentIntentId,
          eventType,
          existingEventType: JSON.parse(existingPayment.metadata || '{}').eventType,
          skippedDuplicate: true
        })
        return // Skip processing duplicate payment
      }
    }

    // Extract comprehensive payment details
    const email = checkoutSession?.customer_details?.email || 
                  paymentIntent?.receipt_email || 
                  "unknown@example.com"
    const name = checkoutSession?.customer_details?.name || null
    const customerId = (checkoutSession?.customer as string) || (paymentIntent?.customer as string) || ""
    
    // Enhanced metadata with more payment details
    const enhancedMetadata = {
      purchaseType: "credits",
      paymentStatus: checkoutSession?.payment_status || paymentIntent?.status,
      customerEmail: email,
      customerName: name,
      eventType,
      objectId,
      paymentMethod: checkoutSession?.payment_method_types || [],
      billingDetails: checkoutSession?.customer_details || null,
      checkoutMode: checkoutSession?.mode || "payment",
      timestamp: new Date().toISOString(),
      stripeEventType: eventType,
      // Additional Stripe details for debugging
      stripeDetails: {
        sessionId: checkoutSession?.id,
        paymentIntentId,
        customerId,
        amount: amountPaid,
        currency: checkoutSession?.currency || paymentIntent?.currency
      },
      // Add idempotency tracking
      idempotencyKey: paymentIntentId || objectId,
      processedAt: new Date().toISOString()
    }

    console.log("💳 Preparing to store comprehensive payment details:", {
      objectId,
      paymentIntentId,
      userId,
      credits,
      amountPaid,
      currency: checkoutSession?.currency || paymentIntent?.currency,
      email,
      name,
      customerId,
      eventType,
      metadataSize: JSON.stringify(enhancedMetadata).length,
      isFirstProcessing: true
    })

    // Store payment record in Supabase
    const paymentResult = await createPaymentAction({
      id: objectId,
      userId,
      stripeSessionId: checkoutSession?.id || "",
      stripePaymentIntentId: paymentIntentId,
      stripeCustomerId: customerId,
      credits: credits,
      amountPaid: amountPaid.toString(),
      currency: checkoutSession?.currency || paymentIntent?.currency || "usd",
      email,
      name,
      status: "completed",
      metadata: JSON.stringify(enhancedMetadata)
    })

    if (paymentResult.isSuccess) {
      console.log(`✅ Payment record successfully stored in Supabase:`, {
        paymentId: paymentResult.data.id,
        userId: paymentResult.data.userId,
        credits: paymentResult.data.credits,
        amount: paymentResult.data.amountPaid,
        currency: paymentResult.data.currency,
        email: paymentResult.data.email,
        stripeSessionId: paymentResult.data.stripeSessionId,
        stripePaymentIntentId: paymentResult.data.stripePaymentIntentId,
        stripeCustomerId: paymentResult.data.stripeCustomerId,
        status: paymentResult.data.status,
        createdAt: paymentResult.data.createdAt,
        duplicatePrevented: true
      })
    } else {
      console.error(`❌ Failed to store payment record in Supabase:`, {
        error: paymentResult.message,
        objectId,
        paymentIntentId,
        userId,
        credits,
        amountPaid
      })
      
      // Check if this was a duplicate key error (payment already exists)
      if (paymentResult.message.includes('duplicate') || paymentResult.message.includes('unique')) {
        console.log(`⚠️ Duplicate payment detected via database constraint - skipping credit addition`)
        return // Skip credit addition for duplicate
      }
      
      // Don't return here - still try to add credits even if payment record failed
      // This ensures users get their credits even if there's a database issue
    }

    // Add credits to user account (only if payment was successfully recorded or is not a duplicate)
    console.log(`💰 Adding ${credits} credits to user ${userId}...`)
    const creditResult = await addCreditsAction(userId, credits)
    
    if (creditResult.isSuccess) {
      console.log(`✅ Credits successfully added to user account:`, {
        userId,
        creditsAdded: credits,
        newBalance: creditResult.data,
        paymentId: objectId,
        paymentIntentId,
        noDuplicateProcessing: true
      })
    } else {
      console.error(`❌ Failed to add credits to user account:`, {
        error: creditResult.message,
        userId,
        creditsToAdd: credits,
        paymentId: objectId,
        paymentIntentId
      })
      
      // This is a critical error - user paid but didn't get credits
      // Log additional details for manual resolution
      console.error(`🚨 CRITICAL: User paid but credits not added - manual intervention required:`, {
        userId,
        credits,
        amountPaid,
        paymentId: objectId,
        paymentIntentId,
        stripeSessionId: checkoutSession?.id,
        timestamp: new Date().toISOString()
      })
    }

    // Final success summary
    console.log(`🎉 Payment processing completed for user ${userId}:`, {
      paymentStored: paymentResult.isSuccess,
      creditsAdded: creditResult.isSuccess,
      totalCredits: credits,
      amountPaid: `$${amountPaid}`,
      paymentMethod: eventType,
      processingTime: new Date().toISOString(),
      duplicatesPrevented: true
    })

  } catch (error) {
    console.error("❌ Critical error processing payment success:", {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      objectId,
      userId,
      credits,
      amountPaid,
      eventType
    })
    
    // Log critical payment failure for manual review
    console.error(`🚨 PAYMENT PROCESSING FAILURE - MANUAL REVIEW REQUIRED:`, {
      userId,
      credits,
      amountPaid,
      objectId,
      eventType,
      timestamp: new Date().toISOString(),
      errorDetails: error
    })
  }
}

// Helper function to map payment amount to credit amount
function mapAmountToCredits(amountInDollars: number): number {
  switch (amountInDollars) {
    case 4.99: return 100
    case 12.99: return 300
    case 22.99: return 600
    case 39.99: return 1200
    default: 
      console.warn(`⚠️ Unknown payment amount: $${amountInDollars}`)
      return 0
  }
}
