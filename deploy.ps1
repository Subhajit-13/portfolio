Write-Host "Building..." -ForegroundColor Cyan
ng build --configuration production

Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan
Set-Location dist\portfolio\browser
git init
git checkout -b gh-pages
git add .
git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git remote add origin https://github.com/Subhajit-13/portfolio.git
git push origin gh-pages --force
Set-Location ..\..\..

Write-Host "Done! Live at https://subhajit-13.github.io/portfolio/" -ForegroundColor Green