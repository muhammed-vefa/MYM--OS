$sourcePath = "C:\Users\MUHAMMED-VEFA-IS\.gemini\antigravity\scratch\MYM_iOS_Project_Final"
$destinationZip = "C:\Users\MUHAMMED-VEFA-IS\Desktop\MYM_iOS_Build.zip"

if (Test-Path $destinationZip) {
    Remove-Item $destinationZip
}

Add-Type -AssemblyName "System.IO.Compression.FileSystem"
[System.IO.Compression.ZipFile]::CreateFromDirectory($sourcePath, $destinationZip)

Write-Host "Proje başarıyla ZIP'lendi: $destinationZip" -ForegroundColor Green
Write-Host "VoltBuilder'a yüklemek için bu dosyayı kullanabilirsiniz." -ForegroundColor Cyan
