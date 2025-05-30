"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { getUserCreditsAction } from "@/actions/db/credits-actions"
import { Coins } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function UserWithCredits() {
  const { user } = useUser()
  const [credits, setCredits] = useState<number | null>(null)

  useEffect(() => {
    // Fetch credits when component mounts and user is available
    if (user?.id) {
      getUserCreditsAction(user.id).then(res => {
        if (res.isSuccess) setCredits(res.data)
      })
    }
  }, [user?.id])

  if (!user) return null

  return (
    <UserButton afterSignOutUrl="/">
      <UserButton.UserProfilePage
        label="Credits"
        url="credits"
        labelIcon={<Coins className="size-4" />}
      >
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-semibold">Your Credits</h2>

          <div className="mb-6 flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <Coins className="size-8 text-yellow-600" />
              <span className="text-lg font-medium">Current Balance</span>
            </div>
            <span className="text-3xl font-bold">
              {credits !== null ? credits.toLocaleString() : "..."}
            </span>
          </div>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p className="flex items-center gap-2">
              <span className="text-green-600">+</span>
              Earn credits by learning new words
            </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-600">-</span>
              Use credits to take quizzes
            </p>
          </div>
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  )
}
