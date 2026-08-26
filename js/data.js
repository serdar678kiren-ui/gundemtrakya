/**
 * GÜNDEM TRAKYA - Kapsamlı, Çok Sayfalı & Her Sayfaya Özel Görselli Haber Veri Seti
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

// 2. Son Dakika (Breaking News) Başlıkları ve İlgili Haber Bağlantıları (articleId)
const breakingNewsData = [
  { 
    id: 101, 
    articleId: 1, 
    title: "Halkalı - Kapıkule Hızlı Tren Projesinde test sürüşleri başlıyor: Süre 1 saat 20 dakikaya düşüyor!", 
    time: "22:58" 
  },
  { 
    id: 102, 
    articleId: 2, 
    title: "Trakya genelinde ayçiçeği hasadı başladı: Taban fiyat ve prim desteği netleşti.", 
    time: "22:30" 
  },
  { 
    id: 103, 
    articleId: 6, 
    title: "Konut kredisinde 0.99 faiz kampanyası açıklandı: Trakya'da başvurular başladı!", 
    time: "21:45" 
  },
  { 
    id: 104, 
    articleId: 4, 
    title: "Çerkezköy ve Çorlu Organize Sanayi Bölgelerinde 10 milyar liralık yeşil enerji atağı.", 
    time: "21:15" 
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

// 4. 1'den 10'a Çok Sayfalı ve Her Sayfaya Özel Görselli Manşet Haberleri
const headlineArticles = [
  {
    id: 1,
    headlineNumber: 1,
    title: "Trakya'nın Ulaşımında Yeni Çağ: Hızlı Tren Hattında Geri Sayım Başladı!",
    spot: "İstanbul ile Edirne arasını 1 saat 20 dakikaya indirecek dev projede ray montajı tamamlandı. Ticaret, sanayi ve turizmde büyük canlanma bekleniyor.",
    category: "TRAKYA GÜNDEM",
    categorySlug: "trakya",
    badgeColor: "red",
    date: "26 Ağustos 2026 - 22:30",
    readTime: "5 dk",
    views: 124200,
    likes: 4120,
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

          <div class="in-article-ad">
            <span class="ad-label">REKLAM (SAYFA 1)</span>
            <div class="ad-content-box">
              <i class="fa-solid fa-rectangle-ad"></i> Google AdSense Sayfa İçi Reklam Alanı (336x280 / Responsive)
            </div>
          </div>

          <div class="interactive-qa-box">
            <div class="qa-box-title">
              <i class="fa-solid fa-circle-question"></i>
              <span>Vatandaşların En Çok Merak Ettiği Sorular:</span>
            </div>

            <div class="qa-link-card" onclick="goToArticlePage(2)">
              <span class="qa-link-text">❓ Hızlı tren hangi il ve ilçelerde duracak? İstasyon listesi açıklandı mı?</span>
              <span class="qa-link-badge">Fotoğraf ve Cevabı Gör (Sayfa 2) ➡️</span>
            </div>

            <div class="qa-link-card" onclick="goToArticlePage(3)">
              <span class="qa-link-text">❓ Bilet fiyatları ne kadar olacak? Öğrenci ve memur indirimi var mı?</span>
              <span class="qa-link-badge">Fotoğraf ve Cevabı Gör (Sayfa 3) ➡️</span>
            </div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "İstasyon Listesi ve Güzergah Haritası",
        pageImage: "https://images.unsplash.com/photo-1515165562839-978bbcf18277?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 1: Hızlı Tren Hattı Hangi İl ve İlçelerden Geçecek?</strong></p>
          <p>Ulaştırma Bakanlığı Altyapı Yatırımları Genel Müdürlüğü'nün yayınladığı resmi güzergah planına göre hızlı tren hattı Trakya'nın ana sanayi ve nüfus merkezlerini birbirine bağlıyor.</p>

          <div class="in-article-ad" style="border-color: var(--news-blue);">
            <span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2 - YÜKSEK GELİR ALANI)</span>
            <div class="ad-content-box">
              <i class="fa-solid fa-rectangle-ad"></i> Google AdSense Sayfa 2 Reklamı (300x250 / 336x280)
            </div>
          </div>

          <h3>Kesinleşen Durak ve İstasyon Listesi:</h3>
          <ol>
            <li><strong>İstanbul Halkalı Garı:</strong> Marmaray ve şehir içi raylı sistem entegrasyonu.</li>
            <li><strong>Çerkezköy İstasyonu:</strong> Sanayi çalışanları ve bölge halkı için ana aktarma noktası.</li>
            <li><strong>Büyükkarıştıran İstasyonu:</strong> Kırklareli güney aksı ve lojistik köy bağlantısı.</li>
            <li><strong>Lüleburgaz Garı:</strong> Modern terminal binası ile yolcu ve kargo transferi.</li>
            <li><strong>Babaeski İstasyonu:</strong> Tarım ve yerel ticaret merkezi.</li>
            <li><strong>Edirne Merkez & Kapıkule Garı:</strong> Avrupa sınır kapısı ve tarihi kent merkezi.</li>
          </ol>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Bilet Fiyatları, Sefer Saatleri & Konfor",
        pageImage: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 2: Bilet Fiyatları Ne Kadar Olacak ve Seferler Ne Zaman Başlıyor?</strong></p>
          <p>TCDD Taşımacılık tarafından hazırlanan tarife taslağına göre bilet fiyatları karayolu otobüs biletleriyle rekabetçi olacak şekilde belirleniyor.</p>

          <div class="in-article-ad" style="border-color: var(--news-green);">
            <span class="ad-label" style="color: var(--news-green);">REKLAM (SAYFA 3 - DÖNÜŞÜM ALANI)</span>
            <div class="ad-content-box">
              <i class="fa-solid fa-rectangle-ad"></i> Google AdSense Sayfa 3 Reklamı (300x250 / Responsive)
            </div>
          </div>

          <h3>Tahmini Fiyat Tarifesi ve İndirimler:</h3>
          <ul>
            <li><strong>Tam Bilet:</strong> Otobüs bilet fiyatlarının %10-15 altında olması hedefleniyor.</li>
            <li><strong>Öğrenci ve Genç Kart:</strong> %20 indirim uygulanacak.</li>
            <li><strong>Abonman Sistemi:</strong> Günlük gidiş-geliş yapan çalışanlar için aylık indirimli paso verilecek.</li>
            <li><strong>65 Yaş Üstü:</strong> Belirli sefer saatlerinde %50 indirim sağlanacak.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 2,
    headlineNumber: 2,
    title: "Trakya Çiftçisinin Yüzü Gülüyor: Ayçiçeğinde Rekor Verim ve Alım Fiyatları",
    spot: "Sarı gelin tarlalarında hasat mesaisi başladı. Birlik temsilcileri bu yıl rekoltenin yüksek olduğunu ve prim desteğinin artırıldığını açıkladı.",
    category: "TARIM & EKONOMİ",
    categorySlug: "ekonomi",
    badgeColor: "amber",
    date: "26 Ağustos 2026 - 22:15",
    readTime: "4 dk",
    views: 98500,
    likes: 3640,
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
          <p class="lead">Türkiye'nin bitkisel sıvı yağ ihtiyacının yaklaşık %60'ını tek başına karşılayan Trakya topraklarında, <strong>ayçiçeği hasat sezonu</strong> coşkuyla başladı. Edirne, Tekirdağ ve Kırklareli ovalarında biçerdöverler gece gündüz mesai yapıyor.</p>
          
          <div class="in-article-ad">
            <span class="ad-label">REKLAM (SAYFA 1)</span>
            <div class="ad-content-box">Google AdSense Sayfa İçi Reklam Alanı (336x280)</div>
          </div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Çiftçilerin Merak Ettikleri:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)">
              <span class="qa-link-text">❓ Ton başına alım fiyatı ve mazot/gübre destekleri ne kadar oldu?</span>
              <span class="qa-link-badge">Fotoğraf ve Fiyatları Gör (Sayfa 2) ➡️</span>
            </div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Fiyatlar & Prim Destekleri",
        pageImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Ton Başına Alım Fiyatları ve Destekler Netleşti</strong></p>
          <div class="in-article-ad" style="border-color: var(--news-blue);">
            <span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2)</span>
            <div class="ad-content-box">Google AdSense Sayfa 2 Reklamı (300x250)</div>
          </div>
          <p>Trakya Birlik Yönetim Kurulu tarafından yapılan açıklamada, %44 baz yağ oranlı ayçiçeği için primli alım fiyatı üreticiyi memnun etti. Lisanslı depolara teslim yapanlara nakliye ve stopaj muafiyeti sağlanıyor.</p>
        `
      }
    ]
  },
  {
    id: 3,
    headlineNumber: 3,
    title: "Milyonlarca Çalışanı İlgilendiren Yeni Düzenleme: Detaylar Belli Oldu!",
    spot: "Çalışma ve Sosyal Güvenlik Bakanlığı tarafından hazırlanan yeni esnek çalışma, kıdem tazminatı ve prim düzenlemesinde tüm maddeler netleşti.",
    category: "GÜNDEM",
    categorySlug: "gundem",
    badgeColor: "blue",
    date: "26 Ağustos 2026 - 21:50",
    readTime: "4 dk",
    views: 89400,
    likes: 3100,
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
          <div class="interactive-qa-box">
            <div class="qa-link-card" onclick="goToArticlePage(2)">
              <span class="qa-link-text">❓ Uzaktan çalışma masraflarını işveren mi ödeyecek? Kimleri kapsıyor?</span>
              <span class="qa-link-badge">Maddeleri Gör (Sayfa 2) ➡️</span>
            </div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Maddeler ve Haklar",
        pageImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Uzaktan ve Hibrit Çalışanların Yasal Hakları:</strong></p>
          <div class="in-article-ad" style="border-color: var(--news-blue);"><span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
          <p>İnternet, elektrik ve ekipman giderlerinin işveren tarafından karşılanması yasa tasarısında güvenceye alınıyor.</p>
        `
      }
    ]
  },
  {
    id: 4,
    headlineNumber: 4,
    title: "Çerkezköy ve Çorlu Sanayisine 10 Milyar Liralık Dev Yeşil Enerji Yatırımı",
    spot: "Trakya'nın sanayi devleri çatı GES ve rüzgar enerjisi santralleri ile karbon ayak izini sıfırlamaya hazırlanıyor.",
    category: "EKONOMİ",
    categorySlug: "ekonomi",
    badgeColor: "emerald",
    date: "26 Ağustos 2026 - 21:30",
    readTime: "4 dk",
    views: 61200,
    likes: 2150,
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
    headlineNumber: 5,
    title: "Tarihi Kırkpınar Yağlı Güreşleri'nde Yeni Format: Başpehlivanlıkta Puanlama Sistemi",
    spot: "Geleneksel Kırkpınar Güreşleri'nde seyir zevkini artırmak ve rekabeti zirveye taşımak için lig usulü puanlama dönemi başladı.",
    category: "SPOR",
    categorySlug: "spor",
    badgeColor: "red",
    date: "26 Ağustos 2026 - 20:45",
    readTime: "3 dk",
    views: 74200,
    likes: 2890,
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
          <p class="lead">Edirne Sarayiçi Er Meydanı'nda 6 asırdır devam eden efsanevi organizasyonda yeni kurallar açıklandı. Türkiye Geleneksel Güreşler Federasyonu, başpehlivanlık mücadelelerinde puanlama sistemini lig usulü turnuvalara entegre etti.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Güreşseverlerin Merak Ettikleri:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)">
              <span class="qa-link-text">❓ Altın kemer ve başpehlivanlık ödülü ne kadar olacak? Takvim belli mi?</span>
              <span class="qa-link-badge">Er Meydanı Fotoğrafı & Detaylar (Sayfa 2) ➡️</span>
            </div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Altın Kemer & Ödül Tablosu",
        pageImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Altın Kemer ve Yeni Sezon Takvimi Belli Oldu</strong></p>
          <div class="in-article-ad" style="border-color: var(--news-blue);"><span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
          <p>Tarihi Kırkpınar Güreşleri'nde bu yıl ilk 8'e giren başpehlivanlara rekor para ödülü dağıtılacak. Sarayiçi Er Meydanı modern tribün ve aydınlatma yatırımlarıyla gece güreşlerine de hazır hale getirildi.</p>
        `
      }
    ]
  },
  {
    id: 6,
    headlineNumber: 6,
    title: "Konut Sektöründe Yeni Dönem: İlk Evini Alacaklara 0.99 Kredi Kampanyası",
    spot: "Kamu bankaları öncülüğünde başlatılan düşük faizli konut kredisi paketi için başvuru şartları açıklandı.",
    category: "EKONOMİ",
    categorySlug: "ekonomi",
    badgeColor: "blue",
    date: "26 Ağustos 2026 - 20:30",
    readTime: "4 dk",
    views: 112400,
    likes: 4150,
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
    headlineNumber: 7,
    title: "Tekirdağ Bağ Bozumu ve Gastronomi Festivali Ziyaretçi Akınına Uğradı",
    spot: "Marmara kıyılarında düzenlenen festivalde yöresel lezzetler ve konserlerle 100 bini aşkın turist ağırlandı.",
    category: "YAŞAM & KÜLTÜR",
    categorySlug: "yasam",
    badgeColor: "pink",
    date: "26 Ağustos 2026 - 19:50",
    readTime: "3 dk",
    views: 52300,
    likes: 1980,
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
    headlineNumber: 8,
    title: "Sağlıkta Çığır Açan Gelişme: Kanser Tedavisinde Kişiselleştirilmiş Aşı Başarısı",
    spot: "Türk bilim insanlarının geliştirdiği mRNA tabanlı tedavi klinik deneylerde %88 başarı elde etti.",
    category: "SAĞLIK",
    categorySlug: "saglik",
    badgeColor: "pink",
    date: "26 Ağustos 2026 - 19:00",
    readTime: "5 dk",
    views: 67100,
    likes: 2980,
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
    headlineNumber: 9,
    title: "Yerli Elektrikli Araçlarda Batarya Fabrikası İkinci Etabı Açıldı",
    spot: "Yılda 100 bin batarya paketi üretim kapasitesine sahip tesis, Avrupa'ya da ihracat yapacak.",
    category: "TEKNOLOJİ",
    categorySlug: "teknoloji",
    badgeColor: "purple",
    date: "26 Ağustos 2026 - 18:30",
    readTime: "4 dk",
    views: 58900,
    likes: 2100,
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
    headlineNumber: 10,
    title: "Kırklareli İğneada Longoz Ormanları'nda Ekoturizm Sezonu Açıldı",
    spot: "Dünyanın nadir subasar ormanlarından olan İğneada'da yürüyüş parkurları doğaseverleri bekliyor.",
    category: "YAŞAM",
    categorySlug: "yasam",
    badgeColor: "amber",
    date: "26 Ağustos 2026 - 17:15",
    readTime: "3 dk",
    views: 43200,
    likes: 1670,
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
  }
];

// 5. Köşe Yazarları (Gündem Trakya)
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
  { rank: 2, title: "Trakya'da ayçiçeği alım fiyatı açıklandı: İşte ton başına rakam", views: "128 Bin", category: "Tarım" },
  { rank: 3, title: "Edirne, Tekirdağ ve Kırklareli için sarı kodlu hava uyarısı", views: "98 Bin", category: "Hava Durumu" },
  { rank: 4, title: "Konut kredisinde 0.99 faiz müjdesi: Kimler başvurabilir?", views: "85 Bin", category: "Ekonomi" },
  { rank: 5, title: "Çerkezköy OSB'de dev fabrikada toplu işe alım başladı", views: "71 Bin", category: "İstihdam" }
];

// 7. Kategoriler
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
