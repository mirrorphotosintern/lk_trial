"use client"

import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, CreditCard, Star, Zap, Crown, Loader2, AlertCircle } from "lucide-react"
import { toast } from "sonner"

// Type for Stripe price data
interface StripePrice {
  id: string
  productId: string
  name: string
  description: string
  credits: number
  price: number
  currency: string
  pricePerCredit: number
  metadata: Record<string, string>
  savings: string | null
}

export default function BuyCredits() {
  const { user } = useUser()
  const [loadingPackage, setLoadingPackage] = useState<string | null>(null)
  const [creditPrices, setCreditPrices] = useState<StripePrice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch Stripe prices on component mount
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/stripe-prices")
        
        if (!response.ok) {
          throw new Error("Failed to fetch prices")
        }

        const data = await response.json()
        
        if (data.success) {
          setCreditPrices(data.prices)
          console.log("✅ Loaded Stripe prices:", data.prices)
        } else {
          throw new Error(data.error || "Failed to load prices")
        }
      } catch (err) {
        console.error("❌ Error fetching prices:", err)
        setError(err instanceof Error ? err.message : "Failed to load pricing")
        toast.error("Failed to load pricing. Please refresh the page.")
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
  }, [])

  const handlePurchase = async (priceData: StripePrice) => {
    if (!user) {
      toast.error("Please sign in to purchase credits")
      return
    }

    setLoadingPackage(priceData.id)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          priceId: priceData.id // Send the actual Stripe price ID
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || "Failed to create checkout session")
      }

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      } else {
        throw new Error("No checkout URL received")
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      toast.error("Failed to initiate payment. Please try again.")
    } finally {
      setLoadingPackage(null)
    }
  }

  // Show loading state
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="size-6 text-blue-600" />
            Buy Credits
          </CardTitle>
          <CardDescription>
            Loading pricing options...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <Loader2 className="size-8 animate-spin text-blue-600" />
          </div>
        </CardContent>
      </Card>
    )
  }

  // Show error state
  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="size-6 text-blue-600" />
            Buy Credits
          </CardTitle>
          <CardDescription>
            Unable to load pricing options
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-2 py-8 text-red-600">
            <AlertCircle className="size-6" />
            <p>{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Show empty state if no prices found
  if (creditPrices.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="size-6 text-blue-600" />
            Buy Credits
          </CardTitle>
          <CardDescription>
            No pricing options available
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-2 py-8 text-gray-600">
            <AlertCircle className="size-6" />
            <p>Pricing options are currently unavailable. Please try again later.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Determine which package is most popular (middle one or marked as popular)
  const popularIndex = Math.floor(creditPrices.length / 2)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="size-6 text-blue-600" />
          Buy Credits
        </CardTitle>
        <CardDescription>
          Purchase credits to unlock premium features and accelerate your
          learning
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {creditPrices.map((pkg, index) => {
            const isPopular = index === popularIndex
            const isLoading = loadingPackage === pkg.id

            // Choose icon based on credit amount
            const getIcon = (credits: number) => {
              if (credits <= 100) return Coins
              if (credits <= 300) return Star
              if (credits <= 600) return Zap
              return Crown
            }

            const Icon = getIcon(pkg.credits)

            return (
              <div
                key={pkg.id}
                className={`relative rounded-lg border-2 p-4 transition-all hover:shadow-lg ${
                  isPopular
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                {isPopular && (
                  <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-500">
                    Most Popular
                  </Badge>
                )}

                {pkg.savings && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 right-2 bg-green-100 text-green-700"
                  >
                    {pkg.savings}
                  </Badge>
                )}

                <div className="space-y-4">
                  <div className="text-center">
                    <div
                      className={`mx-auto mb-2 flex size-12 items-center justify-center rounded-full ${
                        isPopular ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        size={24}
                        className={
                          isPopular ? "text-blue-600" : "text-gray-600"
                        }
                      />
                    </div>
                    <h3 className="font-bold">{pkg.name}</h3>
                    <p className="text-sm text-gray-600">{pkg.description}</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Coins size={16} className="text-yellow-600" />
                      <span className="text-2xl font-bold">
                        {pkg.credits.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">credits</p>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      ${pkg.price}
                    </div>
                    <p className="text-xs text-gray-500">
                      ${pkg.pricePerCredit.toFixed(4)} per credit
                    </p>
                  </div>

                  <Button
                    onClick={() => handlePurchase(pkg)}
                    disabled={isLoading || !user}
                    className={`w-full ${
                      isPopular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 size-4" />
                        Buy Now
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 rounded-lg bg-gray-50 p-4">
          <h4 className="mb-2 font-semibold text-gray-700">Why buy credits?</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Instant access to all premium features</li>
            <li>• Take unlimited quizzes and play games</li>
            <li>• Skip cooldowns and wait times</li>
            <li>• Support continued development of new features</li>
          </ul>
        </div>

        {creditPrices.length > 0 && (
          <div className="mt-4 text-center text-xs text-gray-500">
            Prices loaded from Stripe • {creditPrices.length} options available
          </div>
        )}
      </CardContent>
    </Card>
  )
}
