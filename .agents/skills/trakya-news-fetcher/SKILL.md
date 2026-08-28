---
name: trakya-news-fetcher
description: Trakya yerel haber sitelerinden (Trakya Flaş Haber, Trakya Gazetesi, Çerkezköy Bakış, Çorlu Haber vb.) paylaşılan linkleri anında okur, orijinal fotoğraflarını indirir, 3 sayfalı soru-cevap formatına dönüştürür ve sitenin 1. Manşetine ekler.
---

# Trakya Yerel Haber Botu & Editör Becerisi 📰⚡

Bu beceri, kullanıcı bir haber linki paylaştığında haberin tüm detaylarını saniyeler içinde çekip Gündem Trakya portalına entegre etmek üzere optimize edilmiştir.

## Desteklenen Haber Kaynakları:
- 	rakyaflashaber.com, 	rakyagazetesi.com.tr, cerkezkoybakis.com.tr, corluhaber.com, edirnehaber.org, habertrak.com.tr vb.

## Otomatik İşlem Aşamaları:
1. **İçerik Çekme**: ead_url_content ile sayfa başlığı, spot, gövde metni ve og:image fotoğrafı alınır.
2. **Görsel İndirme**: Orijinal yüksek çözünürlüklü fotoğraf indirilerek img/<slug>.jpg olarak kaydedilir.
3. **Zengin Haber Üretimi**:
   - Manşet No: 1 (Yeni haber en üste yerleşir)
   - 3 Sayfalı Derinlemesine Yapı (Giriş, Detaylar, Gelecek Beklentisi/Önem)
   - Gerçekçi Yerel Okuyucu Yorumları ve Twitter/Facebook Sosyal Tepkileri
   - reakingNewsData (Son Dakika Şeridi) Güncellemesi
4. **Senkronizasyon**: Dosyalar masaüstü Gundem-Trakya-Web klasörüne kopyalanır ve Git deposuna commit atılır.
