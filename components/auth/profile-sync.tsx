"use client"

import { useEffect } from "react"
import { useUser, useAuth } from "@clerk/nextjs"
import { syncCurrentUserProfileAction } from "@/actions/auth/sync-clerk-user"

/**
 * This component automatically syncs the user's profile to the leaderboard
 * Place it in a layout that's loaded after authentication
 */
export function ProfileSync() {
  const { isLoaded, userId } = useAuth()
  const { user } = useUser()

  useEffect(() => {
    // Only attempt to sync if the user is loaded and authenticated
    if (isLoaded && userId && user) {
      const syncProfile = async () => {
        try {
          const result = await syncCurrentUserProfileAction()
          if (!result.isSuccess) {
            console.warn("Profile sync warning:", result.message)
          }
        } catch (error) {
          console.error("Profile sync error:", error)
        }
      }

      // Sync when component mounts
      syncProfile()
    }
  }, [isLoaded, userId, user])

  // This is a utility component that doesn't render anything
  return null
}
