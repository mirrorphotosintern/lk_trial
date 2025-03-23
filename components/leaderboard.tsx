"use client"

import { LeaderboardEntry } from "@/actions/db/leaderboard-actions"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { Trophy } from "lucide-react"
import { useState } from "react"

interface LeaderboardProps {
  initialLeaders: LeaderboardEntry[]
  initialUserRank?: LeaderboardEntry
  categories: string[]
  onCategoryChange: (category: string | null) => Promise<{
    leaders: LeaderboardEntry[]
    currentUserRank?: LeaderboardEntry
  }>
}

export default function Leaderboard({
  initialLeaders,
  initialUserRank,
  categories,
  onCategoryChange
}: LeaderboardProps) {
  const [leaders, setLeaders] = useState<LeaderboardEntry[]>(initialLeaders)
  const [currentUserRank, setCurrentUserRank] = useState<LeaderboardEntry | undefined>(initialUserRank)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleCategoryChange(category: string) {
    setLoading(true)
    try {
      const newCategory = category === "all" ? null : category
      const result = await onCategoryChange(newCategory)
      setLeaders(result.leaders)
      setCurrentUserRank(result.currentUserRank)
      setSelectedCategory(newCategory)
    } catch (error) {
      console.error("Error changing category:", error)
    } finally {
      setLoading(false)
    }
  }

  // Format accuracy percentage
  const formatAccuracy = (accuracy: number) => {
    return `${accuracy.toFixed(1)}%`
  }

  return (
    <div className="bg-white dark:bg-slate-950 rounded-lg shadow p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Trophy className="text-yellow-500" size={20} />
          Leaderboard
        </h2>
        <Select
          disabled={loading}
          onValueChange={handleCategoryChange}
          defaultValue="all"
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center p-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-40 ml-4" />
              <Skeleton className="h-4 w-20 ml-auto" />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-1">
          {leaders.map((user) => (
            <LeaderboardRow key={user.userId} user={user} />
          ))}

          {currentUserRank && (
            <>
              <div className="relative py-2 my-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white dark:bg-slate-950 px-2 text-muted-foreground text-xs">
                    • • •
                  </span>
                </div>
              </div>

              <LeaderboardRow user={currentUserRank} highlighted />
            </>
          )}

          {leaders.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No data available yet. Complete some quizzes to appear on the
              leaderboard!
            </div>
          )}
        </div>
      )}
    </div>
  )
}

interface LeaderboardRowProps {
  user: LeaderboardEntry
  highlighted?: boolean
}

function LeaderboardRow({ user, highlighted = false }: LeaderboardRowProps) {
  // Get medal for top 3
  const getMedal = (rank: number) => {
    if (rank === 1) return "🥇"
    if (rank === 2) return "🥈"
    if (rank === 3) return "🥉"
    return rank
  }

  return (
    <div
      className={cn(
        "flex items-center p-2 rounded-md",
        highlighted
          ? "bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900"
          : "hover:bg-slate-50 dark:hover:bg-slate-900"
      )}
    >
      <div className="flex items-center justify-center w-8 font-bold">
        {getMedal(user.rank)}
      </div>

      <div className="flex items-center flex-1 min-w-0">
        <div className="h-8 w-8 rounded-full bg-slate-300 overflow-hidden mr-3 flex-shrink-0">
          {user.profileImageUrl ? (
            <img
              src={user.profileImageUrl}
              alt={user.displayName}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-xs font-medium text-slate-600">
              {user.displayName.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        <div className="truncate font-medium">
          {user.displayName}
          {user.isCurrentUser && (
            <Badge variant="outline" className="ml-2 text-xs">
              You
            </Badge>
          )}
        </div>
      </div>

      <div className="text-right">
        <div className="font-semibold">
          {user.accuracyPercentage.toFixed(1)}%
        </div>
        <div className="text-xs text-muted-foreground">
          {user.correctAnswers} / {user.totalAttempts} correct
        </div>
      </div>
    </div>
  )
} 