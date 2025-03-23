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
          console.log(`ProfileSync: Syncing profile for user ${user.id}`)
          const result = await syncUserProfileAction()
          
          if (result.isSuccess) {
            console.log("ProfileSync: Profile sync successful")
            setHasSynced(true)
          } else {
            console.error(`ProfileSync: Sync failed - ${result.message}`)
            // Show toast only in development
            if (process.env.NODE_ENV === 'development') {
              toast({
                title: "Profile sync failed",
                description: result.message,
                variant: "destructive"
              })
            }
            
            // Retry after 5 seconds if in development
            if (process.env.NODE_ENV === 'development') {
              setTimeout(() => setHasSynced(false), 5000)
            }
          }
        } catch (error) {
          console.error("ProfileSync: Error syncing profile:", error)
          // Try again after 5 seconds if in development
          if (process.env.NODE_ENV === 'development') {
            setTimeout(() => setHasSynced(false), 5000)
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