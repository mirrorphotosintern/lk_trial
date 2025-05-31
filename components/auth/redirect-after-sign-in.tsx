"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@clerk/nextjs"

export function RedirectAfterSignIn() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      const redirectPath = sessionStorage.getItem("redirectAfterSignIn")
      if (redirectPath) {
        sessionStorage.removeItem("redirectAfterSignIn")
        router.push(redirectPath)
      }
    }
  }, [isSignedIn, router])

  return null
}
