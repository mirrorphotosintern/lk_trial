"use client"

import { useState } from "react"
import { Coins } from "lucide-react"

interface NavbarProps {
  initialCredits: number
}

const Navbar = ({ initialCredits }: NavbarProps) => {
  return (
    <button
      className="flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-3 py-1 font-semibold text-yellow-800 transition hover:bg-yellow-200"
      tabIndex={-1}
      type="button"
      disabled
    >
      <Coins className="size-4 text-yellow-600" />
      <span className="font-bold">{initialCredits}</span>
    </button>
  )
}

export default Navbar
