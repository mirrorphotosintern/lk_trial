"use server"

import "./globals.css"

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

import { ClerkProvider, UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/utilities/providers"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Home, Book, Gamepad2, Users, Award } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { ProfileSync } from "@/components/profile-sync"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>LearnKannada - Learn Kannada with Fun!</title>
          {/* Importing Noto Sans Kannada for Kannada script rendering */}
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@400;600&family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="min-h-screen bg-background font-poppins text-foreground antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header with Navigation */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <img
                    src="/logo.png"
                    alt="LearnKannada Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <span className="text-xl font-semibold">LearnKannada</span>
                </Link>

                {/* Navigation - Desktop: Buttons, Mobile: Hidden */}
                <nav className="hidden space-x-4 md:flex">
                  <Link
                    href="/"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                  <Link
                    href="/cards"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    <Book className="mr-2 h-4 w-4" />
                    Cards
                  </Link>
                  <Link
                    href="/quiz"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    <Gamepad2 className="mr-2 h-4 w-4" />
                    Quiz
                  </Link>
                  <Link
                    href="/badges"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    <Award className="mr-2 h-4 w-4" />
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
                    <SignedOut>
                      <SignInButton mode="modal">
                        <button className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                          Sign In
                        </button>
                      </SignInButton>
                    </SignedOut>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation - Visible only on small screens */}
              <nav className="flex flex-col space-y-2 border-t border-border bg-background p-4 md:hidden">
                <Link
                  href="/"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
                <Link
                  href="/cards"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  <Book className="mr-2 h-4 w-4" />
                  Cards
                </Link>
                <Link
                  href="/quiz"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Quiz
                </Link>
                <Link
                  href="/badges"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  <Award className="mr-2 h-4 w-4" />
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
            <footer className="border-t border-border bg-background py-4">
              <div className="container text-center text-sm text-muted-foreground">
                &copy; 2025 <Link href="https://mirrorphotos.io" className="hover:text-foreground transition">MirrorPhotos</Link>. All rights reserved.
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}