#!/bin/bash
# This file can be run on Mac/Linux to automate git initialization
# For Windows PowerShell users, follow the commands in QUICK_START.md

cd "$(dirname "$0")"

echo "🚀 Initializing Git Repository..."
git init

echo "📝 Configuring Git User..."
read -p "Enter your email: " EMAIL
read -p "Enter your name: " NAME

git config user.email "$EMAIL"
git config user.name "$NAME"

echo "📦 Adding all files to git..."
git add .

echo "💾 Creating initial commit..."
git commit -m "Initial commit: Motion Design Portfolio"

echo "🔄 Renaming branch to main..."
git branch -M main

echo ""
echo "✅ Git repository initialized!"
echo ""
echo "Next steps:"
echo "1. Create repo on GitHub: https://github.com/new"
echo "2. Copy the HTTPS URL from GitHub"
echo "3. Run: git remote add origin https://github.com/YOUR_USERNAME/myPortfolio.git"
echo "4. Run: git push -u origin main"
echo ""
echo "Then deploy to Vercel: https://vercel.com"
