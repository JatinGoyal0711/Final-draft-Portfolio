# Copy-Paste Commands for Deployment

Just follow these steps exactly. Copy and paste each command.

---

## Step 1: Open PowerShell

Press `Win + R`, type `powershell`, press Enter.

---

## Step 2: Install Git (if you don't have it)

Download from: https://git-scm.com/download/win

Run the installer. Then restart PowerShell.

**Verify Git is installed:**
```powershell
git --version
```

You should see a version number. If you get an error, Git isn't installed yet.

---

## Step 3: Navigate to Your Project

Copy this exact command:

```powershell
cd "E:\Portfolio\myPorrfolio"
```

---

## Step 4: Configure Git (First Time Only)

Replace the email and name with YOUR information:

```powershell
git config --global user.email "your-email@gmail.com"
git config --global user.name "Your Name"
```

Example:
```powershell
git config --global user.email "jatin@gmail.com"
git config --global user.name "Jatin Goyal"
```

---

## Step 5: Initialize Git Repository

Copy these commands one by one:

```powershell
git init
```

```powershell
git add .
```

```powershell
git commit -m "Initial commit: Motion Design Portfolio"
```

```powershell
git branch -M main
```

**✅ Your local git repo is ready!**

---

## Step 6: Create GitHub Repository

1. Open browser: https://github.com/new
2. Log in (create account if needed)
3. **Repository name**: `myPortfolio`
4. **Description**: Motion Design Portfolio (optional)
5. **Uncheck** "Add a README file"
6. **Uncheck** "Add .gitignore"
7. **Uncheck** "Choose a license"
8. Click **"Create repository"**

---

## Step 7: Connect to GitHub

You'll see a page with HTTPS URL. It looks like:
```
https://github.com/YOUR_USERNAME/myPortfolio.git
```

Copy your HTTPS URL from GitHub (NOT the SSH one).

In PowerShell, paste this command (replace the URL with yours from GitHub):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/myPortfolio.git
```

Example:
```powershell
git remote add origin https://github.com/jatingoyal/myPortfolio.git
```

---

## Step 8: Push to GitHub

Copy this command exactly:

```powershell
git push -u origin main
```

When prompted for password, GitHub will ask for credentials:
- Username: Your GitHub username
- Password: Your GitHub password (or personal access token)

**✅ Your code is now on GitHub!**

---

## Step 9: Deploy to Vercel

1. Open browser: https://vercel.com
2. Click **"Sign up"**
3. Click **"Continue with GitHub"**
4. Click **"Authorize Vercel"**
5. After login, click **"New Project"**
6. Select **"myPortfolio"** from your repositories
7. Configuration should be auto-filled:
   - Framework: Create React App ✅
   - Root Directory: frontend ✅
   - Build Command: yarn build ✅
   - Output Directory: build ✅
8. Click **"Deploy"**
9. Wait 2-3 minutes for build to complete

**✅ Your site is now live!**

---

## 🎉 Your Site is Live!

Vercel gives you a URL like:
```
https://myportfolio-abc123.vercel.app
```

Share this link!

---

## Future Updates

Every time you want to update your site:

1. Make changes to files
2. In PowerShell:

```powershell
cd "E:\Portfolio\myPorrfolio"
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will **automatically** deploy your changes! ✅

---

## Troubleshooting

### "git not found"
- Git isn't installed. Download and install from git-scm.com
- Restart PowerShell after installation

### "origin already exists"
- Run: `git remote remove origin`
- Then re-run the connect command from Step 7

### GitHub authentication fails
- If it asks for password, use your GitHub password
- Or create a Personal Access Token at github.com/settings/tokens

### Videos not showing on Vercel
- Verify video is at: `frontend/public/Animation1.mp4`
- Check mock.js has: `videoSrc: '/Animation1.mp4'`

---

## Need Help?

Check these files in your project:
- **00_START_HERE.md** - Overview
- **QUICK_START.md** - Detailed explanations
- **README_DEPLOYMENT.md** - Deep dive into each step

---

**Good luck! You've got this! 🚀**
