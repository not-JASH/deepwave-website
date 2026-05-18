# Deep Wave Research — Website Draft

A static, modern JavaScript website draft for **Deep Wave Research**, inspired by the provided visual study: Swiss-grid research archive, analog sci-fi terminal, mid-century corporate research campus, warm archival palette, and rounded wave-routing supergraphics.

## What is included

- `index.html` — single-page website shell.
- `src/styles.css` — full visual system with CSS tokens, responsive layout, container queries, reduced-motion support, and modern CSS layers.
- `src/main.js` — data-driven rendering, active section tracking, interactive SVG facility map, view-transition-aware navigation, and animated readouts.
- `src/data.js` — editable content for research areas, reports, metrics, and archive cards.
- `assets/study/` — the supplied study graphics copied locally for reference and use in the mockup.
- `assets/generated/` — original site-specific SVG graphics.

## Run locally

This draft has no required runtime build step. From this folder, run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

For a Vite development workflow:

```bash
npm install
npm run dev
```

## Design direction

The site is intentionally not a generic AI/SaaS layout. It treats navigation as a research-facility directory with numbered nodes, instrument panels, report cards, warm paper surfaces, and subtle signal routing motion.
