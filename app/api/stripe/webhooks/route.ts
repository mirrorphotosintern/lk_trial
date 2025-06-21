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
import { eq, sql } from "drizzle-orm"
import { db } from "@/db/db"
import { paymentsTable, creditsTable } from "@/db/schema"

const relevantEvents = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
  "checkout.session.async_payment_failed",
  "payment_intent.succeeded", // ✅ For Payment Links (if needed)
  "payment_intent.payment_failed", // ✅ For Payment Links (if needed)
  // 🚫 REMOVED: invoice events (no longer creating invoices for better product tracking)
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

  // Get credits from checkout session metadata (must be set when creating session)
  const userId = checkoutSession.metadata?.userId
  const creditsFromMeta = checkoutSession.metadata?.credits
  
  if (!creditsFromMeta) {
    console.error("❌ No credits found in session metadata - session creation failed", {
      sessionId: checkoutSession.id,
      metadata: checkoutSession.metadata
    })
    return // Skip processing - session should always have credits metadata
  }
  
  const credits = parseInt(creditsFromMeta, 10)
  console.log("✅ Credits found in session metadata:", credits)
  
  const amountPaid = (checkoutSession.amount_total || 0) / 100

  console.log("🔍 Extracted payment data:", {
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

  // Get credits from payment intent metadata (must be set when creating payment intent)
  const creditsFromMeta = paymentIntent.metadata?.credits
  
  if (!creditsFromMeta) {
    console.error("❌ No credits found in payment intent metadata - payment creation failed", {
      paymentIntentId: paymentIntent.id,
      metadata: paymentIntent.metadata
    })
    return // Skip processing - payment intent should always have credits metadata
  }
  
  const credits = parseInt(creditsFromMeta, 10)
  console.log("✅ Credits found in payment intent metadata:", credits)

  const amountPaid = paymentIntent.amount / 100

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

// Helper function to process successful payments (checkout sessions and payment intents only)
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
    // 🔍 DEBUG: Log all available customer data from Stripe event
    console.log("🔍 DEBUGGING CUSTOMER DATA EXTRACTION:", {
      eventType,
      objectId,
      checkoutSessionData: checkoutSession ? {
        id: checkoutSession.id,
        customer: checkoutSession.customer,
        customer_details: checkoutSession.customer_details,
        customer_email: checkoutSession.customer_email,
        billing_address_collection: checkoutSession.billing_address_collection
      } : null,
      paymentIntentData: paymentIntent ? {
        id: paymentIntent.id,
        customer: paymentIntent.customer,
        receipt_email: paymentIntent.receipt_email,
        metadata: paymentIntent.metadata
      } : null,
      note: "Invoice processing removed for better product tracking"
    })

    // Extract comprehensive payment details  
    const paymentIntentId = paymentIntent?.id || (checkoutSession?.payment_intent as string) || ""
    
    // 🔍 SIMPLIFIED SESSION ID EXTRACTION (no more invoice events)
    let actualSessionId = checkoutSession?.id || ""
    
    // If no checkout session, try to get session ID from payment intent (for Payment Links)
    if (!actualSessionId && paymentIntentId) {
      try {
        console.log(`🔍 No checkout session found, fetching from payment intent: ${paymentIntentId}`)
        const stripe = getStripe()
        const fullPaymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
          expand: ['latest_charge']
        })
        
        // Check if payment intent has checkout session metadata
        if (fullPaymentIntent.metadata?.sessionId) {
          actualSessionId = fullPaymentIntent.metadata.sessionId
          console.log(`✅ Found session ID in payment intent metadata: ${actualSessionId}`)
        } else {
          // For Payment Links without session, use payment intent ID
          actualSessionId = `payment_link_${paymentIntentId}`
          console.log(`✅ Using payment link ID: ${actualSessionId}`)
        }
      } catch (sessionFetchError) {
        console.error("❌ Failed to fetch session ID from payment intent:", {
          paymentIntentId,
          error: sessionFetchError instanceof Error ? sessionFetchError.message : 'Unknown error'
        })
        // Fallback for payment intent
        actualSessionId = `payment_intent_${paymentIntentId}`
      }
    }
    
    // Final fallback: use object ID with event type
    if (!actualSessionId) {
      actualSessionId = `${eventType.replace('.', '_')}_${objectId}`
      console.log(`⚠️ Using fallback session ID: ${actualSessionId}`)
    }
    
    console.log("🔍 FINAL SESSION ID EXTRACTED:", {
      actualSessionId,
      hasCheckoutSession: !!checkoutSession,
      hasPaymentIntent: !!paymentIntent,
      eventType,
      note: "Invoice events removed for better product tracking"
    })
    
    // Try to get email from multiple sources (prioritize actual email over fallbacks)
    let rawEmail = checkoutSession?.customer_details?.email || 
                   checkoutSession?.customer_email ||
                   paymentIntent?.receipt_email ||
                   null
    
    // Try to get name from multiple sources
    let rawName = checkoutSession?.customer_details?.name || null
    
    const customerId = (checkoutSession?.customer as string) || (paymentIntent?.customer as string) || ""

    // 🔍 DEBUG: Log extracted customer info
    console.log("🔍 EXTRACTED CUSTOMER INFO (before API fetch):", {
      rawEmail,
      rawName,
      customerId,
      paymentIntentId,
      hasCustomerId: !!customerId,
      needsCustomerFetch: !!customerId && (!rawName || !rawEmail)
    })

    // 🚀 ALWAYS FETCH CUSTOMER DATA if we have customer ID to get REAL email/name
    let finalEmail = rawEmail
    let finalName = rawName
    
    if (customerId) {
      try {
        console.log(`🔍 Fetching ACTUAL customer details from Stripe for ID: ${customerId}`)
        const stripe = getStripe()
        const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer
        
        if (customer && !customer.deleted) {
          // Use Stripe customer data as the authoritative source
          finalEmail = customer.email || rawEmail
          finalName = customer.name || rawName
          
          console.log("✅ Retrieved ACTUAL customer details from Stripe:", {
            customerId,
            email: finalEmail,
            name: finalName,
            phone: customer.phone,
            hasRealEmail: !!customer.email,
            hasRealName: !!customer.name
          })
        }
      } catch (customerError) {
        console.error("❌ Failed to fetch customer from Stripe:", {
          customerId,
          error: customerError instanceof Error ? customerError.message : 'Unknown error'
        })
        // Continue with existing data
      }
    }

    // 🚨 VALIDATION: Ensure we have actual email, not a fallback
    if (!finalEmail || finalEmail === "unknown@example.com") {
      console.error("🚨 CRITICAL: No actual email address found for payment", {
        objectId,
        userId,
        customerId,
        rawEmail,
        finalEmail,
        hasCheckoutSession: !!checkoutSession,
        hasPaymentIntent: !!paymentIntent
      })
      
      // Use clear placeholder that indicates missing email (database requires non-null)
      finalEmail = `no-email-found@payment-${objectId}.stripe-webhook`
      console.error("🚨 Using placeholder email due to missing customer data:", finalEmail)
    }

    console.log("🔍 FINAL CUSTOMER DATA:", {
      finalEmail,
      finalName,
      isRealEmail: finalEmail && 
                   finalEmail !== "unknown@example.com" && 
                   !finalEmail.includes("no-email-found@payment-"),
      emailSource: finalEmail === rawEmail ? "checkout_session" : 
                   finalEmail.includes("no-email-found@payment-") ? "placeholder_missing" :
                   "stripe_customer_api"
    })
    
    // Enhanced metadata with comprehensive payment details and product tracking
    const enhancedMetadata = {
      // Core purchase information
      purchaseType: "credits",
      appName: "LearnKannada",
      productName: checkoutSession?.metadata?.productName || paymentIntent?.metadata?.productName || "Credits Pack",
      creditPackDescription: checkoutSession?.metadata?.creditPackDescription || `${credits} Credits Pack`,
      creditAmount: credits,
      purchaseAmount: amountPaid,
      currency: checkoutSession?.currency || paymentIntent?.currency || "usd",
      
      // Payment status and processing
      paymentStatus: checkoutSession?.payment_status || paymentIntent?.status,
      eventType,
      stripeEventType: eventType,
      processedAt: new Date().toISOString(),
      
      // Customer information
      customerEmail: finalEmail,
      customerName: finalName,
      userId,
      clientReferenceId: checkoutSession?.client_reference_id,
      
      // Stripe product catalog information
      productId: checkoutSession?.metadata?.productId || paymentIntent?.metadata?.productId,
      priceId: checkoutSession?.metadata?.priceId || paymentIntent?.metadata?.priceId,
      
      // Payment method and billing
      paymentMethod: checkoutSession?.payment_method_types || [],
      billingDetails: checkoutSession?.customer_details || null,
      checkoutMode: checkoutSession?.mode || "payment",
      
      // Stripe transaction details
      stripeDetails: {
        sessionId: actualSessionId,
        paymentIntentId,
        customerId,
        amount: amountPaid,
        currency: checkoutSession?.currency || paymentIntent?.currency,
        invoiceId: (checkoutSession?.invoice as string) || null
      },
      
      // Custom fields and usage tracking
      intendedUse: checkoutSession?.custom_fields?.find(f => f.key === "intended_use")?.dropdown?.value || null,
      source: checkoutSession?.metadata?.source || "webhook",
      
      // Timestamps and tracking
      timestamp: new Date().toISOString(),
      purchaseDate: checkoutSession?.metadata?.timestamp || new Date().toISOString(),
      idempotencyKey: paymentIntentId || objectId,
      
      // Business intelligence
      creditPackSize: credits.toString(),
      revenueAmount: amountPaid,
      isNewCustomer: !customerId || customerId === ""
    }

    console.log("💳 Processing payment with atomic transaction:", {
      objectId,
      paymentIntentId,
      userId,
      credits,
      amountPaid,
      currency: checkoutSession?.currency || paymentIntent?.currency,
      email: finalEmail,
      name: finalName,
      customerId,
      eventType,
      // Enhanced Stripe product tracking
      stripeProductInfo: {
        productId: checkoutSession?.metadata?.productId || paymentIntent?.metadata?.productId,
        productName: checkoutSession?.metadata?.productName || paymentIntent?.metadata?.productName,
        priceId: checkoutSession?.metadata?.priceId || paymentIntent?.metadata?.priceId,
        creditPackDescription: checkoutSession?.metadata?.creditPackDescription || `${credits} Credits Pack`
      },
      customerTracking: {
        clientReferenceId: checkoutSession?.client_reference_id,
        intendedUse: checkoutSession?.custom_fields?.find(f => f.key === "intended_use")?.dropdown?.value,
        isNewCustomer: !customerId || customerId === ""
      }
    })

    // 🛡️ ATOMIC TRANSACTION: All operations succeed or all fail
    const result = await db.transaction(async (tx) => {
      
      // 1. IDEMPOTENCY CHECK: Prevent duplicate payment processing
      if (paymentIntentId) {
        console.log(`🔍 Checking for existing payment with PaymentIntent ID: ${paymentIntentId}`)
        
        const existingPayment = await tx.query.payments.findFirst({
          where: eq(paymentsTable.stripePaymentIntentId, paymentIntentId)
        })
        
        if (existingPayment) {
          console.log(`⚠️ Payment already processed - skipping duplicate:`, {
            existingPaymentId: existingPayment.id,
            paymentIntentId,
            eventType,
            existingEventType: JSON.parse(existingPayment.metadata || '{}').eventType
          })
          throw new Error("DUPLICATE_PAYMENT") // Special error to skip processing
        }
      }

      // 2. CREATE PAYMENT RECORD (REQUIRED)
      console.log(`💳 Creating payment record in transaction...`)
      const [paymentRecord] = await tx.insert(paymentsTable).values({
        id: objectId,
        userId,
        stripeSessionId: actualSessionId,
        stripePaymentIntentId: paymentIntentId,
        stripeCustomerId: customerId,
        credits: credits,
        amountPaid: amountPaid.toString(),
        currency: checkoutSession?.currency || paymentIntent?.currency || "usd",
        email: finalEmail,
        name: finalName,
        status: "completed",
        metadata: JSON.stringify(enhancedMetadata)
      }).returning()

      console.log(`✅ Payment record created:`, {
        paymentId: paymentRecord.id,
        userId: paymentRecord.userId,
        credits: paymentRecord.credits,
        amount: paymentRecord.amountPaid
      })

      // 3. ADD CREDITS (ONLY after payment record succeeds)
      console.log(`💰 Adding ${credits} credits to user ${userId} in transaction...`)
      
      // First check if user exists in credits table
      const existingCredits = await tx.select().from(creditsTable)
        .where(eq(creditsTable.userId, userId)).limit(1)
      
      let creditRecord
      if (existingCredits.length === 0) {
        // User doesn't exist - create new record with initial credits + purchased amount
        [creditRecord] = await tx.insert(creditsTable).values({
          userId,
          credits: 100 + credits // Default 100 + purchased amount
        }).returning()
        
        console.log(`✅ User credits initialized with ${100 + credits} total credits`)
      } else {
        // User exists - update existing record
        [creditRecord] = await tx.update(creditsTable)
          .set({
            credits: sql`${creditsTable.credits} + ${credits}`,
            updatedAt: new Date()
          })
          .where(eq(creditsTable.userId, userId))
          .returning()
        
        console.log(`✅ Credits added. New balance: ${creditRecord.credits}`)
      }

      return { paymentRecord, creditRecord }
    })

    // 🎉 TRANSACTION COMPLETED SUCCESSFULLY
    console.log(`🎉 Payment processing completed atomically for user ${userId}:`, {
      paymentId: result.paymentRecord.id,
      creditsAdded: credits,
      newCreditBalance: result.creditRecord.credits,
      amountPaid: `$${amountPaid}`,
      paymentMethod: eventType,
      processingTime: new Date().toISOString(),
      dataIntegrityMaintained: true,
      // ✅ Stripe product logging for dashboard tracking
      stripeProductPurchased: {
        productId: checkoutSession?.metadata?.productId || paymentIntent?.metadata?.productId,
        productName: checkoutSession?.metadata?.productName || paymentIntent?.metadata?.productName || "LearnKannada Credits",
        priceId: checkoutSession?.metadata?.priceId || paymentIntent?.metadata?.priceId,
        creditPackSize: `${credits} Credits Pack`,
        stripeInvoiceId: (checkoutSession?.invoice as string) || null,
        customerIntendedUse: checkoutSession?.custom_fields?.find(f => f.key === "intended_use")?.dropdown?.value || "not_specified"
      },
      businessMetrics: {
        revenue: amountPaid,
        creditsSold: credits,
        customerType: (!customerId || customerId === "") ? "new" : "returning",
        purchaseSource: "web_checkout"
      }
    })

  } catch (error) {
    // Handle duplicate payments gracefully
    if (error instanceof Error && error.message === "DUPLICATE_PAYMENT") {
      console.log(`⚠️ Duplicate payment detected - no processing needed`)
      return // Exit gracefully for duplicates
    }

    console.error("❌ Critical error in atomic payment processing:", {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      objectId,
      userId,
      credits,
      amountPaid,
      eventType
    })
    
    // 🚨 CRITICAL: Payment processing failed completely
    // No partial state - either everything works or nothing is recorded
    console.error(`🚨 PAYMENT PROCESSING FAILURE - WEBHOOK WILL RETRY:`, {
      userId,
      credits,
      amountPaid,
      objectId,
      paymentIntentId: paymentIntent?.id || (checkoutSession?.payment_intent as string) || "",
      eventType,
      timestamp: new Date().toISOString(),
      errorDetails: error,
      note: "No credits added - Stripe will retry webhook until successful"
    })
    
    // Throw error to make webhook retry
    throw error
  }
}


