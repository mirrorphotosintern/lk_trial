// Main game component for Padhagala Raaja with enhanced cultural styling and improved user experience
// Features beautiful layout, enhanced animations, and bilingual elements for the Kannada word learning experience

"use client"

import { GAME_STATES, GAME_TEXT } from "../../constants/game-constants"
import { useConnectionState } from "../../hooks/use-connection-state"
import { useGameState } from "../../hooks/use-game-state"
import { useGameTimer } from "../../hooks/use-game-timer"
import { useVisualFeedback } from "../../hooks/use-visual-feedback"
import { useWordDetection } from "../../hooks/use-word-detection"
import { RTVIEvent } from "@pipecat-ai/client-js"
import { useRTVIClientEvent } from "@pipecat-ai/client-react"
import { IconCircleDashedCheck, IconDoorExit } from "@tabler/icons-react"
import { useCallback, useEffect, useRef } from "react"
import { GameContent } from "./game-content"
import { ScoreRow } from "./ScoreRow"
import JSConfetti from "js-confetti"
import Image from "next/image"

export const WordWrangler: React.FC<{
  onGameEnded: (score: number, bestScore: number) => void
}> = ({ onGameEnded }) => {
  const botIntroCompletedRef = useRef(false)
  const currentScoreRef = useRef(0)
  const gameState = useGameState()
  const visualFeedback = useVisualFeedback()
  const { isConnected, client } = useConnectionState()

  // Update the ref whenever score changes
  useEffect(() => {
    currentScoreRef.current = gameState.score
  }, [gameState.score])

  // End the game
  const endGame = useCallback(async () => {
    const scoreAtCallTime = currentScoreRef.current

    // Prevent multiple calls to endGame
    if (gameState.gameState === GAME_STATES.FINISHED) {
      console.log("endGame prevented - game already finished")
      return
    }

    // Capture the current score before any state changes
    const finalScore = scoreAtCallTime
    const currentBestScore = gameState.bestScore

    // Update game state
    gameState.finishGame()
    visualFeedback.resetVisuals()

    // Update best score if needed
    if (currentBestScore < finalScore) {
      gameState.setBestScore(finalScore)
    }

    // Disconnect the bot
    if (client && isConnected) {
      try {
        await client.disconnectBot()
        await client.disconnect()
      } catch (error) {
        console.error("Error disconnecting bot:", error)
      }
    }

    // Call the callback with the captured scores
    onGameEnded(finalScore, Math.max(finalScore, currentBestScore))
  }, [gameState, visualFeedback, client, isConnected, onGameEnded])

  const gameTimer = useGameTimer(endGame)

  const wordDetection = useWordDetection({
    gameState: gameState.gameState,
    currentWord: gameState.currentWord,
    onCorrectGuess: handleCorrectGuess,
    onIncorrectGuess: handleIncorrectGuess
  })

  // Initialize on component mount
  useEffect(() => {
    gameState.initializeGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Handle connection state changes
  useEffect(() => {
    if (isConnected) {
      if (!botIntroCompletedRef.current) {
        // Connection is active, but bot hasn't completed intro
        gameState.setGameState(GAME_STATES.WAITING_FOR_INTRO)
      }
    } else {
      // Connection lost or never established
      if (gameState.gameState === GAME_STATES.ACTIVE) {
        // If game was active, it's now finished
        endGame()
      } else if (gameState.gameState !== GAME_STATES.FINISHED) {
        // Reset to idle state if not already finished
        gameState.setGameState(GAME_STATES.IDLE)
      }

      // Reset intro state when connection is lost
      botIntroCompletedRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, gameState.gameState, endGame])

  // Listen for the bot to stop speaking to detect intro completion
  useRTVIClientEvent(RTVIEvent.BotStoppedSpeaking, () => {
    if (
      gameState.gameState === GAME_STATES.WAITING_FOR_INTRO &&
      !botIntroCompletedRef.current
    ) {
      // First time the bot stops speaking, consider intro done and start the game
      botIntroCompletedRef.current = true
      startGame()
    }
  })

  // Handle correct guess with animation
  function handleCorrectGuess() {
    visualFeedback.showCorrect(() => {
      gameState.incrementScore()
      gameState.moveToNextWord()
      wordDetection.resetLastProcessedMessage()
    })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojis: ["🎉", "⭐", "💯", "🏆", "✨"],
      confettiNumber: 50
    })
  }

  // Handle incorrect guess with animation
  function handleIncorrectGuess() {
    visualFeedback.showIncorrectAnimation()
  }

  // Start the game
  function startGame() {
    // Initialize game state
    gameState.initializeGame()
    wordDetection.resetLastProcessedMessage()

    // Start the timer - now it internally manages countdown and calls endGame when done
    gameTimer.startTimer()
  }

  // Handle manual marking as correct
  function handleManualCorrect() {
    if (gameState.gameState !== GAME_STATES.ACTIVE) return

    gameState.incrementScore()

    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojis: ["🎯", "⭐", "💫"],
      confettiNumber: 30
    })

    gameState.moveToNextWord()
    wordDetection.resetLastProcessedMessage()
  }

  // Handle skipping a word
  function handleSkip() {
    if (gameState.gameState !== GAME_STATES.ACTIVE) return

    // Try to use a skip and proceed if successful
    if (gameState.useSkip()) {
      gameState.moveToNextWord()
      wordDetection.resetLastProcessedMessage()
    }
  }

  // Clean up on unmount
  useEffect(() => {
    return () => {
      gameTimer.stopTimer()
      visualFeedback.cleanup()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Cultural background decorations */}
      <div className="floating-element absolute left-8 top-10 text-3xl opacity-10">
        📚
      </div>
      <div
        className="floating-element absolute right-12 top-40 text-4xl opacity-15"
        style={{ animationDelay: "1s" }}
      >
        🎯
      </div>
      <div
        className="floating-element absolute bottom-32 left-10 text-3xl opacity-10"
        style={{ animationDelay: "2s" }}
      >
        ✨
      </div>
      <div
        className="floating-element absolute bottom-10 right-8 text-4xl opacity-15"
        style={{ animationDelay: "1.5s" }}
      >
        💭
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        <div className="flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
          <div className="relative w-full max-w-4xl flex-1">
            <Image
              src="/game/logo.png"
              alt="Padhagala Raaja"
              width={120}
              height={120}
              className="logo floating-element absolute left-[50%] top-[-40px] z-10 size-[100px] -translate-x-1/2 lg:left-auto lg:right-[-30px] lg:top-[-50px] lg:size-[120px] lg:-translate-x-0"
              priority
            />
            <div className="cultural-card mt-8 rounded-3xl p-6 lg:mt-0 lg:p-8">
              <GameContent
                gameState={gameState.gameState}
                timeLeft={gameTimer.timeLeft}
                currentWord={gameState.currentWord}
                showAutoDetected={visualFeedback.showAutoDetected}
                showIncorrect={visualFeedback.showIncorrect}
                score={gameState.score}
                skipsRemaining={gameState.skipsRemaining}
                onSkip={handleSkip}
              />
            </div>
          </div>
          <div className="w-full lg:w-auto lg:min-w-[280px]">
            <ScoreRow score={gameState.score} bestScore={gameState.bestScore} />
          </div>
        </div>

        <footer className="flex w-full max-w-2xl flex-col items-center justify-center gap-3 py-6 lg:flex-row lg:gap-4">
          <button
            className="button group w-full outline transition-all duration-300 hover:scale-105 lg:w-auto"
            onClick={handleManualCorrect}
            disabled={gameState.gameState !== GAME_STATES.ACTIVE}
          >
            <IconCircleDashedCheck
              size={24}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="font-bold">{GAME_TEXT.correct}</span>
          </button>
          <button
            className="button ghost group w-full transition-all duration-300 hover:scale-105 lg:w-auto"
            onClick={endGame}
            disabled={
              gameState.gameState == GAME_STATES.CONNECTING ||
              gameState.gameState == GAME_STATES.WAITING_FOR_INTRO
            }
          >
            <IconDoorExit
              size={24}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="font-bold">ಅಂತ್ಯ End Game</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
