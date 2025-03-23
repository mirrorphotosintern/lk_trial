/**
 * @description
 * This server component fetches Kannada quiz data and passes it to the QuizComponent.
 * It retrieves CSV data of Kannada words to use in the quiz.
 *
 * Key features:
 * - Data Fetching: Loads CSV data for the quiz.
 * - Auth Check: Redirects unauthenticated users.
 * - Quiz Component: Passes CSV data to the client-side quiz component.
 *
 * @dependencies
 * - Clerk: For authentication.
 * - Server Actions: For CSV data fetching.
 * - QuizComponent: Client component for quiz rendering.
 *
 * @notes
 * - Uses Suspense for async data loading with a skeleton fallback.
 * - Redirects to sign-in if user is not authenticated.
 * - Handles empty data scenarios gracefully.
 */

"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import { loadCsvAction } from "@/actions/csv-actions"
import QuizComponent from "@/components/ui/quiz-component"

export default async function QuizFetcher() {
  // Authentication check
  const { userId } = await auth()
  if (!userId) {
    redirect("/sign-in?redirect_url=/quiz")
    return null;
  }

  // Fetch CSV data
  const csvResult = await loadCsvAction()
  if (!csvResult.isSuccess || !csvResult.data) {
    return <div className="text-center text-red-500">Failed to load quiz data.</div>
  }

  // Render QuizComponent with fetched data
  return <QuizComponent entries={csvResult.data} />
}
