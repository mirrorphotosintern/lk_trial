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
  apiVersion: "2025-02-24.acacia" // Use the expected API version
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
    const { credits, price } = body

    // Validate request data
    if (!credits || !price) {
      console.error("Missing required fields:", { credits, price })
      return new NextResponse("Missing required fields: credits and price", {
        status: 400
      })
    }

    if (typeof credits !== "number" || typeof price !== "number") {
      console.error("Invalid field types:", {
        credits: typeof credits,
        price: typeof price
      })
      return new NextResponse(
        "Invalid field types: credits and price must be numbers",
        { status: 400 }
      )
    }

    if (credits <= 0 || price <= 0) {
      console.error("Invalid values:", { credits, price })
      return new NextResponse(
        "Invalid values: credits and price must be positive",
        { status: 400 }
      )
    }

    console.log("Creating checkout session for:", {
      userId: session.userId,
      credits,
      price,
      priceInCents: Math.round(price * 100)
    })

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${credits.toLocaleString()} Learning Credits`,
              description:
                "Credits for learning Kannada - quizzes, games, and premium features",
              images: [`${process.env.NEXT_PUBLIC_APP_URL}/icon-512x512.png`]
            },
            unit_amount: Math.round(price * 100) // Convert to cents and ensure integer
          },
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/cancel`,
      metadata: {
        userId: session.userId,
        credits: credits.toString(),
        purchaseType: "credits",
        price: price.toString(),
        timestamp: new Date().toISOString()
      },
      billing_address_collection: "auto",
      customer_creation: "always",
      payment_intent_data: {
        metadata: {
          userId: session.userId,
          credits: credits.toString(),
          purchaseType: "credits",
          price: price.toString()
        }
      }
    })

    console.log("Checkout session created successfully:", {
      sessionId: checkoutSession.id,
      url: checkoutSession.url
    })

    return NextResponse.json({
      url: checkoutSession.url,
      sessionId: checkoutSession.id
    })
  } catch (error) {
    console.error("Error creating checkout session:", error)

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
