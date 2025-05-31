"use client"

import { SignIn } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"

export default function SignInPage() {
  const searchParams = useSearchParams()
  const returnBackUrl = searchParams.get("returnBackUrl")

  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-accent hover:bg-accent/90",
            footerActionLink: "text-accent hover:text-accent/90"
          }
        }}
        redirectUrl={returnBackUrl || "/"}
      />
    </div>
  )
}
