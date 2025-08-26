# 🚀 Deploy DeekshantWorks to Vercel

This guide will help you deploy your React portfolio website to Vercel in just a few minutes.

## 📋 Prerequisites

- Your project code (already ready!)
- A GitHub account
- A Vercel account (free)

## 🎯 Method 1: Deploy via GitHub (Recommended)

### Step 1: Push Your Code to GitHub

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `deekshantworks` or any name you prefer
   - Make it public or private (your choice)
   - Don't initialize with README (since you already have files)

2. **Push your local code to GitHub:**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit your changes
   git commit -m "Initial commit - DeekshantWorks portfolio"
   
   # Add your GitHub repository as origin
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push to GitHub
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign up" and sign up with your GitHub account

2. **Import your project:**
   - Click "New Project"
   - You'll see your GitHub repositories
   - Find your portfolio repository and click "Import"

3. **Configure deployment:**
   - **Project Name**: `deekshantworks` (or your preferred name)
   - **Framework Preset**: Vite (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should be auto-filled)
   - **Output Directory**: `dist` (should be auto-filled)
   - **Install Command**: `npm install` (should be auto-filled)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - 🎉 Your site is live!

### Step 3: Get Your Live URL

After deployment, Vercel will provide you with:
- A live URL like: `https://deekshantworks-abc123.vercel.app`
- You can customize this URL in project settings

## 🎯 Method 2: Deploy via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# Build your project first
npm run build

# Deploy to Vercel
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? deekshantworks
# - In which directory is your code located? ./
```

## 🌐 Custom Domain Setup (Optional)

### Step 1: Add Custom Domain
1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Click "Add Domain"
5. Enter your domain (e.g., `deekshantworks.com`)

### Step 2: Configure DNS
Add these DNS records at your domain provider:
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## ⚡ Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy when you push to the main branch
- Create preview deployments for pull requests
- Show build logs and deployment status

## 🔧 Environment Variables (If Needed)

If you need to add environment variables:

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add variables like:
   - `VITE_API_URL` → `https://your-api.com`
   - `VITE_CONTACT_EMAIL` → `your-email@example.com`

## 📊 Performance & Analytics

Vercel provides built-in analytics:
1. Go to your project dashboard
2. Click on "Analytics" tab
3. View performance metrics, visitor stats, and more

## 🛠️ Troubleshooting

### Build Fails?
```bash
# Test build locally first
npm run build

# Check for errors in the terminal
# Fix any TypeScript or linting errors
npm run lint
```

### Site Not Loading Correctly?
- Check if all your assets are using relative paths
- Ensure your routing is configured for SPA (Single Page Application)
- Vercel automatically handles SPA routing for Vite projects

### Need to Redeploy?
```bash
# Make changes to your code
git add .
git commit -m "Update portfolio"
git push

# Vercel will automatically redeploy!
```

## 🎉 You're Live!

Your portfolio is now live on Vercel! Here's what you get:

✅ **Global CDN** - Fast loading worldwide  
✅ **HTTPS** - Secure by default  
✅ **Automatic deployments** - Push to deploy  
✅ **Preview deployments** - Test before going live  
✅ **Analytics** - Track your visitors  
✅ **Custom domains** - Use your own domain  

## 📱 Share Your Portfolio

Your live portfolio URL will be something like:
`https://deekshantworks-abc123.vercel.app`

Share it on:
- LinkedIn
- Twitter
- GitHub profile
- Resume
- Business cards

## 🔄 Making Updates

To update your live site:
1. Make changes to your code locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push
   ```
4. Vercel automatically deploys your changes!

---

**Need help?** Check the [Vercel documentation](https://vercel.com/docs) or their support resources.

**Congratulations! Your portfolio is now live! 🚀**
