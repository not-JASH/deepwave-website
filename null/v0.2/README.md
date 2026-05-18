# Deep Wave Research — Website Draft

A modern JavaScript website draft for a research company named **Deep Wave Research**.

The draft is intentionally original: it does not copy or bundle images, logos, typefaces, or proprietary assets from the reference brands. It translates the research PDF and the referenced official case studies into a scalable design direction: restrained corporate minimalism, typographic hierarchy, high contrast, modular geometry, and purposeful motion.

## How to run

This is a static ES-module site with no required dependencies.

```bash
cd deep-wave-research-site
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

You can also use Vite if you prefer:

```bash
npm run dev
```

## Project structure

```text
deep-wave-research-site/
├── assets/
│   ├── deep-wave-logo.svg
│   ├── favicon.svg
│   └── og-card.svg
├── src/
│   ├── data.js
│   ├── main.js
│   └── styles.css
├── DESIGN_NOTES.md
├── README.md
├── index.html
└── package.json
```

## JavaScript and interaction features

- ES modules with separated content data and interaction logic.
- Generative canvas wave visualization for the hero panel.
- Accessible tab interface for research verticals.
- IntersectionObserver reveal animations.
- View Transitions API enhancement for theme switching, with fallback.
- Local storage for theme preference.
- Animated counters and active navigation state.
- Prototype mailto form that does not store or transmit data.

## CSS and design-system features

- CSS cascade layers for predictable scaling.
- Custom properties for color, spacing, motion, shadow, and type tokens.
- `@property` registration for animated conic accents.
- Responsive layouts with modern grid, clamp-based type scale, and container-aware components.
- High-contrast palette with dark mode.
- Reduced-motion support.
- System font stack; no proprietary font files are included.

## Notes

The copy, metrics, email address, and research offerings are prototype content. Replace them with real company positioning, case studies, contact details, and legal pages before production use.
