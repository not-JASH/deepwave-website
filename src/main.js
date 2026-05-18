import { cases, domains, methods, people, reportBodies, research, sectors } from './data.js';
import { defineComponents, escapeHtml } from './components.js';

defineComponents();

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const state = {
  search: '',
  topic: 'all',
  format: 'all',
  sort: 'newest',
};

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasViewTransitions = 'startViewTransition' in document && !prefersReduced;
const dateFormatter = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' });
const listFormatter = new Intl.ListFormat('en', { style: 'short', type: 'conjunction' });

function transition(update) {
  if (hasViewTransitions) document.startViewTransition(update);
  else update();
}

function unique(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function populateSelect(select, values) {
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
      ([title, summary]) => `
        <article class="sector-card">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(summary)}</p>
          <a href="#library" data-filter-topic="${escapeHtml(title)}">View related evidence</a>
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

  $('#people-grid').innerHTML = people
    .map(
      (person) => `
        <article class="person-card">
          <div aria-hidden="true">${escapeHtml(person.name.split(' ').map((part) => part[0]).slice(0, 2).join(''))}</div>
          <h3>${escapeHtml(person.name)}</h3>
          <p class="person-card__role">${escapeHtml(person.role)}</p>
          <p>${escapeHtml(person.bio)}</p>
        </article>`,
    )
    .join('');
}

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
  reportView.innerHTML = `
    <div class="report-shell shell">
      <a class="text-button" href="#library">← Back to research library</a>
      <header class="report-hero">
        <p class="eyebrow">${escapeHtml(body.kicker)}</p>
        <h1>${escapeHtml(body.title)}</h1>
        <p>${escapeHtml(body.summary)}</p>
        <dl>
          <div><dt>Published</dt><dd>${date}</dd></div>
          <div><dt>Author</dt><dd>${escapeHtml(report.author)}</dd></div>
          <div><dt>Method</dt><dd>${escapeHtml(report.method)}</dd></div>
          <div><dt>Tags</dt><dd>${escapeHtml(listFormatter.format(report.tags))}</dd></div>
        </dl>
      </header>
      <div class="report-layout">
        <aside class="report-aside" aria-label="Report metadata">
          <div class="download-card">
            <span>${escapeHtml(report.format)}</span>
            <strong>${escapeHtml(report.metric)}</strong>
            <p>${escapeHtml(report.metricLabel)}</p>
            <a class="button button--compact" href="${escapeHtml(report.pdf)}">Download PDF placeholder</a>
          </div>
          <nav aria-label="Report sections">
            ${body.sections.map((section) => `<a href="#report/${encodeURIComponent(id)}/${slug(section.heading)}">${escapeHtml(section.heading)}</a>`).join('')}
          </nav>
        </aside>
        <div class="report-content">
          ${body.sections
            .map(
              (section) => `
                <section id="${slug(section.heading)}">
                  <h2>${escapeHtml(section.heading)}</h2>
                  <p>${escapeHtml(section.body)}</p>
                </section>`,
            )
            .join('')}
          <section>
            <h2>Accessible figure summary</h2>
            <figure class="chart-card">
              <svg viewBox="0 0 640 260" role="img" aria-labelledby="chart-title chart-desc">
                <title id="chart-title">Evidence stability by source type</title>
                <desc id="chart-desc">A simple line chart showing primary research and modeled indicators rising more steadily than social narrative noise.</desc>
                <g class="chart-grid">
                  <path d="M40 40H600M40 100H600M40 160H600M40 220H600"/>
                </g>
                <path class="chart-line chart-line--one" d="M44 210 C120 180 170 155 250 130 S420 82 600 62"/>
                <path class="chart-line chart-line--two" d="M44 215 C140 196 220 188 300 155 S480 122 600 90"/>
                <path class="chart-line chart-line--three" d="M44 190 C92 60 150 230 220 105 S360 220 430 98 520 184 600 130"/>
              </svg>
              <figcaption>Primary research and modeled indicators held steadier than social narrative volume across the observation window.</figcaption>
            </figure>
          </section>
          <section>
            <h2>Citation-ready metadata</h2>
            <p>${escapeHtml(report.author)}. (${new Date(`${report.date}T12:00:00`).getFullYear()}). <em>${escapeHtml(report.title)}</em>. Deep Wave Research. HTML report prototype.</p>
          </section>
        </div>
      </div>
      <section class="related-research" aria-labelledby="related-title">
        <h2 id="related-title">Related research</h2>
        <div class="research-grid research-grid--compact">
          ${related
            .map(
              (item) => `
                <article class="mini-card">
                  <span>${escapeHtml(item.format)} · ${escapeHtml(item.topic)}</span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.finding)}</p>
                  <a href="#report/${encodeURIComponent(item.id)}">Read related report</a>
                </article>`,
            )
            .join('')}
        </div>
      </section>
    </div>`;

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
    $('.form-note', form).textContent = `Prototype only: a consultation request would be drafted for ${email}.`;
  });
}

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

renderStaticContent();
initFilters();
renderLibrary();
initHeader();
initTheme();
initReveal();
initContact();
initSectorLinks();
route();
window.addEventListener('hashchange', route);
