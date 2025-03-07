"use server"

/**
 * @description
 * Home page for KannadaKali, serving as the main entry point for all users.
 * Uses the same HeroSection component as the landing page for consistency.
 *
 * Key features:
 * - Entry Point: Provides a welcoming UI for kids and parents.
 * - Server-Side: Renders static content with no async data fetching.
 *
 * @dependencies
 * - HeroSection: Client component for interactive landing content.
 *
 * @notes
 * - No Suspense needed as there's no asynchronous logic at this stage.
 * - Relies on root layout for navigation, theme support, and authentication.
 * - This page replaces the separate landing page for a more consistent experience.
 */

import { HeroSection } from "@/components/landing/hero"

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />
    </div>
  )
} 