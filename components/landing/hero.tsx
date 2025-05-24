/**
 * @description
 * This is the hero section of the LearnKannada landing page.
 * It serves as the entry point, welcoming users with a tagline, logo placeholder,
 * and a call-to-action to sign in or start exploring the app.
 *
 * Key features:
 * - Authentication Prompt: Includes Clerk's SignInButton for unauthenticated users.
 * - Engagement: Uses animations to draw attention and enhance the experience for kids.
 * - Responsive Design: Adjusts layout for all devices.
 *
 * @dependencies
 * - @clerk/nextjs: Provides SignInButton for authentication prompts.
 * - framer-motion: Adds animations for visual appeal.
 * - lucide-react: Supplies the ChevronRight icon for the button.
 *
 * @notes
 * - This is a client component due to interactivity requirements (button clicks).
 * - The logo is a 240x240px PNG.
 * - The "Start" button links to /cards for authenticated users (future enhancement).
 */

"use client"

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 pt-32 text-center">
      {/* Tagline with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <span
          className={cn(
            "animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_100%] bg-clip-text text-sm font-medium text-transparent"
          )}
        >
          Learn to speak and understand Kannada!
        </span>
      </motion.div>

      {/* Main Heading and Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-8 flex max-w-2xl flex-col items-center justify-center gap-6"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-balance text-6xl font-bold"
        >
          Learn Kannada
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="max-w-xl text-balance text-xl"
        >
          LearnKannada combines bite-sized quizzes with AI based Kannada
          speaking and listening games.
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex gap-4"
        >
          <SignedOut>
            <SignInButton>
              <Button className="bg-accent hover:bg-accent/90 text-lg">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <Link href="/cards">
            <Button className="bg-accent hover:bg-accent/90 text-lg">
              Start <ChevronRight className="ml-2 size-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Logo Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="mt-20 flex w-full max-w-screen-lg items-center justify-center"
      >
        <div className="relative size-[240px]">
          <Image
            src="/kannadakali.png"
            alt="LearnKannada Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  )
}
