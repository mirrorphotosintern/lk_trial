/*
API endpoint for game reward credits (learning activities).
This is separate from payment credits which only go through webhooks.
*/

import { NextResponse } from "next/server"
import { addCreditsAction } from "@/actions/db/credits-actions"
import { auth } from "@clerk/nextjs/server"

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { userId, amount } = await req.json()
    
    // Verify the authenticated user matches the request
    if (userId !== session.userId) {
      console.error("🚨 Mismatched user ID in credit increment:", {
        sessionUserId: session.userId,
        requestUserId: userId
      })
      return new NextResponse("Forbidden", { status: 403 })
    }

    if (!userId || !amount) {
      return new NextResponse("Missing userId or amount", { status: 400 })
    }

    // Validate reasonable game reward amounts (prevent abuse)
    if (amount < 1 || amount > 10) {
      console.error("🚨 Suspicious credit increment amount:", {
        userId,
        amount,
        timestamp: new Date().toISOString()
      })
      return new NextResponse("Invalid amount", { status: 400 })
    }

    console.log("🎮 Game reward credit increment:", {
      userId,
      amount,
      type: "learning_reward",
      timestamp: new Date().toISOString()
    })

    const result = await addCreditsAction(userId, amount)

    if (!result.isSuccess) {
      console.error("❌ Failed to add game reward credits:", {
        userId,
        amount,
        error: result.message
      })
      return new NextResponse(result.message, { status: 500 })
    }

    console.log("✅ Game reward credits added successfully:", {
      userId,
      creditsAdded: amount,
      newBalance: result.data
    })

    return NextResponse.json({ 
      success: true, 
      credits: result.data,
      type: "game_reward"
    })
  } catch (error) {
    console.error("❌ Game credit increment API error:", error)
    return new NextResponse("Server error", { status: 500 })
  }
} 