param($browser, $feature) 

cat config/config-template.ts | % { $_ -replace "browserPlaceholder", "$browser" } | % { $_ -replace "featurePlaceHolder", "$feature" } > config/config.ts

