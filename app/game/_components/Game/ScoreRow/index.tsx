// Enhanced score display component for Padhagala Raaja with cultural styling and improved visual effects
// Features beautiful gradients, bilingual text, and enhanced user experience elements

import { IconLaurelWreathFilled, IconStarFilled, IconTrophy } from "@tabler/icons-react";

interface ScoreRowProps {
  score: number;
  bestScore: number;
}

export function ScoreRow({ score, bestScore = 0 }: ScoreRowProps) {
  const isNewRecord = score > bestScore;
  
  return (
    <div className="flex flex-col w-full lg:w-auto justify-between gap-4 lg:gap-6">
      {/* Current Score */}
      <div className={`
        flex flex-1 w-full lg:w-auto flex-row items-center gap-4 lg:gap-5 
        cultural-card rounded-2xl lg:rounded-3xl px-5 py-4 lg:px-7 lg:py-5 
        transition-all duration-300 hover:scale-105 shadow-lg
        ${isNewRecord ? 'animate-pulse bg-gradient-to-r from-amber-50 to-orange-50 border-amber-400' : ''}
      `}>
        <div className="relative">
          <IconStarFilled
            size={42}
            className="text-orange-500 size-10 lg:size-12 drop-shadow-lg"
          />
          {isNewRecord && (
            <div className="absolute -top-1 -right-1 animate-bounce">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs lg:text-sm text-slate-600 font-bold tracking-wider">
            ಪ್ರಸ್ತುತ ಅಂಕ Current Score
          </span>
          <span className={`
            text-2xl lg:text-3xl font-black leading-none
            ${isNewRecord ? 'cultural-decoration' : 'text-slate-800'}
          `}>
            {score}
          </span>
          {isNewRecord && (
            <span className="text-xs text-orange-600 font-bold animate-pulse">
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
      <div className="flex flex-row items-center gap-4 lg:gap-5 cultural-card rounded-2xl lg:rounded-3xl px-5 py-4 lg:px-7 lg:py-5 transition-all duration-300 hover:scale-105 shadow-lg">
        <IconLaurelWreathFilled
          size={42}
          className="text-amber-500 size-10 lg:size-12 drop-shadow-lg"
        />
        <div className="flex flex-col gap-1">
          <span className="text-xs lg:text-sm text-slate-600 font-bold tracking-wider">
            ಅತ್ಯುತ್ತಮ ಅಂಕ Best Score
          </span>
          <span className="text-2xl lg:text-3xl font-black leading-none text-slate-800">
            {bestScore}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScoreRow;




