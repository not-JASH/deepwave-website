# Deep Wave Research Website Draft

A modern JavaScript website draft for **Deep Wave Research**, designed as a textured, high-contrast research-company landing page.

## What is included

- `index.html` - semantic single-page website
- `src/styles.css` - layered modern CSS, container queries, scroll animations, registered CSS properties, responsive layouts
- `src/main.js` - native ES modules, dynamic content rendering, View Transitions API enhancement, IntersectionObserver reveal states, canvas wave field, client-side filtering, theme toggle
- `assets/` - original SVG logo, favicon, noise texture, and topographic wave artwork
- `package.json` + `vite.config.js` - optional Vite development workflow

## Run locally

### Option 1: static server, no install

```bash
cd deep-wave-research-website
python3 -m http.server 5173
```

Open `http://localhost:5173`.

### Option 2: Vite

```bash
cd deep-wave-research-website
npm install
npm run dev
```

## Design notes

The visual system is original and does not reuse imagery from the reference PDF. It takes high-level inspiration from distressed oversized typography, neon annotations, binary/noise fields, scanner/scrapbook texture, and catalog-style grids.

## Content notes

The contact form is a front-end prototype. It opens a `mailto:` draft addressed to `hello@deepwaveresearch.example`; replace this with a real endpoint or form service before launch.
