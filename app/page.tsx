"use server"

/**
 * @description
 * Home page for LearnKannada, serving as the main entry point for all users.
 * Includes a welcome hero section and a leaderboard for top quiz performers.
 *
 * Key features:
 * - Entry Point: Provides a welcoming UI for kids and parents.
 * - Leaderboard: Shows top performers by quiz accuracy percentage.
 * - Server-Side: Renders static content with client components for interactivity.
 *
 * @dependencies
 * - HeroSection: Client component for interactive landing content.
 * - LeaderboardContainer: Server component for the leaderboard.
 *
 * @notes
 * - No Suspense needed as there's no asynchronous logic at this stage.
 * - Relies on root layout for navigation, theme support, and authentication.
 */

import { HeroSection } from "@/components/landing/hero"
import { SignedIn } from "@clerk/nextjs"
import LeaderboardContainer from "./_components/leaderboard-container"
import { getStatsAction } from "@/actions/db/stats-actions"
import StatsCounter from "@/components/stats-counter"
import { Suspense } from "react"

function StatsSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-950">
        <div className="h-8 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="mt-2 h-10 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
      </div>
      <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-950">
        <div className="h-8 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="mt-2 h-10 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
      </div>
    </div>
  )
}

async function StatsFetcher() {
  const { data } = await getStatsAction()
  if (!data) return null
  return (
    <StatsCounter
      totalUsers={data.totalUsers}
      totalQuizzes={data.totalQuizzes}
    />
  )
}

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HeroSection />

      <div className="my-8 w-full max-w-screen-xl px-4">
        <Suspense fallback={<StatsSkeleton />}>
          <StatsFetcher />
        </Suspense>

        <div className="mt-8">
          <LeaderboardContainer />
        </div>
      </div>
    </div>
  )
}
