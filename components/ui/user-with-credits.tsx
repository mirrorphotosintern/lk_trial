"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { getUserCreditsAction } from "@/actions/db/credits-actions"
import { Coins } from "lucide-react"

export default function UserWithCredits() {
  const { user } = useUser()
  const [showDropdown, setShowDropdown] = useState(false)
  const [credits, setCredits] = useState<number | null>(null)

  useEffect(() => {
    // Fetch credits when component mounts and user is available
    if (user?.id && credits === null) {
      getUserCreditsAction(user.id).then(res => {
        if (res.isSuccess) setCredits(res.data)
      })
    }
  }, [user?.id, credits])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        showDropdown &&
        !(e.target as HTMLElement).closest(".user-dropdown")
      ) {
        setShowDropdown(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [showDropdown])

  if (!user) return null

  return (
    <div className="user-dropdown relative">
      <div onClick={() => setShowDropdown(!showDropdown)}>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonTrigger: "cursor-pointer"
            }
          }}
        />
      </div>

      {showDropdown && (
        <div className="bg-background absolute right-0 z-50 mt-2 w-72 rounded-lg border p-4 shadow-lg">
          {/* User Info */}
          <div className="mb-3 border-b pb-3">
            <div className="text-lg font-semibold">
              {user.fullName || user.firstName}
            </div>
            <div className="text-muted-foreground text-sm">
              {user.primaryEmailAddress?.emailAddress}
            </div>
          </div>

          {/* Credits */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="size-4 text-yellow-600" />
              <span className="font-medium">Credits</span>
            </div>
            <span className="text-lg font-bold">
              {credits !== null ? credits : "..."}
            </span>
          </div>

          {/* Additional Info */}
          <div className="text-muted-foreground text-xs">
            <p>• Earn credits by learning new words</p>
            <p>• Use credits to take quizzes</p>
          </div>
        </div>
      )}
    </div>
  )
}
