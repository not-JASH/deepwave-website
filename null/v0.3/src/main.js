import {
  caseStudies,
  domains,
  methods,
  proofPoints,
  researchers,
  researchItems,
  sourceNotes
} from './data.js';

const app = document.querySelector('#app');
const formatDate = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' });

const unique = (values) => [...new Set(values)].sort((a, b) => a.localeCompare(b));
const byNewest = (a, b) => new Date(b.date) - new Date(a.date);
const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const topicOptions = unique(researchItems.map((item) => item.topic));
const methodOptions = unique(researchItems.map((item) => item.method));
const typeOptions = unique(researchItems.map((item) => item.type));

const appShell = () => `
  <header class="site-header" data-header>
    <div class="header-inner">
      <a class="brand" href="#top" aria-label="Deep Wave Research home">
        <img src="./assets/deep-wave-mark.svg" alt="" width="40" height="40" />
        <span class="brand-copy">
          <strong>Deep Wave</strong>
          <span>Research</span>
        </span>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-button>
        <span class="menu-button__bar"></span>
        <span class="visually-hidden">Toggle navigation</span>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Primary" data-nav>
        <a href="#domains">Domains</a>
        <a href="#library">Library</a>
        <a href="#methods">Methods</a>
        <a href="#cases">Cases</a>
        <a href="#studio">Studio</a>
        <a href="#contact">Contact</a>
        <button class="theme-toggle" type="button" aria-pressed="false" data-theme-toggle>
          <span aria-hidden="true">◐</span>
          <span>Theme</span>
        </button>
      </nav>
    </div>
  </header>

  <main id="main" tabindex="-1">
    ${hero()}
    ${proofBar()}
    ${domainSection()}
    ${featuredInsight()}
    ${librarySection()}
    ${methodsSection()}
    ${caseStudySection()}
    ${reportTemplate()}
    ${studioSection()}
    ${sourceSection()}
    ${contactSection()}
  </main>
  ${footer()}
`;

const hero = () => `
  <section id="top" class="hero section-frame">
    <div class="hero__content reveal">
      <p class="eyebrow">Research operating system / 2026 website draft</p>
      <h1>Evidence in motion for complex decisions.</h1>
      <p class="hero__lede">
        Deep Wave Research maps markets, systems, behavior, and technology with rigorous methods—then turns findings into decisions people can actually use.
      </p>
      <div class="hero__actions" aria-label="Primary actions">
        <a class="button button--primary" href="#library">Explore research</a>
        <a class="button button--ghost" href="#methods">See methods</a>
      </div>
      <dl class="hero__meta" aria-label="Site principles">
        <div><dt>Type</dt><dd>Readable system</dd></div>
        <div><dt>Motion</dt><dd>Discovery, not spectacle</dd></div>
        <div><dt>Evidence</dt><dd>Visible methods</dd></div>
      </dl>
    </div>
    <div class="hero__visual reveal" aria-label="Animated data wave field">
      ${wavePanel('hero-wave')}
    </div>
  </section>
`;

const wavePanel = (id) => {
  const points = Array.from({ length: 56 }, (_, index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    const x = 24 + col * 37;
    const y = 34 + row * 35 + Math.sin(col * 0.8 + row) * 7;
    const size = 2.4 + ((index + row) % 4) * 0.55;
    const delay = (index % 9) * 0.08;
    return `<circle cx="${x}" cy="${y.toFixed(2)}" r="${size.toFixed(2)}" style="--d:${delay}s" />`;
  }).join('');

  return `
    <figure class="wave-panel" id="${id}">
      <figcaption>
        <span>Field scan</span>
        <strong>DWR-072</strong>
      </figcaption>
      <svg viewBox="0 0 320 300" role="img" aria-labelledby="${id}-title ${id}-desc">
        <title id="${id}-title">Wave-grid signal visualization</title>
        <desc id="${id}-desc">A field of modular data points connected by chart-inspired wave lines.</desc>
        <defs>
          <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="var(--accent)" />
            <stop offset="1" stop-color="var(--signal)" />
          </linearGradient>
        </defs>
        <path class="wave-line wave-line--one" d="M20 175 C62 105 104 240 150 170 C198 94 234 114 300 58" />
        <path class="wave-line wave-line--two" d="M16 222 C58 180 104 190 146 216 C202 250 234 166 304 138" />
        <g class="wave-dots">${points}</g>
        <rect class="scan-window" x="38" y="42" width="244" height="188" rx="26" />
      </svg>
      <div class="wave-panel__caption">
        <span>Signal density</span>
        <meter min="0" max="100" value="74">74%</meter>
        <span>74%</span>
      </div>
    </figure>
  `;
};

const proofBar = () => `
  <section class="proof-strip" aria-label="Deep Wave proof points">
    ${proofPoints.map((point) => `
      <article class="proof-card reveal">
        <p>${point.label}</p>
        <strong>${point.value}</strong>
        <span>${point.detail}</span>
      </article>
    `).join('')}
  </section>
`;

const domainSection = () => `
  <section id="domains" class="section-block">
    <div class="section-heading reveal">
      <p class="eyebrow">Research domains</p>
      <h2>Built for organizations that need clarity across systems.</h2>
      <p>Six flexible domains give the homepage immediate specificity without turning the brand into a generic consultancy template.</p>
    </div>
    <div class="domain-grid">
      ${domains.map((domain) => `
        <article class="domain-card reveal" data-accent="${domain.accent}">
          <span class="domain-card__signal" aria-hidden="true">${domain.signal}</span>
          <h3>${domain.title}</h3>
          <p>${domain.summary}</p>
        </article>
      `).join('')}
    </div>
  </section>
`;

const featuredInsight = () => {
  const item = researchItems[0];
  return `
    <section class="feature section-frame reveal" aria-labelledby="feature-title">
      <div>
        <p class="eyebrow">Featured insight</p>
        <h2 id="feature-title">${item.title}</h2>
        <p>${item.finding}</p>
        <div class="meta-row" aria-label="Featured report metadata">
          <span>${item.type}</span>
          <span>${item.method}</span>
          <span>${formatDate.format(new Date(item.date))}</span>
          <span>${item.confidence} confidence</span>
        </div>
        <a class="text-link" href="#sample-report">Read the HTML report template</a>
      </div>
      <div class="index-card" aria-label="Research index card example">
        <div class="index-card__topline">
          <span>DWR / Insight card</span>
          <span>${item.readTime}</span>
        </div>
        <strong>${item.title}</strong>
        <p>${item.finding}</p>
        <div class="tag-list">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    </section>
  `;
};

const librarySection = () => `
  <section id="library" class="section-block library-shell">
    <div class="section-heading reveal">
      <p class="eyebrow">Research library</p>
      <h2>Content discovery is the product.</h2>
      <p>Searchable, filterable, metadata-rich cards make reports, briefs, datasets, and fieldnotes easy to scan before opening.</p>
    </div>
    <form class="library-controls reveal" role="search" aria-label="Filter research library" data-library-controls>
      <label class="search-field">
        <span>Search reports</span>
        <input type="search" name="query" placeholder="Search by topic, method, author, or tag" autocomplete="off" data-filter="query" />
      </label>
      ${selectControl('topic', 'Topic', topicOptions)}
      ${selectControl('method', 'Method', methodOptions)}
      ${selectControl('type', 'Format', typeOptions)}
      <button class="button button--secondary" type="reset">Reset</button>
    </form>
    <div class="library-status" aria-live="polite" data-library-status></div>
    <div class="research-grid" data-research-grid></div>
  </section>
`;

const selectControl = (name, label, options) => `
  <label class="select-field">
    <span>${label}</span>
    <select name="${name}" data-filter="${name}">
      <option value="">All ${label.toLowerCase()}s</option>
      ${options.map((option) => `<option value="${option}">${option}</option>`).join('')}
    </select>
  </label>
`;

const methodsSection = () => `
  <section id="methods" class="section-block methods-section">
    <div class="section-heading reveal">
      <p class="eyebrow">Methods</p>
      <h2>Make rigor visible without making the interface heavy.</h2>
      <p>The methodology page structure is expressed as reusable cards, model notes, chart summaries, and traceable outputs.</p>
    </div>
    <div class="methods-layout">
      <ol class="method-list" aria-label="Deep Wave research process">
        ${methods.map((method, index) => `
          <li class="method-card reveal">
            <span class="method-card__step">0${index + 1}</span>
            <div>
              <h3>${method.name}</h3>
              <p>${method.description}</p>
              <ul>
                ${method.outputs.map((output) => `<li>${output}</li>`).join('')}
              </ul>
            </div>
          </li>
        `).join('')}
      </ol>
      <aside class="evidence-chart reveal" aria-labelledby="chart-title">
        <p class="eyebrow">Evidence trace</p>
        <h3 id="chart-title">Method mix by study phase</h3>
        <p class="chart-summary">Accessible chart summary: this prototype shows higher synthesis and quantitative effort near decision delivery, with fieldwork concentrated early.</p>
        ${bar('Discovery', 72)}
        ${bar('Modeling', 64)}
        ${bar('Fieldwork', 58)}
        ${bar('Synthesis', 86)}
      </aside>
    </div>
  </section>
`;

const bar = (label, value) => `
  <div class="chart-bar" style="--value:${value}">
    <span>${label}</span>
    <strong>${value}%</strong>
    <i aria-hidden="true"></i>
  </div>
`;

const caseStudySection = () => `
  <section id="cases" class="section-block case-section">
    <div class="section-heading reveal">
      <p class="eyebrow">Client outcomes</p>
      <h2>Case studies framed around decisions improved.</h2>
      <p>Outcomes are written in practical language: risk reduced, options clarified, signals monitored, and choices made.</p>
    </div>
    <div class="case-grid">
      ${caseStudies.map((study) => `
        <article class="case-card reveal">
          <span>${study.sector}</span>
          <h3>${study.title}</h3>
          <p>${study.body}</p>
          <strong>${study.metric}</strong>
        </article>
      `).join('')}
    </div>
  </section>
`;

const reportTemplate = () => `
  <article id="sample-report" class="report-template section-frame reveal">
    <div class="report-template__meta">
      <span>HTML report template</span>
      <span>May 2026</span>
      <span>Prepared by Deep Wave Systems Lab</span>
    </div>
    <div class="report-template__grid">
      <header>
        <p class="eyebrow">Sample publication</p>
        <h2>AI Adoption Decision Map</h2>
        <p class="report-lede">A sample long-form report page demonstrating accessible publishing, citation-ready metadata, methodology notes, and related research modules.</p>
      </header>
      <aside class="report-aside" aria-label="Report actions and metadata">
        <a class="button button--primary" href="#contact">Request full briefing</a>
        <button class="button button--ghost" type="button" data-copy-citation="Deep Wave Research. (2026). AI Adoption Decision Map. Deep Wave Research Library.">Copy citation</button>
        <dl>
          <div><dt>Method</dt><dd>Mixed methods</dd></div>
          <div><dt>Confidence</dt><dd>High</dd></div>
          <div><dt>Audience</dt><dd>Executives / Product</dd></div>
        </dl>
      </aside>
      <section class="report-body" aria-label="Report excerpt">
        <h3>Executive finding</h3>
        <p>Organizations that define an evidence threshold before running AI pilots move faster because teams know when to expand, pause, or redesign the workflow.</p>
        <h3>Methodology note</h3>
        <p>The study combines prototype audits, stakeholder interviews, workflow trace analysis, and a structured decision model. Each finding includes confidence level, limitation note, and recommended validation step.</p>
        <figure class="report-figure">
          ${miniMatrix()}
          <figcaption>Figure summary: readiness rises when governance, fallback design, data access, and user training are reviewed together instead of as separate workstreams.</figcaption>
        </figure>
      </section>
    </div>
  </article>
`;

const miniMatrix = () => `
  <svg class="mini-matrix" viewBox="0 0 420 220" role="img" aria-labelledby="matrix-title matrix-desc">
    <title id="matrix-title">AI readiness evidence matrix</title>
    <desc id="matrix-desc">Four rows of evidence cells showing readiness levels across governance, workflow, data, and training dimensions.</desc>
    ${['Governance', 'Workflow', 'Data', 'Training'].map((label, row) => `
      <text x="16" y="${44 + row * 44}">${label}</text>
      ${Array.from({ length: 5 }, (_, col) => `<rect x="${130 + col * 48}" y="${22 + row * 44}" width="34" height="28" rx="7" class="cell cell--${(row + col) % 3}" />`).join('')}
    `).join('')}
  </svg>
`;

const studioSection = () => `
  <section id="studio" class="section-block studio-section">
    <div class="section-heading reveal">
      <p class="eyebrow">Researcher visibility</p>
      <h2>Trust is easier to build when expertise is visible.</h2>
      <p>Profile cards give a research company a more human feel while preserving a quiet, editorial interface.</p>
    </div>
    <div class="people-grid">
      ${researchers.map((person) => `
        <article class="person-card reveal">
          <span class="avatar" aria-hidden="true">${person.initials}</span>
          <h3>${person.name}</h3>
          <p>${person.role}</p>
          <small>${person.note}</small>
        </article>
      `).join('')}
    </div>
  </section>
`;

const sourceSection = () => `
  <section class="section-block source-section" aria-labelledby="source-title">
    <div class="section-heading reveal">
      <p class="eyebrow">Design provenance</p>
      <h2 id="source-title">Recommendations translated into interface rules.</h2>
      <p>The draft uses original graphics and sample content; it does not copy third-party brand assets.</p>
    </div>
    <div class="source-grid">
      ${sourceNotes.map((note) => `
        <article class="source-card reveal">
          <h3>${note.label}</h3>
          <p>${note.text}</p>
        </article>
      `).join('')}
    </div>
  </section>
`;

const contactSection = () => `
  <section id="contact" class="contact section-frame reveal">
    <div>
      <p class="eyebrow">Contact</p>
      <h2>Bring a complex decision into focus.</h2>
      <p>Use this draft CTA style for partnerships, custom studies, executive briefings, and report access.</p>
    </div>
    <form class="contact-form" aria-label="Prototype contact form">
      <label>
        <span>Name</span>
        <input type="text" name="name" autocomplete="name" placeholder="Your name" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" autocomplete="email" placeholder="name@organization.com" />
      </label>
      <label>
        <span>Research need</span>
        <textarea name="message" rows="4" placeholder="Describe the decision, audience, and timing."></textarea>
      </label>
      <button class="button button--primary" type="submit">Request a briefing</button>
      <p class="form-note" data-form-note>This prototype form is not connected to a backend.</p>
    </form>
  </section>
`;

const footer = () => `
  <footer class="site-footer">
    <div>
      <a class="brand brand--footer" href="#top" aria-label="Deep Wave Research home">
        <img src="./assets/deep-wave-mark.svg" alt="" width="34" height="34" />
        <span class="brand-copy"><strong>Deep Wave</strong><span>Research</span></span>
      </a>
      <p>Minimal, but not empty. Corporate, but not cold. Analytical, but human.</p>
    </div>
    <ul>
      <li><a href="#library">Research library</a></li>
      <li><a href="#methods">Methodology</a></li>
      <li><a href="./docs/source-notes.md">Source notes</a></li>
    </ul>
  </footer>
`;

const researchCard = (item) => `
  <article class="research-card reveal" data-topic="${item.topic}" data-type="${item.type}" style="view-transition-name: card-${item.id}">
    <div class="research-card__topline">
      <span>${item.type}</span>
      <time datetime="${item.date}">${formatDate.format(new Date(item.date))}</time>
    </div>
    <h3><a href="${item.href}">${item.title}</a></h3>
    <p>${item.finding}</p>
    <div class="tag-list">
      ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
    </div>
    <dl class="research-meta">
      <div><dt>Method</dt><dd>${item.method}</dd></div>
      <div><dt>Audience</dt><dd>${item.audience}</dd></div>
      <div><dt>Read</dt><dd>${item.readTime}</dd></div>
      <div><dt>Confidence</dt><dd>${item.confidence}</dd></div>
    </dl>
  </article>
`;

const initLibrary = () => {
  const form = document.querySelector('[data-library-controls]');
  const grid = document.querySelector('[data-research-grid]');
  const status = document.querySelector('[data-library-status]');
  if (!form || !grid || !status) return;

  const getFilteredItems = () => {
    const data = new FormData(form);
    const query = String(data.get('query') || '').trim().toLowerCase();
    const topic = data.get('topic');
    const method = data.get('method');
    const type = data.get('type');

    return researchItems
      .filter((item) => {
        const searchable = [
          item.title,
          item.finding,
          item.topic,
          item.method,
          item.type,
          item.audience,
          item.author,
          ...item.tags
        ].join(' ').toLowerCase();

        return (!query || searchable.includes(query))
          && (!topic || item.topic === topic)
          && (!method || item.method === method)
          && (!type || item.type === type);
      })
      .sort(byNewest);
  };

  const render = () => {
    const items = getFilteredItems();
    status.textContent = `${items.length} ${items.length === 1 ? 'item' : 'items'} shown`;
    grid.innerHTML = items.length
      ? items.map(researchCard).join('')
      : `<div class="empty-state"><h3>No matching research.</h3><p>Reset filters or try a broader topic.</p></div>`;
    revealVisibleItems(grid);
  };

  const transitionRender = () => {
    if (document.startViewTransition) {
      document.startViewTransition(render);
    } else {
      render();
    }
  };

  form.addEventListener('input', transitionRender);
  form.addEventListener('reset', () => requestAnimationFrame(transitionRender));
  render();
};

const revealVisibleItems = (scope = document) => {
  scope.querySelectorAll('.reveal').forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight * 0.98) {
      element.classList.add('is-visible');
    }
  });
};

const initReveal = () => {
  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

  revealItems.forEach((item) => observer.observe(item));
};

const initNavigation = () => {
  const header = document.querySelector('[data-header]');
  const button = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');

  const setOpen = (isOpen) => {
    button?.setAttribute('aria-expanded', String(isOpen));
    nav?.toggleAttribute('data-open', isOpen);
  };

  button?.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  nav?.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) setOpen(false);
  });

  const updateHeader = () => header?.toggleAttribute('data-scrolled', window.scrollY > 10);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
};

const initTheme = () => {
  const toggle = document.querySelector('[data-theme-toggle]');
  const storedTheme = localStorage.getItem('dwr-theme');

  if (storedTheme === 'dark') {
    document.documentElement.dataset.theme = 'dark';
    toggle?.setAttribute('aria-pressed', 'true');
  }

  toggle?.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('dwr-theme', isDark ? 'light' : 'dark');
    toggle.setAttribute('aria-pressed', String(!isDark));
  });
};

const initCopyCitation = () => {
  document.querySelectorAll('[data-copy-citation]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.getAttribute('data-copy-citation') || '';
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = 'Citation copied';
        setTimeout(() => { button.textContent = 'Copy citation'; }, 1800);
      } catch {
        button.textContent = value;
      }
    });
  });
};

const initContact = () => {
  const form = document.querySelector('.contact-form');
  const note = document.querySelector('[data-form-note]');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    note.textContent = 'Thanks — this prototype shows the confirmation state. Connect the form to a CRM or serverless endpoint in production.';
  });
};

const initHashFocus = () => {
  window.addEventListener('hashchange', () => {
    const target = document.querySelector(window.location.hash);
    if (target instanceof HTMLElement) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
};

app.innerHTML = appShell();
initTheme();
initNavigation();
initLibrary();
initReveal();
initCopyCitation();
initContact();
initHashFocus();
