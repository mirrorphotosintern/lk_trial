"use client"

/**
 * @description
 * CardClientWrapper is a client component that wraps the CardDisplay component.
 * Simple wrapper to handle client-side rendering of cards.
 *
 * Key features:
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
  return (
    <CardDisplay entry={entry} />
  )
} 