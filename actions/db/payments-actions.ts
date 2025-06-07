"use server"

import { db } from "@/db/db"
import { paymentsTable, InsertPayment, SelectPayment } from "@/db/schema/payments-schema"
import { ActionState } from "@/types"
import { eq } from "drizzle-orm"
import { getStripe } from "@/lib/stripe"
import { addCreditsAction } from "@/actions/db/credits-actions"

// Create a payment record when purchase is completed
export async function createPaymentAction(
  payment: InsertPayment
): Promise<ActionState<SelectPayment>> {
  try {
    const [newPayment] = await db.insert(paymentsTable).values(payment).returning()
    
    console.log(`💳 Payment recorded: ${newPayment.credits} credits for $${newPayment.amountPaid}`)
    
    return {
      isSuccess: true,
      message: "Payment recorded successfully",
      data: newPayment
    }
  } catch (error) {
    console.error("Error recording payment:", error)
    return { isSuccess: false, message: "Failed to record payment" }
  }
}

// Get user's payment history  
export async function getUserPaymentsAction(
  userId: string
): Promise<ActionState<SelectPayment[]>> {
  try {
    const payments = await db.query.payments.findMany({
      where: eq(paymentsTable.userId, userId)
    })
    
    return {
      isSuccess: true,
      message: "Payment history retrieved",
      data: payments
    }
  } catch (error) {
    console.error("Error getting payments:", error)
    return { isSuccess: false, message: "Failed to get payment history" }
  }
}

// Process payment from Stripe session - works in both development and production
export async function processPaymentFromSession(
  sessionId: string,
  userId: string
): Promise<ActionState<SelectPayment | null>> {
  try {
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    
    if (session.mode !== "payment" || session.payment_status !== "paid") {
      return { isSuccess: false, message: "Session not ready for processing" }
    }

    const creditsFromMeta = session.metadata?.credits
    const sessionUserId = session.metadata?.userId

    if (!creditsFromMeta || sessionUserId !== userId) {
      return { isSuccess: false, message: "Invalid session metadata" }
    }

    const credits = parseInt(creditsFromMeta)
    const amountPaid = (session.amount_total || 0) / 100

    const paymentResult = await createPaymentAction({
      id: session.id,
      userId,
      stripeSessionId: session.id,
      stripePaymentIntentId: session.payment_intent as string,
      stripeCustomerId: session.customer as string,
      credits,
      amountPaid: amountPaid.toString(),
      currency: session.currency || "usd",
      status: "completed",
      metadata: JSON.stringify({ purchaseType: "credits", source: "auto-process" })
    })

    if (paymentResult.isSuccess) {
      await addCreditsAction(userId, credits)
      return { isSuccess: true, message: "Payment processed successfully", data: paymentResult.data }
    }

    return { isSuccess: true, message: "Payment already processed", data: null }
  } catch (error) {
    console.error("Error processing payment:", error)
    return { isSuccess: false, message: "Failed to process payment" }
  }
} 