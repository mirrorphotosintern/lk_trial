"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { getUserCreditsAction } from "@/actions/db/credits-actions"
import { Coins } from "lucide-react"

export default function UserButtonWithCredits() {
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
    <UserButton
      afterSignOutUrl="/"
      appearance={{
        elements: {
          userButtonPopoverCard: "min-w-[240px]",
          userButtonPopoverMain: "gap-2",
          userButtonPopoverFooter: "hidden"
        }
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label={`Credits: ${credits !== null ? credits.toLocaleString() : "..."}`}
          labelIcon={<Coins className="size-4 text-yellow-600" />}
          href="/credits"
        />
        <UserButton.Action label="manageAccount" />
        <UserButton.Action label="signOut" />
      </UserButton.MenuItems>
    </UserButton>
  )
}
