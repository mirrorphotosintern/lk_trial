"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth, useUser } from "@clerk/nextjs"
import { getSurveyResponseAction } from "@/actions/db/survey-actions"

export function RedirectAfterSignIn() {
  const { isSignedIn } = useAuth()
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    const handleRedirect = async () => {
      if (!isSignedIn || !isLoaded || !user || hasChecked) return

      try {
        console.log("Checking survey status for user:", user.id)

        // Check current path to avoid redirect loops
        const currentPath = window.location.pathname
        if (currentPath === "/survey") {
          setHasChecked(true)
          return
        }

        // Handle existing redirect path first (if any)
        const redirectPath = sessionStorage.getItem("redirectAfterSignIn")
        if (redirectPath) {
          sessionStorage.removeItem("redirectAfterSignIn")
          router.push(redirectPath)
          setHasChecked(true)
          return
        }

        // Check if user has completed the survey
        const result = await getSurveyResponseAction(user.id)

        // If survey check failed due to database issues (table doesn't exist),
        // assume user needs to take survey
        if (!result.isSuccess) {
          console.warn(
            "Survey check failed, redirecting to survey:",
            result.message
          )

          // If it's a "table not found" error, definitely redirect to survey
          if (
            result.message.includes("table not found") ||
            result.message.includes("does not exist")
          ) {
            console.log(
              "Database table missing - redirecting new user to survey"
            )
            router.push("/survey")
            setHasChecked(true)
            return
          }

          // For other errors, still redirect to survey to be safe
          console.log("Other database error - redirecting to survey to be safe")
          router.push("/survey")
          setHasChecked(true)
          return
        }

        // For users who haven't completed the survey, redirect them
        if (!result.data || !result.data.isCompleted) {
          console.log("User hasn't completed survey, redirecting to /survey")
          router.push("/survey")
        } else {
          console.log("User has completed survey, no redirect needed")
        }

        setHasChecked(true)
      } catch (error) {
        console.error("Error checking survey status:", error)
        // On any error, redirect to survey to be safe for new users
        console.log("Caught error - redirecting to survey as fallback")
        router.push("/survey")
        setHasChecked(true)
      }
    }

    // Add a small delay to ensure auth state is stable
    const timer = setTimeout(() => {
      handleRedirect()
    }, 100)

    return () => clearTimeout(timer)
  }, [isSignedIn, isLoaded, user, router, hasChecked])

  return null
}
