"use server"

import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"
import { syncUserProfileAction } from "@/actions/db/profiles-actions"

/**
 * API endpoint to sync user profiles with the leaderboard
 * Accepts either a full Clerk user object or simplified user profile data
 */
export async function POST(req: NextRequest) {
  try {
    console.log("🔍 Profile sync request received")
    console.log("🔍 Request headers:", Object.fromEntries(req.headers.entries()))
    
    // Verify the request is authorized
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
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    console.log("✅ Authenticated user:", session.userId)

    // Sync user profile using the server action
    const result = await syncUserProfileAction()

    if (!result.isSuccess) {
      console.error("❌ Profile sync failed:", result.message)
      return NextResponse.json({ error: result.message }, { status: 500 })
    }

    console.log("✅ Profile synced successfully")
    return NextResponse.json({
      success: true,
      message: "Profile synced successfully",
      profile: result.data
    })
  } catch (error) {
    console.error("❌ Profile sync error:", error)
    return NextResponse.json(
      { error: "Failed to sync profiles" },
      { status: 500 }
    )
  }
}
