"use server"

import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { getSurveyResponseAction } from "@/actions/db/survey-actions"
import SurveyContainer from "./_components/survey-container"
import SurveySkeleton from "./_components/survey-skeleton"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SkipForward } from "lucide-react"

/**
 * @description
 * Main survey page for user onboarding. Displays a multi-step survey to collect
 * user preferences, goals, and learning profile information.
 *
 * Key features:
 * - Authentication Required: Redirects non-authenticated users to login
 * - Multi-step Process: Handles 3-step survey flow
 * - Progress Tracking: Tracks completion of each step
 * - Data Persistence: Saves responses throughout the process
 *
 * @dependencies
 * - @clerk/nextjs/server: Authentication
 * - SurveyContainer: Main survey component
 * - survey-actions: Server actions for survey data
 */

export default async function SurveyPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/login")
  }

  return (
    <div className="bg-background min-h-screen">
      <div style={{ height: "950px" }}></div>{" "}
      {/* Custom 250px spacer for fixed header */}
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-foreground mb-4 text-3xl font-bold">
              Welcome to LearnKannada! 🎉
            </h1>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's personalize your learning experience with a quick survey
            </p>

            {/* Skip Survey Button */}
            <div className="flex justify-center">
              <Link href="/learn">
                <Button
                  variant="outline"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <SkipForward className="mr-2 size-4" />
                  Skip Survey for Now
                </Button>
              </Link>
            </div>
          </div>

          <Suspense fallback={<SurveySkeleton />}>
            <SurveyFetcher userId={userId} />
          </Suspense>
        </div>
      </div>
      <div className="h-16"></div> {/* Bottom spacer */}
    </div>
  )
}

async function SurveyFetcher({ userId }: { userId: string }) {
  let existingSurvey = null
  let userEmail = ""

  try {
    // Get user email from Clerk
    const user = await currentUser()
    userEmail = user?.emailAddresses?.[0]?.emailAddress || ""

    const result = await getSurveyResponseAction(userId)
    if (result.isSuccess) {
      existingSurvey = result.data

      // If user has already completed the survey, redirect them to the main app
      if (existingSurvey?.isCompleted) {
        redirect("/learn")
      }
    } else {
      console.warn("Failed to fetch existing survey data:", result.message)
    }
  } catch (error) {
    console.error("Error fetching survey data:", error)
    // Continue with null data - user can start fresh
  }

  return (
    <SurveyContainer
      userId={userId}
      existingData={existingSurvey}
      userEmail={userEmail}
    />
  )
}
