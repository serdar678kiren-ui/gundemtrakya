@echo off
chcp 65001 >nul
title Gündem Trakya - Canlı Haber Güncelleyici
echo ===================================================
echo   GÜNDEM TRAKYA - CANLI HABERLERİ ÇEK & YENİLE
echo ===================================================
echo.
echo Canlı haber kaynaklarına bağlanılıyor...
powershell -ExecutionPolicy Bypass -File "C:\Users\user\Desktop\Gundem-Trakya-Web\scripts\sync_news.ps1"
echo.
echo Tarayıcı yenileniyor...
start "" "C:\Users\user\Desktop\Gundem-Trakya-Web\index.html"
echo.
echo [BAŞARILI] Siteniz en son dakika haberleriyle güncellendi!
timeout /t 3 >nul
