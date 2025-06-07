"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"
import { CheckCircle, Coins, ArrowRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getUserCreditsAction } from "@/actions/db/credits-actions"
import { processPaymentFromSession } from "@/actions/db/payments-actions"

export default async function CreditsSuccessPage({
  searchParams
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { userId } = await auth()
  const { session_id } = await searchParams

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="container max-w-2xl py-8">
      <Suspense fallback={<SuccessSkeleton />}>
        <SuccessContent userId={userId} sessionId={session_id} />
      </Suspense>
    </div>
  )
}

async function SuccessContent({
  userId,
  sessionId
}: {
  userId: string
  sessionId?: string
}) {
  // Automatically process payment if session_id is provided
  if (sessionId) {
    try {
      console.log(`🔄 Auto-processing payment for session: ${sessionId}`)
      const result = await processPaymentFromSession(sessionId, userId)
      if (result.isSuccess) {
        console.log(
          `✅ Payment auto-processed: ${result.data?.credits} credits added`
        )
      } else {
        console.log(`ℹ️ Payment processing: ${result.message}`)
      }
    } catch (error) {
      console.error("Error auto-processing payment:", error)
    }
  }

  const creditsResult = await getUserCreditsAction(userId)
  const credits = creditsResult.isSuccess ? creditsResult.data : 0

  console.log(
    `💰 Success page displaying ${credits} credits for user ${userId}`
  )

  return (
    <Card className="text-center">
      <CardHeader className="pb-4">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="size-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl text-green-600">
          Payment Successful!
        </CardTitle>
        <CardDescription className="text-lg">
          Your credits have been added to your account
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="rounded-lg bg-green-50 p-6">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-green-700">
            <Coins className="size-6" />
            <span>Current Balance: {credits.toLocaleString()} Credits</span>
          </div>
        </div>

        <div className="text-muted-foreground text-sm">
          Your credits are now available and ready to use!
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/play/quiz" className="flex items-center gap-2">
              Take a Quiz <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-purple-600 bg-purple-600 text-white hover:bg-purple-700"
          >
            <Link href="/play/game" className="flex items-center gap-2">
              Play Word Game <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <Button asChild variant="ghost" className="w-full">
          <Link href="/credits">View Credits Dashboard</Link>
        </Button>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-900">
              What's next?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-blue-800">
            <div className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Take quizzes to test your knowledge (50 credits each)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Play word games for interactive learning</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Complete achievements to earn bonus credits</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Track your progress in the learning dashboard</span>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

function SuccessSkeleton() {
  return (
    <Card className="text-center">
      <CardHeader className="pb-4">
        <div className="mx-auto mb-4 size-16 animate-pulse rounded-full bg-gray-200" />
        <div className="mx-auto h-8 w-48 animate-pulse rounded bg-gray-200" />
        <div className="mx-auto h-4 w-64 animate-pulse rounded bg-gray-200" />
      </CardHeader>
      <CardContent>
        <div className="mx-auto h-16 w-80 animate-pulse rounded-lg bg-gray-200" />
      </CardContent>
    </Card>
  )
}
