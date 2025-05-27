// Layout for the game section - Manages game-specific styling and providers
// This isolates the game's unique visual style from the rest of the application
// Full screen layout below the navbar for immersive gaming experience

"use server"

import "./game.css"

export default async function GameLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="game-container relative min-h-[calc(100vh-4rem)] w-full">
      {children}
    </div>
  )
}