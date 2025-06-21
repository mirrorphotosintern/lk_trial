// Simple test script to debug Stripe prices API locally
const Stripe = require('stripe');

// You'll need to replace this with your actual Stripe secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_your_key_here', {
  apiVersion: "2025-02-24.acacia"
});

async function testStripePrices() {
  try {
    console.log("🔍 Fetching Stripe prices...");

    // Fetch all active prices
    const prices = await stripe.prices.list({
      active: true,
      expand: ['data.product'],
      limit: 100
    });

    console.log(`📊 Found ${prices.data.length} active prices`);

    // Show all prices and their metadata
    prices.data.forEach(price => {
      const product = price.product;
      console.log({
        priceId: price.id,
        amount: price.unit_amount / 100,
        productName: product.name,
        productActive: product.active,
        priceMetadata: price.metadata,
        productMetadata: product.metadata,
        hasCreditsMetadata: !!price.metadata?.credits
      });
    });

    // Filter for credit products
    const creditPrices = prices.data.filter(price => {
      const product = price.product;
      return product.active && 
             (product.name?.toLowerCase().includes('credit') || 
              product.metadata?.type === 'credits' ||
              price.metadata?.credits);
    });

    console.log(`\n✅ Found ${creditPrices.length} credit prices`);
    
    if (creditPrices.length === 0) {
      console.log("⚠️ No credit prices found. Reasons could be:");
      console.log("1. No prices have 'credits' in metadata");
      console.log("2. No products have 'credit' in the name");
      console.log("3. No products have type='credits' in metadata");
    }

  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.type === 'StripeAuthenticationError') {
      console.log("Make sure your STRIPE_SECRET_KEY environment variable is set correctly");
    }
  }
}

testStripePrices(); 