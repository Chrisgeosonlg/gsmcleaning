/* ============================================================
   GSM Cleaning Services — main.js
   Mobile nav, sticky-header shadow, scroll reveals,
   animated stat counters, active-link highlighting, form demo.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- 1. Mobile navigation toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close menu after tapping a link (mobile)
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ---- 2. Add shadow to header once the page is scrolled ---- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- 3. Highlight the current page in the nav ---- */
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const target = a.getAttribute('href');
    if (target === here || (here === '' && target === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ---- 4. Scroll-reveal using IntersectionObserver ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // small stagger for siblings
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('in'), delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* ---- 5. Animated counters for the stats band ---- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const cio = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const end = parseFloat(el.dataset.count);
        const dur = 1400;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(end * eased).toLocaleString();
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = end.toLocaleString();
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  }

  /* ---- 6. Contact form (front-end demo handler) ----
     Replace the body of this handler with a real submit
     (e.g. Formspree, EmailJS, or your own backend endpoint). */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
      // TODO: send data to your email service here.
    });
  }

  /* ---- 7. Footer year ---- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- 8. Cookie consent banner ---- */
  const cookieBanner = document.querySelector('.cookie-banner');
  const acceptButton = document.querySelector('.cookie-accept');
  const cookieName = 'gsmCookiesAccepted';

  const getCookie = (name) => document.cookie.split('; ').reduce((acc, pair) => {
    const [k, v] = pair.split('=');
    return k === name ? decodeURIComponent(v) : acc;
  }, '');

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  };

  const showCookieBanner = () => {
    if (cookieBanner) cookieBanner.hidden = false;
  };

  const hideCookieBanner = () => {
    if (cookieBanner) cookieBanner.hidden = true;
  };

  if (cookieBanner && acceptButton) {
    if (getCookie(cookieName) !== 'true') {
      showCookieBanner();
    }

    acceptButton.addEventListener('click', () => {
      setCookie(cookieName, 'true', 365);
      hideCookieBanner();
    });
  }
});
