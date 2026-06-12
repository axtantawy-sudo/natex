/* ═══════════════════════════════════════════════════════════════
   NATEX × BUBBLE — Site v2 shared runtime
   Header / footer injection + motion engine
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LINKS = [
    { label: 'Home',       href: 'index.html',      key: 'home' },
    { label: 'About',      href: 'about.html',      key: 'about' },
    { label: 'Products',   href: 'products.html',   key: 'products' },
    { label: 'Technology', href: 'technology.html', key: 'technology' },
    { label: 'Franchise',  href: 'franchise.html',  key: 'franchise' },
    { label: 'Contact',    href: 'contact.html',    key: 'contact' }
  ];

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Header ──────────────────────────────────────────────── */
  function buildHeader(active) {
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    var items = LINKS.map(function (l) {
      return '<li><a href="' + l.href + '"' + (l.key === active ? ' class="active"' : '') + '>' + l.label + '</a></li>';
    }).join('');
    nav.className = 'site-nav';
    nav.innerHTML =
      '<div class="container-wide"><div class="nav-inner">' +
        '<a href="index.html" class="nav-logo" aria-label="Natex home">' +
          '<span class="logo-word">NATEX</span><img src="assets/bbl-logo.svg" alt="BBL — Beyond Basic Labs" class="bbl-mark bbl-mark-sm">' +
        '</a>' +
        '<nav aria-label="Main navigation"><ul class="nav-links">' + items + '</ul></nav>' +
        '<div class="nav-right">' +
          '<button class="nav-lang" aria-label="Switch to Arabic">AR</button>' +
          '<a href="contact.html" class="btn btn-solid btn-sm" data-magnetic>Get in Touch</a>' +
          '<button class="nav-hamburger" id="nav-burger" aria-label="Open menu" aria-expanded="false">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</div></div>';

    var drawer = document.createElement('div');
    drawer.className = 'nav-drawer';
    drawer.id = 'nav-drawer';
    drawer.innerHTML = LINKS.map(function (l) {
      return '<a href="' + l.href + '"' + (l.key === active ? ' class="active"' : '') + '>' + l.label + '</a>';
    }).join('');
    document.body.appendChild(drawer);

    var burger = document.getElementById('nav-burger');
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    /* progress bar */
    var bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        nav.classList.toggle('scrolled', y > 24);
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Footer ──────────────────────────────────────────────── */
  function buildFooter() {
    var f = document.getElementById('site-footer');
    if (!f) return;
    f.className = 'site-footer';
    f.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<div style="display:flex;align-items:center;gap:16px;"><img src="assets/bbl-logo.svg" alt="BBL — Beyond Basic Labs" class="bbl-mark bbl-mark-md"><span class="logo-word" style="font-size:22px;">NATEX</span></div>' +
            '<p>Egyptian FMCG manufacturer. Makers of BBL — Beyond Basic Labs. Egypt’s #1 refillable cleaning and hygiene brand. Pay for the product, not the packaging.</p>' +
            '<div class="social-row">' +
              '<a href="#" aria-label="Facebook">f</a>' +
              '<a href="#" aria-label="Instagram">ig</a>' +
              '<a href="#" aria-label="TikTok">tk</a>' +
            '</div>' +
          '</div>' +
          '<div><div class="footer-h">Explore</div><ul class="footer-links">' +
            '<li><a href="about.html">About Natex</a></li>' +
            '<li><a href="products.html">Products</a></li>' +
            '<li><a href="technology.html">Refill Technology</a></li>' +
            '<li><a href="franchise.html">Franchise &amp; B2B</a></li>' +
          '</ul></div>' +
          '<div><div class="footer-h">Product Lines</div><ul class="footer-links">' +
            '<li><a href="products.html#basics">BBL Basics</a></li>' +
            '<li><a href="products.html#ninja">BBL Ninja</a></li>' +
            '<li><a href="products.html#activo">BBL OxiActive</a></li>' +
            '<li><a href="products.html#calma">Calma</a></li>' +
            '<li><a href="products.html#fresh">BBL Fresh</a></li>' +
          '</ul></div>' +
          '<div><div class="footer-h">Contact</div><ul class="footer-links">' +
            '<li><a href="mailto:a.tantawy@natexpharma.com">a.tantawy@natexpharma.com</a></li>' +
            '<li><a href="tel:+201110688788">+20 111 068 8788</a></li>' +
            '<li><a href="https://natexpharma.com" target="_blank" rel="noopener">natexpharma.com</a></li>' +
            '<li><a href="https://bubbleeg.store" target="_blank" rel="noopener">bubbleeg.store — shop online</a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>© ' + new Date().getFullYear() + ' Natex · NATEX Group, Egypt. All rights reserved.</span>' +
          '<span>bbl® — beyond basic labs · Refill. Save. Repeat.</span>' +
        '</div>' +
      '</div>' +
      '<div class="footer-watermark" aria-hidden="true">bbl</div>';
  }

  /* ── Reveal engine ───────────────────────────────────────── */
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal], .w-rise');
    if (!('IntersectionObserver' in window) || reduceMotion) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });

    /* auto-stagger children of [data-stagger] */
    document.querySelectorAll('[data-stagger]').forEach(function (parent) {
      var step = parseFloat(parent.getAttribute('data-stagger')) || 0.09;
      var kids = parent.querySelectorAll(':scope > [data-reveal]');
      kids.forEach(function (k, i) { k.style.setProperty('--d', (i * step).toFixed(2) + 's'); });
    });
  }

  /* split headlines into rising words */
  function initWordRise() {
    document.querySelectorAll('.w-rise[data-split]').forEach(function (el) {
      var html = el.innerHTML.split(/<br\s*\/?>/i).map(function (line) {
        var tmp = document.createElement('div'); tmp.innerHTML = line;
        var words = tmp.textContent.trim().split(/\s+/);
        return '<span class="ln">' + words.map(function (w) {
          return '<span class="w"><span>' + w + '</span></span>';
        }).join(' ') + '</span>';
      }).join('<br>');
      el.innerHTML = html;
      el.querySelectorAll('.w > span').forEach(function (s, i) {
        s.style.setProperty('--wd', (i * 0.055).toFixed(3) + 's');
      });
    });
  }

  /* ── Counters ────────────────────────────────────────────── */
  function initCounters() {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length) return;
    function animate(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      var dur = 1600, t0 = null;
      if (reduceMotion) { el.textContent = prefix + target + suffix; return; }
      function frame(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 4);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ── Marquee (duplicate track for seamless loop) ─────────── */
  function initMarquee() {
    document.querySelectorAll('.marquee-track').forEach(function (track) {
      track.innerHTML += track.innerHTML;
    });
  }

  /* ── Parallax ────────────────────────────────────────────── */
  function initParallax() {
    if (reduceMotion) return;
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    if (!els.length) return;
    var ticking = false;
    function update() {
      var vh = window.innerHeight;
      els.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
        var r = el.getBoundingClientRect();
        var center = r.top + r.height / 2 - vh / 2;
        el.style.transform = 'translateY(' + (-center * speed).toFixed(1) + 'px)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ── Tilt cards ──────────────────────────────────────────── */
  function initTilt() {
    if (reduceMotion || !window.matchMedia('(hover:hover)').matches) return;
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      var max = parseFloat(el.getAttribute('data-tilt')) || 7;
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(800px) rotateY(' + (x * max) + 'deg) rotateX(' + (-y * max) + 'deg) translateY(-4px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  /* ── Magnetic buttons ────────────────────────────────────── */
  function initMagnetic() {
    if (reduceMotion || !window.matchMedia('(hover:hover)').matches) return;
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        el.style.transform = 'translate(' + x * 0.18 + 'px,' + y * 0.28 + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  /* ── Public init ─────────────────────────────────────────── */
  window.NatexSite = {
    init: function (opts) {
      opts = opts || {};
      buildHeader(opts.active || '');
      buildFooter();
      initWordRise();
      initReveal();
      initCounters();
      initMarquee();
      initParallax();
      initTilt();
      initMagnetic();
    }
  };
})();
