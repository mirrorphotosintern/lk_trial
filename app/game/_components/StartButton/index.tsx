"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { toast } from "sonner"
import { BUTTON_TEXT } from "../../constants/game-constants"
import { useConnectionState } from "../../hooks/use-connection-state"
import { IconArrowRight, IconSparkles } from "@tabler/icons-react"

interface StartGameButtonProps {
  onGameStarted?: () => void
  onGameEnded?: () => void
  isGameEnded?: boolean
}

export function StartGameButton({
  onGameStarted,
  onGameEnded,
  isGameEnded
}: StartGameButtonProps) {
  const { isConnecting, isDisconnecting, toggleConnection } =
    useConnectionState(onGameStarted, onGameEnded)

  const { user } = useUser()
  const [isProcessing, setIsProcessing] = useState(false)

  const showSpinner = isConnecting || isProcessing
  const btnText = isGameEnded ? BUTTON_TEXT.RESTART : BUTTON_TEXT.START

  const handleStart = async () => {
    if (!user?.id) {
      toast.error("User not found")
      return
    }

    setIsProcessing(true)

    try {
      const res = await fetch("/api/deduct-credits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, amount: 50 }) // 💰 Deduct 50 credits
      })

      if (!res.ok) {
        const msg = await res.text()
        toast.error(msg || "Insufficient credits to start the game")
        return
      }

      toast.success("50 credits deducted. Game starting...")
      toggleConnection()
    } catch (err) {
      console.error("Credit deduction error:", err)
      toast.error("Could not start the game.")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex justify-center">
      <button
        className="styled-button group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        onClick={handleStart}
        disabled={isConnecting || isDisconnecting || isProcessing}
      >
        <span className="styled-button-text group-hover:animate-pulse">
          {showSpinner ? BUTTON_TEXT.CONNECTING : btnText}
        </span>
        <span className="styled-button-icon transition-transform duration-300 group-hover:rotate-12">
          {showSpinner ? (
            <span className="spinner"></span>
          ) : isGameEnded ? (
            <IconSparkles size={18} strokeWidth={3} className="text-white" />
          ) : (
            <IconArrowRight size={18} strokeWidth={3} className="text-white" />
          )}
        </span>
      </button>
    </div>
  )
}
