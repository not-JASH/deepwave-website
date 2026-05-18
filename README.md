# Deep Wave Research — website draft

A complete static JavaScript website draft for a research company named **Deep Wave Research**.

## What is included

- Modern ES module JavaScript app shell with reusable Web Components.
- Searchable and sortable research library.
- Accessible HTML report views with citation-ready metadata.
- Homepage, methods, sectors, case studies, researcher profiles, and contact prototype.
- Original SVG brand mark and social card.
- Dark mode toggle, keyboard-friendly navigation, skip link, focus states, and reduced-motion support.
- CSS container queries, cascade layers, fluid type, custom properties, and progressive View Transition API usage.

## Run locally

```bash
cd deep-wave-research-site
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

No build step is required. The site is deliberately dependency-free so it can be reviewed quickly and adapted into any production stack later.

## Suggested next production steps

1. Replace prototype report content with real studies and author metadata.
2. Connect the research library to a CMS or static content source.
3. Add tagged downloadable PDFs for each HTML report.
4. Run browser/device QA, accessibility testing, and content governance review.
5. Convert the static prototype into the target stack if needed: Astro, Next.js, SvelteKit, or a headless CMS build.
