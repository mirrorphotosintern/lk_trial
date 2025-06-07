"use client"

import { useState } from "react"
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
import { Coins, CreditCard, Star, Zap, Crown, Loader2 } from "lucide-react"
import { toast } from "sonner"

// Credit packages with pricing
const creditPackages = [
  {
    id: "starter",
    name: "Starter Pack",
    credits: 100,
    price: 4.99,
    pricePerCredit: 0.0499,
    description: "Perfect for trying out premium features",
    icon: Coins,
    popular: false
  },
  {
    id: "value",
    name: "Value Pack",
    credits: 300,
    price: 12.99,
    pricePerCredit: 0.0433,
    description: "Best value for regular learners",
    icon: Star,
    popular: true,
    savings: "Save 13%"
  },
  {
    id: "power",
    name: "Power Pack",
    credits: 600,
    price: 22.99,
    pricePerCredit: 0.0383,
    description: "For serious language learners",
    icon: Zap,
    popular: false,
    savings: "Save 23%"
  },
  {
    id: "ultimate",
    name: "Ultimate Pack",
    credits: 1200,
    price: 39.99,
    pricePerCredit: 0.0333,
    description: "Maximum credits for unlimited learning",
    icon: Crown,
    popular: false,
    savings: "Save 33%"
  }
]

export default function BuyCredits() {
  const { user } = useUser()
  const [loadingPackage, setLoadingPackage] = useState<string | null>(null)

  const handlePurchase = async (packageData: (typeof creditPackages)[0]) => {
    if (!user) {
      toast.error("Please sign in to purchase credits")
      return
    }

    setLoadingPackage(packageData.id)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          credits: packageData.credits,
          price: packageData.price
        })
      })

      if (!response.ok) {
        throw new Error("Failed to create checkout session")
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
          {creditPackages.map(pkg => {
            const Icon = pkg.icon
            const isLoading = loadingPackage === pkg.id

            return (
              <div
                key={pkg.id}
                className={`relative rounded-lg border-2 p-4 transition-all hover:shadow-lg ${
                  pkg.popular
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                {pkg.popular && (
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
                        pkg.popular ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        size={24}
                        className={
                          pkg.popular ? "text-blue-600" : "text-gray-600"
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
                      pkg.popular
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
      </CardContent>
    </Card>
  )
}
