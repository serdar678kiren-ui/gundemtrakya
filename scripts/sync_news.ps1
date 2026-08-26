# GÜNDEM TRAKYA - Hatasız Canlı Haber Çekici (UTF-8 & Apify Motoru)
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$targetJs = "C:\Users\user\Desktop\Gundem-Trakya-Web\js\data.js"
$scratchJs = "C:\Users\user\.gemini\antigravity\scratch\modern-blog-web\js\data.js"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " GUNDEM TRAKYA - CANLI HABER GUNCELLEME   " -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "1. Canli Haber Kaynaklarina Baglaniliyor..." -ForegroundColor Green

$wc = New-Object System.Net.WebClient
$wc.Encoding = [System.Text.Encoding]::UTF8

$liveItems = @()

# Kaynak 1: TRT Haber Gundem
try {
  $xmlStr = $wc.DownloadString("https://www.trthaber.com/gundem_articles.rss")
  [xml]$rssGundem = $xmlStr
  foreach ($it in $rssGundem.rss.channel.item | Select-Object -First 6) {
    $t = $it.title.Trim()
    $d = $it.description.InnerText
    if ([string]::IsNullOrWhiteSpace($d)) { $d = "$t hakkında son dakika detayları ve resmi açıklamalar." }
    $d = ($d -replace '<[^>]+>','').Trim()

    $liveItems += [PSCustomObject]@{
      title = $t
      spot = $d
      category = "GÜNDEM"
      categorySlug = "gundem"
      badgeColor = "red"
      date = (Get-Date).ToString("dd MMMM yyyy - HH:mm", [System.Globalization.CultureInfo]::GetCultureInfo("tr-TR"))
    }
  }
} catch {
  Write-Host "Gundem akisi uyarisi: $_" -ForegroundColor DarkGray
}

# Kaynak 2: TRT Haber Ekonomi & Tarim
try {
  $xmlEkoStr = $wc.DownloadString("https://www.trthaber.com/ekonomi_articles.rss")
  [xml]$rssEko = $xmlEkoStr
  foreach ($it in $rssEko.rss.channel.item | Select-Object -First 4) {
    $t = $it.title.Trim()
    $d = $it.description.InnerText
    if ([string]::IsNullOrWhiteSpace($d)) { $d = "$t hakkında piyasa ve sektör değerlendirmeleri." }
    $d = ($d -replace '<[^>]+>','').Trim()

    $liveItems += [PSCustomObject]@{
      title = $t
      spot = $d
      category = "EKONOMİ & TARIM"
      categorySlug = "ekonomi"
      badgeColor = "amber"
      date = (Get-Date).ToString("dd MMMM yyyy - HH:mm", [System.Globalization.CultureInfo]::GetCultureInfo("tr-TR"))
    }
  }
} catch {
  Write-Host "Ekonomi akisi uyarisi: $_" -ForegroundColor DarkGray
}

Write-Host "Toplam $($liveItems.Count) adet canli haber basariyla alindi!" -ForegroundColor Green

if ($liveItems.Count -gt 0) {
  Write-Host "2. data.js dosyasi temiz Turkce karakterlerle yaziliyor..." -ForegroundColor Yellow

  $defaultImages = @(
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
  )

  $headlineList = @()
  $breakingList = @()
  $topReadList = @()

  for ($i = 0; $i -lt [Math]::Min($liveItems.Count, 10); $i++) {
    $item = $liveItems[$i]
    $num = $i + 1
    $img = $defaultImages[$i]
    
    $cleanTitle = $item.title -replace '"','\"' -replace '`','\''
    $cleanSpot = $item.spot -replace '"','\"' -replace '`','\''
    if ([string]::IsNullOrWhiteSpace($cleanSpot) -or $cleanSpot.Contains("System.Xml")) {
      $cleanSpot = "$cleanTitle hakkında tüm son dakika gelişmeleri ve resmi açıklamalar."
    }

    $headlineList += @"
  {
    id: $num,
    headlineNumber: $num,
    title: "$cleanTitle",
    spot: "$cleanSpot",
    category: "$($item.category)",
    categorySlug: "$($item.categorySlug)",
    badgeColor: "$($item.badgeColor)",
    date: "$($item.date)",
    readTime: "4 dk",
    views: $(Get-Random -Minimum 35000 -Maximum 160000),
    likes: $(Get-Random -Minimum 1200 -Maximum 5500),
    author: {
      name: "Murat Çelik",
      title: "Gündem Editörü",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "$img",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Genel Bilgiler & Flaş Gelişme",
        pageImage: "$img",
        content: `
          <p class="lead">$cleanSpot</p>
          <p>Gelişmeyle ilgili resmi kurumlardan ve yetkililerden yapılan ilk açıklamalarda bölgedeki sürecin anbean takip edildiği bildirildi.</p>
          <div class="in-article-ad">
            <span class="ad-label">REKLAM (SAYFA 1)</span>
            <div class="ad-content-box"><i class="fa-solid fa-rectangle-ad"></i> Google AdSense Sayfa İçi Reklam Alanı (336x280 / Responsive)</div>
          </div>
          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Merak Edilen Başlıklar:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)">
              <span class="qa-link-text">❓ Bu gelişme Trakya bölgesini ve vatandaşı nasıl etkileyecek?</span>
              <span class="qa-link-badge">Fotoğraf ve Cevabı Gör (Sayfa 2) ➡️</span>
            </div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Detaylar & Sonuç",
        pageImage: "$img",
        content: `
          <p class="lead"><strong>Gelişmenin Bölgesel ve Ekonomik Yansımaları:</strong></p>
          <div class="in-article-ad" style="border-color: var(--news-blue);">
            <span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2)</span>
            <div class="ad-content-box"><i class="fa-solid fa-rectangle-ad"></i> Google AdSense Sayfa 2 Reklamı (300x250)</div>
          </div>
          <p>Uzmanlar ve sektör temsilcileri tarafından yapılan değerlendirmelerde sürecin önümüzdeki günlerde netleşeceği ve resmi takvimin kamuoyu ile paylaşılacağı kaydedildi.</p>
        `
      }
    ]
  }
"@

    if ($num -le 4) {
      $breakingList += @"
  { id: $(100 + $num), articleId: $num, title: "$cleanTitle", time: "$(Get-Date -Format 'HH:mm')" }
"@
    }

    if ($num -le 5) {
      $topReadList += @"
  { rank: $num, title: "$cleanTitle", views: "$(Get-Random -Minimum 50 -Maximum 190) Bin", category: "$($item.category)" }
"@
    }
  }

  $headlinesJs = $headlineList -join ",`n"
  $breakingJs = $breakingList -join ",`n"
  $topReadJs = $topReadList -join ",`n"

  $fullJsContent = @"
/**
 * GÜNDEM TRAKYA - Canlı Otomatik Çekilmiş Gerçek Haber Veri Seti
 * Son Güncelleme: $((Get-Date).ToString("dd.MM.yyyy HH:mm:ss"))
 */

const financeData = [
  { code: "USD/TRY", name: "Dolar", value: "34.18", change: "+0.24%", up: true },
  { code: "EUR/TRY", name: "Euro", value: "37.42", change: "+0.18%", up: true },
  { code: "GAU/TRY", name: "Gram Altın", value: "2.795", change: "+0.65%", up: true },
  { code: "BIST 100", name: "Borsa İst.", value: "9.840", change: "-0.42%", up: false },
  { code: "BTC/USD", name: "Bitcoin", value: "64.320$", change: "+2.15%", up: true },
  { code: "BUGDAY", name: "Buğday/Ton", value: "9.450₺", change: "+1.10%", up: true }
];

const breakingNewsData = [
$breakingJs
];

const pharmacyData = {
  tekirdag: [
    { name: "Şifa Eczanesi", district: "Çorlu", address: "Reşadiye Mah. Mandıracı Cad. No:42/A (Devlet Hastanesi Karşısı)", phone: "0282 651 22 33", time: "24 Saat Açık" },
    { name: "Hayat Eczanesi", district: "Süleymanpaşa", address: "Hürriyet Mah. Tepe Değirmen Cad. No:18/B", phone: "0282 262 44 55", time: "24 Saat Açık" },
    { name: "Merkez Eczanesi", district: "Çerkezköy", address: "Gazi Mustafa Kemal Paşa Mah. Atatürk Cad. No:65", phone: "0282 726 88 99", time: "24 Saat Açık" }
  ],
  edirne: [
    { name: "Selimiye Eczanesi", district: "Merkez", address: "Saraçlar Cad. Belediye Karşısı No:14", phone: "0284 212 10 20", time: "24 Saat Açık" },
    { name: "Trakya Eczanesi", district: "Keşan", address: "İnönü Cad. Devlet Hastanesi Yanı No:8", phone: "0284 714 30 40", time: "24 Saat Açık" }
  ],
  kirklareli: [
    { name: "Istranca Eczanesi", district: "Merkez", address: "Karakaş Mah. Fevzi Çakmak Cad. No:22", phone: "0288 214 55 66", time: "24 Saat Açık" },
    { name: "Güneş Eczanesi", district: "Lüleburgaz", address: "İstanbul Cad. Kongre Meydanı Yanı No:35", phone: "0288 417 77 88", time: "24 Saat Açık" }
  ]
};

const headlineArticles = [
$headlinesJs
];

const columnistsData = [
  { id: 201, name: "Cemalettin Yıldız", title: "Trakya & Bölge Politikası", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80", articleTitle: "Hızlı Tren Hattı Trakya'nın Çehresini Nasıl Değiştirecek?", date: "Bugün", summary: "İstanbul ile Trakya arasındaki entegrasyon bölgedeki sanayi, turizm ve arsa değerlerini doğrudan etkileyecek." },
  { id: 202, name: "Sevgi Demir", title: "Tarım & Üretici Dünyası", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80", articleTitle: "Trakya Çiftçisinin Geleceği: Modern Sulama ve Lisanslı Depoculuk", date: "Bugün", summary: "İklim krizine karşı Trakya havzasında suyun doğru yönetimi ve üretici kooperatiflerinin önemi." },
  { id: 203, name: "Av. Metehan Şahin", title: "Hukuk & Toplum", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80", articleTitle: "Sanayi Bölgelerinde İş Güvenliği ve Çalışan Hakları", date: "Dün", summary: "Çorlu ve Çerkezköy aksında büyüyen sanayi tesislerinde yeni hukuki standartlar ve denetimler." },
  { id: 204, name: "Dr. Elif Nazlı", title: "Çevre & Yaşam", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80", articleTitle: "Ergene Havzası Koruma Eylem Planında Son Durum", date: "Dün", summary: "Arıtma tesisleri ve nehir yatağı temizliğinde gelinen nokta çevre sağlığı açısından neler vadediyor?" }
];

const topReadArticles = [
$topReadJs
];

const portalCategories = [
  { name: "TÜMÜ", slug: "all" },
  { name: "TRAKYA HABER", slug: "trakya" },
  { name: "GÜNDEM", slug: "gundem" },
  { name: "EKONOMİ & TARIM", slug: "ekonomi" },
  { name: "SPOR", slug: "spor" },
  { name: "TEKNOLOJİ", slug: "teknoloji" },
  { name: "SAĞLIK", slug: "saglik" },
  { name: "YAŞAM", slug: "yasam" },
  { name: "YAZARLAR", slug: "yazarlar" }
];
"@

  $utf8WithoutBom = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($targetJs, $fullJsContent, $utf8WithoutBom)
  [System.IO.File]::WriteAllText($scratchJs, $fullJsContent, $utf8WithoutBom)

  Write-Host "3. data.js hatasiz UTF-8 formatinda basariyla yazildi!" -ForegroundColor Green
  Write-Host "==========================================" -ForegroundColor Cyan
}
