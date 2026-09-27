/* ===== FRAMEFOLIO — Freelance Photographer Directory ===== */
'use strict';

/* ─── Icons (FontAwesome 6 library icons, monochrome) ─── */
const ICONS = {
  sun: '<i class="fa-solid fa-sun"></i>',
  moon: '<i class="fa-solid fa-moon"></i>',
  menu: '<i class="fa-solid fa-bars"></i>',
  x: '<i class="fa-solid fa-xmark"></i>',
  eye: '<i class="fa-solid fa-eye"></i>',
  eyeOff: '<i class="fa-solid fa-eye-slash"></i>',
  check: '<i class="fa-solid fa-check"></i>',
  plus: '<i class="fa-solid fa-plus"></i>',
  facebook: '<i class="fa-brands fa-facebook-f"></i>',
  instagram: '<i class="fa-brands fa-instagram"></i>',
  twitter: '<i class="fa-brands fa-twitter"></i>',
  pinterest: '<i class="fa-brands fa-pinterest-p"></i>',
  youtube: '<i class="fa-brands fa-youtube"></i>',
  mapPin: '<i class="fa-solid fa-location-dot"></i>',
  star: '<i class="fa-solid fa-star"></i>',
  camera: '<i class="fa-solid fa-camera"></i>',
  arrowDown: '<i class="fa-solid fa-arrow-down"></i>',
  search: '<i class="fa-solid fa-magnifying-glass"></i>',
  phone: '<i class="fa-solid fa-phone"></i>',
  mail: '<i class="fa-solid fa-envelope"></i>',
  clock: '<i class="fa-solid fa-clock"></i>',
  award: '<i class="fa-solid fa-award"></i>',
  users: '<i class="fa-solid fa-users"></i>',
  trending: '<i class="fa-solid fa-chart-line"></i>',
  shield: '<i class="fa-solid fa-shield-halved"></i>',
  zap: '<i class="fa-solid fa-bolt"></i>',
  checkCircle: '<i class="fa-solid fa-circle-check"></i>',
  xCircle: '<i class="fa-solid fa-circle-xmark"></i>',
  expand: '<i class="fa-solid fa-expand"></i>',
  home: '<i class="fa-solid fa-house"></i>',
  chevRight: '<i class="fa-solid fa-chevron-right"></i>',
};

/* ─── THEME & DIRECTION ─── */
(function initThemeDir() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('ff_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
  if (localStorage.getItem('ff_dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.setItem('ff_theme', html.classList.contains('dark') ? 'dark' : 'light');
  document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
}

function updateThemeIcon(el) {
  if (!el) return;
  el.innerHTML = document.documentElement.classList.contains('dark') ? ICONS.sun : ICONS.moon;
}

function toggleDir() {
  const html = document.documentElement;
  const isRTL = html.getAttribute('dir') === 'rtl';
  html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
  localStorage.setItem('ff_dir', isRTL ? 'ltr' : 'rtl');
  document.querySelectorAll('.dir-label').forEach(el => { el.textContent = isRTL ? 'LTR' : 'RTL'; });
}

/* ─── LOGO SVG ─── */
function getLogoSVG(size = 40) {
  return `<img src="logo.svg" alt="FrameFolio" width="${size}" height="${size}" class="nav-logo-img" style="width:${size}px;height:${size}px;object-fit:contain;display:block;flex-shrink:0;" />`;
}

/* ─── NAVBAR ─── */
function injectNav() {
  const el = document.getElementById('main-nav');
  if (!el) return;
  const page = location.pathname.split('/').pop() || 'index.html';
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'home2.html', label: 'Home 2' },
    { href: 'browse.html', label: 'Browse Photographers' },
    { href: 'photographer-profile.html', label: 'Photographer Profiles' },
    { href: 'list-services.html', label: 'List Your Services' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const isDark = document.documentElement.classList.contains('dark');
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

  const navLinksHTML = links.map(l => {
    const isActive = page === l.href || (page === '' && l.href === 'index.html');
    return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
  }).join('');

  const mobileLinksHTML = links.map(l => {
    const isActive = page === l.href || (page === '' && l.href === 'index.html');
    return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
  }).join('');

  el.innerHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="FrameFolio Home">
        ${getLogoSVG(44)}
        <div class="nav-logo-text">
          <span class="brand-top">FRAME</span>
          <span class="brand-bottom">FOLIO</span>
        </div>
      </a>
      <div class="nav-links">${navLinksHTML}</div>
      <div class="nav-actions">
        <button onclick="toggleDir()" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle direction">
          <span class="dir-label" style="font-size:0.625rem;">${isRTL ? 'RTL' : 'LTR'}</span>
        </button>
        <button onclick="toggleTheme()" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
          <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
        </button>
        <a href="login.html" class="btn btn-primary btn-sm">Sign In</a>
        <button class="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Open menu">
          <span class="mobile-menu-icon">${ICONS.menu}</span>
        </button>
      </div>
    </div>
    <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>
    <div class="mobile-menu" id="mobile-menu">
      ${mobileLinksHTML}
      <div class="mob-actions">
        <a href="login.html" class="btn btn-primary w-full">Sign In</a>
      </div>
      <div class="mob-toggles">
        <button onclick="toggleDir()" class="nav-icon-btn" title="Toggle Direction">
          <span class="dir-label" style="font-size:0.625rem;">${isRTL ? 'RTL' : 'LTR'}</span>
        </button>
        <button onclick="toggleTheme()" class="nav-icon-btn" title="Toggle Theme">
          <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
        </button>
      </div>
    </div>
  </nav>
  <div class="navbar-spacer"></div>`;
}

/* ─── MOBILE MENU ─── */
function toggleMobileMenu(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const menu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-backdrop');
  const iconEl = document.querySelector('.mobile-menu-icon');
  if (!menu) return;
  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (iconEl) iconEl.innerHTML = ICONS.menu;
  } else {
    menu.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    if (iconEl) iconEl.innerHTML = ICONS.x;
  }
}
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-backdrop');
  const btn = document.querySelector('.mobile-menu-btn');
  if (!menu || !menu.classList.contains('open')) return;
  if (btn && (btn === e.target || btn.contains(e.target))) return;
  if (menu.contains(e.target)) return;
  menu.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  const iconEl = document.querySelector('.mobile-menu-icon');
  if (iconEl) iconEl.innerHTML = ICONS.menu;
});

/* ─── FOOTER ─── */
function injectFooter() {
  const el = document.getElementById('main-footer');
  if (!el) return;
  el.innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <a href="index.html" class="footer-logo nav-logo" aria-label="FrameFolio Home">
            ${getLogoSVG(44)}
            <div class="nav-logo-text">
              <span class="brand-top" style="color:#fff;">FRAME</span>
              <span class="brand-bottom">FOLIO</span>
            </div>
          </a>
          <p>Connecting talented freelance photographers with clients who care about every captured moment.</p>
          <div class="footer-socials">
            <a href="#" class="footer-social-link" aria-label="Instagram">${ICONS.instagram}</a>
            <a href="#" class="footer-social-link" aria-label="Facebook">${ICONS.facebook}</a>
            <a href="#" class="footer-social-link" aria-label="Pinterest">${ICONS.pinterest}</a>
            <a href="#" class="footer-social-link" aria-label="YouTube">${ICONS.youtube}</a>
          </div>
        </div>
        <!-- Quick Links -->
        <div class="footer-col">
          <h4 class="footer-col-title">Explore</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="home2.html">Home 2 — Premium</a></li>
            <li><a href="browse.html">Browse Photographers</a></li>
            <li><a href="photographer-profile.html">Photographer Profiles</a></li>
            <li><a href="list-services.html">List Your Services</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <!-- Resources -->
        <div class="footer-col">
          <h4 class="footer-col-title">Resources</h4>
          <ul class="footer-links">
            <li><a href="login.html">Sign In</a></li>
            <li><a href="signup.html">Sign Up</a></li>
            <li><a href="coming-soon.html">Blog & Tips</a></li>
            <li><a href="coming-soon.html">Careers</a></li>
            <li><a href="404.html">404 Page</a></li>
            <li><a href="coming-soon.html">Coming Soon</a></li>
          </ul>
        </div>
        <!-- Newsletter -->
        <div class="footer-col footer-col-newsletter">
          <div class="footer-newsletter-card">
            <h4 class="footer-newsletter-title">Stay Inspired</h4>
            <p class="footer-newsletter-desc">Get curated photographer spotlights, tips & exclusive offers in your inbox.</p>
            <form onsubmit="event.preventDefault(); alert('Subscribed! Thank you.'); this.reset();" class="footer-newsletter-form">
              <input type="email" placeholder="your@email.com" class="footer-newsletter-input" required>
              <button type="submit" class="footer-newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copyright">&copy; ${new Date().getFullYear()} FrameFolio. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ─── NAVBAR SCROLL ─── */
window.addEventListener('scroll', function() {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 15);
  }
}, { passive: true });

/* ─── AUTH PAGE ─── */
function initAuthPage() {
  const html = document.documentElement;
  document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
  document.querySelectorAll('.dir-label').forEach(el => {
    el.textContent = html.getAttribute('dir') === 'rtl' ? 'RTL' : 'LTR';
  });
}

function togglePasswordVisibility(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const iconWrap = btnEl.querySelector('.pw-icon');
  if (input.type === 'password') {
    input.type = 'text';
    if (iconWrap) iconWrap.innerHTML = ICONS.eyeOff;
  } else {
    input.type = 'password';
    if (iconWrap) iconWrap.innerHTML = ICONS.eye;
  }
}

/* ─── FAQ TOGGLE ─── */
function toggleFAQ(el) {
  const item = el.closest('.faq-item');
  const wasActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item.active').forEach(f => f.classList.remove('active'));
  if (!wasActive) item.classList.add('active');
}

/* ─── SCROLL ANIMATIONS ─── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

/* ─── COUNTER ANIMATION ─── */
function animateCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = prefix + current.toLocaleString() + suffix;
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}

/* ─── PHOTOGRAPHER FILTER ─── */
function filterPhotographers(type, value, btn) {
  const cards = document.querySelectorAll('.photographer-card[data-' + type + ']');
  const btns = document.querySelectorAll(`.filter-btn[data-filter-type="${type}"]`);
  btns.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.photographer-card').forEach(card => {
    if (value === 'all' || card.getAttribute('data-' + type) === value) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ─── COUNTDOWN TIMER ─── */
function initCountdown(targetDateStr) {
  function update() {
    const now = new Date();
    const target = new Date(targetDateStr);
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * 1000 * 60;
    const secs = Math.floor(diff / 1000);
    const d = document.getElementById('cd-days');
    const h = document.getElementById('cd-hours');
    const m = document.getElementById('cd-mins');
    const s = document.getElementById('cd-secs');
    if (d) d.textContent = String(days).padStart(2, '0');
    if (h) h.textContent = String(hours).padStart(2, '0');
    if (m) m.textContent = String(mins).padStart(2, '0');
    if (s) s.textContent = String(secs).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

/* ─── HERO SLIDER (5-second auto-rotate) ─── */
let heroSliderTimer = null;
let currentHeroSlideIndex = 0;
const HERO_INTERVAL = 5000;

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  function showSlide(index, restartTimer = true) {
    currentHeroSlideIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const isActive = i === currentHeroSlideIndex;
      slide.classList.toggle('active', isActive);
      if (isActive) {
        slide.querySelectorAll('.hero-stat-num[data-count]').forEach(el => {
          const target = parseInt(el.getAttribute('data-count'), 10);
          if (isNaN(target)) return;
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const t = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(t);
            }
            el.textContent = prefix + current.toLocaleString() + suffix;
          }, 25);
        });
      }
    });

    dots.forEach((dot, i) => {
      const isActive = i === currentHeroSlideIndex;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      const progress = dot.querySelector('.hero-dot-progress');
      if (progress) {
        progress.style.transition = 'none';
        progress.style.width = '0%';
        if (isActive) {
          void progress.offsetWidth;
          progress.style.transition = `width ${HERO_INTERVAL}ms linear`;
          progress.style.width = '100%';
        }
      }
    });

    if (restartTimer) {
      startHeroAutoPlay();
    }
  }

  function startHeroAutoPlay() {
    if (heroSliderTimer) clearInterval(heroSliderTimer);
    heroSliderTimer = setInterval(() => {
      showSlide(currentHeroSlideIndex + 1, false);
      const activeDot = dots[currentHeroSlideIndex];
      if (activeDot) {
        const progress = activeDot.querySelector('.hero-dot-progress');
        if (progress) {
          progress.style.transition = 'none';
          progress.style.width = '0%';
          void progress.offsetWidth;
          progress.style.transition = `width ${HERO_INTERVAL}ms linear`;
          progress.style.width = '100%';
        }
      }
    }, HERO_INTERVAL);
  }

  window.goToHeroSlide = function(idx) {
    showSlide(idx, true);
  };

  window.nextHeroSlide = function() {
    showSlide(currentHeroSlideIndex + 1, true);
  };

  window.prevHeroSlide = function() {
    showSlide(currentHeroSlideIndex - 1, true);
  };

  const heroSection = document.getElementById('hero-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => {
      if (heroSliderTimer) clearInterval(heroSliderTimer);
      const activeDot = dots[currentHeroSlideIndex];
      if (activeDot) {
        const progress = activeDot.querySelector('.hero-dot-progress');
        if (progress) {
          const currentW = window.getComputedStyle(progress).width;
          progress.style.transition = 'none';
          progress.style.width = currentW;
        }
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      startHeroAutoPlay();
      const activeDot = dots[currentHeroSlideIndex];
      if (activeDot) {
        const progress = activeDot.querySelector('.hero-dot-progress');
        if (progress) {
          void progress.offsetWidth;
          progress.style.transition = `width ${HERO_INTERVAL}ms linear`;
          progress.style.width = '100%';
        }
      }
    });
  }

  showSlide(0, true);
}

/* ─── HOME 2 CUSTOMER REVIEWS SLIDER (3-Slide Auto Switch — 5s) ─── */
function initHome2ReviewSlider() {
  const slides = document.querySelectorAll('.home2-review-slide');
  const dots = document.querySelectorAll('.home2-review-dot');
  if (!slides.length) return;

  let currentSlide = 0;
  let timer = null;
  const REVIEW_INTERVAL = 5000;

  function showSlide(index, userAction = false) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((s, i) => {
      if (i === currentSlide) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      const bar = dot.querySelector('.review-dot-bar');
      if (i === currentSlide) {
        dot.classList.add('active');
        if (bar) {
          bar.style.transition = 'none';
          bar.style.width = '0%';
          void bar.offsetWidth;
          bar.style.transition = `width ${REVIEW_INTERVAL}ms linear`;
          bar.style.width = '100%';
        }
      } else {
        dot.classList.remove('active');
        if (bar) {
          bar.style.transition = 'none';
          bar.style.width = '0%';
        }
      }
    });

    if (userAction) {
      startAutoPlay();
    }
  }

  function startAutoPlay() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, REVIEW_INTERVAL);
  }

  window.goToReviewSlide = function(idx) {
    showSlide(idx, true);
  };

  window.nextReviewSlide = function() {
    showSlide(currentSlide + 1, true);
  };

  window.prevReviewSlide = function() {
    showSlide(currentSlide - 1, true);
  };

  const sliderBox = document.querySelector('.home2-reviews-slider');
  if (sliderBox) {
    sliderBox.addEventListener('mouseenter', () => {
      if (timer) clearInterval(timer);
      const activeDot = dots[currentSlide];
      if (activeDot) {
        const bar = activeDot.querySelector('.review-dot-bar');
        if (bar) {
          const currentW = window.getComputedStyle(bar).width;
          bar.style.transition = 'none';
          bar.style.width = currentW;
        }
      }
    });

    sliderBox.addEventListener('mouseleave', () => {
      startAutoPlay();
      const activeDot = dots[currentSlide];
      if (activeDot) {
        const bar = activeDot.querySelector('.review-dot-bar');
        if (bar) {
          void bar.offsetWidth;
          bar.style.transition = `width ${REVIEW_INTERVAL}ms linear`;
          bar.style.width = '100%';
        }
      }
    });
  }

  showSlide(0, true);
}

/* ─── INIT ON DOM READY ─── */
document.addEventListener('DOMContentLoaded', function() {
  injectNav();
  injectFooter();
  initScrollAnimations();
  animateCounters();
  initHeroSlider();
  initHome2ReviewSlider();
});


