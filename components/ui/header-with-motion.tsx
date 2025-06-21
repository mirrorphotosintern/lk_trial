"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useState } from "react"

interface HeaderWithMotionProps {
  navLinks: { href: string; label: string }[]
}

export function HeaderWithMotion({ navLinks }: HeaderWithMotionProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Home Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative size-8">
              <Image
                src="/kannadakali.png"
                alt="LearnKannada Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold">LearnKannada</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-4 md:flex">
          {navLinks.map(link => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-foreground rounded-full px-3 py-1 transition"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Section: Auth and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="/login">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-muted-foreground hover:text-foreground">
                  Sign In
                </span>
              </motion.div>
            </Link>
          </SignedOut>
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="p-2"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="size-6" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-background border-t md:hidden"
        >
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground px-3 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}
