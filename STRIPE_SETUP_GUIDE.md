# Stripe Checkout Sessions Configuration Guide

## 🎯 Problem Fixed
Your app now creates Stripe Checkout Sessions that **redirect back to your website** after payment, ensuring users return to your success/cancel pages.

## ✅ What's Working Now

### **Payment Flow:**
1. **User clicks "Buy Credits"** → Your app calls `/api/create-checkout-session`
2. **Checkout Session created** → User redirected to Stripe Checkout
3. **Payment completed** → User redirected back to **your website**
4. **Success page shows** → Credits already added via webhook

### **Redirect URLs (Already Configured):**
```
✅ Success: https://yourdomain.com/credits/success?session_id={CHECKOUT_SESSION_ID}
✅ Cancel:  https://yourdomain.com/credits/cancel
```

## 🎉 No Environment Variables Needed!

Unlike Payment Links, this approach **doesn't require any additional environment variables**. Everything works with your existing Stripe keys:

```env
# Only these are needed (you already have them)
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## 🚀 Benefits of This Approach

1. **Returns to Your Site** - Users stay in your ecosystem
2. **User Tracking** - Webhook knows exactly which user to credit
3. **Session Verification** - Success page verifies payment before showing success
4. **Custom Experience** - Your branding throughout the entire flow
5. **No Extra Config** - Uses dynamic pricing, no Price IDs needed

## 📱 Frontend Usage

Your frontend code remains the same:

```javascript
// Simple API call
const response = await fetch('/api/create-checkout-session', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ credits: 100 })
})

const { url } = await response.json()

// Redirect to Stripe Checkout (will return to your site after payment)
window.location.href = url
```

**Valid credit amounts:** `100`, `300`, `600`, `1200`

## 🧪 Testing the Full Flow

1. **Test the API endpoint:**
   ```bash
   curl -X POST https://yourdomain.com/api/create-checkout-session \
     -H "Content-Type: application/json" \
     -d '{"credits": 100}'
   ```

2. **Should return:**
   ```json
   {
     "url": "https://checkout.stripe.com/c/pay/cs_...",
     "sessionId": "cs_xxxxxxxxxxxxx",
     "credits": 100,
     "amount": 4.99
   }
   ```

3. **Complete test purchase:**
   - Goes to Stripe Checkout
   - Complete payment
   - **Returns to your success page** ✅
   - Credits added automatically via webhook

## 🔧 What Happens After Payment

### **Success Flow:**
1. **Payment completed** → Stripe webhook fired
2. **Credits added** → Via `checkout.session.completed` event
3. **User redirected** → To your `/credits/success` page
4. **Session verified** → Page confirms payment was successful
5. **Credits displayed** → Current balance shown

### **Cancel Flow:**
1. **User cancels** → No payment processed
2. **User redirected** → To your `/credits/cancel` page
3. **No credits charged** → Clear messaging to user

## 📊 Success Page Features

Your success page already includes:
- ✅ **Payment verification** via Stripe session
- ✅ **Current credit balance** display
- ✅ **Next steps guidance** (take quiz, play game)
- ✅ **Achievement information**
- ✅ **Navigation back to app**

## 🎨 Customization Options

You can customize the checkout experience by modifying:

```javascript
// In create-checkout-session/route.ts
const checkoutSession = await stripe.checkout.sessions.create({
  // ... existing config
  allow_promotion_codes: true,        // ✅ Enable promo codes
  billing_address_collection: "auto", // ✅ Collect billing address
  payment_method_types: ["card"],     // ✅ Add more: ["card", "us_bank_account"]
})
```

## 🔧 Troubleshooting

**Error: "Invalid credit package"**  
- Frontend sending invalid credit amount
- Valid amounts: 100, 300, 600, 1200

**User not redirected back**
- Check `NEXT_PUBLIC_APP_URL` environment variable
- Ensure it matches your deployed domain exactly

**Success page shows "Payment Not Verified"**
- Webhook might not be processing correctly
- Check webhook logs in Stripe Dashboard
- Verify webhook secret is correct

**Credits not added after payment**
- Check webhook configuration in Stripe Dashboard
- Verify webhook endpoint is receiving events
- Check deployment logs for webhook processing

## 🎯 Ready to Deploy!

This approach provides the best user experience:
- ✅ Professional Stripe Checkout interface
- ✅ Automatic return to your website
- ✅ Proper user tracking and credit attribution
- ✅ No additional configuration needed

Just deploy and test! 🚀 