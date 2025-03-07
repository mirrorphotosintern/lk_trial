"use client"

/**
 * @description
 * CardDisplay component renders a single KannadaEntry in a visually appealing card format.
 * Displays Kannada words with translations and playable audio.
 * 
 * Key features:
 * - Multilingual Display: Shows Kannada, English, and Kanglish text.
 * - Media Playback: Includes audio player for word pronunciation.
 * - Hover Effects: Card changes shade on hover.
 * - Clean Layout: Icon-centered design with text positioned as specified.
 * 
 * @dependencies
 * - lucide-react: Provides icons (Volume2) for audio controls.
 * - next/image: Optimizes image loading.
 * - @/types: Imports KannadaEntry interface for type safety.
 */

import { KannadaEntry } from "@/types"
import Image from "next/image"
import { Volume2 } from "lucide-react"
import { useState } from "react"

interface CardDisplayProps {
  entry: KannadaEntry
  onClick: () => void
}

export function CardDisplay({ entry, onClick }: CardDisplayProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  
  // Destructure the KannadaEntry with defaults for optional fields
  const {
    kannada = "N/A",
    english = "N/A",
    kanglish = "N/A",
    icon = null,
    waudio = null,
  } = entry

  // Play the word audio
  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click from triggering
    
    if (!waudio) return
    
    const audio = new Audio(waudio)
    
    setIsPlaying(true)
    
    audio.onended = () => {
      setIsPlaying(false)
    }
    
    audio.play().catch(error => {
      console.error("Error playing audio:", error)
      setIsPlaying(false)
    })
  }

  return (
    <div 
      className="w-full rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:bg-background hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {/* Icon in the middle */}
      <div className="flex justify-center mb-6 mt-2">
        {icon ? (
          <Image
            src={icon}
            alt={`${english} icon`}
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-md bg-muted">
            <span className="text-muted-foreground">No Icon</span>
          </div>
        )}
      </div>

      {/* Kannada text on top middle */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-foreground" lang="kn">
          {kannada}
        </h2>
      </div>

      {/* English and Kanglish at bottom left */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-base text-foreground">{english}</p>
          <p className="text-sm italic text-muted-foreground">{kanglish}</p>
        </div>

        {/* Sound icon at bottom right */}
        {waudio && (
          <button 
            className={`rounded-full p-2 ${isPlaying ? 'bg-primary/20' : 'bg-accent/50 hover:bg-accent'}`}
            onClick={playAudio}
            aria-label="Play word pronunciation"
          >
            <Volume2 className="h-5 w-5 text-foreground" />
          </button>
        )}
      </div>
    </div>
  )
}