"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { syncUserProfileAction } from "@/actions/db/profiles-actions"
import { toast } from "@/components/ui/use-toast"

export function ProfileSync() {
  const { isSignedIn, isLoaded, user } = useUser()
  const [hasSynced, setHasSynced] = useState(false)
  const [isSyncing, setIsSyncing] = useState(false)

  useEffect(() => {
    async function syncProfile() {
      if (isSignedIn && !hasSynced && !isSyncing && user) {
        try {
          setIsSyncing(true)
          console.log(`ProfileSync: Syncing profile for user ${user.id}`, {
            email: user.emailAddresses?.[0]?.emailAddress,
            name: user.fullName
          })

          const result = await syncUserProfileAction()

          if (result.isSuccess) {
            console.log("ProfileSync: Profile sync successful", result.data)
            setHasSynced(true)
          } else {
            console.error(`ProfileSync: Sync failed - ${result.message}`)
            // Show toast only in development
            if (process.env.NODE_ENV === "development") {
              toast({
                title: "Profile sync failed",
                description: result.message,
                variant: "destructive"
              })
            }

            // Retry after 30 seconds if in development
            if (process.env.NODE_ENV === "development") {
              setTimeout(() => setHasSynced(false), 30000)
            }
          }
        } catch (error) {
          console.error(
            "ProfileSync: Error syncing profile:",
            error instanceof Error ? error.message : String(error)
          )
          // Log error details for debugging
          if (error instanceof Error && error.stack) {
            console.error("Stack trace:", error.stack)
          }

          // Try again after 30 seconds if in development
          if (process.env.NODE_ENV === "development") {
            setTimeout(() => setHasSynced(false), 30000)
          }

          // Show detailed error in development
          if (process.env.NODE_ENV === "development") {
            toast({
              title: "Profile sync error",
              description:
                error instanceof Error ? error.message : String(error),
              variant: "destructive"
            })
          }
        } finally {
          setIsSyncing(false)
        }
      }
    }

    if (isLoaded) {
      syncProfile()
    }
  }, [isSignedIn, isLoaded, hasSynced, isSyncing, user])

  // This component doesn't render anything
  return null
}
