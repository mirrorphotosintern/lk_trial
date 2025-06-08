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
        // Check if user has completed the survey
        const { data: surveyResponse } = await getSurveyResponseAction(user.id)

        // Handle existing redirect path first
        const redirectPath = sessionStorage.getItem("redirectAfterSignIn")
        if (redirectPath) {
          sessionStorage.removeItem("redirectAfterSignIn")
          router.push(redirectPath)
          setHasChecked(true)
          return
        }

        // For new users or users who haven't completed the survey
        if (!surveyResponse?.isCompleted) {
          // Only redirect to survey if we're on the home page or a sign-in related page
          const currentPath = window.location.pathname
          if (
            currentPath === "/" ||
            currentPath.includes("/sign") ||
            currentPath.includes("/login")
          ) {
            router.push("/survey")
          }
        }

        setHasChecked(true)
      } catch (error) {
        console.error("Error checking survey status:", error)
        setHasChecked(true)
      }
    }

    handleRedirect()
  }, [isSignedIn, isLoaded, user, router, hasChecked])

  return null
}
