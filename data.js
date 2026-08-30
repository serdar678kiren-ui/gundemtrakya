/**
 * GÜNDEM TRAKYA - Zengin Çerkezköy, Çorlu, Trakya Haberleri, Köşe Yazarları & Sosyal Medya Veri Seti
 */

// 1. Canlı Piyasa & Finans Verileri (Milliyet Uzmanpara Birebir Verileri)
const financeData = [
  { code: "GAU/TRY", name: "Gram Altın", baseVal: 7127.15, unit: "₺", value: "7.127,15 ₺", change: "+0.31%", up: true },
  { code: "CEYREK", name: "Çeyrek Altın", baseVal: 11652.99, unit: "₺", value: "11.652,99 ₺", change: "+0.31%", up: true },
  { code: "YARIM", name: "Yarım Altın", baseVal: 23305.99, unit: "₺", value: "23.305,99 ₺", change: "+0.31%", up: true },
  { code: "CUMHURIYET", name: "Cumhuriyet", baseVal: 47372.00, unit: "₺", value: "47.372 ₺", change: "+0.31%", up: true },
  { code: "BILEZIK22", name: "22 Ayar Bilezik", baseVal: 6420.82, unit: "₺", value: "6.420,82 ₺", change: "+0.28%", up: true },
  { code: "ONS", name: "Ons Altın", baseVal: 4604.00, unit: "$", value: "4.604 $", change: "+0.22%", up: true },
  { code: "USD/TRY", name: "Dolar", baseVal: 48.14, unit: "₺", value: "48,14 ₺", change: "+0.08%", up: true },
  { code: "EUR/TRY", name: "Euro", baseVal: 56.22, unit: "₺", value: "56,22 ₺", change: "+0.21%", up: true },
  { code: "BIST 100", name: "BIST 100", baseVal: 14576.00, unit: "", value: "14.576", change: "-0.24%", up: false },
  { code: "PETROL", name: "Brent Petrol", baseVal: 88.56, unit: "$", value: "88,56 $", change: "+1.86%", up: true },
  { code: "BONO", name: "Bono / Faiz", baseVal: 40.14, unit: "%", value: "%40,14", change: "+0.58%", up: true },
  { code: "BTC/USD", name: "Bitcoin", baseVal: 3844224.00, unit: "₺", value: "3.844.224 ₺", change: "+2.02%", up: true },
  { code: "BUGDAY", name: "Trakya Buğday", baseVal: 12450.00, unit: "₺/Ton", value: "12.450 ₺", change: "+1.10%", up: true },
  { code: "AYCICEK", name: "Trakya Ayçiçeği", baseVal: 24850.00, unit: "₺/Ton", value: "24.850 ₺", change: "+1.35%", up: true }
];

// 2. Son Dakika (Breaking News) Başlıkları
const breakingNewsData = [
  { 
    id: 125, 
    articleId: 37, 
    title: "Tekirdağ Çorlu'da narkotik operasyonu: 4 adrese eş zamanlı baskın, 2 şüpheli tutuklandı!", 
    time: "19:15" 
  },
  { 
    id: 124, 
    articleId: 36, 
    title: "Tekirdağ'da balıkçılar 1 Eylül için hazır: 4,5 aylık av yasağı bitiyor, Marmara'da 'Vira Bismillah' heyecanı!", 
    time: "15:30" 
  },
  { 
    id: 123, 
    articleId: 35, 
    title: "Gündem Trakya resmi Instagram hesabı @gundemtrakya59 yayında: Anlık Trakya haberleri, Reels bültenleri ve özel içerikler için bizi takip edin!", 
    time: "00:45" 
  },
  { 
    id: 122, 
    articleId: 34, 
    title: "Trakya siyasetinde tarihi deprem: Tekirdağ Büyükşehir Belediye Başkanı Candan Yüceer ve 4 ilçe başkanı CHP'den istifa edip Yeni Parti'ye geçti!", 
    time: "00:30" 
  },
  { 
    id: 121, 
    articleId: 33, 
    title: "Çerkezköy'de sıcak saatler: Alacağını tahsil edemediğini öne süren işçi elektrik direğine çıktı, 2 saatte ikna edildi!", 
    time: "01:12" 
  },
  { 
    id: 120, 
    articleId: 32, 
    title: "Çerkezköy'de feci olay: 15 yaşındaki stajyer Eren Gündoğdu inşaatta elektrik akımına kapılarak hayatını kaybetti!", 
    time: "01:05" 
  },
  { 
    id: 119, 
    articleId: 31, 
    title: "Tekirdağ'da dev huzur ve asayiş operasyonu: Çorlu ve Çerkezköy'de çok sayıda tutuklama!", 
    time: "22:45" 
  },
  { 
    id: 118, 
    articleId: 30, 
    title: "ÇOSB itfaiye filosuna 32 metrelik mafsallı merdivenli dev itfaiye aracı kazandırıldı!", 
    time: "22:35" 
  },
  { 
    id: 117, 
    articleId: 29, 
    title: "Çerkezköy 1911 Spor ile MBA Okulları arasında kadın futboluna güçlü destek protokolü!", 
    time: "22:00" 
  },
  { 
    id: 116, 
    articleId: 28, 
    title: "Beyaz peynirde Listeria tehlikesi: İrmet Hospital uzmanı uyardı, buzdolabında bile çoğalabiliyor!", 
    time: "21:55" 
  },
  { 
    id: 115, 
    articleId: 27, 
    title: "Çerkezköy Belediye Başkan Yardımcısı Yunus Erçin başarılı ameliyat sonrası sağlığına kavuştu!", 
    time: "21:50" 
  },
  { 
    id: 114, 
    articleId: 26, 
    title: "ÇOSB Kapaklı Devlet Hastanesi bölgenin sağlık yükünü omuzluyor: 115 yatak, 38 poliklinik ve 5 ameliyathane!", 
    time: "21:45" 
  }
];

// 3. Trakya Nöbetçi Eczaneler & Resmi Eczacı Odaları Canlı Veri Seti
const pharmacyData = {
  tekirdag: {
    cityName: "Tekirdağ (Tüm İlçeler)",
    chamberName: "Tekirdağ Eczacı Odası",
    chamberUrl: "https://www.teo.org.tr/",
    districts: ["Tümü", "Çerkezköy", "Kapaklı", "Çorlu", "Süleymanpaşa", "Ergene", "Marmaraereğlisi", "Saray"],
    list: [
      {
        name: "Merkez Eczanesi",
        district: "Çerkezköy",
        address: "Gazi Mustafa Kemal Paşa Mah. Atatürk Cad. No:65 (Belediye Yanı)",
        phone: "0282 726 88 99",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Çerkezköy+Merkez+Eczanesi"
      },
      {
        name: "Kapaklı Eczanesi",
        district: "Kapaklı",
        address: "İsmet Paşa Mah. Erbay Cad. No:12 (Devlet Hastanesi Yakını)",
        phone: "0282 717 40 50",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Kapaklı+Eczanesi"
      },
      {
        name: "Şifa Eczanesi",
        district: "Çorlu",
        address: "Reşadiye Mah. Mandıracı Cad. No:42/A (Eski Devlet Hastanesi Karşısı)",
        phone: "0282 651 22 33",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Çorlu+Şifa+Eczanesi"
      },
      {
        name: "Hayat Eczanesi",
        district: "Süleymanpaşa",
        address: "Hürriyet Mah. Tepe Değirmen Cad. No:18/B (Şehir Hastanesi Yolu)",
        phone: "0282 262 44 55",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Süleymanpaşa+Hayat+Eczanesi"
      },
      {
        name: "Ergene Eczanesi",
        district: "Ergene",
        address: "Sağlık Mah. Edirne Cad. No:84/A",
        phone: "0282 673 15 20",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Ergene+Eczanesi"
      },
      {
        name: "Sahil Eczanesi",
        district: "Marmaraereğlisi",
        address: "Cedit Ali Paşa Mah. Rahmi Özcan Bulvarı No:14",
        phone: "0282 613 25 30",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Marmaraereğlisi+Sahil+Eczanesi"
      }
    ]
  },
  edirne: {
    cityName: "Edirne",
    chamberName: "Edirne Eczacı Odası",
    chamberUrl: "https://www.edirneeczaciodasi.org.tr/",
    districts: ["Tümü", "Merkez", "Keşan", "Uzunköprü", "Havsa", "İpsala"],
    list: [
      {
        name: "Selimiye Eczanesi",
        district: "Merkez",
        address: "Saraçlar Cad. Belediye Karşısı No:14 (Tarihi Çarşı İçi)",
        phone: "0284 212 10 20",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Edirne+Selimiye+Eczanesi"
      },
      {
        name: "Trakya Eczanesi",
        district: "Keşan",
        address: "İnönü Cad. Devlet Hastanesi Yanı No:8",
        phone: "0284 714 30 40",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Keşan+Trakya+Eczanesi"
      },
      {
        name: "Köprü Eczanesi",
        district: "Uzunköprü",
        address: "Gazi Caddesi No:52",
        phone: "0284 513 18 90",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Uzunköprü+Köprü+Eczanesi"
      }
    ]
  },
  kirklareli: {
    cityName: "Kırklareli",
    chamberName: "Kırklareli Eczacı Odası",
    chamberUrl: "https://www.kirklarelieczaciodasi.org.tr/",
    districts: ["Tümü", "Merkez", "Lüleburgaz", "Babaeski", "Vize", "Pınarhisar"],
    list: [
      {
        name: "Istranca Eczanesi",
        district: "Merkez",
        address: "Karakaş Mah. Fevzi Çakmak Cad. No:22 (Valilik Arkası)",
        phone: "0288 214 55 66",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Kırklareli+Istranca+Eczanesi"
      },
      {
        name: "Güneş Eczanesi",
        district: "Lüleburgaz",
        address: "İstanbul Cad. Kongre Meydanı Yanı No:35",
        phone: "0288 417 77 88",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Lüleburgaz+Güneş+Eczanesi"
      },
      {
        name: "Balkan Eczanesi",
        district: "Babaeski",
        address: "Atatürk Meydanı Belediye İşhanı No:7",
        phone: "0288 512 30 10",
        time: "24 Saat Kesintisiz Açık",
        mapUrl: "https://maps.google.com/?q=Babaeski+Balkan+Eczanesi"
      }
    ]
  }
};

// 4. Tüm Kategoriler & Köşe Yazarlarını Kapsayan Zengin Haber Listesi
const headlineArticles = [
  {
    id: 35,
    headlineNumber: 1,
    title: "Trakya'nın En Güçlü Dijital Haber Ağı: @gundemtrakya59 Instagram'da Yayında!",
    spot: "Tekirdağ, Edirne ve Kırklareli'nin tüm sıcak gelişmeleri, canlı video bültenleri, son dakika flaş haberleri ve özel röportajlar anında cebinizde! Resmi Instagram hesabımızı takip edin, Trakya'dan habersiz kalmayın.",
    category: "TOPLULUK & DUYURU",
    categorySlug: "gundem",
    location: "Trakya / Bölge Geneli",
    badgeColor: "red",
    date: "30 Ağustos 2026 - 00:45",
    readTime: "2 dk",
    views: 215400,
    likes: 18900,
    reactions: { like: 8200, heart: 6400, clap: 3500, thinking: 400, angry: 50 },
    socialPosts: [
      {
        user: "Gündem Trakya Dijital Medya",
        handle: "@gundemtrakya59",
        avatar: "img/gundem-trakya-avatar-red.jpg",
        platform: "instagram",
        text: "Trakya'nın en dinamik haber topluluğuna sen de katıl! En sıcak gelişmeler, 60 saniyelik Reels bültenleri ve özel çekimlerle her an yanınızdayız. Takip etmeyi ve bildirimleri açmayı unutmayın! 📲🇹🇷 #gundemtrakya",
        time: "5 dk önce",
        likes: 5420,
        shares: 1280
      },
      {
        user: "Trakya Gençlik & Haber Kulübü",
        handle: "@TrakyaGenc",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Trakya'da haberleri en hızlı ve en kaliteli şekilde takip ettiğimiz sayfa @gundemtrakya59. Hem web sitesi hem Instagram sayfası muazzam çalışıyor. Kesinlikle takip edin! 👏🔥",
        time: "15 dk önce",
        likes: 3180,
        shares: 640
      }
    ],
    comments: [
      {
        id: 3501,
        author: "Emre Can",
        city: "Tekirdağ / Süleymanpaşa",
        time: "5 dk önce",
        content: "Instagram hesabınızı uzun süredir takip ediyorum, özellikle Reels video bültenleri ve anlık trafik/hava durumu hikayeleri harika!",
        likes: 215
      },
      {
        id: 3502,
        author: "Ayşe Yılmaz",
        city: "Çorlu / Orion Çevresi",
        time: "12 dk önce",
        content: "Trakya'da yerel haberciliğe seviye atlattınız. İhbar hattından da anında dönüş yapıyorsunuz, tebrikler!",
        likes: 184
      },
      {
        id: 3503,
        author: "Kaan Demirtaş",
        city: "Edirne / Merkez",
        time: "20 dk önce",
        content: "Sınır kapıları ve yerel asayiş haberlerini ilk sizden duyuyoruz. Takipteyiz!",
        likes: 142
      }
    ],
    author: {
      name: "Gündem Trakya Sosyal Medya Masası",
      title: "Dijital Yayın Yönetmeni",
      avatar: "img/gundem-trakya-avatar-red.jpg"
    },
    image: "img/gundem-trakya-instagram-reklam.jpg",
    tags: ["Instagram", "@gundemtrakya59", "Gündem Trakya", "Sosyal Medya", "Trakya Haber", "Reels", "Canlı Yayın", "Tekirdağ", "Edirne", "Kırklareli"],
    content: `
      <p class="lead"><strong>Trakya’nın bağımsız ve ilkeli haber portalı Gündem Trakya, sosyal medyada da bölgenin en aktif ve en hızlı dijital topluluğu olmayı sürdürüyor!</strong></p>
      <p>Tekirdağ, Edirne, Kırklareli, Çorlu, Çerkezköy ve tüm Trakya coğrafyasındaki en sıcak gelişmeler, asayiş olayları, ekonomi, tarım, kültür-sanat ve hava durumu raporları anbean resmi Instagram hesabımız <strong>@gundemtrakya59</strong> üzerinden takipçilerimizle buluşuyor.</p>
      
      <div class="instagram-cta-container">
        <div class="instagram-cta-title">
          <i class="fa-brands fa-instagram"></i>
          <span>@gundemtrakya59 Resmi Instagram Kanalı</span>
        </div>
        <p class="instagram-cta-desc">Haberin en hızlı ve en güvenilir adresiyle tanışın. 60 saniyelik video bültenler, anlık son dakika hikayeleri ve canlı yayınlar için hemen takip edin!</p>
        <a href="https://www.instagram.com/gundemtrakya59/" target="_blank" class="instagram-follow-btn">
          <i class="fa-brands fa-instagram"></i>
          <span>Hemen Takip Et 👉 @gundemtrakya59</span>
        </a>
      </div>

      <p>Trakya sokaklarındaki gelişmeleri ilk öğrenen siz olun. Siz de bölgenizdeki önemli olayları, yol durumlarını ve asayiş gelişmelerini bize DM yoluyla ulaştırabilir, sesinizi tüm Trakya'ya duyurabilirsiniz.</p>
    `,
    pages: [
      {
        pageNum: 1,
        pageTitle: "Neden @gundemtrakya59? Trakya'nın Nabzı Anlık Hikayelerle Cebinizde!",
        pageImage: "img/gundem-trakya-instagram-reklam.jpg",
        content: `
          <p class="lead"><strong>Gündem Trakya, modern habercilik vizyonuyla sosyal medyanın gücünü Trakya halkıyla buluşturuyor.</strong></p>
          <p>Her gün yüz binlerce okuyucunun ziyaret ettiği portalımızın resmi Instagram hesabı <strong>@gundemtrakya59</strong>, Trakya'da yerel haberciliğin yeni nesil yüzü haline geldi. Sadece haber metinleri değil; olay yeri görüntüleri, canlı yayınlar, röportajlar ve özel dosya haberleri anlık hikayelerle takipçilerimize sunuluyor.</p>
          
          <div class="instagram-features-grid">
            <div class="instagram-feat-item"><i class="fa-solid fa-bolt"></i> Anlık Son Dakika Bildirimleri</div>
            <div class="instagram-feat-item"><i class="fa-solid fa-video"></i> 60 Saniyede Özet Reels Bülteni</div>
            <div class="instagram-feat-item"><i class="fa-solid fa-car"></i> Sınır Kapıları & Canlı Trafik</div>
            <div class="instagram-feat-item"><i class="fa-solid fa-cloud-sun"></i> Trakya Canlı Hava Durumu</div>
          </div>

          <div class="instagram-cta-container">
            <a href="https://www.instagram.com/gundemtrakya59/" target="_blank" class="instagram-follow-btn">
              <i class="fa-brands fa-instagram"></i>
              <span>@gundemtrakya59 Profiline Git & Takip Et</span>
            </a>
          </div>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Reels Bültenleri & Bölgesel DM İhbar Hattı: 'Sizden Gelenler'",
        pageImage: "img/gundem-trakya-instagram-reklam.jpg",
        content: `
          <p class="lead"><strong>Zamanınız Değerli: 60 Saniyede Tüm Trakya Gündemine Hakim Olun!</strong></p>
          <p>Günün yoğun temposunda haberleri takip etmekte zorlanan vatandaşlarımız için özel olarak kurgulanan <strong>Dikey Reels Bültenlerimiz</strong> sayesinde, günün en kritik 5 haberini spiker anlatımı ve dinamik kurgularla sadece 1 dakikada izleyebilirsiniz.</p>
          
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Trakya'nın dört bir yanından gelen vatandaş ihbarları ve görüntüler, editörlerimizin teyidinin ardından anında milyonluk kitlelere ulaştırılıyor."</p>
            <span>- Gündem Trakya Sosyal Medya Ekibi</span>
          </div>

          <p><strong>Siz De Haber Gönderin:</strong> Çevrenizde tanık olduğunuz kaza, yangın, altyapı sorunu, etkinlik veya başarı hikayelerini Instagram DM üzerinden bize ulaştırın, haberleştirelim!</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Büyük Trakya Ailesine Katılın: Tek Tıkla Takip Edin ve Bildirimleri Açın!",
        pageImage: "img/gundem-trakya-instagram-reklam.jpg",
        content: `
          <p class="lead"><strong>Tekirdağ'dan Edirne'ye, Kırklareli'den Çorlu ve Çerkezköy'e On Binler Burada!</strong></p>
          <p>Trakya'nın en etkileşimli sosyal medya topluluğunda siz de yerinizi alın. Yorumlarınızla tartışmalara katılın, bölgenizin sesini yükseltin ve hiçbir gelişmeyi kaçırmayın.</p>
          
          <div class="instagram-cta-container">
            <div class="instagram-cta-title">
              <i class="fa-solid fa-bell"></i>
              <span>Bildirimleri Açmayı Unutmayın!</span>
            </div>
            <p class="instagram-cta-desc">Instagram profilimizdeki zil simgesine tıklayarak 'Gönderiler' ve 'Hikayeler' bildirimlerini açın, son dakika haberleri anında cebinize gelsin.</p>
            <a href="https://www.instagram.com/gundemtrakya59/" target="_blank" class="instagram-follow-btn">
              <i class="fa-brands fa-instagram"></i>
              <span>👉 @gundemtrakya59 Hesabını Takip Et</span>
            </a>
          </div>

          <p>Trakya'nın bağımsız ve güçlü sesi sizlerle büyüyor. Desteğiniz için teşekkür ederiz!</p>
        `
      }
    ]
  },
  {
    id: 36,
    headlineNumber: 2,
    title: "Tekirdağlı Balıkçılar Marmara'ya Açılmaya Hazır: 1 Eylül'de 'Vira Bismillah' Coşkusu!",
    spot: "Türkiye genelinde denizlerde gırgır ve trol ağlarıyla avcılık yapan balıkçılar için 4,5 aydır süren genel av yasağı 1 Eylül'de sona eriyor. Tekirdağ Süleymanpaşa ve Kumbağ limanlarında ağlarını onarıp teknelerinin bakımını tamamlayan balıkçılar, Marmara ve Karadeniz'de 'Vira Bismillah' demek için gün sayıyor.",
    category: "DENİZCİLİK & GÜNDEM",
    categorySlug: "trakya",
    location: "Tekirdağ / Marmara Denizi",
    badgeColor: "blue",
    date: "30 Ağustos 2026 - 15:30",
    readTime: "3 dk",
    views: 184500,
    likes: 14200,
    reactions: { like: 8200, heart: 5100, clap: 3400, thinking: 320, angry: 25 },
    socialPosts: [
      {
        user: "Tekirdağ Balıkçılar Kooperatifi",
        handle: "@TekirdagBalikcilar",
        avatar: "img/gundem-trakya-avatar-red.jpg",
        platform: "twitter",
        text: "Tüm hazırlıklarımızı tamamladık! Ağlarımız onarıldı, motorlarımız bakımdan geçti. 1 Eylül gecesi Süleymanpaşa ve Kumbağ'dan Marmara'ya 'Vira Bismillah' diyeceğiz. Denizlerimiz bereketli, kazancımız helal olsun. ⚓🐟 #Tekirdağ #ViraBismillah",
        time: "15 dk önce",
        likes: 4210,
        shares: 940
      },
      {
        user: "Marmara Denizcilik & Balık Haberleri",
        handle: "@MarmaraDenizHaber",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "15 Nisan'da başlayan genel av yasağının sonuna geldik. Tekirdağ ve Trakya sahillerinde büyük bir heyecan var. Özellikle palamut ve hamside bereketli bir sezon sinyali alıyoruz. Tezgahlara bol ve taze balık gelecek!",
        time: "35 dk önce",
        likes: 2850,
        shares: 610
      }
    ],
    comments: [
      {
        id: 3601,
        author: "Kaptan Selim",
        city: "Tekirdağ / Kumbağ",
        time: "10 dk önce",
        content: "Aylardır bu anı bekliyorduk. Tayfamızla birlikte gece gündüz ağ diktik, teknemizi boyadık. İnşallah bu sezon deniz ana bize cömert davranır, halkımız da uygun fiyata taze balık yer.",
        likes: 195
      },
      {
        id: 3602,
        author: "Mustafa Çelik",
        city: "Süleymanpaşa / Sahil",
        time: "25 dk önce",
        content: "1 Eylül akşamı limandaki vira bismillah törenini dört gözle bekliyoruz. Tekirdağ'ın simgesi balıkçılık kültürümüzdür. Bütün reislerimize kazasız belasız, hayırlı ve bereketli bir sezon diliyorum.",
        likes: 148
      },
      {
        id: 3603,
        author: "Sevgi Eren",
        city: "Çorlu / Merkez",
        time: "40 dk önce",
        content: "Palamut ve hamsiyi çok özledik. Umarım bereketli geçer de tezgahlardaki fiyatlar herkesin bütçesine uygun olur.",
        likes: 112
      }
    ],
    author: {
      name: "Gündem Trakya Haber Masası",
      title: "Tekirdağ & Denizcilik Muhabiri",
      avatar: "img/gundem-trakya-avatar-red.jpg"
    },
    image: "img/tekirdagli-balikcilar-vira-bismillah.jpg",
    tags: ["Tekirdağ Balıkçılık", "Vira Bismillah", "1 Eylül Av Yasağı", "Marmara Denizi", "Palamut Hamsi", "Tekirdağ Limanı", "Kumbağ", "Balık Sezonu", "Trakya Haber"],
    content: `
      <p class="lead"><strong>Türkiye'de denizlerde gırgır ve trol ağlarıyla avcılık yapan balıkçılar için genel av yasağının 1 Eylül'de sona erecek olması dolayısıyla Tekirdağ'da balıkçılar, yeni sezon hazırlıklarını eksiksiz tamamladı.</strong></p>
      <p>15 Nisan'da başlayan ve yaklaşık 4,5 aydır devam eden av yasağı dönemini teknelerinin bakımını yaparak ve yüzlerce metrelik dev ağlarını onararak geçiren Tekirdağlı balıkçılar, yeni av sezonunda Marmara Denizi ve Karadeniz'e açılmak için gün sayıyor. Limanlarda motor, güverte, radar ve av araçlarının son kontrolleri yapılırken, balıkçılar 1 Eylül gecesi hep bir ağızdan “vira bismillah” diyerek ağlarını mavi sulara bırakacak.</p>
      
      <div class="article-quote">
        <i class="fa-solid fa-quote-left"></i>
        <p>"Aylardır süren sabırlı bekleyişin ve emeğin ardından yeniden denizle buluşuyoruz. Ortak temennimiz kazasız, belasız ve bereket dolu bir sezon geçirmek, vatandaşlarımıza bol ve taze balık ulaştırmaktır."</p>
        <span>- Tekirdağ Balıkçı Reisleri & Tayfaları</span>
      </div>

      <p>Yeni sezonla birlikte tezgahlarda başta palamut, hamsi, istavrit, lüfer ve kolyoz olmak üzere balık çeşitliliğinin artması ve taze balık fiyatlarının vatandaşın erişebileceği makul seviyelere inmesi bekleniyor.</p>
    `,
    pages: [
      {
        pageNum: 1,
        pageTitle: "4,5 Aylık Av Yasağı Sona Eriyor: Tekirdağ Limanlarında Son Hazırlıklar Tamamlandı",
        pageImage: "img/tekirdagli-balikcilar-vira-bismillah.jpg",
        content: `
          <p class="lead"><strong>Tekirdağ Süleymanpaşa ve Kumbağ Limanlarında 'Vira Bismillah' Heyecanı Zirve Yaptı</strong></p>
          <p>Karadeniz, Marmara ve Ege denizlerinde gırgır ve trol yöntemiyle avcılık yapan balıkçılar için 15 Nisan tarihinde başlayan genel av yasağı, <strong>1 Eylül Salı</strong> günü itibarıyla resmen sona eriyor. Tekirdağ genelinde denizcilik ve balıkçılıkla geçimini sağlayan yüzlerce tayfa ve tekne sahibi, aylar süren hazırlık maratonunu tamamladı.</p>
          
          <p>Limanlarda hummalı bir çalışma yürüten ekipler; teknelerin motor revizyonlarından boya ve raspa işlemlerine, sonar ve radar sistemlerinden yırtılan ağların ilmek ilmek onarılmasına kadar tüm aşamaları titizlikle gözden geçirdi. Teknelerine tonlarca ağırlığındaki av araçlarını ve yeni ağlarını yükleyen balıkçılar, 1 Eylül sabahının ilk ışıklarıyla birlikte Marmara'nın serin sularına doğru rota çizecek.</p>

          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Yeni Balıkçılık Sezonu ve Beklentiler:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">🐟 Palamut ve Hamside Bereket Beklentisi: Tezgahlara ve Fiyatlara Nasıl Yansıyacak?</span><span class="qa-link-badge">Balık Türleri & Fiyatlar (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">⚓ Bölge Ekonomisine ve İstihdama Can Suyu: Binlerce Ailenin Geçim Kapısı Açılıyor</span><span class="qa-link-badge">Ekonomik Etki (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Palamut ve Hamside Bereket Beklentisi: Tezgahlara ve Fiyatlara Nasıl Yansıyacak?",
        pageImage: "img/tekirdagli-balikcilar-vira-bismillah.jpg",
        content: `
          <p class="lead"><strong>Marmara ve Karadeniz'den Gelen İlk Sinyaller: Bu Sezon Palamut ve İstavrit Yılı Olabilir!</strong></p>
          <p>Sezon öncesinde denizde yapılan gözlemler ve 12 metrenin altındaki küçük ölçekli geleneksel balıkçıların aktardığı ilk veriler, bu yıl özellikle <strong>palamut, hamsi, istavrit ve kolyoz</strong> popülasyonunda sevindirici bir hareketlilik olduğunu gösteriyor. Karadeniz'den Marmara Boğazı'na doğru inen balık akışının elverişli hava koşullarıyla birleşmesi durumunda rekor bir av sezonu yaşanabileceği değerlendiriliyor.</p>
          
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Deniz bereketiyle gelir. Av miktarının yüksek olması demek, hem balıkçının yüzünün gülmesi hem de tezgahlarda taze balığın uygun fiyatla halkımızın sofrasına girmesi demektir."</p>
            <span>- Süleymanpaşa Balık Pazarı Esnafı</span>
          </div>

          <p><strong>Besin Değeri ve Sağlık:</strong> Uzmanlar, kaliteli protein ve güçlü Omega-3 yağ asitleri içeren taze mevsim balıklarının haftada en az iki gün tüketilmesinin kalp ve damar sağlığı, bağışıklık sistemi ve beyin fonksiyonları açısından hayati önem taşıdığına dikkat çekiyor.</p>
          
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Bölge Ekonomisine ve İstihdama Can Suyu: Binlerce Ailenin Geçim Kapısı Açılıyor",
        pageImage: "img/tekirdagli-balikcilar-vira-bismillah.jpg",
        content: `
          <p class="lead"><strong>Balıkçılık Yalnızca Teknelerle Sınırlı Değil: Buzhanelerden Nakliyeye Devasa Bir Tedarik Zinciri</strong></p>
          <p>Tekirdağ ve Trakya kıyılarında balıkçılık sektörü, on binlerce vatandaşın doğrudan ve dolaylı olarak geçimini sağladığı dev bir ekonomik ekosistem oluşturuyor. Teknelerde ter döken güverte tayfalarından balık hali komisyoncularına, buz fabrikalarından kasa imalatçılarına, soğuk zincir nakliye filolarından mahalle balıkçılarına kadar tüm çarklar 1 Eylül itibarıyla yeniden dönmeye başlıyor.</p>
          
          <p>Tekirdağlı balıkçıların en büyük ortak temennisi ise sezon boyunca havaların fırtınasız ve müsaade edici seyretmesi, denizlerin temiz kalması ve av sezonunun herhangi bir kaza yaşanmadan tamamlanmasıdır. Tüm Trakya halkı gibi balıkçılar da 1 Eylül gecesi başlayacak büyük av seferine kilitlenmiş durumda.</p>
          
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Rastgele reisler! Pruvanız neta, rüzgarınız kolayına, ağlarınız balıkla dolsun. Vira Bismillah!"</p>
            <span>- Gündem Trakya Ailesi</span>
          </div>
        `
      }
    ]
  },
  {
    id: 37,
    headlineNumber: 3,
    title: "Tekirdağ'da Uyuşturucu Operasyonu: 4 Adrese Eş Zamanlı Baskın, 2 Şüpheli Tutuklandı!",
    spot: "Tekirdağ İl Emniyet Müdürlüğü Narkotik Suçlarla Mücadele Şubesi ekiplerince Çorlu ilçesinde uyuşturucu satıcılarına yönelik düzenlenen planlı operasyonda 4 ayrı adrese eş zamanlı baskın gerçekleştirildi. 281 gram sentetik kannabinoid ele geçirilirken, gözaltına alınan 2 zanlı çıkarıldıkları mahkemece tutuklanarak cezaevine gönderildi.",
    category: "ASAYİŞ & GÜNDEM",
    categorySlug: "gundem",
    location: "Tekirdağ / Çorlu",
    badgeColor: "red",
    date: "30 Ağustos 2026 - 19:15",
    readTime: "3 dk",
    views: 142800,
    likes: 9640,
    reactions: { like: 4320, heart: 1250, clap: 3820, thinking: 210, angry: 40 },
    socialPosts: [
      {
        user: "Gündem Trakya Asayiş Masası",
        handle: "@gundemtrakya_asayis",
        avatar: "img/gundem-trakya-avatar-red.jpg",
        platform: "twitter",
        text: "🚨 Çorlu'da zehir tacirlerine darbe! Narkotik ekiplerinin 4 adrese düzenlediği eş zamanlı baskında 2 şüpheli tutuklandı. Detaylar ve görseller sitemizde! 🚔⚖️ #Tekirdağ #Çorlu #UyuşturucuOperasyonu #Asayiş",
        time: "15 dk önce",
        likes: 1840,
        shares: 420
      },
      {
        user: "Trakya Güvenlik & Bölge Takip",
        handle: "@TrakyaGuvenlik",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Emniyet güçlerimizi tebrik ediyoruz. Çorlu sokaklarında uyuşturucuya geçit yok! Gençlerimizi bu bataklıktan koruyan polislerimizin ayağına taş değmesin. 👏🇹🇷 #GündemTrakya",
        time: "30 dk önce",
        likes: 2150,
        shares: 510
      }
    ],
    comments: [
      {
        id: 3701,
        author: "Murat Çetin",
        city: "Çorlu / Şeyhsinan",
        time: "10 dk önce",
        content: "Polislerimizin ellerine sağlık. Mahalle aralarında bu zehri satanlara asla göz açtırılmamalı.",
        likes: 128
      },
      {
        id: 3702,
        author: "Fatma Yılmaz",
        city: "Tekirdağ / Süleymanpaşa",
        time: "25 dk önce",
        content: "Gençlerimizi zehirleyenlere verilen tutuklama kararı yüreğimize su serpti. Emniyetimize teşekkürler.",
        likes: 95
      }
    ],
    author: {
      name: "Gündem Trakya Asayiş Servisi",
      title: "Asayiş & Güvenlik Editörü",
      avatar: "img/gundem-trakya-avatar-red.jpg"
    },
    image: "images/tekirdag-uyusturucu-operasyonu-tutuklama.jpg",
    tags: ["Tekirdağ", "Çorlu", "Uyuşturucu Operasyonu", "Narkotik", "Tutuklama", "Asayiş", "Emniyet", "Sentetik Kannabinoid", "Son Dakika"],
    content: `
      <p class="lead"><strong>Tekirdağ Emniyet Müdürlüğü Narkotik Suçlarla Mücadele Şube Müdürlüğü ve Çorlu İlçe Emniyet Müdürlüğü ekipleri, uyuşturucu madde ticareti yapan şahıslara yönelik başarılı bir operasyona daha imza attı.</strong></p>
      <p>Alınan istihbari bilgiler doğrultusunda Çorlu ilçesinde tespit edilen 4 farklı adrese sabah saatlerinde eş zamanlı baskın düzenlendi. Özel harekat polislerinin de destek verdiği operasyonda adreslerde detaylı aramalar yapıldı.</p>
      <div class="article-highlight-box">
        <h4><i class="fa-solid fa-shield-halved"></i> Operasyonun Öne Çıkan Ayrıntıları</h4>
        <ul>
          <li><strong>Hedef:</strong> Çorlu genelinde sokak satıcıları ve torbacı ağı</li>
          <li><strong>Baskın Sayısı:</strong> 4 adrese eş zamanlı şafak baskını</li>
          <li><strong>Ele Geçirilen Madde:</strong> 281 gram sentetik kannabinoid (bonzai) ve hassas terazi</li>
          <li><strong>Adli Sonuç:</strong> Gözaltına alınan 2 zanlı tutuklandı</li>
        </ul>
      </div>
      <p>Yapılan aramalarda satışa hazır paketler halinde toplam 281 gram sentetik kannabinoid ile uyuşturucu ticaretinde kullanıldığı değerlendirilen bir miktar nakit para ve dijital materyal ele geçirildi.</p>
      <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı</div></div>
      <p>Operasyon kapsamında gözaltına alınan A.K. ve M.S. isimli iki zanlı, emniyetteki işlemlerinin tamamlanmasının ardından yoğun güvenlik önlemleri altında Çorlu Adliyesi'ne sevk edildi. Savcılık sorgularının ardından mahkemeye çıkarılan zanlılar, "Uyuşturucu veya Uyarıcı Madde Ticareti Yapmak" suçundan tutuklanarak Çorlu Kapalı Cezaevi'ne gönderildi.</p>
    `,
    pages: [
      {
        pageNum: 1,
        pageTitle: "Şafak Vakti 4 Adrese Eş Zamanlı Baskın: Zehir Tacirleri Kıskıvrak!",
        pageImage: "images/tekirdag-uyusturucu-operasyonu-tutuklama.jpg",
        content: `
          <p class="lead"><strong>Tekirdağ Emniyeti, gençleri zehirlemeye çalışan uyuşturucu tacirlerine göz açtırmıyor.</strong></p>
          <p>Çorlu ilçesinde uyuşturucu madde temin edip sokak düzeyinde satışını yaptıkları tespit edilen şahıslara yönelik teknik ve fiziki takip tamamlandı. Sabahın ilk ışıklarıyla birlikte belirlenen 4 ayrı adrese eş zamanlı operasyon düzenlendi.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Haber İçi Reklamı</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "281 Gram Sentetik Kannabinoid ve Satış Ekipmanları Ele Geçirildi",
        pageImage: "images/tekirdag-uyusturucu-operasyonu-tutuklama.jpg",
        content: `
          <p class="lead"><strong>Dedektör köpeklerin de katıldığı aramalarda uyuşturucu maddeler zulalanmış halde bulundu.</strong></p>
          <p>Narkotik arama köpekleriyle ev ve işyerlerinde yapılan detaylı aramalarda, satışa hazır paketlenmiş halde toplam 281 gram sentetik kannabinoid ve hassas teraziler bulundu.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Haber İçi Reklamı</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Adliyeye Sevk Edilen 2 Şüpheli Mahkemece Tutuklandı",
        pageImage: "images/tekirdag-uyusturucu-operasyonu-tutuklama.jpg",
        content: `
          <p class="lead"><strong>Çorlu Adliyesi'nde hakim karşısına çıkan şüpheliler cezaevine gönderildi.</strong></p>
          <p>Emniyetteki sorguları tamamlanan A.K. ve M.S., çıkarıldıkları Nöbetçi Sulh Ceza Hakimliği tarafından tutuklanarak cezaevine teslim edildi. Emniyet yetkilileri, uyuşturucuyla mücadelenin kararlılıkla süreceğini vurguladı.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Haber İçi Reklamı</div></div>
        `
      }
    ]
  },
  {
    id: 34,
    headlineNumber: 4,
    title: "Trakya Siyasetinde Tarihi Deprem: Tekirdağ Büyükşehir Belediye Başkanı Candan Yüceer CHP'den İstifa Etti!",
    spot: "Tekirdağ Büyükşehir Belediye Başkanı Dr. Candan Yüceer, 18 yıldır üyesi olduğu CHP'den istifa ettiğini duyurdu. Süleymanpaşa, Şarköy, Çorlu ve Malkara belediye başkanlarıyla birlikte YENİ Parti saflarına geçen Yüceer, 'Seçilmiş iradenin ve parti örgütünün yok sayılmasına sessiz kalmayacağım' dedi.",
    category: "SİYASET & GÜNDEM",
    categorySlug: "gundem",
    location: "Tekirdağ / Bölge Geneli",
    badgeColor: "red",
    date: "30 Ağustos 2026 - 00:30",
    readTime: "4 dk",
    views: 142800,
    likes: 9850,
    reactions: { like: 4320, heart: 1980, clap: 2450, thinking: 3120, angry: 960 },
    socialPosts: [
      {
        user: "Tekirdağ Siyaset Kulisi",
        handle: "@TekirdagKulis",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Trakya'da taşlar yerinden oynadı! Candan Yüceer ve 4 ilçe belediye başkanının istifası bölge dengelerini baştan aşağı değiştirecek. #Tekirdağ #CandanYüceer #YeniParti",
        time: "15 dk önce",
        likes: 3820,
        shares: 790
      },
      {
        user: "Trakya Gündem Masası",
        handle: "@TrakyaGundemi",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Tekirdağ Büyükşehir Belediyesi ve Trakya siyasetinde yeni bir dönem başlıyor. Seçmen tabanındaki yankıları ve belediye projelerinin gidişatı çok konuşulacak.",
        time: "30 dk önce",
        likes: 2410,
        shares: 510
      }
    ],
    comments: [
      {
        id: 3401,
        author: "Ahmet Kurt",
        city: "Çorlu / Reşadiye",
        time: "10 dk önce",
        content: "Bölge siyasetinde gerçekten tarihi bir kırılma noktası. Tekirdağ için hayırlısı olsun, yatırımların ve hizmetlerin aksamaması en büyük temennimiz.",
        likes: 148
      },
      {
        id: 3402,
        author: "Selin Tokgöz",
        city: "Süleymanpaşa / Hürriyet",
        time: "20 dk önce",
        content: "18 yıllık emeğin ve milletvekilliğinin ardından alınan çok radikal ve cesur bir karar. Süreci ve Trakya'ya etkilerini yakından izleyeceğiz.",
        likes: 96
      },
      {
        id: 3403,
        author: "Mehmet Varol",
        city: "Çerkezköy / Gazi Mustafa Kemal Paşa",
        time: "25 dk önce",
        content: "Trakya'nın siyasi haritası yeniden çiziliyor. 4 ilçe belediye başkanının da aynı anda geçmesi çok güçlü bir mesaj.",
        likes: 82
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Siyaset & Bölge Masası",
      avatar: "img/gundem-trakya-avatar-red.jpg"
    },
    image: "img/candan-yuceer-chp-istifa.jpg",
    tags: ["Candan Yüceer", "Tekirdağ Büyükşehir Belediyesi", "CHP", "Yeni Parti", "İstifa", "Siyaset", "Tekirdağ", "Son Dakika"],
    content: `
      <p class="lead"><strong>Tekirdağ Büyükşehir Belediye Başkanı Dr. Candan Yüceer, 18 yıldır çatısı altında siyaset yaptığı Cumhuriyet Halk Partisi'nden (CHP) istifa ederek YENİ Parti saflarına katıldığını kamuoyuna açıkladı.</strong></p>
      <p>Sosyal medya hesaplarından kapsamlı bir yazılı açıklama yapan Dr. Candan Yüceer, bu kararı hayatının en zor kararlarından biri olarak nitelendirdi. Süleymanpaşa, Şarköy, Çorlu ve Malkara belediye başkanlarının da Yüceer ile birlikte hareket ederek partilerinden istifa edip YENİ Parti'ye geçtikleri açıklandı.</p>
      <div class="article-quote">
        <i class="fa-solid fa-quote-left"></i>
        <p>"Butlan anlayışıyla örgütümüzün iradesine, üyelerimizin tercihine ve seçilmişlerin meşruiyetine gölge düşürülmesine sessiz kalmayacağım. Tekirdağ halkının bize emanet ettiği iradeyi korumak için yeni bir yola çıkıyorum."</p>
        <span>- Dr. Candan Yüceer, Tekirdağ Büyükşehir Belediye Başkanı</span>
      </div>
      <p>Trakya ve Türkiye siyasetinde geniş yankı uyandıran bu gelişmenin ardından Tekirdağ'da belediye meclis dengeleri ve bölge siyasetinin yeniden şekilleneceği belirtiliyor.</p>
    `,
    pages: [
      {
        pageNum: 1,
        pageTitle: "18 Yıllık CHP Üyeliğine Son: 'Yeni Bir Yola Çıkıyorum'",
        pageImage: "img/candan-yuceer-chp-istifa.jpg",
        content: `
          <p class="lead"><strong>Tekirdağ Büyükşehir Belediye Başkanı Dr. Candan Yüceer, 18 yıldır gururla taşıdığı CHP rozetini çıkararak istifa kararını kamuoyuyla paylaştı.</strong></p>
          <p>Yüceer, açıklamasında uzun yıllar Tekirdağ Milletvekili olarak görev yaptığını, 31 Mart Yerel Seçimlerinde ise Tekirdağ halkının rekor oyuyla Büyükşehir Belediye Başkanlığı görevine seçildiğini hatırlattı. Alınan istifa kararının kişisel bir tercih değil, ilke ve demokrasi mücadelesinin bir sonucu olduğunu vurguladı.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"18 yıldır ter döktüğüm, her kademesinde onurla mücadele ettiğim partimden, seçilmiş iradenin ve halkın kararlarının yok sayılması nedeniyle ayrılmak zorunda kaldım."</p>
            <span>- Dr. Candan Yüceer</span>
          </div>
          <p>Yüceer'in istifa duyurusu sosyal medyada dakikalar içinde yüz binlerce etkileşim alarak Türkiye gündeminin ilk sıralarına yerleşti.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "4 İlçe Belediye Başkanı da Katıldı: Trakya'da Taşlar Yerinden Oynadı",
        pageImage: "img/candan-yuceer-chp-istifa.jpg",
        content: `
          <p class="lead"><strong>Tekirdağ'ın 4 Kritik İlçesinin Belediye Başkanları da Yüceer ile Birlikte YENİ Parti'ye Geçti</strong></p>
          <p>Gelişmenin boyutunu artıran en kritik detay ise ilçelerden gelen toplu istifalar oldu. Edinilen bilgilere göre, Tekirdağ'ın merkezi ve önemli ilçeleri olan <strong>Süleymanpaşa, Çorlu, Şarköy ve Malkara belediye başkanları</strong> da eş zamanlı olarak CHP'den istifa ederek YENİ Parti saflarına katıldıklarını duyurdu.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Tekirdağ yerel yönetimlerinde yaşanan bu toplu geçiş, Trakya siyasetinde son 20 yılın en büyük kırılma noktalarından biri olarak kaydedildi."</p>
            <span>- Gündem Trakya Siyaset Masası Özel Analizi</span>
          </div>
          <p>İlçe belediye meclis üyeleri ve çok sayıda parti yöneticisinin de istifa kervanına katılacağı, önümüzdeki günlerde Tekirdağ genelinde geniş katılımlı bir rozet takma töreninin düzenleneceği öğrenildi.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "'Hizmetlerimiz Aksamadan Sürecek': Tekirdağ'da Projeler Devam Edecek",
        pageImage: "img/candan-yuceer-chp-istifa.jpg",
        content: `
          <p class="lead"><strong>Başkan Yüceer: 'Tekirdağ Sevdamız ve Hemşehrilerimize Hizmet Sözümüz Aynen Devam Ediyor'</strong></p>
          <p>Siyasi partilerindeki değişimin belediye hizmetlerini kesinlikle aksatmayacağını belirten Candan Yüceer, Tekirdağ'ın 11 ilçesinde devam eden altyapı, ulaşım, su şebekesi, sosyal yardım ve kalkınma projelerinin aynı kararlılık ve hızla süreceğini kaydetti.</p>
          <p>Tekirdağlı vatandaşların belediye hizmetleri konusunda en ufak bir endişe duymaması gerektiğini vurgulayan Yüceer, tüm kadrolarıyla birlikte sahada 7/24 çalışmayı sürdüreceklerini belirtti.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Bizim makamımız da pusulamız da Tekirdağ halkının mutluluğu ve huzurudur. Hiçbir siyasi tartışma hemşehrilerimize hizmet etme heyecanımızın önüne geçemez."</p>
            <span>- Dr. Candan Yüceer</span>
          </div>
          <p>Gelişmeler, Tekirdağ Büyükşehir Belediye Meclisi'nde yeni komisyon dağılımları ve siyasi dengeler açısından da yakından izlenmeye devam ediyor.</p>
        `
      }
    ]
  },
  {
    id: 33,
    headlineNumber: 5,
    title: "Çerkezköy'de Sıcak Saatler: Alacağını Tahsil Edemeyen İşçi Elektrik Direğine Çıktı!",
    spot: "Tekirdağ'ın Çerkezköy ilçesinde çalıştığı inşaattan alacağını tahsil edemediğini öne süren bir işçi elektrik direğine çıkarak eylem yaptı. Polis, itfaiye ve sağlık ekiplerinin yaklaşık 2 saat süren ikna çalışmasının ardından şahıs güvenle indirildi.",
    category: "ASAYİŞ & GÜNDEM",
    categorySlug: "asayis",
    location: "Tekirdağ / Çerkezköy",
    badgeColor: "red",
    date: "29 Ağustos 2026 - 01:12",
    readTime: "3 dk",
    views: 94200,
    likes: 6310,
    reactions: { like: 1980, heart: 420, clap: 850, thinking: 1820, angry: 2100 },
    socialPosts: [
      {
        user: "Çerkezköy Haber Merkezi",
        handle: "@CerkezkoyHaber",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Çerkezköy'de yürekleri ağza getiren dakikalar. Alacağını alamadığı için direğe çıkan işçi kardeşimiz 2 saatlik ikna sonucu indirildi. Emeğin ve alın terinin karşılığı geciktirilmemeli. ⚠️🏗️ #Çerkezköy",
        time: "10 dk önce",
        likes: 3120,
        shares: 640
      },
      {
        user: "Trakya Emek Platformu",
        handle: "@TrakyaEmek",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Çalışanların hak edişlerinin zamanında ödenmesi konusunda yetkililerin inşaat sektöründe denetimleri artırması elzemdir.",
        time: "20 dk önce",
        likes: 1850,
        shares: 420
      }
    ],
    comments: [
      {
        id: 3301,
        author: "Murat Demir",
        city: "Çerkezköy / Bağlık",
        time: "15 dk önce",
        content: "Neyse ki canına bir zarar gelmeden ikna edilmiş. Polisimize ve itfaiyemize helal olsun.",
        likes: 112
      },
      {
        id: 3302,
        author: "Gülseren Hanım",
        city: "Çorlu / Reşadiye",
        time: "5 dk önce",
        content: "İnsanlar alın teriyle çalışıyor, haklarını zamanında verin ki kimse bu yollara başvurmak zorunda kalmasın.",
        likes: 84
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Asayiş & Güncel Muhabiri",
      avatar: "img/gundem-trakya-avatar-red.jpg"
    },
    image: "img/cerkezkoy-elektrik-diregi-eylem.jpg",
    tags: ["Çerkezköy", "Asayiş", "Elektrik Direği", "İşçi Eylemi", "İtfaiye", "Polis", "Tekirdağ", "Son Dakika"],
    content: `
      <p class="lead"><strong>Tekirdağ’ın Çerkezköy ilçesinde çalıştığı inşaattan uzun süredir hak edişini tahsil edemediğini öne süren bir işçi, cadde üzerindeki yüksek gerilim elektrik direğine çıkarak eylem yaptı.</strong></p>
      <p>Olayı gören vatandaşların panikle 112 Acil Çağrı Merkezi'ne haber vermesi üzerine bölgeye çok sayıda polis, itfaiye, sağlık ve TREDAŞ ekibi sevk edildi. İtfaiye ekipleri şahsın düşme ihtimaline karşı hava yastığı açarken, TREDAŞ olası bir akım faciasını engellemek için bölgenin elektriğini kesti.</p>
      <div class="article-quote">
        <i class="fa-solid fa-quote-left"></i>
        <p>"Müzakereci polis ekiplerimizin yaklaşık 2 saat süren titiz ikna çalışmaları neticesinde işçi sağ salim indirildi."</p>
        <span>- Çerkezköy İlçe Emniyet Müdürlüğü</span>
      </div>
      <p>Sağlık kontrolleri yapılan işçi, ifadesi alınmak ve alacak mağduriyetinin tespiti amacıyla polis merkezine götürüldü. Olayla ilgili geniş çaplı inceleme başlatıldı.</p>
    `,
    pages: [
      {
        pageNum: 1,
        pageTitle: "İnşaat Önündeki Elektrik Direğine Çıkarak Eylem Başlattı",
        pageImage: "img/cerkezkoy-elektrik-diregi-eylem.jpg",
        content: `
          <p class="lead"><strong>Tekirdağ’ın Çerkezköy ilçesinde yapımı süren bir inşaatta çalıştığı öğrenilen işçi, uzun süredir hak ettiği maaş ve alacaklarını tahsil edemediğini iddia ederek metrelerce yükseklikteki elektrik direğine tırmandı.</strong></p>
          <p>Cadde üzerindeki elektrik direğinin tepesine çıkan şahsı gören mahalle sakinleri ve çevredeki işçiler büyük panik yaşadı. Durumun 112 Acil Çağrı Merkezi’ne bildirilmesi üzerine olay yerine polis, itfaiye, sağlık ve elektrik dağıtım şirketi (TREDAŞ) ekipleri yönlendirildi.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Direğin tepesinden seslenen işçi, alın terinin karşılığını alamadığını ve mağdur edildiğini belirterek yetkililerden yardım istedi."</p>
            <span>- Görgü Tanıkları ve Olay Yeri Tutanakları</span>
          </div>
          <p>Polis ekipleri güvenlik gerekçesiyle caddeyi araç ve yaya trafiğine kapatarak çevrede geniş bir güvenlik kordonu oluşturdu.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "İtfaiye Hava Çadırı Açtı, Ekipler 2 Saat Boyunca Dil Döktü",
        pageImage: "img/cerkezkoy-elektrik-diregi-eylem.jpg",
        content: `
          <p class="lead"><strong>İtfaiye Ekipleri Atlama Yastığı Kurdu, TREDAŞ Elektriği Kesti</strong></p>
          <p>Olay yerine ulaşan Tekirdağ Büyükşehir Belediyesi İtfaiye Daire Başkanlığı ekipleri, şahsın atlama veya dengesini kaybedip düşme riskine karşı direğin alt tabanına derhal özel şişme hava yastığı kurdu.</p>
          <p>Olası bir elektrik çarpması faciasını önlemek amacıyla TREDAŞ ekipleri bölgedeki ana elektrik hatlarının enerjisini kontrollü olarak kesti.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Müzakereci polis memurları ve zabıta ekipleri, direğin tepesindeki şahısla megafon ve merdiven yardımıyla kesintisiz iletişim kurarak sakinleştirmeye çalıştı."</p>
            <span>- Çerkezköy Asayiş Büro Amirliği</span>
          </div>
          <p>İşçinin mağduriyetinin çözüleceği yönünde verilen güvencelerle ikna süreci dakikalarca devam etti.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "İkna Edilerek Aşağı İndirildi, Soruşturma Başlatıldı",
        pageImage: "img/cerkezkoy-elektrik-diregi-eylem.jpg",
        content: `
          <p class="lead"><strong>2 Saatlik Çaba Sonuç Verdi, Şahıs Güvenle Tahliye Edildi</strong></p>
          <p>Polis ve itfaiye ekiplerinin yaklaşık <strong>2 saat süren titiz ikna görüşmelerinin</strong> ardından, eylemini sonlandıran işçi itfaiye merdiveni sepetine alınarak güvenli bir şekilde yere indirildi.</p>
          <p>Aşağıya indirilen işçiye ilk müdahale ve sağlık kontrolü olay yerinde hazır bekletilen 112 Acil Sağlık ambulansında yapıldı. Genel sağlık durumunun iyi olduğu belirlenen şahıs, ifadesi alınmak ve inşaat firmasıyla olan alacak uyuşmazlığının adli kayda geçirilmesi amacıyla polis merkezine götürüldü.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Olayın ardından cadde yeniden kontrollü şekilde trafiğe açıldı, bölgeye elektrik enerjisi verildi. Olayla ilgili adli tahkikat sürüyor."</p>
            <span>- İlçe Emniyet Müdürlüğü Basın Bilgilendirmesi</span>
          </div>
          <p>Çerkezköy Kaymakamlığı ve Çalışma ve İş Kurumu yetkililerinin de inşaat sektöründeki işçi hak edişlerine yönelik denetimleri sıkılaştıracağı kaydedildi.</p>
        `
      }
    ]
  },
  {
    id: 32,
    headlineNumber: 6,
    title: "Çerkezköy'de Feci Olay: 15 Yaşındaki Stajyer İnşaatta Akıma Kapılarak Hayatını Kaybetti!",
    spot: "Tekirdağ'ın Çerkezköy ilçesi Kızılpınar Namık Kemal Mahallesi'nde bir inşaatta stajyer olarak çalışan 15 yaşındaki Eren Gündoğdu, kablo çekimi sırasında elektrik akımına kapılarak hayatını kaybetti. Jandarma geniş çaplı soruşturma başlattı.",
    category: "ASAYİŞ & SON DAKİKA",
    categorySlug: "asayis",
    location: "Tekirdağ / Çerkezköy (Kızılpınar)",
    badgeColor: "red",
    date: "29 Ağustos 2026 - 01:05",
    readTime: "3 dk",
    views: 112400,
    likes: 8940,
    reactions: { like: 1250, heart: 840, clap: 420, thinking: 980, angry: 5450 },
    socialPosts: [
      {
        user: "Çerkezköy Yerel Gündem",
        handle: "@CerkezkoyGundem",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Kızılpınar'da gencecik bir evladımızı iş kazasında kaybettik. 15 yaşındaki Eren Gündoğdu kardeşimize Allah'tan rahmet, kederli ailesine sabırlar diliyoruz. Başımız sağ olsun Çerkezköy. 🥀🖤 #Çerkezköy #ErenGündoğdu",
        time: "15 dk önce",
        likes: 4120,
        shares: 1280
      },
      {
        user: "Tekirdağ İş Güvenliği Meclisi",
        handle: "@TekirdagIsGuv",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "İnşaatlarda stajyer ve çırak güvenliği en üst seviyede denetlenmelidir. Bu acı olayın sorumlularının adalet önünde hesap vermesi şarttır.",
        time: "30 dk önce",
        likes: 2840,
        shares: 760
      }
    ],
    comments: [
      {
        id: 3201,
        author: "Ahmet Vatansever",
        city: "Çerkezköy / Kızılpınar",
        time: "20 dk önce",
        content: "Gencecik bir fidan, 15 yaşında stajyer evladımız... Yüreğimiz yandı. Ailesine ve tüm Çerkezköy'e sabırlar diliyorum.",
        likes: 184
      },
      {
        id: 3202,
        author: "Sevgi Çelik",
        city: "Kapaklı / Atatürk",
        time: "10 dk önce",
        content: "Mekanı cennet olsun, ailesine sonsuz sabır versin Allahım. Denetimlerin ihmal edilmemesi gerekiyor.",
        likes: 92
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Asayiş Editörü",
      avatar: "img/gundem-trakya-avatar-red.jpg"
    },
    image: "img/cerkezkoy-stajyer-olay.jpg",
    tags: ["Çerkezköy", "Kızılpınar", "Asayiş", "Eren Gündoğdu", "İş Kazası", "Tekirdağ", "Son Dakika"],
    content: `
      <p class="lead"><strong>Tekirdağ’ın Çerkezköy ilçesinde yapımı süren bir inşaatta stajyer olarak çalıştığı belirtilen 15 yaşındaki Eren Gündoğdu, elektrik tesisatı kablo çekimi sırasında akıma kapılarak hayatını kaybetti.</strong></p>
      <p>Olay, Kızılpınar Namık Kemal Mahallesi'nde bulunan çok katlı bir inşaatta meydana geldi. Edinilen bilgilere göre, elektrik kablolarını çekerken aniden yüksek akıma maruz kalan genç stajyer ağır yaralandı. Çevredekilerin ihbarı üzerine olay yerine intikal eden sağlık ekiplerince Çerkezköy Devlet Hastanesi'ne kaldırılan Gündoğdu, tüm müdahalelere rağmen kurtarılamadı.</p>
      <div class="article-quote">
        <i class="fa-solid fa-quote-left"></i>
        <p>"15 yaşındaki Eren Gündoğdu'nun vefatı Çerkezköy'ü yasa boğdu. Cenaze otopsi için Adli Tıp Kurumu'na sevk edilirken, Jandarma inşaatta geniş çaplı adli soruşturma başlattı."</p>
        <span>- Çerkezköy İlçe Jandarma Komutanlığı</span>
      </div>
      <p>Olayda ihmal iddiaları araştırılırken, inşaat yetkililerinin ifadelerine başvuruluyor.</p>
    `,
    pages: [
      {
        pageNum: 1,
        pageTitle: "Kızılpınar'da Feci Olay: 15 Yaşındaki Stajyer Akıma Kapıldı",
        pageImage: "img/cerkezkoy-stajyer-olay.jpg",
        content: `
          <p class="lead"><strong>Tekirdağ’ın Çerkezköy ilçesinde yapımı devam eden bir inşaatta stajyer olarak çalışan 15 yaşındaki Eren Gündoğdu, kablo çekimi yaptığı sırada elektrik akımına kapılarak ağır yaralandı.</strong></p>
          <p>Olay, Çerkezköy'e bağlı <strong>Kızılpınar Namık Kemal Mahallesi’nde</strong> bulunan inşaat şantiyesinde meydana geldi. Edinilen ilk bilgilere göre, elektrik tesisatında kablo döşeme ve çekim çalışması yürüten Eren Gündoğdu, henüz belirlenemeyen bir teknik arıza veya kaçak nedeniyle yüksek elektrik akımına kapıldı.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Genç stajyerin akıma kapıldığını gören inşaattaki diğer ustalar ve çevredekiler derhal şalterleri kapatıp 112 Acil Sağlık ve Jandarma ekiplerine haber verdi."</p>
            <span>- Olay Yeri İlk İnceleme Raporu</span>
          </div>
          <p>Kısa sürede şantiye alanına ulaşan sağlık personeli, kalbi duran genç stajyere olay yerinde dakikalarca kalp masajı uyguladı.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Hastanede Tüm Müdahalelere Rağmen Kurtarılamadı",
        pageImage: "img/cerkezkoy-stajyer-olay.jpg",
        content: `
          <p class="lead"><strong>Çerkezköy Devlet Hastanesi'nde Yaşam Mücadelesini Kaybetti</strong></p>
          <p>Sağlık ekiplerinin ilk müdahalesinin ardından ambulansla hızla <strong>Çerkezköy Devlet Hastanesi Acil Servisi’ne</strong> sevk edilen 15 yaşındaki Eren Gündoğdu, kırmızı alanda acil ameliyata ve yoğun bakıma alındı.</p>
          <p>Hastanede görevli uzman hekimlerin ve acil tıp ekiplerinin tüm yoğun çabalarına ve elektroşok müdahalelerine rağmen gencecik stajyer kurtarılamayarak hayatını kaybetti.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Acı haberi alarak hastane bahçesine koşan Gündoğdu ailesi, okul arkadaşları ve yakınları gözyaşlarına boğuldu, hastane önünde derin bir hüzün yaşandı."</p>
            <span>- Çerkezköy Gündem Muhabiri</span>
          </div>
          <p>Gencecik yaşta iş kazası kurbanı olan Eren Gündoğdu'nun vefatı tüm Çerkezköy ve Tekirdağ kamuoyunda büyük bir üzüntü ve tepki yarattı.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Cenaze Adli Tıp'a Sevk Edildi, Jandarma Soruşturma Başlattı",
        pageImage: "img/cerkezkoy-stajyer-olay.jpg",
        content: `
          <p class="lead"><strong>Adli Tıp Otopsi İncelemesi Başlattı, İhmaller Araştırılıyor</strong></p>
          <p>Hayatını kaybeden 15 yaşındaki Eren Gündoğdu’nun cenazesi, kesin ölüm nedeninin ve elektrik akımının vücuttaki tahribatının tespiti amacıyla otopsi yapılmak üzere <strong>Tekirdağ Adli Tıp Kurumu Morgu’na</strong> gönderildi.</p>
          <p>Kızılpınar Jandarma Karakol Komutanlığı ve Olay Yeri İnceleme ekipleri, inşaat sahasında detaylı inceleme yaparak elektrik panoları, kablo hatları ve kaçak akım rölelerini teknik teste tabi tuttu.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"İnşaatta stajyer olarak çalıştırılan 15 yaşındaki bir çocuğun iş sağlığı ve güvenliği şartlarının tam sağlanıp sağlanmadığı, ihmal olup olmadığı adli ve idari soruşturmayla aydınlatılacaktır."</p>
            <span>- Çerkezköy Cumhuriyet Başsavcılığı</span>
          </div>
          <p>İnşaat firması yetkilileri ve şantiye şefinin ifadelerine başvurulurken, adli tahkikat çok yönlü olarak sürdürülüyor.</p>
        `
      }
    ]
  },
  {
    id: 31,
    headlineNumber: 7,
    title: "Tekirdağ'da Dev Huzur ve Asayiş Operasyonu: Çorlu ve Çerkezköy'de Çok Sayıda Tutuklama!",
    spot: "Tekirdağ İl Emniyet Müdürlüğü ve İl Jandarma Komutanlığı ekiplerince il genelinde eş zamanlı düzenlenen geniş çaplı huzur ve asayiş operasyonunda kesinleşmiş hapis cezası bulunan aranan şahıslar yakalandı, adli makamlara sevk edilen çok sayıda şüpheli tutuklandı.",
    category: "ASAYİŞ & GÜVENLİK",
    categorySlug: "gundem",
    location: "Tekirdağ / Çorlu & Çerkezköy",
    badgeColor: "red",
    date: "28 Ağustos 2026 - 22:45",
    readTime: "3 dk",
    views: 96800,
    likes: 6720,
    reactions: { like: 4150, heart: 2100, clap: 1980, thinking: 55, angry: 8 },
    socialPosts: [
      {
        user: "Tekirdağ Asayiş & Haber",
        handle: "@TekirdagAsayis",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Emniyet ve Jandarma güçlerimizin Çorlu ve Çerkezköy merkezli huzur operasyonunda çok sayıda suç unsuru ele geçirildi, aranan şahıslar adalete teslim edildi. Tebrikler Türk Polisi ve Jandarması! 🚔🇹🇷 #TekirdağAsayiş",
        time: "10 dk önce",
        likes: 3120,
        shares: 890
      },
      {
        user: "Çorlu Güvenlik Platformu",
        handle: "@CorluGuvenlik",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Sokaklarımızın güvenliği ve çocuklarımızın huzuru için denetimlerin artarak devam etmesini diliyoruz. Emniyet güçlerimizin eline sağlık. 👮‍♂️👏",
        time: "25 dk önce",
        likes: 1980,
        shares: 440
      }
    ],
    comments: [
      {
        id: 3101,
        author: "Kemal Bey",
        city: "Çorlu / Şeyhsinan",
        time: "8 dk önce",
        content: "Akşam saatlerinde yapılan denetimleri bizzat gördük, polisimiz çok titiz çalıştı. Huzurumuz için teşekkürler.",
        likes: 214
      },
      {
        id: 3102,
        author: "Meryem Öğretmen",
        city: "Çerkezköy / Kızılpınar",
        time: "18 dk önce",
        content: "Okul çevreleri ve parklarda yapılan bu uygulamalar aileler olarak bize büyük güven veriyor. Allah polisimizi korusun.",
        likes: 186
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Asayiş & Güvenlik Editörü",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/gundem-trakya-tekirdag-asayis-post.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Tekirdağ Genelinde Geniş Çaplı Asayiş Uygulaması",
        pageImage: "img/gundem-trakya-tekirdag-asayis-post.jpg",
        content: `
          <p class="lead"><strong>Tekirdağ İl Emniyet Müdürlüğü ve İl Jandarma Komutanlığı ekipleri, halkın huzur ve sükununu sağlamak amacıyla il genelinde dev bir asayiş ve güvenlik operasyonu gerçekleştirdi.</strong></p>
          <p>Özellikle sanayi kenti <strong>Çorlu, Çerkezköy ve Kapaklı</strong> ilçelerinde yoğunlaştırılan operasyonlarda; önceden belirlenen stratejik noktalarda, ana arterlerde ve umuma açık yerlerde kapsamlı Genel Bilgi Toplama (GBT) kontrolleri ve arama faaliyetleri icra edildi.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Vatandaşlarımızın sokaklarda güvenle yürüyebilmesi, kamu düzeninin korunması ve suçluların adalete teslim edilmesi için denetimlerimiz 7 gün 24 saat aralıksız devam edecektir."</p>
            <span>- Tekirdağ Emniyet ve Asayiş Şube Müdürlüğü</span>
          </div>
          <p>Operasyon kapsamında yüzlerce araç ve şahıs titizlikle sorgulandı.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Aranan Firariler Yakalandı, Çok Sayıda Tutuklama",
        pageImage: "img/gundem-trakya-tekirdag-asayis-post.jpg",
        content: `
          <p class="lead"><strong>Kesinleşmiş Cezası Bulunan Şahıslar Cezaevine Gönderildi</strong></p>
          <p>Denetimler sırasında; hırsızlık, dolandırıcılık, kasten yaralama ve çeşitli asayiş suçlarından haklarında kesinleşmiş hapis cezası ve yakalama kararı bulunan firari şahıslar emniyet güçlerinin dikkati sayesinde kıskıvrak yakalandı.</p>
          <p>Yapılan aramalarda ele geçirilen ruhsatsız tabancalar, kurusıkı silahlar, mühimmat ve uyuşturucu maddelere el konuldu.</p>
          <p>Emniyetteki sorgu ve adli işlemleri tamamlanan şüpheliler adliyeye sevk edilirken, çıkarıldıkları mahkemece tutuklanan şahıslar Kapalı Ceza İnfaz Kurumu'na teslim edildi.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Trafik Denetimleri ve Sıfır Tolerans Vurgusu",
        pageImage: "img/gundem-trakya-tekirdag-asayis-post.jpg",
        content: `
          <p class="lead"><strong>Trafik ve Kamu Güvenliği Ekipleri Sahada</strong></p>
          <p>Asayiş ekiplerinin yanı sıra Trafik Denetleme Şube Müdürlüğü ekipleri de alkol, ehliyetsiz araç kullanımı, abartı egzoz ve hız ihlallerine karşı sıfır tolerans prensibiyle denetimlerini sürdürdü.</p>
          <p>Yetkililer, bölge genelinde huzur ve güven ortamının pekiştirilmesi için bu tür şok uygulamaların kararlılıkla devam edeceğini açıkladı.</p>
        `
      }
    ]
  },
  {
    id: 30,
    headlineNumber: 8,
    title: "ÇOSB İtfaiye Filosuna 32 Metrelik Dev Araç Takviyesi: Yüksek Katlı Tesislere Anında Müdahale!",
    spot: "Çerkezköy Organize Sanayi Bölgesi (ÇOSB), bölgedeki fabrikaların ve sanayi kuruluşlarının yangın güvenliğini en üst seviyeye çıkarmak amacıyla filosuna 32 metre mafsallı merdivenli modern itfaiye aracı kazandırdı.",
    category: "SANAYİ & GÜNDEM",
    categorySlug: "gundem",
    location: "Tekirdağ / Çerkezköy OSB",
    badgeColor: "red",
    date: "28 Ağustos 2026 - 22:35",
    readTime: "3 dk",
    views: 84200,
    likes: 5640,
    reactions: { like: 3400, heart: 1850, clap: 1600, thinking: 40, angry: 2 },
    socialPosts: [
      {
        user: "Çerkezköy OSB Sanayicileri",
        handle: "@CerkezkoyOSB",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Bölge Müdürlüğümüzde düzenlenen törenle 32 metrelik mafsallı merdivenli yeni itfaiye aracımızı filomuza kattık. Sanayimizin ve çalışanlarımızın can ve mal güvenliği her zaman önceliğimizdir. 🚒🛡️ #ÇOSB #SanayiGüvenliği",
        time: "15 dk önce",
        likes: 2450,
        shares: 720
      },
      {
        user: "Trakya Sanayi Haber",
        handle: "@TrakyaSanayi",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Yüksek katlı fabrikalar ve kimya tesisleri için devasa bir yatırım. ÇOSB İtfaiyesi bölgenin en donanımlı teşkilatlarından biri oldu! 👏",
        time: "30 dk önce",
        likes: 1640,
        shares: 390
      }
    ],
    comments: [
      {
        id: 3001,
        author: "Fabrika Müdürü Selçuk",
        city: "Çerkezköy / OSB 3. Kısım",
        time: "10 dk önce",
        content: "Sanayiciler olarak içimiz çok daha rahat. Yüksek binalarımıza ve bacalarımıza müdahale için 32 metrelik merdiven harika bir takviye. Emeği geçenlere teşekkürler.",
        likes: 172
      },
      {
        id: 3002,
        author: "İş Güvenliği Uzmanı Burcu",
        city: "Kapaklı / Sanayi Yolu",
        time: "20 dk önce",
        content: "Allah kullanmayı nasip etmesin ama varlığı can simidi gibi. ÇOSB yönetimine tebrikler.",
        likes: 118
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Sanayi & Güvenlik Muhabiri",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/cosb-itfaiye-yeni-arac.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "ÇOSB İtfaiyesi'ne 32 Metrelik Yeni Araç",
        pageImage: "img/cosb-itfaiye-yeni-arac.jpg",
        content: `
          <p class="lead"><strong>Çerkezköy Organize Sanayi Bölgesi (ÇOSB), bölgedeki sanayi tesislerinin güvenliğini artırmaya yönelik yatırımlarına bir yenisini daha ekledi.</strong></p>
          <p>Yüksek katlı binalar ile ulaşılması güç endüstriyel noktalara hızlı ve etkili müdahale edebilme kapasitesine sahip <strong>32 metre mafsallı merdivenli</strong> yeni itfaiye aracı, düzenlenen törenle ÇOSB İtfaiye Amirliği envanterine katıldı.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"En büyük dileğimiz bu araca hiçbir zaman ihtiyaç duyulmamasıdır; ancak olası acil durumlarda bölge sanayisinin can ve mal güvenliğini en üst seviyede koruyacak teknik donanıma sahibiz."</p>
            <span>- ÇOSB Yönetim Kurulu Başkanlığı</span>
          </div>
          <p>Yeni araçla birlikte ÇOSB İtfaiyesi'nin yangın ve kurtarma operasyonlarında müdahale kabiliyeti bölge genelinde zirveye ulaştı.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Bölge Müdürlüğü'nde Teslim Töreni Düzenlendi",
        pageImage: "img/cosb-itfaiye-yeni-arac.jpg",
        content: `
          <p class="lead"><strong>Sanayi Yönetimi ve Teknik Ekipler Törende Buluştu</strong></p>
          <p>ÇOSB Bölge Müdürlüğü'nde gerçekleştirilen teslim törenine ÇOSB Yönetim Kurulu Başkanı <strong>Eyüp Sözdinler</strong>, Yönetim Kurulu Üyeleri M. Gürdal Adal, Mete Han Pekol, Levent Şişman, Bölge Müdürü <strong>F. Çiğdem Baykal</strong> ile yedek yönetim kurulu üyeleri ve direktörler katıldı.</p>
          <p>Dualar eşliğinde kurban kesilerek hizmete alınan itfaiye aracının teknik özellikleri katılımcılara ayrıntılı şekilde tanıtıldı.</p>
          <p>Aracın mafsallı merdiven sistemi sayesinde dar sokaklar, fabrika çatıları ve kimyasal depolama alanlarında yüksek manevra kabiliyeti sağladığı kaydedildi.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Yüksek Katlı Tesislerde Üstün Yangın Güvenliği",
        pageImage: "img/cosb-itfaiye-yeni-arac.jpg",
        content: `
          <p class="lead"><strong>Teknolojik Donanım ve Kesintisiz Müdahale Hazırlığı</strong></p>
          <p>Modern teknolojik ekipmanlarla donatılan 32 metrelik merdivenli itfaiye aracı; su, köpük ve kimyasal yangın söndürme modülleriyle yüksek basınçlı müdahale imkanı sunuyor.</p>
          <p>ÇOSB İtfaiye Amirliği yetkilileri, eğitimli personeli ve yenilenen güçlü filosuyla 7 gün 24 saat sanayi bölgesinin güvenliği için teyakkuzda olduğunu bildirdi.</p>
        `
      }
    ]
  },
  {
    id: 29,
    headlineNumber: 9,
    title: "Çerkezköy 1911 Spor ile MBA Okulları Arasında Kadın Futboluna Güçlü Destek!",
    spot: "Çerkezköy 1911 Spor Kulübü ile MBA Okulları arasında imzalanan iş birliği protokolüyle kadın futbolu ve genç sporcuların geleceğine büyük destek sağlandı. Tanıtım Müdürü Fikriye Gülverin antrenmanı ziyaret ederek sporcularla buluştu.",
    category: "SPOR & EĞİTİM",
    categorySlug: "spor",
    location: "Tekirdağ / Çerkezköy",
    badgeColor: "red",
    date: "28 Ağustos 2026 - 22:00",
    readTime: "3 dk",
    views: 69400,
    likes: 4890,
    reactions: { like: 2850, heart: 1640, clap: 1200, thinking: 30, angry: 2 },
    socialPosts: [
      {
        user: "Çerkezköy 1911 Spor Kulübü",
        handle: "@Cerkezkoy1911SK",
        avatar: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "MBA Okulları ile gerçekleştirdiğimiz iş birliği protokolü kapsamında Kurumsal Tanıtım Müdürü Sayın Fikriye Gülverin Bayan Futbol Takımımızın antrenmanını ziyaret etti. Kadın futboluna ve genç sporcularımıza desteklerinden dolayı teşekkür ederiz. ⚽🔴⚪ #Çerkezköy1911 #MBAOkulları",
        time: "15 dk önce",
        likes: 2150,
        shares: 640
      },
      {
        user: "Trakya Amatör Spor",
        handle: "@TrakyaSporHaber",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Kızlarımızın spora kazandırılması ve kadın futbolunun gelişimi için harika bir dayanışma. Tebrikler Çerkezköy 1911 ve MBA Okulları! 👏⚽",
        time: "35 dk önce",
        likes: 1420,
        shares: 280
      }
    ],
    comments: [
      {
        id: 2901,
        author: "Meltem Yılmaz",
        city: "Çerkezköy / Gazi Mustafa Kemal Paşa",
        time: "12 dk önce",
        content: "Kızım takımda oynuyor, bu tarz kurumsal eğitim kurumlarının spora el atması kız çocuklarımızın geleceği için çok kıymetli. Teşekkürler MBA ve 1911 Spor.",
        likes: 138
      },
      {
        id: 2902,
        author: "Serkan Hoca",
        city: "Kapaklı / Merkez",
        time: "25 dk önce",
        content: "Trakya'da kadın futbolunun gelişmesi adına atılmış örnek bir adım. Başarılar diliyorum genç sporcularımıza.",
        likes: 94
      }
    ],
    author: {
      name: "Gündem Trakya Spor Masası",
      title: "Amatör & Altyapı Spor Muhabiri",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/cerkezkoy-1911-kadin-futbolu-mba.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "MBA Okulları ve 1911 Spor Güçlerini Birleştirdi",
        pageImage: "img/cerkezkoy-1911-kadin-futbolu-mba.jpg",
        content: `
          <p class="lead"><strong>Çerkezköy 1911 Spor Kulübü ile MBA Okulları arasında gerçekleştirilen iş birliği protokolü kapsamında, kadın futboluna ve genç sporcuların geleceğine güçlü bir destek sağlandı.</strong></p>
          <p>İş birliği çerçevesinde MBA Okulları Kurumsal Tanıtım Müdürü <strong>Sayın Fikriye Gülverin</strong>, Çerkezköy 1911 Spor Kulübü bünyesinde faaliyet gösteren Kadın Futbol Takımlarının antrenmanını sahada ziyaret etti.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Genç sporcularımızın geleceğine katkı sunmak ve kadın futbolunun bölgemizde hak ettiği güçlü konuma ulaşmasını sağlamak için eğitim ve sporu bir araya getiriyoruz."</p>
            <span>- Çerkezköy 1911 Spor Kulübü & MBA Okulları Ortak Bildirisi</span>
          </div>
          <p>Çerkezköy 1911 Spor Kulübü yönetimi, nazik ziyareti ve kadın futboluna sunduğu değerli katkılar dolayısıyla Fikriye Gülverin’e teşekkürlerini sundu.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Antrenman Sahasında Genç Yıldızlara Moral Ziyareti",
        pageImage: "img/cerkezkoy-1911-kadin-futbolu-mba.jpg",
        content: `
          <p class="lead"><strong>Fikriye Gülverin Çalışmaları Yerinde İnceledi</strong></p>
          <p>Genç kadın futbolcuların gerçekleştirdiği yoğun antrenmanı saha kenarından ilgiyle takip eden MBA Okulları Kurumsal Tanıtım Müdürü Fikriye Gülverin, teknik ekip ve sporculardan yürütülen çalışmalar hakkında bilgi aldı.</p>
          <p>Ziyaret sırasında, gençlerin erken yaşta spora yönlendirilmesi, sporda fırsat eşitliği ve kadın futbolcuların altyapı olanaklarının güçlendirilmesinin önemi vurgulandı.</p>
          <p>Genç futbolcular, ziyaret dolayısıyla büyük moral bulurken, yeni sezon hedefleri doğrultusunda antrenman temposunu artırdı.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "'Birlikte Daha Güçlü, Birlikte Geleceğe'",
        pageImage: "img/cerkezkoy-1911-kadin-futbolu-mba.jpg",
        content: `
          <p class="lead"><strong>Trakya Sporunda Örnek Sosyal Sorumluluk Adımı</strong></p>
          <p>Gerçekleştirilen iş birliğinin, yalnızca sportif başarıyı değil, aynı zamanda genç kızların özgüven ve liderlik becerilerini geliştirmeyi amaçladığı belirtildi.</p>
          <p><strong>"Birlikte Daha Güçlü, Birlikte Geleceğe"</strong> sloganıyla yürütülen bu anlamlı ortaklığın önümüzdeki süreçte yeni sosyal ve sportif projelerle devam edeceği ifade edildi.</p>
        `
      }
    ]
  },
  {
    id: 28,
    headlineNumber: 10,
    title: "Buzdolabında Bile Çoğalıyor: Uzmanlardan 'Listeria' Besin Zehirlenmesi ve Peynir Uyarısı!",
    spot: "Tarım ve Orman Bakanlığı'nın beyaz peynirde Listeria tespit etmesinin ardından İrmet Hospital Enfeksiyon Hastalıkları Uzmanı Prof. Dr. Davut Özdemir uyardı: '+4 derecede bile ürer, menenjit ve sepsise yol açabilir!' İşte 'Kaynat, Pişir, Soy' altın kuralı.",
    category: "SAĞLIK & YAŞAM",
    categorySlug: "saglik",
    location: "Trakya / Çerkezköy",
    badgeColor: "red",
    date: "28 Ağustos 2026 - 21:55",
    readTime: "4 dk",
    views: 84300,
    likes: 5920,
    reactions: { like: 3600, heart: 1400, clap: 1250, thinking: 780, angry: 25 },
    socialPosts: [
      {
        user: "Trakya Sağlık & Tüketici",
        handle: "@TrakyaSaglik",
        avatar: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Peynir ve süt ürünlerinde Listeria tehlikesine dikkat! Prof. Dr. Davut Özdemir: 'Buzdolabı soğuğu bakteriyi durdurmaz, 70 derece üzeri pişirme şart.' 🧀🥛 #Sağlık #Listeria",
        time: "15 dk önce",
        likes: 2240,
        shares: 810
      },
      {
        user: "Gıda Güvenliği Platformu",
        handle: "@GidaGuvenligi",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Özellikle gebeler, yaşlılar ve bebekler için Listeria çok tehlikeli. Çiğ süt ürünlerinden uzak durulmalı ve sebzeler bol suyla yıkanmalı! 🛡️",
        time: "30 dk önce",
        likes: 1750,
        shares: 460
      }
    ],
    comments: [
      {
        id: 2801,
        author: "Zeliha Hanım",
        city: "Tekirdağ / Süleymanpaşa",
        time: "10 dk önce",
        content: "Buzdolabında bile bakterinin üreyebildiğini bilmiyordum. Hocamız çok önemli bilgiler vermiş, peynir alırken ve saklarken artık çok daha dikkat edeceğiz.",
        likes: 142
      },
      {
        id: 2802,
        author: "Ecz. Burak",
        city: "Çorlu / Reşadiye",
        time: "20 dk önce",
        content: "Özellikle bağışıklığı zayıf olanlar ve hamileler için hayati bir uyarı. Bilgilendirme için teşekkürler.",
        likes: 98
      }
    ],
    author: {
      name: "Gündem Trakya Sağlık Masası",
      title: "Medikal & Halk Sağlığı Muhabiri",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/listeria-besin-zehirlenmesi.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Peynirde Listeria Tehlikesi ve Buzdolabı Faktörü",
        pageImage: "img/listeria-besin-zehirlenmesi.jpg",
        content: `
          <p class="lead"><strong>Tarım ve Orman Bakanlığı tarafından ünlü bir markanın beyaz peynir ürününde Listeria bakterisinin tespit edilmesi, gıda güvenliğini yeniden ülke gündemine taşıdı.</strong></p>
          <p>Özel İrmet Hospital Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji Uzmanı <strong>Prof. Dr. Davut Özdemir</strong>, Listeria bakterisinin neden olduğu 'listeriyoz' hastalığına ilişkin kritik uyarılarda bulundu.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Listeria'yı diğer bakterilerden ayıran en tehlikeli özellik buzdolabı sıcaklığında (+4 derece) bile kolayca çoğalabilmesidir. Yok edilmesi için gıdanın 70 derece ve üzerinde tam pişirilmesi veya pastörize edilmesi gerekir."</p>
            <span>- Prof. Dr. Davut Özdemir, İrmet Hospital Enfeksiyon Hastalıkları Uzmanı</span>
          </div>
          <p>Listeria; çiğ süt, pastörize edilmemiş peynirler, iyi pişmemiş etler, sosis/salam gibi şarküteri ürünleri ve iyi yıkanmamış çiğ sebzelerden bulaşabiliyor.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Kimler Yüksek Risk Altında? Menenjit ve Sepsis Tehlikesi",
        pageImage: "img/listeria-besin-zehirlenmesi.jpg",
        content: `
          <p class="lead"><strong>Gebeler, Yeni Doğanlar ve Yaşlılar İçin Ölümcül Olabilir</strong></p>
          <p>Prof. Dr. Davut Özdemir, sağlıklı bireylerde hafif ateş ve ishal ile geçen enfeksiyonun risk gruplarında ağır tablolara yol açtığını vurguladı:</p>
          <ul style="margin: 1rem 0 1.5rem 1.5rem; line-height: 1.8;">
            <li>🤰 <strong>Gebelerde Sinsi Seyir:</strong> Grip benzeri belirtiler veya idrar yolu enfeksiyonu gibi başlayıp bebekte erken doğum veya düşüğe neden olabilir.</li>
            <li>👶 <strong>Yeni Doğanlarda:</strong> Doğum sırasında anneden geçerek ölümcül menenjit ve sepsise yol açabilir.</li>
            <li>👴 <strong>Yaşlılar ve Kanser Hastalarında:</strong> Bilinç bulanıklığı, şiddetli baş ağrısı, karaciğer ve kemik iltihapları görülebilir.</li>
          </ul>
          <p>Hastalığın tedavisinde vücudun tutulan bölgesine göre 2 ila 4 haftalık hedefe yönelik antibiyotik protokolü uygulanıyor.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Prof. Dr. Özdemir'den Altın Kural: 'Kaynat, Pişir, Soy'",
        pageImage: "img/listeria-besin-zehirlenmesi.jpg",
        content: `
          <p class="lead"><strong>Gıda Zehirlenmelerine Karşı Alınması Gereken 7 Temel Önlem</strong></p>
          <p>Prof. Dr. Davut Özdemir, mutfakta uygulanacak basit ama hayati hijyen kurallarını şöyle sıraladı:</p>
          <ol style="margin: 1rem 0 1.5rem 1.5rem; line-height: 1.8;">
            <li>Eller yemek hazırlamadan önce ve sonra en az 20 saniye sabunla yıkanmalı.</li>
            <li>Açıkta veya kaynağı belirsiz çiğ süt ve peynir tüketilmemeli, güvenilir ambalajlı ürünler seçilmeli.</li>
            <li>Çiğ sebze ve meyveler kesilmeden ve soyulmadan önce bol akan su altında yıkanmalı.</li>
            <li>Et ve tavuk ürünleri pembe kalmayacak şekilde tam pişirilmeli.</li>
            <li>Buzdolabına dökülen et ve süt suları bekletilmeden sıcak sabunlu suyla temizlenmeli.</li>
            <li>Kapalı ambalajlı veya kaynatılmış içme suları tercih edilmeli.</li>
          </ol>
          <p>Özdemir, <strong>"Kaynat, pişir, soy"</strong> kuralının tüm gıda kaynaklı enfeksiyonlara karşı en güçlü kalkan olduğunu belirtti.</p>
        `
      }
    ]
  },
  {
    id: 27,
    headlineNumber: 11,
    title: "Çerkezköy Belediye Başkan Yardımcısı Yunus Erçin Ameliyat Sonrası Sağlığına Kavuştu!",
    spot: "Çerkezköy Belediye Başkan Yardımcısı Yunus Erçin, Özel İrmet Hastanesi'nde Genel Cerrahi Uzmanı Dr. Hüsamettin Bayraktar tarafından gerçekleştirilen başarılı cerrahi operasyonun ardından taburcu olarak sağlığına kavuştu.",
    category: "GÜNDEM & SAĞLIK",
    categorySlug: "gundem",
    location: "Tekirdağ / Çerkezköy",
    badgeColor: "red",
    date: "28 Ağustos 2026 - 21:50",
    readTime: "3 dk",
    views: 78900,
    likes: 5420,
    reactions: { like: 3200, heart: 1850, clap: 1620, thinking: 45, angry: 2 },
    socialPosts: [
      {
        user: "Çerkezköy Gündem",
        handle: "@CerkezkoyHaber",
        avatar: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Çerkezköy Belediye Başkan Yardımcımız Yunus Erçin'e geçmiş olsun dileklerimizi iletiyor, başarılı operasyonu gerçekleştiren İrmet Hastanesi hekimlerine teşekkür ediyoruz. 💐🏥 #Çerkezköy",
        time: "15 dk önce",
        likes: 1950,
        shares: 540
      },
      {
        user: "Trakya Yerel Yönetimler",
        handle: "@TrakyaBelediye",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Başarılı ameliyat sonrası sağlığına kavuşan Çerkezköy Belediye Başkan Yardımcısı Yunus Erçin'e geçmiş olsun diyor, en kısa sürede görevinin başında görmeyi diliyoruz. 🍀",
        time: "35 dk önce",
        likes: 1480,
        shares: 290
      }
    ],
    comments: [
      {
        id: 2701,
        author: "Murat Güven",
        city: "Çerkezköy / Bağlık Mah.",
        time: "10 dk önce",
        content: "Yunus Başkanımıza çok büyük geçmiş olsun. İrmet Hastanesi'nin tecrübeli cerrahları sayesinde sağlığına kavuşmasına çok sevindik. Allah şifalar versin.",
        likes: 156
      },
      {
        id: 2702,
        author: "Selma Aydın",
        city: "Çerkezköy / Gazi Mustafa Kemal Paşa",
        time: "25 dk önce",
        content: "Belediyemizin çalışkan başkan yardımcısına acil şifalar diliyorum. Dualarımız sizinle.",
        likes: 112
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Yerel Yönetim & Sağlık Muhabiri",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/yunus-ercin-irmet-hastanesi.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "İrmet Hastanesi'nde Başarılı Operasyon",
        pageImage: "img/yunus-ercin-irmet-hastanesi.jpg",
        content: `
          <p class="lead"><strong>Çerkezköy Belediye Başkan Yardımcısı Yunus Erçin, Özel İrmet Hastanesi’nde gerçekleştirilen başarılı cerrahi operasyonun ardından sağlığına kavuştu.</strong></p>
          <p>Genel Cerrahi Uzmanı <strong>Dr. Hüsamettin Bayraktar</strong> tarafından gerçekleştirilen ameliyatın ardından gerekli tedavi ve takip süreci tamamlanan Yunus Erçin’in genel sağlık durumunun oldukça iyi olduğu öğrenildi.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Başarılı bir operasyon geçiren Başkan Yardımcımız Yunus Erçin'in sağlık durumu gayet iyi, tedavi süreci tamamlandı ve taburcu aşamasına gelindi."</p>
            <span>- Özel İrmet Hastanesi Başhekimliği Açıklaması</span>
          </div>
          <p>Erçin'in ameliyat haberinin ardından siyaset, iş dünyası ve sivil toplum kuruluşlarından çok sayıda geçmiş olsun mesajı iletildi.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Op. Dr. İrfan Tombalak'tan Ziyaret",
        pageImage: "img/yunus-ercin-irmet-hastanesi.jpg",
        content: `
          <p class="lead"><strong>Hastane Yönetiminden Anlamlı Geçmiş Olsun Ziyareti</strong></p>
          <p>İrmet Hastanesi Yönetim Kurulu Başkanı <strong>Op. Dr. İrfan Tombalak</strong> ve hastane üst düzey yöneticileri, tedavi sürecinin ardından Yunus Erçin’i odasında ziyaret etti.</p>
          <p>Gerçekleştirilen samimi ziyarette Başkan Yardımcısı Erçin’e geçmiş olsun dilekleri iletilirken, taburcu süreci ve istirahat dönemi hakkında detaylı bilgi paylaşıldı.</p>
          <p>Op. Dr. İrfan Tombalak ve hastane yönetimi, Erçin'e sağlıklı, uzun ve başarılı bir çalışma hayatı temennisinde bulundu.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Yunus Erçin'den Teşekkür Mesajı",
        pageImage: "img/yunus-ercin-irmet-hastanesi.jpg",
        content: `
          <p class="lead"><strong>"Tüm Sağlık Çalışanlarımıza ve Arayan Hemşehrilerime Teşekkür Ederim"</strong></p>
          <p>Başarılı geçen cerrahi müdahalenin ardından yeniden sağlığına kavuşan Çerkezköy Belediye Başkan Yardımcısı <strong>Yunus Erçin</strong>, ameliyatı gerçekleştiren Dr. Hüsamettin Bayraktar'a, nazik ziyaretlerinden ötürü Op. Dr. İrfan Tombalak ve tüm İrmet Hastanesi sağlık personeline teşekkürlerini sundu.</p>
          <p>Erçin, kısa bir istirahat sürecinin ardından Çerkezköy halkına hizmet etmek üzere görevinin başına döneceğini belirtti.</p>
        `
      }
    ]
  },
  {
    id: 26,
    headlineNumber: 12,
    title: "ÇOSB Kapaklı Devlet Hastanesi Bölge Sağlığının Yükünü Omuzluyor: 115 Yatak, 38 Poliklinik ve 5 Ameliyathane!",
    spot: "Çerkezköy Organize Sanayi Bölgesi (ÇOSB) tarafından Kapaklı’ya kazandırılan ÇOSB Kapaklı Devlet Hastanesi; 115 yatak kapasitesi, 38 polikliniği, 5 tam donanımlı ameliyathanesi, yoğun bakım ve endoskopi üniteleriyle bölgeye şifa dağıtıyor.",
    category: "SAĞLIK & HİZMET",
    categorySlug: "saglik",
    location: "Tekirdağ / Kapaklı",
    badgeColor: "blue",
    date: "28 Ağustos 2026 - 21:45",
    readTime: "4 dk",
    views: 91200,
    likes: 6840,
    reactions: { like: 4100, heart: 2400, clap: 1850, thinking: 90, angry: 8 },
    socialPosts: [
      {
        user: "Kapaklı Sağlık Gündemi",
        handle: "@KapakliSaglik",
        avatar: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "ÇOSB Kapaklı Devlet Hastanesi'nin modern altyapısı ve yeni branşları Kapaklı ve Çerkezköy halkı için dev bir kazanım oldu. Emeği geçen ÇOSB yönetimine ve hekimlerimize teşekkürler. 🏥🩺 #Kapaklı #ÇOSB",
        time: "20 dk önce",
        likes: 2150,
        shares: 730
      },
      {
        user: "Trakya Sanayi & Sağlık",
        handle: "@TrakyaGuncel",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Sanayi kenti Kapaklı'da 64 bin metrekarelik dev hastane kompleksiyle sağlık hizmetlerine erişim kolaylaştı. 5 ameliyathane ve 38 poliklinik 7/24 hizmette! 💉",
        time: "45 dk önce",
        likes: 1620,
        shares: 380
      }
    ],
    comments: [
      {
        id: 2601,
        author: "Hasan Çetin",
        city: "Kapaklı / İsmetpaşa",
        time: "15 dk önce",
        content: "Eskiden muayene ve ameliyat için çevre il ve ilçelere gitmek zorunda kalıyorduk. Yeni binada doktorlarımız çok ilgili, randevular çok rahat. Kapaklı'mıza çok yakıştı.",
        likes: 184
      },
      {
        id: 2602,
        author: "Ayşe Demirkan",
        city: "Çerkezköy / Kızılpınar",
        time: "30 dk önce",
        content: "Gebe okulu ve doğumhane hizmetleri harika. ÇOSB sanayicilerine ve Sağlık Bakanlığı'na bu devasa eser için teşekkür ederiz.",
        likes: 142
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Sağlık, Sanayi & Bölge Muhabiri",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/cosb-kapakli-devlet-hastanesi.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "ÇOSB'den Kapaklı'ya Dev Sağlık Kompleksi",
        pageImage: "img/cosb-kapakli-devlet-hastanesi.jpg",
        content: `
          <p class="lead"><strong>Çerkezköy Organize Sanayi Bölgesi (ÇOSB) tarafından Kapaklı’ya kazandırılan ÇOSB Kapaklı Devlet Hastanesi, yeni modern hizmet binasında bölge halkına geniş bir yelpazede sağlık hizmeti sunmaya devam ediyor.</strong></p>
          <p>Toplam <strong>64 bin 636 metrekare arsa alanı</strong> ve <strong>19 bin 708 metrekare kapalı alanı</strong> bulunan hastane; geniş otopark kapasitesi, modern mimarisi ve güçlü tıbbi kadrosuyla Tekirdağ'ın en önemli sağlık merkezlerinden biri haline geldi.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"115 yatak kapasitesi, 38 polikliniği ve 5 tam donanımlı ameliyathanesiyle ÇOSB Kapaklı Devlet Hastanesi, yalnızca Kapaklı'nın değil tüm bölgenin sağlık yükünü omuzluyor."</p>
            <span>- Sağlık Bakanlığı & Tekirdağ İl Sağlık Müdürlüğü Raporu</span>
          </div>
          <p>Hastanenin kurumsal kadrosunda Dahiliye'den Kardiyoloji'ye, Genel Cerrahi'den Ortopedi'ye kadar <strong>39 uzman hekim</strong> kesintisiz görev yapıyor.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "24 Saat Acil Müdahale ve Cerrahi Kapasite",
        pageImage: "img/cosb-kapakli-devlet-hastanesi.jpg",
        content: `
          <p class="lead"><strong>38 Poliklinik ve 5 Ameliyathanede İleri Tıp Hizmetleri</strong></p>
          <p>Hastanede Dahiliye, Fiziksel Tıp ve Rehabilitasyon, Ortopedi, Nöroloji, Kardiyoloji, KBB, Enfeksiyon, Genel Cerrahi, Dermatoloji, Çocuk Sağlığı, Diş, Üroloji, Göz ve Göğüs Hastalıkları branşlarında hasta kabulü yapılıyor.</p>
          <p><strong>24 Saat Kesintisiz Acil Servis:</strong></p>
          <ul style="margin: 1rem 0 1.5rem 1.5rem; line-height: 1.8;">
            <li>🚑 <strong>16 Yataklı Yetişkin & 6 Yataklı Çocuk</strong> Müşahede Alanı</li>
            <li>🩺 Resüsitasyon (Yeniden Canlandırma) ve Acil Müdahale Odası</li>
            <li>💉 Alçı, Aşı, Psikoteknik ve Acil Obstetri Üniteleri</li>
          </ul>
          <p>Hastanede bulunan <strong>5 tam donanımlı ameliyathanede</strong> Genel Cerrahi, Ortopedi ve Kadın Doğum operasyonları başarıyla gerçekleştiriliyor.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Yoğun Bakım, Endoskopi ve Anne Dostu Doğumhane",
        pageImage: "img/cosb-kapakli-devlet-hastanesi.jpg",
        content: `
          <p class="lead"><strong>Yoğun Bakımdan Palyatife Özellikli Sağlık Hizmetleri</strong></p>
          <p>ÇOSB Kapaklı Devlet Hastanesi bünyesinde 1. ve 2. seviye erişkin yoğun bakım, <strong>yenidoğan yoğun bakım</strong>, palyatif bakım merkezi, diyaliz ünitesi, evde sağlık hizmetleri ve KBRN birimi aktif olarak hizmet veriyor.</p>
          <p>Ayrıca 2026 yılı itibarıyla hizmete giren <strong>Endoskopi Ünitesi</strong>'nde gastroskopi ve kolonoskopi işlemleri ileri teknoloji cihazlarla uygulanıyor. "Anne Dostu Hastane" vizyonuyla hizmet veren doğumhanede son aylarda yüzlerce sağlıklı doğum gerçekleştirildi.</p>
        `
      }
    ]
  },
  {
    id: 25,
    headlineNumber: 13,
    title: "Marmaraereğlisi'nde 30 Ağustos Zafer Coşkusu: Fener Alayı, Cüneyt Şentürk ve Lerzan Mutlu Konserleri!",
    spot: "Marmaraereğlisi Belediyesi, 30 Ağustos Zafer Bayramı’nın 104. yıl dönümünü Yeniçiftlik'te düzenlenecek dev fener alayı, Cüneyt Şentürk ve Lerzan Mutlu konserlerinin yer aldığı görkemli programla kutlayacak.",
    category: "KÜLTÜR & YAŞAM",
    categorySlug: "yasam",
    location: "Tekirdağ / Marmaraereğlisi",
    badgeColor: "red",
    date: "28 Ağustos 2026 - 01:15",
    readTime: "3 dk",
    views: 86400,
    likes: 6420,
    reactions: { like: 3400, heart: 2850, clap: 1980, thinking: 120, angry: 10 },
    socialPosts: [
      {
        user: "Marmaraereğlisi Belediyesi",
        handle: "@MarmaraereglisiBel",
        avatar: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "30 Ağustos Zafer Bayramımızın 104. yılını Yeniçiftlik'te fener alayı ve Cüneyt Şentürk ile Lerzan Mutlu konserleriyle coşkuyla kutluyoruz! Tüm hemşehrilerimiz davetlidir. 🇹🇷🎉 #30Ağustos #Marmaraereğlisi",
        time: "30 dk önce",
        likes: 2450,
        shares: 890
      },
      {
        user: "Trakya Kültür Sanat",
        handle: "@TrakyaEtkinlik",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Büyük Zafer'in 104. yılında Trakya sahillerinde bayram coşkusu yaşanacak. Yeniçiftlik Meydanı'ndaki fener alayı ve konserler kaçmaz! 🇹🇷",
        time: "1 saat önce",
        likes: 1780,
        shares: 420
      }
    ],
    comments: [
      {
        id: 2501,
        author: "Merve Çelik",
        city: "Marmaraereğlisi / Yeniçiftlik",
        time: "25 dk önce",
        content: "Yeniçiftlik'te her yıl fener alayı muhteşem geçiyor. Bu sene Cüneyt Şentürk ve Lerzan Mutlu konserleriyle tam bir bayram havası esecek, ailecek oradayız!",
        likes: 165
      },
      {
        id: 2502,
        author: "Kemal Yılmaz",
        city: "Tekirdağ / Süleymanpaşa",
        time: "45 dk önce",
        content: "Mustafa Onur Bozkurter Başkanımıza ve belediyemize bu anlamlı kutlama programı için teşekkür ederiz. 30 Ağustos ruhu Trakya'da sonsuza dek yaşayacak.",
        likes: 134
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Kültür, Sanat & Yerel Yönetimler Muhabiri",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/marmaraereglisi-30-agustos.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "30 Ağustos Zafer Bayramı 104. Yıl Dönümü Programı",
        pageImage: "img/marmaraereglisi-30-agustos.jpg",
        content: `
          <p class="lead"><strong>Marmaraereğlisi Belediyesi, 30 Ağustos Zafer Bayramı’nın 104. yıl dönümünü fener alayı ve dev konserlerin yer aldığı muhteşem bir programla kutlamaya hazırlanıyor.</strong></p>
          <p>Marmaraereğlisi Belediye Başkanı <strong>Mustafa Onur Bozkurter</strong>’in ev sahipliğinde gerçekleştirilecek kutlama programı, 30 Ağustos Cumartesi akşamı ilçenin sahil ve turizm merkezi <strong>Yeniçiftlik</strong>’te düzenlenecek.</p>
          <div class="article-quote">
            <i class="fa-solid fa-quote-left"></i>
            <p>"Gazi Mustafa Kemal Atatürk ve silah arkadaşlarının milletimize armağan ettiği Büyük Zafer'in 104. gurur yılını Yeniçiftlik sahilimizde omuz omuza, meşalelerle kutlayacağız."</p>
            <span>- Mustafa Onur Bozkurter, Marmaraereğlisi Belediye Başkanı</span>
          </div>
          <p>Kutlama etkinliklerine Tekirdağ, Çorlu, Çerkezköy ve çevre ilçelerden binlerce vatandaşın ve yazlıkçı misafirlerin katılması bekleniyor.</p>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Esnek Haber İçi Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Fener Alayı Güzergahı ve Konser Saatleri",
        pageImage: "img/marmaraereglisi-30-agustos.jpg",
        content: `
          <p class="lead"><strong>Yeniçiftlik Caddelerinde Fener Alayı ve Meydanda Müzik Şöleni</strong></p>
          <p>Kutlama etkinlikleri kapsamında ilk olarak saat <strong>20.00’de</strong> Yeniçiftlik Mustafa Kemal Atatürk Caddesi Migros önünden başlayacak dev <strong>Fener Alayı</strong> yürüyüşü gerçekleştirilecek. Binlerce vatandaş Türk bayrakları ve meşalelerle marşlar eşliğinde meydana yürüyecek.</p>
          <p>Fener alayının ardından Yeniçiftlik Meydanı’nda ücretsiz halk konserlerine geçilecek:</p>
          <ul style="margin: 1rem 0 1.5rem 1.5rem; line-height: 1.8;">
            <li>🎵 <strong>Saat 21.15:</strong> Balkan ve Trakya ezgileriyle tanınan sevilen sanatçı <strong>Cüneyt Şentürk</strong> sahne alacak.</li>
            <li>🎤 <strong>Saat 22.15:</strong> Ünlü pop sanatçısı <strong>Lerzan Mutlu</strong> en sevilen şarkılarını Zafer Bayramı coşkusuyla seslendirecek.</li>
          </ul>
          <div class="in-article-ad"><span class="ad-label">SPONSORLU BAĞLANTI</span><div class="ad-content-box">Google AdSense Haber İçi Görüntülü Reklamı (ca-pub-5030743781658996)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Başkan Bozkurter'den Tüm Trakya Halkına Davet",
        pageImage: "img/marmaraereglisi-30-agustos.jpg",
        content: `
          <p class="lead"><strong>"30 Ağustos Coşkusunu Hep Birlikte Yaşayalım"</strong></p>
          <p>Marmaraereğlisi Belediyesi, 30 Ağustos Zafer Bayramı’nın coşkusunu, birlik ve beraberliğini hep birlikte yaşamak isteyen tüm vatandaşları, sivil toplum kuruluşlarını ve basın mensuplarını Yeniçiftlik'teki kutlama programına davet etti.</p>
          <p>Program süresince vatandaşların etkinlik alanına rahat ulaşabilmesi için belediye tarafından ilçe merkezinden ve çevre mahallelerden ücretsiz ring seferleri düzenleneceği bildirildi.</p>
        `
      }
    ]
  },
  {
    id: 23,
    headlineNumber: 14,
    title: "Ergene'de Sosyal Alanlara Çirkin Saldırı: Çocuk Parkları ve Salıncaklar Hedef Alındı!",
    spot: "Ergene Belediyesi tarafından çocukların ve ailelerin güvenle vakit geçirmesi için kazandırılan Sağlık Mahallesi çocuk parkındaki oyun grupları, salıncaklar ve zemin kaplamaları kimliği belirsiz kişilerce tahrip edildi.",
    category: "GÜNDEM & ASAYİŞ",
    categorySlug: "gundem",
    location: "Tekirdağ / Ergene",
    badgeColor: "red",
    date: "27 Ağustos 2026 - 22:58",
    readTime: "4 dk",
    views: 94100,
    likes: 5120,
    reactions: { like: 2100, heart: 320, clap: 180, thinking: 450, angry: 2890 },
    socialPosts: [
      {
        user: "Ergene Haberleri",
        handle: "@ErgeneGundem",
        avatar: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Sağlık Mahallesi'ndeki çocuk parkına yapılan bu vandallık kabul edilemez! Çocuklarımızın oyun alanlarına zarar verenler bir an önce tespit edilmeli. 🛑🚸 #Ergene",
        time: "15 dk önce",
        likes: 1840,
        shares: 620
      },
      {
        user: "Trakya Çevre ve Yaşam",
        handle: "@TrakyaCevre",
        avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Kamusal alanlar hepimizin ortak malıdır. Parklara sahip çıkalım, şüpheli durumları hemen güvenlik güçlerine bildirelim. 🌳🚨",
        time: "40 dk önce",
        likes: 1250,
        shares: 310
      }
    ],
    comments: [
      {
        id: 2301,
        author: "Fatma Teyze",
        city: "Ergene / Sağlık Mah.",
        time: "20 dk önce",
        content: "Torunlarımızı her gün bu parka getiriyoruz. Salıncakları kırmışlar, kauçuk zeminleri sökmüşler. Bunu yapanların vicdanı yok mu?",
        likes: 142
      },
      {
        id: 2302,
        author: "Ahmet Demir",
        city: "Ergene / Yeşiltepe",
        time: "35 dk önce",
        content: "Belediyemizin ve emniyetimizin güvenlik kameralarını inceleyip sorumlulara en ağır cezayı vermesini bekliyoruz.",
        likes: 98
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Asayiş & Yerel Yönetim Muhabiri",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/ergene-park-vandalizm.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Sağlık Mahallesi Çocuk Parkında Büyük Hasar",
        pageImage: "img/ergene-park-vandalizm.jpg",
        content: `
          <p class="lead">Tekirdağ'ın Ergene ilçesinde vatandaşların ve çocukların güvenli şekilde kullanabilmesi amacıyla oluşturulan ortak kullanım alanlarına yönelik <strong>çirkin saldırılar ve vandalizm</strong> devam ediyor.</p>
          
          <p>Son olarak Sağlık Mahallesi'nde yer alan ve mahalle çocuklarının en uğrak noktası olan çocuk oyun parkında; kaydıraklar kırıldı, salıncak zincirleri koparıldı ve darbe emici kauçuk zemin kaplamaları yerinden sökülerek kullanılamaz hale getirildi.</p>
          
          <p>Sabah saatlerinde çocuklarıyla parka gelen mahalle sakinleri karşılaştıkları manzara karşısında büyük üzüntü ve öfke yaşadı.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM (SAYFA 1)</span><div class="ad-content-box"><i class="fa-solid fa-rectangle-ad"></i> Google AdSense Sayfa İçi Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Olay Dosyası ve Güvenlik Tedbirleri:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">📹 Güvenlik Kameraları ve Emniyetin Başlattığı Hukuki Süreç</span><span class="qa-link-badge">İnceleme Detayı (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">🛠️ Ergene Belediyesi'nden Onarım ve Koruma Seferberliği</span><span class="qa-link-badge">Yenileme Planı (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Kameralar İnceleniyor: Hukuki Süreç Başlatıldı",
        pageImage: "img/ergene-park-vandalizm.jpg",
        content: `
          <p class="lead"><strong>'Kamusal Mala Zarar Vermek Suçtur'</strong></p>
          
          <p>Yaşanan olayın ardından Ergene Belediyesi Park ve Bahçeler Müdürlüğü ile Zabıta ekipleri parkta kapsamlı hasar tespit çalışması gerçekleştirdi. Emniyet güçleri, park çevresindeki KGYS ve güvenlik kamera kayıtlarını mercek altına aldı.</p>
          
          <p>Belediye yetkilileri, tüyü bitmemiş yetimin hakkıyla yapılan kamu yatırımlarına zarar veren şahısların tespit edilerek haklarında <strong>Kamu Malına Zarar Verme</strong> suçundan Cumhuriyet Savcılığı'na suç duyurusunda bulunulacağını bildirdi.</p>

          <div class="in-article-ad" style="border-color: var(--news-red);"><span class="ad-label" style="color: var(--news-red);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Ergene Halkına Birlik ve Dayanışma Çağrısı",
        pageImage: "img/ergene-park-vandalizm.jpg",
        content: `
          <p class="lead"><strong>Parklar En Kısa Sürede Yenilenecek</strong></p>
          
          <p>Ergene Belediyesi ekipleri, çocukların mağduriyet yaşamaması adına tahrip edilen oyun gruplarının bakım, onarım ve yenileme çalışmalarını derhal başlattı. Mahalle muhtarları ve sivil toplum kuruluşları da ortak bir açıklama yaparak tüm vatandaşları ortak yaşam alanlarına sahip çıkmaya davet etti.</p>
        `
      }
    ]
  },
  {
    id: 24,
    headlineNumber: 15,
    title: "Tekirdağ Süleymanpaşa'da Ana İçme Suyu Borusu Patladı: Tonlarca Su Boşa Aktı!",
    spot: "Süleymanpaşa'nın en işlek caddelerinden Hükümet Caddesi'nde yer altından geçen ana şebeke borusunun patlaması sonucu tonlarca içme suyu caddeye aktı. Kuraklık döneminde yaşanan israfa vatandaşlar tepki gösterdi.",
    category: "YAŞAM & GÜNDEM",
    categorySlug: "yasam",
    location: "Tekirdağ / Süleymanpaşa",
    badgeColor: "blue",
    date: "27 Ağustos 2026 - 22:50",
    readTime: "4 dk",
    views: 88700,
    likes: 4210,
    reactions: { like: 1890, heart: 240, clap: 110, thinking: 740, angry: 2150 },
    socialPosts: [
      {
        user: "Tekirdağ Yerel Ses",
        handle: "@TekirdagHaber",
        avatar: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Hükümet Caddesi'nde 2 gündür şebeke suyu boşa akıyor. Barajlardaki su seviyesinin kritik olduğu günlerde bu israf can yakıyor! 🚰💧 #Tekirdag #TESKI",
        time: "30 dk önce",
        likes: 1420,
        shares: 480
      }
    ],
    comments: [
      {
        id: 2401,
        author: "Mehmet Usta",
        city: "Süleymanpaşa / Hükümet Cad.",
        time: "15 dk önce",
        content: "Dükkanımızın önünden nehir gibi su aktı. Kaç kez bildirdik ama ekiplerin acil müdahale etmesi gerekirdi.",
        likes: 112
      }
    ],
    author: {
      name: "Murat Çelik",
      title: "Haber Müdürü",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/tekirdag-su-patlagi.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Şehrin Kalbinde Su İsrafı: Hükümet Caddesi Göle Döndü",
        pageImage: "img/tekirdag-su-patlagi.jpg",
        content: `
          <p class="lead">Tekirdağ'ın merkez ilçesi Süleymanpaşa'da kentin en işlek noktalarından biri olan <strong>Hükümet Caddesi</strong>'nde yer altından geçen içme suyu ana iletim hattında patlama meydana geldi.</p>
          
          <p>Tekirdağ Büyükşehir Belediyesi'ne ait Tek Kafe'nin hemen yanında kaldırım altındaki patlak nedeniyle caddeye oluk oluk temiz içme suyu taştı. Yaklaşık 2 gündür kontrol altına alınamayan sızıntı sonucu tonlarca su kanalizasyona akıp heba oldu.</p>
          
          <p>Caddeden geçen araçlar ve yayalar göle dönen yolda yürümekte güçlük çekerken, çevre esnafı duruma sert tepki gösterdi.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Kuraklık Tehdidi Altında Su İsrafına Tepki",
        pageImage: "img/tekirdag-su-patlagi.jpg",
        content: `
          <p class="lead"><strong>'Her Damla Su Altın Değerindeyken Bu Görüntü Kabul Edilemez'</strong></p>
          
          <p>Trakya genelinde ve Tekirdağ barajlarında su doluluk oranlarının düşüş gösterdiği ve uzmanların tasarruf çağrısı yaptığı bir dönemde yaşanan arıza, bölge halkını isyan ettirdi.</p>
          
          <p>Vatandaşlar, Tekirdağ Su ve Kanalizasyon İdaresi'ne (TESKİ) çağrıda bulunarak şehrin merkezindeki bu kronik arızaların kalıcı olarak onarılmasını istedi.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Altyapı Yenileme ve Acil Eylem Çağrısı",
        pageImage: "img/tekirdag-su-patlagi.jpg",
        content: `
          <p class="lead"><strong>Kayıp-Kaçak Oranının Düşürülmesi Şart</strong></p>
          
          <p>Uzmanlar, Trakya'nın yeraltı ve yerüstü su rezervlerinin korunması için eskiyen şebeke borularının modern basınç kontrollü borularla yenilenmesi ve akıllı sayaç sistemlerine geçilmesi gerektiğini vurguladı.</p>
        `
      }
    ]
  },
  {
    id: 20,
    headlineNumber: 16,
    title: "Küllerinden Yeniden Doğan Takım: Marmaraereğlisi Belediye Spor Şampiyon!",
    spot: "Bir dönem BAL ligine yükselmesine rağmen belediye desteği kesilip kapanma noktasına gelen Marmaraereğlisi Belediye Spor, Başkan Mustafa Onur Bozkurter'in hamlesiyle KaracakılavuzSpor'u 4-2 devirerek şampiyonluk kupasını kaldırdı.",
    category: "SPOR",
    categorySlug: "spor",
    location: "Tekirdağ / Marmaraereğlisi",
    badgeColor: "emerald",
    date: "27 Ağustos 2026 - 01:30",
    readTime: "4 dk",
    views: 89600,
    likes: 4720,
    reactions: { like: 3120, heart: 2450, clap: 1890, thinking: 30, angry: 2 },
    socialPosts: [
      {
        user: "Marmaraereğlisi Belediye Spor",
        handle: "@marmaraereglisibldspor",
        avatar: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Küllerimizden doğduk, sözümüzü tuttuk! Sezonu şampiyon olarak tamamlayıp kupamızı ilçemize armağan ettik. O sene bu sene, bundan sonra her sene! 🏆⚽💙💛 #SampiyonEregli",
        time: "20 dk önce",
        likes: 1980,
        shares: 540
      },
      {
        user: "Tekirdağ Amatör Futbol Dünyası",
        handle: "@TekirdagAmator",
        avatar: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Kapanma tehlikesi atlatan bir kulübün böyle muazzam bir kenetlenmeyle şampiyon olması Trakya futboluna ilham verdi. Tebrikler Marmaraereğlisi! 👏🔥",
        time: "45 dk önce",
        likes: 1450,
        shares: 310
      }
    ],
    comments: [
      {
        id: 2001,
        author: "Burak Ereğlili",
        city: "Marmaraereğlisi / Merkez",
        time: "15 dk önce",
        content: "Tribünlerde nefes kesen bir 90 dakika yaşadık. Cevdet Hoca ve futbolcularımızın yüreğine sağlık, Başkanımız Onur Bozkurter'e sonsuz teşekkürler.",
        likes: 138
      }
    ],
    author: {
      name: "Abdurrahim YILDIRIM",
      title: "Spor Muhabiri",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/marmaraereglisi-sampiyon.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "4-2'lik Zafer ve Görkemli Kupa Töreni",
        pageImage: "img/marmaraereglisi-sampiyon.jpg",
        content: `
          <p class="lead">Bir dönem Bölgesel Amatör Lig'e (BAL) yükselmesine rağmen belediye yönetiminin desteğini çekmesiyle ligden çekilen ve kaderine terk edilip kapanma noktasına gelen <strong>Marmaraereğlisi Belediye Spor</strong>, muhteşem bir geri dönüşe imza atarak şampiyon oldu!</p>
          
          <p>Ligin son haftasında şampiyonluk yolundaki kritik karşılaşmada KaracakılavuzSpor ile karşı karşıya gelen mavi-beyazlılar, 90 dakika boyunca üstün bir futbol sergileyerek sahadan <strong>4-2 galip</strong> ayrıldı ve sezonu şampiyonluk kupasıyla taçlandırdı.</p>
          
          <p>Protokol tribünü ve stadı dolduran binlerce taraftarın katıldığı kupa töreninde Tekirdağ Milletvekili İlhami Özcan Aygun, Marmaraereğlisi Kaymakamı Gökhan Gürbüzerol, Çorlu Belediye Başkanı Ahmet Sarıkurt ve Amatör Spor Kulüpleri Federasyonu Başkanı Ersan Karamehmetoğlu şampiyonluk coşkusuna ortak oldu.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM (SAYFA 1)</span><div class="ad-content-box"><i class="fa-solid fa-rectangle-ad"></i> Google AdSense Spor Sayfa İçi Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Şampiyonluk ve Kulüp Dosyası:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">⚽ Kapanma Noktasından Şampiyonluğa: Teknik Direktör Cevdet Gül'ün Rolü</span><span class="qa-link-badge">Başarı Hikayesi (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">🎙️ Başkan Mustafa Onur Bozkurter: 'O Sene Bu Sene, Bundan Sonra Her Sene!'</span><span class="qa-link-badge">Gelecek Sezon Hedefi (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Kapanma Eşiğinden Şampiyonluk Kürsüsüne",
        pageImage: "img/marmaraereglisi-sampiyon.jpg",
        content: `
          <p class="lead"><strong>Bir Şehrin İnancı ve Teknik Direktör Cevdet Gül'ün Taktik Dehası</strong></p>
          
          <p>Yıllarca sahipsiz bırakılan ve genç takımları dağıtılan kulüp, Belediye Başkanı <strong>Mustafa Onur Bozkurter</strong>'in göreve gelmesiyle birlikte yeniden yapılandırıldı. Tesisler yenilendi, altyapı güçlendirildi ve deneyimli teknik adam Cevdet Gül yönetiminde şampiyonluk kadrosu kuruldu.</p>
          
          <p>Sezon boyunca oynadığı 18 maçta 15 galibiyet alan Marmaraereğlisi temsilcisi, attığı 54 golle ligin en skorer ve en az gol yiyen takımı unvanını elde etti.</p>

          <div class="in-article-ad" style="border-color: var(--news-green);"><span class="ad-label" style="color: var(--news-green);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Başkan Onur Bozkurter: 'O Sene Bu Sene, Bundan Sonra Her Sene!'",
        pageImage: "img/marmaraereglisi-sampiyon.jpg",
        content: `
          <p class="lead"><strong>'Marmaraereğlisi Halkına Sözümüzü Tuttuk'</strong></p>
          
          <p>Kupa töreninde coşkulu kalabalığa hitap eden Marmaraereğlisi Belediye Başkanı Mustafa Onur Bozkurter:</p>
          
          <blockquote style="background: var(--bg-elevated); border-left: 4px solid var(--news-green); padding: 1rem 1.2rem; margin: 1.2rem 0; font-style: italic; color: var(--text-main); line-height: 1.7;">
            "Söz verdiğimiz gibi, Marmaraereğlisi Belediye Spor Kulübümüzü hak ettiği değere kavuşturmanın gururunu yaşıyoruz. Bu başarıda emeği geçen teknik heyetimize, futbolcularımıza ve bizi hiçbir maçta yalnız bırakmayan büyük taraftarımıza teşekkür ediyorum. Bu tarihi zaferi tüm ilçe halkımıza armağan ediyoruz. O sene bu sene, bundan sonra her sene!"
          </blockquote>
        `
      }
    ]
  },
  {
    id: 21,
    headlineNumber: 17,
    title: "Trakya Genelinde Yağmurla Birlikte Çamur Yağdı: Araçlar ve Tarlalar Tozla Kaplandı!",
    spot: "Kuzey Afrika üzerinden gelen yoğun çöl tozu Trakya genelinde yağışla birleşti. Edirne, Tekirdağ ve Çorlu'da sabah araçların üzerini çamur kaplarken oto yıkamacılarda yoğunluk yaşandı.",
    category: "YAŞAM",
    categorySlug: "yasam",
    location: "Tekirdağ / Edirne / Çorlu",
    badgeColor: "yellow",
    date: "27 Ağustos 2026 - 01:25",
    readTime: "3 dk",
    views: 76500,
    likes: 3120,
    reactions: { like: 1890, heart: 420, clap: 310, thinking: 640, angry: 80 },
    socialPosts: [
      {
        user: "Trakya Hava & Doğa",
        handle: "@TrakyaHavaDurumu",
        avatar: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Trakya'da sabah saatlerinde yağan yağmurla birlikte arabaların üzeri tamamen çamur oldu. Afrika tozu etkisini yarından itibaren kaybedecek. 🌧️🚗💨 #TrakyaHava",
        time: "1 saat önce",
        likes: 980,
        shares: 210
      }
    ],
    comments: [
      {
        id: 2101,
        author: "Şaban Yıldız",
        city: "Tekirdağ / Süleymanpaşa",
        time: "30 dk önce",
        content: "Sabah durağa geldiğimizde taksilerin camları tamamen çamur içindeydi. Tüm esnaf temizliğe başladık.",
        likes: 67
      }
    ],
    author: {
      name: "Gündem Trakya Haber Merkezi",
      title: "Çevre & Yaşam Editörü",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/trakya-camur-yagisi.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Afrika Tozu Yağışla Buluştu: Çamur Yağdı",
        pageImage: "img/trakya-camur-yagisi.jpg",
        content: `
          <p class="lead">Tekirdağ, Edirne ve Kırklareli genelinde sabahın erken saatlerinde etkili olan hafif sağanak yağış, atmosferdeki yoğun <strong>toz taşınımı</strong> nedeniyle çamurlu yağışa dönüştü.</p>
          
          <p>Özellikle cadde ve sokaklarda park halinde bulunan binlerce otomobil, balkonlar ve tarım makineleri sarı-kahverengi çamur tabakasıyla kaplandı. Sabah araçlarının başına geçen vatandaşlar şaşkınlık yaşarken, camları temizlemek için yoğun çaba sarf etti.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Oto Yıkamacılarda Yoğunluk & Uzman Uyarıları",
        pageImage: "img/trakya-camur-yagisi.jpg",
        content: `
          <p class="lead"><strong>Oto Yıkamacılarda Sıra Oluştu</strong></p>
          <p>Çamur yağışının ardından oto yıkama istasyonları ve benzinliklerdeki yıkama alanlarında uzun araç kuyrukları oluştu. Sürücüler araçlarının boyasının zarar görmemesi için tazyikli suyla yıkama yaptırdı.</p>
          <p>Meteoroloji uzmanları, toz taşınımının astım ve solunum yolu rahatsızlığı olan vatandaşlar için hassasiyet oluşturabileceğini belirterek uyarılarda bulundu.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Hafta Sonu Hava Durumu Tahmini",
        pageImage: "img/trakya-camur-yagisi.jpg",
        content: `
          <p class="lead"><strong>Toz Taşınımı Ne Zaman Sona Erecek?</strong></p>
          <p>Meteoroloji Genel Müdürlüğü 1. Bölge Tahmin Merkezi verilerine göre, Trakya üzerindeki toz tabakasının kuzeyden gelen serin hava dalgasıyla birlikte yarın öğleden sonra bölgeyi terk etmesi bekleniyor.</p>
        `
      }
    ]
  },
  {
    id: 22,
    headlineNumber: 18,
    title: "Tekirdağ Büyükşehir'den Kadınlara Büyük Destek: 'Birlikte Güçlüyüz' Atölyesi Başlıyor!",
    spot: "Tekirdağ Büyükşehir Belediyesi Çerkezköy Kadın Danışma Merkezi, 'Birlikte Güçlüyüz' sloganıyla 8 haftalık ücretsiz kadın çalışmaları atölyesini başlatıyor. İletişim, haklar ve psikolojik güçlenme hedefleniyor.",
    category: "YAŞAM & EĞİTİM",
    categorySlug: "yasam",
    location: "Tekirdağ / Çerkezköy",
    badgeColor: "purple",
    date: "27 Ağustos 2026 - 01:20",
    readTime: "4 dk",
    views: 64200,
    likes: 3890,
    reactions: { like: 2450, heart: 1980, clap: 1120, thinking: 40, angry: 0 },
    socialPosts: [
      {
        user: "Tekirdağ Büyükşehir Belediyesi",
        handle: "@tekirdagbld",
        avatar: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Çerkezköy Kadın Danışma Merkezimiz 'Birlikte Güçlüyüz' diyerek kadınlarımızın yanında! 8 haftalık ücretsiz atölyelerimize tüm kadınlarımız davetlidir. 🌸💜 #BirlikteGucluyuz #TekirdagKadin",
        time: "2 saat önce",
        likes: 1240,
        shares: 380
      }
    ],
    comments: [
      {
        id: 2201,
        author: "Sevgi Hanım",
        city: "Çerkezköy / Bağlık",
        time: "1 saat önce",
        content: "Kadınların hem psikolojik olarak güçlenmesi hem de haklarını öğrenmesi için çok değerli bir çalışma. Emeği geçenlere teşekkürler.",
        likes: 84
      }
    ],
    author: {
      name: "Abdurrahim YILDIRIM",
      title: "Sosyal Yaşam Muhabiri",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/kadin-calismalari-atolyesi.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Çerkezköy Kadın Danışma Merkezi'nden Anlamlı Proje",
        pageImage: "img/kadin-calismalari-atolyesi.jpg",
        content: `
          <p class="lead">Tekirdağ Büyükşehir Belediyesi Sosyal Hizmetler Dairesi Başkanlığı bünyesinde hizmet veren <strong>Çerkezköy Kadın Danışma Merkezi</strong>, <em>'Birlikte Güçlüyüz'</em> sloganıyla kadın çalışmaları atölyesi projesini hayata geçiriyor.</p>
          
          <p>Yoğun sanayi göçü alan bölgeye yeni taşınmış kadınların kente adaptasyonunu kolaylaştırmak, sosyal dayanışmayı artırmak ve kadınların kişisel gelişimlerine katkı sağlamak amacıyla düzenlenen atölyeler <strong>tamamen ücretsiz</strong> olarak gerçekleştirilecek.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "8 Haftalık Eğitim ve Gelişim Müfredatı",
        pageImage: "img/kadin-calismalari-atolyesi.jpg",
        content: `
          <p class="lead"><strong>Atölyede Hangi Konular İşlenecek?</strong></p>
          <p>Uzman psikologlar ve sosyologlar eşliğinde yürütülecek 8 haftalık program kapsamında:</p>
          <ul style="margin: 0.8rem 0 1.2rem 1.5rem; line-height: 1.8; color: var(--text-muted);">
            <li>Etkili İletişim ve Kendini İfade Etme Becerileri</li>
            <li>Kadın Hakları ve Hukuki Güvenceler</li>
            <li>Toplumsal Cinsiyet Eşitliği ve Aile İçi Denge</li>
            <li>Stres ve Öfke Kontrolü Teknikleri</li>
            <li>Beden Sağlığını Koruyucu Davranışlar ve Psikolojik Dayanıklılık</li>
          </ul>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Başvuru Şartları ve İletişim Hattı",
        pageImage: "img/kadin-calismalari-atolyesi.jpg",
        content: `
          <p class="lead"><strong>Nasıl Başvuru Yapılır?</strong></p>
          <p>18 yaş ve üstü tüm kadınların katılabileceği atölye çalışmalarına kayıt yaptırmak isteyen vatandaşlar, Çerkezköy Kadın Danışma Merkezi'ne bizzat müracaat edebilecek veya <strong>0850 459 34 34 (Dahili 3)</strong> numaralı hattan kayıt oluşturabilecek.</p>
        `
      }
    ]
  },
  {
    id: 19,
    headlineNumber: 19,
    title: "Narin Ailesi Yaptığı Eserleriyle Takdir Topluyor: Çerkezköy'e 8 Derslikli Özden Narin Anaokulu Geliyor!",
    spot: "İnsanlar isimleriyle değil geride bıraktığı eserleriyle ölümsüzleşir sözünü yaşatan Narin Ailesi, 8 bin öğrenciye ulaşan eğitim yatırımlarına Çerkezköy'de Özden Narin Anaokulu'nu ekliyor. Valilikte protokol imzalandı.",
    category: "EĞİTİM & GÜNDEM",
    categorySlug: "gundem",
    location: "Tekirdağ / Çerkezköy",
    badgeColor: "blue",
    date: "27 Ağustos 2026 - 01:15",
    readTime: "5 dk",
    views: 112400,
    likes: 5420,
    reactions: { like: 3450, heart: 2890, clap: 1650, thinking: 45, angry: 2 },
    socialPosts: [
      {
        user: "Tekirdağ Valiliği",
        handle: "@tekirdagvalilik",
        avatar: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Valimiz Recep Soytürk başkanlığında Çerkezköy ilçemize kazandırılacak 8 derslikli Özden Narin Anaokulu protokolü Narin Grup yöneticileriyle imzalandı. Hayırlı olsun. 🏫🎓 #TekirdagEgitim",
        time: "30 dk önce",
        likes: 2150,
        shares: 610
      },
      {
        user: "Çerkezköy Eğitim Gönüllüleri",
        handle: "@CerkezkoyEgitim",
        avatar: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Çerkezköy'ün sanayisinden okul binalarına kadar her taşında emeği olan Narin Ailesi'ne minnettarız. 8 bin gencimizin okuduğu okullara bir yenisi daha ekleniyor. 👏✨",
        time: "1 saat önce",
        likes: 1840,
        shares: 420
      }
    ],
    comments: [
      {
        id: 1901,
        author: "Kemal Öğretmen",
        city: "Çerkezköy / Kızılpınar",
        time: "20 dk önce",
        content: "Çerkezköy'de okul ihtiyacı hızla artan nüfusla birlikte çok kritik bir hal almıştı. Narin Ailesi'nin anaokulu hamlesi evlatlarımız için harika bir kazanım.",
        likes: 186
      },
      {
        id: 1902,
        author: "Fatma Yılmaz",
        city: "Kapaklı",
        time: "40 dk önce",
        content: "Nurullah Narin, Pakize Narin ve Halit Narin okullarında binlerce gencimiz yetişti, meslek sahibi oldu. Allah hayırlarını kabul etsin.",
        likes: 124
      }
    ],
    author: {
      name: "Abdurrahim YILDIRIM",
      title: "Trakya Muhabiri",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/narin-ailesi-egitim.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "8 Bin Öğrenciye Ulaşan Eğitim Yatırımlarına Yeni Halka",
        pageImage: "img/narin-ailesi-egitim.jpg",
        content: `
          <p class="lead"><strong>'İnsanlar isimleriyle değil, geride bıraktıkları eserleriyle ölümsüzleşir'</strong> sözünü en iyi şekilde topluma yaşatan <strong>Narin Ailesi</strong>, eğitime verdiği güçlü destekle kamuoyunun ve Trakya halkının takdirini toplamaya devam ediyor.</p>
          
          <p>Türkiye sanayi ve turizm sektörlerinin köklü temsilcilerinden Narin Ailesi, Tekirdağ'ın Çerkezköy ilçesine kazandıracağı <strong>8 derslikli yeni anaokuluyla</strong> eğitim yatırımlarına bir yenisini daha ekliyor. Millî Eğitime armağan edilecek eğitim yuvasına <strong>'Özden Narin Anaokulu'</strong> adı verilecek.</p>
          
          <p>Tekirdağ Valiliği'nde düzenlenen görkemli protokol imza törenine; <strong>Tekirdağ Valisi Recep Soytürk</strong>, Çerkezköy Kaymakamı Nazmi Günlü, İl Millî Eğitim Müdür Vekili Özgür Parıltı, Çevre, Şehircilik ve İklim Değişikliği İl Müdürü Ali Kemal Atlı, Narin Grup adına Yönetim Kurulu Başkanı <strong>Oya Narin</strong>, Yönetim Kurulu Başkan Yardımcısı <strong>Emre Narin</strong>, Emir Temelli, Eski Devlet Bakanı Ersin Taranoğlu ve İl Millî Eğitim Müdür Yardımcısı Abdullah Nair katıldı.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM (SAYFA 1)</span><div class="ad-content-box"><i class="fa-solid fa-rectangle-ad"></i> Google AdSense Sayfa İçi Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Çerkezköy ve Eğitim Yatırımları Dosyası:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">🏭 1972'den Günümüze: Çerkezköy'ün Sanayi Dönüşümü & 100 Bin m² Arazi</span><span class="qa-link-badge">Tarihçe & Alan (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">🏫 Narin Ailesi ve Türk Tekstil Vakfı'nın Yaptırdığı Tüm Okulların Listesi</span><span class="qa-link-badge">Okul Listesi (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Bir Kasabadan Üretim Üssüne: 100 Bin Metrekarelik Eğitim Alanı",
        pageImage: "img/narin-ailesi-protokol.jpg",
        content: `
          <p class="lead"><strong>1970'lerden Günümüze Uzanan Sanayi ve Sosyal Sorumluluk Vizyonu</strong></p>
          
          <p>1970'li yılların başına kadar köyleriyle birlikte toplam nüfusu yalnızca 14 bin civarında olan Çerkezköy'ün sanayileşme sürecinde <strong>Narin Mensucat</strong> lokomotif bir rol üstlendi. 1972 yılında temeli atılan ve iki yıl içinde üretime başlayan fabrika, ilçede sanayileşmeyi başlatan ilk tesislerden biri olarak Çerkezköy'ün Türkiye'nin üretim üssü haline gelmesine öncülük etti.</p>
          
          <p>Narin Ailesi'nin uzun yıllara yayılan eğitim katkılarının temelini, Çerkezköy'de eğitim amacıyla bağışlanan ve değerlendirilen <strong>yaklaşık 100 bin metrekarelik dev alan</strong> oluşturuyor. Millî Eğitime kazandırılan bu alanlarda Narin Ailesi'nin katkılarıyla çok sayıda lise, ortaokul ve mesleki eğitim kurumları inşa edildi.</p>
          
          <p>Narin Ailesi ayrıca Çerkezköy'e yaklaşık <strong>5.000 kişilik yeni yaşam, sosyal ve ticaret alanları</strong> kazandırmak üzere yeni projelerin hazırlıklarını da sürdürüyor.</p>

          <div class="in-article-ad" style="border-color: var(--news-red);"><span class="ad-label" style="color: var(--news-red);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Oya Narin'in Mesajı & Narin Ailesinin Eğitime Armağan Ettiği 12 Okul",
        pageImage: "img/narin-ailesi-egitim.jpg",
        content: `
          <p class="lead"><strong>Oya Narin: 'Atatürk İlkeleri ve Fırsat Eşitliği ile Gençlerimizi Yarınlara Taşıyoruz'</strong></p>
          
          <p>Törende konuşan Narin Grup Yönetim Kurulu Başkanı <strong>Oya Narin</strong>, Cumhuriyet değerlerine bağlılığın altını çizerek şunları vurguladı:</p>
          
          <blockquote style="background: var(--bg-elevated); border-left: 4px solid var(--news-blue); padding: 1rem 1.2rem; margin: 1.2rem 0; font-style: italic; color: var(--text-main); line-height: 1.7;">
            "Narin Ailesi olarak yatırım anlayışımız, bulunduğumuz coğrafyaya ve ülkemize değer katma ilkesi üzerine kuruludur. Bu, 1920'lerde üretim yapan dedemiz Nurullah Narin ile başlayan, Cumhuriyetimizle neredeyse yaşıt, Atatürk ilke ve inkılaplarıyla şekillenen bir aile ve kurum kültürüdür. Babamız Halit Narin ile güçlenen, bugün üçüncü ve dördüncü kuşakların sahiplendiği bu kültür şirketlerimizin temel taşıdır. Türkiye genelinde yaptırdığımız 12 okulda 8 bin gencimiz eğitim görüyor. Çerkezköy'ün kalbimizdeki yeri her zaman apayrıdır."
          </blockquote>

          <h4 style="color: var(--news-red); margin-top: 1.5rem; font-size: 1.1rem;"><i class="fa-solid fa-graduation-cap"></i> Narin Ailesi Tarafından Eğitime Kazandırılan Okullar:</h4>
          <ul style="margin: 0.8rem 0 1.2rem 1.5rem; line-height: 1.8; color: var(--text-muted);">
            <li><strong>Nurullah Narin Ortaokulu</strong> – Tekirdağ, Çerkezköy</li>
            <li><strong>Pakize Narin Anadolu Lisesi</strong> – Tekirdağ, Çerkezköy</li>
            <li><strong>Çerkezköy Halit Narin Mesleki ve Teknik Anadolu Lisesi</strong> – Tekirdağ, Çerkezköy</li>
            <li><strong>İnci Narin Yerlici İlkokulu</strong> – Tekirdağ, Çerkezköy</li>
            <li><strong>Halit Narin İlköğretim Okulu</strong> – Antalya, Tekirova</li>
            <li><strong>İnci Narin İlköğretim Okulu</strong> – Muğla, Marmaris / Orhaniye</li>
            <li><strong>Nurullah-Pakize Narin İlköğretim Okulu</strong> – Kayseri, Germirli</li>
            <li><strong>Halit Narin Anadolu Turizm Meslek Okulu</strong> – Muğla, Marmaris / İçmeler</li>
            <li><strong>Çerkezköy Türk Tekstil Vakfı Mesleki ve Teknik Anadolu Lisesi</strong> – Tekirdağ, Çerkezköy</li>
            <li><strong>Bolluca Türk Tekstil Vakfı İlköğretim Okulu</strong> – İstanbul, Hadımköy</li>
            <li><strong>T.T.M.İ.S. Halit Narin İlköğretim Okulu</strong> – Adapazarı, Ferizli</li>
            <li><strong>Yalova Meslek Yüksekokulu</strong> – Yalova</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 18,
    headlineNumber: 20,
    title: "Başkan Müge Yıldız Topak Sahaya İndi: 'Üreticimizin Yarasını Birlikte Saracağız!'",
    spot: "Ergene ile Çorlu arasında 900 dekar arazide etkili olan anız yangınının ardından Ergene Belediyesi, zarar gören çiftçiler ve çiftlikler için seferberlik başlattı. Hayvanlar için geçici barınaklar kuruluyor.",
    category: "TRAKYA HABER",
    categorySlug: "trakya",
    location: "Tekirdağ / Ergene & Çorlu",
    badgeColor: "red",
    date: "27 Ağustos 2026 - 01:00",
    readTime: "4 dk",
    views: 94300,
    likes: 4120,
    reactions: { like: 2650, heart: 1890, clap: 980, thinking: 70, angry: 25 },
    socialPosts: [
      {
        user: "Ergene Belediyesi",
        handle: "@ergenebld",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Başkanımız Müge Yıldız Topak yangından zarar gören üreticilerimizi ziyaret ederek çalışmaları yerinde inceledi. 'Ergene büyük bir aile, yaralarımızı el birliğiyle saracağız.' 🚒🌾 #ErgeneBelediyesi #MugeYildizTopak",
        time: "15 dk önce",
        likes: 1840,
        shares: 512
      },
      {
        user: "Trakya Çiftçi Dayanışması",
        handle: "@TrakyaCiftciBirligi",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "Ergene ve Çorlu sınırında çıkan anız yangınında can kaybı olmaması tek tesellimiz. Belediyemizin hayvanlar için geçici barınak desteği üreticimize can suyu oldu. Geçmiş olsun Ergene! 🙏🔥",
        time: "45 dk önce",
        likes: 1250,
        shares: 340
      }
    ],
    comments: [
      {
        id: 1801,
        author: "Mehmet Çiftçi",
        city: "Ergene / Ulaş",
        time: "10 dk önce",
        content: "Gece boyunca itfaiye ve belediye ekipleri canla başla çalıştı. Başkanımıza bizzat gelip çiftçinin yanında durduğu için teşekkür ederiz.",
        likes: 142
      },
      {
        id: 1802,
        author: "Hüseyin Vardar",
        city: "Çorlu / Sağlık Mah.",
        time: "25 dk önce",
        content: "Anız yakmanın ne kadar büyük bir felaket olduğunu bir kez daha gördük. Lütfen tarlalara ateşle yaklaşmayalım, topraklarımızı koruyalım.",
        likes: 98
      }
    ],
    author: {
      name: "Abdurrahim YILDIRIM",
      title: "Trakya Muhabiri",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/ergene-yangin-muge-topak.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "900 Dekar Alanda Yangın & Belediye Seferberliği",
        pageImage: "img/ergene-yangin-muge-topak.jpg",
        content: `
          <p class="lead">Tekirdağ'ın <strong>Ergene ile Çorlu</strong> ilçeleri arasında meydana gelen ve şiddetli rüzgarın etkisiyle geniş bir alanda etkili olan büyük anız yangınının ardından Ergene Belediyesi, yangından zarar gören çiftçiler ve çiftlikler için acil destek ve yardım çalışmalarını başlattı.</p>
          
          <p>Ergene ile Çorlu ilçeleri arasındaki çevre yolu yakınlarında henüz belirlenemeyen bir nedenle başlayan anız yangını, saatte 50 kilometre hıza ulaşan poyraz rüzgarının etkisiyle kısa sürede yayıldı. Yaklaşık <strong>900 dekar</strong> tarım arazisinde etkili olduğu belirlenen yangında ekili alanlar, hasat edilmiş tarlalar ve saman balyaları küle dönerken, alevlerin ulaştığı <strong>4 çiftlik evi</strong> ağır hasar görerek kullanılamaz hale geldi.</p>
          
          <p>Yangının ilk anından itibaren itfaiye ekipleri, iş makineleri ve su tankerleriyle alevlere müdahale eden Ergene Belediyesi ekipleri, facianın sanayi tesislerine ve yerleşim alanlarına sıçramasını engelledi.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM (SAYFA 1)</span><div class="ad-content-box"><i class="fa-solid fa-rectangle-ad"></i> Google AdSense Sayfa İçi Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Yangın ve Destek Çalışmaları:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">🚜 Hayvanlar İçin Geçici Barınaklar ve Yem Desteği</span><span class="qa-link-badge">Barınak Projesi (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">🎙️ Başkan Müge Yıldız Topak'ın Açıklamaları ve Hasar Tespiti</span><span class="qa-link-badge">Başkanın Mesajı (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Hayvanlar Açıkta Kalmasın: Geçici Barınak ve Yem Desteği",
        pageImage: "img/ergene-yangin-saha.jpg",
        content: `
          <p class="lead"><strong>'Hayvanlarımız Açıkta Kalmasın Diye Geçici Barınaklarımızı Hazırlıyoruz!'</strong></p>
          
          <p>Yangında ahırları ve çiftlik binaları zarar gören üreticilerin mağduriyetini gidermek için Ergene Belediyesi Fen İşleri ve Kırsal Hizmetler Müdürlüğü ekipleri sahaya indi. Çiftliklerdeki büyükbaş ve küçükbaş hayvanların güvenli bir şekilde barınabilmesi amacıyla çadır barınaklar ve korunaklı geçici ağıllar kurulmaya başlandı.</p>
          
          <p>Ayrıca yangında tonlarca saman balyası yanan yetiştiricilere acil kaba yem ve yonca takviyesi sağlanarak hayvanların beslenme ihtiyacı güvence altına alındı.</p>

          <div class="in-article-ad" style="border-color: var(--news-red);"><span class="ad-label" style="color: var(--news-red);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Başkan Müge Yıldız Topak: 'Biz Ergene'de Büyük Bir Aileyiz'",
        pageImage: "img/ergene-yangin-muge-topak.jpg",
        content: `
          <p class="lead"><strong>'Bugün Üreticimizin Yarasını Birlikte Sarma Günü'</strong></p>
          
          <p>Olay yerinde incelemelerde bulunan Ergene Belediye Başkanı <strong>Müge Yıldız Topak</strong>, yaptığı açıklamada şu ifadelere yer verdi:</p>
          
          <blockquote style="background: var(--bg-elevated); border-left: 4px solid var(--news-red); padding: 1rem 1.2rem; margin: 1.2rem 0; font-style: italic; color: var(--text-main); line-height: 1.7;">
            "Gerçekten hepimizin içini acıtan, çok üzücü bir olay yaşadık. Çiftçilerimizin aylarca, hatta yıllarca emek verdiği alanların, çiftliklerin ve saman balyalarının alevlerin arasında kalmasını görmek hepimizi derinden yaraladı. Çok şükür üreticilerimiz hayvanlarını kurtarmak için büyük bir mücadele verdi. Biz de Ergene Belediyesi olarak ilk andan itibaren tüm imkanlarımızla üreticimizin yanında olmaya çalışıyoruz. Böyle zamanlarda 'senin derdin, benim derdim' diyebilmek çok önemli. Çünkü biz Ergene'de büyük bir aileyiz. İyi günde nasıl bir aradaysak zor günde de birbirimizin yanında olacağız."
          </blockquote>

          <p>Başkan Müge Yıldız Topak, yangına fedakarca müdahale eden tüm itfaiyecilere, belediye personeline ve yardıma koşan vatandaşlara teşekkür ederek, "Can kaybının yaşanmaması en büyük tesellimiz. Ergene'mizin dayanışmasıyla bu zor günleri de birlikte aşacağız." dedi.</p>
        `
      }
    ]
  },
  {
    id: 17,
    headlineNumber: 21,
    title: "Çerkezköy Özel İrmet Hospital'dan Anne Adaylarına Müjde: Ücretsiz Gebe Okulu Başladı!",
    spot: "Uzman Kadın Doğum hekimleri, ebeler ve fizyoterapistler eşliğinde anne adaylarına nefes egzersizleri, pilates, ağrısız doğum ve bebek bakımı eğitimi veriliyor.",
    category: "SAĞLIK",
    categorySlug: "saglik",
    location: "Tekirdağ / Çerkezköy",
    badgeColor: "pink",
    date: "27 Ağustos 2026 - 00:15",
    readTime: "4 dk",
    views: 84600,
    likes: 4210,
    reactions: { like: 2650, heart: 2120, clap: 1150, thinking: 80, angry: 5 },
    socialPosts: [
      {
        user: "Özel İrmet Hospital",
        handle: "@irmethospital_official",
        avatar: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Bilinçli anne, sağlıklı bebek! 🌸 Gebe Okulumuzun yeni dönem kayıtları başladı. Doğuma hazırlık, nefes teknikleri, emzirme ve bebek masajı eğitimlerimiz tamamen ÜCRETSİZDİR. Detaylı bilgi ve kayıt: 0282 725 44 44 🩺👶 #IrmetHospital #GebeOkulu #Cerkezkoy",
        time: "25 dk önce",
        likes: 2140,
        shares: 620
      },
      {
        user: "Çerkezköy & Kapaklı Anneleri",
        handle: "@cerkezkoy_anneleri",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
        platform: "facebook",
        text: "İrmet Hospital'ın gebe okuluna geçen ay katıldım, ebeler ve doktorlar o kadar ilgili ki doğum korkum tamamen bitti! Tüm hamile arkadaşlara tavsiye ederim. 🤰💕",
        time: "1 saat önce",
        likes: 1350,
        shares: 280
      }
    ],
    comments: [
      {
        id: 1701,
        author: "Büşra Yılmaz",
        city: "Çerkezköy / Gazi Mustafa Kemal",
        time: "18 dk önce",
        content: "İrmet Hastanesi'nde doğum yaptım, gebe okulundaki nefes egzersizleri normal doğumda inanılmaz yardımcı oldu. Emeği geçen tüm sağlık personeline teşekkür ederim.",
        likes: 124
      },
      {
        id: 1702,
        author: "Elif Karaca",
        city: "Kapaklı / Merkez",
        time: "42 dk önce",
        content: "Hafta sonu seansları çalışan anne adayları için çok düşünülmüş. Cumartesi grubu için kaydımı hemen yaptırdım.",
        likes: 79
      }
    ],
    author: {
      name: "Dr. Elif Nazlı",
      title: "Kadın Sağlığı & Yaşam Danışmanı",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    },
    image: "img/gebe-okulu-irmet.jpg",
    pages: [
      {
        pageNum: 1,
        pageTitle: "İrmet Hospital Gebe Okulunda Neler Var?",
        pageImage: "img/gebe-okulu-irmet.jpg",
        content: `
          <p class="lead">Anne adaylarının hamilelik sürecini sağlıklı, huzurlu ve bilinçli geçirmesi amacıyla <strong>Çerkezköy Özel İrmet Hospital</strong> tarafından hayata geçirilen <strong>"Gebe Okulu"</strong> yeni dönemiyle kapılarını açtı.</p>
          
          <div style="margin: 1.5rem 0; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
            <img src="img/irmet-hospital-bina.jpg" alt="Çerkezköy Özel İrmet Hospital Hastane Binası" style="width: 100%; height: 340px; object-fit: cover;" />
            <div style="background: var(--bg-elevated); padding: 0.6rem 1rem; font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; justify-content: space-between;">
              <span><i class="fa-solid fa-hospital" style="color: var(--news-red); margin-right: 0.3rem;"></i> <strong>Özel İrmet Hospital Çerkezköy</strong> Ana Hizmet Binası</span>
              <span style="color: var(--news-blue); font-weight: 700;"><i class="fa-solid fa-location-dot"></i> Çerkezköy / Tekirdağ</span>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.1) 0%, rgba(56, 189, 248, 0.1) 100%); border: 2px solid var(--news-red); border-radius: var(--radius-md); padding: 1.4rem; margin: 1.5rem 0;">
            <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.8rem;">
              <i class="fa-solid fa-hospital" style="font-size: 2rem; color: var(--news-red);"></i>
              <div>
                <h4 style="font-size: 1.15rem; font-weight: 900; color: var(--text-main);">ÖZEL İRMET HOSPITAL ÇERKEZKÖY</h4>
                <p style="font-size: 0.82rem; color: var(--news-blue); font-weight: 700;">Kadın Hastalıkları, Doğum ve Yenidoğan Yoğun Bakım Merkezi</p>
              </div>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Tekirdağ Çerkezköy'ün lider sağlık kuruluşu İrmet Hospital, ileri teknolojik doğumhaneleri, tek kişilik konforlu süit odaları ve tecrübeli kadın doğum hekim kadrosuyla anne ve bebek sağlığında bölgenin referans hastanesidir.
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="tel:02827254444" class="page-nav-btn" style="padding: 0.45rem 1rem; font-size: 0.85rem;"><i class="fa-solid fa-phone"></i> 0282 725 44 44</a>
              <span style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; color: var(--news-green); font-weight: 800;"><i class="fa-solid fa-check-double"></i> Gebe Okulu Katılımı Tamamen Ücretsizdir</span>
            </div>
          </div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Anne Adaylarının En Çok Sorduğu Sorular:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)">
              <span class="qa-link-text">❓ Gebe Okulunda hangi eğitimler veriliyor? Eşler katılabilir mi?</span>
              <span class="qa-link-badge">Ders Programını Gör (Sayfa 2) ➡️</span>
            </div>
            <div class="qa-link-card" onclick="goToArticlePage(3)">
              <span class="qa-link-text">❓ Ağrısız Doğum (Prenses Doğum) ve Hastane İletişim Bilgileri</span>
              <span class="qa-link-badge">Hastane & Kayıt (Sayfa 3) ➡️</span>
            </div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Eğitim Programı & Pilates Seansları",
        pageImage: "img/gebe-okulu-irmet.jpg",
        content: `
          <p class="lead"><strong>Gebe Okulu Kapsamında Verilen Ücretsiz Eğitimler:</strong></p>
          
          <ol style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-main);">
            <li><strong>Hamilelikte Beslenme ve Kilo Kontrolü:</strong> Diyetisyenler eşliğinde bebeğin gelişimi ve annenin sağlığı için ideal menüler.</li>
            <li><strong>Doğum Nefes Teknikleri & Hamile Pilatesi:</strong> Kasları güçlendiren, bel ve sırt ağrılarını azaltan fizyoterapist eşliğinde egzersizler.</li>
            <li><strong>Doğum Eylemi ve Aşamaları:</strong> Normal doğumun avantajları, sancı ile başa çıkma yöntemleri ve doğum korkusunu yenme.</li>
            <li><strong>Doğru Emzirme ve Anne Sütü:</strong> Meme bakımı, emzirme pozisyonları ve ilk günlerde sütün artırılması teknikleri.</li>
            <li><strong>Yenidoğan Bebek Bakımı & Göbek Bakımı:</strong> Bebek banyosu, gaz masajı ve acil durum ilk yardım bilgileri.</li>
          </ol>

          <div class="in-article-ad" style="border-color: var(--news-blue);">
            <span class="ad-label" style="color: var(--news-blue);">SPONSORLU SAĞLIK REHBERİ</span>
            <div class="ad-content-box"><i class="fa-solid fa-heart-pulse"></i> Özel İrmet Hospital - 7/24 Acil Kadın Doğum ve Çocuk Sağlığı Kliniği</div>
          </div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Hastane Binası & Kayıt İletişim",
        pageImage: "img/irmet-hospital-bina.jpg",
        content: `
          <p class="lead"><strong>Nasıl Kayıt Olunur ve Seanslar Ne Zaman?</strong></p>
          <p>Hamileliğinin 20. haftasını doldurmuş tüm anne adayları İrmet Hospital Gebe Okulu'na hiçbir ücret ödemeden kayıt yaptırabilirler. Baba adaylarının da derslere katılımı özellikle teşvik edilmektedir.</p>

          <div style="background: var(--bg-card); border: 1px solid var(--news-green); border-radius: var(--radius-md); padding: 1.5rem; margin: 1.5rem 0;">
            <h4 style="color: var(--news-green); font-weight: 800; font-size: 1.1rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-clipboard-check"></i> Kayıt & Bilgi İletişim Hattı:</h4>
            <p style="color: var(--text-main); font-size: 0.95rem; margin-bottom: 0.5rem;">📍 <strong>Adres:</strong> Gazi Mustafa Kemal Paşa Mah. Çerkezköy / Tekirdağ</p>
            <p style="color: var(--text-main); font-size: 0.95rem; margin-bottom: 0.5rem;">📞 <strong>Telefon / WhatsApp:</strong> 0282 725 44 44</p>
            <p style="color: var(--text-main); font-size: 0.95rem;">🌐 <strong>Web Sitesi:</strong> www.irmethospital.com</p>
          </div>
        `
      }
    ]
  },
  {
    id: 1,
    headlineNumber: 22,
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
          <p class="lead">Ulaştırma ve Altyapı Bakanlığı'nın mega projeleri arasında yer alan <strong>Halkalı-Kapıkule Hızlı Tren Hattı</strong> projesinde tarihi bir eşiğe gelindi. Toplam 229 kilometrelik hattın ray döşeme, sinyalizasyon ve elektrifikasyon çalışmaları rekor sürede tamamlanarak ilk test sürüşleri için geri sayım başladı.</p>
          
          <p>Proje tamamlandığında İstanbul ile Edirne arasındaki yolculuk süresi mevcut 4 saatten sadece <strong>1 saat 20 dakikaya</strong> düşecek. Aynı zamanda Çerkezköy ve Çorlu sanayi merkezleri üzerinden geçen hat, yük taşımacılığında da Türkiye'nin Avrupa'ya açılan en güçlü lojistik koridoru haline gelecek.</p>
          
          <p>Trakya'nın kalkınma vizyonunda mihenk taşı kabul edilen hat, çift hatlı, 200 km/s hıza uygun ve en son Avrupa Demiryolu Trafik Yönetim Sistemi (ERTMS) standartlarında inşa edildi. Hattın faaliyete geçmesiyle karayolu trafiğindeki TIR yoğunluğunun %35 oranında raylara kayması ve karbon emisyonlarının ciddi oranda azalması hedefleniyor.</p>

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
          <p>Halkalı-Kapıkule Demiryolu Hattı, Trakya'nın stratejik sanayi, tarım ve üniversite merkezlerini birbirine bağlayacak şekilde tasarlandı.</p>
          
          <div class="in-article-ad" style="border-color: var(--news-blue);"><span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
          
          <h3>Kesinleşen Durak ve İstasyon Listesi:</h3>
          <ol style="line-height: 1.8; margin-left: 1.5rem; color: var(--text-main);">
            <li><strong>İstanbul Halkalı Garı:</strong> Marmaray ve İstanbul Havalimanı metro entegrasyonuyla ana transfer merkezi.</li>
            <li><strong>Çerkezköy İstasyonu:</strong> 350'den fazla fabrikanın bulunduğu ÇOSB ve Kapaklı bölgesinin yolcu ve lojistik aktarma üssü.</li>
            <li><strong>Büyükkarıştıran İstasyonu:</strong> Trakya'nın yeni Lojistik Köy terminali ve kuru liman bağlantısı.</li>
            <li><strong>Lüleburgaz Garı:</strong> Kırklareli'nin en büyük ilçesinde modern mimariyle inşa edilen dev yolcu terminali.</li>
            <li><strong>Babaeski İstasyonu:</strong> Tarım ticareti ve yerel yolcu sirkülasyonu için modern peronlar.</li>
            <li><strong>Edirne Merkez Garı:</strong> Trakya Üniversitesi ve Selimiye tarihi yarımadasına 10 dakika mesafede ana terminal.</li>
            <li><strong>Kapıkule Sınır İstasyonu:</strong> Bulgaristan ve Avrupa demiryolu ağına direkt entegrasyon.</li>
          </ol>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Bilet Fiyatları, Sefer Saatleri & Konfor",
        pageImage: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 2: Bilet Fiyatları Ne Kadar Olacak ve Seferler Ne Zaman Başlıyor?</strong></p>
          
          <p>TCDD Taşımacılık tarafından hazırlanan tarife taslağına göre, hızlı tren biletleri karayolu otobüs fiyatlarıyla son derece rekabetçi bir düzeyde tutulacak. Ayrıca bölgede çalışan işçiler, kamu personeli ve üniversite öğrencileri için avantajlı aylık abonman kartları sunulacak.</p>

          <div class="in-article-ad" style="border-color: var(--news-green);"><span class="ad-label" style="color: var(--news-green);">REKLAM (SAYFA 3)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
          
          <p>Tren setlerinde yüksek hızlı internet (Wi-Fi), kafeterya vagonu, ergonomik koltuklar ve engelsiz erişim donanımları standart olarak yer alacak. Sabah ve akşam mesai saatlerinde Çerkezköy-İstanbul arasında her 30 dakikada bir sefer düzenlenmesi planlanıyor.</p>
        `
      }
    ]
  },
  {
    id: 11,
    headlineNumber: 23,
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
          <p class="lead">Türkiye'nin en dinamik üretim üslerinden <strong>Çerkezköy Organize Sanayi Bölgesi (ÇOSB)</strong> ve Kapaklı Sanayi Bölgesi, 2026 yılının en kapsamlı istihdam protokolüne imza attı.</p>
          
          <p>Yeni kurulan yüksek teknolojili otomotiv yan sanayi, biyoteknoloji ve teknik tekstil tesislerinin faaliyete geçmesiyle birlikte ilk etapta <strong>5.000 kişilik</strong> yeni kadro açıldı. İşe alımlarda hem vasıflı teknik personel hem de mesleki eğitim kursları aracılığıyla yetiştirilecek genç adaylar öncelikli olacak.</p>
          
          <p>İŞKUR Tekirdağ İl Müdürlüğü ve ÇOSB Bölge Müdürlüğü iş birliğiyle yürütülen projede; asgari ücretin üzerinde başlangıç maaşları, özel sağlık sigortası, kreş desteği ve kapsamlı servis olanakları sağlanacağı bildirildi.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklamı (336x280)</div></div>
        `
      }
    ]
  },
  {
    id: 12,
    headlineNumber: 24,
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
        pageTitle: "Çorlu Trafiğine Tarihi Neşter & 18 Km Yeni Bulvar",
        pageImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Tekirdağ Büyükşehir Belediyesi ve Karayolları Genel Müdürlüğü iş birliğiyle hazırlanan <strong>Çorlu Şehir İçi ve Çevre Yolu Entegre Ulaşım Projesi</strong>nde resmi imzalar atıldı. Toplam 18 kilometre uzunluğundaki bölünmüş yeni bulvar ve köprülü kavşak sistemiyle kent içi trafik düğümü tamamen çözülüyor.</p>
          
          <p>Sanayi ve nüfus yoğunluğu bakımından Trakya'nın en büyük kenti konumuna gelen Çorlu'da, her gün yaklaşık 70 bin aracın kullandığı Omurtak Caddesi, Orion AVM mevkii ve Eski Sanayi kavşaklarındaki darboğaz tarihe karışacak. Proje, transit tır ve ağır vasıta trafiğini doğrudan çevre yoluna yönlendirerek şehir merkezini rahatlatacak.</p>
          
          <p>Belediye Başkanı ve Karayolları Bölge Müdürlüğü yetkililerinin katıldığı imza töreninde; projenin modern yağmur suyu drenaj hatları, LED aydınlatma direkleri, geniş yaya kaldırımları ve kesintisiz bisiklet yollarıyla çevre dostu bir yaklaşımla inşa edileceği vurgulandı.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Çorlu Ulaşım Projesi Hakkında Merak Edilenler:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">🚗 3 Katlı Köprülü Kavşaklar Nereye Yapılacak? Güzergah haritası</span><span class="qa-link-badge">Kavşakları Gör (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">⏱️ İnşaat Ne Zaman Bitecek? Alternatif bypass yolları nereler?</span><span class="qa-link-badge">Takvim & Yollar (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "3 Katlı Modern Kavşaklar & Akıllı Sinyalizasyon",
        pageImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 1: Köprülü Kavşaklar Hangi Noktalarda İnşa Edilecek?</strong></p>
          
          <p>Çorlu trafiğinin en sık kilitlendiği 3 kritik arterde zemin etütleri tamamlandı. Hazırlanan avan projelere göre yapılacak imalatlar:</p>
          
          <ul style="line-height: 1.8; margin-left: 1.5rem; color: var(--text-main);">
            <li><strong>Orion - Emlak Konutları Farklı Seviyeli Kavşağı:</strong> Alipaşa ve Önerler yönünden gelen araçlar sinyalizasyona takılmadan transit geçiş yapabilecek.</li>
            <li><strong>Yeni Sanayi - Bülent Ecevit Bulvarı Bağlantı Köprüsü:</strong> Sanayi çalışanlarının sabah ve akşam vardiya çıkışlarında yaşadığı 45 dakikalık bekleme süresi 4 dakikaya inecek.</li>
            <li><strong>Havuzlar - Çorlu Devlet Hastanesi Acil Koridoru:</strong> Ambulans ve toplu taşıma araçları için özel öncelikli akıllı yeşil dalga sistemi entegre edilecek.</li>
          </ul>

          <div class="in-article-ad" style="border-color: var(--news-blue);"><span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Proje Takvimi & Alternatif Güzergahlar",
        pageImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 2: Çalışmalar Sırasında Trafik Nasıl İşleyecek?</strong></p>
          
          <p>İlçe Emniyet Müdürlüğü Trafik Tescil Şubesi ve Fen İşleri ekipleri koordinasyonunda sürücülerin mağdur olmaması adına genişletilmiş alternatif servis yolları belirlendi. Ağır tonajlı araçlar inşaat süresince Velimeşe ve Ergene bağlantı akslarına yönlendirilecek.</p>
          
          <p>Projenin ilk etabı olan köprü ayaklarının 6 ay içinde tamamlanması, çevre yolu asfaltlama ve çevre düzenlemesinin ise 12 ay sonunda teslim edilerek 2027 yazında tam kapasiteyle trafiğe açılması planlanıyor.</p>
        `
      }
    ]
  },
  {
    id: 2,
    headlineNumber: 25,
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
        pageTitle: "Hasat Raporu & Rekolte Analizi",
        pageImage: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Türkiye'nin bitkisel sıvı yağ ihtiyacının yaklaşık %60'ını tek başına karşılayan Trakya topraklarında, <strong>2026 yılı ayçiçeği hasat sezonu</strong> yüksek rekolte beklentisiyle start aldı.</p>
          
          <p>Tekirdağ, Edirne ve Kırklareli genelinde 3.8 milyon dekar arazide çalışan modern biçerdöverler günün ilk ışıklarıyla tarlalara girdi. Bu yıl uygulanan sertifikalı tohum ıslahı, dengeli gübreleme ve akıllı damla sulama projeleri sayesinde dekar başına verimin 220 ila 270 kilogram arasına yükseldiği kaydedildi.</p>
          
          <p>Ziraat Odaları koordinasyon kurulunun yayımladığı raporda, iklimsel dalgalanmalara rağmen Trakya üreticisinin bilinçli tarım teknikleri sayesinde Türkiye ortalamasının %30 üzerinde bir randıman elde ettiği belirtildi.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Sayfa İçi Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Ayçiçeği Sezonu Soru & Cevap:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">🌻 Trakya Birlik Alım Fiyatı ve Prim Desteği Ne Kadar?</span><span class="qa-link-badge">Fiyat Tablosu (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">🚜 Mazot ve Gübre Destek Ödemeleri Ne Zaman Yatacak?</span><span class="qa-link-badge">Ödeme Takvimi (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Taban Fiyat ve Lisanslı Depoculuk",
        pageImage: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 1: Trakya Birlik Alım Fiyatı ve Şartları Nelerdir?</strong></p>
          
          <p>Trakya Birlik Yönetim Kurulu tarafından yapılan açıklamaya göre, %44 standart yağ oranlı ayçiçeği için ton başına tatmin edici bir avans fiyat belirlendi. Yağ oranındaki her %1'lik artış için üreticiye ilave %1.5 prim verilecek.</p>
          
          <p>Bölgede sayıları artan modern lisanslı çelik silolara ürün teslim eden çiftçiler, nakliye desteği ve stopaj muafiyetinden yararlanarak ürünlerini güvenle saklayıp istedikleri zaman Elüs piyasasında satabilecekler.</p>

          <div class="in-article-ad" style="border-color: var(--news-green);"><span class="ad-label" style="color: var(--news-green);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Çiftçiye Mazot ve Gübre Teşvikleri",
        pageImage: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 2: Tarımsal Destekler Hesaplara Ne Zaman Aktarılacak?</strong></p>
          
          <p>Tarım ve Orman Bakanlığı, Trakya havzasındaki yağlı tohum üreticilerine dekar başına nakdi mazot ve gübre desteğinin yanı sıra kilogram başına prim ödemelerinin hasat teslim belgeleri tamamlanır tamamlanmaz Ziraat Bankası Başakkart hesaplarına yatırılacağını duyurdu.</p>
          
          <p>Bölge genelinde 45 bini aşkın çiftçi ailesinin bu desteklerle birlikte yeni ekim sezonu için tohum ve girdi maliyetlerini rahatlıkla karşılayabileceği ifade ediliyor.</p>
        `
      }
    ]
  },
  {
    id: 4,
    headlineNumber: 26,
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
        pageTitle: "Sanayide Yeşil Enerji Seferberliği",
        pageImage: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Avrupa Birliği'nin Yeşil Mutabakat ve Sınırda Karbon Düzenleme Mekanizması (SKDM) kurallarına tam uyum sağlamak isteyen Trakya sanayisi, <strong>10 milyar TL'lik öz kaynak ve yeşil finansman paketiyle</strong> fabrikalarını güneş ve rüzgar enerjisi santralleriyle donatıyor.</p>
          
          <p>Çerkezköy Organize Sanayi Bölgesi (ÇOSB), Çorlu Deri İhtisas OSB ve Velimeşe OSB bünyesindeki 140'tan fazla sanayi tesisi, fabrika çatılarına yüksek verimli monokristal güneş panelleri monte ederek yıllık elektrik tüketimlerinin en az %70'ini sıfır emisyonlu kaynaklardan karşılayacak.</p>
          
          <p>Sanayi ve Teknoloji Bakanlığı ile Enerji Piyasası Düzenleme Kurumu (EPDK) tarafından onaylanan projeler sayesinde yılda yaklaşık 350 bin ton karbon salımının önüne geçilmesi planlanıyor.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Yeşil Sanayi Rehberi:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">☀️ Çatı GES Kurulumu ve İhracatta Karbon Vergisi Muafiyeti</span><span class="qa-link-badge">İhracat Avantajı (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">⚡ Enerji Depolama ve Akıllı Şebeke Entegrasyonu</span><span class="qa-link-badge">Teknoloji Detayı (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "İhracatta Karbon Vergisi Avantajı",
        pageImage: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 1: Yeşil Dönüşüm İhracatçımıza Ne Kazandıracak?</strong></p>
          
          <p>Tekstil, alüminyum, kimya ve otomotiv sektörlerinde Avrupa pazarına ihracat yapan Trakya firmaları, yeşil enerji sertifikaları (I-REC) sayesinde ton başına 80 Euro'yu bulan sınırda karbon cezasından tamamen muaf tutulacak.</p>
          
          <p>Böylece firmalarımızın uluslararası tedarik zincirlerindeki öncelikli konumu korunurken, küresel markaların Türkiye'deki sipariş payı %25 oranında artış gösterecektir.</p>

          <div class="in-article-ad" style="border-color: var(--news-green);"><span class="ad-label" style="color: var(--news-green);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Bataryalı Depolama ve Gelecek Hedefleri",
        pageImage: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 2: Gece Saatlerinde Enerji Nasıl Sağlanacak?</strong></p>
          
          <p>Proje kapsamında kurulacak 50 megavat saatlik lityum-demir-fosfat (LiFePO4) endüstriyel batarya depolama merkezleri, gündüz üretilen fazla güneş elektriğini depolayarak gece vardiyalarında fabrikaların kesintisiz ve temiz enerjiyle çalışmasını mümkün kılacaktır.</p>
        `
      }
    ]
  },
  // -------------------------------------------------------------
  // KÖŞE YAZARLARI MAKALELERİ (ID: 201, 202, 203, 204)
  // -------------------------------------------------------------,
  {
    id: 201,
    headlineNumber: 27,
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
    headlineNumber: 28,
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
    headlineNumber: 29,
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
    headlineNumber: 30,
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
  },
  {
    id: 205,
    headlineNumber: 31,
    title: "Trakya Topraklarında Su Krizi: Kuraklığa Karşı Damla Sulama Devrimi",
    spot: "İklim değişikliği Trakya tarımını nasıl etkiliyor? Yeraltı sularının korunması ve akıllı tarım teknolojileri neden hayati?",
    category: "KÖŞE YAZISI",
    categorySlug: "yazarlar",
    location: "Tarım & Bilim",
    badgeColor: "purple",
    date: "27 Ağustos 2026 - 00:20",
    readTime: "5 dk",
    views: 32600,
    likes: 1840,
    reactions: { like: 1210, heart: 650, clap: 490, thinking: 180, angry: 5 },
    socialPosts: [
      {
        user: "Trakya Ziraat Odaları Birliği",
        handle: "@TrakyaZiraat",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Prof. Dr. Ahmet Yılmazer hocamızın Trakya'da kuraklıkla mücadele ve akıllı sulama rehberi her çiftçimizin başucu kaynağı olmalıdır. 🚜🌾 #TrakyaTarim",
        time: "1 saat önce",
        likes: 540,
        shares: 190
      }
    ],
    comments: [
      {
        id: 20501,
        author: "Ahmet Çiftçi",
        city: "Hayrabolu",
        time: "30 dk önce",
        content: "Hocamın dediği gibi vahşi sulamayı tamamen terk edip güneş enerjili damla sulamaya geçtik, elektrik faturası da üçte bire indi.",
        likes: 47
      }
    ],
    author: {
      name: "Prof. Dr. Ahmet Yılmazer",
      title: "Tarım Teknolojileri & Toprak Bilimi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Kuraklık ve Toprak Sağlığı",
        pageImage: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Trakya'nın Kara Topraklarını Geleceğe Taşımak Zorundayız!</strong></p>
          <p>Trakya havzası, Türkiye buğday üretiminin yaklaşık %15'ini, ayçiçeği üretiminin ise %50'den fazlasını tek başına karşılayan bir bereket merkezidir. Ancak son yıllarda yaşanan mevsimsel kuraklıklar ve yeraltı su tablasındaki çekilmeler alarm vermektedir.</p>
          <p>Artık her damla suyun kıymetini bilmek zorundayız. Sensörlü toprak nem ölçerler, gece sulaması ve kapalı basınçlı boru sistemleri çiftçimize hem verim hem de %40'a varan su tasarrufu sağlayacaktır.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Yazar İçi Reklamı</div></div>
        `
      }
    ]
  },
  {
    id: 206,
    headlineNumber: 32,
    title: "Çerkezköy ve Çorlu Sanayisinde Sanayi 4.0 ve Yapay Zeka Dönüşümü",
    spot: "Trakya fabrikalarında robotik otomasyon, yeşil enerji ve dijitalleşme ile küresel rekabet gücü nasıl artıyor?",
    category: "KÖŞE YAZISI",
    categorySlug: "yazarlar",
    location: "Sanayi & İnovasyon",
    badgeColor: "purple",
    date: "26 Ağustos 2026 - 23:45",
    readTime: "4 dk",
    views: 39100,
    likes: 1950,
    reactions: { like: 1420, heart: 780, clap: 610, thinking: 90, angry: 2 },
    socialPosts: [
      {
        user: "Trakya İnovasyon & Teknoloji",
        handle: "@TrakyaInovasyon",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        platform: "linkedin",
        text: "Müh. Selim Varol Çerkezköy OSB'deki akıllı fabrika dönüşümünü çok net analiz etmiş. Trakya ihracatta sınıf atlıyor! 🤖📈 #Sanayi40 #CerkezkoyOSB",
        time: "2 saat önce",
        likes: 620,
        shares: 210
      }
    ],
    comments: [
      {
        id: 20601,
        author: "Mühendis Hakan",
        city: "Çorlu / Sanayi",
        time: "1 saat önce",
        content: "Otomasyona geçen tesislerde fire oranları sıfıra yaklaştı. Trakya gençliği için müthiş bir yazılım ve mühendislik sahası doğuyor.",
        likes: 38
      }
    ],
    author: {
      name: "Müh. Selim Varol",
      title: "Sanayi 4.0 & Yeşil İnovasyon",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Akıllı Üretim Çağı",
        pageImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Trakya Sanayisi Dijital Çağa Liderlik Ediyor</strong></p>
          <p>Çerkezköy, Kapaklı ve Çorlu hatlarındaki organize sanayi bölgelerimiz, Türkiye'nin Avrupa'ya açılan üretim üssüdür. Avrupa Birliği'nin Yeşil Mutabakat kriterlerine uyum sağlayan işletmelerimiz, çatı GES yatırımları ve yapay zeka destekli kalite kontrol hatlarıyla dünya devleriyle yarışmaktadır.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Yazar İçi Reklamı</div></div>
        `
      }
    ]
  },
  {
    id: 207,
    headlineNumber: 33,
    title: "Mimar Sinan'ın Edirne'deki Mühendislik Dehası: Selimiye'nin Bilinmeyen Sırları",
    spot: "UNESCO Dünya Mirası Selimiye Camii'nin kubbe akustiği, deprem izolatörleri ve Trakya'nın kültürel mirası.",
    category: "KÖŞE YAZISI",
    categorySlug: "yazarlar",
    location: "Tarih & Kültür",
    badgeColor: "purple",
    date: "26 Ağustos 2026 - 22:15",
    readTime: "4 dk",
    views: 47800,
    likes: 2650,
    reactions: { like: 1890, heart: 1420, clap: 890, thinking: 70, angry: 0 },
    socialPosts: [
      {
        user: "Trakya Tarih & Sanat Kulübü",
        handle: "@TrakyaTarihKulubu",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Tarihçi Murat Berk hocamızın Selimiye restorasyonu ve Sinan'ın mimari sırları üzerine yazdığı bu yazı büyüleyici! 🕌✨ #EdirneSelimiye #MimarSinan",
        time: "3 saat önce",
        likes: 1240,
        shares: 340
      }
    ],
    comments: [
      {
        id: 20701,
        author: "Zeynep Öğretmen",
        city: "Edirne / Merkez",
        time: "2 saat önce",
        content: "Öğrencilerimle birlikte mutlaka okuyacağımız harika bir tarih ve mimarlık dersi niteliğinde.",
        likes: 54
      }
    ],
    author: {
      name: "Murat Berk",
      title: "Tarihçi & Kültürel Miras Yazarı",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Sinan'ın Ustalık Eseri",
        pageImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Trakya'nın Tacı: Edirne Selimiye</strong></p>
          <p>Koca Sinan'ın 80 yaşında 'Ustalık eserim' dediği Selimiye Camii, 43 metrelik dev kubbesi ve tek bir sütun kullanılmadan oluşturulan ferah iç mekanıyla yalnızca bir ibadethane değil, asırları aşan bir matematik mucizesidir.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Yazar İçi Reklamı</div></div>
        `
      }
    ]
  },
  {
    id: 208,
    headlineNumber: 34,
    title: "Trakya'nın Lojistik Üs Olma Potansiyeli ve 2026-2027 Yatırım Fırsatları",
    spot: "Çorlu Havalimanı, Tekirdağ Asyaport Limanı ve Hızlı Tren aksı bölgeyi Avrupa'nın en büyük aktarma merkezine dönüştürüyor.",
    category: "KÖŞE YAZISI",
    categorySlug: "yazarlar",
    location: "Ekonomi & Finans",
    badgeColor: "purple",
    date: "26 Ağustos 2026 - 21:00",
    readTime: "5 dk",
    views: 51400,
    likes: 2890,
    reactions: { like: 1980, heart: 1100, clap: 920, thinking: 110, angry: 2 },
    socialPosts: [
      {
        user: "Trakya Ekonomi Dünyası",
        handle: "@TrakyaFinans",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Ekonomist Berna Aksoy: 'Asyaport Limanı ve hızlı tren birleştiğinde Trakya, Balkanlar ve Akdeniz'in en stratejik ticaret kapısı oluyor.' 🚢🚆📊 #TrakyaEkonomi",
        time: "4 saat önce",
        likes: 980,
        shares: 310
      }
    ],
    comments: [
      {
        id: 20801,
        author: "Ali İhsan Bey",
        city: "Tekirdağ / Süleymanpaşa",
        time: "3 saat önce",
        content: "Asyaport Limanı'nın kapasite artışı bölge esnafından lojistik devlerine kadar herkese kazandıracak. Çok isabetli bir yazı.",
        likes: 62
      }
    ],
    author: {
      name: "Berna Aksoy",
      title: "Bölgesel Finans & Strateji Danışmanı",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Trakya'nın Lojistik Gücü",
        pageImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Deniz, Demiryolu ve Karayolunun Kesiştiği Küresel Kavşak</strong></p>
          <p>Tekirdağ Asyaport konteyner limanı, Çorlu Havalimanı kargo taşımacılığı ve Halkalı-Kapıkule Hızlı Tren projesiyle Trakya; yalnızca Türkiye'nin değil, tüm Doğu Avrupa'nın en kritik lojistik koridoru haline gelmektedir.</p>
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Yazar İçi Reklamı</div></div>
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
  },
  {
    id: 205,
    name: "Prof. Dr. Ahmet Yılmazer",
    title: "Tarım Teknolojileri & Toprak",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    articleTitle: "Trakya Topraklarında Su Krizi: Damla Sulama Devrimi",
    date: "Yeni",
    summary: "Kuraklığa karşı sensörlü sulama ve akıllı tarım teknolojilerinin çiftçimize sağladığı dev tasarruf."
  },
  {
    id: 206,
    name: "Müh. Selim Varol",
    title: "Sanayi 4.0 & Yeşil İnovasyon",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    articleTitle: "Çerkezköy ve Çorlu OSB'de Sanayi 4.0 ve Yapay Zeka",
    date: "Yeni",
    summary: "Trakya fabrikalarında robotik otomasyon, yeşil enerji ve dijitalleşme ile küresel rekabet gücü."
  },
  {
    id: 207,
    name: "Murat Berk",
    title: "Tarihçi & Kültürel Miras",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    articleTitle: "Mimar Sinan'ın Edirne'deki Mühendislik Dehası: Selimiye",
    date: "Yeni",
    summary: "UNESCO Dünya Mirası Selimiye Camii'nin kubbe akustiği, deprem izolatörleri ve mimari sırları."
  },
  {
    id: 208,
    name: "Berna Aksoy",
    title: "Bölgesel Finans & Strateji",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    articleTitle: "Trakya'nın Lojistik Üs Olma Potansiyeli ve Yatırımlar",
    date: "Yeni",
    summary: "Çorlu Havalimanı, Tekirdağ Asyaport Limanı ve Hızlı Tren aksıyla doğan dev yatırım fırsatları."
  }
];

// 6. Günün En Çok Okunanları
const topReadArticles = [
  { rank: 1, title: "Tekirdağlı balıkçılar 1 Eylül'de 'Vira Bismillah' diyor: Palamut bereketi bekleniyor", views: "265 Bin", category: "Denizcilik" },
  { rank: 2, title: "@gundemtrakya59 Instagram'da yayında: Trakya'nın 1 numaralı haber topluluğu", views: "245 Bin", category: "Topluluk" },
  { rank: 3, title: "Candan Yüceer ve 4 ilçe başkanı CHP'den istifa edip Yeni Parti'ye geçti", views: "198 Bin", category: "Siyaset" },
  { rank: 4, title: "Halkalı-Kapıkule Hızlı Tren durakları ve sefer saatleri belli oldu", views: "154 Bin", category: "Trakya" },
  { rank: 5, title: "Çerkezköy OSB'de 5 bin kişilik dev istihdam hamlesi", views: "132 Bin", category: "İstihdam" }
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
