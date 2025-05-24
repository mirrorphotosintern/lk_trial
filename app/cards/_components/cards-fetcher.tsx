"use server"

/**
 * @description
 * CardsFetcher component fetches CSV data and renders it as a grid of CardDisplay components.
 * Handles data retrieval and layout for the Cards page.
 *
 * Key features:
 * - Data Fetching: Loads Kannada entries from CSV using loadCsvAction.
 * - Grid Rendering: Displays entries in a responsive Tailwind grid.
 * - Error Handling: Manages fetch failures and empty data gracefully.
 *
 * @dependencies
 * - @/actions/csv-actions: Provides loadCsvAction for CSV data.
 * - @/components/ui/card-display: Renders individual Kannada entries.
 * - @/types: Imports KannadaEntry interface for type safety.
 *
 * @notes
 * - Server component to fetch data directly, avoiding client-side fetch overhead.
 * - Uses Tailwind CSS for a responsive, minimalistic grid (2-4 columns based on screen size).
 * - Assumes CardDisplay handles individual entry rendering (Step 9).
 */

import { loadCsvAction } from "@/actions/csv-actions"
import { KannadaEntry } from "@/types"
import { CardClientWrapper } from "./card-client-wrapper"

export async function CardsFetcher() {
  // Fetch CSV data
  const result = await loadCsvAction()

  // Handle fetch failure
  if (!result.isSuccess || !result.data) {
    return (
      <div className="text-destructive text-center">
        Failed to load cards: {result.message}
      </div>
    )
  }

  const entries: KannadaEntry[] = result.data

  // Handle empty dataset
  if (entries.length === 0) {
    return (
      <div className="text-muted-foreground text-center">
        No cards available to display.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {entries.map((entry, index) => (
        <CardClientWrapper key={index} entry={entry} />
      ))}
    </div>
  )
}
