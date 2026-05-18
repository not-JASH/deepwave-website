# Source notes and implementation mapping

This draft implements the recommendations as a research operating system rather than a simple brochure site.

## Recommendation mapping

- **Precise, intelligent, accessible:** the site uses direct language, visible methodology, researcher profiles, strong focus states, and high-contrast color tokens.
- **Typography as brand system:** the CSS defines fluid type scales, monospaced metadata treatments, readable line lengths, and explicit heading/body behavior.
- **Editorial clarity:** long-form copy is left-aligned, sections use generous whitespace, and cards are modular and metadata-rich.
- **Homepage structure:** the homepage includes positioning, research domains, a flagship insight, credibility metrics, methods, case studies, and a clear contact CTA.
- **Research library as core product:** the library supports search, topic and format filters, sort controls, reading time, publication dates, authors, tags, methods, and HTML report links.
- **Data-informed visual language:** original signal-field graphics, chart-inspired linework, modular cards, evidence metrics, and restrained motion replace generic tech imagery.
- **Restrained high-contrast palette:** warm off-white background, deep navy text, teal research accent, and warm coral signal color are implemented as accessible CSS variables.
- **Accessibility:** skip link, semantic HTML, keyboard navigation, aria-live result updates, reduced-motion support, chart text summaries, and HTML-first report pages are included.
- **Page templates:** this static draft includes homepage, about, research library, report page, methodology, sector cards, case studies, researcher profiles, contact, and a source-notes page.
- **Functional motion:** filtering can use the View Transition API when available, the signal field gently pulses, and all motion respects reduced-motion preferences.

## Modern web techniques used

- Native ES modules.
- Autonomous Custom Elements for reusable cards and signal graphics.
- Progressive enhancement with the View Transition API.
- CSS cascade layers.
- CSS container queries.
- `color-mix()`, `clamp()`, fluid spacing, and custom properties.
- `Intl.DateTimeFormat` and `Intl.ListFormat`.
- `IntersectionObserver` for non-essential reveals.
- Accessible CSS media queries for reduced motion and higher contrast.

## Content model notes

The prototype data lives in `src/data.js`. A production version should move this to structured Markdown, a CMS, or a database and generate both the research cards and HTML report pages from the same source of truth.
