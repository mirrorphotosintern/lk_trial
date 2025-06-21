// Enhanced score display component for Padhagala Raaja with cultural styling and improved visual effects
// Features beautiful gradients, bilingual text, and enhanced user experience elements

import {
  IconLaurelWreathFilled,
  IconStarFilled,
  IconTrophy
} from "@tabler/icons-react"

interface ScoreRowProps {
  score: number
  bestScore: number
}

export function ScoreRow({ score, bestScore = 0 }: ScoreRowProps) {
  const isNewRecord = score > bestScore

  return (
    <div className="flex w-full flex-col justify-between gap-4 lg:w-auto lg:gap-6">
      {/* Current Score */}
      <div
        className={`
        cultural-card flex w-full flex-1 flex-row items-center gap-4 rounded-2xl 
        px-5 py-4 shadow-lg transition-all duration-300 hover:scale-105 lg:w-auto 
        lg:gap-5 lg:rounded-3xl lg:px-7 lg:py-5
        ${isNewRecord ? "animate-pulse border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50" : ""}
      `}
      >
        <div className="relative">
          <IconStarFilled
            size={42}
            className="size-10 text-orange-500 drop-shadow-lg lg:size-12"
          />
          {isNewRecord && (
            <div className="absolute -right-1 -top-1 animate-bounce">
              <div className="size-3 rounded-full bg-red-500"></div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold tracking-wider text-slate-600 lg:text-sm">
            ಪ್ರಸ್ತುತ ಅಂಕ Current Score
          </span>
          <span
            className={`
            text-2xl font-black leading-none lg:text-3xl
            ${isNewRecord ? "cultural-decoration" : "text-slate-800"}
          `}
          >
            {score}
          </span>
          {isNewRecord && (
            <span className="animate-pulse text-xs font-bold text-orange-600">
              🎉 New Record!
            </span>
          )}
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
        <div className="px-3 text-orange-400">
          <IconTrophy size={20} className="opacity-60" />
        </div>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
      </div>

      {/* Best Score */}
      <div className="cultural-card flex flex-row items-center gap-4 rounded-2xl px-5 py-4 shadow-lg transition-all duration-300 hover:scale-105 lg:gap-5 lg:rounded-3xl lg:px-7 lg:py-5">
        <IconLaurelWreathFilled
          size={42}
          className="size-10 text-amber-500 drop-shadow-lg lg:size-12"
        />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold tracking-wider text-slate-600 lg:text-sm">
            ಅತ್ಯುತ್ತಮ ಅಂಕ Best Score
          </span>
          <span className="text-2xl font-black leading-none text-slate-800 lg:text-3xl">
            {bestScore}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ScoreRow
