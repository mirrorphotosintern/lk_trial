# Setting Up Clerk Webhooks for Profile Synchronization

This guide will walk you through setting up Clerk webhooks to automatically sync user profiles to Supabase when users sign up or update their profiles.

## Why Use Webhooks?

While our application automatically syncs user profiles when they visit the site through the `ProfileSync` component, webhooks provide several advantages:

1. **Immediate Syncing**: User profiles are synced as soon as they sign up, before they even visit the app
2. **Background Updates**: Profile updates made in Clerk's user management dashboard sync automatically
3. **Reliability**: Ensures profile data is always up-to-date, even if the client-side sync fails

## Setup Steps

### 1. Create a Webhook in Clerk Dashboard

1. Log in to your [Clerk Dashboard](https://dashboard.clerk.dev/)
2. Navigate to the **Webhooks** section in the sidebar
3. Click **Add Endpoint**
4. Enter your webhook URL: `https://your-domain.com/api/clerk-webhook`
   - For local development, use a service like ngrok to expose your local server

### 2. Select Events to Listen For

Configure the webhook to listen for these specific events:

- `user.created`: Triggered when a new user signs up
- `user.updated`: Triggered when a user's profile is updated

### 3. Get the Webhook Secret

After creating the webhook:

1. Copy the **Signing Secret** provided by Clerk
2. Add it to your `.env.local` file:
   ```
   CLERK_WEBHOOK_SECRET=whsec_your_signing_secret
   ```

### 4. Deploy Your Application

Make sure your application is deployed with the updated environment variables.

## Testing the Webhook

To test if your webhook is working correctly:

1. Create a new test user in Clerk
2. Check your application logs for webhook activity:
   ```
   Webhook received: user.created for user: user_123
   Syncing profile for user_123 (Test User)
   Successfully synced profile for user user_123
   ```

3. Check your Supabase database to verify the profile was created:
   ```sql
   SELECT * FROM profiles WHERE user_id = 'user_123';
   ```

## Troubleshooting

### Webhook Not Firing

- Check the Clerk Dashboard > Webhooks section to see if there are any failed webhook attempts
- Verify that your webhook URL is accessible from the internet
- Ensure your server is running and able to receive POST requests

### Profile Not Being Synced

- Check the application logs for any errors in the webhook handler
- Verify that the `CLERK_WEBHOOK_SECRET` environment variable is set correctly
- Make sure the database migration for profiles has been applied

### Testing Locally

For local development, you can use a service like ngrok to expose your local server:

1. Install ngrok: `npm install -g ngrok`
2. Run your application: `npm run dev`
3. In a separate terminal, expose your application: `ngrok http 3000`
4. Copy the ngrok URL (e.g., `https://12345abcde.ngrok.io`)
5. Update your webhook URL in the Clerk Dashboard to use this temporary URL
6. Add `/api/clerk-webhook` to the end of the URL

## Security Considerations

- **Never** share your webhook signing secret
- Use HTTPS for your webhook URL in production
- The webhook verification ensures that only Clerk can trigger your webhook endpoint

By following this guide, you'll ensure that user profiles are automatically synced to your Supabase database as soon as they sign up, providing a seamless experience for your users. 