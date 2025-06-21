// Enhanced game content component for Padhagala Raaja with cultural styling and improved animations
// Features beautiful visual feedback, bilingual text, and enhanced user experience elements

"use client"

import {
  GAME_STATES,
  GAME_TEXT,
  GameState
} from "../../constants/game-constants"
import { IconArrowForwardUp, IconClockPause } from "@tabler/icons-react"
import React from "react"
import { GameWord } from "./game-word"
import { Timer } from "./timer"

interface GameContentProps {
  gameState: GameState
  currentWord: string
  showAutoDetected: boolean
  timeLeft: number
  showIncorrect: boolean
  score: number
  skipsRemaining: number
  // onCorrect: () => void;
  onSkip: () => void
}

export const GameContent: React.FC<GameContentProps> = ({
  gameState,
  currentWord,
  showAutoDetected,
  showIncorrect,
  timeLeft,
  score,
  skipsRemaining,
  //onCorrect,
  onSkip
}) => {
  // Idle or Connecting State
  if (gameState === GAME_STATES.IDLE || gameState === GAME_STATES.CONNECTING) {
    return (
      <div className="cultural-card flex min-h-[200px] flex-col items-center justify-center rounded-2xl p-8 text-center">
        <div className="floating-element mb-4 text-2xl">🎯</div>
        <p className="cultural-decoration text-lg font-semibold leading-relaxed">
          {GAME_TEXT.startingGame}
        </p>
      </div>
    )
  }

  // Waiting for Intro State
  if (gameState === GAME_STATES.WAITING_FOR_INTRO) {
    return (
      <div className="cultural-card flex flex-1 animate-pulse flex-col items-center justify-center gap-4 rounded-2xl p-8">
        <div className="glow-effect flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg">
          <IconClockPause size={42} />
        </div>
        <span className="cultural-decoration text-center text-xl font-bold">
          {GAME_TEXT.waitingForIntro}
        </span>
        <div className="mt-2 flex gap-1">
          <div className="size-2 animate-bounce rounded-full bg-orange-400"></div>
          <div
            className="size-2 animate-bounce rounded-full bg-orange-400"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="size-2 animate-bounce rounded-full bg-orange-400"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    )
  }

  // Finished State
  if (gameState === GAME_STATES.FINISHED) {
    return (
      <div className="cultural-card flex min-h-[300px] flex-col items-center justify-center rounded-2xl p-8 text-center">
        <div className="floating-element mb-4 text-4xl">🏆</div>
        <h2 className="kannada-title mb-4 text-2xl font-bold">
          {GAME_TEXT.gameOver}
        </h2>
        <div className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white shadow-lg">
          <p className="text-lg">
            {GAME_TEXT.finalScore}:{" "}
            <strong className="text-2xl">{score}</strong>
          </p>
        </div>
        <p className="mt-4 font-medium text-slate-600">
          {GAME_TEXT.clickToStart}
        </p>
      </div>
    )
  }

  // Active Game State
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
      <GameWord
        word={currentWord}
        showAutoDetected={showAutoDetected}
        showIncorrect={showIncorrect}
      />
      <div className="flex w-full flex-col gap-3 lg:flex-row">
        <Timer timeLeft={timeLeft} gameState={gameState} />
        <button
          className={`button ${skipsRemaining <= 0 ? "ghost" : "outline"} group transition-all duration-300 hover:scale-105`}
          onClick={onSkip}
          disabled={skipsRemaining <= 0}
        >
          <IconArrowForwardUp
            size={24}
            className={`${skipsRemaining > 0 ? "text-current" : "opacity-50"} transition-transform duration-300 group-hover:rotate-12`}
          />
          <span className="font-bold">
            {skipsRemaining > 0
              ? GAME_TEXT.skipsRemaining(skipsRemaining)
              : GAME_TEXT.noSkips}
          </span>
        </button>
      </div>
    </div>
  )
}
