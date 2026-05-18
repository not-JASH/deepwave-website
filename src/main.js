import { capabilities, methods, proof, verticals } from './data.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const renderCapabilities = () => {
  const target = $('[data-capabilities]');
  target.innerHTML = capabilities
    .map(
      (item, index) => `
        <article class="capability-card reveal" data-index="${String(index + 1).padStart(2, '0')}">
          <span class="capability-icon" aria-hidden="true"></span>
          <div>
            <h3>${item.title}</h3>
          </div>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join('');
};

const renderMethods = () => {
  const target = $('[data-methods]');
  target.innerHTML = methods
    .map(
      (item) => `
        <article class="method-step reveal">
          <strong>${item.label}</strong>
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `,
    )
    .join('');
};

const renderProof = () => {
  const target = $('[data-proof]');
  target.innerHTML = proof
    .map(
      (item) => `
        <article class="proof-card reveal">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join('');
};

const renderTabs = () => {
  const list = $('[data-tab-list]');
  const panel = $('[data-tab-panel]');

  const setPanel = (index) => {
    const item = verticals[index];
    panel.style.setProperty('--panel-rotation', item.rotation);
    panel.innerHTML = `
      <div>
        <p class="eyebrow">${item.eyebrow}</p>
        <h3>${item.title}</h3>
      </div>
      <div class="tab-panel-visual" aria-hidden="true"></div>
      <div>
        <p>${item.text}</p>
        <div class="tag-row" aria-label="Related tags">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    `;

    $$('button', list).forEach((button, buttonIndex) => {
      button.setAttribute('aria-selected', String(buttonIndex === index));
      button.tabIndex = buttonIndex === index ? 0 : -1;
    });
  };

  list.innerHTML = verticals
    .map(
      (item, index) => `
        <button type="button" role="tab" aria-selected="${index === 0}" data-tab="${index}">
          <strong>${item.eyebrow}</strong>
          <span>${String(index + 1).padStart(2, '0')} / ${item.tags[0]}</span>
        </button>
      `,
    )
    .join('');

  list.addEventListener('click', (event) => {
    const button = event.target.closest('[data-tab]');
    if (!button) return;
    setPanel(Number(button.dataset.tab));
  });

  list.addEventListener('keydown', (event) => {
    const current = Number(document.activeElement?.dataset?.tab ?? 0);
    const last = verticals.length - 1;
    const nextIndex = {
      ArrowDown: current === last ? 0 : current + 1,
      ArrowRight: current === last ? 0 : current + 1,
      ArrowUp: current === 0 ? last : current - 1,
      ArrowLeft: current === 0 ? last : current - 1,
      Home: 0,
      End: last,
    }[event.key];

    if (nextIndex === undefined) return;
    event.preventDefault();
    const nextButton = $(`[data-tab="${nextIndex}"]`, list);
    nextButton?.focus();
    setPanel(nextIndex);
  });

  setPanel(0);
};

const setupReveal = () => {
  if (prefersReducedMotion) {
    $$('.reveal').forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );

  $$('.reveal').forEach((element) => observer.observe(element));
};

const setupHeader = () => {
  const header = $('[data-header]');
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
};

const setupActiveNav = () => {
  const links = $$('.site-nav a');
  const sections = links
    .map((link) => ({ link, section: $(link.getAttribute('href')) }))
    .filter((item) => item.section);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.remove('is-active'));
        const active = sections.find((item) => item.section === entry.target);
        active?.link.classList.add('is-active');
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 },
  );

  sections.forEach((item) => observer.observe(item.section));
};

const setupTheme = () => {
  const root = document.documentElement;
  const button = $('[data-theme-toggle]');
  const stored = localStorage.getItem('dwr-theme');
  const fallback = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.dataset.theme = stored ?? fallback;

  const toggle = () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const apply = () => {
      root.dataset.theme = next;
      localStorage.setItem('dwr-theme', next);
      button.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`);
    };

    if (document.startViewTransition && !prefersReducedMotion) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  };

  button.addEventListener('click', toggle);
};

const setupCounters = () => {
  const counters = $$('[data-counter]');
  if (prefersReducedMotion) {
    counters.forEach((counter) => {
      counter.textContent = counter.dataset.counter;
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const end = Number(element.dataset.counter);
      const start = performance.now();
      const duration = 1200;

      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 4);
        element.textContent = Math.round(end * eased);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  });

  counters.forEach((counter) => observer.observe(counter));
};

const setupMarquee = () => {
  const track = $('[data-marquee]');
  track.innerHTML += track.innerHTML;
};

const setupForm = () => {
  const form = $('.brief-form');
  const note = $('[data-form-note]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Deep Wave Research brief');
    const body = encodeURIComponent(
      `Name: ${data.get('name') || ''}\nEmail: ${data.get('email') || ''}\n\nQuestion:\n${data.get('question') || ''}`,
    );
    note.textContent = 'Opening a prefilled email draft.';
    window.location.href = `mailto:briefs@deepwave.example?subject=${subject}&body=${body}`;
  });

  $('[data-copy-email]').addEventListener('click', async (event) => {
    const email = 'briefs@deepwave.example';
    try {
      await navigator.clipboard.writeText(email);
      event.currentTarget.textContent = 'Copied';
      setTimeout(() => {
        event.currentTarget.textContent = 'Copy email';
      }, 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
};

const setupWaveCanvas = () => {
  const canvas = $('#waveCanvas');
  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let frame = 0;
  const points = Array.from({ length: 56 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    r: 1.5 + (index % 5),
    phase: Math.random() * Math.PI * 2,
  }));

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const drawWave = (yBase, amplitude, frequency, color, lineWidth, phaseOffset = 0) => {
    ctx.beginPath();
    for (let x = -20; x <= width + 20; x += 10) {
      const y = yBase + Math.sin(x * frequency + frame * 0.018 + phaseOffset) * amplitude + Math.sin(x * frequency * 0.34 + frame * 0.011) * amplitude * 0.34;
      if (x === -20) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    const ink = css('--ink');
    const accent = css('--accent');
    const accent2 = css('--accent-2');
    const accent3 = css('--accent-3');
    const line = css('--line-strong');

    ctx.globalAlpha = 0.18;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.strokeStyle = line;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.globalAlpha = 0.95;
    drawWave(height * 0.42, height * 0.14, 0.014, ink, Math.max(5, width * 0.011));
    ctx.globalAlpha = 0.78;
    drawWave(height * 0.55, height * 0.12, 0.017, accent, Math.max(4, width * 0.008), Math.PI);
    ctx.globalAlpha = 0.54;
    drawWave(height * 0.29, height * 0.08, 0.021, accent3, Math.max(2, width * 0.004), Math.PI * 0.45);

    ctx.globalAlpha = 1;
    points.forEach((point, index) => {
      const x = point.x * width + Math.sin(frame * 0.01 + point.phase) * 12;
      const y = point.y * height + Math.cos(frame * 0.012 + point.phase) * 10;
      ctx.beginPath();
      ctx.arc(x, y, point.r, 0, Math.PI * 2);
      ctx.fillStyle = index % 3 === 0 ? accent2 : index % 3 === 1 ? ink : accent3;
      ctx.fill();
    });

    frame += 1;
    if (!prefersReducedMotion) requestAnimationFrame(animate);
  };

  resize();
  animate();
  window.addEventListener('resize', resize, { passive: true });
};

renderCapabilities();
renderMethods();
renderProof();
renderTabs();
setupMarquee();
setupReveal();
setupHeader();
setupActiveNav();
setupTheme();
setupCounters();
setupForm();
setupWaveCanvas();
