"use client"

import { KannadaEntry } from "@/types"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface EnhancedCardDisplayProps {
  entry: KannadaEntry
  isAutoPlaying?: boolean
  onAutoPlayComplete?: () => void
  onFlip?: () => void
  isMuted?: boolean
}

export function EnhancedCardDisplay({
  entry,
  isAutoPlaying = false,
  onAutoPlayComplete,
  onFlip,
  isMuted = false
}: EnhancedCardDisplayProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const {
    kannada = "N/A",
    english = "N/A",
    kanglish = "N/A",
    icon = null,
    waudio = null
  } = entry

  // Handle auto-play
  useEffect(() => {
    if (isAutoPlaying && !isFlipped) {
      const timer = setTimeout(() => {
        handleFlip()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isAutoPlaying, isFlipped])

  // Handle audio playback
  useEffect(() => {
    if (isFlipped && waudio && !isMuted) {
      playAudio()
    }
  }, [isFlipped, waudio, isMuted])

  const playAudio = () => {
    if (!waudio || isMuted) return

    if (audioRef.current) {
      audioRef.current.currentTime = 0
    } else {
      audioRef.current = new Audio(waudio)
    }

    setIsPlaying(true)
    audioRef.current.play().catch(error => {
      console.error("Error playing audio:", error)
      setIsPlaying(false)
    })

    audioRef.current.onended = () => {
      setIsPlaying(false)
      if (isAutoPlaying && onAutoPlayComplete) {
        onAutoPlayComplete()
      }
    }
  }

  const handleFlip = () => {
    if (isAutoPlaying && isFlipped) return // Don't flip back during auto-play
    setIsFlipped(!isFlipped)
    if (onFlip) {
      onFlip()
    }
  }

  return (
    <div
      className="perspective-1000 relative h-[400px] w-full"
      onClick={handleFlip}
    >
      <motion.div
        className="preserve-3d relative size-full cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front of card */}
        <motion.div
          className={`backface-hidden from-card to-card/80 absolute size-full rounded-xl bg-gradient-to-br p-6 shadow-lg ${
            isFlipped ? "hidden" : "block"
          }`}
        >
          {/* Icon */}
          <div className="flex h-full flex-col items-center justify-center">
            {icon ? (
              <Image
                src={icon}
                alt={`${english} icon`}
                width={200}
                height={200}
                className="size-48 object-contain"
              />
            ) : (
              <div className="bg-muted/50 flex size-48 items-center justify-center rounded-md">
                <span className="text-muted-foreground">No Icon</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className={`backface-hidden from-primary/10 to-primary/5 absolute size-full rounded-xl bg-gradient-to-br p-6 shadow-lg ${
            isFlipped ? "block" : "hidden"
          }`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-6">
            <h2 className="text-foreground text-4xl font-semibold" lang="kn">
              {kannada}
            </h2>
            <div className="space-y-2 text-center">
              <p className="text-foreground text-2xl">{english}</p>
              <p className="text-muted-foreground text-xl italic">{kanglish}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
