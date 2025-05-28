"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Coins } from "lucide-react"
import { useUser } from "@clerk/nextjs"

const CREDIT_PACKAGES = [
  { credits: 10, price: 5 },
  { credits: 25, price: 10 },
  { credits: 50, price: 18 }
]

export default function BuyCredits() {
  const { user } = useUser()
  const [loading, setLoading] = useState(false)

  const handlePurchase = async (credits: number, price: number) => {
    if (!user?.id) return
    setLoading(true)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: user.id,
          credits,
          price
        })
      })

      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error("Error creating checkout session:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-4">
      <h2 className="text-lg font-semibold">Buy Credits</h2>
      <div className="grid gap-2">
        {CREDIT_PACKAGES.map(pkg => (
          <Button
            key={pkg.credits}
            onClick={() => handlePurchase(pkg.credits, pkg.price)}
            disabled={loading}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Coins className="size-4" />
              <span>{pkg.credits} Credits</span>
            </div>
            <span>${pkg.price}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
