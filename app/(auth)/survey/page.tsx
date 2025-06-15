import { auth } from "@clerk/nextjs/server"
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
  console.log("SurveyPage: Starting page load")

  // Handle authentication first (outside of try-catch to allow redirects)
  const { userId } = await auth()
  console.log("SurveyPage: Got userId:", userId ? "present" : "null")

  if (!userId) {
    console.log("SurveyPage: No userId, redirecting to login")
    redirect("/login")
  }

  // Initialize with empty values to avoid currentUser() issues
  let existingSurvey = null
  let userEmail = "" // We'll get this in the SurveyContainer instead

  console.log("SurveyPage: Calling getSurveyResponseAction")

  try {
    const result = await getSurveyResponseAction(userId)
    console.log(
      "SurveyPage: getSurveyResponseAction result:",
      result.isSuccess ? "success" : "failed"
    )

    if (result.isSuccess) {
      existingSurvey = result.data
      console.log(
        "SurveyPage: Existing survey:",
        existingSurvey ? "found" : "none"
      )

      // If user has already completed the survey, redirect them to the main app
      if (existingSurvey?.isCompleted) {
        console.log("SurveyPage: Survey completed, redirecting to /learn")
        redirect("/learn")
      }
    } else {
      console.warn("Failed to fetch existing survey data:", result.message)
      // Continue with null data - user can start fresh
    }
  } catch (error) {
    // Check if this is a redirect error (which should be allowed to bubble up)
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      typeof error.digest === "string" &&
      error.digest.includes("NEXT_REDIRECT")
    ) {
      throw error // Re-throw redirect errors
    }

    console.error("Database error:", error)
    // Continue with null data - user can start fresh
  }

  console.log("SurveyPage: Rendering survey page")

  try {
    return (
      <div className="bg-background min-h-screen">
        <div className="pt-20">
          {" "}
          {/* Proper spacing for fixed header */}
          <div className="container mx-auto px-4 py-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <h1 className="text-foreground mb-4 text-3xl font-bold">
                  Welcome to LearnKannada! 🎉
                </h1>
                <p className="text-muted-foreground mb-6 text-lg">
                  Help us personalize your learning experience with a quick
                  survey
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
                <SurveyFetcher
                  userId={userId}
                  existingData={existingSurvey}
                  userEmail={userEmail}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("SurveyPage: Critical error in page render:", error)
    // Return a basic error page for rendering errors
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Survey Unavailable</h1>
          <p className="text-muted-foreground mb-4">
            There was an error loading the survey. You can continue to the
            learning section.
          </p>
          <Link href="/learn">
            <Button>Go to Learn</Button>
          </Link>
        </div>
      </div>
    )
  }
}

async function SurveyFetcher({
  userId,
  existingData,
  userEmail
}: {
  userId: string
  existingData: any
  userEmail: string
}) {
  return (
    <SurveyContainer
      userId={userId}
      existingData={existingData}
      userEmail={userEmail}
    />
  )
}
