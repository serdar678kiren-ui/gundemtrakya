/**
 * GÜNDEM TRAKYA - Kategori Filtreleme, Köşe Yazarları, Kayan Borsa, Sosyal Medya & Yorum Sistemi
 */

document.addEventListener('DOMContentLoaded', () => {
  // Uygulama Durumu
  const state = {
    currentHeadlineIndex: 0,
    sliderTimer: null,
    isSliderPaused: false,
    activeCategory: 'all',
    activePharmCity: 'tekirdag',
    searchQuery: '',
    breakingIndex: 0,
    breakingTimer: null,
    bookmarks: JSON.parse(localStorage.getItem('haber_bookmarks') || '[]'),
    userReactions: JSON.parse(localStorage.getItem('haber_reactions') || '{}'),
    theme: localStorage.getItem('haber_theme') || 'dark',
    cookieConsent: localStorage.getItem('cookie_consent') === 'true',
    currentArticleId: null,
    currentArticlePage: 1,
    weatherIndex: 0
  };

  // Hava Durumu Listesi (Canlı Döngü)
  const weatherCities = [
    { city: "Tekirdağ", temp: "28°C", icon: "fa-sun", condition: "Güneşli" },
    { city: "Edirne", temp: "29°C", icon: "fa-cloud-sun", condition: "Açık" },
    { city: "Kırklareli", temp: "26°C", icon: "fa-sun", condition: "Az Bulutlu" },
    { city: "Çorlu", temp: "28°C", icon: "fa-wind", condition: "Rüzgarlı" },
    { city: "Çerkezköy", temp: "27°C", icon: "fa-cloud", condition: "Parçalı Bulutlu" }
  ];

  // DOM Elemanları
  const elements = {
    financeTrack: document.getElementById('financeTrack'),
    currentDateEl: document.getElementById('currentDateEl'),
    liveClockEl: document.getElementById('liveClockEl'),
    liveWeatherWidget: document.getElementById('liveWeatherWidget'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    bookmarkToggleBtn: document.getElementById('bookmarkToggleBtn'),
    bookmarkCounter: document.getElementById('bookmarkCounter'),

    breakingContent: document.getElementById('breakingContent'),
    prevBreakingBtn: document.getElementById('prevBreakingBtn'),
    nextBreakingBtn: document.getElementById('nextBreakingBtn'),

    categoryNavList: document.getElementById('categoryNavList'),
    navSearchInput: document.getElementById('navSearchInput'),
    navSearchBtn: document.getElementById('navSearchBtn'),

    feedSectionTitle: document.getElementById('feedSectionTitle'),
    feedCountBadge: document.getElementById('feedCountBadge'),

    sliderMediaBox: document.getElementById('sliderMediaBox'),
    sliderImg: document.getElementById('sliderImg'),
    sliderCategoryBadge: document.getElementById('sliderCategoryBadge'),
    sliderTitle: document.getElementById('sliderTitle'),
    sliderSpot: document.getElementById('sliderSpot'),
    sliderNumbersBar: document.getElementById('sliderNumbersBar'),
    sideHeadlinesContainer: document.getElementById('sideHeadlinesContainer'),
    subHeadlinesGrid: document.getElementById('subHeadlinesGrid'),

    columnistsGrid: document.getElementById('columnistsGrid'),

    pharmacyTabs: document.getElementById('pharmacyTabs'),
    pharmacyListContainer: document.getElementById('pharmacyListContainer'),

    feedArticlesGrid: document.getElementById('feedArticlesGrid'),
    topReadList: document.getElementById('topReadList'),

    // Cookie Banner
    cookieConsentBar: document.getElementById('cookieConsentBar'),
    acceptCookieBtn: document.getElementById('acceptCookieBtn'),

    // Modal
    articleModal: document.getElementById('articleModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalHeroImg: document.getElementById('modalHeroImg'),
    modalBadge: document.getElementById('modalBadge'),
    modalTitle: document.getElementById('modalTitle'),
    modalAuthorName: document.getElementById('modalAuthorName'),
    modalDate: document.getElementById('modalDate'),
    modalReadTime: document.getElementById('modalReadTime'),
    modalViews: document.getElementById('modalViews'),
    modalArticleText: document.getElementById('modalArticleText'),
    modalBookmarkBtn: document.getElementById('modalBookmarkBtn'),
    modalShareFb: document.getElementById('modalShareFb'),
    modalShareWa: document.getElementById('modalShareWa'),
    modalShareTw: document.getElementById('modalShareTw'),
    modalShareTg: document.getElementById('modalShareTg'),
    modalShareCopy: document.getElementById('modalShareCopy'),

    toastBox: document.getElementById('toastBox'),
    toastMsg: document.getElementById('toastMsg')
  };

  // --- 1. Canlı Tarih & Saniye Saniye Dijital Saat ---
  function initHeaderAndClock() {
    function updateClock() {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      if (elements.liveClockEl) {
        elements.liveClockEl.textContent = timeStr;
      }
    }
    updateClock();
    setInterval(updateClock, 1000);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('tr-TR', options);
    if (elements.currentDateEl) {
      elements.currentDateEl.textContent = today;
    }

    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();

    elements.themeToggleBtn?.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('haber_theme', state.theme);
      updateThemeIcon();
      showToast(state.theme === 'dark' ? 'Koyu tema aktif' : 'Açık tema aktif');
    });

    elements.bookmarkToggleBtn?.addEventListener('click', () => {
      showToast(`${state.bookmarks.length} adet kaydedilen haberiniz var`);
    });

    if (!state.cookieConsent && elements.cookieConsentBar) {
      setTimeout(() => {
        elements.cookieConsentBar.classList.add('active');
      }, 1000);
    }

    elements.acceptCookieBtn?.addEventListener('click', () => {
      state.cookieConsent = true;
      localStorage.setItem('cookie_consent', 'true');
      elements.cookieConsentBar.classList.remove('active');
      showToast('Çerez tercihleriniz kaydedildi');
    });
  }

  function updateThemeIcon() {
    if (state.theme === 'dark') {
      elements.themeIcon.className = 'fa-solid fa-sun';
    } else {
      elements.themeIcon.className = 'fa-solid fa-moon';
    }
  }

  // --- 2. Canlı Trakya Hava Durumu Döngüsü ---
  function initLiveWeather() {
    function updateWeather() {
      if (!elements.liveWeatherWidget) return;
      const w = weatherCities[state.weatherIndex];
      elements.liveWeatherWidget.innerHTML = `<i class="fa-solid ${w.icon}"></i> <span>${w.city} ${w.temp} (${w.condition})</span>`;
      state.weatherIndex = (state.weatherIndex + 1) % weatherCities.length;
    }
    updateWeather();
    setInterval(updateWeather, 7000);
  }

  // --- 3. KESİNTİSİZ KAYAN BORSA ŞERİDİ (MARQUEE) & CANLI DALGALANMA ---
  function renderFinance() {
    if (!elements.financeTrack) return;
    
    const generateItems = (setNum) => financeData.map((item, idx) => `
      <div class="finance-item" id="financeItem_${setNum}_${idx}">
        <span class="finance-code">${item.name}:</span>
        <span class="finance-val" id="financeVal_${setNum}_${idx}">${item.value}</span>
        <span class="finance-rate ${item.up ? 'up' : 'down'}" id="financeRate_${setNum}_${idx}">
          <i class="fa-solid ${item.up ? 'fa-caret-up' : 'fa-caret-down'}"></i> ${item.change}
        </span>
      </div>
    `).join('');

    elements.financeTrack.innerHTML = generateItems(1) + generateItems(2);
  }

  function startLiveFinanceTicker() {
    setInterval(() => {
      const randomIdx = Math.floor(Math.random() * financeData.length);
      const item = financeData[randomIdx];
      const isUp = Math.random() > 0.45;
      
      // Canlı mikro fiyat dalgalanması
      let formattedVal = item.value;
      if (item.baseVal) {
        const deltaPercent = (Math.random() * 0.15 - 0.07) / 100;
        const currentVal = item.baseVal * (1 + deltaPercent);
        if (item.code.includes('USD') || item.code.includes('EUR')) {
          formattedVal = currentVal.toFixed(2).replace('.', ',') + (item.unit ? ' ' + item.unit : '');
        } else if (item.code === 'GAU/TRY' || item.code === 'ONS') {
          formattedVal = currentVal.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + (item.unit ? ' ' + item.unit : '');
        } else {
          formattedVal = Math.round(currentVal).toLocaleString('tr-TR') + (item.unit ? ' ' + item.unit : '');
        }
      }
      
      const newChange = `${isUp ? '+' : '-'}${(Math.random() * 0.35 + 0.15).toFixed(2)}%`;
      item.up = isUp;
      item.change = newChange;
      item.value = formattedVal;

      [1, 2].forEach(setNum => {
        const itemEl = document.getElementById(`financeItem_${setNum}_${randomIdx}`);
        const valEl = document.getElementById(`financeVal_${setNum}_${randomIdx}`);
        const rateEl = document.getElementById(`financeRate_${setNum}_${randomIdx}`);

        if (itemEl && valEl && rateEl) {
          itemEl.classList.remove('flash-up', 'flash-down');
          itemEl.classList.add(isUp ? 'flash-up' : 'flash-down');

          setTimeout(() => {
            itemEl.classList.remove('flash-up', 'flash-down');
          }, 1200);

          valEl.textContent = formattedVal;
          rateEl.className = `finance-rate ${isUp ? 'up' : 'down'}`;
          rateEl.innerHTML = `<i class="fa-solid ${isUp ? 'fa-caret-up' : 'fa-caret-down'}"></i> ${newChange}`;
        }
      });
    }, 3500);
  }

  // --- 4. Son Dakika Şeridi & Tıklama ile Habere Gitme ---
  function renderBreakingNews() {
    if (!elements.breakingContent) return;
    const current = breakingNewsData[state.breakingIndex];
    elements.breakingContent.innerHTML = `<strong>${current.time}</strong> - ${current.title} <i class="fa-solid fa-arrow-right-long" style="font-size: 0.8rem; margin-left: 0.5rem; color: var(--news-red);"></i>`;

    elements.breakingContent.onclick = () => {
      const targetId = current.articleId || 1;
      openArticleModal(targetId);
      showToast(`Son Dakika Haberi Açılıyor...`);
    };
  }

  function nextBreaking() {
    state.breakingIndex = (state.breakingIndex + 1) % breakingNewsData.length;
    renderBreakingNews();
  }

  function prevBreaking() {
    state.breakingIndex = (state.breakingIndex - 1 + breakingNewsData.length) % breakingNewsData.length;
    renderBreakingNews();
  }

  elements.nextBreakingBtn?.addEventListener('click', nextBreaking);
  elements.prevBreakingBtn?.addEventListener('click', prevBreaking);
  state.breakingTimer = setInterval(nextBreaking, 6000);

  // --- 5. Kategori Menüsü & Kusursuz Filtreleme / Kaydırma ---
  function renderCategoryNav() {
    if (!elements.categoryNavList) return;
    elements.categoryNavList.innerHTML = portalCategories.map(cat => `
      <li>
        <button class="nav-item-btn ${state.activeCategory === cat.slug ? 'active' : ''}" data-cat="${cat.slug}">
          <i class="fa-solid ${cat.icon || 'fa-tag'}" style="margin-right: 0.35rem; font-size: 0.82rem; opacity: 0.9;"></i>${cat.name}
        </button>
      </li>
    `).join('');

    elements.categoryNavList.querySelectorAll('.nav-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-cat');
        filterCategory(slug);
      });
    });

    elements.navSearchBtn?.addEventListener('click', executeSearch);
    elements.navSearchInput?.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') executeSearch();
    });
  }

  window.filterCategory = function(slug) {
    state.activeCategory = slug;
    state.searchQuery = '';
    if (elements.navSearchInput) elements.navSearchInput.value = '';

    renderCategoryNav();
    renderFeedArticles();

    const feedSec = document.getElementById('feedSection');
    if (feedSec) {
      feedSec.scrollIntoView({ behavior: 'smooth' });
    }

    const catObj = portalCategories.find(c => c.slug === slug);
    const catTitle = catObj ? catObj.name : 'GÜNCEL';
    showToast(`${catTitle} kategorisi açıldı`);
  };

  function executeSearch() {
    const q = elements.navSearchInput.value.trim().toLowerCase();
    state.searchQuery = q;
    renderFeedArticles();
    if (q) {
      showToast(`"${q}" için sonuçlar listeleniyor`);
      const feedSec = document.getElementById('feedSection');
      if (feedSec) feedSec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // --- 6. 1'den 10'a Manşet Slider ---
  function initHeadlineSlider() {
    renderSliderNumbers();
    showHeadline(0);
    startSliderTimer();

    elements.sliderMediaBox?.addEventListener('mouseenter', () => {
      state.isSliderPaused = true;
    });
    elements.sliderMediaBox?.addEventListener('mouseleave', () => {
      state.isSliderPaused = false;
    });

    elements.sliderMediaBox?.addEventListener('click', () => {
      const article = headlineArticles[state.currentHeadlineIndex];
      if (article) openArticleModal(article.id);
    });

    renderSideHeadlines();
    renderSubHeadlines();
  }

  function renderSliderNumbers() {
    if (!elements.sliderNumbersBar) return;
    elements.sliderNumbersBar.innerHTML = headlineArticles.slice(0, 10).map((art, idx) => `
      <button class="slider-num-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        ${idx + 1}
      </button>
    `).join('');

    elements.sliderNumbersBar.querySelectorAll('.slider-num-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        showHeadline(idx);
      });
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        showHeadline(idx);
        openArticleModal(headlineArticles[idx].id);
      });
    });
  }

  function showHeadline(index) {
    state.currentHeadlineIndex = index;
    const article = headlineArticles[index];
    if (!article) return;

    elements.sliderImg.src = article.image;
    elements.sliderImg.alt = article.title;
    elements.sliderCategoryBadge.textContent = article.category;
    elements.sliderTitle.textContent = article.title;
    elements.sliderSpot.textContent = article.spot;

    elements.sliderNumbersBar.querySelectorAll('.slider-num-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });
  }

  function startSliderTimer() {
    if (state.sliderTimer) clearInterval(state.sliderTimer);
    const maxHeadlines = Math.min(headlineArticles.length, 10) || 1;
    state.sliderTimer = setInterval(() => {
      if (!state.isSliderPaused) {
        state.currentHeadlineIndex = (state.currentHeadlineIndex + 1) % maxHeadlines;
        showHeadline(state.currentHeadlineIndex);
      }
    }, 4500);
  }

  function renderSideHeadlines() {
    if (!elements.sideHeadlinesContainer) return;
    const sideArticles = [headlineArticles[1], headlineArticles[2]].filter(Boolean);
    elements.sideHeadlinesContainer.innerHTML = sideArticles.map(art => `
      <div class="side-card" data-id="${art.id}">
        <div class="side-img-box">
          <img src="${art.image}" alt="${art.title}" class="side-img" loading="lazy" onerror="this.onerror=null; this.src='img/ataturk-bayrak.jpg';" />
          <span class="side-badge">${art.category}</span>
        </div>
        <div class="side-body">
          <h4 class="side-title">${art.title}</h4>
        </div>
      </div>
    `).join('');

    elements.sideHeadlinesContainer.querySelectorAll('.side-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.getAttribute('data-id'), 10);
        openArticleModal(id);
      });
    });
  }

  function renderSubHeadlines() {
    if (!elements.subHeadlinesGrid) return;
    const subArticles = headlineArticles.slice(3, 7).filter(Boolean);
    elements.subHeadlinesGrid.innerHTML = subArticles.map(art => `
      <div class="sub-card" data-id="${art.id}">
        <div class="sub-media">
          <img src="${art.image}" alt="${art.title}" class="sub-img" loading="lazy" onerror="this.onerror=null; this.src='img/ataturk-bayrak.jpg';" />
        </div>
        <div class="sub-body">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem;">
            <span style="color: var(--news-red); font-size: 0.72rem; font-weight: 800; text-transform: uppercase;">${art.category}</span>
            <span style="color: var(--text-light); font-size: 0.7rem;"><i class="fa-solid fa-location-dot"></i> ${art.location || 'Trakya'}</span>
          </div>
          <h4 class="sub-title">${art.title}</h4>
        </div>
      </div>
    `).join('');

    elements.subHeadlinesGrid.querySelectorAll('.sub-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.getAttribute('data-id'), 10);
        openArticleModal(id);
      });
    });
  }

  // --- 7. Köşe Yazarları Kartları & Tıklamayla Makale Açma ---
  function renderColumnists() {
    if (!elements.columnistsGrid) return;
    elements.columnistsGrid.innerHTML = columnistsData.map(col => `
      <div class="columnist-card" data-col-id="${col.id}">
        <img src="${col.avatar}" alt="${col.name}" class="columnist-avatar" onerror="this.onerror=null; this.src='img/serdar-tugba.jpg';" />
        <div class="columnist-info">
          <div class="columnist-name">${col.name}</div>
          <div class="columnist-role">${col.title}</div>
          <div class="columnist-title">"${col.articleTitle}"</div>
        </div>
      </div>
    `).join('');

    elements.columnistsGrid.querySelectorAll('.columnist-card').forEach(card => {
      card.addEventListener('click', () => {
        const colId = parseInt(card.getAttribute('data-col-id'), 10);
        openArticleModal(colId);
      });
    });
  }

  // --- 8. Trakya Nöbetçi Eczaneler Modülü ---
  function initPharmacies() {
    renderPharmacyTabs();
    renderPharmacyList();
  }

  function renderPharmacyTabs() {
    if (!elements.pharmacyTabs) return;
    const cities = [
      { id: 'tekirdag', name: 'Tekirdağ / Çorlu / Çerkezköy' },
      { id: 'edirne', name: 'Edirne' },
      { id: 'kirklareli', name: 'Kırklareli' }
    ];

    elements.pharmacyTabs.innerHTML = cities.map(c => `
      <button class="pharm-tab-btn ${state.activePharmCity === c.id ? 'active' : ''}" data-city="${c.id}">
        ${c.name}
      </button>
    `).join('');

    elements.pharmacyTabs.querySelectorAll('.pharm-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activePharmCity = btn.getAttribute('data-city');
        renderPharmacyTabs();
        renderPharmacyList();
      });
    });
  }

  function renderPharmacyList() {
    if (!elements.pharmacyListContainer) return;
    const list = pharmacyData[state.activePharmCity] || [];

    elements.pharmacyListContainer.innerHTML = list.map(item => `
      <div class="pharmacy-item">
        <div class="pharm-top">
          <span class="pharm-name">${item.name}</span>
          <span class="pharm-district">${item.district}</span>
        </div>
        <p class="pharm-address"><i class="fa-solid fa-location-dot" style="color: var(--news-red); margin-right: 0.2rem;"></i> ${item.address}</p>
        <div class="pharm-actions">
          <span class="pharm-phone"><i class="fa-solid fa-phone"></i> ${item.phone}</span>
          <a href="tel:${item.phone.replace(/\\s+/g, '')}" class="pharm-call-btn">
            <i class="fa-solid fa-phone-volume"></i> Ara
          </a>
        </div>
      </div>
    `).join('');
  }

  // --- 9. Haber Akışı & Dinamik Başlık ve Filtreleme ---
  function renderFeedArticles() {
    if (!elements.feedArticlesGrid) return;

    let list = headlineArticles;

    if (state.activeCategory !== 'all') {
      list = list.filter(a => a.categorySlug === state.activeCategory);
    } else {
      // Tümü seçiliyken haberleri öne al
      list = list.filter(a => a.categorySlug !== 'yazarlar');
    }

    if (state.searchQuery) {
      list = headlineArticles.filter(a => 
        a.title.toLowerCase().includes(state.searchQuery) ||
        a.spot.toLowerCase().includes(state.searchQuery) ||
        (a.location && a.location.toLowerCase().includes(state.searchQuery)) ||
        (a.author?.name && a.author.name.toLowerCase().includes(state.searchQuery))
      );
    }

    // Başlığı Güncelle
    const catObj = portalCategories.find(c => c.slug === state.activeCategory);
    if (elements.feedSectionTitle) {
      if (state.searchQuery) {
        elements.feedSectionTitle.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> "${state.searchQuery}" Arama Sonuçları`;
      } else if (catObj && catObj.slug === 'yazarlar') {
        elements.feedSectionTitle.innerHTML = `<i class="fa-solid fa-pen-nib"></i> GÜNDEM TRAKYA KÖŞE YAZILARI`;
      } else if (catObj && catObj.slug !== 'all') {
        elements.feedSectionTitle.innerHTML = `<i class="fa-solid ${catObj.icon || 'fa-newspaper'}"></i> ${catObj.name} GELİŞMELERİ`;
      } else {
        elements.feedSectionTitle.innerHTML = `<i class="fa-solid fa-newspaper"></i> GÜNCEL GELİŞMELER`;
      }
    }

    if (elements.feedCountBadge) {
      elements.feedCountBadge.textContent = `${list.length} ${state.activeCategory === 'yazarlar' ? 'Yazı' : 'Haber'}`;
    }

    if (list.length === 0) {
      elements.feedArticlesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: var(--news-red); margin-bottom: 0.8rem;"></i>
          <h3>Bu Kategoride Haber Bulunamadı</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.4rem;">Tüm haberleri görüntülemek için aşağıdaki butona tıklayabilirsiniz.</p>
          <button class="page-nav-btn" onclick="filterCategory('all')" style="margin-top: 1rem;">
            <i class="fa-solid fa-border-all"></i> Tüm Haberleri Göster
          </button>
        </div>
      `;
      return;
    }

    elements.feedArticlesGrid.innerHTML = list.map(art => {
      const commentCount = (art.comments || []).length;
      const isWriter = art.categorySlug === 'yazarlar';

      return `
        <article class="feed-card" data-id="${art.id}">
          <div class="feed-media">
            <img src="${art.image}" alt="${art.title}" class="feed-img" loading="lazy" onerror="this.onerror=null; this.src='img/ataturk-bayrak.jpg';" />
            <span style="position: absolute; top: 8px; left: 8px; background: ${isWriter ? '#8b5cf6' : 'var(--news-red)'}; color: white; font-size: 0.7rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: var(--radius-sm);">
              ${art.category}
            </span>
            <span style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.75); color: #38bdf8; font-size: 0.7rem; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: var(--radius-sm);">
              <i class="fa-solid ${isWriter ? 'fa-user-pen' : 'fa-location-dot'}"></i> ${art.location || 'Trakya'}
            </span>
          </div>
          <div class="feed-body">
            ${isWriter ? `
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
                <img src="${art.author.avatar}" style="width: 1.8rem; height: 1.8rem; border-radius: 50%;" />
                <span style="font-weight: 800; font-size: 0.85rem; color: var(--news-blue);">${art.author.name}</span>
              </div>
            ` : ''}
            <h3 class="feed-title">${art.title}</h3>
            <p class="feed-summary">${art.spot}</p>
            <div class="feed-footer">
              <div class="feed-footer-tags">
                <span><i class="fa-regular fa-clock"></i> ${art.readTime}</span>
                <span><i class="fa-regular fa-comment-dots" style="color: var(--news-blue);"></i> ${commentCount} Yorum</span>
              </div>
              <span><i class="fa-regular fa-eye"></i> ${art.views.toLocaleString('tr-TR')}</span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    elements.feedArticlesGrid.querySelectorAll('.feed-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.getAttribute('data-id'), 10);
        openArticleModal(id);
      });
    });
  }

  // --- 10. Çok Okunanlar ---
  function renderTopRead() {
    if (!elements.topReadList) return;
    elements.topReadList.innerHTML = topReadArticles.map(item => `
      <li class="top-read-item" onclick="document.querySelector('.feed-card')?.click()">
        <span class="rank-number">${item.rank}</span>
        <div>
          <span style="font-size: 0.72rem; color: var(--news-red); font-weight: 800; text-transform: uppercase;">${item.category}</span>
          <div class="top-read-text">${item.title}</div>
          <span style="font-size: 0.75rem; color: var(--text-light);"><i class="fa-regular fa-eye"></i> ${item.views}</span>
        </div>
      </li>
    `).join('');
  }

  // --- 11. ÇOK SAYFALI HABER, SOSYAL MEDYA PAYLAŞIMLARI & YORUM MOTORU ---
  function openArticleModal(articleId, pageNum = 1) {
    const article = headlineArticles.find(a => a.id === articleId);
    if (!article) return;

    state.currentArticleId = articleId;
    state.currentArticlePage = pageNum;

    elements.modalBadge.textContent = article.category;
    elements.modalTitle.textContent = article.title;
    elements.modalAuthorName.textContent = article.author?.name || 'Gündem Trakya Editörü';
    elements.modalDate.textContent = article.date;
    elements.modalReadTime.textContent = article.readTime;
    elements.modalViews.textContent = article.views.toLocaleString('tr-TR');

    renderArticlePageContent(article, pageNum);
    updateModalBookmarkBtn(articleId);

    const pageUrl = encodeURIComponent(window.location.href);
    const titleText = encodeURIComponent(article.title);

    elements.modalShareFb.onclick = () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, '_blank', 'width=600,height=400');
    };

    elements.modalShareWa.onclick = () => {
      window.open(`https://api.whatsapp.com/send?text=${titleText}%20${pageUrl}`, '_blank');
    };

    elements.modalShareTw.onclick = () => {
      window.open(`https://twitter.com/intent/tweet?text=${titleText}&url=${pageUrl}`, '_blank');
    };

    elements.modalShareTg.onclick = () => {
      window.open(`https://t.me/share/url?url=${pageUrl}&text=${titleText}`, '_blank');
    };

    elements.modalShareCopy.onclick = () => {
      navigator.clipboard.writeText(window.location.href);
      showToast('Haber bağlantısı kopyalandı!');
    };

    elements.articleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function renderArticlePageContent(article, pageNum) {
    const pages = article.pages || [{ pageNum: 1, content: article.content || '<p>İçerik yükleniyor...</p>' }];
    const totalPages = pages.length;
    const activePage = pages.find(p => p.pageNum === pageNum) || pages[0];

    if (elements.modalHeroImg) {
      const targetImage = activePage.pageImage || article.image;
      if (elements.modalHeroImg.src !== targetImage) {
        elements.modalHeroImg.style.opacity = '0.2';
        setTimeout(() => {
          elements.modalHeroImg.src = targetImage;
          elements.modalHeroImg.style.opacity = '1';
        }, 150);
      }
    }

    let paginationHtml = '';
    if (totalPages > 1) {
      paginationHtml = `
        <div class="article-pagination-bar">
          <div class="pagination-info">
            <i class="fa-solid fa-images"></i>
            <span>Sayfa ${activePage.pageNum} / ${totalPages}</span>
            <small style="color: var(--text-light); margin-left: 0.5rem;">(${activePage.pageTitle || 'Detaylar'})</small>
          </div>
          <div class="pagination-btn-group">
            ${activePage.pageNum > 1 ? `
              <button class="page-nav-btn secondary" onclick="goToArticlePage(${activePage.pageNum - 1})">
                <i class="fa-solid fa-arrow-left"></i> Önceki Fotoğraf & Sayfa
              </button>
            ` : ''}
            
            ${activePage.pageNum < totalPages ? `
              <button class="page-nav-btn" onclick="goToArticlePage(${activePage.pageNum + 1})">
                Sonraki Fotoğraf ve Cevaplar <i class="fa-solid fa-arrow-right"></i>
              </button>
            ` : `
              <button class="page-nav-btn secondary" onclick="goToArticlePage(1)">
                <i class="fa-solid fa-rotate-left"></i> Başa Dön (Sayfa 1)
              </button>
            `}
          </div>
        </div>
      `;
    }

    // 1. Emoji Duygu / Reaksiyon Barı
    const r = article.reactions || { like: 1400, heart: 980, clap: 520, thinking: 180, angry: 25 };
    const userReacted = state.userReactions[article.id];

    const reactionsHtml = `
      <div class="social-reaction-bar">
        <span class="reaction-title"><i class="fa-solid fa-chart-pie" style="color: var(--news-red);"></i> Bu Habere / Yazıya Tepkiniz:</span>
        <div class="reaction-emojis">
          <button class="reaction-btn ${userReacted === 'like' ? 'active' : ''}" onclick="addReaction(${article.id}, 'like')">👍 Beğendim <span id="react_like_${article.id}">${r.like}</span></button>
          <button class="reaction-btn ${userReacted === 'heart' ? 'active' : ''}" onclick="addReaction(${article.id}, 'heart')">❤️ Harika <span id="react_heart_${article.id}">${r.heart}</span></button>
          <button class="reaction-btn ${userReacted === 'clap' ? 'active' : ''}" onclick="addReaction(${article.id}, 'clap')">👏 Tebrikler <span id="react_clap_${article.id}">${r.clap}</span></button>
          <button class="reaction-btn ${userReacted === 'thinking' ? 'active' : ''}" onclick="addReaction(${article.id}, 'thinking')">🤔 Düşündürücü <span id="react_thinking_${article.id}">${r.thinking}</span></button>
          <button class="reaction-btn ${userReacted === 'angry' ? 'active' : ''}" onclick="addReaction(${article.id}, 'angry')">😡 Tepkiliyim <span id="react_angry_${article.id}">${r.angry}</span></button>
        </div>
      </div>
    `;

    // 2. Sosyal Medya Canlı Gönderileri / Tweetler & Instagram
    let socialHtml = '';
    if (article.socialPosts && article.socialPosts.length > 0) {
      socialHtml = `
        <div class="social-pulse-section">
          <div class="social-pulse-header">
            <span><i class="fa-solid fa-share-nodes"></i> Trakya Sosyal Medya Nabzı (Instagram & X)</span>
            <span style="font-size: 0.75rem; color: var(--news-blue); font-weight: 700;">Canlı Alıntılar</span>
          </div>
          <div class="social-cards-grid">
            ${article.socialPosts.map(post => `
              <div class="social-tweet-card">
                <div class="tweet-user-row">
                  <img src="${post.avatar}" alt="${post.user}" class="tweet-avatar" />
                  <div>
                    <div class="tweet-name">${post.user} <i class="fa-solid fa-circle-check" style="color: var(--news-blue); font-size: 0.75rem;"></i></div>
                    <div class="tweet-handle">${post.handle}</div>
                  </div>
                  <i class="fa-brands ${post.platform === 'facebook' ? 'fa-facebook' : post.platform === 'instagram' ? 'fa-instagram' : 'fa-x-twitter'}" style="margin-left: auto; color: ${post.platform === 'instagram' ? '#e1306c' : 'var(--news-blue)'}; font-size: 1.1rem;"></i>
                </div>
                <p class="tweet-text">${post.text}</p>
                <div class="tweet-footer">
                  <span><i class="fa-regular fa-heart"></i> ${post.likes}</span>
                  <span><i class="fa-solid fa-share"></i> ${post.shares}</span>
                  <span><i class="fa-regular fa-clock"></i> ${post.time}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // 3. Okuyucu Yorumları & Yorum Yap Kutusu
    const comments = article.comments || [];
    const commentsHtml = `
      <section class="comments-section">
        <div class="comments-header">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);"><i class="fa-solid fa-comments" style="color: var(--news-red);"></i> Okuyucu Yorumları (${comments.length})</h3>
          <span style="font-size: 0.8rem; color: var(--text-light);">Yorum Kurallarına Uygun Yayınlanır</span>
        </div>

        <div class="comment-input-box">
          <div class="comment-input-row">
            <input type="text" id="commentAuthorInput" class="comment-input" placeholder="Adınız Soyadınız" required />
            <input type="text" id="commentCityInput" class="comment-input" placeholder="Şehir / İlçe (Örn: Çerkezköy / Çorlu)" required />
          </div>
          <textarea id="commentTextInput" class="comment-textarea" placeholder="Bu gelişme hakkındaki düşüncelerinizi yazınız..." required></textarea>
          <button class="page-nav-btn" onclick="submitArticleComment(${article.id})" style="padding: 0.55rem 1.3rem;">
            <i class="fa-solid fa-paper-plane"></i> Yorumu Gönder
          </button>
        </div>

        <div class="comment-list" id="commentList_${article.id}">
          ${comments.map(c => `
            <div class="comment-card">
              <div class="comment-top-row">
                <div class="comment-user-info">
                  <i class="fa-solid fa-circle-user" style="font-size: 1.4rem; color: var(--news-blue);"></i>
                  <span style="font-weight: 800; font-size: 0.95rem;">${c.author}</span>
                  <span class="comment-city-tag">${c.city}</span>
                </div>
                <span class="comment-time">${c.time}</span>
              </div>
              <p class="comment-body">${c.content}</p>
              <div class="comment-actions">
                <span class="comment-like-btn" onclick="likeComment(this)"><i class="fa-regular fa-thumbs-up"></i> <span>${c.likes || 12}</span> Beğen</span>
                <span style="cursor: pointer;"><i class="fa-solid fa-reply"></i> Yanıtla</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    elements.modalArticleText.innerHTML = `
      ${activePage.content}
      ${paginationHtml}
      ${reactionsHtml}
      ${socialHtml}
      ${commentsHtml}
    `;

    const modalBody = elements.articleModal.querySelector('.modal-body');
    if (modalBody) modalBody.scrollTop = 0;
  }

  window.goToArticlePage = function(pageNum) {
    if (state.currentArticleId) {
      const article = headlineArticles.find(a => a.id === state.currentArticleId);
      if (article) {
        state.currentArticlePage = pageNum;
        renderArticlePageContent(article, pageNum);
        showToast(`Sayfa ${pageNum} yüklendi`);
      }
    }
  };

  window.addReaction = function(articleId, reactionKey) {
    const article = headlineArticles.find(a => a.id === articleId);
    if (!article || !article.reactions) return;

    if (state.userReactions[articleId] === reactionKey) {
      showToast('Bu tepkiyi zaten verdiniz');
      return;
    }

    article.reactions[reactionKey] = (article.reactions[reactionKey] || 0) + 1;
    state.userReactions[articleId] = reactionKey;
    localStorage.setItem('haber_reactions', JSON.stringify(state.userReactions));

    const spanEl = document.getElementById(`react_${reactionKey}_${articleId}`);
    if (spanEl) {
      spanEl.textContent = article.reactions[reactionKey];
    }
    showToast('Tepkiniz kaydedildi! 👍');
    renderArticlePageContent(article, state.currentArticlePage);
  };

  window.submitArticleComment = function(articleId) {
    const authorEl = document.getElementById('commentAuthorInput');
    const cityEl = document.getElementById('commentCityInput');
    const textEl = document.getElementById('commentTextInput');

    if (!authorEl || !textEl || !authorEl.value.trim() || !textEl.value.trim()) {
      showToast('Lütfen adınızı ve yorumunuzu giriniz');
      return;
    }

    const article = headlineArticles.find(a => a.id === articleId);
    if (!article) return;

    if (!article.comments) article.comments = [];

    const newComment = {
      id: Date.now(),
      author: authorEl.value.trim(),
      city: cityEl?.value.trim() || 'Trakya',
      time: 'Az önce',
      content: textEl.value.trim(),
      likes: 1
    };

    article.comments.unshift(newComment);
    showToast('Yorumunuz başarıyla yayınlandı! 🎉');
    renderArticlePageContent(article, state.currentArticlePage);
    renderFeedArticles();
  };

  window.likeComment = function(btnEl) {
    const countEl = btnEl.querySelector('span');
    if (countEl) {
      countEl.textContent = parseInt(countEl.textContent, 10) + 1;
      btnEl.style.color = 'var(--news-red)';
      showToast('Yorum beğenildi');
    }
  };

  function closeArticleModal() {
    elements.articleModal.classList.remove('active');
    document.body.style.overflow = '';
    state.currentArticleId = null;
    state.currentArticlePage = 1;
  }

  window.openArticleModal = openArticleModal;
  window.closeArticleModal = closeArticleModal;

  elements.modalCloseBtn?.addEventListener('click', closeArticleModal);
  elements.articleModal?.addEventListener('click', (e) => {
    if (e.target === elements.articleModal) closeArticleModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.articleModal.classList.contains('active')) {
      closeArticleModal();
    }
  });

  elements.modalBookmarkBtn?.addEventListener('click', () => {
    if (!state.currentArticleId) return;
    const id = state.currentArticleId;
    const idx = state.bookmarks.indexOf(id);

    if (idx > -1) {
      state.bookmarks.splice(idx, 1);
      showToast('Haber kaydedilenlerden çıkarıldı');
    } else {
      state.bookmarks.push(id);
      showToast('Haber favorilere kaydedildi');
    }

    localStorage.setItem('haber_bookmarks', JSON.stringify(state.bookmarks));
    updateModalBookmarkBtn(id);
    updateBookmarkCounter();
  });

  function updateModalBookmarkBtn(id) {
    const isBookmarked = state.bookmarks.includes(id);
    elements.modalBookmarkBtn.innerHTML = `<i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i> ${isBookmarked ? 'Kaydedildi' : 'Haberi Kaydet'}`;
    elements.modalBookmarkBtn.style.color = isBookmarked ? 'var(--news-red)' : 'inherit';
  }

  function updateBookmarkCounter() {
    if (elements.bookmarkCounter) {
      elements.bookmarkCounter.textContent = state.bookmarks.length;
      elements.bookmarkCounter.style.display = state.bookmarks.length > 0 ? 'flex' : 'none';
    }
  }

  function showToast(msg) {
    if (!elements.toastBox) return;
    elements.toastMsg.textContent = msg;
    elements.toastBox.classList.add('show');
    setTimeout(() => {
      elements.toastBox.classList.remove('show');
    }, 3000);
  }

  // --- Başlatıcı ---
  initHeaderAndClock();
  initLiveWeather();
  renderFinance();
  startLiveFinanceTicker();
  renderBreakingNews();
  renderCategoryNav();
  initHeadlineSlider();
  renderColumnists();
  initPharmacies();
  renderFeedArticles();
  renderTopRead();
  updateBookmarkCounter();
});
