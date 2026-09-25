/* ===== FRAMEFOLIO — Freelance Photographer Directory ===== */
'use strict';

/* ─── Icons (Lucide-style inline SVG, monochrome) ─── */
const ICONS = {
  sun: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  eye: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>',
  pinterest: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-3.84 19.22c-.004-.49-.003-1.05.13-1.57l.96-4.08s-.25-.49-.25-1.21c0-1.14.66-2 1.66-2 .78 0 1.16.59 1.16 1.29 0 .79-.5 1.97-.76 3.06-.22.91.45 1.65 1.34 1.65 1.6 0 2.68-2.07 2.68-4.52 0-1.86-1.27-3.25-3.56-3.25a4.04 4.04 0 0 0-4.22 4.08c0 .74.22 1.26.56 1.66.16.19.18.27.12.48l-.2.8c-.06.24-.2.33-.44.2-1.24-.51-1.81-1.88-1.81-3.41 0-2.53 2.15-5.6 6.44-5.6 3.45 0 5.73 2.51 5.73 5.2 0 3.58-1.98 6.27-4.9 6.27-.98 0-1.9-.53-2.22-1.13l-.64 2.48c-.2.77-.6 1.54-.97 2.13A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  camera: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  trending: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  zap: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  xCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
  expand: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  chevRight: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
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
    { href: 'browse.html', label: 'Browse' },
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
        <a href="login.html" class="btn btn-secondary btn-sm">Sign In</a>
        <a href="browse.html" class="btn btn-primary btn-sm">Find a Photographer</a>
        <button class="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Open menu">
          <span class="mobile-menu-icon">${ICONS.menu}</span>
        </button>
      </div>
    </div>
    <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>
    <div class="mobile-menu" id="mobile-menu">
      ${mobileLinksHTML}
      <div class="mob-actions">
        <a href="login.html" class="btn btn-secondary w-full">Sign In</a>
        <a href="browse.html" class="btn btn-primary w-full">Find a Photographer</a>
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
            <li><a href="photographer-profile.html">Photographer Profile</a></li>
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

/* ─── INIT ON DOM READY ─── */
document.addEventListener('DOMContentLoaded', function() {
  injectNav();
  injectFooter();
  initScrollAnimations();
  animateCounters();
});
