"use client"

import { useEffect, useState } from "react"
import { 
  getLeaderboardAction, 
  getLeaderboardCategoriesAction, 
  LeaderboardEntry 
} from "@/actions/db/leaderboard-actions"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Medal, MedalIcon, TrophyIcon } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

export function LeaderboardComponent() {
  const [isLoading, setIsLoading] = useState(true)
  const [leaderboardData, setLeaderboardData] = useState<{
    topUsers: LeaderboardEntry[]
    currentUserRank: LeaderboardEntry | null
  }>({ topUsers: [], currentUserRank: null })
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getLeaderboardCategoriesAction()
      if (result.isSuccess) {
        setCategories(result.data)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      setIsLoading(true)
      const result = await getLeaderboardAction(selectedCategory === "all" ? undefined : selectedCategory)
      if (result.isSuccess) {
        setLeaderboardData({
          topUsers: result.data.leaders,
          currentUserRank: result.data.currentUserRank || null
        })
      }
      setIsLoading(false)
    }

    fetchLeaderboardData()
  }, [selectedCategory])

  // Animation variants for staggered list
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <TrophyIcon className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <MedalIcon className="h-5 w-5 text-amber-600" />
      default:
        return <span className="flex h-5 w-5 items-center justify-center font-semibold">{rank}</span>
    }
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle>
            <CardDescription>Top quiz performers by accuracy</CardDescription>
          </div>
          {categories.length > 0 && (
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="All Categories" />
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
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-3">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="mt-1 h-3 w-1/2" />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-3"
          >
            {leaderboardData.topUsers.length > 0 ? (
              <>
                {leaderboardData.topUsers.map((user) => (
                  <motion.div
                    key={user.userId}
                    variants={item}
                    className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-8 w-8 items-center justify-center">
                      {getMedalIcon(user.rank)}
                    </div>
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src={user.profileImageUrl || ""} />
                      <AvatarFallback>{user.displayName.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{user.displayName}</div>
                      <div className="text-xs text-muted-foreground">
                        Accuracy: {user.accuracyPercentage.toFixed(1)}% • {user.quizzesCompleted} quizzes
                      </div>
                    </div>
                  </motion.div>
                ))}

                {leaderboardData.currentUserRank && (
                  <>
                    <div className="relative py-2">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-card px-2 text-xs text-muted-foreground">
                          ⋯
                        </span>
                      </div>
                    </div>

                    <motion.div
                      variants={item}
                      className="flex items-center gap-2 rounded-lg bg-accent/10 p-2"
                    >
                      <div className="flex h-8 w-8 items-center justify-center">
                        <span className="font-semibold">{leaderboardData.currentUserRank.rank}</span>
                      </div>
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src={leaderboardData.currentUserRank.profileImageUrl || ""} />
                        <AvatarFallback>
                          {leaderboardData.currentUserRank.displayName.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{leaderboardData.currentUserRank.displayName} (You)</div>
                        <div className="text-xs text-muted-foreground">
                          Accuracy: {leaderboardData.currentUserRank.accuracyPercentage.toFixed(1)}% • 
                          {leaderboardData.currentUserRank.quizzesCompleted} quizzes
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </>
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                No data available. Take quizzes to appear on the leaderboard!
              </div>
            )}
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
} 