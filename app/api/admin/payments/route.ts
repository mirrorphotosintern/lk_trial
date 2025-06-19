/*
Admin API endpoint to view recent payments for monitoring and debugging.
Only accessible in development or by admin users.
*/

import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { getRecentPaymentsAction } from "@/actions/db/payments-actions"

export async function GET(req: Request) {
  try {
    // Only allow in development or for admin users
    const session = await auth()
    const isDevelopment = process.env.NODE_ENV === "development"
    
    if (!isDevelopment && (!session?.userId || session.userId !== process.env.ADMIN_USER_ID)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { searchParams } = new URL(req.url)
    const limit = parseInt(searchParams.get('limit') || '10')

    const paymentsResult = await getRecentPaymentsAction(limit)

    if (!paymentsResult.isSuccess) {
      return NextResponse.json({ error: paymentsResult.message }, { status: 500 })
    }

    const payments = paymentsResult.data.map(payment => ({
      id: payment.id,
      userId: payment.userId,
      credits: payment.credits,
      amountPaid: payment.amountPaid,
      currency: payment.currency,
      email: payment.email,
      name: payment.name,
      status: payment.status,
      stripeSessionId: payment.stripeSessionId,
      stripePaymentIntentId: payment.stripePaymentIntentId,
      stripeCustomerId: payment.stripeCustomerId,
      createdAt: payment.createdAt,
      updatedAt: payment.updatedAt,
      // Parse metadata for display
      metadata: payment.metadata ? JSON.parse(payment.metadata) : null
    }))

    return NextResponse.json({
      success: true,
      count: payments.length,
      payments,
      summary: {
        totalCredits: payments.reduce((sum, p) => sum + p.credits, 0),
        totalRevenue: payments.reduce((sum, p) => sum + parseFloat(p.amountPaid), 0),
        completedPayments: payments.filter(p => p.status === 'completed').length
      }
    })
  } catch (error) {
    console.error("Error fetching payments:", error)
    return NextResponse.json(
      { error: "Failed to fetch payments" },
      { status: 500 }
    )
  }
} 