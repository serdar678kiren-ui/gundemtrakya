/**
 * GÜNDEM TRAKYA - Canlı Kayan Borsa Şeridi, Otomatik Güncelleyici & Haber Sistemi
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
    theme: localStorage.getItem('haber_theme') || 'dark',
    currentArticleId: null,
    currentArticlePage: 1,
    weatherIndex: 0
  };

  // Hava Durumu Listesi (Canlı Döngü)
  const weatherCities = [
    { city: "Tekirdağ", temp: "28°C", icon: "fa-sun", condition: "Güneşli" },
    { city: "Edirne", temp: "29°C", icon: "fa-cloud-sun", condition: "Açık" },
    { city: "Kırklareli", temp: "26°C", icon: "fa-sun", condition: "Az Bulutlu" },
    { city: "Çorlu", temp: "28°C", icon: "fa-wind", condition: "Rüzgarlı" }
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

    // Çift set render ederek kesintisiz sonsuz kayma sağlar
    elements.financeTrack.innerHTML = generateItems(1) + generateItems(2);
  }

  // Sürekli canlı borsa mikro güncellemesi (Her 4 saniyede bir gerçekçi fiyat dalgalanması)
  function startLiveFinanceTicker() {
    setInterval(() => {
      const randomIdx = Math.floor(Math.random() * financeData.length);
      const item = financeData[randomIdx];
      const isUp = Math.random() > 0.45;
      
      [1, 2].forEach(setNum => {
        const itemEl = document.getElementById(`financeItem_${setNum}_${randomIdx}`);
        const rateEl = document.getElementById(`financeRate_${setNum}_${randomIdx}`);

        if (itemEl && rateEl) {
          itemEl.classList.remove('flash-up', 'flash-down');
          itemEl.classList.add(isUp ? 'flash-up' : 'flash-down');

          setTimeout(() => {
            itemEl.classList.remove('flash-up', 'flash-down');
          }, 1200);

          rateEl.className = `finance-rate ${isUp ? 'up' : 'down'}`;
          rateEl.innerHTML = `<i class="fa-solid ${isUp ? 'fa-caret-up' : 'fa-caret-down'}"></i> ${isUp ? '+' : '-'}${(Math.random() * 0.4 + 0.1).toFixed(2)}%`;
        }
      });
      item.up = isUp;
    }, 4000);
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

  // --- 5. Kategori Navigasyonu & Arama ---
  function renderCategoryNav() {
    if (!elements.categoryNavList) return;
    elements.categoryNavList.innerHTML = portalCategories.map(cat => `
      <li>
        <button class="nav-item-btn ${state.activeCategory === cat.slug ? 'active' : ''}" data-cat="${cat.slug}">
          ${cat.name}
        </button>
      </li>
    `).join('');

    elements.categoryNavList.querySelectorAll('.nav-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeCategory = btn.getAttribute('data-cat');
        renderCategoryNav();
        renderFeedArticles();
        showToast(`${btn.textContent.trim()} kategorisi filtrelendi`);
      });
    });

    elements.navSearchBtn?.addEventListener('click', executeSearch);
    elements.navSearchInput?.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') executeSearch();
    });
  }

  function executeSearch() {
    const q = elements.navSearchInput.value.trim().toLowerCase();
    state.searchQuery = q;
    renderFeedArticles();
    if (q) {
      showToast(`"${q}" için sonuçlar listeleniyor`);
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
    elements.sliderNumbersBar.innerHTML = headlineArticles.map((art, idx) => `
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
    state.sliderTimer = setInterval(() => {
      if (!state.isSliderPaused) {
        state.currentHeadlineIndex = (state.currentHeadlineIndex + 1) % headlineArticles.length;
        showHeadline(state.currentHeadlineIndex);
      }
    }, 4500);
  }

  function renderSideHeadlines() {
    if (!elements.sideHeadlinesContainer) return;
    const sideArticles = [headlineArticles[1], headlineArticles[2]];
    elements.sideHeadlinesContainer.innerHTML = sideArticles.map(art => `
      <div class="side-card" data-id="${art.id}">
        <div class="side-img-box">
          <img src="${art.image}" alt="${art.title}" class="side-img" loading="lazy" />
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
    const subArticles = headlineArticles.slice(3, 7);
    elements.subHeadlinesGrid.innerHTML = subArticles.map(art => `
      <div class="sub-card" data-id="${art.id}">
        <div class="sub-media">
          <img src="${art.image}" alt="${art.title}" class="sub-img" loading="lazy" />
        </div>
        <div class="sub-body">
          <span style="color: var(--news-red); font-size: 0.72rem; font-weight: 800; text-transform: uppercase;">${art.category}</span>
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

  // --- 7. Köşe Yazarları ---
  function renderColumnists() {
    if (!elements.columnistsGrid) return;
    elements.columnistsGrid.innerHTML = columnistsData.map(col => `
      <div class="columnist-card" data-col-id="${col.id}">
        <img src="${col.avatar}" alt="${col.name}" class="columnist-avatar" />
        <div class="columnist-info">
          <div class="columnist-name">${col.name}</div>
          <div class="columnist-role">${col.title}</div>
          <div class="columnist-title">"${col.articleTitle}"</div>
        </div>
      </div>
    `).join('');

    elements.columnistsGrid.querySelectorAll('.columnist-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.getAttribute('data-col-id'), 10);
        const col = columnistsData.find(c => c.id === id);
        if (col) {
          showToast(`${col.name}: "${col.articleTitle}" açılıyor...`);
        }
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
      { id: 'tekirdag', name: 'Tekirdağ / Çorlu' },
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

  // --- 9. Haber Akışı & Filtreleme ---
  function renderFeedArticles() {
    if (!elements.feedArticlesGrid) return;

    let list = headlineArticles;

    if (state.activeCategory !== 'all') {
      list = list.filter(a => a.categorySlug === state.activeCategory);
    }

    if (state.searchQuery) {
      list = list.filter(a => 
        a.title.toLowerCase().includes(state.searchQuery) ||
        a.spot.toLowerCase().includes(state.searchQuery)
      );
    }

    if (list.length === 0) {
      elements.feedArticlesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: var(--news-red); margin-bottom: 0.8rem;"></i>
          <h3>Sonuç Bulunamadı</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Aradığınız kriterlere uygun haber bulunamadı.</p>
        </div>
      `;
      return;
    }

    elements.feedArticlesGrid.innerHTML = list.map(art => `
      <article class="feed-card" data-id="${art.id}">
        <div class="feed-media">
          <img src="${art.image}" alt="${art.title}" class="feed-img" loading="lazy" />
          <span style="position: absolute; top: 8px; left: 8px; background: var(--news-red); color: white; font-size: 0.7rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: var(--radius-sm);">
            ${art.category}
          </span>
        </div>
        <div class="feed-body">
          <h3 class="feed-title">${art.title}</h3>
          <p class="feed-summary">${art.spot}</p>
          <div class="feed-footer">
            <span><i class="fa-regular fa-clock"></i> ${art.readTime} okuma</span>
            <span><i class="fa-regular fa-eye"></i> ${art.views.toLocaleString('tr-TR')}</span>
          </div>
        </div>
      </article>
    `).join('');

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

  // --- 11. ÇOK SAYFALI HABER & FOTOĞRAFLI GEÇİŞ MOTORU ---
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

    elements.modalArticleText.innerHTML = `
      ${activePage.content}
      ${paginationHtml}
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

  function closeArticleModal() {
    elements.articleModal.classList.remove('active');
    document.body.style.overflow = '';
    state.currentArticleId = null;
    state.currentArticlePage = 1;
  }

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
