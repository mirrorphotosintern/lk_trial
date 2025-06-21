"use server"

import { auth, currentUser } from "@clerk/nextjs/server"
import { syncUserProfileWithDataAction } from "@/actions/db/profiles-actions"
import { ActionState } from "@/types"

/**
 * Syncs the current user's profile from Clerk to the leaderboard
 * Call this when a user signs in or updates their profile
 */
export async function syncCurrentUserProfileAction(): Promise<ActionState<void>> {
  try {
    // Get authenticated user
    const session = await auth()
    if (!session.userId) {
      return {
        isSuccess: false,
        message: "Unauthorized"
      }
    }

    // Get current user details from Clerk
    const user = await currentUser()
    if (!user) {
      return {
        isSuccess: false,
        message: "User not found"
      }
    }

    // Extract user details
    const userId = user.id
    
    // Create display name from user data
    let displayName: string
    if (user.firstName && user.lastName) {
      displayName = `${user.firstName} ${user.lastName}`.trim()
    } else if (user.firstName) {
      displayName = user.firstName
    } else if (user.emailAddresses && user.emailAddresses.length > 0) {
      displayName = user.emailAddresses[0].emailAddress.split('@')[0]
    } else {
      displayName = `User ${userId.substring(0, 6)}`
    }
    
    // Get profile image URL and email
    const profileImageUrl = user.imageUrl
    const email = user.emailAddresses.length > 0 ? user.emailAddresses[0].emailAddress : undefined

    // Update profile in the database
    const result = await syncUserProfileWithDataAction({
      userId,
      displayName,
      profileImageUrl: profileImageUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${userId}`,
      email
    })
    
    return {
      isSuccess: result.isSuccess,
      message: result.message,
      data: undefined
    }

  } catch (error) {
    console.error("Error syncing user profile:", error)
    return {
      isSuccess: false,
      message: "Failed to sync user profile"
    }
  }
} 