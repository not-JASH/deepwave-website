import { escapeHtml } from './components.js';

const W = 640;
const H = 320;
const PL = 60;
const PR = 24;
const PT = 30;
const PB = 54;
const PW = W - PL - PR;
const PH = H - PT - PB;

const sx = (v, min, max) => PL + ((v - min) / (max - min)) * PW;
const sy = (v, min, max) => PT + PH - ((v - min) / (max - min)) * PH;
const fmt = (v, dp = 3) => (typeof v === 'number' ? v.toFixed(dp) : String(v));

function svgOpen(label) {
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${escapeHtml(label)}" class="fig-svg">`;
}

function yGrid(min, max, n, labelFmt = (v) => fmt(v, 2)) {
  let grid = '';
  for (let i = 0; i <= n; i += 1) {
    const v = min + (i / n) * (max - min);
    const y = sy(v, min, max);
    grid += `<path class="fig-grid" d="M${PL} ${y} H${PL + PW}" />`;
    grid += `<text class="fig-axis-y" x="${PL - 8}" y="${y + 3.6}">${escapeHtml(labelFmt(v))}</text>`;
  }
  return grid;
}

function xCategoryLabels(labels) {
  const step = PW / labels.length;
  return labels
    .map((label, i) => {
      const cx = PL + step * (i + 0.5);
      const lines = Array.isArray(label) ? label : [label];
      return lines
        .map(
          (line, li) =>
            `<text class="fig-axis-x" x="${cx}" y="${PT + PH + 18 + li * 14}">${escapeHtml(line)}</text>`,
        )
        .join('');
    })
    .join('');
}

function chartFrame() {
  return `<rect class="fig-frame" x="${PL}" y="${PT}" width="${PW}" height="${PH}" />`;
}

function refLine(value, yMin, yMax, label) {
  const y = sy(value, yMin, yMax);
  return `
    <path class="fig-ref" d="M${PL} ${y} H${PL + PW}" />
    ${label ? `<text class="fig-ref-label" x="${PL + PW - 6}" y="${y - 6}">${escapeHtml(label)}</text>` : ''}`;
}

function title(text) {
  return `<text class="fig-title" x="${W / 2}" y="18">${escapeHtml(text)}</text>`;
}

function yAxisLabel(text) {
  return `<text class="fig-axis-label" x="${14}" y="${PT + PH / 2}" transform="rotate(-90 14 ${PT + PH / 2})">${escapeHtml(text)}</text>`;
}

function xAxisLabel(text) {
  return `<text class="fig-axis-label" x="${PL + PW / 2}" y="${H - 8}">${escapeHtml(text)}</text>`;
}

function renderAucBars(fig) {
  const { data, yMin = 0.45, yMax = 0.6, yLabel = 'AUC', xLabel = '' } = fig;
  const step = PW / data.length;
  const barW = step * 0.55;
  const bars = data
    .map((d, i) => {
      const cx = PL + step * (i + 0.5);
      const top = sy(d.value, yMin, yMax);
      const bottom = sy(yMin, yMin, yMax);
      const color = d.color || 'var(--chart-one)';
      return `
        <rect x="${cx - barW / 2}" y="${top}" width="${barW}" height="${bottom - top}" fill="${color}" rx="4" />
        <text class="fig-value" x="${cx}" y="${top - 8}">${escapeHtml(fmt(d.value, 3))}</text>`;
    })
    .join('');
  const labels = data.map((d) => d.label);
  return `
    ${svgOpen(fig.title)}
      ${title(fig.title)}
      ${yGrid(yMin, yMax, 5)}
      ${refLine(0.5, yMin, yMax, 'AUC = 0.50')}
      ${bars}
      ${chartFrame()}
      ${xCategoryLabels(labels)}
      ${yAxisLabel(yLabel)}
      ${xLabel ? xAxisLabel(xLabel) : ''}
    </svg>`;
}

function renderSpreadBars(fig) {
  const { data, yMin = 0.45, yMax = 0.65, yLabel = 'AUC', xLabel = 'Spread quintile' } = fig;
  const step = PW / data.length;
  const barW = step * 0.55;
  const bars = data
    .map((d, i) => {
      const cx = PL + step * (i + 0.5);
      const top = sy(d.value, yMin, yMax);
      const bottom = sy(yMin, yMin, yMax);
      return `
        <rect x="${cx - barW / 2}" y="${top}" width="${barW}" height="${bottom - top}" fill="var(--warm)" rx="4" />
        <text class="fig-value" x="${cx}" y="${top - 8}">${escapeHtml(fmt(d.value, 3))}</text>`;
    })
    .join('');
  const labels = data.map((d) => [d.label, d.range]);
  return `
    ${svgOpen(fig.title)}
      ${title(fig.title)}
      ${yGrid(yMin, yMax, 4)}
      ${refLine(0.5, yMin, yMax, 'AUC = 0.50')}
      ${bars}
      ${chartFrame()}
      ${xCategoryLabels(labels)}
      ${yAxisLabel(yLabel)}
      ${xAxisLabel(xLabel)}
    </svg>`;
}

function renderTodLine(fig) {
  const { data, yMin = 0.45, yMax = 0.65, yLabel = 'AUC', xLabel = 'Time-of-day bucket (held-out)' } = fig;
  const step = PW / data.length;
  const xs = data.map((_, i) => PL + step * (i + 0.5));
  const ys = data.map((d) => sy(d.value, yMin, yMax));
  const path = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x} ${ys[i]}`).join(' ');
  const markers = xs
    .map(
      (x, i) =>
        `<circle cx="${x}" cy="${ys[i]}" r="5" fill="var(--chart-one)" />
         <text class="fig-value-sm" x="${x}" y="${ys[i] - 12}">n=${escapeHtml(data[i].n.toLocaleString())}</text>`,
    )
    .join('');
  const labels = data.map((d) => d.label);
  return `
    ${svgOpen(fig.title)}
      ${title(fig.title)}
      ${yGrid(yMin, yMax, 4)}
      ${refLine(0.5, yMin, yMax, 'AUC = 0.50 (no-skill)')}
      <path class="fig-line-one" d="${path}" />
      ${markers}
      ${chartFrame()}
      ${xCategoryLabels(labels)}
      ${yAxisLabel(yLabel)}
      ${xAxisLabel(xLabel)}
    </svg>`;
}

function renderRoc(fig) {
  const { series = [] } = fig;
  const diagonal = `M${sx(0, 0, 1)} ${sy(0, 0, 1)} L${sx(1, 0, 1)} ${sy(1, 0, 1)}`;
  const lines = series
    .map((s) => {
      const d = s.points
        .map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p.x, 0, 1)} ${sy(p.y, 0, 1)}`)
        .join(' ');
      return `<path class="fig-line" style="stroke:${s.color}" d="${d}" />`;
    })
    .join('');
  const legend = series
    .map(
      (s, i) =>
        `<g transform="translate(${PL + 16} ${PT + PH - 60 + i * 18})">
          <rect x="0" y="-9" width="14" height="3" fill="${s.color}" />
          <text class="fig-legend" x="22" y="-4">${escapeHtml(s.label)}</text>
        </g>`,
    )
    .join('');
  const xTicks = [0, 0.2, 0.4, 0.6, 0.8, 1.0];
  const yTicks = xTicks;
  const yGridXY = yTicks
    .map((v) => {
      const y = sy(v, 0, 1);
      return `<path class="fig-grid" d="M${PL} ${y} H${PL + PW}" />
              <text class="fig-axis-y" x="${PL - 8}" y="${y + 3.6}">${escapeHtml(fmt(v, 1))}</text>`;
    })
    .join('');
  const xTickLabels = xTicks
    .map((v) => {
      const x = sx(v, 0, 1);
      return `<text class="fig-axis-x" x="${x}" y="${PT + PH + 18}">${escapeHtml(fmt(v, 1))}</text>`;
    })
    .join('');
  return `
    ${svgOpen(fig.title)}
      ${title(fig.title)}
      ${yGridXY}
      <path class="fig-ref" d="${diagonal}" />
      ${lines}
      ${chartFrame()}
      ${xTickLabels}
      ${yAxisLabel('True positive rate')}
      ${xAxisLabel('False positive rate')}
      ${legend}
    </svg>`;
}

function renderReliability(fig) {
  const { data, xMin = 0.35, xMax = 0.65, yMin = 0.35, yMax = 0.65 } = fig;
  const yTicks = [0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65];
  const xTicks = yTicks;
  const grid = yTicks
    .map((v) => {
      const y = sy(v, yMin, yMax);
      return `<path class="fig-grid" d="M${PL} ${y} H${PL + PW}" />
              <text class="fig-axis-y" x="${PL - 8}" y="${y + 3.6}">${escapeHtml(fmt(v, 2))}</text>`;
    })
    .join('');
  const xLabels = xTicks
    .map((v) => {
      const x = sx(v, xMin, xMax);
      return `<text class="fig-axis-x" x="${x}" y="${PT + PH + 18}">${escapeHtml(fmt(v, 2))}</text>`;
    })
    .join('');
  const diagonal = `M${sx(xMin, xMin, xMax)} ${sy(yMin, yMin, yMax)} L${sx(xMax, xMin, xMax)} ${sy(yMax, yMin, yMax)}`;
  const pathD = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${sx(d.x, xMin, xMax)} ${sy(d.y, yMin, yMax)}`)
    .join(' ');
  const dots = data
    .map((d) => `<circle cx="${sx(d.x, xMin, xMax)}" cy="${sy(d.y, yMin, yMax)}" r="5" fill="var(--chart-one)" />`)
    .join('');
  return `
    ${svgOpen(fig.title)}
      ${title(fig.title)}
      ${grid}
      <path class="fig-ref" d="${diagonal}" />
      <path class="fig-line-one" d="${pathD}" />
      ${dots}
      ${chartFrame()}
      ${xLabels}
      ${yAxisLabel('Observed positive rate')}
      ${xAxisLabel('Predicted probability (bin mean)')}
    </svg>`;
}

function renderScoreHist(fig) {
  const { bins, xMin = 0.35, xMax = 0.6, yMax = 16000 } = fig;
  const yTicks = [0, 4000, 8000, 12000, 16000];
  const grid = yTicks
    .map((v) => {
      const y = sy(v, 0, yMax);
      return `<path class="fig-grid" d="M${PL} ${y} H${PL + PW}" />
              <text class="fig-axis-y" x="${PL - 8}" y="${y + 3.6}">${escapeHtml(v.toLocaleString())}</text>`;
    })
    .join('');
  const xTicks = [0.35, 0.4, 0.45, 0.5, 0.55, 0.6];
  const xLabels = xTicks
    .map((v) => {
      const x = sx(v, xMin, xMax);
      return `<text class="fig-axis-x" x="${x}" y="${PT + PH + 18}">${escapeHtml(fmt(v, 2))}</text>`;
    })
    .join('');
  const binWidth = (xMax - xMin) / bins.length;
  const bars = bins
    .map((b, i) => {
      const x0 = sx(xMin + i * binWidth, xMin, xMax);
      const x1 = sx(xMin + (i + 1) * binWidth, xMin, xMax);
      const downTop = sy(b.down, 0, yMax);
      const total = b.down + b.up;
      const totalTop = sy(total, 0, yMax);
      const bottom = sy(0, 0, yMax);
      return `
        <rect x="${x0 + 1}" y="${downTop}" width="${x1 - x0 - 2}" height="${bottom - downTop}" fill="var(--chart-down)" />
        <rect x="${x0 + 1}" y="${totalTop}" width="${x1 - x0 - 2}" height="${downTop - totalTop}" fill="var(--chart-one)" />`;
    })
    .join('');
  return `
    ${svgOpen(fig.title)}
      ${title(fig.title)}
      ${grid}
      ${bars}
      ${chartFrame()}
      ${xLabels}
      ${yAxisLabel('Test observations')}
      ${xAxisLabel('Predicted probability of up move')}
      <g transform="translate(${PL + PW - 160} ${PT + 8})">
        <rect x="0" y="0" width="12" height="12" fill="var(--chart-one)" />
        <text class="fig-legend" x="18" y="10">Realized up</text>
        <rect x="0" y="20" width="12" height="12" fill="var(--chart-down)" />
        <text class="fig-legend" x="18" y="30">Realized down</text>
      </g>
    </svg>`;
}

function renderCostBars(fig) {
  const { data, yMin = -0.3, yMax = 0.04 } = fig;
  const step = PW / data.length;
  const groupW = step * 0.7;
  const barW = groupW / 2;
  const zeroY = sy(0, yMin, yMax);
  const yTicks = [-0.3, -0.25, -0.2, -0.15, -0.1, -0.05, 0];
  const grid = yTicks
    .map((v) => {
      const y = sy(v, yMin, yMax);
      return `<path class="fig-grid" d="M${PL} ${y} H${PL + PW}" />
              <text class="fig-axis-y" x="${PL - 8}" y="${y + 3.6}">${escapeHtml(fmt(v, 2))}</text>`;
    })
    .join('');
  const zeroLine = `<path class="fig-zero" d="M${PL} ${zeroY} H${PL + PW}" />`;
  const bars = data
    .map((d, i) => {
      const cx = PL + step * (i + 0.5);
      const grossTop = sy(Math.max(d.gross, 0), yMin, yMax);
      const grossBot = sy(Math.min(d.gross, 0), yMin, yMax);
      const netTop = sy(Math.max(d.net, 0), yMin, yMax);
      const netBot = sy(Math.min(d.net, 0), yMin, yMax);
      const grossX = cx - groupW / 2;
      const netX = cx;
      return `
        <rect x="${grossX}" y="${grossTop}" width="${barW - 2}" height="${grossBot - grossTop}" fill="var(--chart-one)" rx="2" />
        <rect x="${netX}" y="${netTop}" width="${barW - 2}" height="${netBot - netTop}" fill="var(--warm)" rx="2" />
        <text class="fig-value-sm" x="${netX + barW / 2 - 1}" y="${netBot + 14}">${escapeHtml(fmt(d.net, 3))}</text>`;
    })
    .join('');
  const labels = data.map((d) => [d.label, d.range]);
  return `
    ${svgOpen(fig.title)}
      ${title(fig.title)}
      ${grid}
      ${zeroLine}
      ${bars}
      ${chartFrame()}
      ${xCategoryLabels(labels)}
      ${yAxisLabel('Dollars per action')}
      ${xAxisLabel('Spread quintile and dollar range')}
      <g transform="translate(${PL + 16} ${PT + 8})">
        <rect x="0" y="0" width="12" height="12" fill="var(--chart-one)" />
        <text class="fig-legend" x="18" y="10">Gross EV / action</text>
        <rect x="0" y="20" width="12" height="12" fill="var(--warm)" />
        <text class="fig-legend" x="18" y="30">Net EV / action</text>
      </g>
    </svg>`;
}

function renderTimeline(fig) {
  const { points, splitIndex, yMin = 576, yMax = 589 } = fig;
  const n = points.length;
  const xs = points.map((_, i) => PL + (i / (n - 1)) * PW);
  const ys = points.map((p) => sy(p, yMin, yMax));
  const path = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x} ${ys[i]}`).join(' ');
  const splitX = PL + (splitIndex / (n - 1)) * PW;
  const yTicks = [577, 580, 583, 586, 589];
  const grid = yTicks
    .map((v) => {
      const y = sy(v, yMin, yMax);
      return `<path class="fig-grid" d="M${PL} ${y} H${PL + PW}" />
              <text class="fig-axis-y" x="${PL - 8}" y="${y + 3.6}">${escapeHtml(String(v))}</text>`;
    })
    .join('');
  const xLabelTimes = ['09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:00'];
  const xLabels = xLabelTimes
    .map((label, i) => {
      const x = PL + (i / (xLabelTimes.length - 1)) * PW;
      return `<text class="fig-axis-x" x="${x}" y="${PT + PH + 18}">${escapeHtml(label)}</text>`;
    })
    .join('');
  return `
    ${svgOpen(fig.title)}
      ${title(fig.title)}
      <rect x="${PL}" y="${PT}" width="${splitX - PL}" height="${PH}" fill="var(--chart-train)" opacity="0.45" />
      <rect x="${splitX}" y="${PT}" width="${PL + PW - splitX}" height="${PH}" fill="var(--chart-test)" opacity="0.45" />
      ${grid}
      <path class="fig-line-one" d="${path}" style="stroke-width:1.6" />
      <path class="fig-split" d="M${splitX} ${PT} V${PT + PH}" />
      <text class="fig-legend" x="${splitX + 8}" y="${PT + 16}">split @ 12:28:15</text>
      ${chartFrame()}
      ${xLabels}
      ${yAxisLabel('Midprice (USD)')}
      ${xAxisLabel('Time on 2012-06-21')}
      <g transform="translate(${PL + 16} ${PT + PH - 40})">
        <rect x="0" y="0" width="14" height="10" fill="var(--chart-train)" opacity="0.85" />
        <text class="fig-legend" x="20" y="9">Train (70%)</text>
        <rect x="0" y="16" width="14" height="10" fill="var(--chart-test)" opacity="0.85" />
        <text class="fig-legend" x="20" y="25">Test (30%)</text>
      </g>
    </svg>`;
}

function renderSpreadHist(fig) {
  const { bins, quintileBounds = [], xMin = 0, xMax = 37, yMin = 1, yMax = 10000 } = fig;
  const logMin = Math.log10(yMin);
  const logMax = Math.log10(yMax);
  const syLog = (v) => PT + PH - ((Math.log10(Math.max(v, yMin)) - logMin) / (logMax - logMin)) * PH;
  const yTicks = [1, 10, 100, 1000, 10000];
  const grid = yTicks
    .map((v) => {
      const y = syLog(v);
      const label = v >= 1000 ? `10^${Math.log10(v)}` : String(v);
      return `<path class="fig-grid" d="M${PL} ${y} H${PL + PW}" />
              <text class="fig-axis-y" x="${PL - 8}" y="${y + 3.6}">${escapeHtml(label)}</text>`;
    })
    .join('');
  const xTicks = [0, 5, 10, 15, 20, 25, 30, 35];
  const xLabels = xTicks
    .map((v) => `<text class="fig-axis-x" x="${sx(v, xMin, xMax)}" y="${PT + PH + 18}">${v}</text>`)
    .join('');
  const bars = bins
    .map((b) => {
      const x0 = sx(b.x - 0.45, xMin, xMax);
      const x1 = sx(b.x + 0.45, xMin, xMax);
      const top = syLog(b.count);
      const bottom = syLog(yMin);
      return `<rect x="${x0}" y="${top}" width="${x1 - x0}" height="${bottom - top}" fill="var(--chart-one)" opacity="0.85" />`;
    })
    .join('');
  const quintLines = quintileBounds
    .map((q) => {
      const x = sx(q, xMin, xMax);
      return `<path class="fig-quintile" d="M${x} ${PT} V${PT + PH}" />`;
    })
    .join('');
  return `
    ${svgOpen(fig.title)}
      ${title(fig.title)}
      ${grid}
      ${bars}
      ${quintLines}
      ${chartFrame()}
      ${xLabels}
      ${yAxisLabel('Count (log scale)')}
      ${xAxisLabel('Spread (ticks; 1 tick = $0.01)')}
    </svg>`;
}

function renderCoefTable(fig) {
  const rows = fig.rows
    .map(
      (r) => `
        <tr>
          <th scope="row"><code>${escapeHtml(r.feature)}</code></th>
          <td class="num ${r.coef >= 0 ? 'pos' : 'neg'}">${escapeHtml(r.coef >= 0 ? '+' : '')}${escapeHtml(r.coef.toFixed(3))}</td>
          <td>${escapeHtml(r.note)}</td>
        </tr>`,
    )
    .join('');
  return `
    <table class="fig-table">
      <thead>
        <tr><th>Feature</th><th class="num">Std. coef.</th><th>Reading</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function renderCostTable(fig) {
  const rows = fig.rows
    .map(
      (r) => `
        <tr>
          <td class="num">${escapeHtml(r.threshold.toFixed(2))}</td>
          <td class="num">${escapeHtml(r.mult.toFixed(1))}&times;</td>
          <td class="num">${escapeHtml(r.actions.toLocaleString())}</td>
          <td class="num">${escapeHtml(r.noTrade)}</td>
          <td class="num neg">${escapeHtml(r.netObs)}</td>
          <td class="num neg">${escapeHtml(r.netAct)}</td>
        </tr>`,
    )
    .join('');
  return `
    <table class="fig-table fig-table--cost">
      <thead>
        <tr>
          <th class="num">Thr.</th>
          <th class="num">Mult.</th>
          <th class="num">Actions</th>
          <th class="num">No-trade</th>
          <th class="num">Net EV / obs</th>
          <th class="num">Net EV / action</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function renderEquation(fig) {
  const num = fig.number ? `<span class="eq-num">(${escapeHtml(String(fig.number))})</span>` : '';
  return `<div class="eq-block"><div class="eq-content">${fig.html}</div>${num}</div>`;
}

const renderers = {
  'auc-bars': renderAucBars,
  'spread-bars': renderSpreadBars,
  'tod-line': renderTodLine,
  roc: renderRoc,
  reliability: renderReliability,
  'score-hist': renderScoreHist,
  'cost-bars': renderCostBars,
  timeline: renderTimeline,
  'spread-hist': renderSpreadHist,
  'coef-table': renderCoefTable,
  'cost-table': renderCostTable,
  equation: renderEquation,
};

const BARE_TYPES = new Set(['equation']);

export function renderFigureBody(fig) {
  const renderer = renderers[fig.type];
  if (!renderer) return '';
  return renderer(fig);
}

export function renderFigureCard(fig) {
  const body = renderFigureBody(fig);
  if (!body) return '';
  if (BARE_TYPES.has(fig.type)) return body;
  const caption = fig.caption
    ? `<figcaption><strong>${escapeHtml(fig.title)}.</strong> ${escapeHtml(fig.caption)}</figcaption>`
    : '';
  return `<figure class="chart-card">${body}${caption}</figure>`;
}
