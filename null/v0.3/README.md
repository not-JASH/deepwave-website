# Deep Wave Research — website draft

A static JavaScript website draft for a research company named **Deep Wave Research**. The build is intentionally dependency-light and uses modern browser capabilities rather than a heavy framework.

## How to run

Open the folder in a local server. Any of these work:

```bash
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

Optional Vite workflow:

```bash
npm install
npm run dev
```

## What is included

- `index.html` — accessible app shell and metadata.
- `src/main.js` — modular rendering, research-library filtering, theme toggle, reduced-motion-friendly interactions, copy citation behavior, and progressive reveal.
- `src/data.js` — editable content model for domains, research cards, methods, case studies, researchers, and source notes.
- `src/styles.css` — design tokens, responsive grid, accessible focus states, container queries, dark mode, SVG animation, and print-conscious content hierarchy.
- `assets/` — original SVG logo, favicon, Open Graph card, and method map.
- `docs/source-notes.md` — implementation notes and research translation log.

## Design direction

The site translates the recommendations into a restrained but ownable research-company interface:

- **Credible and rigorous:** visible methodology, confidence labels, report metadata, and strong hierarchy.
- **Human intelligence:** researcher profile cards, warm off-white background, approachable language, and non-generic case framing.
- **Operational clarity:** searchable/filterable research library, reusable card templates, and an HTML report template.
- **Distinctive asset:** an original modular wave-grid graphic device used as logo, hero behavior, and chart motif.
- **Accessibility-first:** high-contrast text, 18px-ish body size, keyboard-accessible navigation, skip link, semantic landmarks, clear focus states, and `prefers-reduced-motion` support.

## Source-of-truth mapping

- The uploaded website recommendations asked for a research operating system rather than a brochure; this draft therefore centers the research library and HTML report template.
- The PDF report emphasized operational minimalism, type as infrastructure, one memorable graphic rule, motion as behavior, and warmth compensation; those became CSS tokens, the type stack, the wave-grid motif, filter motion, and researcher visibility.
- Official project pages were reviewed for design lessons only. No third-party brand artwork is copied.

## Production next steps

1. Replace prototype copy and sample research items with actual Deep Wave Research content.
2. Add a backend or serverless form endpoint for the contact form.
3. Convert flagship PDFs into real HTML report pages with citations, authors, downloadable PDFs, and structured metadata.
4. Run accessibility audits against final colors, copy, SVGs, charts, and form behavior.
5. Decide whether to self-host approved webfonts or stay with the current privacy-safe system font stack.
