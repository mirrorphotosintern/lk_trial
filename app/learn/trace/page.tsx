"use server"

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

export default async function LearnTracePage() {
  // Since this is a static page with no async operations,
  // we can just return the JSX directly
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center p-4">
      <h1 className="mb-8 text-4xl font-bold">Trace Kannada Letters</h1>
      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {letters.map(letter => (
          <Link
            key={letter.id}
            href={`/learn/trace/${letter.id}`} // Updated path
            className="hover:bg-accent hover:text-accent-foreground bg-card flex aspect-square items-center justify-center rounded-lg border p-4 text-4xl font-bold transition-colors"
            lang="kn"
          >
            {letter.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
