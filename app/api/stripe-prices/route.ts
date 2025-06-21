/*
API route to fetch predefined Stripe prices for credit packages.
Uses environment variables to ensure consistent product tracking and logging.
*/

import { NextResponse } from "next/server"
import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia"
})

// Predefined credit packages matching create-checkout-session
const CREDIT_PACKAGES = {
  100: {
    credits: 100,
    priceId: process.env.STRIPE_PRICE_100_CREDITS,
    productId: process.env.STRIPE_PRODUCT_100_CREDITS,
    name: "100 Credits Pack",
            description: "Starter pack - 100 credits for LearnKannada learning",
    packSize: "small",
    value: "starter"
  },
  300: {
    credits: 300,
    priceId: process.env.STRIPE_PRICE_300_CREDITS,
    productId: process.env.STRIPE_PRODUCT_300_CREDITS,
    name: "300 Credits Pack", 
            description: "Popular pack - 300 credits for LearnKannada learning",
    packSize: "medium",
    value: "popular"
  },
  600: {
    credits: 600,
    priceId: process.env.STRIPE_PRICE_600_CREDITS,
    productId: process.env.STRIPE_PRODUCT_600_CREDITS,
    name: "600 Credits Pack",
            description: "Value pack - 600 credits for LearnKannada learning",
    packSize: "large",
    value: "best_value"
  },
  1200: {
    credits: 1200,
    priceId: process.env.STRIPE_PRICE_1200_CREDITS,
    productId: process.env.STRIPE_PRODUCT_1200_CREDITS,
    name: "1200 Credits Pack",
            description: "Premium pack - 1200 credits for LearnKannada learning",
    packSize: "xl",
    value: "premium"
  }
}

export async function GET() {
  try {
    console.log("🎯 Loading predefined credit packages from environment variables...")

    const creditPrices = []

    // Process each predefined credit package
    for (const [creditAmount, config] of Object.entries(CREDIT_PACKAGES)) {
      if (!config.priceId || !config.productId) {
        console.warn(`⚠️ Missing environment variables for ${creditAmount} credits:`, {
          priceId: config.priceId,
          productId: config.productId
        })
        continue
      }

      try {
        // Fetch the actual price from Stripe to get current amount
        console.log(`🔍 Fetching Stripe price: ${config.priceId}`)
        const price = await stripe.prices.retrieve(config.priceId, {
          expand: ['product']
        })

        if (!price.active) {
          console.warn(`⚠️ Inactive price: ${config.priceId}`)
          continue
        }

        const product = price.product as Stripe.Product
        if (!product.active) {
          console.warn(`⚠️ Inactive product: ${config.productId}`)
          continue
        }

        const amount = (price.unit_amount || 0) / 100
        const pricePerCredit = amount / config.credits

        creditPrices.push({
          id: price.id,
          productId: product.id,
          name: config.name,
          description: config.description,
          credits: config.credits,
          price: amount,
          currency: price.currency,
          pricePerCredit: pricePerCredit,
          packSize: config.packSize,
          packValue: config.value,
          metadata: {
            ...price.metadata,
            packSize: config.packSize,
            packValue: config.value
          },
          savings: calculateSavings(config.credits, amount)
        })

        console.log(`✅ Loaded ${config.name}: ${config.credits} credits for $${amount}`)

      } catch (error) {
        console.error(`❌ Error loading price ${config.priceId}:`, error)
      }
    }

    // Sort by credit amount
    creditPrices.sort((a, b) => a.credits - b.credits)

    console.log(`🎉 Successfully loaded ${creditPrices.length} credit packages:`, 
      creditPrices.map(p => ({ 
        credits: p.credits, 
        price: p.price,
        priceId: p.id,
        packValue: p.packValue
      }))
    )

    if (creditPrices.length === 0) {
      console.error("❌ No credit packages loaded! Check your environment variables:")
      console.error("Required variables:", {
        STRIPE_PRICE_100_CREDITS: process.env.STRIPE_PRICE_100_CREDITS,
        STRIPE_PRODUCT_100_CREDITS: process.env.STRIPE_PRODUCT_100_CREDITS,
        STRIPE_PRICE_300_CREDITS: process.env.STRIPE_PRICE_300_CREDITS,
        STRIPE_PRODUCT_300_CREDITS: process.env.STRIPE_PRODUCT_300_CREDITS
      })
    }

    return NextResponse.json({
      success: true,
      prices: creditPrices,
      count: creditPrices.length,
      loadedFromEnvironment: true
    })

  } catch (error) {
    console.error("❌ Error fetching predefined Stripe prices:", error)

    if (error instanceof Stripe.errors.StripeError) {
      console.error("Stripe error:", {
        type: error.type,
        code: error.code,
        message: error.message
      })
      return NextResponse.json(
        { success: false, error: `Stripe Error: ${error.message}` },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: "Failed to fetch prices" },
      { status: 500 }
    )
  }
}

// Helper function to calculate savings percentage
function calculateSavings(credits: number, amount: number): string | null {
  // Base price per credit (using the smallest package as reference)
  const basePricePerCredit = 0.0499 // $4.99 for 100 credits
  const currentPricePerCredit = amount / credits
  
  if (currentPricePerCredit < basePricePerCredit) {
    const savingsPercent = Math.round(((basePricePerCredit - currentPricePerCredit) / basePricePerCredit) * 100)
    return savingsPercent > 0 ? `Save ${savingsPercent}%` : null
  }
  
  return null
} 