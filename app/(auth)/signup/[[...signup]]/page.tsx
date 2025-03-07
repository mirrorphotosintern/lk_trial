/**
 * @description
 * This is the signup page for KannadaKali, utilizing Clerk's SignUp component.
 * It allows new users to register for the app securely and easily.
 *
 * Key features:
 * - Clerk Integration: Uses Clerk’s SignUp component for registration UI.
 * - Responsive Design: Centered layout adaptable to all screen sizes.
 *
 * @dependencies
 * - @clerk/nextjs: Provides the SignUp component for authentication UI.
 *
 * @notes
 * - The [[...signup]] syntax captures all sub-routes for Clerk’s signup flow.
 * - Styled to match the login page for visual consistency.
 * - Clerk handles all signup logic, so no additional server-side code is needed.
 */

"use server"

import { SignUp } from "@clerk/nextjs"

export default async function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignUp
        routing="path"
        path="/signup"
        signInUrl="/login"
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