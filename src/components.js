const escapeHtml = (value = '') =>
  String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

export class SignalField extends HTMLElement {
  connectedCallback() {
    const density = this.getAttribute('density') === 'dense' ? 72 : 42;
    const dots = Array.from({ length: density }, (_, index) => {
      const x = (index * 29) % 100;
      const y = (index * 47 + Math.sin(index) * 18) % 100;
      const size = index % 9 === 0 ? 8 : index % 4 === 0 ? 5 : 3;
      const delay = (index % 12) * 90;
      return `<span style="--x:${x};--y:${y};--s:${size};--d:${delay}ms" aria-hidden="true"></span>`;
    }).join('');

    this.innerHTML = `
      <div class="signal-field" aria-hidden="true">
        <svg viewBox="0 0 600 420" preserveAspectRatio="none" focusable="false">
          <path d="M35 240 C120 110 190 340 280 205 S440 105 560 225" />
          <path d="M35 295 C125 170 190 390 280 250 S450 150 560 285" />
          <path d="M35 175 C145 40 205 250 305 130 S465 65 560 155" />
        </svg>
        ${dots}
      </div>`;
  }
}

export class ResearchCard extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  get item() {
    return this._item;
  }

  render() {
    if (!this._item) return;
    const item = this._item;
    const date = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(`${item.date}T12:00:00`));
    const tags = item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');

    this.innerHTML = `
      <article class="research-card" data-format="${escapeHtml(item.format)}">
        <div class="research-card__meta">
          <span>${escapeHtml(item.format)}</span>
          <span>${date}</span>
          <span>${item.readingMinutes} min</span>
        </div>
        <div class="research-card__body">
          <p class="research-card__topic">${escapeHtml(item.topic)} · ${escapeHtml(item.method)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.finding)}</p>
        </div>
        <div class="research-card__metric" aria-label="Key metric: ${escapeHtml(item.metric)} ${escapeHtml(item.metricLabel)}">
          <strong>${escapeHtml(item.metric)}</strong>
          <span>${escapeHtml(item.metricLabel)}</span>
        </div>
        <div class="research-card__tags">${tags}</div>
        <div class="research-card__footer">
          <span>${escapeHtml(item.author)}</span>
          <a href="#report/${encodeURIComponent(item.id)}" aria-label="Read ${escapeHtml(item.title)}">Read report</a>
        </div>
      </article>`;
  }
}

export class DomainCard extends HTMLElement {
  set domain(domain) {
    this.innerHTML = `
      <article class="domain-card">
        <span class="domain-card__signal">${escapeHtml(domain.signal)}</span>
        <h3>${escapeHtml(domain.title)}</h3>
        <p>${escapeHtml(domain.summary)}</p>
      </article>`;
  }
}

export function defineComponents() {
  if (!customElements.get('signal-field')) customElements.define('signal-field', SignalField);
  if (!customElements.get('research-card')) customElements.define('research-card', ResearchCard);
  if (!customElements.get('domain-card')) customElements.define('domain-card', DomainCard);
}

export { escapeHtml };
