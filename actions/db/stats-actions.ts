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
      WITH leaderboard_data AS (
        SELECT * FROM get_homepage_leaderboard(NULL, NULL)
      )
      SELECT 
        COALESCE(COUNT(DISTINCT user_id), 0) as total_users,
        COALESCE(SUM(quizzes_completed), 0) as total_quizzes
      FROM leaderboard_data
    `
    const statsResult = await db.execute(statsQuery)
    
    // Ensure we have a result and it's not null
    if (!statsResult || statsResult.length === 0) {
      return {
        isSuccess: true,
        message: "No stats data available",
        data: {
          totalUsers: 0,
          totalQuizzes: 0
        }
      }
    }

    const stats = statsResult[0]
    if (!stats) {
      return {
        isSuccess: true,
        message: "No stats data available",
        data: {
          totalUsers: 0,
          totalQuizzes: 0
        }
      }
    }

    return {
      isSuccess: true,
      message: "Stats retrieved successfully",
      data: {
        totalUsers: Number(stats.total_users || 0),
        totalQuizzes: Number(stats.total_quizzes || 0)
      }
    }
  } catch (error) {
    console.error("Error getting stats:", error)
    // Return a valid state even in case of error
    return {
      isSuccess: true,
      message: "Using fallback stats",
      data: {
        totalUsers: 0,
        totalQuizzes: 0
      }
    }
  }
} 