"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export function ConditionalFooter() {
  const pathname = usePathname()

  // Hide footer on auth routes (like survey)
  if (pathname?.startsWith("/(auth)") || pathname?.includes("/survey")) {
    return null
  }

  return (
    <footer className="border-border bg-background border-t py-4">
      <div className="text-muted-foreground container text-center text-sm">
        @2025{" "}
        <Link
          href="https://mirrorphotos.io"
          className="hover:text-foreground transition"
        >
          MirrorPhotos
        </Link>{" "}
        all rights reserved
      </div>
    </footer>
  )
}
