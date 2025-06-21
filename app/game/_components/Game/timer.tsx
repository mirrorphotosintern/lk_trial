// Enhanced timer component for Padhagala Raaja with cultural styling and improved visual feedback
// Features beautiful progress bar, color transitions, and enhanced user experience elements

"use client"

import { GAME_CONFIG, GAME_STATES } from "../../constants/game-constants"
import { IconClock } from "@tabler/icons-react"
import { formatTime } from "../../utils/format-time"

interface TimerProps {
  timeLeft: number
  gameState: string
}

export function Timer({ timeLeft, gameState }: TimerProps) {
  const lowTimer =
    gameState === GAME_STATES.ACTIVE && timeLeft <= GAME_CONFIG.LOW_TIME_WARNING

  const progressPercentage = (timeLeft / GAME_CONFIG.GAME_DURATION) * 100
  const isUrgent = progressPercentage <= 20
  const isWarning = progressPercentage <= 50

  return (
    <div
      className={`
      flex flex-1 flex-col gap-2 rounded-xl border-2 bg-gradient-to-r from-slate-50 to-white p-4 shadow-sm transition-all duration-300
      ${
        isUrgent
          ? "animate-pulse border-red-400 bg-gradient-to-r from-red-50 to-pink-50"
          : isWarning
            ? "border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50"
            : "border-emerald-400 bg-gradient-to-r from-emerald-50 to-green-50"
      }
    `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
          rounded-full p-2 transition-all duration-300
          ${
            isUrgent
              ? "animate-bounce bg-red-500 text-white"
              : isWarning
                ? "bg-amber-500 text-white"
                : "bg-emerald-500 text-white"
          }
        `}
        >
          <IconClock size={20} />
        </div>
        <span
          className={`
          text-xl font-bold transition-all duration-300
          ${
            isUrgent
              ? "text-red-600"
              : isWarning
                ? "text-amber-600"
                : "text-emerald-600"
          }
        `}
        >
          {formatTime(timeLeft)}
        </span>
        {lowTimer && (
          <div className="animate-bounce rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
            ⚠️ HURRY!
          </div>
        )}
      </div>

      <div
        className={`
        relative h-3 overflow-hidden rounded-full bg-slate-200 shadow-inner
        ${lowTimer ? "animate-pulse" : ""}
      `}
      >
        <div
          className={`
            relative h-full transition-all duration-1000 ease-out
            ${
              isUrgent
                ? "bg-gradient-to-r from-red-500 to-red-600"
                : isWarning
                  ? "bg-gradient-to-r from-amber-500 to-orange-500"
                  : "bg-gradient-to-r from-emerald-500 to-green-500"
            }
          `}
          style={{ width: `${progressPercentage}%` }}
        >
          <div className="absolute inset-0 animate-pulse bg-white/30"></div>
        </div>
      </div>
    </div>
  )
}
