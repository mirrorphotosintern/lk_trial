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

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HeroSection />
      
      <SignedIn>
        <div className="my-8 w-full max-w-screen-xl px-4">
          <LeaderboardContainer />
        </div>
      </SignedIn>
    </div>
  )
} 