/**
 * @description
 * This is the signup page for KannadaKali, utilizing Clerk's SignUp component.
 * It allows new users to register for the app securely and easily.
 *
 * Key features:
 * - Clerk Integration: Uses Clerk's SignUp component for registration UI.
 * - Responsive Design: Centered layout adaptable to all screen sizes.
 * - Survey Redirect: New users are redirected to the survey after signup.
 *
 * @dependencies
 * - @clerk/nextjs: Provides the SignUp component for authentication UI.
 *
 * @notes
 * - The [[...signup]] syntax captures all sub-routes for Clerk's signup flow.
 * - Styled to match the login page for visual consistency.
 * - Clerk handles all signup logic, so no additional server-side code is needed.
 */

"use client"

import { SignUp } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"

export default function SignUpPage() {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirect_url")

  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <SignUp
        routing="path"
        path="/signup"
        signInUrl="/login"
        redirectUrl={redirectUrl || "/survey"}
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
