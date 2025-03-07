"use client"

/**
 * @description
 * ExpandedCard component shows a detailed view of a KannadaEntry when a card is clicked.
 * It displays all information about the word including sentences, audio, and images.
 * 
 * Key features:
 * - Expanded View: Displays more detailed information when a card is clicked.
 * - Background Blur: Blurs the background content when expanded.
 * - Audio Playback: Provides controls for both word and sentence pronunciation.
 * - Close Button: Allows user to return to the main view.
 * 
 * @dependencies
 * - lucide-react: Provides icons (X, Volume2) for controls.
 * - next/image: Optimizes image loading.
 * - @/types: Imports KannadaEntry interface for type safety.
 * - framer-motion: Provides animations for the modal.
 */

import { KannadaEntry } from "@/types"
import Image from "next/image"
import { X, Volume2 } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

interface ExpandedCardProps {
  entry: KannadaEntry
  onClose: () => void
}

export function ExpandedCard({ entry, onClose }: ExpandedCardProps) {
  const [isPlayingWord, setIsPlayingWord] = useState(false)
  const [isPlayingSentence, setIsPlayingSentence] = useState(false)
  
  // Destructure the KannadaEntry with defaults for optional fields
  const {
    kannada = "N/A",
    english = "N/A",
    kanglish = "N/A",
    icon = null,
    waudio = null,
    ksentence = null,
    esentence = null,
    kesentence = null,
    image = null,
    saudio = null,
  } = entry

  // Play the word audio
  const playWordAudio = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent other clicks from triggering
    
    if (!waudio) return
    
    const audio = new Audio(waudio)
    
    setIsPlayingWord(true)
    
    audio.onended = () => {
      setIsPlayingWord(false)
    }
    
    audio.play().catch(error => {
      console.error("Error playing word audio:", error)
      setIsPlayingWord(false)
    })
  }

  // Play the sentence audio
  const playSentenceAudio = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent other clicks from triggering
    
    if (!saudio) return
    
    const audio = new Audio(saudio)
    
    setIsPlayingSentence(true)
    
    audio.onended = () => {
      setIsPlayingSentence(false)
    }
    
    audio.play().catch(error => {
      console.error("Error playing sentence audio:", error)
      setIsPlayingSentence(false)
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-card p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the modal
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close button */}
        <button 
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-accent"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Top section: Kannada, English, Kanglish, Icon */}
        <div className="flex justify-between items-start mb-8">
          {/* Left: Text content */}
          <div>
            <h2 className="text-3xl font-semibold text-foreground mb-2" lang="kn">
              {kannada}
            </h2>
            <p className="text-xl text-foreground">{english}</p>
            <p className="text-lg italic text-muted-foreground">{kanglish}</p>
          </div>

          {/* Right: Icon and sound */}
          <div className="flex items-center">
            {icon && (
              <Image
                src={icon}
                alt={`${english} icon`}
                width={60}
                height={60}
                className="h-15 w-15 object-contain mr-4"
              />
            )}
            
            {waudio && (
              <button 
                className={`rounded-full p-3 ${isPlayingWord ? 'bg-primary/20' : 'bg-accent/50 hover:bg-accent'}`}
                onClick={playWordAudio}
                aria-label="Play word pronunciation"
              >
                <Volume2 className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>

        {/* Middle: Image */}
        {image && (
          <div className="flex justify-center mb-8">
            <Image
              src={image}
              alt={`${english} illustration`}
              width={400}
              height={300}
              className="rounded-lg object-contain max-h-[300px]"
            />
          </div>
        )}

        {/* Bottom: Sentences */}
        {ksentence && (
          <div className="flex flex-col items-center">
            <div className="text-center mb-2">
              <p className="text-xl font-medium text-foreground mb-2" lang="kn">{ksentence}</p>
              <p className="text-lg text-foreground mb-1">{kesentence}</p>
              <p className="text-base text-muted-foreground">{esentence}</p>
            </div>

            {/* Sentence audio */}
            {saudio && (
              <button 
                className={`rounded-full p-3 mt-2 ${isPlayingSentence ? 'bg-primary/20' : 'bg-accent/50 hover:bg-accent'}`}
                onClick={playSentenceAudio}
                aria-label="Play sentence pronunciation"
              >
                <Volume2 className="h-6 w-6" />
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
} 