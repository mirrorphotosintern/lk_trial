"use server"

import { db } from "@/db/db"
import { ActionState } from "@/types"
import { sql } from "drizzle-orm"

interface Stats {
  totalUsers: number
  totalQuizzes: number
}

export async function getStatsAction(): Promise<ActionState<Stats>> {
  try {
    // Get all stats in a single query using the same function as leaderboard
    const statsQuery = sql`
      SELECT 
        COUNT(DISTINCT user_id) as total_users,
        SUM(quizzes_completed) as total_quizzes
      FROM get_homepage_leaderboard(NULL, NULL)
    `
    const statsResult = await db.execute(statsQuery)
    const stats = statsResult[0]

    return {
      isSuccess: true,
      message: "Stats retrieved successfully",
      data: {
        totalUsers: Number(stats?.total_users || 0),
        totalQuizzes: Number(stats?.total_quizzes || 0)
      }
    }
  } catch (error) {
    console.error("Error getting stats:", error)
    return { isSuccess: false, message: "Failed to get stats" }
  }
} 