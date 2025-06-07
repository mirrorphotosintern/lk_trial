"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getUserCreditsAction } from "@/actions/db/credits-actions"
import { Coins, Plus, Minus } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Suspense } from "react"
import BuyCredits from "@/components/utilities/buy-credits"

export default async function CreditsPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="container max-w-4xl py-8">
      <h1 className="mb-8 text-3xl font-bold">Your Credits</h1>

      <Suspense fallback={<CreditsSkeleton />}>
        <CreditsContent userId={userId} />
      </Suspense>
    </div>
  )
}

async function CreditsContent({ userId }: { userId: string }) {
  const creditsResult = await getUserCreditsAction(userId)
  const credits = creditsResult.isSuccess ? creditsResult.data : 0

  return (
    <div className="space-y-6">
      {/* Current Balance Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="size-6 text-yellow-600" />
            Current Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{credits.toLocaleString()}</p>
        </CardContent>
      </Card>

      {/* Buy Credits Section */}
      <BuyCredits />

      {/* How to Earn Credits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="size-6 text-green-600" />
            How to Earn Credits
          </CardTitle>
          <CardDescription>
            Earn credits by actively learning and engaging with the app
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-green-600" />
            <div>
              <p className="font-medium">Learn New Words</p>
              <p className="text-muted-foreground text-sm">
                Complete Trace on 2 different letters to earn 20 credits
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-green-600" />
            <div>
              <p className="font-medium">Daily Login</p>
              <p className="text-muted-foreground text-sm">
                Log in daily to receive bonus credits
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-green-600" />
            <div>
              <p className="font-medium">Complete Achievements</p>
              <p className="text-muted-foreground text-sm">
                Unlock badges to earn extra credits
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Use Credits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Minus className="size-6 text-blue-600" />
            How to Use Credits
          </CardTitle>
          <CardDescription>
            Spend credits to access premium features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-blue-600" />
            <div>
              <p className="font-medium">Take Quizzes</p>
              <p className="text-muted-foreground text-sm">
                Each quiz attempt costs 50 credits
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-blue-600" />
            <div>
              <p className="font-medium">Play Games</p>
              <p className="text-muted-foreground text-sm">
                Access premium games with credits
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-blue-600" />
            <div>
              <p className="font-medium">Skip Cooldowns</p>
              <p className="text-muted-foreground text-sm">
                Use credits to skip waiting times
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CreditsSkeleton() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
        </CardHeader>
        <CardContent>
          <div className="h-12 w-32 animate-pulse rounded bg-gray-200" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="h-16 animate-pulse rounded bg-gray-200" />
            <div className="h-16 animate-pulse rounded bg-gray-200" />
            <div className="h-16 animate-pulse rounded bg-gray-200" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
