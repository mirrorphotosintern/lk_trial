// Main page component for Padhagala Raaja - A beautiful Kannada-inspired word learning experience
// Features cultural design elements, enhanced animations, and bilingual text for better engagement

"use client"

import { Card, CardInner } from "./_components/card";
import { WordWrangler } from "./_components/Game/word-wrangler";
import { StartGameButton } from "./_components/StartButton";
import { GAME_TEXT } from "./constants/game-constants";
import { PERSONALITY_PRESETS, PersonalityType } from "./types/personality";
import { useConfigurationSettings, ConfigurationProvider } from "./contexts/configuration";
import { RTVIProvider } from "./providers/RTVIProvider";
import { RTVIClientAudio } from "@pipecat-ai/client-react";
import {
  IconArrowForwardUp,
  IconCheck,
  IconCode,
  IconX,
  IconTrophy,
  IconTarget,
  IconClock,
  IconSparkles,
} from "@tabler/icons-react";
import JSConfetti from "js-confetti";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function GameContent() {
  const [hasStarted, setHasStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const config = useConfigurationSettings();

  useEffect(() => {
    if (gameEnded) {
      const confetti = new JSConfetti();
      confetti.addConfetti({
        emojis: ["🏆", "⭐", "🎉", "💫", "🌟", "👑", "💯", "🎊"],
        confettiNumber: 150,
      });
    }
  }, [gameEnded]);

  if (gameEnded) {
    return (
      <div className="flex flex-col justify-between lg:justify-center items-center min-h-[100dvh] py-6 relative overflow-hidden">
        {/* Cultural background elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 floating-element">🏆</div>
        <div className="absolute top-32 right-16 text-4xl opacity-15 floating-element" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute bottom-32 left-16 text-5xl opacity-10 floating-element" style={{animationDelay: '2s'}}>🌟</div>
        
        <div className="flex flex-1 w-full">
          <Card className="cultural-card w-full lg:max-w-2xl mx-auto mt-[50px] lg:mt-[120px] self-center text-center pt-[62px] slide-up-animation">
            <div className="flex items-center justify-center w-[162px] h-[162px] rounded-full absolute z-20 -top-[81px] left-1/2 -translate-x-1/2 animate-bounce-in glow-effect">
              <Image src="/game/star.png" alt="Celebration Star" width={162} height={162} priority />
            </div>
            <CardInner>
              <div className="fade-in-animation">
                <h2 className="text-xl lg:text-2xl font-extrabold mb-2 kannada-title">
                  ಅಭಿನಂದನೆಗಳು! Congratulations!
                </h2>
                <p className="text-lg text-slate-600 mb-4">You are truly a Padhagala Raaja!</p>
              </div>
              
              <div className="my-6 slide-up-animation" style={{animationDelay: '0.3s'}}>
                <h3 className="text-lg font-bold text-slate-700 mb-2">{GAME_TEXT.finalScore}</h3>
                <div className="relative">
                  <p className="text-5xl lg:text-6xl font-extrabold cultural-decoration bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-6 py-6 my-4 shadow-xl">
                    {score}
                  </p>
                  <div className="absolute -top-2 -right-2 text-2xl">🎯</div>
                </div>
              </div>
              
              <div className="slide-up-animation" style={{animationDelay: '0.6s'}}>
                <p className="font-medium text-slate-600 mb-2">
                  {GAME_TEXT.finalScoreMessage}
                </p>
                <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border-2 border-amber-200">
                  <IconTrophy size={20} className="text-amber-600" />
                  <span className="text-xl font-extrabold text-amber-700">{bestScore}</span>
                </div>
              </div>
              
              <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-300 to-transparent my-8" />
              
              <div className="flex items-center justify-center slide-up-animation" style={{animationDelay: '0.9s'}}>
                <Link
                  href="https://github.com/daily-co/word-wrangler-gemini-live"
                  className="game-button ghost w-full lg:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconCode size={24} />
                  View Source Code
                </Link>
              </div>
            </CardInner>
          </Card>
        </div>
        
        <footer className="flex flex-col justify-center w-full py-6 lg:py-12">
          <StartGameButton
            isGameEnded={true}
            onGameStarted={() => {
              setGameEnded(false);
              setScore(0);
              setHasStarted(true);
            }}
          />
        </footer>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="flex flex-col justify-between items-center min-h-[100dvh] py-6 overflow-hidden relative">
        {/* Cultural background decorations */}
        <div className="absolute top-20 left-8 text-4xl opacity-15 floating-element">🎯</div>
        <div className="absolute top-40 right-12 text-3xl opacity-20 floating-element" style={{animationDelay: '1.5s'}}>📚</div>
        <div className="absolute bottom-40 left-12 text-3xl opacity-10 floating-element" style={{animationDelay: '3s'}}>✨</div>
        <div className="absolute bottom-60 right-8 text-4xl opacity-15 floating-element" style={{animationDelay: '2s'}}>🏆</div>
        
        <div className="flex flex-1">
          <Card className="cultural-card lg:min-w-2xl mx-auto mt-[50px] lg:mt-[120px] self-center slide-up-animation">
            <Image
              src="/game/logo.png"
              alt="Padhagala Raaja Logo"
              width={278}
              height={278}
              className="logo w-[150px] lg:w-[278px] h-auto absolute top-[-75px] lg:top-[-139px] left-[50%] -translate-x-1/2 z-10 animate-bounce-in glow-effect"
              priority
            />

            <CardInner>
              <div className="flex flex-col gap-6 lg:gap-8 text-center mt-[50px] lg:mt-[100px]">
                {/* Beautiful title section */}
                <div className="fade-in-animation">
                  <h1 className="text-2xl lg:text-3xl font-black mb-3 kannada-title">
                    ಪದಗಳ ರಾಜ
                  </h1>
                  <h2 className="text-xl lg:text-2xl font-bold text-slate-700 mb-2">
                    Padhagala Raaja
                  </h2>
                  <p className="text-lg font-semibold cultural-decoration">
                    {GAME_TEXT.introTitle}
                  </p>
                </div>
                
                {/* Enhanced guide cards */}
                <div className="flex flex-col gap-4 lg:gap-5 slide-up-animation" style={{animationDelay: '0.3s'}}>
                  <div className="flex flex-row gap-4 relative group hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute -top-3 -left-3 border-3 border-white lg:static size-12 lg:size-14 bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                      <IconCheck size={24} />
                    </div>
                    <div className="flex-1 flex h-[60px] lg:h-auto bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl text-slate-600 leading-5 px-6 lg:px-8 items-center justify-center font-semibold text-pretty text-sm lg:text-base border-2 border-emerald-200 shadow-sm">
                      {GAME_TEXT.introGuide1}
                    </div>
                  </div>
                  
                  <div className="flex flex-row gap-4 relative group hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute -top-3 -left-3 border-3 border-white lg:static size-12 lg:size-14 bg-gradient-to-br from-red-100 to-pink-200 text-red-600 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                      <IconX size={24} />
                    </div>
                    <div className="flex-1 flex h-[60px] lg:h-auto bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl text-slate-600 leading-5 px-6 lg:px-8 items-center justify-center font-semibold text-pretty text-sm lg:text-base border-2 border-red-200 shadow-sm">
                      {GAME_TEXT.introGuide2}
                    </div>
                  </div>
                  
                  <div className="flex flex-row gap-4 relative group hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute -top-3 -left-3 border-3 border-white lg:static size-12 lg:size-14 bg-gradient-to-br from-amber-100 to-orange-200 text-amber-700 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                      <IconArrowForwardUp size={24} />
                    </div>
                    <div className="flex-1 flex h-[60px] lg:h-auto bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl text-slate-600 leading-5 px-6 lg:px-8 items-center justify-center font-semibold text-pretty text-sm lg:text-base border-2 border-amber-200 shadow-sm">
                      {GAME_TEXT.introGuide3}
                    </div>
                  </div>
                </div>
                
                {/* Game stats preview */}
                <div className="flex justify-center gap-6 lg:gap-8 my-4 slide-up-animation" style={{animationDelay: '0.6s'}}>
                  <div className="flex flex-col items-center">
                    <IconClock size={28} className="text-orange-500 mb-1" />
                    <span className="text-sm font-bold text-slate-600">60 seconds</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <IconTarget size={28} className="text-blue-500 mb-1" />
                    <span className="text-sm font-bold text-slate-600">Unlimited words</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <IconSparkles size={28} className="text-purple-500 mb-1" />
                    <span className="text-sm font-bold text-slate-600">AI powered</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 bg-gradient-to-r from-transparent via-orange-200 to-transparent h-[1px] my-6 lg:my-8" />
              
              <div className="slide-up-animation" style={{animationDelay: '0.9s'}}>
                <label className="font-bold flex flex-col gap-3 flex-1">
                  <span className="text-lg cultural-decoration">{GAME_TEXT.aiPersonality}</span>
                  <select
                    className="game-select rounded-xl h-12 font-normal text-base shadow-sm"
                    value={config.personality}
                    onChange={(e) =>
                      config.setPersonality(e.target.value as PersonalityType)
                    }
                  >
                    {Object.entries(PERSONALITY_PRESETS).map(
                      ([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      )
                    )}
                  </select>
                </label>
              </div>
            </CardInner>
          </Card>
        </div>
        
        <footer className="flex flex-col justify-center w-full py-6 lg:py-12 slide-up-animation" style={{animationDelay: '1.2s'}}>
          <StartGameButton onGameStarted={() => setHasStarted(true)} />
        </footer>
      </div>
    );
  }

  return (
    <WordWrangler
      onGameEnded={(score, bestScore = 0) => {
        setScore(score);
        setBestScore(bestScore);
        setGameEnded(true);
      }}
    />
  );
}

export default function GamePage() {
  return (
    <ConfigurationProvider>
      <RTVIProvider>
        <RTVIClientAudio />
        <GameContent />
      </RTVIProvider>
    </ConfigurationProvider>
  );
} 