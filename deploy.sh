#!/bin/bash

echo "Building..."
ng build --configuration production

echo "Deploying to GitHub Pages..."
cd dist/portfolio/browser

git init
git checkout -b gh-pages
git add .
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M')"
git remote add origin https://github.com/Subhajit-13/portfolio.git
git push origin gh-pages --force

cd ../../..
echo "Done! Live at https://subhajit-13.github.io/portfolio/"