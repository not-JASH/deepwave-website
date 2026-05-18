const signalIndex = [
  {
    title: 'Weak signal scans',
    text: 'Weekly synthesis across climate, technology, culture, policy, capital, and behavior.'
  },
  {
    title: 'Deep uncertainty maps',
    text: 'Scenario architecture for decisions that must survive imperfect information.'
  },
  {
    title: 'Human texture',
    text: 'Qualitative evidence that keeps strategy connected to lived reality.'
  },
  {
    title: 'Model critique',
    text: 'Assumption stress tests, blind-spot reviews, and counterfactual planning.'
  },
  {
    title: 'Opportunity territories',
    text: 'Actionable opportunity spaces grounded in signal strength and timing.'
  },
  {
    title: 'Executive field notes',
    text: 'Concise, visual intelligence briefs made to move teams from noticing to acting.'
  }
];

const caseStudies = [
  {
    title: 'Coastal resilience behaviors',
    tag: 'Climate',
    year: '2026',
    text: 'Mapped how residents, insurers, and city teams interpret flood readiness signals across three coastal markets.',
    meta: ['fieldwork', 'scenario lab', 'policy']
  },
  {
    title: 'AI trust threshold',
    tag: 'Technology',
    year: '2026',
    text: 'Identified the moments when enterprise buyers move from curiosity to confidence in agentic software systems.',
    meta: ['expert panels', 'market map', 'go-to-market']
  },
  {
    title: 'Care economy futures',
    tag: 'Behavior',
    year: '2025',
    text: 'Synthesized household routines, labor constraints, and social narratives reshaping elder-care innovation.',
    meta: ['ethnography', 'culture', 'forecast']
  },
  {
    title: 'Synthetic media risk',
    tag: 'Technology',
    year: '2025',
    text: 'Built a signal taxonomy for reputational, legal, and brand risks in generated media workflows.',
    meta: ['risk', 'governance', 'signals']
  },
  {
    title: 'Material circularity demand',
    tag: 'Markets',
    year: '2026',
    text: 'Separated durable demand from sustainability theater in consumer and B2B material adoption.',
    meta: ['markets', 'materials', 'strategy']
  },
  {
    title: 'Post-platform youth culture',
    tag: 'Behavior',
    year: '2026',
    text: 'Tracked why younger audiences are shifting from polished identity performance to smaller, stranger communities.',
    meta: ['culture', 'social', 'identity']
  },
  {
    title: 'Grid-edge investment map',
    tag: 'Climate',
    year: '2025',
    text: 'Prioritized deployment opportunities for distributed energy, storage, and demand flexibility services.',
    meta: ['energy', 'capital', 'infrastructure']
  },
  {
    title: 'Premium fatigue index',
    tag: 'Markets',
    year: '2026',
    text: 'Measured where consumers still reward craft, and where elevated branding has become background noise.',
    meta: ['brand', 'pricing', 'consumer']
  }
];

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

function pad(num) {
  return String(num).padStart(2, '0');
}

function hydrateIndex() {
  const grid = $('[data-index-grid]');
  const template = $('#index-card-template');
  if (!grid || !template) return;

  signalIndex.forEach((item, index) => {
    const fragment = template.content.cloneNode(true);
    const article = $('article', fragment);
    $('.index-card__number', fragment).textContent = `[ ${pad(index + 1)} ]`;
    $('h3', fragment).textContent = item.title;
    $('p', fragment).textContent = item.text;
    article.style.setProperty('--delay', `${index * 80}ms`);
    grid.append(fragment);
  });
}

function hydrateCases() {
  const grid = $('[data-case-grid]');
  const bar = $('[data-filter-bar]');
  const template = $('#case-card-template');
  if (!grid || !bar || !template) return;

  const tags = ['All', ...new Set(caseStudies.map((study) => study.tag))];
  let active = 'All';

  const renderFilters = () => {
    bar.innerHTML = '';
    tags.forEach((tag) => {
      const button = document.createElement('button');
      button.className = 'filter-chip';
      button.type = 'button';
      button.textContent = tag;
      button.setAttribute('aria-pressed', String(tag === active));
      button.addEventListener('click', () => {
        active = tag;
        renderFilters();
        renderCards();
      });
      bar.append(button);
    });
  };

  const renderCards = () => {
    const studies = active === 'All' ? caseStudies : caseStudies.filter((study) => study.tag === active);
    const update = () => {
      grid.innerHTML = '';
      studies.forEach((study) => {
        const fragment = template.content.cloneNode(true);
        $('.case-card__tag', fragment).textContent = study.tag;
        $('.case-card__year', fragment).textContent = study.year;
        $('h3', fragment).textContent = study.title;
        $('p', fragment).textContent = study.text;
        const meta = $('.case-card__meta', fragment);
        study.meta.forEach((item) => {
          const chip = document.createElement('span');
          chip.textContent = item;
          meta.append(chip);
        });
        grid.append(fragment);
      });
      observeReveals(grid);
    };

    if ('startViewTransition' in document) {
      document.startViewTransition(update);
    } else {
      update();
    }
  };

  renderFilters();
  renderCards();
}

function observeReveals(root = document) {
  const items = $$('[data-reveal]:not(.is-visible)', root);
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
  );

  items.forEach((item) => observer.observe(item));
}

function initThemeToggle() {
  const shell = $('.site-shell');
  const toggle = $('[data-theme-toggle]');
  const themeColor = $('meta[name="theme-color"]');
  if (!shell || !toggle) return;

  const themeColors = {
    dark: '#080908',
    light: '#edf3ee'
  };

  const applyTheme = (theme) => {
    shell.dataset.theme = theme;
    toggle.querySelector('strong').textContent = theme === 'dark' ? '01' : '02';
    if (themeColor) {
      themeColor.setAttribute('content', themeColors[theme] || themeColors.dark);
    }
    localStorage.setItem('dwr-theme', theme);
  };

  applyTheme(localStorage.getItem('dwr-theme') || 'dark');

  toggle.addEventListener('click', () => {
    const next = shell.dataset.theme === 'dark' ? 'light' : 'dark';
    if ('startViewTransition' in document) {
      document.startViewTransition(() => applyTheme(next));
    } else {
      applyTheme(next);
    }
  });
}

function initMagneticCards() {
  const cards = $$('.method-card, .case-card, .index-card, .scanner-card, .contact-card');
  cards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
    });
  });
}

function initContactForm() {
  const form = $('[data-contact-form]');
  const status = $('[data-form-status]');
  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const subject = encodeURIComponent(`Research inquiry from ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nBrief:\n${data.brief}`);
    status.textContent = 'Opening your email client with a prefilled inquiry draft.';
    window.location.href = `mailto:hello@deepwaveresearch.example?subject=${subject}&body=${body}`;
  });
}

class WaveField {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: true });
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.points = [];
    this.time = 0;
    this.pointer = { x: 0.7, y: 0.35 };
    this.resize = this.resize.bind(this);
    this.tick = this.tick.bind(this);
    this.resize();
    this.bind();
    this.tick();
  }

  bind() {
    window.addEventListener('resize', this.resize, { passive: true });
    window.addEventListener('pointermove', (event) => {
      this.pointer.x = event.clientX / window.innerWidth;
      this.pointer.y = event.clientY / window.innerHeight;
    }, { passive: true });
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.width = Math.max(320, Math.floor(rect.width));
    this.height = Math.max(320, Math.floor(rect.height));
    this.canvas.width = Math.floor(this.width * this.dpr);
    this.canvas.height = Math.floor(this.height * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.points = Array.from({ length: 90 }, (_, i) => ({
      i,
      x: Math.random(),
      y: Math.random(),
      speed: 0.4 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2
    }));
  }

  tick() {
    const { ctx, width, height } = this;
    this.time += 0.006;
    ctx.clearRect(0, 0, width, height);

    ctx.globalCompositeOperation = 'lighter';
    for (let band = 0; band < 9; band++) {
      const baseY = height * (0.15 + band * 0.085);
      ctx.beginPath();
      for (let x = -40; x <= width + 40; x += 14) {
        const wave = Math.sin(x * 0.012 + this.time * (2 + band * 0.16) + band) * (18 + band * 3);
        const pointerPull = Math.sin((x / width - this.pointer.x) * Math.PI) * 14 * this.pointer.y;
        const y = baseY + wave + pointerPull;
        if (x === -40) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = band % 3 === 0 ? 'rgba(36,255,57,.38)' : band % 3 === 1 ? 'rgba(75,245,255,.24)' : 'rgba(255,68,56,.24)';
      ctx.lineWidth = band % 2 ? 1 : 2;
      ctx.stroke();
    }

    this.points.forEach((point) => {
      const x = ((point.x + this.time * 0.018 * point.speed) % 1) * width;
      const y = (point.y + Math.sin(this.time * 2 + point.phase) * 0.02) * height;
      const size = 1 + Math.sin(this.time * 3 + point.phase) * 0.7;
      ctx.fillStyle = point.i % 5 === 0 ? 'rgba(36,255,57,.75)' : 'rgba(231,235,232,.38)';
      ctx.fillRect(x, y, size * 2, size * 2);
    });

    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(this.tick);
  }
}

function initWaveCanvas() {
  const canvas = $('[data-wave-canvas]');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  new WaveField(canvas);
}

function init() {
  hydrateIndex();
  hydrateCases();
  observeReveals();
  initThemeToggle();
  initMagneticCards();
  initContactForm();
  initWaveCanvas();
}

init();
