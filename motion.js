/* ═══════════════════════════════════════════════════════════════
   NATEX × BBL — Motion v3 (GSAP + ScrollTrigger + Lenis)
   SAFE layer: never touches opacity or transform on [data-reveal].
   Reveal visibility is 100% handled by the CSS + IntersectionObserver
   in app.js. This file only does: smooth scroll, marquee velocity,
   parallax, video zoom, magnetic hover, card mouse-follow.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    /* ── Bail: reduced motion or missing libs ─────────────────── */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    /* ── 1. Lenis smooth scroll ───────────────────────────────── */
    var lenis = null;
    if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6
      });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);

      /* Anchor links: smooth scroll with offset for sticky nav */
      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var id = a.getAttribute('href');
          if (id.length > 1 && document.querySelector(id)) {
            e.preventDefault();
            lenis.scrollTo(id, { offset: -90 });
          }
        });
      });
    }

    /* ── 2. Marquee velocity ──────────────────────────────────── */
    document.querySelectorAll('.marquee').forEach(function (mq) {
      var track = mq.querySelector('.marquee-track');
      if (!track) return;

      /* Take over from CSS animation */
      track.style.animation = 'none';
      var tl = gsap.to(track, {
        xPercent: -50, ease: 'none', duration: 24, repeat: -1
      });

      var proxy = { speed: 1 };
      ScrollTrigger.create({
        trigger: mq,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: function (self) {
          var v = Math.abs(self.getVelocity()) / 800;
          var target = gsap.utils.clamp(1, 6, 1 + v);
          gsap.to(proxy, {
            speed: target, duration: 0.4, overwrite: true,
            onUpdate: function () { tl.timeScale(proxy.speed); }
          });
        }
      });
    });

    /* ── 3. Hero machine parallax (scroll drift only) ─────────── */
    var machine = document.querySelector('.hero-machine') ||
                  document.querySelector('.fr-hero-machine');
    if (machine) {
      var section = machine.closest('section') || machine.parentElement;
      gsap.to(machine, {
        y: 50, ease: 'none', force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6
        }
      });
    }

    /* ── 4. Video banner scroll zoom ──────────────────────────── */
    var videoBanner = document.querySelector('.video-hero-wrap');
    if (videoBanner) {
      gsap.fromTo(videoBanner,
        { scale: 0.92, borderRadius: '24px' },
        {
          scale: 1, borderRadius: '0px', ease: 'none',
          scrollTrigger: {
            trigger: videoBanner,
            start: 'top 90%',
            end: 'top 30%',
            scrub: 0.8
          }
        }
      );
    }

    /* ── 5 & 6. Hover effects (hover-capable devices only) ────── */
    if (window.matchMedia('(hover:hover)').matches) {

      /* 5. Magnetic hover on [data-magnetic] buttons */
      document.querySelectorAll('[data-magnetic]').forEach(function (btn) {
        var qx = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3.out' });
        var qy = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3.out' });
        btn.addEventListener('mousemove', function (e) {
          var r = btn.getBoundingClientRect();
          qx(((e.clientX - r.left) / r.width - 0.5) * 16);
          qy(((e.clientY - r.top) / r.height - 0.5) * 12);
        });
        btn.addEventListener('mouseleave', function () { qx(0); qy(0); });
      });

      /* 6. Card hover follow — subtle mouse-follow effect */
      var cardSel = '.line-card, .why-card, .opp-stat, .b2b-card, .fr-shot';
      document.querySelectorAll(cardSel).forEach(function (card) {
        var qx = gsap.quickTo(card, 'x', { duration: 0.45, ease: 'power3.out' });
        var qy = gsap.quickTo(card, 'y', { duration: 0.45, ease: 'power3.out' });
        card.addEventListener('mousemove', function (e) {
          var r = card.getBoundingClientRect();
          qx(((e.clientX - r.left) / r.width - 0.5) * 10);
          qy(((e.clientY - r.top) / r.height - 0.5) * 8);
        });
        card.addEventListener('mouseleave', function () { qx(0); qy(0); });
      });
    }

    /* ── Cleanup on page unload ───────────────────────────────── */
    window.addEventListener('pagehide', function () {
      ScrollTrigger.getAll().forEach(function (st) { st.kill(); });
      gsap.globalTimeline.clear();
      if (lenis) lenis.destroy();
    });
  });
})();
