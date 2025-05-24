"use client"

/**
 * @description
 * ThemeToggle component allows users to switch between light and dark modes.
 * Displays a moon icon for dark mode and a sun icon for light mode.
 *
 * Key features:
 * - Theme Switching: Toggles between light and dark modes using next-themes.
 * - Icon Display: Shows appropriate icon based on current theme.
 *
 * @dependencies
 * - next-themes: Provides theme management with useTheme hook.
 * - lucide-react: Supplies Sun and Moon icons.
 *
 * @notes
 * - Client component due to useTheme requiring client-side state.
 * - Handles edge case where theme hasn’t loaded yet (system default).
 * - Uses Tailwind for responsive, minimalistic styling.
 */

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevents rendering until client-side hydration is complete
  }

  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-accent hover:text-accent-foreground focus:ring-ring rounded-full p-2 focus:outline-none focus:ring-2"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  )
}
