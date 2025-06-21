"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { useState, useEffect, useCallback } from "react"
import { getUserCreditsAction } from "@/actions/db/credits-actions"
import { Coins } from "lucide-react"
import { usePathname } from "next/navigation"

export default function UserButtonWithCredits() {
  const { user } = useUser()
  const [credits, setCredits] = useState<number | null>(null)
  const pathname = usePathname()

  const fetchCredits = useCallback(async () => {
    if (user?.id) {
      const res = await getUserCreditsAction(user.id)
      if (res.isSuccess) {
        setCredits(res.data)
      }
    }
  }, [user?.id])

  useEffect(() => {
    // Fetch credits when component mounts and user is available
    fetchCredits()
  }, [fetchCredits])

  // Refresh credits when navigating to/from credits-related pages
  useEffect(() => {
    if (
      pathname === "/credits" ||
      pathname.includes("/play") ||
      pathname.includes("/quiz")
    ) {
      fetchCredits()
    }
  }, [pathname, fetchCredits])

  // Refresh credits when window gains focus (user comes back to tab)
  useEffect(() => {
    const handleFocus = () => {
      fetchCredits()
    }

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchCredits()
      }
    }

    // Listen for window focus and visibility changes
    window.addEventListener("focus", handleFocus)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      window.removeEventListener("focus", handleFocus)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [fetchCredits])

  // Periodic refresh every 30 seconds when component is active
  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden && user?.id) {
        fetchCredits()
      }
    }, 30000) // 30 seconds

    return () => clearInterval(interval)
  }, [fetchCredits, user?.id])

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
