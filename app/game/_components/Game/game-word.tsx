// Enhanced game word component for Padhagala Raaja with cultural styling and improved visual feedback
// Features beautiful animations, bilingual text, and enhanced user experience elements

"use client"

import { GAME_TEXT } from "../../constants/game-constants"
import React from "react"
import styles from "./word-wrangler.module.css"

interface GameWordProps {
  word: string
  showAutoDetected: boolean
  showIncorrect: boolean
}

export const GameWord: React.FC<GameWordProps> = ({
  word,
  showAutoDetected,
  showIncorrect
}) => {
  return (
    <div className="relative">
      <div
        className={`
          cultural-card relative flex min-h-[200px] flex-col items-center justify-center overflow-hidden rounded-3xl p-8 text-center transition-all duration-500 lg:p-12
          ${showAutoDetected ? styles.correctWordDetected : ""}
          ${showIncorrect ? styles.incorrectWordDetected : ""}
        `}
      >
        {/* Background decorative elements */}
        <div className="floating-element absolute left-4 top-4 text-2xl opacity-20">
          📝
        </div>
        <div
          className="floating-element absolute right-4 top-4 text-2xl opacity-20"
          style={{ animationDelay: "1s" }}
        >
          ✨
        </div>
        <div
          className="floating-element absolute bottom-4 left-4 text-2xl opacity-20"
          style={{ animationDelay: "2s" }}
        >
          🎯
        </div>
        <div
          className="floating-element absolute bottom-4 right-4 text-2xl opacity-20"
          style={{ animationDelay: "1.5s" }}
        >
          💭
        </div>

        <div className="relative z-10">
          <p className="cultural-decoration mb-4 text-lg font-semibold leading-relaxed lg:text-xl">
            {GAME_TEXT.describeWord}
          </p>
          <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-6 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="text-3xl font-black tracking-wide lg:text-5xl">
              {word}
            </span>
          </div>
        </div>

        {showAutoDetected && <CorrectOverlay />}
        {showIncorrect && <IncorrectOverlay />}
      </div>
    </div>
  )
}

const CorrectOverlay: React.FC = () => (
  <div className={styles.autoDetectedOverlay}>
    <div className={styles.checkmarkContainer}>
      <svg
        className={styles.checkmarkSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className={styles.checkmarkCircle}
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className={styles.checkmarkCheck}
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  </div>
)

const IncorrectOverlay: React.FC = () => (
  <div className={styles.incorrectOverlay}>
    <div className={styles.xmarkContainer}>
      <svg
        className={styles.xmarkSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className={styles.xmarkCircle}
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className={styles.xmarkX}
          fill="none"
          d="M16 16 L36 36 M36 16 L16 36"
        />
      </svg>
    </div>
  </div>
)
