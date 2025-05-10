/**
 * @description
 * This server component serves as the entry point for the Parental Progress page in LearnKannada.
 * It enforces authentication via Clerk, fetches progress data from the database,
 * and renders the ProgressDisplay component within a Suspense boundary to handle loading states.
 * 
 * Key features:
 * - Authentication: Redirects unauthenticated users to sign-in.
 * - Data Fetching: Retrieves user progress from Supabase DB server-side.
 * - Suspense: Provides a loading fallback while data is fetched.
 * 
 * @dependencies
 * - Clerk (@clerk/nextjs/server): For authentication.
 * - ProgressDisplay (./_components/progress-display): Client component for rendering progress stats.
 * - QuizResultsDisplay (./_components/quiz-results-display): Client component for rendering quiz results.
 * - getProgressAction (@/actions/db/progress-actions): Fetches progress data.
 * - getQuizStatsAction (@/actions/db/quiz-results-actions): Fetches quiz stats data.
 * - getWordStatsAction (@/actions/db/word-stats-actions): Fetches word stats data.
 * 
 * @notes
 * - Uses "use server" directive per project rules.
 * - Suspense is necessary due to asynchronous DB fetch.
 * - Minimal UI aligns with the aesthetic, simple design requirement for young users' parents.
 * - Assumes progress data is tied to Clerk userId; future steps may refine this if local storage is preferred initially.
 */

"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { getQuizStatsAction } from "@/actions/db/quiz-results-actions"
import ParentalDashboard from "./_components/parental-dashboard"
import { SeedButton } from "./_components/seed-button"

// Skeleton fallback component for loading state
function DashboardSkeleton() {
  return (
    <div className="flex h-[300px] items-center justify-center">
      <div className="text-center text-muted-foreground">
        Loading dashboard...
      </div>
    </div>
  )
}

// Main Parental Progress page component
export default async function ParentalPage() {
  // Authenticate user
  const { userId } = await auth()
  if (!userId) {
    return redirect("/sign-in?returnBackUrl=/parental")
  }

  return (
    <div className="min-h-screen bg-background font-montserrat">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Parental Dashboard
          </h1>
          <p className="text-muted-foreground">
            See how your child is learning Kannada!
          </p>
        </div>
        
        {/* Seed button for development/testing */}
        <div className="hidden md:block">
          <SeedButton />
        </div>
      </header>

      {/* Main content with suspense */}
      <main className="container mx-auto p-4">
        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardFetcher />
        </Suspense>
      </main>
    </div>
  )
}

// Fetcher component to handle async stats data loading
async function DashboardFetcher() {
  const statsResult = await getQuizStatsAction()
  return <ParentalDashboard stats={statsResult.isSuccess ? statsResult.data : null} />
}
