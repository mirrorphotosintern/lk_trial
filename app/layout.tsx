"use client"

import "./globals.css"
import { Poppins, Noto_Sans_Kannada } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/utilities/providers"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { RedirectAfterSignIn } from "@/components/auth/redirect-after-sign-in"
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Home, Book, Gamepad2, Menu } from "lucide-react" // Users, Award, Trophy removed as they are no longer used directly in nav
import Link from "next/link"
import { Suspense, useState } from "react"
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
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet"
import { ClientOnly } from "@/components/utilities/client-only"
import { ConditionalFooter } from "@/components/layout/conditional-footer"

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

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

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
            <RedirectAfterSignIn />
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

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                  <ClientOnly>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[200px]">
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/learn"
                                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                  >
                                    Letters
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/learn/cards"
                                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                  >
                                    Words
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/learn/community"
                                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                  >
                                    Communities
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Play</NavigationMenuTrigger>
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
                  </ClientOnly>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Mobile Menu */}
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        aria-label="Toggle menu"
                      >
                        <Menu className="size-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-[300px] sm:w-[400px]"
                    >
                      <SheetTitle className="sr-only">
                        Navigation Menu
                      </SheetTitle>
                      <nav className="flex flex-col space-y-4">
                        <div>
                          <div className="text-muted-foreground mb-2 text-sm font-medium">
                            Learn
                          </div>
                          <div className="ml-4 flex flex-col space-y-2">
                            <Link
                              href="/learn"
                              className="text-muted-foreground hover:text-foreground text-lg font-medium transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              Letters
                            </Link>
                            <Link
                              href="/learn/cards"
                              className="text-muted-foreground hover:text-foreground text-lg font-medium transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              Words
                            </Link>
                            <Link
                              href="/learn/community"
                              className="text-muted-foreground hover:text-foreground text-lg font-medium transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              Communities
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="text-muted-foreground mb-2 text-sm font-medium">
                            Play
                          </div>
                          <div className="ml-4 flex flex-col space-y-2">
                            <Link
                              href="/play/quiz"
                              className="text-muted-foreground hover:text-foreground text-lg font-medium transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              Quiz
                            </Link>
                            <Link
                              href="/play/game"
                              className="text-muted-foreground hover:text-foreground text-lg font-medium transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              Game
                            </Link>
                          </div>
                        </div>
                      </nav>
                    </SheetContent>
                  </Sheet>

                  <ThemeToggle />
                  <div className="flex items-center">
                    <SignedIn>
                      <UserButtonWithCredits />
                    </SignedIn>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </main>

            {/* Profile sync component */}
            <SignedIn>
              <ProfileSync />
            </SignedIn>

            {/* Footer - Hidden on auth routes */}
            <ConditionalFooter />

            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
