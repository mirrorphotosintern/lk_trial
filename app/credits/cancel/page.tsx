"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { XCircle, Coins, ArrowLeft, RefreshCw } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default async function CreditsCancelPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="container max-w-2xl py-8">
      <Card className="text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100">
            <XCircle className="size-8 text-orange-600" />
          </div>
          <CardTitle className="text-2xl text-orange-600">
            Payment Cancelled
          </CardTitle>
          <CardDescription className="text-lg">
            Your credit purchase was not completed
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="rounded-lg bg-orange-50 p-6">
            <p className="text-orange-800">
              No charges were made to your payment method
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              You can still continue learning with your current credits or try
              purchasing again.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/credits">
                  <RefreshCw className="mr-2 size-4" />
                  Try Again
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/learn">
                  <ArrowLeft className="mr-2 size-4" />
                  Continue Learning
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-4">
            <h3 className="mb-2 font-semibold text-blue-800">
              Free ways to earn credits:
            </h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Complete letter tracing exercises</li>
              <li>• Log in daily for bonus credits</li>
              <li>• Unlock achievement badges</li>
              <li>• Participate in learning challenges</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="mb-2 font-semibold text-gray-700">Need help?</h3>
            <p className="text-sm text-gray-600">
              If you experienced any issues during checkout, please contact our
              support team. We're here to help you continue your learning
              journey!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
