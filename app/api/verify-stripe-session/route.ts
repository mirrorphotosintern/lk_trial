import { getStripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json(
      { error: "Missing session_id" },
      { status: 400 }
    );
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      return NextResponse.json({
        paid: true,
        email: session.customer_details?.email,
        amount: session.amount_total,
        currency: session.currency
      });
    } else {
      return NextResponse.json({ paid: false }, { status: 402 });
    }
  } catch (error) {
    console.error("Stripe session verification failed:", error);
    return NextResponse.json(
      { error: "Failed to verify payment session" },
      { status: 500 }
    );
  }
}

