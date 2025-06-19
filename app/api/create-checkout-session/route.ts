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

// Credit packages with pricing (will create checkout sessions, not use Payment Links)
const CREDIT_PACKAGES = {
  100: {
    credits: 100,
    amount: 4.99,
    name: "100 Learning Credits",
    description: "Perfect for trying out quizzes and games"
  },
  300: {
    credits: 300,
    amount: 12.99,
    name: "300 Learning Credits",
    description: "Great value for regular learners"
  },
  600: {
    credits: 600,
    amount: 22.99,
    name: "600 Learning Credits", 
    description: "Best for dedicated students"
  },
  1200: {
    credits: 1200,
    amount: 39.99,
    name: "1200 Learning Credits",
    description: "Maximum value pack for serious learners"
  }
} as const

type CreditAmount = keyof typeof CREDIT_PACKAGES

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
    const { credits } = body

    // Validate that credits is a valid package
    if (!credits || !(credits in CREDIT_PACKAGES)) {
      const validCredits = Object.keys(CREDIT_PACKAGES).join(', ')
      console.error("Invalid credit package:", { credits, validCredits })
      return new NextResponse(
        `Invalid credit package. Valid options: ${validCredits}`,
        { status: 400 }
      )
    }

    const creditPackage = CREDIT_PACKAGES[credits as CreditAmount]

    console.log("Creating checkout session for:", {
      userId: session.userId,
      credits: creditPackage.credits,
      amount: creditPackage.amount,
      packageName: creditPackage.name
    })

    // Create Stripe Checkout Session (not Payment Link) for proper redirect control
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: creditPackage.name,
              description: creditPackage.description,
              images: [`${process.env.NEXT_PUBLIC_APP_URL}/icon-512x512.png`]
            },
            unit_amount: Math.round(creditPackage.amount * 100) // Convert to cents
          },
          quantity: 1
        }
      ],
      mode: "payment",
      // ✅ Redirect to YOUR website after payment
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/cancel`,
      metadata: {
        userId: session.userId,
        credits: creditPackage.credits.toString(),
        purchaseType: "credits",
        price: creditPackage.amount.toString(),
        timestamp: new Date().toISOString()
      },
      billing_address_collection: "auto",
      customer_creation: "always",
      payment_intent_data: {
        metadata: {
          userId: session.userId,
          credits: creditPackage.credits.toString(),
          purchaseType: "credits",
          price: creditPackage.amount.toString()
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
      credits: creditPackage.credits,
      amount: creditPackage.amount,
      willRedirectTo: {
        success: `${process.env.NEXT_PUBLIC_APP_URL}/credits/success`,
        cancel: `${process.env.NEXT_PUBLIC_APP_URL}/credits/cancel`
      }
    })

    return NextResponse.json({
      url: checkoutSession.url,
      sessionId: checkoutSession.id,
      credits: creditPackage.credits,
      amount: creditPackage.amount
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
