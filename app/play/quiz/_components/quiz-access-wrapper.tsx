"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { checkQuizCreditsAction } from "@/actions/db/credits-actions"
import QuizFetcher from "./quiz-fetcher"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coins, ArrowLeft } from "lucide-react"

export default async function QuizAccessWrapper() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in?redirect_url=/play/quiz")
    return null
  }

  // Check credits without deducting them
  const creditResult = await checkQuizCreditsAction(userId)

  if (!creditResult.isSuccess) {
    // User doesn't have enough credits
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 p-8">
        <div className="text-center">
          <Coins className="mx-auto mb-4 size-16 text-yellow-600" />
          <h2 className="mb-2 text-2xl font-bold">Insufficient Credits</h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            {creditResult.message}
          </p>
        </div>

        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link href="/play">
              <ArrowLeft className="mr-2 size-4" />
              Back to Games
            </Link>
          </Button>
          <Button asChild>
            <Link href="/credits">
              <Coins className="mr-2 size-4" />
              Get More Credits
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  // User has sufficient credits - they will be charged after quiz completion
  return (
    <>
      <div className="mb-4 rounded-lg border border-blue-300 bg-blue-100 p-3 text-center dark:bg-blue-900/20">
        <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
          ℹ️ Credits will be deducted after quiz completion (50 credits)
        </p>
      </div>
      <QuizFetcher />
    </>
  )
}
