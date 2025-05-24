"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  getLeaderboardAction,
  getLeaderboardCategoriesAction
} from "@/actions/db/leaderboard-actions"
import { motion } from "framer-motion"

interface LeaderboardEntry {
  userId: string
  displayName: string
  profileImageUrl: string | null
  totalAttempts: number
  correctAnswers: number
  accuracyPercentage: number
  quizzesCompleted: number
  rank: number
  isCurrentUser: boolean
}

export function LeaderboardSection() {
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState<string>("all")
  const [categories, setCategories] = useState<string[]>([])
  const [leaders, setLeaders] = useState<LeaderboardEntry[]>([])
  const [currentUserRank, setCurrentUserRank] = useState<
    LeaderboardEntry | undefined
  >()

  // Load leaderboard data
  const loadLeaderboard = async (selectedCategory?: string) => {
    setLoading(true)
    try {
      // Only pass category parameter if it's not "all"
      const categoryToUse =
        selectedCategory === "all" ? undefined : selectedCategory
      const result = await getLeaderboardAction(categoryToUse)
      if (result.isSuccess && result.data) {
        setLeaders(result.data.leaders)
        setCurrentUserRank(result.data.currentUserRank)
      }
    } catch (error) {
      console.error("Error loading leaderboard:", error)
    } finally {
      setLoading(false)
    }
  }

  // Load available categories
  const loadCategories = async () => {
    try {
      const result = await getLeaderboardCategoriesAction()
      if (result.isSuccess && result.data) {
        setCategories(result.data)
      }
    } catch (error) {
      console.error("Error loading categories:", error)
    }
  }

  useEffect(() => {
    loadCategories()
    loadLeaderboard("all")
  }, [])

  // When category changes, reload leaderboard
  useEffect(() => {
    loadLeaderboard(category)
  }, [category])

  // Function to get medal for top 3
  const getMedal = (rank: number) => {
    if (rank === 1) return "🥇"
    if (rank === 2) return "🥈"
    if (rank === 3) return "🥉"
    return rank
  }

  // Function to get initials from display name
  const getInitials = (name: string) => {
    if (!name) return "U" // Fallback for missing names

    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // Extract first image from profile URL if it contains multiple
  const getProfileImage = (url: string | null) => {
    if (!url) return undefined

    // If URL contains multiple images (comma-separated), take the first one
    if (url.includes(",")) {
      return url.split(",")[0].trim() || undefined
    }

    return url || undefined
  }

  // Get display name with fallback
  const getDisplayName = (leader: LeaderboardEntry) => {
    if (leader.displayName && leader.displayName.trim() !== "") {
      return leader.displayName
    }

    return `User ${leader.userId.substring(0, 6)}`
  }

  return (
    <Card className="w-full max-w-none">
      <CardHeader className="pb-2">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="size-5 text-yellow-500" />
            Leaderboard
          </CardTitle>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          // Loading skeleton
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map(i => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-md border px-4 py-3"
              >
                <Skeleton className="size-8 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="mb-2 h-4 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-6 w-12" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {leaders.length > 0 ? (
              <>
                {/* Top users */}
                {leaders.map(leader => (
                  <motion.div
                    key={leader.userId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: leader.rank * 0.1 }}
                    className={cn(
                      "flex items-center gap-4 rounded-md border px-4 py-3 transition-colors",
                      leader.isCurrentUser
                        ? "border-primary"
                        : "border-border hover:bg-accent/10"
                    )}
                  >
                    <div className="flex w-8 items-center justify-center font-bold">
                      {getMedal(leader.rank)}
                    </div>
                    <Avatar className="size-9">
                      <AvatarImage
                        src={
                          getProfileImage(leader.profileImageUrl) || undefined
                        }
                        alt={leader.displayName}
                      />
                      <AvatarFallback>
                        {getInitials(leader.displayName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center text-sm font-medium">
                        <span className="truncate">
                          {getDisplayName(leader)}
                        </span>
                        {leader.isCurrentUser && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            You
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {leader.quizzesCompleted} quiz
                        {leader.quizzesCompleted !== 1 ? "zes" : ""}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">
                        {leader.accuracyPercentage.toFixed(1)}%
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {leader.correctAnswers} / {leader.totalAttempts}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Current user if not in top list */}
                {currentUserRank && !leaders.some(l => l.isCurrentUser) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="border-primary flex items-center gap-4 rounded-md border px-4 py-3"
                  >
                    <div className="flex w-8 items-center justify-center font-bold">
                      {currentUserRank.rank}
                    </div>
                    <Avatar className="size-9">
                      <AvatarImage
                        src={
                          getProfileImage(currentUserRank.profileImageUrl) ||
                          undefined
                        }
                        alt={currentUserRank.displayName}
                      />
                      <AvatarFallback>
                        {getInitials(currentUserRank.displayName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center text-sm font-medium">
                        <span className="truncate">
                          {getDisplayName(currentUserRank)}
                        </span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          You
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {currentUserRank.quizzesCompleted} quiz
                        {currentUserRank.quizzesCompleted !== 1 ? "zes" : ""}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">
                        {currentUserRank.accuracyPercentage.toFixed(1)}%
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {currentUserRank.correctAnswers} /{" "}
                        {currentUserRank.totalAttempts}
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              // No data
              <div className="text-muted-foreground py-8 text-center">
                No data available yet. Complete some quizzes to appear on the
                leaderboard!
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
