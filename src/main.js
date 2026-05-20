import { cases, domains, methods, sectors } from './data.js';
import { defineComponents, escapeHtml } from './components.js';

defineComponents();

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Research Library state and routing are currently disabled.
// const state = {
//   search: '',
//   topic: 'all',
//   format: 'all',
//   sort: 'newest',
// };

// const hasViewTransitions = 'startViewTransition' in document && !prefersReduced;
// const dateFormatter = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' });
// const listFormatter = new Intl.ListFormat('en', { style: 'short', type: 'conjunction' });

// function transition(update) {
//   if (hasViewTransitions) document.startViewTransition(update);
//   else update();
// }

// function unique(values) {
//   return [...new Set(values)].sort((a, b) => a.localeCompare(b));
// }

// function populateSelect(select, values) {
//   values.forEach((value) => select.append(new Option(value, value)));
// }

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

/*
function initFilters() {
  populateSelect($('#topic'), unique(research.map((item) => item.topic)));
  populateSelect($('#format'), unique(research.map((item) => item.format)));

  const params = new URLSearchParams(window.location.search);
  ['search', 'topic', 'format', 'sort'].forEach((key) => {
    if (params.has(key)) state[key] = params.get(key) || state[key];
    const control = $(`#${key}`);
    if (control) control.value = state[key];
  });

  $('.library-controls').addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (!name) return;
    state[name] = value;
    updateUrl();
    transition(renderLibrary);
  });

  $('#reset-filters').addEventListener('click', () => {
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
  const items = filteredResearch();
  grid.innerHTML = '';

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No research matched the current filters.</h3>
        <p>Reset the filters or try a broader topic such as “AI”, “trust”, or “markets”.</p>
      </div>`;
  } else {
    items.forEach((item) => {
      const card = document.createElement('research-card');
      card.item = item;
      grid.append(card);
    });
  }

  $('#result-count').textContent = `${items.length} ${items.length === 1 ? 'item' : 'items'} shown`;
}

function renderReport(id) {
  const report = research.find((item) => item.id === id);
  const body = reportBodies[id];
  const reportView = $('#report-view');

  if (!report || !body) {
    reportView.hidden = true;
    return false;
  }

  const date = dateFormatter.format(new Date(`${report.date}T12:00:00`));
  const related = research
    .filter((item) => item.id !== report.id && (item.topic === report.topic || item.sector === report.sector))
    .slice(0, 3);

  reportView.hidden = false;
  reportView.innerHTML = `...`;

  reportView.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
  reportView.focus?.();
  return true;
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function route() {
  const reportMatch = location.hash.match(/^#report\/([^/]+)(?:\/([^/]+))?$/);
  if (reportMatch) {
    const [, id, sectionSlug] = reportMatch;
    transition(() => {
      const rendered = renderReport(decodeURIComponent(id));
      if (rendered && sectionSlug) {
        document.getElementById(sectionSlug)?.scrollIntoView({
          behavior: prefersReduced ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    });
  } else {
    $('#report-view').hidden = true;
  }
}
*/

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

/*
function initSectorLinks() {
  $('#sector-grid').addEventListener('click', (event) => {
    const link = event.target.closest('[data-filter-topic]');
    if (!link) return;
    const sector = link.dataset.filterTopic;
    const item = research.find((entry) => entry.sector === sector || entry.topic === sector);
    if (item) {
      state.topic = item.topic;
      $('#topic').value = item.topic;
      updateUrl();
      renderLibrary();
    }
  });
}
*/

renderStaticContent();
// initFilters();
// renderLibrary();
initHeader();
initTheme();
initReveal();
initContact();
// initSectorLinks();
// route();
// window.addEventListener('hashchange', route);
