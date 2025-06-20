/*
API route to fetch active Stripe prices for the credit product.
Returns formatted price data for the frontend to display purchase options.
*/

import { NextResponse } from "next/server"
import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia"
})

export async function GET() {
  try {
    console.log("🔍 Fetching Stripe prices...")

    // Fetch all active prices
    const prices = await stripe.prices.list({
      active: true,
      expand: ['data.product'],
      limit: 100 // Increase limit to ensure we get all prices
    })

    console.log(`📊 Found ${prices.data.length} active prices`)

    // Filter for credit products and format the data
    const creditPrices = prices.data
      .filter(price => {
        const product = price.product as Stripe.Product
        // Filter for products that are credit-related (adjust this logic as needed)
        return product.active && 
               (product.name?.toLowerCase().includes('credit') || 
                product.metadata?.type === 'credits' ||
                price.metadata?.credits) // Has credits metadata
      })
      .map(price => {
        const product = price.product as Stripe.Product
        const credits = parseInt(price.metadata?.credits || "0", 10)
        const amount = (price.unit_amount || 0) / 100
        
        return {
          id: price.id,
          productId: product.id,
          name: product.name || `${credits} Credits`,
          description: product.description || `${credits} learning credits`,
          credits,
          price: amount,
          currency: price.currency,
          pricePerCredit: credits > 0 ? amount / credits : 0,
          metadata: price.metadata,
          // Calculate savings compared to base price (if applicable)
          savings: calculateSavings(credits, amount)
        }
      })
      .filter(price => price.credits > 0) // Only include prices with valid credit amounts
      .sort((a, b) => a.credits - b.credits) // Sort by credit amount ascending

    console.log(`✅ Formatted ${creditPrices.length} credit prices:`, 
      creditPrices.map(p => ({ 
        id: p.id, 
        credits: p.credits, 
        price: p.price 
      }))
    )

    if (creditPrices.length === 0) {
      console.warn("⚠️ No credit prices found. Make sure your Stripe prices have 'credits' metadata.")
    }

    return NextResponse.json({
      success: true,
      prices: creditPrices,
      count: creditPrices.length
    })

  } catch (error) {
    console.error("❌ Error fetching Stripe prices:", error)

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