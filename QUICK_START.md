# ⚡ Quick Start Guide

## 1️⃣ Install Git (if not already installed)

### Windows
Download from [git-scm.com](https://git-scm.com/download/win) and run the installer.

After installation, restart PowerShell or Command Prompt.

---

## 2️⃣ Configure Git User

Run these commands in PowerShell (first time only):

```powershell
git config --global user.email "your-email@gmail.com"
git config --global user.name "Your Name"
```

---

## 3️⃣ Initialize Local Repository

Navigate to your project and run:

```powershell
cd "E:\Portfolio\myPorrfolio"
git init
git add .
git commit -m "Initial commit: Motion Design Portfolio"
git branch -M main
```

---

## 4️⃣ Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `myPortfolio` (or your choice)
3. **Do NOT** initialize with README, .gitignore, or license
4. Click "Create repository"
5. Copy the HTTPS URL from the next screen

---

## 5️⃣ Connect to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```powershell
cd "E:\Portfolio\myPorrfolio"

git remote add origin https://github.com/YOUR_USERNAME/myPortfolio.git
git push -u origin main
```

✅ Your code is now on GitHub!

---

## 6️⃣ Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up or Login with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "New Project"
5. Select your `myPortfolio` repository
6. Configure settings:
   - **Framework**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `yarn install`
7. Click "Deploy"
8. Wait for deployment to complete ✅

### Option B: Using Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Deploy
cd "E:\Portfolio\myPorrfolio\frontend"
vercel
```

---

## 7️⃣ Access Your Live Site

After deployment, Vercel provides a URL like:
```
https://myportfolio-abc123.vercel.app
```

You can now:
- ✅ Share the link
- ✅ Add a custom domain
- ✅ Configure analytics
- ✅ Set environment variables

---

## 📋 Pre-Deployment Checklist

Before pushing to GitHub, verify:

- [ ] `frontend/public/Animation1.mp4` exists
- [ ] `vercel.json` is configured
- [ ] `.gitignore` excludes `node_modules/`
- [ ] `.env.local` is NOT in git (listed in .gitignore)
- [ ] `frontend/package.json` has correct scripts
- [ ] No personal secrets in code

Run locally first:
```powershell
cd "E:\Portfolio\myPorrfolio\frontend"
yarn install
yarn build
```

If build succeeds, you're ready to deploy!

---

## 🔄 After Deployment

Every time you:
```bash
git push origin main
```

Vercel **automatically redeploys** your site! 🚀

---

## 🆘 Troubleshooting

### Git command not found
```powershell
# Check if git is installed
git --version

# If not, download from git-scm.com and reinstall
```

### Build fails on Vercel
- Check the deployment logs in Vercel dashboard
- Ensure all dependencies are in `frontend/package.json`
- Run `yarn install && yarn build` locally to test

### Videos not playing
- Verify video is at: `frontend/public/Animation1.mp4`
- Check mock.js has correct path: `videoSrc: '/Animation1.mp4'`

### GitHub authentication fails
- Use HTTPS URL (not SSH)
- Generate personal access token: [github.com/settings/tokens](https://github.com/settings/tokens)
- Use token as password when prompted

---

## 📞 Need Help?

- **Git Help**: `git --help`
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev

Enjoy your live portfolio! 🎉
