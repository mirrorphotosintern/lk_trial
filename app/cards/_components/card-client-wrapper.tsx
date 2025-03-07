"use client"

/**
 * @description
 * CardClientWrapper is a client component that wraps the CardDisplay component
 * to handle interactive elements like click events.
 *
 * Key features:
 * - Interactivity: Handles card click events
 * - Client-Side Logic: Contains the client-side logic needed for CardDisplay
 *
 * @dependencies
 * - @/components/ui/card-display: The CardDisplay component to wrap
 * - @/types: For the KannadaEntry type
 */

import { CardDisplay } from "@/components/ui/card-display"
import { KannadaEntry } from "@/types"

interface CardClientWrapperProps {
  entry: KannadaEntry
}

export function CardClientWrapper({ entry }: CardClientWrapperProps) {
  const handleCardClick = () => {
    // Handle card click - can be expanded later for navigation or detail view
    console.log(`Card clicked: ${entry.english}`);
  }

  return (
    <CardDisplay 
      entry={entry} 
      onClick={handleCardClick} 
    />
  )
} 