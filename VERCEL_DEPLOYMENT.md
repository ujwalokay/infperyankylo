# Vercel Deployment Guide

This project has been configured for deployment on Vercel. Follow these steps to deploy:

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your app automatically
   - You'll get a live URL like `https://your-app.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## Important Notes

### ⚠️ In-Memory Storage Limitation

**The current app uses in-memory storage which will NOT persist data in serverless environments.**

Each serverless function invocation may run on a different server, so data stored in memory will be lost between requests. 

**Recommended Solutions:**
1. Use a cloud database (PostgreSQL, MongoDB, etc.)
2. Use Vercel's KV storage
3. Use a third-party service like Supabase or PlanetScale

### How the App Works on Vercel

- **Frontend**: Static files built to and served from `dist/public`
- **API**: Serverless function at `api/index.ts`
- **Routing**: 
  - Vercel automatically routes requests to `/api/*` to the serverless function in `api/index.ts`
  - The Express app handles the full path (e.g., `/api/email-signup`)
  - All other routes serve the React app (SPA)

### Environment Variables

If you need environment variables:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add your variables there

### Build Configuration

The project is configured with:
- **Build Command**: `npm run build` (builds Vite frontend only)
- **Output Directory**: `dist/public`
- **Serverless Functions**: Located in `api/` directory (Vercel auto-detects)

## Troubleshooting

**Build Fails:**
- Check that all dependencies are in `package.json`
- Ensure Node.js version compatibility

**API Not Working:**
- Verify routes start with `/api/`
- Check Vercel function logs in dashboard

**Data Not Persisting:**
- Implement a proper database solution (see warning above)

## Next Steps

1. Set up a database for persistent storage
2. Configure environment variables in Vercel
3. Set up a custom domain (optional)
4. Enable automatic deployments for your main branch
