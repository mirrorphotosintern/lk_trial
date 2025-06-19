/*
Database actions for handling payment records.
Stores comprehensive payment information when webhooks process successful transactions.
*/

"use server"

import { db } from "@/db/db"
import { paymentsTable, InsertPayment, SelectPayment } from "@/db/schema/payments-schema"
import { ActionState } from "@/types"
import { eq, desc, and, gte } from "drizzle-orm"

// Create a payment record when purchase is completed
export async function createPaymentAction(
  payment: InsertPayment
): Promise<ActionState<SelectPayment>> {
  try {
    console.log("💳 Creating payment record:", {
      id: payment.id,
      userId: payment.userId,
      credits: payment.credits,
      amount: payment.amountPaid,
      currency: payment.currency,
      email: payment.email,
      stripeSessionId: payment.stripeSessionId,
      stripePaymentIntentId: payment.stripePaymentIntentId,
      stripeCustomerId: payment.stripeCustomerId
    })

    const [newPayment] = await db.insert(paymentsTable).values(payment).returning()
    
    console.log(`✅ Payment successfully recorded in database:`, {
      paymentId: newPayment.id,
      userId: newPayment.userId,
      credits: newPayment.credits,
      amountPaid: newPayment.amountPaid,
      currency: newPayment.currency,
      status: newPayment.status,
      email: newPayment.email,
      customerName: newPayment.name,
      stripeSessionId: newPayment.stripeSessionId,
      stripePaymentIntentId: newPayment.stripePaymentIntentId,
      stripeCustomerId: newPayment.stripeCustomerId,
      createdAt: newPayment.createdAt
    })
    
    return {
      isSuccess: true,
      message: "Payment recorded successfully in Supabase",
      data: newPayment
    }
  } catch (error) {
    console.error("❌ Error recording payment in database:", error)
    console.error("Payment data that failed:", payment)
    return { 
      isSuccess: false, 
      message: `Failed to record payment: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }
  }
}

// Get user's payment history with detailed information
export async function getUserPaymentsAction(
  userId: string
): Promise<ActionState<SelectPayment[]>> {
  try {
    const payments = await db.query.payments.findMany({
      where: eq(paymentsTable.userId, userId),
      orderBy: desc(paymentsTable.createdAt)
    })
    
    console.log(`📊 Retrieved ${payments.length} payment records for user ${userId}`)
    
    return {
      isSuccess: true,
      message: `Retrieved ${payments.length} payment records`,
      data: payments
    }
  } catch (error) {
    console.error("❌ Error getting payment history:", error)
    return { isSuccess: false, message: "Failed to get payment history" }
  }
}

// Get recent payments for admin/monitoring purposes
export async function getRecentPaymentsAction(
  limit: number = 10
): Promise<ActionState<SelectPayment[]>> {
  try {
    const payments = await db.query.payments.findMany({
      orderBy: desc(paymentsTable.createdAt),
      limit
    })
    
    console.log(`📊 Retrieved ${payments.length} recent payments`)
    
    return {
      isSuccess: true,
      message: `Retrieved ${payments.length} recent payments`,
      data: payments
    }
  } catch (error) {
    console.error("❌ Error getting recent payments:", error)
    return { isSuccess: false, message: "Failed to get recent payments" }
  }
}

// Get payments by Stripe session ID (for verification)
export async function getPaymentBySessionIdAction(
  sessionId: string
): Promise<ActionState<SelectPayment | null>> {
  try {
    const payment = await db.query.payments.findFirst({
      where: eq(paymentsTable.stripeSessionId, sessionId)
    })
    
    if (payment) {
      console.log(`💳 Found payment record for session ${sessionId}:`, {
        paymentId: payment.id,
        userId: payment.userId,
        credits: payment.credits,
        amount: payment.amountPaid,
        status: payment.status
      })
    } else {
      console.log(`⚠️ No payment record found for session ${sessionId}`)
    }
    
    return {
      isSuccess: true,
      message: payment ? "Payment found" : "Payment not found",
      data: payment || null
    }
  } catch (error) {
    console.error("❌ Error finding payment by session ID:", error)
    return { isSuccess: false, message: "Failed to find payment" }
  }
}

// Get total credits purchased by user
export async function getUserTotalCreditsAction(
  userId: string
): Promise<ActionState<{ totalCredits: number; totalSpent: number; paymentCount: number }>> {
  try {
    const payments = await db.query.payments.findMany({
      where: and(
        eq(paymentsTable.userId, userId),
        eq(paymentsTable.status, "completed")
      )
    })
    
    const totalCredits = payments.reduce((sum, payment) => sum + payment.credits, 0)
    const totalSpent = payments.reduce((sum, payment) => sum + parseFloat(payment.amountPaid), 0)
    const paymentCount = payments.length
    
    console.log(`📊 User ${userId} totals:`, {
      totalCredits,
      totalSpent,
      paymentCount
    })
    
    return {
      isSuccess: true,
      message: "User payment totals calculated",
      data: { totalCredits, totalSpent, paymentCount }
    }
  } catch (error) {
    console.error("❌ Error calculating user totals:", error)
    return { isSuccess: false, message: "Failed to calculate totals" }
  }
}

// Update payment status (for refunds, etc.)
export async function updatePaymentStatusAction(
  paymentId: string,
  status: "pending" | "completed" | "failed" | "refunded"
): Promise<ActionState<SelectPayment>> {
  try {
    const [updatedPayment] = await db
      .update(paymentsTable)
      .set({ 
        status,
        updatedAt: new Date()
      })
      .where(eq(paymentsTable.id, paymentId))
      .returning()
    
    console.log(`💳 Payment status updated:`, {
      paymentId: updatedPayment.id,
      newStatus: updatedPayment.status,
      userId: updatedPayment.userId
    })
    
    return {
      isSuccess: true,
      message: `Payment status updated to ${status}`,
      data: updatedPayment
    }
  } catch (error) {
    console.error("❌ Error updating payment status:", error)
    return { isSuccess: false, message: "Failed to update payment status" }
  }
} 