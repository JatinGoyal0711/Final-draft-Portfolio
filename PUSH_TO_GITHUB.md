# Push to GitHub - Instructions

Your local git repository is **ready**! ✅

Now follow these steps to push to GitHub:

---

## Step 1: Create a Repository on GitHub

1. Go to: https://github.com/new
2. Log in with your GitHub account (create one if needed)
3. **Repository name**: `myPortfolio`
4. **Description**: Motion Design Portfolio (optional)
5. **Uncheck**: "Add a README file"
6. **Uncheck**: "Add .gitignore"  
7. **Uncheck**: "Choose a license"
8. Click **"Create repository"**

---

## Step 2: Copy Your HTTPS URL

After creating the repo, you'll see a page with:
```
https://github.com/YOUR_USERNAME/myPortfolio.git
```

**Copy this URL** (use HTTPS, not SSH)

---

## Step 3: Push to GitHub

Open PowerShell and run this command (replace with YOUR URL):

```powershell
cd "E:\Portfolio\myPorrfolio"
&"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/YOUR_USERNAME/myPortfolio.git
&"C:\Program Files\Git\bin\git.exe" push -u origin main
```

When prompted for credentials:
- Username: Your GitHub username
- Password: Your GitHub password (or personal access token)

---

## Example

If your GitHub username is `jatingoyal`, the command would be:

```powershell
cd "E:\Portfolio\myPorrfolio"
&"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/jatingoyal/myPortfolio.git
&"C:\Program Files\Git\bin\git.exe" push -u origin main
```

---

## ✅ Success!

Once pushed, you'll see:
```
Enumerating objects: 96, done.
Counting objects: 100% (96/96), done.
...
* [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Your code is now on GitHub! 🎉

---

## Next: Deploy to Vercel

After pushing to GitHub:
1. Go to https://vercel.com
2. Click "New Project"
3. Select your `myPortfolio` repo
4. Click "Deploy"

Done! Your site will be live in 2-3 minutes! 🚀
