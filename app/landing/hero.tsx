"use client"

/**
 * @description
 * Hero component for the LearnKannada landing page, providing an engaging entry point.
 * Features a logo, tagline, authentication prompt via SignInButton, and an animation.
 *
 * Key features:
 * - Visual Appeal: Displays logo and tagline with a colorful background.
 * - Auth Prompt: Integrates Clerk’s SignInButton for user login/signup.
 * - Animation: Uses Framer Motion for a kid-friendly bounce effect.
 *
 * @dependencies
 * - @clerk/nextjs: Provides SignInButton for authentication.
 * - framer-motion: Enables animation for engagement.
 * - lucide-react: Supplies the ArrowRight icon for the button.
 *
 * @notes
 * - Client component due to interactive elements (button, animation).
 * - Logo is a placeholder; user must provide actual `logo.png` later.
 * - Animation is subtle to avoid overwhelming young users.
 * - Styles use Tailwind CSS per the design system (rounded corners, accent colors).
 */

import { SignInButton } from "@clerk/nextjs"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  // Animation variants for the bounce effect
  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 0, -10],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* Logo */}
      <motion.div
        variants={bounceVariants}
        initial="initial"
        animate="animate"
        className="mb-6"
      >
        <img
          src="/logo.png"
          alt="LearnKannada Logo"
          width={240}
          height={240}
          className="size-60"
          onError={e => {
            console.error("Logo failed to load")
            e.currentTarget.style.display = "none" // Hide on error
          }}
        />
      </motion.div>

      {/* Tagline */}
      <h1 className="text-foreground mb-4 text-4xl font-semibold md:text-5xl">
        Learn to speak and understand Kannada!
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md text-lg">
        Play games, learn words, and enjoy Kannada with LearnKannada!
      </p>

      {/* Start Button with Auth Prompt */}
      <SignInButton mode="modal">
        <button className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center rounded-md px-6 py-3 text-lg font-medium transition-colors">
          Start Learning
          <ArrowRight className="ml-2 size-5" />
        </button>
      </SignInButton>
    </div>
  )
}
