$ErrorActionPreference = "Stop"
$repo = $PSScriptRoot
$wt = "D:\Temp\opencode\gh-pages-deploy"

$env:NEXT_BASE_PATH = "/Portifolio"
Push-Location $repo
npm run build
if ($LASTEXITCODE -ne 0) { Pop-Location; exit 1 }
Pop-Location

New-Item -ItemType File -Path (Join-Path $repo "out\.nojekyll") -Force | Out-Null

if (-not (Test-Path $wt)) { New-Item -ItemType Directory -Path $wt | Out-Null; Push-Location $wt; git init -b gh-pages; git remote add origin https://github.com/leandro-25/Portifolio.git; Pop-Location }

Get-ChildItem -Force -Path $wt | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
Copy-Item (Join-Path $repo "out\*") -Destination $wt -Recurse -Force
Copy-Item (Join-Path $repo "out\.nojekyll") -Destination $wt -Force

Push-Location $wt
git add -A
$staged = git status --porcelain
if ($staged) {
  git commit -m "Deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
  git push origin gh-pages
  if ($LASTEXITCODE -eq 0) { Write-Host "Publicado em https://leandro-25.github.io/Portifolio/" -ForegroundColor Green }
} else {
  Write-Host "Sem alteracoes, nada para publicar."
}
Pop-Location
