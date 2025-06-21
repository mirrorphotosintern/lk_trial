// Client component for Padhagala Raaja game functionality
// Contains all the interactive game logic, state management, and UI components

"use client"

import { Card, CardInner } from "./card"
import { WordWrangler } from "./Game/word-wrangler"
import { StartGameButton } from "./StartButton"
import { GAME_TEXT } from "../constants/game-constants"
import { PERSONALITY_PRESETS, PersonalityType } from "../types/personality"
import {
  useConfigurationSettings,
  ConfigurationProvider
} from "../contexts/configuration"
import { RTVIProvider } from "../providers/RTVIProvider"
import { RTVIClientAudio } from "@pipecat-ai/client-react"
import {
  IconArrowForwardUp,
  IconCheck,
  IconCode,
  IconX,
  IconTrophy,
  IconTarget,
  IconClock,
  IconSparkles
} from "@tabler/icons-react"
import JSConfetti from "js-confetti"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function GameContent() {
  const [hasStarted, setHasStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const config = useConfigurationSettings()

  useEffect(() => {
    if (gameEnded) {
      const confetti = new JSConfetti()
      confetti.addConfetti({
        emojis: ["🏆", "⭐", "🎉", "💫", "🌟", "👑", "💯", "🎊"],
        confettiNumber: 150
      })
    }
  }, [gameEnded])

  if (gameEnded) {
    return (
      <div className="relative flex min-h-[100dvh] flex-col items-center justify-between overflow-hidden py-6 lg:justify-center">
        {/* Cultural background elements */}
        <div className="floating-element absolute left-10 top-10 text-6xl opacity-20">
          🏆
        </div>
        <div
          className="floating-element absolute right-16 top-32 text-4xl opacity-15"
          style={{ animationDelay: "1s" }}
        >
          ✨
        </div>
        <div
          className="floating-element absolute bottom-32 left-16 text-5xl opacity-10"
          style={{ animationDelay: "2s" }}
        >
          🌟
        </div>

        <div className="flex w-full flex-1">
          <Card className="cultural-card slide-up-animation mx-auto mt-[50px] w-full self-center pt-[62px] text-center lg:mt-[120px] lg:max-w-2xl">
            <div className="animate-bounce-in glow-effect absolute -top-[81px] left-1/2 z-20 flex size-[162px] -translate-x-1/2 items-center justify-center rounded-full">
              <Image
                src="/game/star.png"
                alt="Celebration Star"
                width={162}
                height={162}
                priority
              />
            </div>
            <CardInner>
              <div className="fade-in-animation">
                <h2 className="kannada-title mb-2 text-xl font-extrabold lg:text-2xl">
                  ಅಭಿನಂದನೆಗಳು! Congratulations!
                </h2>
                <p className="mb-4 text-lg text-slate-600">
                  You are truly a Padhagala Raaja!
                </p>
              </div>

              <div
                className="slide-up-animation my-6"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="mb-2 text-lg font-bold text-slate-700">
                  {GAME_TEXT.finalScore}
                </h3>
                <div className="relative">
                  <p className="cultural-decoration my-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-5xl font-extrabold shadow-xl lg:text-6xl">
                    {score}
                  </p>
                  <div className="absolute -right-2 -top-2 text-2xl">🎯</div>
                </div>
              </div>

              <div
                className="slide-up-animation"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="mb-2 font-medium text-slate-600">
                  {GAME_TEXT.finalScoreMessage}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-200 bg-amber-50 px-4 py-2">
                  <IconTrophy size={20} className="text-amber-600" />
                  <span className="text-xl font-extrabold text-amber-700">
                    {bestScore}
                  </span>
                </div>
              </div>

              <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-orange-300 to-transparent" />

              <div
                className="slide-up-animation flex items-center justify-center"
                style={{ animationDelay: "0.9s" }}
              >
                <Link
                  href="https://mirrorphotos.io/"
                  className="game-button ghost w-full lg:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconCode size={24} />
                  Visit Us!
                </Link>
              </div>
            </CardInner>
          </Card>
        </div>

        <footer className="flex w-full flex-col justify-center py-6 lg:py-12">
          <StartGameButton
            isGameEnded={true}
            onGameStarted={() => {
              setGameEnded(false)
              setScore(0)
              setHasStarted(true)
            }}
          />
        </footer>
      </div>
    )
  }

  if (!hasStarted) {
    return (
      <div className="relative flex min-h-[100dvh] flex-col items-center justify-between overflow-hidden py-6">
        {/* Cultural background decorations */}
        <div className="floating-element absolute left-8 top-20 text-4xl opacity-15">
          🎯
        </div>
        <div
          className="floating-element absolute right-12 top-40 text-3xl opacity-20"
          style={{ animationDelay: "1.5s" }}
        >
          📚
        </div>
        <div
          className="floating-element absolute bottom-40 left-12 text-3xl opacity-10"
          style={{ animationDelay: "3s" }}
        >
          ✨
        </div>
        <div
          className="floating-element absolute bottom-60 right-8 text-4xl opacity-15"
          style={{ animationDelay: "2s" }}
        >
          🏆
        </div>

        <div className="flex flex-1">
          <Card className="cultural-card lg:min-w-2xl slide-up-animation mx-auto mt-[50px] self-center lg:mt-[120px]">
            <Image
              src="/game/logo.png"
              alt="Padhagala Raaja Logo"
              width={278}
              height={278}
              className="logo animate-bounce-in glow-effect absolute left-[50%] top-[-75px] z-10 h-auto w-[150px] -translate-x-1/2 lg:top-[-139px] lg:w-[278px]"
              priority
            />

            <CardInner>
              <div className="mt-[50px] flex flex-col gap-6 text-center lg:mt-[100px] lg:gap-8">
                {/* Beautiful title section */}
                <div className="fade-in-animation">
                  <h1 className="kannada-title mb-3 text-2xl font-black lg:text-3xl">
                    ಪದಗಳ ರಾಜ
                  </h1>
                  <h2 className="mb-2 text-xl font-bold text-slate-700 lg:text-2xl">
                    Padhagala Raaja
                  </h2>
                  <p className="cultural-decoration text-lg font-semibold">
                    {GAME_TEXT.introTitle}
                  </p>
                </div>

                {/* Enhanced guide cards */}
                <div
                  className="slide-up-animation flex flex-col gap-4 lg:gap-5"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="group relative flex flex-row gap-4 transition-all duration-300 hover:scale-[1.02]">
                    <div className="border-3 absolute -left-3 -top-3 flex size-12 items-center justify-center rounded-xl border-white bg-gradient-to-br from-emerald-100 to-emerald-200 text-lg font-bold text-emerald-600 shadow-lg lg:static lg:size-14">
                      <IconCheck size={24} />
                    </div>
                    <div className="flex h-[60px] flex-1 items-center justify-center text-pretty rounded-2xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 px-6 text-sm font-semibold leading-5 text-slate-600 shadow-sm lg:h-auto lg:px-8 lg:text-base">
                      {GAME_TEXT.introGuide1}
                    </div>
                  </div>

                  <div className="group relative flex flex-row gap-4 transition-all duration-300 hover:scale-[1.02]">
                    <div className="border-3 absolute -left-3 -top-3 flex size-12 items-center justify-center rounded-xl border-white bg-gradient-to-br from-red-100 to-pink-200 text-lg font-bold text-red-600 shadow-lg lg:static lg:size-14">
                      <IconX size={24} />
                    </div>
                    <div className="flex h-[60px] flex-1 items-center justify-center text-pretty rounded-2xl border-2 border-red-200 bg-gradient-to-r from-red-50 to-pink-50 px-6 text-sm font-semibold leading-5 text-slate-600 shadow-sm lg:h-auto lg:px-8 lg:text-base">
                      {GAME_TEXT.introGuide2}
                    </div>
                  </div>

                  <div className="group relative flex flex-row gap-4 transition-all duration-300 hover:scale-[1.02]">
                    <div className="border-3 absolute -left-3 -top-3 flex size-12 items-center justify-center rounded-xl border-white bg-gradient-to-br from-amber-100 to-orange-200 text-lg font-bold text-amber-700 shadow-lg lg:static lg:size-14">
                      <IconArrowForwardUp size={24} />
                    </div>
                    <div className="flex h-[60px] flex-1 items-center justify-center text-pretty rounded-2xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 px-6 text-sm font-semibold leading-5 text-slate-600 shadow-sm lg:h-auto lg:px-8 lg:text-base">
                      {GAME_TEXT.introGuide3}
                    </div>
                  </div>
                </div>

                {/* Game stats preview */}
                <div
                  className="slide-up-animation my-4 flex justify-center gap-6 lg:gap-8"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex flex-col items-center">
                    <IconClock size={28} className="mb-1 text-orange-500" />
                    <span className="text-sm font-bold text-slate-600">
                      60 seconds
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <IconTarget size={28} className="mb-1 text-blue-500" />
                    <span className="text-sm font-bold text-slate-600">
                      Unlimited words
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <IconSparkles size={28} className="mb-1 text-purple-500" />
                    <span className="text-sm font-bold text-slate-600">
                      AI powered
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-6 h-[1px] flex-1 bg-gradient-to-r from-transparent via-orange-200 to-transparent lg:my-8" />

              <div
                className="slide-up-animation"
                style={{ animationDelay: "0.9s" }}
              >
                <label className="flex flex-1 flex-col gap-3 font-bold">
                  <span className="cultural-decoration text-lg">
                    {GAME_TEXT.aiPersonality}
                  </span>
                  <select
                    className="game-select h-12 rounded-xl text-base font-normal shadow-sm"
                    value={config.personality}
                    onChange={e =>
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

        <footer
          className="slide-up-animation flex w-full flex-col justify-center py-6 lg:py-12"
          style={{ animationDelay: "1.2s" }}
        >
          <StartGameButton onGameStarted={() => setHasStarted(true)} />
        </footer>
      </div>
    )
  }

  return (
    <WordWrangler
      onGameEnded={(score, bestScore = 0) => {
        setScore(score)
        setBestScore(bestScore)
        setGameEnded(true)
      }}
    />
  )
}

export function GameClient() {
  return (
    <ConfigurationProvider>
      <RTVIProvider>
        <RTVIClientAudio />
        <GameContent />
      </RTVIProvider>
    </ConfigurationProvider>
  )
}
