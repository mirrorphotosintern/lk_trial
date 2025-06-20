/*
API route to create Stripe checkout sessions using real Stripe product catalog.
Fetches actual prices from Stripe and creates checkout sessions with proper metadata.
*/

import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import Stripe from "stripe"

// Validate environment variables
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables")
}

if (!process.env.NEXT_PUBLIC_APP_URL) {
  throw new Error("NEXT_PUBLIC_APP_URL is not set in environment variables")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia"
})

export async function POST(req: Request) {
  try {
    console.log("🔍 Checkout session request received")
    console.log("🔍 Request headers:", Object.fromEntries(req.headers.entries()))
    
    const session = await auth()
    console.log("🔍 Auth session result:", { 
      hasSession: !!session, 
      userId: session?.userId,
      sessionKeys: session ? Object.keys(session) : []
    })
    
    if (!session?.userId) {
      console.error("❌ Unauthorized: No user session found", {
        session,
        hasClerkHeaders: req.headers.get('clerk-session-id') ? 'yes' : 'no',
        userAgent: req.headers.get('user-agent')
      })
      return new NextResponse("Unauthorized", { status: 401 })
    }

    console.log("✅ Authenticated user:", session.userId)

    const body = await req.json()
    const { priceId } = body

    // Validate that priceId is provided
    if (!priceId) {
      console.error("Missing priceId in request body")
      return new NextResponse("Missing priceId", { status: 400 })
    }

    console.log("🔍 Fetching price from Stripe catalog:", priceId)

    // Fetch the actual price from Stripe
    const price = await stripe.prices.retrieve(priceId, {
      expand: ['product']
    })

    if (!price.active) {
      console.error("Inactive price:", priceId)
      return new NextResponse("Price is not active", { status: 400 })
    }

    const product = price.product as Stripe.Product
    if (!product.active) {
      console.error("Inactive product:", product.id)
      return new NextResponse("Product is not active", { status: 400 })
    }

    // Extract credits from price metadata (you'll need to set this in Stripe)
    const credits = parseInt(price.metadata?.credits || "0", 10)
    if (credits === 0) {
      console.error("No credits metadata found for price:", priceId)
      return new NextResponse("Invalid price configuration", { status: 400 })
    }

    const amount = (price.unit_amount || 0) / 100 // Convert from cents to dollars

    console.log("Creating checkout session for:", {
      userId: session.userId,
      priceId: price.id,
      productId: product.id,
      credits,
      amount,
      productName: product.name
    })

    // Create Stripe Checkout Session using the real price
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId, // Use the actual Stripe price ID
          quantity: 1
        }
      ],
      mode: "payment",
      // ✅ Redirect to YOUR website after payment
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/cancel`,
      metadata: {
        userId: session.userId,
        credits: credits.toString(),
        purchaseType: "credits",
        price: amount.toString(),
        productId: product.id,
        priceId: price.id,
        timestamp: new Date().toISOString()
      },
      billing_address_collection: "auto",
      customer_creation: "always",
      payment_intent_data: {
        metadata: {
          userId: session.userId,
          credits: credits.toString(),
          purchaseType: "credits",
          price: amount.toString(),
          productId: product.id,
          priceId: price.id
        }
      },
      // ✅ Additional options for better UX
      allow_promotion_codes: true,
      automatic_tax: {
        enabled: false // You can enable this if needed
      }
      // Note: customer_email will be collected during checkout
    })

    console.log("✅ Checkout session created successfully:", {
      sessionId: checkoutSession.id,
      url: checkoutSession.url,
      credits,
      amount,
      productName: product.name,
      willRedirectTo: {
        success: `${process.env.NEXT_PUBLIC_APP_URL}/credits/success`,
        cancel: `${process.env.NEXT_PUBLIC_APP_URL}/credits/cancel`
      }
    })

    return NextResponse.json({
      url: checkoutSession.url,
      sessionId: checkoutSession.id,
      credits,
      amount,
      productName: product.name
    })
  } catch (error) {
    console.error("❌ Error creating checkout session:", error)

    // Provide more specific error messages
    if (error instanceof Stripe.errors.StripeError) {
      console.error("Stripe error:", {
        type: error.type,
        code: error.code,
        message: error.message
      })
      return new NextResponse(`Stripe Error: ${error.message}`, { status: 400 })
    }

    return new NextResponse(
      "Internal Error: Failed to create checkout session",
      { status: 500 }
    )
  }
}
