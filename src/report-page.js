import { getReportTitle, renderReportInto } from './report.js';
import { legacyReportHashUrl } from './urls.js';

const $ = (selector, scope = document) => scope.querySelector(selector);
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function safeStorage(action, key, value) {
  try {
    if (action === 'get') return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch {
    return null;
  }
}

function initHeader() {
  const header = $('.site-header');
  const navToggle = $('.nav-toggle');
  const nav = $('#primary-nav');
  if (!header || !navToggle || !nav) return;

  const onScroll = () => header.dataset.elevated = String(window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.dataset.open = String(!expanded);
  });

  nav.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    nav.dataset.open = 'false';
  });
}

function initTheme() {
  const root = document.documentElement;
  const toggle = $('.theme-toggle');
  const stored = safeStorage('get', 'dwr-theme');
  if (stored) root.dataset.theme = stored;
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    safeStorage('set', 'dwr-theme', next);
  });
}

function reportIdFromLocation() {
  return new URLSearchParams(location.search).get('id') || '';
}

function redirectLegacyReportHash() {
  const url = legacyReportHashUrl(location.hash);
  if (!url) return false;

  window.location.replace(url);
  return true;
}

function scrollToSectionFromHash() {
  const sectionId = decodeURIComponent(location.hash.replace(/^#/, ''));
  if (!sectionId) return;

  requestAnimationFrame(() => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      block: 'start',
    });
  });
}

function renderCurrentReport() {
  if (redirectLegacyReportHash()) return;

  const reportView = $('#report-view');
  const reportId = reportIdFromLocation();
  const rendered = renderReportInto(reportView, reportId);
  document.title = getReportTitle(reportId);

  if (rendered) {
    reportView.focus({ preventScroll: Boolean(location.hash) });
    scrollToSectionFromHash();
  }
}

initHeader();
initTheme();
renderCurrentReport();
window.addEventListener('hashchange', () => {
  if (!redirectLegacyReportHash()) scrollToSectionFromHash();
});
