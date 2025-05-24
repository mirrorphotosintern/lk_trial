"use server"

import { LeaderboardSection } from "@/components/ui/leaderboard-section"
import { auth } from "@clerk/nextjs/server"

export default async function LeaderboardContainer() {
  // Check if user is signed in
  const session = await auth()
  if (!session?.userId) return null

  return <LeaderboardSection />
}
