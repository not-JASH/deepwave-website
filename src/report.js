import { reportBodies, research } from './data.js';
import { escapeHtml } from './components.js';
import { reportUrl } from './urls.js';
import { renderFigureCard } from './report-figures.js';

const dateFormatter = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' });

export function hasReportBody(id) {
  return Boolean(reportBodies[id]);
}

export function getReportTitle(id) {
  const report = research.find((item) => item.id === id);
  return report ? `${report.title} - Deep Wave Research` : 'Report not found - Deep Wave Research';
}

export function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderDecorativeFigure(title, caption) {
  return `
    <figure class="chart-card">
      <svg viewBox="0 0 640 260" role="img" aria-label="${escapeHtml(title)}">
        <g class="chart-grid" aria-hidden="true">
          <path d="M28 40 H612" />
          <path d="M28 94 H612" />
          <path d="M28 148 H612" />
          <path d="M28 202 H612" />
          <path d="M88 24 V236" />
          <path d="M168 24 V236" />
          <path d="M248 24 V236" />
          <path d="M328 24 V236" />
          <path d="M408 24 V236" />
          <path d="M488 24 V236" />
          <path d="M568 24 V236" />
        </g>
        <path class="chart-line chart-line--one" d="M36 186 C94 162 132 118 188 126 S286 198 344 170 446 86 604 102" />
        <path class="chart-line chart-line--two" d="M36 214 C94 210 148 170 214 168 S332 130 392 142 488 210 604 182" />
        <path class="chart-line chart-line--three" d="M36 118 C96 102 154 62 228 86 S340 190 422 156 520 78 604 62" />
      </svg>
      <figcaption><strong>${escapeHtml(title)}.</strong> ${escapeHtml(caption)}</figcaption>
    </figure>`;
}

function renderHeroFigure(body) {
  if (body.heroFigure) return renderFigureCard(body.heroFigure);
  if (body.figureTitle) return renderDecorativeFigure(body.figureTitle, body.figureCaption || '');
  return '';
}

function renderReportSection(section) {
  const bullets = section.bullets?.length
    ? `
      <ul class="report-list">
        ${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>`
    : '';

  const figures = section.figures?.length
    ? section.figures.map((fig) => renderFigureCard(fig)).join('')
    : '';

  const body = section.bodyHtml
    ? `<div class="report-prose">${section.bodyHtml}</div>`
    : `<p>${escapeHtml(section.body)}</p>`;

  return `
    <section id="${slug(section.heading)}">
      <h2>${escapeHtml(section.heading)}</h2>
      ${body}
      ${bullets}
      ${figures}
    </section>`;
}

function relatedResearchFor(report, body) {
  const explicit = (body.relatedIds || [])
    .map((id) => research.find((item) => item.id === id))
    .filter(Boolean);

  if (explicit.length) return explicit;

  return research
    .filter((item) => item.id !== report.id && (item.topic === report.topic || item.sector === report.sector))
    .slice(0, 3);
}

function renderMiniCard(item) {
  const date = dateFormatter.format(new Date(`${item.date}T12:00:00`));
  return `
    <article class="mini-card">
      <span>${escapeHtml(item.format)} &middot; ${escapeHtml(item.topic)}</span>
      <h3><a href="${escapeHtml(reportUrl(item.id))}">${escapeHtml(item.title)}</a></h3>
      <p>${escapeHtml(item.finding)}</p>
      <small>${escapeHtml(item.author)} &middot; ${escapeHtml(date)}</small>
    </article>`;
}

export function renderReportMarkup(id) {
  const report = research.find((item) => item.id === id);
  const body = reportBodies[id];

  if (!report || !body) return '';

  const date = dateFormatter.format(new Date(`${report.date}T12:00:00`));
  const related = relatedResearchFor(report, body).slice(0, 3);
  const defaultStats = [
    { label: 'Capability', value: report.capability },
    { label: 'Scope', value: report.scope },
    { label: 'Format', value: report.format },
    { label: 'Published', value: date },
  ];
  const stats = body.stats?.length ? body.stats : defaultStats;
  const statsMarkup = stats
    .map((stat) => `<div><dt>${escapeHtml(stat.label)}</dt><dd>${escapeHtml(stat.value)}</dd></div>`)
    .join('');
  const pageMap = body.sections
    .map((section) => `<a href="#${slug(section.heading)}">${escapeHtml(section.heading)}</a>`)
    .join('');
  const relatedMarkup = related.length
    ? `
      <section class="related-research" id="related-research">
        <h2>Related research</h2>
        <div class="research-grid research-grid--compact">
          ${related.map((item) => renderMiniCard(item)).join('')}
        </div>
      </section>`
    : '';

  return `
    <div class="report-shell shell">
      <div class="report-hero">
        <p class="eyebrow">${escapeHtml(body.kicker)}</p>
        <h1>${escapeHtml(report.title)}</h1>
        <p class="hero__lede">${escapeHtml(body.summary)}</p>
        <p>${escapeHtml(report.finding)}</p>
        <dl>${statsMarkup}</dl>
      </div>
      <div class="report-layout">
        <aside class="report-aside">
          <nav aria-label="Report sections">
            <strong>On this page</strong>
            ${pageMap}
          </nav>
          <div class="download-card">
            <span>${escapeHtml(report.metricLabel)}</span>
            <strong>${escapeHtml(report.metric)}</strong>
            <p>${escapeHtml(report.dataWindow)}</p>
            <p>${escapeHtml(body.headline)}</p>
            <a class="button button--ghost button--compact" href="./index.html#library">Back to library</a>
          </div>
        </aside>
        <div class="report-content">
          ${renderHeroFigure(body)}
          ${body.sections.map((section) => renderReportSection(section)).join('')}
          ${relatedMarkup}
        </div>
      </div>
    </div>`;
}

export function renderReportInto(container, id) {
  if (!container) return false;

  const markup = renderReportMarkup(id);
  if (!markup) {
    container.hidden = false;
    container.innerHTML = `
      <div class="report-shell shell">
        <div class="report-hero">
          <p class="eyebrow">Research library</p>
          <h1>Report not found.</h1>
          <p class="hero__lede">The requested research page is unavailable or the link is incomplete.</p>
          <a class="button" href="./index.html#library">Return to library</a>
        </div>
      </div>`;
    return false;
  }

  container.hidden = false;
  container.innerHTML = markup;
  return true;
}
