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
    id: 106, 
    articleId: 18, 
    title: "Ergene ve Çorlu'daki 900 dekarlık yangının ardından Başkan Müge Yıldız Topak sahaya indi: 'Üreticimizin yarasını birlikte saracağız!'", 
    time: "01:05" 
  },
  { 
    id: 105, 
    articleId: 17, 
    title: "Çerkezköy Özel İrmet Hospital Gebe Okulu yeni dönem kayıtları başladı: Anne adaylarına uzman kadro ile ücretsiz eğitim!", 
    time: "23:40" 
  },
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
    id: 18,
    headlineNumber: 1,
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
    headlineNumber: 2,
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
        pageTitle: "Çalışma Hayatında Yeni Dönem & Esnek Mesai",
        pageImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Çalışma ve Sosyal Güvenlik Bakanlığı tarafından hazırlanan ve milyonlarca çalışanı doğrudan ilgilendiren <strong>Yeni Çalışma Modelleri ve Sosyal Güvenlik Reform Paketi</strong> TBMM gündemine taşındı.</p>
          
          <p>Yeni düzenleme ile birlikte özellikle bilişim, finans, çağrı merkezleri ve hizmet sektöründe yaygınlaşan uzaktan (home-office) ve hibrit çalışma modelleri resmi iş kanunu güvencesine kavuşuyor. İşverenlerin uzaktan çalışan personelin ergonomik sandalye, bilgisayar, internet ve yemek giderlerini karşılama zorunluluğu yasal olarak tanımlandı.</p>
          
          <p>Ayrıca haftalık 45 saatlik standart çalışma süresinin sanayi ve hizmet kollarında esnekleştirilerek 40 saate indirilmesi ve haftada 4 gün çalışma pilot uygulaması için Trakya ve Marmara bölgesindeki seçili sanayi kuruluşlarında deneme süreci başlatılıyor.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Çalışma Yasası Merak Edilenler:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">💼 Kıdem Tazminatı ve Bireysel Fon Hesabı Nasıl İşleyecek?</span><span class="qa-link-badge">Tazminat Detayı (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">⏱️ Esnek Çalışma ve Yemek/İnternet Desteği Tutarları</span><span class="qa-link-badge">Destek Kalemleri (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Kıdem Tazminatı ve Güvence Fonu",
        pageImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 1: Kıdem Tazminatında Hangi Haklar Korunuyor?</strong></p>
          
          <p>Taslak metne göre, işçinin 1 yıl dolmadan işten ayrılması veya iflas eden şirketlerden alacaklarını tahsil edememesi gibi mağduriyetlerin önüne geçmek amacıyla 'Kıdem Güvence Hesabı' kuruluyor.</p>
          
          <p>Her ay işveren tarafından yatırılacak primler kamu güvencesindeki bireysel hesapta nemalanacak ve çalışan iş değiştirdiğinde dahi kıdem hakkını kaybetmeden yeni iş yerine devredebilecek.</p>

          <div class="in-article-ad" style="border-color: var(--news-blue);"><span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Uygulama Takvimi & Yürürlük Tarihi",
        pageImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 2: Düzenleme Ne Zaman Yürürlüğe Girecek?</strong></p>
          
          <p>Sendikalar ve işveren konfederasyonlarıyla yapılan istişareler neticesinde kanun teklifinin yeni yasama yılında Meclis Genel Kurulu'nda oylanarak 1 Ocak 2027 itibarıyla kademeli olarak yürürlüğe girmesi hedefleniyor.</p>
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
        pageTitle: "Er Meydanında Yeni Çağ & 32 Başpehlivan",
        pageImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">UNESCO Somut Olmayan Kültürel Miras listesinde yer alan ve 660 yılı aşkın köklü bir geçmişe sahip <strong>Tarihi Kırkpınar Yağlı Güreşleri</strong>, güreş severlerin seyir zevkini en üst noktaya taşıyacak yeni lig ve puanlama statüsüyle başlıyor.</p>
          
          <p>Türkiye Geleneksel Güreşler Federasyonu (TGGF) tarafından hayata geçirilen Türkiye Yağlı Güreş Ligi finalleri niteliğindeki yeni formatta; sadece sezon boyunca en yüksek puanı toplayan 32 elit başpehlivan doğrudan Sarayiçi Er Meydanı'na davet edilecek.</p>
          
          <p>Gereksiz uzatmaların ve pasif güreşin önüne geçmek amacıyla puanlama süresi ve ihtar kuralları sıkılaştırılırken, altın kemer mücadelesinde ilk turdan itibaren adeta final havasında eşleşmeler izlenecek.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Kırkpınar Güreşleri Detayları:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">🤼‍♂️ Başpehlivan Eşleşmeleri ve Altın Kemer Favorileri</span><span class="qa-link-badge">Pehlivanlar (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">🕌 Edirne Festival Programı ve Ciğer Şöleni</span><span class="qa-link-badge">Turizm & Bilet (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Altın Kemer Mücadelesi ve Favoriler",
        pageImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 1: Er Meydanında Hangi Pehlivanlar Güreşecek?</strong></p>
          
          <p>Lig etabını zirvede tamamlayan son Kırkpınar başpehlivanları Ali Gürbüz, İsmail Balaban, Orhan Okulu ve Yusuf Can Zeybek'in yanı sıra Trakya bölgesinin yetiştirdiği genç yetenekler de er meydanında kol bağlayacak.</p>
          
          <p>Yeni kurallara göre kura çekimleri dijital torba sistemiyle yapılarak favori pehlivanların ilk turda birbirleriyle eşleşmesi engellenecek, rekabet heyecanı son güne kadar korunacaktır.</p>

          <div class="in-article-ad" style="border-color: var(--news-red);"><span class="ad-label" style="color: var(--news-red);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Edirne'de Güreş Turizmi ve Şenlikler",
        pageImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 2: Ziyaretçiler İçin Şehirde Neler Hazırlandı?</strong></p>
          
          <p>Edirne Valiliği ve Belediyesi ortaklığında Sarayiçi çevresinde 50 bin kişilik modern tribünler, ücretsiz Wi-Fi noktaları, dinlenme çadırları ve geleneksel Edirne tava ciğeri stantları kuruldu. Şehirdeki otel ve pansiyon doluluk oranlarının şimdiden %98'e ulaştığı belirtildi.</p>
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
        pageTitle: "İlk Evini Alacaklara 0.99 Kredi Desteği",
        pageImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Hazine ve Maliye Bakanlığı ile Çevre, Şehircilik ve İklim Değişikliği Bakanlığı koordinasyonunda hazırlanan <strong>İlk Evim Konut Finansmanı Kampanyası</strong> kamu bankaları aracılığıyla resmen yürürlüğe girdi.</p>
          
          <p>Konut sahibi olmayan dar ve orta gelirli vatandaşlar için hazırlanan paket kapsamında; aylık <strong>%0.99 faiz oranı</strong> ve 180 aya (15 yıl) varan vade seçenekleri sunuluyor. Başvurular Ziraat Bankası, VakıfBank ve Halkbank şubelerinin yanı sıra e-Devlet kapısı üzerinden alınmaya başlandı.</p>
          
          <p>Trakya genelinde özellikle Çorlu, Çerkezköy, Kapaklı, Süleymanpaşa ve Edirne merkezde yeni tamamlanan sıfır konut projelerinde büyük bir hareketlilik yaşanırken, inşaat firmaları da projelerinde %10 ek indirim uygulayacaklarını bildirdi.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Konut Kredisi Rehberi:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">🔑 Başvuru Şartları Neler? Kimler Yararlanabilir?</span><span class="qa-link-badge">Şartları İncele (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">📊 Aylık Taksit Tablosu ve Geri Ödeme Planı</span><span class="qa-link-badge">Taksit Hesapla (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Başvuru Kriterleri ve Gelir Şartı",
        pageImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 1: Kampanyadan Kimler Faydalanabilir?</strong></p>
          
          <ul style="line-height: 1.8; margin-left: 1.5rem; color: var(--text-main);">
            <li><strong>Konut Sahipliği Şartı:</strong> Başvuran kişinin ve eşinin üzerine kayıtlı herhangi bir konut hissesi bulunmamalıdır.</li>
            <li><strong>İkametgah ve Satış Kısıtı:</strong> Son 1 yıl içerisinde konut satışı yapmamış olmak ve satın alınan evde en az 5 yıl ikamet etme taahhüdü gerekmektedir.</li>
            <li><strong>Ekspertiz ve Enerji Kimlik Belgesi:</strong> Alınacak konutun sıfır (ilk el) olması ve A veya B sınıfı Enerji Kimlik Belgesi taşıması şarttır.</li>
          </ul>

          <div class="in-article-ad" style="border-color: var(--news-blue);"><span class="ad-label" style="color: var(--news-blue);">REKLAM (SAYFA 2)</span><div class="ad-content-box">Google AdSense Reklamı (300x250)</div></div>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Örnek Taksit ve Vade Tablosu",
        pageImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Soru 2: 2 Milyon TL Kredi İçin Aylık Taksit Ne Kadar?</strong></p>
          
          <p>180 ay vadeli 2.000.000 TL tutarındaki konut kredisinde Hazine katkısı sayesinde ilk 3 yıl aylık taksitler kademeli olarak düşük tutulacak. 4. yıldan itibaren hane gelirindeki artışa paralel standart ödeme planına geçilecek ve vatandaşlar bütçelerini sarsmadan ev sahibi olabilecek.</p>
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
        pageTitle: "Marmara Kıyısında Festival Coşkusu",
        pageImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Tekirdağ'ın Şarköy ve Süleymanpaşa ilçelerinde geleneksel olarak düzenlenen <strong>Uluslararası Bağ Bozumu ve Gastronomi Festivali</strong>, bu yıl 120 bini aşkın yerli ve yabancı ziyaretçiye ev sahipliği yaptı.</p>
          
          <p>Marmara Denizi'nin kıyısında uzanan asırlık bağlarda sepetlerle üzüm toplayan konuklar; Tekirdağ köftesi, Hayrabolu tatlısı, peynir helvası ve yöresel zeytinyağlıların sergilendiği stantlarda Trakya mutfağının seçkin tatlarını deneyimledi.</p>
          
          <p>Akşam saatlerinde sahil amfi tiyatroda sahne alan ünlü sanatçıların konserleriyle doruğa çıkan festival, bölge turizmine ve esnafına milyonlarca liralık ekonomik canlılık kazandırdı.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Yöresel Lezzet Atölyeleri & Bağ Rotaları",
        pageImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Masterclass Şefleriyle Trakya Mutfağı</strong></p>
          <p>Türkiye'nin önde gelen şeflerinin katıldığı gastronomi atölyelerinde coğrafi işaretli Tekirdağ ürünleri modern sunumlarla harmanlandı. Bağ rotasında düzenlenen bisiklet turları ve fotoğraf yarışmaları büyük ilgi gördü.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Bölge Turizmine Dev Katkı",
        pageImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Şarköy ve Mürefte Otellerinde %100 Doluluk</strong></p>
          <p>Festival süresince Şarköy, Mürefte, Hoşköy ve Kumbağ sahillerindeki tüm butik oteller ve pansiyonlar tamamen doldu. Belediye Başkanı festivalin her yıl genişletilerek sürdürüleceğini açıkladı.</p>
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
        pageTitle: "Onkolojide Kişiye Özel Tedavi Devrimi",
        pageImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">TÜBİTAK ve üniversite onkoloji merkezleri iş birliğiyle yürütülen <strong>Kişiselleştirilmiş Kanser İmmünoterapi Projesi</strong>nde Faz-2 klinik deneme sonuçları tıp dünyasında yankı uyandırdı.</p>
          
          <p>Hastadan alınan tümör biyopsisinin yeni nesil gen dizileme yöntemleriyle taranması sonucu, yalnızca kanserli hücreye özgü neoantijenleri hedefleyen özel mRNA aşıları sentezlendi. Akciğer, kolon ve melanom vakalarında uygulanan tedavide hastaların %88'inde tümörün küçüldüğü veya tamamen gerilediği saptandı.</p>
          
          <p>Klasik kemoterapinin aksine sağlıklı organ ve dokulara zarar vermeyen akıllı aşı yöntemi, bağışıklık sistemini tümör hücrelerine karşı bir ordu gibi eğitiyor.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Klinik Süreç ve Yan Etkisiz Tedavi",
        pageImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Bağışıklık Hücreleri Kanserle Savaşa Hazırlanıyor</strong></p>
          <p>Aşı enjekte edildikten sonra T-hücreleri vücuttaki mutasyona uğramış kanserli yapıları tanıyıp yok ediyor. Saç dökülmesi veya bağışıklık çökmesi gibi klasik kemoterapi yan etkileri gözlenmiyor.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Seri Üretim ve SGK Kapsamı",
        pageImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>2027 Yılında Yaygın Kullanıma Girecek</strong></p>
          <p>Sağlık Bakanlığı onay süreçlerinin tamamlanmasının ardından yerli biyoteknoloji tesislerinde seri aşı üretimine başlanacak ve SGK geri ödeme listesine alınması değerlendirilecek.</p>
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
        pageTitle: "Yüksek Teknolojili Hücre Üretimi",
        pageImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Türkiye'nin elektrikli araç ve temiz enerji depolama vizyonunun kalbinde yer alan <strong>Yerli Batarya Hücresi ve Modül Üretim Tesisi</strong>, yıllık 100 bin araçlık ikinci fazını törenle açtı.</p>
          
          <p>Yüksek enerji yoğunluğuna sahip nikel-manganez-kobalt (NMC) ve prizmatik katı hal kimyası kullanılan yeni nesil hücreler, elektrikli otomobillerin tek şarjla menzilini 650 kilometrenin üzerine çıkarıyor ve 15 dakikada %80 hızlı şarj imkanı tanıyor.</p>
          
          <p>Tesis sadece yerli otomotiv sanayisinin ihtiyacını karşılamakla kalmayıp, Balkanlar ve Doğu Avrupa'daki otomobil üreticilerine de katma değerli teknoloji ihraç edecek.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Ultra Hızlı Şarj ve Güvenlik Testleri",
        pageImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Aşırı Sıcak ve Darbe Dayanımı Kanıtlandı</strong></p>
          <p>Uluslararası akredite laboratuvarlarda yapılan testlerde hücrelerin eksi 30 dereceden artı 60 dereceye kadar performans kaybı yaşamadan çalıştığı tescillendi.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "İstihdam ve AR-GE Ekosistemi",
        pageImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>1.200 Nitelikli Mühendis ve Teknisyen</strong></p>
          <p>Fabrika bünyesinde kurulan İleri Malzeme AR-GE Merkezi, üniversitelerle iş birliği içinde grafen katkılı süper iletken batarya prototipleri üzerinde çalışıyor.</p>
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
        pageTitle: "Avrupa'nın En Büyük Subasar Ormanı",
        pageImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Karadeniz kıyısında Istranca Dağları'nın eteklerinde yer alan ve dünyanın ender korunan ekosistemlerinden biri olan <strong>Kırklareli İğneada Longoz Ormanları Milli Parkı</strong>, sonbahar ekoturizm sezonunu muhteşem bir doğa şöleniyle açtı.</p>
          
          <p>Mert Gölü, Erikli Gölü ve Saka Gölü'nü çevreleyen dişbudak, kızılağaç ve meşe ormanlarında sarı ve kırmızının her tonu doğaseverleri büyülüyor. Parkur boyunca yer alan ahşap seyir kuleleri, 260'tan fazla göçmen kuş türünün gözlemlenmesine imkan tanıyor.</p>
          
          <p>Milli Parklar Genel Müdürlüğü tarafından yenilenen eko-yürüyüş patikaları, bisiklet rotaları ve profesyonel rehberli kano turlarıyla doğaya zarar vermeden sürdürülebilir bir turizm deneyimi sunuluyor.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklam Alanı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Mert Gölü Kano Safari ve Kuş Gözlemi",
        pageImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Nilüfer Çiçekleri Arasında Sessiz Bir Yolculuk</strong></p>
          <p>Motorlu taşıtların yasak olduğu koruma alanında ziyaretçiler can yelekleriyle kano kiralayarak sazlıklar ve su üstünde süzülen nilüfer bahçeleri arasında dingin bir keşfe çıkabiliyor.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Yöresel Gastronomi & Glamping Konaklama",
        pageImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Meşe Balı, Manda Yoğurdu ve Kalkan Balığı</strong></p>
          <p>İğneada ve Limanköy balıkçı lokantalarında taze Karadeniz balıkları ve köy kahvaltıları sunulurken, orman içinde lüks çadır (glamping) tesisleri doğa ile lüksü bir arada arayanları ağırlıyor.</p>
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
        pageTitle: "Sanat ve Kültürde Yeni Dönem",
        pageImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Çerkezköy Belediyesi Kültür ve Sosyal İşler Müdürlüğü tarafından çocukların ve gençlerin yeteneklerini keşfetmelerini sağlamak amacıyla kurulan <strong>Kültür ve Sanat Akademisi</strong>, 2026-2027 eğitim-öğretim yılı kayıtlarını başlattı.</p>
          
          <p>Çerkezköy Atatürk Kültür Merkezi'nin modern atölyelerinde verilecek eğitimlerde; piyano, keman, bağlama, yan flüt, gitar, halk oyunları, yaratıcı drama, yağlı boya resim ve heykel gibi klasik sanat dallarının yanı sıra robotik kodlama ve dijital çizim kursları da yer alacak.</p>
          
          <p>Tamamı alanında uzman konservatuvar mezunu eğitmenler tarafından verilecek dersler haftalık programlar halinde hafta içi akşam ve hafta sonu grupları olarak düzenlendi.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklamı (336x280)</div></div>

          <div class="interactive-qa-box">
            <div class="qa-box-title"><i class="fa-solid fa-circle-question"></i> Sanat Akademisi Kayıt Detayları:</div>
            <div class="qa-link-card" onclick="goToArticlePage(2)"><span class="qa-link-text">🎨 Hangi Yaş Grupları Başvurabilir? Branş Listesi</span><span class="qa-link-badge">Branşları İncele (Sayfa 2) ➡️</span></div>
            <div class="qa-link-card" onclick="goToArticlePage(3)"><span class="qa-link-text">💻 Ücretsiz Kayıt Linki ve Derslikler</span><span class="qa-link-badge">Başvuru Yap (Sayfa 3) ➡️</span></div>
          </div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Açılan Branşlar ve Yaş Kriterleri",
        pageImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>7'den 70'e Sanat Eğitimi</strong></p>
          <p>Akademi bünyesinde 6-14 yaş grubu çocuklar için temel sanat ve müzik ritim eğitimi, 15 yaş üzeri gençler ve yetişkinler için ise ileri seviye enstrüman ve tiyatro topluluğu sınıfları oluşturulmuştur.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Kayıt Başvuru Kanalları",
        pageImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Kontenjanlar Sınırlı, Katılım Ücretsizdir</strong></p>
          <p>Vatandaşlar Çerkezköy Belediyesi resmi web sitesi veya Atatürk Kültür Merkezi danışma masasından online form doldurarak ücretsiz kayıtlarını tamamlayabilirler.</p>
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
        pageTitle: "General Basri Saran'da Tribün Şöleni & 3 Puan",
        pageImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">Bölgesel Amatör Lig (BAL) 2. Grup'ta şampiyonluk mücadelesi veren temsilcimiz <strong>Çorlu Spor</strong>, kendi sahasında ağırladığı grubun güçlü ekibini baskılı ve tempolu oyunuyla 3-1 mağlup ederek liderlik koltuğunu perçinledi.</p>
          
          <p>Tarihi General Basri Saran Stadyumu'nda 10 bine yakın kırmızı-şimşek taraftarının tezahüratlarıyla başlayan karşılaşmada; 14. dakikada şık bir frikik golüyle öne geçen ekibimiz, ikinci yarıda kanatlardan geliştirdiği organize ataklarla farkı ikiye çıkardı.</p>
          
          <p>Maçın bitiş düdüğüyle birlikte saha içinde ve tribünlerde büyük bir sevinç yumağı oluşurken, taraftarlar futbolcuları tribünlere çağırarak şampiyonluk meşaleleri yaktı.</p>

          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklamı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Teknik Direktör ve Kaptan Değerlendirmeleri",
        pageImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>'Hedefimiz TFF 3. Lig'e Geri Dönmek'</strong></p>
          <p>Teknik Direktör basın toplantısında: 'Çorlu gibi 300 bin nüfuslu bir sanayi kentinin yeri profesyonel liglerdir. Oyuncularım sahaya yüreklerini koydu, bu şehre şampiyonluğu armağan edeceğiz' ifadelerini kullandı.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Puan Durumu & Gelecek Haftanın Derbisi",
        pageImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Haftaya Trakya Derbisi Heyecanı</strong></p>
          <p>Grupta 5 puan farkla zirvede bulunan Çorlu Spor, gelecek hafta deplasmanda Kapaklıspor ile karşı karşıya gelecek. Maç biletlerinin satışa çıkar çıkmaz tükeneceği tahmin ediliyor.</p>
        `
      }
    ]
  },
  {
    id: 15,
    title: "Edirnespor 3. Lig'de Yeni Sezona Fırtına Gibi Başladı: 25 Kasım Stadyumu Doldu!",
    spot: "Sarı-kırmızılı ekip taraftarının desteğiyle sahadan 2-0 galip ayrılarak lige 3 puanla merhaba dedi.",
    category: "SPOR",
    categorySlug: "spor",
    location: "Edirne / Merkez",
    badgeColor: "red",
    date: "26 Ağustos 2026 - 14:15",
    readTime: "3 dk",
    views: 64200,
    likes: 2950,
    reactions: { like: 1850, heart: 1200, clap: 750, thinking: 30, angry: 5 },
    socialPosts: [
      {
        user: "Edirnespor Taraftar Grubu",
        handle: "@Edirnespor1966",
        avatar: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=100&q=80",
        platform: "instagram",
        text: "Edirnemizin gururu 25 Kasım Stadyumu'nda harika bir futbolla 3 puanı kaptı! Yolun sonu şampiyonluk olsun! 🟡🔴⚽ #Edirnespor",
        time: "10 saat önce",
        likes: 1650,
        shares: 410
      }
    ],
    comments: [
      {
        id: 1501,
        author: "Cemil Meriç",
        city: "Edirne / Kaleiçi",
        time: "8 saat önce",
        content: "Yeni forvet transferi çok iyi iş çıkardı, bu sezon 2. Lig'e çıkacağız inşallah!",
        likes: 82
      }
    ],
    author: {
      name: "Hakan Güler",
      title: "Spor Editörü",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Edirnespor'dan Net Galibiyet",
        pageImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">TFF 3. Lig temsilcimiz <strong>Edirnespor</strong>, 2026-2027 futbol sezonunun açılış maçında taraftarı önünde sergilediği baskılı futbolla sahadan 2-0 galip ayrıldı.</p>
          
          <p>Tarihi 25 Kasım Stadyumu'nu dolduran binlerce Edirneli sporsever, 90 dakika boyunca takımlarını coşkuyla destekledi. Yeni transferlerin üst düzey uyumu ve orta sahadaki kusursuz pres oyunu camiaya şampiyonluk umudu aşıladı.</p>
          
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklamı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Yeni Transferlerin Göz Dolduran Performansı",
        pageImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Savunmada ve Forvette Kusursuz Uyum</strong></p>
          <p>Yaz kampını verimli geçiren sarı-kırmızılı ekipte yeni forvetin ilk maçında kaydettiği gol ve asist performansı tribünlerden tam not aldı.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Kulüp Yönetiminden Birlik Çağrısı",
        pageImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>'Tüm Şehir El Ele 2. Lig'e'</strong></p>
          <p>Edirnespor Kulüp Başkanı, maç bitiminde yaptığı açıklamada şehrin dinamiklerini, iş insanlarını ve taraftarları tek yürek olmaya davet etti.</p>
        `
      }
    ]
  },
  {
    id: 16,
    title: "Kırklarelispor Ziraat Türkiye Kupası'nda Tur Atladı!",
    spot: "Atatürk Stadyumu'nda oynanan zorlu eleme maçında Kırklarelispor uzatma dakikalarında bulduğu golle bir üst tura yükseldi.",
    category: "SPOR",
    categorySlug: "spor",
    location: "Kırklareli / Merkez",
    badgeColor: "emerald",
    date: "26 Ağustos 2026 - 13:40",
    readTime: "3 dk",
    views: 58900,
    likes: 2480,
    reactions: { like: 1620, heart: 980, clap: 610, thinking: 20, angry: 5 },
    socialPosts: [
      {
        user: "Kırklarelispor Kulübü",
        handle: "@KirklarelisporFK",
        avatar: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=100&q=80",
        platform: "twitter",
        text: "Ziraat Türkiye Kupası'nda 4. tura yükseldik! Bize inanan ve 90 dakika susmayan yeşil-beyaz sevdalılarına armağan olsun! 🟢⚪🏆 #Kirklarelispor",
        time: "11 saat önce",
        likes: 1420,
        shares: 380
      }
    ],
    comments: [
      {
        id: 1601,
        author: "Metin Kırklarelili",
        city: "Kırklareli / Yayla",
        time: "9 saat önce",
        content: "Kupada büyük takımlardan biri gelsin, Trakya'da futbol şöleni yaşayalım!",
        likes: 74
      }
    ],
    author: {
      name: "Hakan Güler",
      title: "Spor Editörü",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80",
    pages: [
      {
        pageNum: 1,
        pageTitle: "Kırklarelispor Kupa Yolculuğuna Devam Ediyor",
        pageImage: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead">TFF 2. Lig temsilcimiz <strong>Kırklarelispor</strong>, Ziraat Türkiye Kupası eleme turunda nefes kesen 120 dakikalık mücadele sonucunda rakibini 2-1 mağlup ederek adını bir üst tura yazdırdı.</p>
          
          <p>Kırklareli Atatürk Stadyumu'nda normal süresi 1-1 eşitlikle tamamlanan karşılaşmanın 114. dakikasında köşe vuruşundan gelen topu şık bir kafa vuruşuyla ağlara gönderen yeşil-beyazlılar büyük coşku yaşadı.</p>
          
          <div class="in-article-ad"><span class="ad-label">REKLAM</span><div class="ad-content-box">Google AdSense Reklamı (336x280)</div></div>
        `
      },
      {
        pageNum: 2,
        pageTitle: "Kupada Dev Takımların Korkulu Rüyası",
        pageImage: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Trakya'nın Kupa Geleneği</strong></p>
          <p>Geçmiş yıllarda Süper Lig devlerini kupadan eleyerek Türkiye çapında ses getiren Kırklarelispor, bu sezon da kupada çeyrek final hedefiyle yoluna devam ediyor.</p>
        `
      },
      {
        pageNum: 3,
        pageTitle: "Kura Çekimi ve Rakip Analizi",
        pageImage: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80",
        content: `
          <p class="lead"><strong>Bir Sonraki Turda Rakip Kim?</strong></p>
          <p>TFF Riva Hasan Doğan Milli Takımlar Tesisleri'nde gerçekleştirilecek kura çekimi sonrası Kırklarelispor'un 4. turdaki rakibi belli olacak.</p>
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
  },
  {
    id: 205,
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
