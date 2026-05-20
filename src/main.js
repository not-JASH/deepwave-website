import { cases, domains, methods, research, sectors } from './data.js';
import { defineComponents, escapeHtml } from './components.js';
import { hasReportBody } from './report.js';
import { legacyReportHashUrl, reportUrl } from './urls.js';

defineComponents();

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const state = {
  search: '',
  topic: 'all',
  format: 'all',
  sort: 'newest',
};

const hasViewTransitions = 'startViewTransition' in document && !prefersReduced;

function transition(update) {
  if (hasViewTransitions) document.startViewTransition(update);
  else update();
}

function unique(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function populateSelect(select, values) {
  if (!select) return;
  values.forEach((value) => select.append(new Option(value, value)));
}

function renderStaticContent() {
  const domainGrid = $('#domain-grid');
  domains.forEach((domain) => {
    const card = document.createElement('domain-card');
    card.domain = domain;
    domainGrid.append(card);
  });

  $('#method-list').innerHTML = methods
    .map(
      (method) => `
        <li>
          <span>${escapeHtml(method.step)}</span>
          <div>
            <h3>${escapeHtml(method.title)}</h3>
            <p>${escapeHtml(method.summary)}</p>
          </div>
        </li>`,
    )
    .join('');

  $('#sector-grid').innerHTML = sectors
    .map(
      (sector) => `
        <article class="sector-card">
          <h3>${escapeHtml(sector.title)}</h3>
          <p>${escapeHtml(sector.summary)}</p>
          <p class="sector-card__note">Comparable mandate examples are available on request.</p>
        </article>`,
    )
    .join('');

  $('#case-grid').innerHTML = cases
    .map(
      (item) => `
        <article class="case-card">
          <p class="case-card__stat">${escapeHtml(item.stat)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.outcome)}</p>
          <span>${escapeHtml(item.label)}</span>
        </article>`,
    )
    .join('');

  // Team section rendering is currently disabled.
  // $('#people-grid').innerHTML = people
  //   .map(
  //     (person) => `
  //       <article class="person-card">
  //         <div aria-hidden="true">${escapeHtml(person.name.split(' ').map((part) => part[0]).slice(0, 2).join(''))}</div>
  //         <h3>${escapeHtml(person.name)}</h3>
  //         <p class="person-card__role">${escapeHtml(person.role)}</p>
  //         <p>${escapeHtml(person.bio)}</p>
  //       </article>`,
  //   )
  //   .join('');
}

function initHeroInsight() {
  const card = $('#hero-insight');
  if (!card) return;

  const availableItems = research.filter((item) => hasReportBody(item.id));
  if (!availableItems.length) {
    card.hidden = true;
    return;
  }

  const item = availableItems[Math.floor(Math.random() * availableItems.length)];
  $('#hero-insight-tag', card).textContent = `${item.format} · ${item.topic}`;
  $('#hero-insight-title', card).textContent = item.title;
  $('#hero-insight-summary', card).textContent = item.finding;

  const link = $('#hero-insight-link', card);
  link.href = reportUrl(item.id);
  link.textContent = `Open ${item.format.toLowerCase()}`;
  link.setAttribute('aria-label', `Open the draft page for ${item.title}`);

  card.hidden = false;
}

function initFilters() {
  const controls = $('.library-controls');
  if (!controls) return;

  populateSelect($('#topic'), unique(research.map((item) => item.topic)));
  populateSelect($('#format'), unique(research.map((item) => item.format)));

  const params = new URLSearchParams(window.location.search);
  ['search', 'topic', 'format', 'sort'].forEach((key) => {
    if (params.has(key)) state[key] = params.get(key) || state[key];
    const control = $(`#${key}`);
    if (control) control.value = state[key];
  });

  const updateFromControls = (event) => {
    const { name, value } = event.target;
    if (!name) return;
    state[name] = value;
    updateUrl();
    transition(renderLibrary);
  };

  controls.addEventListener('input', updateFromControls);
  controls.addEventListener('change', updateFromControls);

  $('#reset-filters')?.addEventListener('click', () => {
    Object.assign(state, { search: '', topic: 'all', format: 'all', sort: 'newest' });
    ['search', 'topic', 'format', 'sort'].forEach((key) => {
      const control = $(`#${key}`);
      if (control) control.value = state[key];
    });
    updateUrl();
    transition(renderLibrary);
    $('#search').focus();
  });
}

function updateUrl() {
  const params = new URLSearchParams();
  Object.entries(state).forEach(([key, value]) => {
    if (value && value !== 'all' && !(key === 'sort' && value === 'newest')) params.set(key, value);
  });
  const next = params.toString() ? `${location.pathname}?${params}${location.hash}` : `${location.pathname}${location.hash}`;
  history.replaceState(null, '', next);
}

function filteredResearch() {
  const query = state.search.trim().toLowerCase();
  const matches = research.filter((item) => {
    const haystack = [
      item.title,
      item.finding,
      item.author,
      item.team,
      item.topic,
      item.method,
      item.sector,
      item.format,
      item.audience,
      ...item.tags,
    ]
      .join(' ')
      .toLowerCase();

    return (
      (!query || haystack.includes(query)) &&
      (state.topic === 'all' || item.topic === state.topic) &&
      (state.format === 'all' || item.format === state.format)
    );
  });

  return matches.sort((a, b) => {
    if (state.sort === 'oldest') return new Date(`${a.date}T12:00:00`) - new Date(`${b.date}T12:00:00`);
    if (state.sort === 'reading') return a.readingMinutes - b.readingMinutes;
    if (state.sort === 'title') return a.title.localeCompare(b.title);
    return new Date(`${b.date}T12:00:00`) - new Date(`${a.date}T12:00:00`);
  });
}

function renderLibrary() {
  const grid = $('#research-grid');
  if (!grid) return;

  const items = filteredResearch();
  grid.innerHTML = '';

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No research matched the current filters.</h3>
        <p>Reset the filters or try a broader topic such as "macro", "risk", or "governance".</p>
      </div>`;
  } else {
    items.forEach((item) => {
      const card = document.createElement('research-card');
      card.item = item;
      grid.append(card);
    });
  }

  const resultCount = $('#result-count');
  if (resultCount) resultCount.textContent = `${items.length} ${items.length === 1 ? 'item' : 'items'} shown`;
}

function redirectLegacyReportHash() {
  const url = legacyReportHashUrl(location.hash);
  if (url) window.location.replace(url);
}

function initHeader() {
  const header = $('.site-header');
  const navToggle = $('.nav-toggle');
  const nav = $('#primary-nav');

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
  const stored = safeStorage('get', 'dwr-theme');
  if (stored) root.dataset.theme = stored;

  $('.theme-toggle').addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    safeStorage('set', 'dwr-theme', next);
  });
}

function safeStorage(action, key, value) {
  try {
    if (action === 'get') return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch {
    return null;
  }
}

function initReveal() {
  if (!('IntersectionObserver' in window) || prefersReduced) {
    $$('.reveal').forEach((node) => node.dataset.visible = 'true');
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = 'true';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );
  $$('.reveal').forEach((node) => observer.observe(node));
}

function initContact() {
  $('.contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get('email');
    $('.form-note', form).textContent = `Prototype only: a mandate intake note would be drafted for ${email}.`;
  });
}

renderStaticContent();
initHeroInsight();
initFilters();
renderLibrary();
redirectLegacyReportHash();
initHeader();
initTheme();
initReveal();
initContact();
window.addEventListener('hashchange', redirectLegacyReportHash);
