"use client"

import { syncUserProfileAction } from "@/actions/db/profiles-actions"
import { useUser } from "@clerk/nextjs"
import { useEffect } from "react"

/**
 * Component that automatically syncs the user profile when they sign in.
 * This syncs on every sign-in to ensure the profile is always up to date.
 */
export default function ProfileSync() {
  const { isSignedIn, isLoaded, user } = useUser()

  useEffect(() => {
    const syncProfile = async () => {
      if (isSignedIn && user) {
        try {
          console.log("Syncing user profile for", user.id)
          const result = await syncUserProfileAction()
          
          if (result.isSuccess) {
            console.log("Profile synced successfully")
          } else {
            console.error("Profile sync failed:", result.message)
            // Retry once after a short delay
            setTimeout(async () => {
              console.log("Retrying profile sync...")
              await syncUserProfileAction()
            }, 2000)
          }
        } catch (error) {
          console.error("Error syncing profile:", error)
        }
      }
    }

    if (isLoaded) {
      syncProfile()
    }
    
    // Also set up a sync on page focus to handle returning users
    const handleFocus = () => {
      if (isSignedIn && user) {
        syncProfile()
      }
    }
    
    window.addEventListener('focus', handleFocus)
    
    return () => {
      window.removeEventListener('focus', handleFocus)
    }
  }, [isSignedIn, isLoaded, user])

  // This component doesn't render anything visible
  return null
} 