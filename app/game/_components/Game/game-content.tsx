// Enhanced game content component for Padhagala Raaja with cultural styling and improved animations
// Features beautiful visual feedback, bilingual text, and enhanced user experience elements

"use client"

import { GAME_STATES, GAME_TEXT, GameState } from "../../constants/game-constants";
import { IconArrowForwardUp, IconClockPause } from "@tabler/icons-react";
import React from "react";
import { GameWord } from "./game-word";
import { Timer } from "./timer";

interface GameContentProps {
  gameState: GameState;
  currentWord: string;
  showAutoDetected: boolean;
  timeLeft: number;
  showIncorrect: boolean;
  score: number;
  skipsRemaining: number;
  // onCorrect: () => void;
  onSkip: () => void;
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
  onSkip,
}) => {
  // Idle or Connecting State
  if (gameState === GAME_STATES.IDLE || gameState === GAME_STATES.CONNECTING) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center cultural-card rounded-2xl min-h-[200px]">
        <div className="text-2xl mb-4 floating-element">🎯</div>
        <p className="text-lg font-semibold cultural-decoration leading-relaxed">
          {GAME_TEXT.startingGame}
        </p>
      </div>
    );
  }

  // Waiting for Intro State
  if (gameState === GAME_STATES.WAITING_FOR_INTRO) {
    return (
      <div className="animate-pulse flex flex-1 flex-col gap-4 items-center justify-center cultural-card rounded-2xl p-8">
        <div className="size-20 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg glow-effect">
          <IconClockPause size={42} />
        </div>
        <span className="text-xl font-bold cultural-decoration text-center">
          {GAME_TEXT.waitingForIntro}
        </span>
        <div className="flex gap-1 mt-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    );
  }

  // Finished State
  if (gameState === GAME_STATES.FINISHED) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center cultural-card rounded-2xl min-h-[300px]">
        <div className="text-4xl mb-4 floating-element">🏆</div>
        <h2 className="text-2xl font-bold kannada-title mb-4">{GAME_TEXT.gameOver}</h2>
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl shadow-lg">
          <p className="text-lg">
            {GAME_TEXT.finalScore}: <strong className="text-2xl">{score}</strong>
          </p>
        </div>
        <p className="mt-4 text-slate-600 font-medium">{GAME_TEXT.clickToStart}</p>
      </div>
    );
  }

  // Active Game State
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      <GameWord
        word={currentWord}
        showAutoDetected={showAutoDetected}
        showIncorrect={showIncorrect}
      />
      <div className="flex flex-col lg:flex-row gap-3 w-full">
        <Timer timeLeft={timeLeft} gameState={gameState} />
        <button
          className={`button ${skipsRemaining <= 0 ? 'ghost' : 'outline'} group transition-all duration-300 hover:scale-105`}
          onClick={onSkip}
          disabled={skipsRemaining <= 0}
        >
          <IconArrowForwardUp size={24} className={`${skipsRemaining > 0 ? 'text-current' : 'opacity-50'} group-hover:rotate-12 transition-transform duration-300`} />
          <span className="font-bold">
            {skipsRemaining > 0
              ? GAME_TEXT.skipsRemaining(skipsRemaining)
              : GAME_TEXT.noSkips}
          </span>
        </button>
      </div>
    </div>
  );
};
