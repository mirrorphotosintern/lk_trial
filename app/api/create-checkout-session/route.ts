/*
API route to create Stripe checkout sessions using predefined Stripe product catalog.
Uses environment variables to map credit amounts to specific Stripe products/prices.
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

// Predefined credit packages with Stripe product/price IDs
// Note: Each credit pack has its own separate product ID
const CREDIT_PACKAGES = {
  100: {
    credits: 100,
    priceId: process.env.STRIPE_PRICE_100_CREDITS,
    productId: process.env.STRIPE_PRODUCT_100_CREDITS, // Separate product for 100 credits
    name: "100 Credits Pack",
            description: "Starter pack - 100 credits for LearnKannada learning",
    packSize: "small",
    value: "starter"
  },
  300: {
    credits: 300,
    priceId: process.env.STRIPE_PRICE_300_CREDITS,
    productId: process.env.STRIPE_PRODUCT_300_CREDITS, // Separate product for 300 credits
    name: "300 Credits Pack", 
            description: "Popular pack - 300 credits for LearnKannada learning",
    packSize: "medium",
    value: "popular"
  },
  600: {
    credits: 600,
    priceId: process.env.STRIPE_PRICE_600_CREDITS,
    productId: process.env.STRIPE_PRODUCT_600_CREDITS, // Separate product for 600 credits
    name: "600 Credits Pack",
            description: "Value pack - 600 credits for LearnKannada learning",
    packSize: "large",
    value: "best_value"
  },
  1200: {
    credits: 1200,
    priceId: process.env.STRIPE_PRICE_1200_CREDITS,
    productId: process.env.STRIPE_PRODUCT_1200_CREDITS, // Separate product for 1200 credits
    name: "1200 Credits Pack",
            description: "Premium pack - 1200 credits for LearnKannada learning",
    packSize: "xl",
    value: "premium"
  }
}

export async function POST(req: Request) {
  try {
    console.log("🔍 Checkout session request received")
    
    const session = await auth()
    console.log("🔍 Auth session result:", { 
      hasSession: !!session, 
      userId: session?.userId
    })
    
    if (!session?.userId) {
      console.error("❌ Unauthorized: No user session found")
      return new NextResponse("Unauthorized", { status: 401 })
    }

    console.log("✅ Authenticated user:", session.userId)

    const body = await req.json()
    
    // Support both old (priceId) and new (credits) API formats
    let creditPackage
    let priceToUse
    
    if (body.credits) {
      // New format: { credits: 100 }
      const credits = body.credits
      if (!CREDIT_PACKAGES[credits as keyof typeof CREDIT_PACKAGES]) {
        console.error("Invalid credits amount:", credits)
        return new NextResponse(
          `Invalid credits amount. Must be one of: ${Object.keys(CREDIT_PACKAGES).join(', ')}`, 
          { status: 400 }
        )
      }
      
      creditPackage = CREDIT_PACKAGES[credits as keyof typeof CREDIT_PACKAGES]
      
      if (!creditPackage.priceId || !creditPackage.productId) {
        console.error("Missing Stripe configuration for credits:", credits, {
          priceId: creditPackage.priceId,
          productId: creditPackage.productId
        })
        return new NextResponse(
          `Stripe configuration missing for ${credits} credits pack`, 
          { status: 500 }
        )
      }
      
      priceToUse = creditPackage.priceId
      
    } else if (body.priceId) {
      // Old format: { priceId: "price_xxx" } - for backward compatibility
      priceToUse = body.priceId
      
      // Try to match priceId to our credit packages
      creditPackage = Object.values(CREDIT_PACKAGES).find(pkg => pkg.priceId === body.priceId)
      if (!creditPackage) {
        console.warn("PriceId not found in predefined packages, using Stripe metadata")
      }
      
    } else {
      console.error("Missing credits or priceId in request body")
      return new NextResponse("Missing credits or priceId", { status: 400 })
    }

    console.log("🎯 Using credit package configuration:", {
      userId: session.userId,
      credits: creditPackage?.credits,
      priceId: priceToUse,
      productId: creditPackage?.productId,
      productName: creditPackage?.name
    })

    // Verify the price exists in Stripe and get current amount
    const price = await stripe.prices.retrieve(priceToUse, {
      expand: ['product']
    })
    
    if (!price.active) {
      console.error("Inactive price:", priceToUse)
      return new NextResponse("Price is not active", { status: 400 })
    }

    const product = price.product as Stripe.Product
    if (!product.active) {
      console.error("Inactive product:", product.id)
      return new NextResponse("Product is not active", { status: 400 })
    }

    // Get credits amount (from package or Stripe metadata)
    const credits = creditPackage?.credits || parseInt(price.metadata?.credits || "0", 10)
    if (credits === 0) {
      console.error("No credits found in package or Stripe metadata")
      return new NextResponse("Invalid credit configuration", { status: 400 })
    }

    const amount = (price.unit_amount || 0) / 100 // Convert from cents to dollars

    // 🎯 CRITICAL: Use our predefined product ID, not Stripe API product ID
    // This ensures purchases show up under the correct product in Stripe dashboard
    const actualProductId = creditPackage?.productId || product.id
    const actualProductName = creditPackage?.name || product.name

    console.log("✅ Verified Stripe configuration:", {
      priceId: price.id,
      stripeApiProductId: product.id,
      envProductId: creditPackage?.productId,
      actualProductId: actualProductId, // This is what we'll use for attribution
      productName: actualProductName,
      credits,
      amount,
      currency: price.currency,
      productAttribution: creditPackage?.productId ? "USING_ENV_PRODUCT_ID" : "USING_STRIPE_API_PRODUCT_ID"
    })

    // Create enhanced Stripe Checkout Session with detailed logging
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceToUse,
          quantity: 1
        }
      ],
      mode: "payment",
      
      // 🎯 DISABLE INVOICE CREATION to fix product dashboard tracking
      // Invoice creation was interfering with product analytics
      // The checkout session line items will show up directly under the product
      
      // ✅ Better statement descriptor (appears on credit card statements)
      payment_intent_data: {
        statement_descriptor: "LEARNKANNADA CREDITS",
        description: `${credits} credits for LearnKannada learning app`,
        metadata: {
          userId: session.userId,
          credits: credits.toString(),
          purchaseType: "credits",
          productName: actualProductName,
          productId: actualProductId, // 🎯 Use predefined product ID for dashboard attribution
          priceId: priceToUse,
          // 🎯 CRITICAL: Exact Stripe product/price IDs for dashboard attribution
          stripeProductId: actualProductId, // Use our specific product ID
          stripePriceId: price.id,
          appName: "LearnKannada",
          creditPackSize: credits.toString(),
          packSize: creditPackage?.packSize || "unknown",
          packValue: creditPackage?.value || "standard",
          creditTier: credits >= 1000 ? "premium" : credits >= 500 ? "large" : credits >= 200 ? "medium" : "small",
          purchaseDate: new Date().toISOString(),
          // 🔗 Enhanced product attribution for Stripe dashboard
          product_category: "credits",
          product_type: "digital_credits",
          business_unit: "learnkannada",
          product_sku: `${credits}_credits_pack`,
          revenue_category: "digital_products"
        }
      },
      
      // ✅ Enhanced session metadata for Stripe dashboard
      metadata: {
        userId: session.userId,
        credits: credits.toString(),
        purchaseType: "credits",
        productName: actualProductName,
        productId: actualProductId, // 🎯 Use predefined product ID for dashboard attribution
        priceId: priceToUse,
        appName: "LearnKannada",
        creditPackDescription: `${credits} Credits Pack`,
        packSize: creditPackage?.packSize || "unknown",
        packValue: creditPackage?.value || "standard",
        purchaseAmount: amount.toString(),
        currency: price.currency || "USD",
        timestamp: new Date().toISOString(),
        source: "web_checkout",
        // Enhanced analytics tags
        analyticsCategory: "credit_purchase",
        creditTier: credits >= 1000 ? "premium" : credits >= 500 ? "large" : credits >= 200 ? "medium" : "small"
      },
      
      // ✅ Customer reference for better tracking
      client_reference_id: session.userId,
      
      // ✅ Redirect URLs
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/cancel`,
      
      // ✅ Enhanced customer data collection
      billing_address_collection: "auto",
      customer_creation: "always",
      
      // ✅ Additional options for better UX
      allow_promotion_codes: true,
      automatic_tax: {
        enabled: false
      },
      
      // ✅ Custom fields for additional tracking
      custom_fields: [
        {
          key: "intended_use",
          label: {
            type: "custom",
            custom: "How will you use these credits?"
          },
          type: "dropdown",
          dropdown: {
            options: [
              { label: "Learning Kannada", value: "learning" },
              { label: "Quiz practice", value: "quiz" },
              { label: "AI game sessions", value: "games" },
              { label: "General use", value: "general" }
            ]
          },
          optional: true
        }
      ]
    })

    // 🔗 NOW UPDATE SESSION METADATA TO INCLUDE ITS OWN SESSION ID (for invoice tracking)
    try {
      await stripe.checkout.sessions.update(checkoutSession.id, {
        metadata: {
          ...checkoutSession.metadata,
          sessionId: checkoutSession.id, // Add session ID to its own metadata
          sessionCreated: new Date().toISOString()
        }
      })
      console.log("✅ Updated checkout session with its own ID in metadata")
    } catch (updateError) {
      console.error("⚠️ Failed to update session metadata (not critical):", updateError)
      // Continue - this is not critical for payment processing
    }

    console.log("✅ Checkout session created successfully:", {
      sessionId: checkoutSession.id,
      url: checkoutSession.url,
      credits,
      amount,
      productName: actualProductName,
      productId: actualProductId, // 🎯 This will now match your specific product IDs
      priceId: priceToUse,
      stripeProductTracking: "ENABLED",
      sessionIdTracking: "ENABLED",
      productDashboardAttribution: "FIXED", // 🎯 Should now appear under correct products
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
      productName: actualProductName,
      productId: actualProductId, // 🎯 Returns the correct product ID for tracking
      priceId: priceToUse
    })
    
  } catch (error) {
    console.error("❌ Error creating checkout session:", error)

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
