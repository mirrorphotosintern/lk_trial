"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import LetterTrace from "@/components/learn/letter-trace"
import { AlertCircle } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import { toast } from "sonner" // optional: make sure 'sonner' is installed if used

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
  "49_ಳ"
]

interface LetterTraceWrapperProps {
  letterId: string
}

export default function LetterTraceWrapper({
  letterId
}: LetterTraceWrapperProps) {
  const router = useRouter()
  const { user } = useUser()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [learned, setLearned] = useState<string[]>([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("learned_letters") || "[]")
    setLearned(stored)
  }, [])

  const handleError = () => {
    setError("Failed to load the letter. Please try again.")
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleComplete = async () => {
    const updated = [...new Set([...learned, letterId])]
    localStorage.setItem("learned_letters", JSON.stringify(updated))
    setLearned(updated)

    // 🎮 Game reward: 1 credit per letter traced (learning reward, not payment)
    if (user?.id) {
      try {
        const res = await fetch("/api/increment-credits", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.id, amount: 1 })
        })

        if (res.ok) {
          toast.success("🎉 You earned 1 credit for tracing this letter!")
          router.refresh()
        }
      } catch (err) {
        console.error("Game credit reward error:", err)
        // Don't show error to user - learning progress still counts
      }
    }

    const currentIndex = validLetterIds.indexOf(letterId)
    if (currentIndex === -1) return

    if (currentIndex < validLetterIds.length - 1) {
      const nextLetterId = validLetterIds[currentIndex + 1]
      router.push(`/learn/${nextLetterId}`)
    } else {
      router.push("/learn")
    }
  }

  if (error) {
    return (
      <div className="border-destructive/50 bg-destructive/10 text-destructive flex flex-col items-center justify-center gap-2 rounded-lg border p-4">
        <AlertCircle className="size-6" />
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-[512px]">
      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <div className="text-muted-foreground">Loading letter...</div>
        </div>
      )}
      <div className={isLoading ? "hidden" : ""}>
        <LetterTrace
          src={`/letters/${letterId}.svg`}
          onDone={handleComplete}
          onError={handleError}
          onLoad={handleLoad}
          strokeWidth={60}
          tolerance={28}
        />
      </div>
    </div>
  )
}
