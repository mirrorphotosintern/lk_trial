// Enhanced timer component for Padhagala Raaja with cultural styling and improved visual feedback
// Features beautiful progress bar, color transitions, and enhanced user experience elements

"use client"

import { GAME_CONFIG, GAME_STATES } from "../../constants/game-constants";
import { IconClock } from "@tabler/icons-react";
import { formatTime } from "../../utils/format-time";


interface TimerProps {
  timeLeft: number;
  gameState: string;
}

export function Timer({ timeLeft, gameState }: TimerProps) {
  const lowTimer =
    gameState === GAME_STATES.ACTIVE &&
    timeLeft <= GAME_CONFIG.LOW_TIME_WARNING;
  
  const progressPercentage = (timeLeft / GAME_CONFIG.GAME_DURATION) * 100;
  const isUrgent = progressPercentage <= 20;
  const isWarning = progressPercentage <= 50;

  return (
    <div className={`
      flex-1 flex flex-col gap-2 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white border-2 transition-all duration-300 shadow-sm
      ${isUrgent ? 'border-red-400 bg-gradient-to-r from-red-50 to-pink-50 animate-pulse' : 
        isWarning ? 'border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50' : 
        'border-emerald-400 bg-gradient-to-r from-emerald-50 to-green-50'}
    `}>
      <div className="flex items-center gap-3">
        <div className={`
          p-2 rounded-full transition-all duration-300
          ${isUrgent ? 'bg-red-500 text-white animate-bounce' : 
            isWarning ? 'bg-amber-500 text-white' : 
            'bg-emerald-500 text-white'}
        `}>
          <IconClock size={20} />
        </div>
        <span className={`
          text-xl font-bold transition-all duration-300
          ${isUrgent ? 'text-red-600' : 
            isWarning ? 'text-amber-600' : 
            'text-emerald-600'}
        `}>
          {formatTime(timeLeft)}
        </span>
        {lowTimer && (
          <div className="text-xs font-semibold bg-red-100 text-red-600 px-2 py-1 rounded-full animate-bounce">
            ⚠️ HURRY!
          </div>
        )}
      </div>
      
      <div className={`
        h-3 bg-slate-200 rounded-full overflow-hidden relative shadow-inner
        ${lowTimer ? 'animate-pulse' : ''}
      `}>
        <div
          className={`
            h-full transition-all duration-1000 ease-out relative
            ${isUrgent ? 'bg-gradient-to-r from-red-500 to-red-600' : 
              isWarning ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 
              'bg-gradient-to-r from-emerald-500 to-green-500'}
          `}
          style={{ width: `${progressPercentage}%` }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}