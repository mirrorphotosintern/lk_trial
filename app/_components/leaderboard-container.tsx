"use server"

import { LeaderboardSection } from "@/components/ui/leaderboard-section"
import { auth } from "@clerk/nextjs/server"

export default async function LeaderboardContainer() {
  return <LeaderboardSection />
}
