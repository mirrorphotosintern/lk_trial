require('dotenv').config({ path: '.env.local' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function checkProductLinks() {
  console.log('🔍 Checking Price → Product relationships...\n');
  
  const prices = [
    { name: '100 Credits', priceId: process.env.STRIPE_PRICE_100_CREDITS, expectedProductId: process.env.STRIPE_PRODUCT_100_CREDITS },
    { name: '300 Credits', priceId: process.env.STRIPE_PRICE_300_CREDITS, expectedProductId: process.env.STRIPE_PRODUCT_300_CREDITS },
    { name: '600 Credits', priceId: process.env.STRIPE_PRICE_600_CREDITS, expectedProductId: process.env.STRIPE_PRODUCT_600_CREDITS }
  ].filter(item => item.priceId);
  
  for (const item of prices) {
    try {
      const price = await stripe.prices.retrieve(item.priceId, {
        expand: ['product']
      });
      
      console.log(`💳 ${item.name}:`);
      console.log(`   Price ID: ${item.priceId}`);
      console.log(`   Actual Product ID: ${price.product.id}`);
      console.log(`   Expected Product ID: ${item.expectedProductId}`);
      console.log(`   Product Name: ${price.product.name}`);
      console.log(`   Product Active: ${price.product.active}`);
      console.log(`   Price: $${price.unit_amount/100} ${price.currency.toUpperCase()}`);
      console.log(`   ✅ Product Match: ${price.product.id === item.expectedProductId ? 'YES' : 'NO'}`);
      
      if (price.product.id !== item.expectedProductId) {
        console.log(`   🚨 MISMATCH: This is why product logs aren't working!`);
      }
      
      console.log('---');
    } catch (error) {
      console.error(`❌ Error checking ${item.name}:`, error.message);
    }
  }
}

checkProductLinks().catch(console.error); 