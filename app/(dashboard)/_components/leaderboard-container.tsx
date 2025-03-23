"use server"

import {
  getLeaderboardAction,
  getLeaderboardCategoriesAction
} from "@/actions/db/leaderboard-actions"
import Leaderboard from "@/components/leaderboard"
import { auth } from "@clerk/nextjs/server"

async function fetchLeaderboardData(category?: string) {
  const { isSuccess, data } = await getLeaderboardAction(category)
  
  if (!isSuccess || !data) {
    return { leaders: [], currentUserRank: undefined }
  }
  
  return {
    leaders: data.leaders,
    currentUserRank: data.currentUserRank
  }
}

async function fetchCategories() {
  const { isSuccess, data } = await getLeaderboardCategoriesAction()
  
  if (!isSuccess || !data) {
    return []
  }
  
  return data
}

export default async function LeaderboardContainer() {
  // Check if user is signed in
  const session = await auth()
  if (!session?.userId) return null

  // Fetch initial data
  const [leaderboardData, categories] = await Promise.all([
    fetchLeaderboardData(),
    fetchCategories()
  ])

  // Function to handle category changes
  async function handleCategoryChange(category: string | null) {
    "use server"
    return await fetchLeaderboardData(category || undefined)
  }

  return (
    <Leaderboard
      initialLeaders={leaderboardData.leaders}
      initialUserRank={leaderboardData.currentUserRank}
      categories={categories}
      onCategoryChange={handleCategoryChange}
    />
  )
} 