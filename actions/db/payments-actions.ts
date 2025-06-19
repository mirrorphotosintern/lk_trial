/*
Database actions for handling payment records.
Stores payment information when webhooks process successful transactions.
*/

"use server"

import { db } from "@/db/db"
import { paymentsTable, InsertPayment, SelectPayment } from "@/db/schema/payments-schema"
import { ActionState } from "@/types"
import { eq } from "drizzle-orm"

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