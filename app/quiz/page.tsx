/**
 * @description
 * This server component serves as the entry point for the Quiz page in KannadaKali.
 * It enforces authentication via Clerk, fetches CSV data containing Kannada learning content,
 * and renders the QuizFetcher component within a Suspense boundary to handle loading states.
 * 
 * Key features:
 * - Authentication: Redirects unauthenticated users to sign-in.
 * - Data Fetching: Loads CSV data server-side for quiz content.
 * - Suspense: Provides a loading fallback while data is fetched.
 * 
 * @dependencies
 * - Clerk (@clerk/nextjs/server): For authentication.
 * - QuizFetcher (./_components/quiz-fetcher): Renders quiz content.
 * - loadCsvAction (@/actions/csv-actions): Fetches CSV data.
 * 
 * @notes
 * - Uses "use server" directive as per project rules for server components.
 * - Suspense is used since CSV fetching is asynchronous.
 * - Minimal UI aligns with the requirement for a clean, simple layout for young users.
 */

"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import QuizFetcher from "./_components/quiz-fetcher"

// Skeleton fallback component for loading state
function QuizSkeleton() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center text-muted-foreground">
        Loading quiz...
      </div>
    </div>
  )
}

// Main Quiz page component
export default async function QuizPage() {
  // Authenticate user
  const { userId } = await auth()
  if (!userId) {
    redirect("/sign-in?redirect_url=/quiz")
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="p-4">
        <h1 className="text-2xl font-bold text-foreground font-montserrat">Kannada Quiz</h1>
        <p className="text-muted-foreground font-montserrat">Match the icon to the correct Kanglish word</p>
      </header>

      {/* Main content with suspense */}
      <main className="container mx-auto p-4">
        <Suspense fallback={<QuizSkeleton />}>
          <QuizFetcher />
        </Suspense>
      </main>
    </div>
  )
}
