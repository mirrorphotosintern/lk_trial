"use server"

import { Suspense } from "react"
import { notFound } from "next/navigation"
import LetterTraceWrapper from "./_components/letter-trace-wrapper"

interface PageProps {
  params: Promise<{ letterId: string }>
}

// Array of valid letter IDs to validate against
const validLetterIds = [
  "01_ಅ",
  "02_ಆ",
  "03_ಇ",
  "04_ಈ",
  "05_ಉ",
  "06_ಊ",
  "07_ಋ",
  "08_ಎ",
  "09_ಏ",
  "10_ಐ",
  "11_ಒ",
  "12_ಓ",
  "13_ಔ",
  "14_ಅಂ",
  "15_ಅಃ",
  "16_ಕ",
  "17_ಖ",
  "18_ಗ",
  "19_ಘ",
  "20_ಙ",
  "21_ಚ",
  "22_ಛ",
  "23_ಜ",
  "24_ಝ",
  "25_ಞ",
  "26_ಟ",
  "27_ಠ",
  "28_ಡ",
  "29_ಢ",
  "30_ಣ",
  "31_ತ",
  "32_ಥ",
  "33_ದ",
  "34_ಧ",
  "35_ನ",
  "36_ಪ",
  "37_ಫ",
  "38_ಬ",
  "39_ಭ",
  "40_ಮ",
  "41_ಯ",
  "42_ರ",
  "43_ಲ",
  "44_ವ",
  "45_ಶ",
  "46_ಷ",
  "47_ಸ",
  "48_ಹ",
  "49_ಳ",
  "50_ಕ್ಷ"
]

export default async function LearnLetterPage({ params }: PageProps) {
  const { letterId } = await params
  const decodedLetterId = decodeURIComponent(letterId)

  // Validate the letter ID
  if (!validLetterIds.includes(decodedLetterId)) {
    notFound()
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center">
        <Suspense fallback={<div>Loading letter...</div>}>
          <LetterTraceWrapper letterId={decodedLetterId} />
        </Suspense>
      </div>
    </div>
  )
}
