"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

// Array of Kannada letters with their IDs matching the actual SVG files
const letters = [
  { id: "01_ಅ", label: "ಅ" },
  { id: "02_ಆ", label: "ಆ" },
  { id: "03_ಇ", label: "ಇ" },
  { id: "04_ಈ", label: "ಈ" },
  { id: "05_ಉ", label: "ಉ" },
  { id: "06_ಊ", label: "ಊ" },
  { id: "07_ಋ", label: "ಋ" },
  { id: "08_ಎ", label: "ಎ" },
  { id: "09_ಏ", label: "ಏ" },
  { id: "10_ಐ", label: "ಐ" },
  { id: "11_ಒ", label: "ಒ" },
  { id: "12_ಓ", label: "ಓ" },
  { id: "13_ಔ", label: "ಔ" },
  { id: "14_ಅಂ", label: "ಅಂ" },
  { id: "15_ಅಃ", label: "ಅಃ" },
  { id: "16_ಕ", label: "ಕ" },
  { id: "17_ಖ", label: "ಖ" },
  { id: "18_ಗ", label: "ಗ" },
  { id: "19_ಘ", label: "ಘ" },
  { id: "20_ಙ", label: "ಙ" },
  { id: "21_ಚ", label: "ಚ" },
  { id: "22_ಛ", label: "ಛ" },
  { id: "23_ಜ", label: "ಜ" },
  { id: "24_ಝ", label: "ಝ" },
  { id: "25_ಞ", label: "ಞ" },
  { id: "26_ಟ", label: "ಟ" },
  { id: "27_ಠ", label: "ಠ" },
  { id: "28_ಡ", label: "ಡ" },
  { id: "29_ಢ", label: "ಢ" },
  { id: "30_ಣ", label: "ಣ" },
  { id: "31_ತ", label: "ತ" },
  { id: "32_ಥ", label: "ಥ" },
  { id: "33_ದ", label: "ದ" },
  { id: "34_ಧ", label: "ಧ" },
  { id: "35_ನ", label: "ನ" },
  { id: "36_ಪ", label: "ಪ" },
  { id: "37_ಫ", label: "ಫ" },
  { id: "38_ಬ", label: "ಬ" },
  { id: "39_ಭ", label: "ಭ" },
  { id: "40_ಮ", label: "ಮ" },
  { id: "41_ಯ", label: "ಯ" },
  { id: "42_ರ", label: "ರ" },
  { id: "43_ಲ", label: "ಲ" },
  { id: "44_ವ", label: "ವ" },
  { id: "45_ಶ", label: "ಶ" },
  { id: "46_ಷ", label: "ಷ" },
  { id: "47_ಸ", label: "ಸ" },
  { id: "48_ಹ", label: "ಹ" },
  { id: "49_ಳ", label: "ಳ" }
]

export function LetterSelect() {
  return (
    <Link href="/learn">
      <Button
        variant="ghost"
        className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
      >
        <GraduationCap className="mr-2 size-4" />
        Trace
      </Button>
    </Link>
  )
}
