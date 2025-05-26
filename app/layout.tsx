"use server"

import "./globals.css"
import { Poppins, Noto_Sans_Kannada } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins"
})

const notoSansKannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "600"],
  variable: "--font-noto-sans-kannada"
})

/**
 * @description
 * Root layout component for the LearnKannada application.
 * Sets up the base HTML structure, authentication, theming, and navigation.
 *
 * Key features:
 * - Authentication: Integrates Clerk for user auth across the app.
 * - Navigation: Responsive nav with buttons (desktop) and navbar (mobile).
 * - Theming: Supports light/dark modes via next-themes.
 * - Font Support: Applies Poppins and Noto Sans Kannada for Kannada script rendering.
 * - Profile Sync: Automatically syncs user profiles to the leaderboard.
 *
 * @dependencies
 * - ClerkProvider: Provides authentication context from @clerk/nextjs.
 * - ThemeProvider: Manages light/dark mode from next-themes.
 * - ThemeToggle: Custom component for toggling themes.
 * - Lucide-react: Icons for navigation and UI elements.
 * - ProfileSync: Syncs user profile data with the leaderboard.
 *
 * @notes
 * - Uses server component directive for server-side rendering.
 * - Suspense ensures smooth loading states for child components.
 * - Navigation adapts to screen size using Tailwind's responsive classes.
 */

import {
  ClerkProvider,
  UserButton,
  SignInButton,
  SignedIn,
  SignedOut
} from "@clerk/nextjs"
import { ThemeProvider } from "@/components/utilities/providers"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Home, Book, Gamepad2, Users, Award } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { ProfileSync } from "@/components/profile-sync"
import { LetterSelect } from "@/components/ui/letter-select"

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${poppins.variable} ${notoSansKannada.variable}`}
      >
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>LearnKannada - Learn Kannada using AI</title>
        </head>
        <body className="bg-background font-poppins text-foreground min-h-screen antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header with Navigation */}
            <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
              <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <img
                    src="/logo.png"
                    alt="LearnKannada Logo"
                    width={40}
                    height={40}
                    className="size-10"
                  />
                  <span className="text-xl font-semibold">LearnKannada</span>
                </Link>

                {/* Navigation - Desktop: Buttons, Mobile: Hidden */}
                <nav className="hidden space-x-4 md:flex">
                  <Link
                    href="/"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <Home className="mr-2 size-4" />
                    Home
                  </Link>
                  <LetterSelect />
                  <Link
                    href="/cards"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <Book className="mr-2 size-4" />
                    Cards
                  </Link>
                  <Link
                    href="/quiz"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <Gamepad2 className="mr-2 size-4" />
                    Quiz
                  </Link>
                  <Link
                    href="/badges"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <Award className="mr-2 size-4" />
                    Badges
                  </Link>
                </nav>

                {/* Theme Toggle and Auth */}
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <div className="flex items-center">
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation - Visible only on small screens */}
              <nav className="border-border bg-background flex flex-col space-y-2 border-t p-4 md:hidden">
                <Link
                  href="/"
                  className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
                >
                  <Home className="mr-2 size-4" />
                  Home
                </Link>
                <div className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2">
                  <LetterSelect />
                </div>
                <Link
                  href="/cards"
                  className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
                >
                  <Book className="mr-2 size-4" />
                  Cards
                </Link>
                <Link
                  href="/quiz"
                  className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
                >
                  <Gamepad2 className="mr-2 size-4" />
                  Quiz
                </Link>
                <Link
                  href="/badges"
                  className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
                >
                  <Award className="mr-2 size-4" />
                  Badges
                </Link>
              </nav>
            </header>

            {/* Main Content */}
            <main className="container flex-1 py-6">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </main>

            {/* Profile sync component */}
            <SignedIn>
              <ProfileSync />
            </SignedIn>

            {/* Footer */}
            <footer className="border-border bg-background border-t py-4">
              <div className="text-muted-foreground container text-center text-sm">
                &copy; 2025{" "}
                <Link
                  href="https://mirrorphotos.io"
                  className="hover:text-foreground transition"
                >
                  MirrorPhotos
                </Link>
                . All rights reserved.
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
