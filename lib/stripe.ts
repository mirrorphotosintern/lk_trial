/*
Contains the Stripe configuration for the app.
*/

import Stripe from "stripe"

// Only initialize stripe if we have a secret key
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-02-24.acacia",
      appInfo: { name: "Receipt AI", version: "0.1.0" }
    })
  : null

// Helper to get stripe instance or throw if not available
export function getStripe() {
  if (!stripe) {
    throw new Error("STRIPE_SECRET_KEY is not set in environment variables")
  }
  return stripe
}
