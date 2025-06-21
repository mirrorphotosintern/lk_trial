require('dotenv').config({ path: '.env.local' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function checkRecentPayments() {
  console.log('🔍 Checking recent payments from today...\n');
  
  // Get today's date range
  const today = new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const startOfDayTimestamp = Math.floor(startOfDay.getTime() / 1000);
  
  try {
    // Get charges from today
    const charges = await stripe.charges.list({
      created: {
        gte: startOfDayTimestamp
      },
      limit: 20
    });
    
    console.log(`💳 Found ${charges.data.length} charges today:\n`);
    
    if (charges.data.length === 0) {
      console.log('❌ No charges found today. This might explain why product logs are empty.');
      return;
    }
    
    for (const charge of charges.data) {
      const time = new Date(charge.created * 1000).toLocaleTimeString();
      const date = new Date(charge.created * 1000).toLocaleDateString();
      
      console.log(`⚡ Charge: ${charge.id}`);
      console.log(`   Time: ${date} ${time}`);
      console.log(`   Amount: $${charge.amount / 100} ${charge.currency.toUpperCase()}`);
      console.log(`   Status: ${charge.status}`);
      console.log(`   Customer: ${charge.customer || 'No customer ID'}`);
      
      // Check if it's associated with our products
      if (charge.invoice) {
        console.log(`   Invoice: ${charge.invoice}`);
        try {
          const invoice = await stripe.invoices.retrieve(charge.invoice, {
            expand: ['lines.data.price.product']
          });
          
          if (invoice.lines.data.length > 0) {
            const lineItem = invoice.lines.data[0];
            const product = lineItem.price.product;
            console.log(`   🎯 Product: ${product.name} (${product.id})`);
            console.log(`   📦 This should appear in product analytics!`);
          }
        } catch (err) {
          console.log(`   ⚠️ Could not fetch invoice details`);
        }
      }
      
      console.log('---');
    }
    
  } catch (error) {
    console.error('❌ Error fetching payments:', error.message);
  }
}

checkRecentPayments().catch(console.error); 