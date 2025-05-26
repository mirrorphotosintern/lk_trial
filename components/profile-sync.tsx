"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { syncUserProfileAction } from "@/actions/db/profiles-actions"

// Debug flag - set to true to see sync attempts even in development
const DEBUG_SYNC = false

export function ProfileSync() {
  const { isSignedIn, isLoaded, user } = useUser()
  const [hasSynced, setHasSynced] = useState(false)

  useEffect(() => {
    // Skip sync entirely in development mode unless debugging
    if (process.env.NODE_ENV === "development" && !DEBUG_SYNC) {
      if (!hasSynced) {
        console.log("[ProfileSync] Disabled in development mode")
        setHasSynced(true) // Prevent future sync attempts
      }
      return
    }

    async function syncProfile() {
      if (isSignedIn && !hasSynced && user) {
        try {
          const result = await syncUserProfileAction()

          if (result.isSuccess) {
            setHasSynced(true)
            if (DEBUG_SYNC) {
              console.log("[ProfileSync] Success:", result.message)
            }
          } else {
            console.warn("[ProfileSync] Warning:", result.message)
          }
        } catch (error) {
          console.error(
            "[ProfileSync] Error:",
            error instanceof Error ? error.message : String(error)
          )
        }
      }
    }

    if (isLoaded) {
      syncProfile()
    }
  }, [isSignedIn, isLoaded, hasSynced, user])

  // This component doesn't render anything
  return null
}
