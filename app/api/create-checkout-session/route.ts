import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia"
})

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { credits, price } = await req.json()

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${credits} Learning Credits`,
              description: "Credits for learning and quizzes"
            },
            unit_amount: price * 100 // Convert to cents
          },
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/cancel`,
      metadata: {
        userId: session.userId,
        credits
      }
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
