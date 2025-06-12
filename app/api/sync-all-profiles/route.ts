"use server"

import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"
import { syncUserProfileWithDataAction } from "@/actions/db/profiles-actions"
import { User } from "@clerk/nextjs/server"

interface SyncResult {
  userId: string
  success: boolean
  message: string
}

export async function POST(req: NextRequest) {
  try {
    // Verify the request is authorized
    const session = await auth()
    if (!session?.userId || !session.sessionClaims?.admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get all users from Clerk using the REST API
    const response = await fetch("https://api.clerk.dev/v1/users", {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        "Content-Type": "application/json"
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`)
    }

    const { users } = await response.json()
    console.log(`Found ${users.length} users in Clerk`)

    // Sync each user's profile
    const results = await Promise.all(
      users.map(async (user: User) => {
        const displayName =
          user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.firstName ||
              user.emailAddresses[0]?.emailAddress?.split("@")[0] ||
              `User ${user.id.substring(0, 6)}`

        const result = await syncUserProfileWithDataAction({
          userId: user.id,
          displayName,
          email: user.emailAddresses[0]?.emailAddress,
          profileImageUrl: user.imageUrl
        })

        return {
          userId: user.id,
          success: result.isSuccess,
          message: result.message
        } as SyncResult
      })
    )

    const successful = results.filter((r: SyncResult) => r.success).length
    const failed = results.filter((r: SyncResult) => !r.success).length

    return NextResponse.json({
      success: true,
      message: `Synced ${successful} profiles successfully, ${failed} failed`,
      results
    })
  } catch (error) {
    console.error("Profile sync error:", error)
    return NextResponse.json(
      { error: "Failed to sync profiles" },
      { status: 500 }
    )
  }
}
