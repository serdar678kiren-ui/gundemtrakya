/**
 * GÜNDEM TRAKYA - Zengin Çerkezköy, Çorlu, Trakya Haberleri, Köşe Yazarları & Sosyal Medya Veri Seti
 */

// 1. Canlı Piyasa & Finans Verileri
const financeData = [
  { code: "USD/TRY", name: "Dolar", value: "34.18", change: "+0.24%", up: true },
  { code: "EUR/TRY", name: "Euro", value: "37.42", change: "+0.18%", up: true },
  { code: "GAU/TRY", name: "Gram Altın", value: "2.795", change: "+0.65%", up: true },
  { code: "BIST 100", name: "Borsa İst.", value: "9.840", change: "-0.42%", up: false },
  { code: "BTC/USD", name: "Bitcoin", value: "64.320$", change: "+2.15%", up: true },
  { code: "BUGDAY", name: "Buğday/Ton", value: "9.450₺", change: "+1.10%", up: true }
];

// 2. Son Dakika (Breaking News) Başlıkları
const breakingNewsData = [
  { 
    id: 101, 
    articleId: 1, 
    title: "Halkalı - Kapıkule Hızlı Tren Projesinde Çerkezköy ve Edirne istasyonları test sürüşüne açılıyor!", 
    time: "23:15" 
  },
  { 
    id: 102, 
    articleId: 11, 
    title: "Çerkezköy ve Kapaklı Sanayi Bölgesinde 5 bin kişiye yeni istihdam protokolü imzalandı.", 
    time: "22:45" 
  },
  { 
    id: 103, 
    articleId: 12, 
    title: "Çorlu Havalimanı yeni dış hatlar tarifesi ve kargo merkezi projesi onaylandı.", 
    time: "22:10" 
  },
  { 
    id: 104, 
    articleId: 2, 
    title: "Trakya genelinde ayçiçeği hasadı başladı: Taban fiyat ve prim desteği netleşti.", 
    time: "21:30" 
  }
];

// 3. Trakya Nöbetçi Eczaneler Veri Seti
const pharmacyData = {
  tekirdag: [
    {
      name: "Şifa Eczanesi",
      district: "Çorlu",
      address: "Reşadiye Mah. Mandıracı Cad. No:42/A (Devlet Hastanesi Karşısı)",
      phone: "0282 651 22 33",
      time: "24 Saat Açık"
    },
    {
      name: "Hayat Eczanesi",
      district: "Süleymanpaşa",
      address: "Hürriyet Mah. Tepe Değirmen Cad. No:18/B",
      phone: "0282 262 44 55",
      time: "24 Saat Açık"
    },
    {
      name: "Merkez Eczanesi",
      district: "Çerkezköy",
      address: "Gazi Mustafa Kemal Paşa Mah. Atatürk Cad. No:65",
      phone: "0282 726 88 99",
      time: "24 Saat Açık"
    },
    {
      name: "Kapaklı Eczanesi",
      district: "Kapaklı",
      address: "İsmet Paşa Mah. Erbay Cad. No:12",
      phone: "0282 717 40 50",
      time: "24 Saat Açık"
    }
  ],
  edirne: [
    {
      name: "Selimiye Eczanesi",
      district: "Merkez",
      address: "Saraçlar Cad. Belediye Karşısı No:14",
      phone: "0284 212 10 20",
      time: "24 Saat Açık"
    },
    {
      name: "Trakya Eczanesi",
      district: "Keşan",
      address: "İnönü Cad. Devlet Hastanesi Yanı No:8",
      phone: "0284 714 30 40",
      time: "24 Saat Açık"
    }
  ],
  kirklareli: [
    {
      name: "Istranca Eczanesi",
      district: "Merkez",
      address: "Karakaş Mah. Fevzi Çakmak Cad. No:22",
      phone: "0288 214 55 66",
      time: "24 Saat Açık"
    },
    {
      name: "Güneş Eczanesi",
      district: "Lüleburgaz",
      address: "İstanbul Cad. Kongre Meydanı Yanı No:35",
      phone: "0288 417 77 88",
      time: "24 Saat Açık"
    }
  ]
};

// 4. Tüm Kategoriler & Köşe Yazarlarını Kapsayan Zengin Haber Listesi
const headlineArticles = [
  {
    id: 1,
    headlineNumber: 1,
    title: "Trakya'nın Ulaşımında Yeni Çağ: Hızlı Tren Hattında Geri Sayım Başladı!",
    spot: "İstanbul ile Edirne arasını 1 saat 20 dakikaya indirecek dev projede ray montajı tamamlandı. Ticaret, sanayi ve turizmde büyük canlanma bekleniyor.",
    category: "TRAKYA HABER",
    categorySlug: "trakya",
    location: "Çerkezköy / Edirne",
    badgeColor: "red",
    date: "26 Ağustos 2026 - 22:30",
    readTime: "5 dk",
    views: 154200,
    likes: 5120,
    reactions: { like: 2650, heart: 1920, clap: 980, thinking: 310, angry: 45 },
    socialPosts: [
      {
        user: "Çerkezköy Haber Gazetesi",
        handle: "@cerkezkoyhaber",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Çerkezköy İstasyonu'nda hızlı tren peronları hazır! İstanbul'a gidiş 25 dakikaya, Edirne'ye 45 dakikaya düşüyor. Sanayi kenti Çerkezköy sınıf atlıyor. 🚄📸 #Cerkezkoy #HizliTren",
        time: "12 dk önce",
        likes: 1840,
        shares: 512
      },
      {
        user: "Çorlu Güncel Medya",
        handle: "@corlu_gundem",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Çorlu ve Çerkezköy aksında sanayi çalışanları için banliyö ve hızlı tren sefer saatleri netleşti. Trafik çilesi tarihe karışacak! 🚆👏",
        time: "35 dk önce",
        likes: 1250,
        shares: 340
      }
    ],
    comments: [
      {
        id: 1,
        author: "Ersin Vardar",
        city: "Edirne / Merkez",
        time: "8 dakika önce",
        content: "Yıllardır beklediğimiz an geldi. Üniversite öğrencileri ve memurlar için İstanbul'a günübirlik gidip gelmek artık hayal değil. Emeği geçen herkesi tebrik ederim!",
        likes: 142
      },
      {
        id: 2,
        author: "Meltem Çakır",
        city: "Tekirdağ / Çorlu",
        time: "25 dakika önce",
        content: "Çerkezköy istasyonunun otopark ve ring servis bağlantıları da tamamlanmalı. Sabah sefer saatleri organize sanayi mesailerine uygun olursa mükemmel olur.",
        likes: 89
      }
    ],
    author: {
      name: "Murat Çelik",
      title: "Bölge Haberleri Müdürü",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Genel Bakış & Projenin Detayları",
        pageImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Ulaştırma ve Altyapı Bakanlığı'nın mega projeleri arasında yer alan <strong>Halkalı-Kapıkule Hızlı Tren Hattı</strong> projesinde tarihi bir eşiğe gelindi. Toplam 229 kilometrelik hattın ray döşeme ve elektrifikasyon çalışmaları tamamlanarak ilk test sürüşleri için geri sayım başladı.</p>
          <p>Proje tamamlandığında İstanbul ile Edirne arasındaki yolculuk süresi mevcut 4 saatten sadece <strong>1 saat 20 dakikaya</strong> düşecek. Aynı zamanda Çerkezköy ve Çorlu sanayi merkezleri üzerinden geçen hat, yük taşımacılığında da Türkiye'nin Avrupa'ya açılan en güçlü lojistik köprüsü olacak.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM (SAYFA 1)</span><div class="ad-content-box"><i class="fa-solid fa-rectangle-ad"></i> Google AdSense Sayfa İçi Reklam Alanı (336x280)</div></div>
          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> En Çok Merak Edilen Başlıklar:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">❓ Hızlı tren hangi il ve ilçelerde duracak? İstasyon listesi açıklandı mı?</span><span class="qa-link-badge">İstasyonları Gör (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">❓ Bilet fiyatları ne kadar olacak? Öğrenci ve memur indirimi var mı?</span><span class="qa-link-badge">Fiyat Tarifesi (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "İstasyon Listesi ve Güzergah Haritası",
        pageImage: "https://images.unsplash.com/photo-1515165562839-978bbcf18277?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 1: Hızlı Tren Hattı Hangi İl ve İlçelerden Geçecek?</strong></p>
          <div class="in-article-ad" style="border-color: var(--news-blue);"><span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
          <h3>Kesinleşen Durak ve İstasyon Listesi:</h3>
          <ol>
            <li><strong>İstanbul Halkalı Garı:</strong> Marmaray bağlantısı.</li>
            <li><strong>Çerkezköy İstasyonu:</strong> Sanayi ve bölge aktarma merkezi.</li>
            <li><strong>Büyükkarıştıran İstasyonu:</strong> Lojistik köy terminali.</li>
            <li><strong>Lüleburgaz Garı:</strong> Modern yolcu terminali.</li>
            <li><strong>Babaeski İstasyonu:</strong> Yerel tarım ve ticaret noktası.</li>
            <li><strong>Edirne Merkez & Kapıkule Garı:</strong> Avrupa sınır kapısı.</li>
          </ol>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Bilet Fiyatları, Sefer Saatleri & Konfor",
        pageImage: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 2: Bilet Fiyatları Ne Kadar Olacak ve Seferler Ne Zaman Başlıyor?</strong></p>
          <div class="in-article-ad" style="border-color: var(--news-green);"><span class="ad-label" style="color: var(--news-green);">REKLAM (SAYFA 3)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
          <p>TCDD Taşımacılık tarafından hazırlanan tarife taslağına göre bilet fiyatları karayolu otobüs biletleriyle rekabetçi olacak ve abonman indirimleri uygulanacak.</p>
        `
      }
    ]
  },
  {
    id: 11,
    headlineNumber: 2,
    title: "Çerkezköy ve Kapaklı OSB'de 5 Bin Kişiye İstihdam Müjdesi!",
    spot: "Trakya'nın en büyük sanayi kümelenmesinde otomotiv, kimya ve tekstil sektörlerinde dev yatırımlar üretime geçiyor.",
    category: "TRAKYA HABER",
    categorySlug: "trakya",
    location: "Tekirdağ / Çerkezköy",
    badgeColor: "red",
    date: "26 Ağustos 2026 - 22:15",
    readTime: "4 dk",
    views: 132000,
    likes: 4280,
    reactions: { like: 2450, heart: 1820, clap: 920, thinking: 110, angry: 15 },
    socialPosts: [
      {
        user: "Çerkezköy Bakış Gazetesi",
        handle: "@cerkezkoybakis",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Çerkezköy Organize Sanayi Bölgesi'nde kurulan yeni fabrikalarda mavi ve beyaz yaka 5.000 kişilik personel alımı başladı. Başvurular İŞKUR ve kariyer merkezlerinde alınıyor. 🏭👔 #CerkezkoyOSB",
        time: "20 dk önce",
        likes: 1420,
        shares: 612
      }
    ],
    comments: [
      {
        id: 1101,
        author: "Volkan Kurt",
        city: "Çerkezköy / Kızılpınar",
        time: "15 dk önce",
        content: "Bölgemiz için harika bir haber. Vardiya servis güzergahları Kızılpınar ve Kapaklı iç mahallelerine de uzatılmalı.",
        likes: 92
      }
    ],
    author: {
      name: "Murat Çelik",
      title: "Sanayi Editörü",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "İstihdam Hamlesi & Şartlar",
        pageImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Türkiye'nin üretim üssü Çerkezköy Organize Sanayi Bölgesi (ÇOSB), yılın en büyük toplu işe alım protokolüne imza attı.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklamı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 12,
    headlineNumber: 3,
    title: "Çorlu'da Yeni Altyapı ve Çevre Yolu Projesinde İmzalar Atıldı",
    spot: "Çorlu şehir içi trafiğini rahatlatacak 18 kilometrelik yeni bulvar ve köprülü kavşak inşaatı haftaya başlıyor.",
    category: "TRAKYA HABER",
    categorySlug: "trakya",
    location: "Tekirdağ / Çorlu",
    badgeColor: "red",
    date: "26 Ağustos 2026 - 21:45",
    readTime: "4 dk",
    views: 98100,
    likes: 3120,
    reactions: { like: 1950, heart: 1100, clap: 640, thinking: 80, angry: 20 },
    socialPosts: [
      {
        user: "Çorlu Olay & Yaşam",
        handle: "@corluolayhaber",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Omurtak Caddesi ve Orion kavşağındaki yoğunluk yeni çevre yoluyla son buluyor. Proje 12 ayda tamamlanacak! 🚗🏗️ #CorluTrafik",
        time: "1 saat önce",
        likes: 1120,
        shares: 340
      }
    ],
    comments: [
      {
        id: 1201,
        author: "Bülent Şahin",
        city: "Çorlu / Alipaşa",
        time: "30 dk önce",
        content: "Özellikle akşam iş çıkışlarında Emlak Konutları kavşağı kilitleniyordu, çok yerinde bir yatırım oldu.",
        likes: 68
      }
    ],
    author: {
      name: "Ahmet Yılmaz",
      title: "Bölge Muhabiri",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Çorlu Trafiğine Neşter",
        pageImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Tekirdağ Büyükşehir Belediyesi ve Karayolları Genel Müdürlüğü iş birliğiyle Çorlu çevre yolu projesi resmen start aldı.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklamı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 2,
    headlineNumber: 4,
    title: "Trakya Çiftçisinin Yüzü Gülüyor: Ayçiçeğinde Rekor Verim ve Alım Fiyatları",
    spot: "Sarı gelin tarlalarında hasat mesaisi başladı. Birlik temsilcileri bu yıl rekoltenin yüksek olduğunu ve prim desteğinin artırıldığını açıkladı.",
    category: "EKONOMİ & TARIM",
    categorySlug: "ekonomi",
    location: "Tekirdağ / Edirne",
    badgeColor: "amber",
    date: "26 Ağustos 2026 - 22:15",
    readTime: "4 dk",
    views: 112500,
    likes: 3840,
    reactions: { like: 1950, heart: 1420, clap: 780, thinking: 120, angry: 15 },
    socialPosts: [
      {
        user: "Trakya Çiftçi Birliği",
        handle: "@TrakyaCiftcisi",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Trakya Birlik'in açıkladığı taban fiyat ve mazot desteği üreticimizi sevindirdi. Tarlada emek veren tüm hemşehrilerimize bereketli bir hasat sezonu diliyoruz! 🌻🚜 #AyçiçeğiHasadı",
        time: "30 dk önce",
        likes: 920,
        shares: 240
      }
    ],
    comments: [
      {
        id: 101,
        author: "Ali Osman Kurt",
        city: "Hayrabolu / Tekirdağ",
        time: "15 dk önce",
        content: "Dönüm başına verim bu sene kuraklığa rağmen çok iyi çıktı. Primlerin zamanında yatırılması üreticiyi rahatlatır.",
        likes: 98
      }
    ],
    author: {
      name: "Ahmet Yılmaz",
      title: "Tarım & Ekonomi Muhabiri",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Hasat Raporu & Rekolte",
        pageImage: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Türkiye'nin bitkisel sıvı yağ ihtiyacının yaklaşık %60'ını tek başına karşılayan Trakya topraklarında, <strong>ayçiçeği hasat sezonu</strong> coşkuyla başladı.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Sayfa İçi Reklam Alanı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 3,
    headlineNumber: 5,
    title: "Milyonlarca Çalışanı İlgilendiren Yeni Düzenleme: Detaylar Belli Oldu!",
    spot: "Çalışma ve Sosyal Güvenlik Bakanlığı tarafından hazırlanan yeni esnek çalışma, kıdem tazminatı ve prim düzenlemesinde tüm maddeler netleşti.",
    category: "GÜNDEM",
    categorySlug: "gundem",
    location: "Türkiye Geneli",
    badgeColor: "blue",
    date: "26 Ağustos 2026 - 21:50",
    readTime: "4 dk",
    views: 98400,
    likes: 3100,
    reactions: { like: 1540, heart: 890, clap: 420, thinking: 540, angry: 80 },
    socialPosts: [
      {
        user: "İş & Sosyal Güvenlik Portalı",
        handle: "@SosyalGuvenlikRehber",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Yeni çalışma yasası taslağında uzaktan çalışan personelin internet ve ekipman giderlerinin işveren tarafından karşılanması şart koşuluyor. 💼📑 #CalismaHayatindaReform",
        time: "1 saat önce",
        likes: 1100,
        shares: 380
      }
    ],
    comments: [
      {
        id: 201,
        author: "Serkan Doğan",
        city: "Çerkezköy / Sanayi",
        time: "35 dk önce",
        content: "Sanayi bölgelerinde vardiyalı çalışan işçiler için servis ve yemek standartlarının da denetlenmesi şart.",
        likes: 72
      }
    ],
    author: {
      name: "Ayşe Erdem",
      title: "Ankara Temsilcisi",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Çalışma Hayatında Yeni Dönem",
        pageImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Çalışma hayatında uzun süredir merakla beklenen kapsamlı reform paketinin detayları kamuoyu ile paylaşıldı.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 4,
    headlineNumber: 6,
    title: "Çerkezköy ve Çorlu Sanayisine 10 Milyar Liralık Dev Yeşil Enerji Yatırımı",
    spot: "Trakya'nın sanayi devleri çatı GES ve rüzgar enerjisi santralleri ile karbon ayak izini sıfırlamaya hazırlanıyor.",
    category: "EKONOMİ & TARIM",
    categorySlug: "ekonomi",
    location: "Tekirdağ / Çorlu",
    badgeColor: "emerald",
    date: "26 Ağustos 2026 - 21:30",
    readTime: "4 dk",
    views: 68200,
    likes: 2450,
    reactions: { like: 1200, heart: 850, clap: 620, thinking: 90, angry: 10 },
    socialPosts: [
      {
        user: "Trakya Çevre & Enerji Platformu",
        handle: "@TrakyaYesilEnerji",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Trakya sanayisinde çatılara kurulan güneş panelleriyle yıllık 200 megavat temiz enerji üretilecek. Doğa ve ekonomi kazanıyor! ☀️🌱",
        time: "2 saat önce",
        likes: 640,
        shares: 180
      }
    ],
    comments: [
      {
        id: 301,
        author: "Mühendis Burak",
        city: "Çorlu OSB",
        time: "1 saat önce",
        content: "Fabrikalarda öz tüketim için güneş enerjisi yatırımı amortisman süresini 3 yıla indirdi. Çok doğru bir hamle.",
        likes: 54
      }
    ],
    author: {
      name: "Kerem Aksu",
      title: "Sanayi Editörü",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Sanayide Yeşil Dönüşüm",
        pageImage: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Avrupa Birliği sınırda karbon düzenlemesine hazırlanan Trakya sanayisi 10 milyar TL'lik yatırımla çatılarına güneş santralleri kuruyor.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 5,
    headlineNumber: 7,
    title: "Tarihi Kırkpınar Yağlı Güreşleri'nde Yeni Format: Başpehlivanlıkta Puanlama Sistemi",
    spot: "Geleneksel Kırkpınar Güreşleri'nde seyir zevkini artırmak ve rekabeti zirveye taşımak için lig usulü puanlama dönemi başladı.",
    category: "SPOR",
    categorySlug: "spor",
    location: "Edirne / Sarayiçi",
    badgeColor: "red",
    date: "26 Ağustos 2026 - 20:45",
    readTime: "3 dk",
    views: 89200,
    likes: 3490,
    reactions: { like: 1890, heart: 980, clap: 840, thinking: 110, angry: 25 },
    socialPosts: [
      {
        user: "Er Meydanı Tutkunları",
        handle: "@KirkpinarGundem",
        avatar: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Edirne Sarayiçi'nde yeni puanlama sistemiyle güreşler çok daha hareketli ve çekişmeli geçecek! Altın kemer yolunda tüm pehlivanlarımıza başarılar dileriz. 🤼‍♂️🇹🇷",
        time: "3 saat önce",
        likes: 1450,
        shares: 512
      }
    ],
    comments: [
      {
        id: 401,
        author: "Recep Usta",
        city: "Edirne / Karaağaç",
        time: "2 saat önce",
        content: "Sarayiçi Er Meydanı'nın aydınlatması yenilendi, gece güreşleri Edirne turizmini ikiye katlar!",
        likes: 83
      }
    ],
    author: {
      name: "Hakan Güler",
      title: "Spor Editörü",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Er Meydanında Yeni Kurallar",
        pageImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Edirne Sarayiçi Er Meydanı'nda 6 asırdır devam eden efsanevi organizasyonda yeni kurallar açıklandı.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 6,
    headlineNumber: 8,
    title: "Konut Sektöründe Yeni Dönem: İlk Evini Alacaklara 0.99 Kredi Kampanyası",
    spot: "Kamu bankaları öncülüğünde başlatılan düşük faizli konut kredisi paketi için başvuru şartları açıklandı.",
    category: "EKONOMİ & TARIM",
    categorySlug: "ekonomi",
    location: "Trakya Geneli",
    badgeColor: "blue",
    date: "26 Ağustos 2026 - 20:30",
    readTime: "4 dk",
    views: 124400,
    likes: 4750,
    reactions: { like: 2890, heart: 1650, clap: 920, thinking: 410, angry: 65 },
    socialPosts: [
      {
        user: "Trakya Emlak & Konut Dünyası",
        handle: "@TrakyaEmlakHaber",
        avatar: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Tekirdağ, Çorlu ve Edirne'de 0.99 konut kredisi başvuruları banka şubelerinde yoğun ilgi görüyor. Ev sahibi olmak isteyenler için büyük fırsat. 🏠🔑",
        time: "4 saat önce",
        likes: 1320,
        shares: 480
      }
    ],
    comments: [
      {
        id: 501,
        author: "Gülten Yıldız",
        city: "Süleymanpaşa / Tekirdağ",
        time: "1 saat önce",
        content: "Kiraların arttığı bu dönemde genç evliler için çok faydalı bir destek oldu.",
        likes: 67
      }
    ],
    author: {
      name: "Murat Çelik",
      title: "Ekonomi Editörü",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Konut Kredisi Şartları",
        pageImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Ev sahibi olmak isteyen dar ve orta gelirli vatandaşlar için hazırlanan konut kredisi başvuruları başladı.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 7,
    headlineNumber: 9,
    title: "Tekirdağ Bağ Bozumu ve Gastronomi Festivali Ziyaretçi Akınına Uğradı",
    spot: "Marmara kıyılarında düzenlenen festivalde yöresel lezzetler ve konserlerle 100 bini aşkın turist ağırlandı.",
    category: "YAŞAM",
    categorySlug: "yasam",
    location: "Tekirdağ / Şarköy",
    badgeColor: "pink",
    date: "26 Ağustos 2026 - 19:50",
    readTime: "3 dk",
    views: 61300,
    likes: 2180,
    reactions: { like: 1450, heart: 980, clap: 640, thinking: 40, angry: 5 },
    socialPosts: [
      {
        user: "Gezgin Trakya",
        handle: "@GezginTrakya",
        avatar: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Tekirdağ bağ rotası ve yöresel köfte lezzetleri festivalde birleşti! Marmara Denizi manzarası eşliğinde harika bir hafta sonu. 🍇🍷🌊",
        time: "5 saat önce",
        likes: 1840,
        shares: 610
      }
    ],
    comments: [
      {
        id: 601,
        author: "Ceyda Demir",
        city: "İstanbul / Ziyaretçi",
        time: "2 saat önce",
        content: "İstanbul'dan hafta sonu için geldik, organizasyon ve Trakya insanının misafirperverliği tek kelimeyle harikaydı!",
        likes: 52
      }
    ],
    author: {
      name: "Zeynep Kaya",
      title: "Kültür Yaşam Editörü",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Festival Coşkusu",
        pageImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Tekirdağ'ın eşsiz bağ rotaları ve mutfak kültürü festival kapsamında binlerce ziyaretçiyi buluşturdu.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 8,
    headlineNumber: 10,
    title: "Sağlıkta Çığır Açan Gelişme: Kanser Tedavisinde Kişiselleştirilmiş Aşı Başarısı",
    spot: "Türk bilim insanlarının geliştirdiği mRNA tabanlı tedavi klinik deneylerde %88 başarı elde etti.",
    category: "SAĞLIK",
    categorySlug: "saglik",
    location: "Sağlık & Tıp",
    badgeColor: "pink",
    date: "26 Ağustos 2026 - 19:00",
    readTime: "5 dk",
    views: 74100,
    likes: 3480,
    reactions: { like: 2100, heart: 1890, clap: 1100, thinking: 150, angry: 8 },
    socialPosts: [
      {
        user: "Tıp Dünyası Güncel",
        handle: "@TipGundem",
        avatar: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Kişiye özel tümör genetiğine göre üretilen yerli mRNA aşısında Faz-2 klinik sonuçları açıklandı. Tıp camiası için büyük umut! 🩺🧬",
        time: "6 saat önce",
        likes: 2150,
        shares: 720
      }
    ],
    comments: [
      {
        id: 701,
        author: "Dr. Selim Aras",
        city: "Edirne Tıp Fakültesi",
        time: "3 saat önce",
        content: "Onkolojide hedefe yönelik tedavilerin başarı oranı her geçen yıl katlanarak artıyor. Gurur verici.",
        likes: 95
      }
    ],
    author: {
      name: "Prof. Dr. Kaan Aydın",
      title: "Tıp Danışmanı",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Tıpta Yeni Çağ",
        pageImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Kişiye özel genetik analizlerle hazırlanan aşılar tıp dünyasında büyük heyecan yarattı.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 9,
    headlineNumber: 11,
    title: "Yerli Elektrikli Araçlarda Batarya Fabrikası İkinci Etabı Açıldı",
    spot: "Yılda 100 bin batarya paketi üretim kapasitesine sahip tesis, Avrupa'ya da ihracat yapacak.",
    category: "TEKNOLOJİ",
    categorySlug: "teknoloji",
    location: "Teknoloji & Sanayi",
    badgeColor: "purple",
    date: "26 Ağustos 2026 - 18:30",
    readTime: "4 dk",
    views: 65900,
    likes: 2400,
    reactions: { like: 1450, heart: 890, clap: 670, thinking: 80, angry: 15 },
    socialPosts: [
      {
        user: "Otomotiv & Teknoloji Haber",
        handle: "@OtoTeknoTurk",
        avatar: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Yeni batarya hücre teknolojisiyle şarj menzili %25 artıyor. Yerli tedarik zinciri için devasa bir adım. 🔋⚡🚗",
        time: "6 saat önce",
        likes: 980,
        shares: 310
      }
    ],
    comments: [
      {
        id: 801,
        author: "Emre Can",
        city: "Lüleburgaz",
        time: "4 saat önce",
        content: "Mühendislerimizin emeğine sağlık, yerli üretim bataryalar enerji bağımsızlığımız için çok kritik.",
        likes: 48
      }
    ],
    author: {
      name: "Kerem Aksu",
      title: "Teknoloji Editörü",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Batarya Üretimi",
        pageImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Türkiye'nin batarya ve enerji depolama alanındaki stratejik yatırımı yeni fazıyla üretime geçti.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 10,
    headlineNumber: 12,
    title: "Kırklareli İğneada Longoz Ormanları'nda Ekoturizm Sezonu Açıldı",
    spot: "Dünyanın nadir subasar ormanlarından olan İğneada'da yürüyüş parkurları doğaseverleri bekliyor.",
    category: "YAŞAM",
    categorySlug: "yasam",
    location: "Kırklareli / İğneada",
    badgeColor: "amber",
    date: "26 Ağustos 2026 - 17:15",
    readTime: "3 dk",
    views: 53200,
    likes: 1970,
    reactions: { like: 1320, heart: 1100, clap: 540, thinking: 30, angry: 5 },
    socialPosts: [
      {
        user: "Doğa Rehberi Trakya",
        handle: "@DogaTrakya",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Kano turları, göl çevresi bisiklet yolları ve nilüfer çiçekleriyle İğneada Longozu bu sezon bir masal gibi! 🛶🌲🌸 #LongozOrmanlari #Kirklareli",
        time: "7 saat önce",
        likes: 1650,
        shares: 420
      }
    ],
    comments: [
      {
        id: 901,
        author: "Aylin Özdemir",
        city: "Kırklareli / Merkez",
        time: "5 saat önce",
        content: "Mert Gölü'nde kano yapmak kesinlikle herkesin hayatında bir kez denemesi gereken muazzam bir deneyim.",
        likes: 61
      }
    ],
    author: {
      name: "Selin Yılmaz",
      title: "Gezi & Yaşam Yazarı",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Ekoturizm ve Doğa",
        pageImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Doğayla baş başa kalmak isteyenler için İğneada Longozu huzurlu bir kaçış noktası sunuyor.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 13,
    headlineNumber: 13,
    title: "Çerkezköy Belediyesi Kültür ve Sanat Akademisi Kayıtları Başladı",
    spot: "Müzik, tiyatro, resim ve robotik kodlama dallarında binlerce öğrenciye ücretsiz sanat eğitimi verilecek.",
    category: "YAŞAM",
    categorySlug: "yasam",
    location: "Tekirdağ / Çerkezköy",
    badgeColor: "pink",
    date: "26 Ağustos 2026 - 16:40",
    readTime: "3 dk",
    views: 41200,
    likes: 1650,
    reactions: { like: 1120, heart: 980, clap: 480, thinking: 20, angry: 2 },
    socialPosts: [
      {
        user: "Çerkezköy Kültür & Yaşam",
        handle: "@cerkezkoy_etkinlik",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Atatürk Kültür Merkezi'nde yeni dönem atölye kayıtları açıldı! Çocuklar ve gençler için harika kurslar. 🎨🎭🎶 #CerkezkoyKultur",
        time: "8 saat önce",
        likes: 920,
        shares: 210
      }
    ],
    comments: [
      {
        id: 1301,
        author: "Zehra Hanım",
        city: "Çerkezköy / Bağlık",
        time: "4 saat önce",
        content: "Geçen yıl piyano kursuna katıldık, hocalar çok ilgiliydi. Başarılar diliyorum.",
        likes: 38
      }
    ],
    author: {
      name: "Zeynep Kaya",
      title: "Kültür Muhabiri",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Sanat Kursları Başlıyor",
        pageImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Çerkezköy Belediyesi tarafından gençlerin sanatsal gelişimini desteklemek amacıyla açılan akademi yeni döneme hazır.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklamı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 14,
    headlineNumber: 14,
    title: "Çorlu Spor Bölgesel Amatör Ligde Şampiyonluk Yolunda Doludizgin!",
    spot: "General Basri Saran Stadyumu'nda oynanan kritik derbide Çorlu Spor sahadan 3-1 galip ayrılarak liderliğini sürdürdü.",
    category: "SPOR",
    categorySlug: "spor",
    location: "Tekirdağ / Çorlu",
    badgeColor: "red",
    date: "26 Ağustos 2026 - 15:30",
    readTime: "3 dk",
    views: 78900,
    likes: 3840,
    reactions: { like: 2450, heart: 1820, clap: 1100, thinking: 40, angry: 15 },
    socialPosts: [
      {
        user: "Çorlu Spor Taraftarlar Derneği",
        handle: "@CorluSpor1947",
        avatar: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Tribünleri dolduran 10 bin taraftarımızla zafere ulaştık! Bu sene o sene, 3. Lig'e adım adım! Kırmızı-Şimşekler durdurulamıyor! 🔴⚡⚽ #CorluSpor",
        time: "9 saat önce",
        likes: 2150,
        shares: 840
      }
    ],
    comments: [
      {
        id: 1401,
        author: "Murat Çorlulu",
        city: "Çorlu / Havuzlar",
        time: "6 saat önce",
        content: "Atmosfer inanılmazdı. Çorlu şehri profesyonel ligleri sonuna kadar hak ediyor!",
        likes: 114
      }
    ],
    author: {
      name: "Hakan Güler",
      title: "Spor Editörü",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Tribün Coşkusu & Maç Raporu",
        pageImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Bölgesel Amatör Lig temsilcimiz Çorlu Spor, kendi evinde ağırladığı güçlü rakibini 3-1 mağlup ederek zirvedeki yerini korudu.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklamı (336x280)</div></div>
        `
      }
    ]
  },

  // -------------------------------------------------------------
  // KÖŞE YAZARLARI MAKALELERİ (ID: 201, 202, 203, 204)
  // -------------------------------------------------------------
  {
    id: 201,
    title: "Hızlı Tren Hattı Trakya'nın Çehresini ve Sanayisini Nasıl Değiştirecek?",
    spot: "İstanbul ile Trakya arasındaki entegrasyon bölgedeki sanayi, turizm ve arsa değerlerini doğrudan etkileyecek.",
    category: "KÖŞE YAZISI",
    categorySlug: "yazarlar",
    location: "Trakya Analiz",
    badgeColor: "purple",
    date: "26 Ağustos 2026 - 10:00",
    readTime: "4 dk",
    views: 45200,
    likes: 1980,
    reactions: { like: 1240, heart: 890, clap: 640, thinking: 310, angry: 15 },
    socialPosts: [
      {
        user: "Trakya Stratejik Araştırmalar",
        handle: "@TrakyaStrateji",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Cemalettin Yıldız bugünkü yazısında Çerkezköy ve Lüleburgaz lojistik aksının önemini çok net ortaya koymuş. Okunması gereken harika bir analiz. 🚄✍️",
        time: "3 saat önce",
        likes: 640,
        shares: 180
      }
    ],
    comments: [
      {
        id: 20101,
        author: "Mehmet K.",
        city: "Tekirdağ / Merkez",
        time: "2 saat önce",
        content: "Cemalettin Bey'in tespitleri çok yerinde. Trakya'nın nüfus planlaması da hızlı trenle paralel yapılmalı.",
        likes: 42
      }
    ],
    author: {
      name: "Cemalettin Yıldız",
      title: "Trakya & Bölge Politikası",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Hızlı Tren ve Trakya'nın Geleceği",
        pageImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Değerli Gündem Trakya Okurları;</strong></p>
          <p>Yıllardır konuştuğumuz, projesini takip ettiğimiz Halkalı-Kapıkule Hızlı Tren Hattı nihayet test sürüşü aşamasına ulaştı. Peki bu proje Trakya için yalnızca bir ulaşım kolaylığı mı, yoksa bölgesel bir sıçrama tahtası mı?</p>
          <p>Çerkezköy, Kapaklı ve Çorlu gibi sanayimizin kalbi olan ilçelerimiz artık İstanbul'un banliyösü kadar yakın hale geliyor. 80 dakikada Edirne'den İstanbul'a ulaşmak, Edirne'deki Selimiye turizmini hafta sonu turlarından çıkarıp günlük yaşayan bir cazibe merkezine dönüştürecek.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Yazar İçi Reklamı</div></div>
          <p>Ancak bu büyük göç ve sanayi baskısını karşılarken yerel yönetimlerimizin altyapı, çevre ve yeşil alan planlarını bugünden tamamlaması zorunludur.</p>
        `
      }
    ]
  },
  {
    id: 202,
    title: "Trakya Çiftçisinin Geleceği: Modern Sulama ve Lisanslı Depoculuk",
    spot: "İklim krizine karşı Trakya havzasında suyun doğru yönetimi ve üretici kooperatiflerinin önemi.",
    category: "KÖŞE YAZISI",
    categorySlug: "yazarlar",
    location: "Tarım Yazıları",
    badgeColor: "purple",
    date: "26 Ağustos 2026 - 09:30",
    readTime: "4 dk",
    views: 38400,
    likes: 1720,
    reactions: { like: 1100, heart: 780, clap: 540, thinking: 190, angry: 10 },
    socialPosts: [
      {
        user: "Trakya Çiftçi Dünyası",
        handle: "@TrakyaTarim",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Sevgi Demir'in kaleme aldığı modern sulama teknikleri yazısı bölgemizdeki tüm ziraat odalarında paylaşılmalı! 🌾💧",
        time: "4 saat önce",
        likes: 512,
        shares: 140
      }
    ],
    comments: [
      {
        id: 20201,
        author: "Hasan Çavuş",
        city: "Babaeski",
        time: "3 saat önce",
        content: "Damla sulamaya geçen köylerimizde ürün kalitesi ikiye katlandı, Sevgi Hanım'a teşekkürler.",
        likes: 35
      }
    ],
    author: {
      name: "Sevgi Demir",
      title: "Tarım & Üretici Dünyası",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Tarımda Akıllı Sulama Şart",
        pageImage: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Trakya'nın Bereketli Topraklarına Sahip Çıkmalıyız!</strong></p>
          <p>Ayçiçeği ve buğdayda Türkiye'nin ambarı olan Trakya, son yıllarda kuraklık sinyalleri veriyor. Vahşi sulama yerine damla sulama ve kapalı devre sulama kanallarına geçiş artık bir tercih değil, milli güvenlik meselesidir.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Yazar İçi Reklamı</div></div>
          <p>Üreticimizin lisanslı depolara yönelmesi ürünün değer kaybetmeden satılmasını sağlıyor. Birlik ve kooperatiflerimizi güçlendirmeliyiz.</p>
        `
      }
    ]
  },
  {
    id: 203,
    title: "Sanayi Bölgelerinde İş Güvenliği ve Çalışan Hakları",
    spot: "Çorlu ve Çerkezköy aksında büyüyen sanayi tesislerinde yeni hukuki standartlar ve denetimler.",
    category: "KÖŞE YAZISI",
    categorySlug: "yazarlar",
    location: "Hukuk & Çalışma",
    badgeColor: "purple",
    date: "25 Ağustos 2026 - 18:00",
    readTime: "4 dk",
    views: 31200,
    likes: 1450,
    reactions: { like: 980, heart: 540, clap: 420, thinking: 180, angry: 25 },
    socialPosts: [
      {
        user: "Çerkezköy Hukuk Kulübü",
        handle: "@HukukGundem282",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Av. Metehan Şahin'in sanayi çalışanları ve kıdem hakları üzerine kaleme aldığı güncel makalesi yayında. ⚖️📑",
        time: "1 gün önce",
        likes: 420,
        shares: 95
      }
    ],
    comments: [
      {
        id: 20301,
        author: "Kemal U.",
        city: "Kapaklı",
        time: "18 saat önce",
        content: "Metehan Bey işçilerin yasal haklarını çok yalın bir dille anlatmış, elinize sağlık.",
        likes: 29
      }
    ],
    author: {
      name: "Av. Metehan Şahin",
      title: "Hukuk & Toplum",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Sanayide Çalışan Hakları",
        pageImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Sanayi Kentinde Emeğin Hukuki Güvencesi</strong></p>
          <p>Çerkezköy ve Çorlu Organize Sanayi Bölgelerimizde yüz binlerce emekçi vardiyalarda ter döküyor. İş sağlığı ve güvenliği yalnızca mevzuat kuralı değil, vicdani ve hayati bir zorunluluktur.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Yazar İçi Reklamı</div></div>
          <p>Yeni çalışma yasası taslağında fazla mesai ücretlendirmeleri ve servis güvenliği denetimlerinin artırılması memnuniyet vericidir.</p>
        `
      }
    ]
  },
  {
    id: 204,
    title: "Ergene Havzası Koruma Eylem Planında Son Durum",
    spot: "Arıtma tesisleri ve nehir yatağı temizliğinde gelinen nokta çevre sağlığı açısından neler vadediyor?",
    category: "KÖŞE YAZISI",
    categorySlug: "yazarlar",
    location: "Çevre & Yaşam",
    badgeColor: "purple",
    date: "25 Ağustos 2026 - 16:30",
    readTime: "4 dk",
    views: 41800,
    likes: 2150,
    reactions: { like: 1450, heart: 980, clap: 720, thinking: 110, angry: 30 },
    socialPosts: [
      {
        user: "Ergene Temiz Aksın",
        handle: "@ErgenePlatformu",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Dr. Elif Nazlı'nın Ergene Nehri analizini mutlaka okuyun! Trakya'nın su kaynakları temizlenene kadar mücadeleye devam. 🌊🌿",
        time: "1 gün önce",
        likes: 890,
        shares: 310
      }
    ],
    comments: [
      {
        id: 20401,
        author: "Fikret Bey",
        city: "Muratlı",
        time: "1 gün önce",
        content: "Ergene'de balıkların yeniden yüzdüğü günleri görmeyi dört gözle bekliyoruz.",
        likes: 58
      }
    ],
    author: {
      name: "Dr. Elif Nazlı",
      title: "Çevre & Yaşam",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Ergene Havzası Temizliği",
        pageImage: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Trakya'nın Mavi Damarları Yeniden Nefes Alıyor</strong></p>
          <p>Ergene Havzası Koruma Eylem Planı kapsamında kurulan derin deşarj ve ileri biyolojik arıtma tesisleri sayesinde nehir suyundaki kirlilik parametrelerinde sevindirici düşüşler kaydedilmeye başlandı.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Yazar İçi Reklamı</div></div>
          <p>Fabrikaların atık su arıtma standartlarına eksiksiz uyması, gelecek nesillere temiz bir Trakya bırakmanın en temel şartıdır.</p>
        `
      }
    ]
  }
];

// 5. Köşe Yazarları Listesi (Üst Widget Kartları İçin)
const columnistsData = [
  {
    id: 201,
    name: "Cemalettin Yıldız",
    title: "Trakya & Bölge Politikası",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    articleTitle: "Hızlı Tren Hattı Trakya'nın Çehresini Nasıl Değiştirecek?",
    date: "Bugün",
    summary: "İstanbul ile Trakya arasındaki entegrasyon bölgedeki sanayi, turizm ve arsa değerlerini doğrudan etkileyecek."
  },
  {
    id: 202,
    name: "Sevgi Demir",
    title: "Tarım & Üretici Dünyası",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    articleTitle: "Trakya Çiftçisinin Geleceği: Modern Sulama ve Lisanslı Depoculuk",
    date: "Bugün",
    summary: "İklim krizine karşı Trakya havzasında suyun doğru yönetimi ve üretici kooperatiflerinin önemi."
  },
  {
    id: 203,
    name: "Av. Metehan Şahin",
    title: "Hukuk & Toplum",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    articleTitle: "Sanayi Bölgelerinde İş Güvenliği ve Çalışan Hakları",
    date: "Dün",
    summary: "Çorlu ve Çerkezköy aksında büyüyen sanayi tesislerinde yeni hukuki standartlar ve denetimler."
  },
  {
    id: 204,
    name: "Dr. Elif Nazlı",
    title: "Çevre & Yaşam",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    articleTitle: "Ergene Havzası Koruma Eylem Planında Son Durum",
    date: "Dün",
    summary: "Arıtma tesisleri ve nehir yatağı temizliğinde gelinen nokta çevre sağlığı açısından neler vadediyor?"
  }
];

// 6. Günün En Çok Okunanları
const topReadArticles = [
  { rank: 1, title: "Halkalı-Kapıkule Hızlı Tren durakları ve sefer saatleri belli oldu", views: "154 Bin", category: "Trakya" },
  { rank: 2, title: "Çerkezköy OSB'de 5 bin kişilik dev istihdam hamlesi", views: "132 Bin", category: "İstihdam" },
  { rank: 3, title: "Trakya'da ayçiçeği alım fiyatı açıklandı: İşte ton başına rakam", views: "112 Bin", category: "Tarım" },
  { rank: 4, title: "Çorlu yeni çevre yolu ve kavşak inşaatı haftaya başlıyor", views: "98 Bin", category: "Ulaşım" },
  { rank: 5, title: "Çorlu Spor ligde liderliğini sürdürüyor: 3-1 galibiyet", views: "78 Bin", category: "Spor" }
];

// 7. Kategoriler
const portalCategories = [
  { name: "TÜMÜ", slug: "all", icon: "fa-border-all" },
  { name: "TRAKYA HABER", slug: "trakya", icon: "fa-location-dot" },
  { name: "GÜNDEM", slug: "gundem", icon: "fa-bullhorn" },
  { name: "EKONOMİ & TARIM", slug: "ekonomi", icon: "fa-seedling" },
  { name: "SPOR", slug: "spor", icon: "fa-futbol" },
  { name: "TEKNOLOJİ", slug: "teknoloji", icon: "fa-microchip" },
  { name: "SAĞLIK", slug: "saglik", icon: "fa-heart-pulse" },
  { name: "YAŞAM", slug: "yasam", icon: "fa-tree" },
  { name: "YAZARLAR", slug: "yazarlar", icon: "fa-pen-nib" }
];
