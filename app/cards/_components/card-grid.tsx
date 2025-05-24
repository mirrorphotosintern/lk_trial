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
import { CardDisplay } from "@/components/ui/card-display"
import { CategoryFilter } from "@/components/ui/category-filter"
import { KannadaEntry } from "@/types"

export function CardGrid() {
  const [entries, setEntries] = useState<KannadaEntry[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

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

  // Filter entries by category
  const filteredEntries = activeCategory
    ? entries.filter(entry => entry.category === activeCategory)
    : entries

  // Handle category selection
  const handleCategorySelect = (category: string | null) => {
    setActiveCategory(category)
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
    <div>
      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
      />

      {/* Card Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredEntries.map((entry, index) => (
          <CardDisplay key={index} entry={entry} />
        ))}
      </div>
    </div>
  )
}
