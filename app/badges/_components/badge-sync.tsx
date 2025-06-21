"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SelectBadge } from "@/db/schema"

interface BadgeSyncProps {
  userBadges: SelectBadge[]
  checkInterval?: number // in milliseconds, default to 5 seconds
}

/**
 * Component that periodically refreshes the UI to check for badge updates
 */
export default function BadgeSync({
  userBadges,
  checkInterval = 5000
}: BadgeSyncProps) {
  const router = useRouter()

  // Refresh the page periodically to get updated badge status
  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh() // Trigger a server component refresh
    }, checkInterval)

    return () => clearInterval(interval)
  }, [router, checkInterval])

  // This is a hidden component that just manages the sync
  return null
}
