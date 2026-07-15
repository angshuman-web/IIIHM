/* IIHM, UEM — interactions */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    const pl = $('.preloader');
    if (pl) setTimeout(() => pl.classList.add('done'), 500);
  });

  /* ---------- Navbar scroll state + progress ---------- */
  const nav = $('.nav');
  const prog = $('.scroll-progress');
  const toTop = $('.to-top');
  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (toTop) toTop.classList.toggle('show', y > 500);
    if (prog) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Mobile menu ---------- */
  const toggle = $('.nav-toggle');
  const overlay = $('.mobile-overlay');
  function closeMenu() { document.body.classList.remove('menu-open'); }
  if (toggle) toggle.addEventListener('click', () => document.body.classList.toggle('menu-open'));
  if (overlay) overlay.addEventListener('click', closeMenu);
  $$('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));

  /* ---------- Search overlay ---------- */
  const searchBtns = $$('[data-search-open]');
  const searchOverlay = $('.search-overlay');
  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('open');
    setTimeout(() => { const i = $('input', searchOverlay); if (i) i.focus(); }, 120);
  }
  function closeSearch() { if (searchOverlay) searchOverlay.classList.remove('open'); }
  searchBtns.forEach(b => b.addEventListener('click', openSearch));
  if (searchOverlay) searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeSearch(); closeMenu(); } });

  /* ---------- Scroll reveal + stagger ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const el = en.target;
        el.classList.add('in');
        if (el.hasAttribute('data-stagger')) {
          Array.from(el.children).forEach((c, i) => {
            c.style.transitionDelay = (i * 90) + 'ms';
          });
        }
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  $$('[data-reveal],[data-stagger]').forEach(el => io.observe(el));

  /* ---------- Animated counters ---------- */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseFloat(el.dataset.count);
      const dec = (el.dataset.count.indexOf('.') > -1) ? 1 : 0;
      const dur = 1600, start = performance.now();
      function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(dec);
      }
      requestAnimationFrame(step);
      countIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('[data-count]').forEach(el => countIO.observe(el));

  /* ---------- Tabs ---------- */
  $$('[data-tabs]').forEach(group => {
    const tabs = $$('.tab', group);
    const panels = $$('.tab-panel', group);
    tabs.forEach(tab => tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.dataset.panel === id));
    }));
  });

  /* ---------- Accordion ---------- */
  $$('.acc-item').forEach(item => {
    const q = $('.acc-q', item);
    const a = $('.acc-a', item);
    q.addEventListener('click', () => {
      const open = item.classList.contains('open');
      // close siblings within same accordion
      const parent = item.closest('.accordion');
      if (parent) $$('.acc-item', parent).forEach(it => {
        it.classList.remove('open');
        const aa = $('.acc-a', it); if (aa) aa.style.maxHeight = null;
      });
      if (!open) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });

  /* ---------- Carousels (faculty / generic track) ---------- */
  $$('[data-carousel]').forEach(car => {
    const track = $('.carousel-track', car) || $('.testi-track', car);
    if (!track) return;
    const prevBtn = $('[data-prev]', car);
    const nextBtn = $('[data-next]', car);
    const amount = () => Math.min(track.clientWidth * 0.85, 640);
    if (prevBtn) prevBtn.addEventListener('click', () => track.scrollBy({ left: -amount(), behavior: 'smooth' }));
    if (nextBtn) nextBtn.addEventListener('click', () => track.scrollBy({ left: amount(), behavior: 'smooth' }));
  });

  /* ---------- Hero parallax (subtle) ---------- */
  const hero = $('.hero');
  if (hero && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) hero.style.setProperty('--py', (y * 0.28) + 'px');
    }, { passive: true });
  }

  /* ---------- Forms (front-end validation demo) ---------- */
  $$('form[data-demo]').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      const btn = $('button[type=submit]', f);
      const orig = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      setTimeout(() => {
        f.reset();
        if (btn) { btn.textContent = '✓ Message Sent'; }
        const note = $('.form-note', f);
        if (note) note.textContent = 'Thank you! Our team will get back to you within 1–2 working days.';
        setTimeout(() => { if (btn) { btn.textContent = orig; btn.disabled = false; } }, 3000);
      }, 900);
    });
  });

  /* ---------- Active nav link by filename ---------- */
  const page = (location.pathname.split('/').pop() || 'index.html');
  $$('.nav-menu a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page) a.classList.add('active');
  });
})();
