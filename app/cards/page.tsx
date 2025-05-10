"use server"

/**
 * @description
 * Cards page for LearnKannada, displaying a grid of Kannada words and sentences.
 * Fetches CSV data server-side and ensures user authentication before rendering.
 *
 * Key features:
 * - Authentication: Uses Clerk to restrict access to logged-in users.
 * - Async Data Fetching: Loads CSV data with Suspense for a loading state.
 * - Grid Layout: Prepares a responsive grid for CardDisplay components.
 *
 * @dependencies
 * - @clerk/nextjs/server: Provides auth helper for user validation.
 * - react: Supplies Suspense for async rendering.
 * - CardGrid: Renders cards with filtering and expanded view functionality.
 *
 * @notes
 * - Marked as a server component to handle auth and data fetching securely.
 * - Relies on middleware to redirect unauthenticated users, but includes explicit check for clarity.
 * - Uses Tailwind CSS for minimalistic, responsive styling per the design system.
 */

import { auth } from "@clerk/nextjs/server"
import { Suspense } from "react"
import { CardGrid } from "@/app/cards/_components/card-grid"

export default async function CardsPage() {
  // Enforce authentication
  const { userId } = await auth()
  if (!userId) {
    throw new Error("Unauthorized access: Please sign in to view the Cards page.")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-semibold text-foreground">
        Kannada Cards
      </h1>

      {/* Suspense boundary for async CSV loading */}
      <Suspense fallback={<div className="text-center text-muted-foreground">Loading cards...</div>}>
        <CardGrid />
      </Suspense>
    </div>
  )
}