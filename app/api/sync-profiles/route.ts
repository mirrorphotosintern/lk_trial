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
    // Verify the request is authorized
    const session = await auth()
    if (!session?.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Sync user profile using the server action
    const result = await syncUserProfileAction()

    if (!result.isSuccess) {
      return NextResponse.json({ error: result.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Profile synced successfully",
      profile: result.data
    })
  } catch (error) {
    console.error("Profile sync error:", error)
    return NextResponse.json(
      { error: "Failed to sync profiles" },
      { status: 500 }
    )
  }
}
