# Supabase Setup Guide

This guide will help you set up Supabase for the TikTok-style website feed application.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - **Name**: `tiktok-website-feed`
   - **Database Password**: Choose a strong password
   - **Region**: Choose the closest region to your users
6. Click "Create new project"
7. Wait for the project to be set up (usually takes 1-2 minutes)

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **Anon/Public Key** (starts with `eyJ...`)

## 3. Update Your HTML Configuration

Replace the placeholder values in `index.html`:

```javascript
// Replace with your actual Supabase project URL and anon key
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

## 4. Set Up the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase-schema.sql`
3. Paste it into the SQL editor
4. Click **Run** to execute the schema

This will create:
- `user_profiles` table for user information
- `websites` table for website data
- `likes` table for user likes
- `bookmarks` table for user bookmarks
- `comments` table for user comments
- `follows` table for user relationships
- Row Level Security policies
- Triggers for updating counts
- Indexes for performance

## 5. Configure Authentication

1. Go to **Authentication** → **Settings**
2. Enable **Email** provider
3. Optionally enable **Google**, **GitHub**, or other providers
4. Configure **Site URL** to your domain (e.g., `http://localhost:8000` for development)
5. Set **Redirect URLs** to include your domain

## 6. Test the Integration

1. Start your local server: `python -m http.server 8000`
2. Open `http://localhost:8000`
3. Try uploading a website (you'll need to sign in first)
4. Test liking and bookmarking websites
5. Check your Supabase dashboard to see the data being stored

## 7. Environment Variables (Optional)

For production, you can use environment variables:

```javascript
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'your-anon-key';
```

## Database Tables Overview

### `user_profiles`
- Stores user profile information
- Automatically created when user signs up
- Tracks follower/following counts

### `websites`
- Stores website information
- Links to creator user
- Includes tags and metadata

### `likes`
- Tracks user likes on websites
- Prevents duplicate likes
- Updates user like counts

### `bookmarks`
- Tracks user bookmarks
- Private to each user
- Enables bookmark management

### `comments`
- Stores user comments on websites
- Links to user profiles
- Ordered by creation date

### `follows`
- Manages user relationships
- Tracks follower/following connections
- Updates profile counts

## Security Features

- **Row Level Security (RLS)** enabled on all tables
- Users can only access their own data
- Public read access for websites and comments
- Secure authentication required for writes

## Performance Optimizations

- Database indexes on frequently queried columns
- Efficient count updates via triggers
- Optimized queries for user interactions

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure your domain is added to the allowed origins in Supabase
2. **Authentication Errors**: Check that your API keys are correct
3. **Permission Errors**: Verify RLS policies are set up correctly
4. **Database Errors**: Ensure the schema was created successfully

### Debug Mode

Add this to your JavaScript for debugging:

```javascript
// Enable Supabase debug mode
localStorage.setItem('supabase.debug', 'true');
```

## Next Steps

1. **Customize the UI**: Add sign-in/sign-up forms
2. **Add Real-time Features**: Use Supabase real-time subscriptions
3. **Implement Search**: Add full-text search for websites
4. **Add Notifications**: Implement push notifications for interactions
5. **Analytics**: Track user engagement and popular websites

## Support

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)
