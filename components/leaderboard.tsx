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
  const [currentUserRank, setCurrentUserRank] = useState<
    LeaderboardEntry | undefined
  >(initialUserRank)
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
    <div className="rounded-lg bg-white p-5 shadow dark:bg-slate-950">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-bold">
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
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex items-center p-2">
              <Skeleton className="size-8 rounded-full" />
              <Skeleton className="ml-4 h-4 w-40" />
              <Skeleton className="ml-auto h-4 w-20" />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-1">
          {leaders.map(user => (
            <LeaderboardRow key={user.userId} user={user} />
          ))}

          {currentUserRank && (
            <>
              <div className="relative my-2 py-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center">
                  <span className="text-muted-foreground bg-white px-2 text-xs dark:bg-slate-950">
                    • • •
                  </span>
                </div>
              </div>

              <LeaderboardRow user={currentUserRank} highlighted />
            </>
          )}

          {leaders.length === 0 && (
            <div className="text-muted-foreground py-4 text-center">
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
        "flex items-center rounded-md p-2",
        highlighted
          ? "border border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950/20"
          : "hover:bg-slate-50 dark:hover:bg-slate-900"
      )}
    >
      <div className="flex w-8 items-center justify-center font-bold">
        {getMedal(user.rank)}
      </div>

      <div className="flex min-w-0 flex-1 items-center">
        <div className="mr-3 size-8 shrink-0 overflow-hidden rounded-full bg-slate-300">
          {user.profileImageUrl ? (
            <img
              src={user.profileImageUrl}
              alt={user.displayName}
              className="size-full object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-xs font-medium text-slate-600">
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
        <div className="text-muted-foreground text-xs">
          {user.correctAnswers} / {user.totalAttempts} correct
        </div>
      </div>
    </div>
  )
}
