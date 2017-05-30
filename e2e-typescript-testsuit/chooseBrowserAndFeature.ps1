param($browser, $feature) 

cat config/config-template.ts | % { $_ -replace "browserPlaceholder", "$browser" } | % { $_ -replace "featurePlaceHolder", "$feature" } | Set-Content -Encoding UTF8 -Path "config/config.ts"




