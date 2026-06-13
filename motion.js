/* ═══════════════════════════════════════════════════════════════
   NATEX × BBL — Motion layer (GSAP + ScrollTrigger + Lenis)
   Progressive enhancement: if CDNs fail or the visitor prefers
   reduced motion, the site falls back to the base CSS/IO effects.
   Hardware-accelerated props only (x / y / scale / opacity).
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    /* ── Lenis smooth scrolling, synced with ScrollTrigger ──── */
    var lenis = null;
    if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({ lerp: 0.12, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.6 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
      /* keep anchor links working with smooth scroll */
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

    /* ── Scroll-velocity reactive marquees ──────────────────── */
    document.querySelectorAll('.marquee').forEach(function (mq) {
      var track = mq.querySelector('.marquee-track');
      if (!track) return;
      track.style.animation = 'none'; /* hand over from CSS to GSAP */
      var tl = gsap.to(track, { xPercent: -50, ease: 'none', duration: 26, repeat: -1 });
      var proxy = { speed: 1 };
      ScrollTrigger.create({
        trigger: mq,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: function (self) {
          var v = Math.abs(self.getVelocity()) / 900;
          var target = gsap.utils.clamp(1, 5, 1 + v);
          gsap.to(proxy, {
            speed: target, duration: 0.4, overwrite: true,
            onUpdate: function () { tl.timeScale(proxy.speed); }
          });
        }
      });
    });

    /* ── Hero machine: scroll-driven scale + drift ──────────── */
    var machine = document.querySelector('.hero-machine, .tech-hero-machine');
    if (machine) {
      gsap.fromTo(machine,
        { scale: 1 },
        {
          scale: 1.1, y: 40, ease: 'none', force3D: true,
          scrollTrigger: {
            trigger: machine.closest('section'),
            start: 'top top', end: 'bottom top', scrub: 0.6
          }
        });
    }

    /* ── Pinned "Packaging Penalty" split-screen (desktop) ──── */
    ScrollTrigger.matchMedia({
      '(min-width: 1024px)': function () {
        var story = document.querySelector('section[aria-label="Brand story"] .story-grid');
        if (story && story.children.length === 2) {
          var left = story.children[0];
          ScrollTrigger.create({
            trigger: story, start: 'top 120px', end: 'bottom 80%',
            pin: left, pinSpacing: false
          });
        }
        /* penalty number drains in as you scroll */
        var pn = document.querySelector('.penalty-num');
        if (pn) {
          gsap.fromTo(pn, { scale: 0.7, opacity: 0.3 }, {
            scale: 1, opacity: 1, ease: 'power2.out', force3D: true,
            scrollTrigger: { trigger: pn, start: 'top 85%', end: 'top 45%', scrub: 0.5 }
          });
        }
      }
    });

    /* ── Magnetic hover on cards via gsap.quickTo ───────────── */
    if (window.matchMedia('(hover:hover)').matches) {
      document.querySelectorAll('.line-card, .bento-cell, .why-card, .why4, .opp-stat').forEach(function (card) {
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

    /* ── Section headings: subtle clip reveal upgrade ───────── */
    document.querySelectorAll('.sec-head h2, .display.h-sec').forEach(function (h) {
      gsap.fromTo(h, { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', force3D: true,
        scrollTrigger: { trigger: h, start: 'top 88%', once: true }
      });
    });

    /* cleanup on pagehide (bfcache / navigation) */
    window.addEventListener('pagehide', function () {
      ScrollTrigger.getAll().forEach(function (st) { st.kill(); });
      gsap.globalTimeline.clear();
      if (lenis) lenis.destroy();
    });
  });
})();
