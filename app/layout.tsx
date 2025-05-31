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
import { Home, Book, Gamepad2 } from "lucide-react" // Users, Award, Trophy removed as they are no longer used directly in nav
import Link from "next/link"
import { Suspense } from "react"
import { ProfileSync } from "@/components/profile-sync"
// LetterSelect removed as it's no longer used
import UserButtonWithCredits from "@/components/ui/user-button-with-credits"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

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
                <nav className="hidden md:flex">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            <Home className="mr-2 size-4" />
                            Home
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <Book className="mr-2 size-4" /> Learn
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 md:w-[200px]">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/learn"
                                  className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                >
                                  Trace Letters
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/learn/cards"
                                  className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                >
                                  Learn Cards
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <Gamepad2 className="mr-2 size-4" /> Play
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 md:w-[200px]">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/play/quiz"
                                  className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                >
                                  Quiz
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/play/game"
                                  className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                >
                                  Game
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </nav>

                {/* Theme Toggle and Auth */}
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <div className="flex items-center">
                    <SignedIn>
                      <UserButtonWithCredits />
                    </SignedIn>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation - Visible only on small screens */}
              <nav className="border-border bg-background flex flex-col space-y-1 border-t p-4 md:hidden">
                {" "}
                {/* Reduced space-y-2 to space-y-1 for tighter packing */}
                <Link
                  href="/"
                  className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
                >
                  <Home className="mr-2 size-4" /> Home
                </Link>
                <div>
                  <div className="text-muted-foreground flex items-center px-3 py-2 text-sm font-medium">
                    <Book className="mr-2 size-4" /> Learn
                  </div>
                  <Link
                    href="/learn"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md py-2 pl-8 pr-3 text-sm font-medium"
                  >
                    Trace Letters
                  </Link>
                  <Link
                    href="/learn/cards"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md py-2 pl-8 pr-3 text-sm font-medium"
                  >
                    Learn Cards
                  </Link>
                </div>
                <div>
                  <div className="text-muted-foreground flex items-center px-3 py-2 text-sm font-medium">
                    <Gamepad2 className="mr-2 size-4" /> Play
                  </div>
                  <Link
                    href="/play/quiz"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md py-2 pl-8 pr-3 text-sm font-medium"
                  >
                    Quiz
                  </Link>
                  <Link
                    href="/play/game"
                    className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md py-2 pl-8 pr-3 text-sm font-medium"
                  >
                    Game
                  </Link>
                </div>
              </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1">
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
