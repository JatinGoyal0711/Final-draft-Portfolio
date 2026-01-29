# Deployment Guide

## GitHub Setup

### 1. Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `myPortfolio` (or your preferred name)
3. **Do NOT initialize** with README, .gitignore, or license (we already have these)

### 2. Push to GitHub
```bash
cd E:\Portfolio\myPorrfolio

# Configure git user (first time only)
git config --global user.email "your-email@gmail.com"
git config --global user.name "Your Name"

# Initialize and push
git init
git add .
git commit -m "Initial commit: Portfolio with motion graphics"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/myPortfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Vercel Deployment

### 1. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up or login with GitHub
3. Click "New Project"
4. Select your GitHub repository (`myPortfolio`)
5. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend/`
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `yarn install`
6. Click "Deploy"

### 2. Environment Variables (if needed)
In Vercel dashboard → Project Settings → Environment Variables:
- Add any `.env` variables needed

### 3. Custom Domain (Optional)
In Vercel dashboard → Settings → Domains:
- Add your custom domain here

---

## Project Structure for Vercel
```
myPortfolio/
├── frontend/              # Main React app (deployed)
│   ├── public/
│   │   ├── index.html
│   │   └── Animation1.mp4
│   ├── src/
│   ├── package.json
│   └── build/             # Auto-generated on deploy
├── backend/               # Not deployed (optional separate service)
├── Assets/                # Local assets
├── vercel.json            # Vercel config
└── README.md
```

---

## Checklist Before Deploying

- ✅ All dependencies installed (`yarn install` in frontend)
- ✅ Builds locally (`yarn build` in frontend)
- ✅ `.gitignore` configured properly
- ✅ No `.env` secrets in git
- ✅ Video file `Animation1.mp4` in `frontend/public/`
- ✅ Environment variables set in Vercel dashboard

---

## Troubleshooting

### Build fails on Vercel
- Check build logs: Vercel Dashboard → Deployments → Build logs
- Ensure `root` directory is set to `frontend/` in Vercel settings

### Videos not loading
- Verify video path is `/Animation1.mp4` (relative to public folder)
- Video must be in `frontend/public/` folder

### GitHub not connecting
- Authorize Vercel with GitHub OAuth
- Check that repo is public or Vercel has access

---

## Post-Deployment

Your portfolio will be live at: `https://myportfolio-RANDOM.vercel.app`

You can access it via custom domain once configured.

Every push to `main` branch will auto-deploy!
