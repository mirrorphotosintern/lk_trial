/*
Debug endpoint to check Stripe connection and list all prices without filtering
*/

import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function GET() {
  try {
    // Check environment variables
    const stripeKey = process.env.STRIPE_SECRET_KEY
    const appUrl = process.env.NEXT_PUBLIC_APP_URL

    console.log("🔍 Debug - Environment check:", {
      hasStripeKey: !!stripeKey,
      stripeKeyPrefix: stripeKey?.substring(0, 7),
      appUrl
    })

    if (!stripeKey) {
      return NextResponse.json({
        error: "STRIPE_SECRET_KEY not configured",
        debug: true
      }, { status: 500 })
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: "2025-02-24.acacia"
    })

    console.log("🔍 Debug - Fetching prices from Stripe...")

    // Fetch all active prices with minimal filtering
    const prices = await stripe.prices.list({
      active: true,
      expand: ['data.product'],
      limit: 10 // Start with just 10 to debug
    })

    console.log(`📊 Debug - Found ${prices.data.length} active prices`)

    // Return detailed debug info
    const debugInfo = prices.data.map(price => {
      const product = price.product as Stripe.Product
      return {
        priceId: price.id,
        amount: price.unit_amount ? price.unit_amount / 100 : 0,
        currency: price.currency,
        productId: product.id,
        productName: product.name,
        productActive: product.active,
        priceMetadata: price.metadata,
        productMetadata: product.metadata,
        hasCreditsInPriceMetadata: !!price.metadata?.credits,
        hasCreditsInProductName: product.name?.toLowerCase().includes('credit'),
        hasTypeCreditsInProductMetadata: product.metadata?.type === 'credits'
      }
    })

    return NextResponse.json({
      success: true,
      debug: true,
      totalPrices: prices.data.length,
      environment: {
        hasStripeKey: !!stripeKey,
        appUrl
      },
      prices: debugInfo,
      debugMessage: "This endpoint shows all active prices with their metadata"
    })

  } catch (error) {
    console.error("❌ Debug - Error fetching Stripe prices:", error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json({
        error: "Stripe API Error",
        debug: true,
        details: {
          type: error.type,
          code: error.code,
          message: error.message
        }
      }, { status: 400 })
    }

    return NextResponse.json({
      error: "Unknown error",
      debug: true,
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 })
  }
} 