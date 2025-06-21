/**
 * @description
 * Game page for Padhagala Raaja - A beautiful Kannada-inspired word learning experience.
 * Features cultural design elements, enhanced animations, and bilingual text for better engagement.
 * Enforces authentication before allowing access to the game.
 *
 * Key features:
 * - Authentication: Uses Clerk to restrict access to logged-in users.
 * - Game Experience: Interactive word learning game with AI assistance.
 * - Cultural Design: Beautiful Kannada-inspired design elements.
 *
 * @dependencies
 * - @clerk/nextjs/server: Provides auth helper for user validation.
 * - GameClient: Client component containing all game functionality.
 *
 * @notes
 * - Marked as a server component to handle auth securely.
 * - Relies on middleware to redirect unauthenticated users, but includes explicit check for clarity.
 * - Game functionality is handled by the GameClient component.
 */

"use server"

import { auth } from "@clerk/nextjs/server"
import { GameClient } from "@/app/game/_components/game-client"

export default async function GamePage() {
  // Enforce authentication
  const { userId } = await auth()
  if (!userId) {
    throw new Error(
      "Unauthorized access: Please sign in to play Padhagala Raaja."
    )
  }

  return <GameClient />
}
