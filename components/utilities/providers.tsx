"use client"

/**
 * @description
 * ThemeProvider component wraps the app to provide light/dark mode functionality.
 * Uses next-themes to manage theme state across the application.
 * 
 * Key features:
 * - Theme Management: Applies light/dark/system themes to the app.
 * - Consistency: Ensures theme is propagated to all child components.
 * 
 * @dependencies
 * - next-themes: Provides ThemeProvider and theme management utilities.
 * 
 * @notes
 * - Marked as client component due to next-themes requiring client-side rendering.
 * - Disables transition on change to avoid flickers for young users.
 * - Supports system theme by default for accessibility.
 */

import { ThemeProvider as NextThemesProvider, type Attribute } from "next-themes"
import { ReactNode } from "react"

interface ThemeProviderProps {
  children: ReactNode
  attribute?: Attribute
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  )
}