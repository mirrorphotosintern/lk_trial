"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SelectQuizResult } from "@/db/schema/quiz-results-schema"
import { cn } from "@/lib/utils"
import { WordStatistics, getWordStatsAction } from "@/actions/db/word-stats-actions"
import Image from "next/image"

interface ParentalDashboardProps {
  stats: {
    totalQuizzes: number
    averageScore: number
    bestScore: number
    recentResults: SelectQuizResult[]
  } | null
}

export default function ParentalDashboard({ stats }: ParentalDashboardProps) {
  const [wordStats, setWordStats] = useState<WordStatistics[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Load word statistics
  useEffect(() => {
    async function loadWordStats() {
      try {
        setIsLoading(true)
        // Get word statistics
        const result = await getWordStatsAction(12) // Limit to 12 words
        
        if (!result.isSuccess) {
          throw new Error(result.message)
        }
        
        setWordStats(result.data)
      } catch (err) {
        console.error("Error loading word statistics:", err)
        setError(err instanceof Error ? err.message : "Unknown error loading word statistics")
      } finally {
        setIsLoading(false)
      }
    }
    
    loadWordStats()
  }, [])

  // Fallback if no stats exist
  if (!stats) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
        <p className="text-lg">No quiz results yet!</p>
        <p className="text-sm">
          Your child hasn't taken any quizzes yet, or there was an issue with the database connection.
        </p>
        <p className="text-sm mt-4">
          Please make sure the database is properly set up and try again.
        </p>
      </div>
    )
  }

  const { totalQuizzes, recentResults } = stats

  // Calculate total questions attempted and total correct
  const totalQuestionsAttempted = recentResults.reduce(
    (sum, result) => sum + result.totalQuestions,
    0
  )
  
  const totalCorrectAnswers = recentResults.reduce(
    (sum, result) => sum + result.score,
    0
  )

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Quizzes */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Total Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalQuizzes}</div>
          </CardContent>
        </Card>
        
        {/* Total Questions */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Total Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalQuestionsAttempted}</div>
          </CardContent>
        </Card>
        
        {/* Total Correct */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Total Correct</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalCorrectAnswers}</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Word Performance Cards */}
      <div>
        <h2 className="text-xl font-bold mb-4">Word Performance</h2>
        {isLoading ? (
          <div className="text-center py-6 text-muted-foreground">
            Loading word statistics...
          </div>
        ) : error ? (
          <div className="text-center py-6 text-red-600">
            Error: {error}
          </div>
        ) : wordStats.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            No word statistics available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wordStats.map((word, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="flex items-center p-4">
                  <div className="mr-4 w-12 h-12 flex items-center justify-center bg-muted rounded-md overflow-hidden">
                    {word.icon ? (
                      <div className="relative w-full h-full">
                        {/* Use regular img tag with onError handling for external URLs */}
                        <img 
                          src={word.icon} 
                          alt={word.english} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // If image fails to load, replace with fallback content
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = 
                              `<div class="w-full h-full flex items-center justify-center">
                                <span class="text-xs text-muted-foreground">${word.english[0]?.toUpperCase() || '?'}</span>
                              </div>`;
                          }}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-full h-full">
                        <span className="text-xs text-muted-foreground">
                          {word.english[0]?.toUpperCase() || '?'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{word.kanglish}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{word.english}</p>
                    <p className={cn(
                      "text-sm",
                      word.correctCount / word.totalAttempts > 0.7 
                        ? "text-green-600" 
                        : word.correctCount / word.totalAttempts > 0.4 
                          ? "text-amber-600" 
                          : "text-red-600"
                    )}>
                      {word.correctCount}/{word.totalAttempts} correct
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 