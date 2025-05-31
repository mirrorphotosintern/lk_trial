/**
 * @description
 * This is the login page for KannadaKali, utilizing Clerk's SignIn component.
 * It provides a secure and user-friendly authentication interface for users to log in.
 *
 * Key features:
 * - Clerk Integration: Uses Clerk's SignIn component for authentication.
 * - Responsive Design: Centered layout adaptable to all screen sizes.
 *
 * @dependencies
 * - @clerk/nextjs: Provides the SignIn component for authentication UI.
 *
 * @notes
 * - The [[...login]] syntax captures all sub-routes for Clerk's auth flow (e.g., SSO, redirects).
 * - No additional logic is needed as Clerk handles the authentication process.
 * - Styled minimally to align with the app's aesthetic and minimalistic design goal.
 */

"use client"

import { SignIn } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirect_url")

  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <SignIn
        routing="path"
        path="/login"
        signUpUrl="/signup"
        redirectUrl={redirectUrl || "/"}
        appearance={{
          elements: {
            formButtonPrimary: "bg-accent text-white hover:bg-accent/90",
            card: "shadow-sm rounded-lg"
          }
        }}
      />
    </div>
  )
}
