import { archiveEntries, metrics, reports, researchNodes, waveform } from './data.js';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let activeZone = researchNodes[0].id;

function pathFromWaveform(values, width = 440, height = 140) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const step = width / (values.length - 1);

  return values
    .map((value, index) => {
      const normal = (value - min) / (max - min || 1);
      const x = index * step;
      const y = height - normal * (height * 0.74) - height * 0.12;
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(' ');
}

function nodeById(id) {
  return researchNodes.find((node) => node.id === id) ?? researchNodes[0];
}

function setActiveZone(id) {
  activeZone = id;
  const active = nodeById(id);

  document.documentElement.style.setProperty('--active-zone-color', active.color);
  document.documentElement.dataset.activeZone = id;

  $$('.node-card, [data-map-zone]').forEach((element) => {
    element.toggleAttribute('data-active', element.dataset.zone === id);
  });

  const dossier = $('#map-dossier');
  if (dossier) {
    dossier.innerHTML = `
      <p class="kicker">ACTIVE NODE / ${active.id}</p>
      <h3>${active.title}</h3>
      <p>${active.summary}</p>
      <dl>
        <div><dt>Status</dt><dd>${active.status}</dd></div>
        <div><dt>Accession</dt><dd>${active.accession}</dd></div>
        <div><dt>Coordinate</dt><dd>${active.coordinates}</dd></div>
      </dl>
    `;
  }
}

function facilityMapTemplate(compact = false) {
  const label = compact ? 'compact research facility map' : 'interactive research facility map';

  return `
    <svg class="facility-map-svg" viewBox="0 0 720 470" role="img" aria-label="${label}">
      <defs>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#24171E" flood-opacity="0.16" />
        </filter>
        <pattern id="map-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#24171E" stroke-opacity=".08" stroke-width="1" />
        </pattern>
      </defs>
      <rect x="18" y="18" width="684" height="434" rx="18" fill="#F7E8C9" />
      <rect x="34" y="34" width="652" height="402" rx="12" fill="url(#map-grid)" />

      <path class="route-line route-line--a" d="M90 328H215c36 0 36-54 72-54h151c54 0 54-84 108-84h86" />
      <path class="route-line route-line--b" d="M84 174h98c72 0 72 146 144 146h312" />
      <path class="route-line route-line--c" d="M126 388h160c48 0 48-48 96-48h240" />

      ${researchNodes.map((node, index) => {
        const positions = [
          { x: 108, y: 94, w: 144, h: 96 },
          { x: 290, y: 74, w: 116, h: 138 },
          { x: 470, y: 100, w: 128, h: 96 },
          { x: 168, y: 262, w: 138, h: 92 },
          { x: 352, y: 268, w: 132, h: 110 },
          { x: 520, y: 282, w: 90, h: 72 }
        ];
        const p = positions[index];
        return `
          <g class="map-zone" data-map-zone data-zone="${node.id}" tabindex="0" role="button" aria-label="${node.id} ${node.title}">
            <rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="${index === 5 ? 999 : 10}" fill="${node.color}" filter="url(#soft-shadow)" />
            <rect x="${p.x + 10}" y="${p.y + 10}" width="${Math.max(40, p.w - 20)}" height="${Math.max(24, p.h - 20)}" rx="${index === 5 ? 999 : 4}" fill="#F7E8C9" opacity=".34" />
            <text x="${p.x + 18}" y="${p.y + 30}" class="map-zone__id">${node.id}</text>
            <text x="${p.x + 18}" y="${p.y + p.h - 20}" class="map-zone__name">${node.title.toUpperCase()}</text>
          </g>
        `;
      }).join('')}

      <g class="you-are-here" transform="translate(572 354)">
        <circle r="18" />
        <path d="M-34 0H-8M8 0h34M0-34v26M0 8v34" />
        <text x="-66" y="-26">YOU ARE HERE</text>
      </g>

      <text x="54" y="62" class="map-label">DWR FACILITY INDEX / PUBLIC ACCESS</text>
      <text x="484" y="426" class="map-label">ZONE SYNC: ${activeZone}</text>
    </svg>
  `;
}

function bindMapInteractions(scope = document) {
  $$('[data-map-zone]', scope).forEach((zone) => {
    const activate = () => setActiveZone(zone.dataset.zone);
    zone.addEventListener('mouseenter', activate);
    zone.addEventListener('focus', activate);
    zone.addEventListener('click', activate);
    zone.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
      }
    });
  });
}

function renderFacilityMaps() {
  const heroMap = $('#facility-map');
  if (heroMap) {
    heroMap.innerHTML = facilityMapTemplate(true);
    bindMapInteractions(heroMap);
  }
}

function renderNodeCards() {
  const grid = $('#node-grid');
  if (!grid) return;

  grid.innerHTML = researchNodes.map((node) => `
    <article class="node-card reveal" data-zone="${node.id}" style="--node-color: ${node.color}">
      <div class="node-card__topline">
        <span>${node.id}</span>
        <span>${node.status}</span>
      </div>
      <h3>${node.title}</h3>
      <p>${node.summary}</p>
      <footer>
        <span>${node.accession}</span>
        <span>${node.coordinates}</span>
      </footer>
    </article>
  `).join('');

  $$('.node-card', grid).forEach((card) => {
    const activate = () => setActiveZone(card.dataset.zone);
    card.addEventListener('mouseenter', activate);
    card.addEventListener('focusin', activate);
  });
}

function renderInstrumentPanel() {
  const panel = $('#instrument-panel');
  if (!panel) return;

  const chartPath = pathFromWaveform(waveform);
  const metricRows = metrics.map((metric) => `
    <div class="metric-row">
      <span>${metric.label}</span>
      <strong>${metric.value}${metric.unit}</strong>
      <i style="--metric-value:${Math.min(metric.value, 100)}%"></i>
    </div>
  `).join('');

  panel.innerHTML = `
    <div class="instrument-panel__topline">
      <span>INSTRUMENT / DWR-SIG-02</span>
      <span>LIVE SIMULATION</span>
    </div>
    <div class="scope">
      <svg viewBox="0 0 440 140" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="scanGlow" x1="0" x2="1">
            <stop offset="0%" stop-color="#81CBBE" stop-opacity="0" />
            <stop offset="45%" stop-color="#81CBBE" stop-opacity=".96" />
            <stop offset="100%" stop-color="#F2CD88" stop-opacity=".72" />
          </linearGradient>
        </defs>
        <path class="scope__grid" d="M0 35H440M0 70H440M0 105H440M55 0V140M110 0V140M165 0V140M220 0V140M275 0V140M330 0V140M385 0V140" />
        <path class="scope__trace" d="${chartPath}" />
        <path class="scope__trace scope__trace--glow" d="${chartPath}" />
      </svg>
    </div>
    <div class="metrics">${metricRows}</div>
    <div class="sonar-readout" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
  `;
}

function renderReports() {
  const grid = $('#report-grid');
  if (!grid) return;

  grid.innerHTML = reports.map((report, index) => `
    <article class="report-card reveal">
      <div class="report-card__stamp">${report.stamp}</div>
      <p class="kicker">${report.code}</p>
      <h3>${report.title}</h3>
      <p>${report.excerpt}</p>
      <a href="#contact" aria-label="Open report ${report.title}">Open report</a>
      <span class="report-card__number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
    </article>
  `).join('');
}

function renderArchive() {
  const list = $('#archive-list');
  if (!list) return;

  list.innerHTML = archiveEntries.map((entry) => `
    <button type="button">
      <span>${entry}</span>
      <span>OPEN</span>
    </button>
  `).join('');
}

function setupRevealObserver() {
  const revealItems = $$('.reveal');
  if (!revealItems.length) return;

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.dataset.visible = 'true');
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.dataset.visible = 'true';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
}

function setupLocationObserver() {
  const label = $('#active-location');
  const sections = $$('.section-observed');
  if (!label || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    label.textContent = `YOU ARE HERE / ${visible.target.dataset.location}`;

    const id = visible.target.id;
    $$('.site-nav a').forEach((link) => {
      link.toggleAttribute('aria-current', link.getAttribute('href') === `#${id}`);
    });
  }, {
    rootMargin: '-28% 0px -58% 0px',
    threshold: [0.08, 0.2, 0.45]
  });

  sections.forEach((section) => observer.observe(section));
}

function setupHeaderState() {
  const header = $('.site-header');
  if (!header) return;

  const update = () => header.dataset.elevated = String(window.scrollY > 18);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function setupNavigation() {
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = $(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();

      const navigate = () => {
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        history.replaceState(null, '', link.getAttribute('href'));
      };

      if (document.startViewTransition && !prefersReducedMotion) {
        document.startViewTransition(navigate);
      } else {
        navigate();
      }
    });
  });
}

function setupContactMock() {
  const button = $('.contact-form button');
  if (!button) return;

  button.addEventListener('click', () => {
    const original = button.textContent;
    button.textContent = 'Inquiry queued / demo only';
    button.disabled = true;
    window.setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
    }, 1800);
  });
}

function init() {
  renderFacilityMaps();
  renderNodeCards();
  renderInstrumentPanel();
  renderReports();
  renderArchive();
  setActiveZone(activeZone);
  setupRevealObserver();
  setupLocationObserver();
  setupHeaderState();
  setupNavigation();
  setupContactMock();
}

init();
