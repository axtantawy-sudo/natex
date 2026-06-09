/* Natex Website — Shared Nav, Footer, Scroll, Animations */

(function () {
  /* ── Logo: Orbitron NATEX wordmark ───────────────────── */
  const LOGO_SVG = `
    <span class="nav-logo-orbitron nav-logo-img--dark">NATEX</span>
    <span class="nav-logo-orbitron nav-logo-orbitron--navy nav-logo-img--light">NATEX</span>
  `;

  /* ── Nav Pages ────────────────────────────────────────── */
  const NAV_LINKS = [
    { label: 'Home',       href: 'index.html' },
    { label: 'About',      href: 'about.html' },
    { label: 'Products',   href: 'products.html' },
    { label: 'Technology', href: 'technology.html' },
    { label: 'Franchise',  href: 'franchise.html' },
    { label: 'Contact',    href: 'contact.html' },
  ];

  /* ── Detect current page ──────────────────────────────── */
  function getCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path || 'index.html';
  }

  /* ── Inject Nav ───────────────────────────────────────── */
  function injectNav(isLight) {
    const current = getCurrentPage();
    const navEl = document.getElementById('site-nav');
    if (!navEl) return;

    if (isLight) navEl.classList.add('light-page');

    const linksHTML = NAV_LINKS.map(l => {
      const active = (l.href === current || (current === '' && l.href === 'index.html')) ? ' active' : '';
      return `<li><a href="${l.href}" class="${active.trim()}">${l.label}</a></li>`;
    }).join('');

    navEl.innerHTML = `
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="Natex Home">
          ${LOGO_SVG}
          <span class="nav-logo-divider">|</span>
          <span class="nav-logo-sub">PHARMA</span>
        </a>
        <nav aria-label="Main navigation">
          <ul class="nav-links">${linksHTML}</ul>
        </nav>
        <div class="nav-cta">
          <button class="nav-lang-toggle" id="lang-toggle" aria-label="Toggle language">AR</button>
          <a href="contact.html" class="btn btn-primary btn-sm nav-cta-btn" style="text-decoration:none;font-family:'Orbitron',sans-serif;font-size:11px;letter-spacing:0.12em;background:#FCE400;color:#1B1F44;border:none;">GET STARTED</a>
        </div>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    `;

    // Mobile drawer
    const drawer = document.getElementById('nav-mobile-drawer');
    if (drawer) {
      drawer.innerHTML = NAV_LINKS.map(l =>
        `<a href="${l.href}">${l.label}</a>`
      ).join('') + `<a href="contact.html" style="color:var(--color-yellow-500);margin-top:8px">Get in Touch →</a>`;
    }

    // Hamburger toggle
    const hamburger = document.getElementById('nav-hamburger');
    if (hamburger && drawer) {
      hamburger.addEventListener('click', () => {
        const open = drawer.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    // Close drawer on link click
    if (drawer) {
      drawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => drawer.classList.remove('open'));
      });
    }

    // Lang toggle (stub — real i18n wired per-page)
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const isAR = document.documentElement.lang === 'ar';
        if (typeof window.toggleLanguage === 'function') {
          window.toggleLanguage(!isAR);
        }
        langBtn.textContent = isAR ? 'AR' : 'EN';
      });
    }
  }

  /* ── Scroll: nav solidify ─────────────────────────────── */
  function initScrollNav() {
    const nav = document.getElementById('site-nav');
    if (!nav) return;
    function onScroll() {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Scroll Reveal ────────────────────────────────────── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;

    // Step 1: Pre-mark any already-in-viewport element as visible
    // BEFORE adding js-ready (so they never flash invisible)
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 40) el.classList.add('visible');
    });

    // Step 2: Now safe to engage the CSS (js-ready adds opacity:0 to
    // .reveal elements, but .visible ones already have opacity:1)
    document.body.classList.add('js-ready');

    // Step 3: Observe off-screen elements for scroll-triggered reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    els.forEach(el => {
      if (!el.classList.contains('visible')) observer.observe(el);
    });
  }

  /* ── Animated Counters ────────────────────────────────── */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = prefix + current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = '1';
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
  }

  /* ── Footer Inject ────────────────────────────────────── */
  function injectFooter() {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    footerEl.className = 'site-footer';
    footerEl.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="nav-logo" style="text-decoration:none;display:flex;align-items:center;">
              <img src="assets/natex-logo-white.svg" alt="Natex" style="height:40px;width:auto;display:block;">
            </a>
            <p class="footer-brand-desc">
              Egyptian FMCG manufacturer behind the Bubble brand — home care, personal care, and smart refill technology.
            </p>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Company</div>
            <ul>
              <li><a href="about.html">About Natex</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="technology.html">Refill Technology</a></li>
              <li><a href="franchise.html">Franchise</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Products</div>
            <ul>
              <li><a href="products.html#basics">Bubble Basics</a></li>
              <li><a href="products.html#ninja">Bubble Ninja</a></li>
              <li><a href="products.html#activo">Bubble Activo</a></li>
              <li><a href="products.html#calma">Calma</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Contact</div>
            <ul>
              <li><a href="mailto:a.tantawy@natexpharma.com">a.tantawy@natexpharma.com</a></li>
              <li><a href="tel:+201110688788">+20 111 068 8788</a></li>
              <li><a href="http://www.natexpharma.com" target="_blank" rel="noopener">natexpharma.com</a></li>
              <li><a href="http://www.bubbleeg.store" target="_blank" rel="noopener">bubbleeg.store</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="footer-legal">© 2026 NATEX Group. All rights reserved.</span>
          <div class="footer-contact-line">
            <a href="mailto:a.tantawy@natexpharma.com">a.tantawy@natexpharma.com</a>
            <a href="tel:+201110688788">+20 111 068 8788</a>
          </div>
        </div>
      </div>
    `;
  }

  /* ── Page Transitions ─────────────────────────────────── */
  function initPageTransitions() {
    // Fade IN: page enters already visible, no opacity:0 on load
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 250ms ease';

    // Fade OUT on link click only
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
          href.startsWith('tel:') || href.startsWith('http') ||
          a.target === '_blank') return;
      a.addEventListener('click', e => {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => { window.location.href = href; }, 220);
      });
    });
  }

  /* ── Parallax helper ──────────────────────────────────── */
  window.initParallax = function (selector, factor) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      els.forEach(el => {
        el.style.transform = `translateY(${sy * factor}px)`;
      });
    }, { passive: true });
  };

  /* ── Init ─────────────────────────────────────────────── */
  function init(opts) {
    opts = opts || {};
    injectNav(opts.lightNav || false);
    injectFooter();
    initScrollNav();
    initReveal();
    initCounters();
    if (opts.transitions !== false) initPageTransitions();
  }

  window.NatexSite = { init };

})();
