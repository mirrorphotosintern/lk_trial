"use client"

/**
 * @description
 * CardGrid component fetches CSV data and renders it as a grid of cards.
 * It provides category filtering and displays cards from the updated CSV file.
 *
 * Key features:
 * - Data Fetching: Loads Kannada entries from CSV using loadCsvAction.
 * - Category Filtering: Allows users to filter cards by category.
 * - Grid Rendering: Displays entries in a responsive Tailwind grid.
 *
 * @dependencies
 * - @/actions/csv-actions: Provides loadCsvAction for CSV data.
 * - @/components/ui/card-display: Renders individual Kannada entries.
 * - @/components/ui/category-filter: Displays category filter buttons.
 * - @/types: Imports KannadaEntry interface for type safety.
 * - react: For state management and effects.
 */

import { useEffect, useState } from "react"
import { loadCsvAction } from "@/actions/csv-actions"
import { EnhancedCardDisplay } from "@/components/ui/enhanced-card-display"
import { CategoryFilter } from "@/components/ui/category-filter"
import { KannadaEntry } from "@/types"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function CardGrid() {
  const [entries, setEntries] = useState<KannadaEntry[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [currentAutoPlayIndex, setCurrentAutoPlayIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  // Fetch CSV data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await loadCsvAction()
        setIsLoading(false)

        if (!result.isSuccess || !result.data) {
          setError(result.message)
          return
        }

        setEntries(result.data)

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(result.data.map(entry => entry.category).filter(Boolean))
        ) as string[]

        setCategories(uniqueCategories)
      } catch (err) {
        setIsLoading(false)
        setError("Failed to load cards data")
        console.error(err)
      }
    }

    fetchData()
  }, [])

  // Filter entries by selected categories
  const filteredEntries =
    selectedCategories.length > 0
      ? entries.filter(
          entry => entry.category && selectedCategories.includes(entry.category)
        )
      : entries

  // Handle category selection
  const handleCategoriesChange = (categories: string[]) => {
    setSelectedCategories(categories)
    setIsAutoPlaying(false)
    setCurrentAutoPlayIndex(0)
  }

  // Handle auto-play completion
  const handleAutoPlayComplete = () => {
    if (currentAutoPlayIndex < filteredEntries.length - 1) {
      setCurrentAutoPlayIndex(prev => prev + 1)
    } else {
      setIsAutoPlaying(false)
      setCurrentAutoPlayIndex(0)
    }
  }

  // Toggle auto-play
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
    if (!isAutoPlaying) {
      setCurrentAutoPlayIndex(0)
    }
  }

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Render loading state
  if (isLoading) {
    return <div className="text-center">Loading cards...</div>
  }

  // Render error state
  if (error) {
    return <div className="text-destructive text-center">{error}</div>
  }

  // Render empty state
  if (entries.length === 0) {
    return (
      <div className="text-muted-foreground text-center">
        No cards available to display.
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoriesChange={handleCategoriesChange}
        />
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMute}
            className="flex items-center gap-2"
          >
            {isMuted ? (
              <>
                <VolumeX className="size-4" />
                Unmute
              </>
            ) : (
              <>
                <Volume2 className="size-4" />
                Mute
              </>
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleAutoPlay}
            className="flex items-center gap-2"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="size-4" />
                Pause Auto-play
              </>
            ) : (
              <>
                <Play className="size-4" />
                Start Auto-play
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredEntries.map((entry, index) => (
          <EnhancedCardDisplay
            key={index}
            entry={entry}
            isAutoPlaying={isAutoPlaying && index === currentAutoPlayIndex}
            onAutoPlayComplete={handleAutoPlayComplete}
            isMuted={isMuted}
          />
        ))}
      </div>
    </div>
  )
}
