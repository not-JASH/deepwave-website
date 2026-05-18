# Design Notes

## Source direction

The PDF argues that contemporary corporate minimalism is most effective when it is systemic rather than decorative: fewer elements, tighter governance, strong typography, high contrast, restrained palettes, and identities that work across web, apps, presentations, motion, and enterprise communication. The site draft adopts that approach by treating the website as the start of an operating design system rather than a one-off landing page.

## Sites and styles studied

The following official reference pages were reviewed for direction:

- Lippincott / Nokia: segmented modular identity, B2B repositioning, and letterforms as reusable graphic parts.  
  https://www.lippincott.com/work/nokia/
- PepsiCo / Pepsi 2023: heritage-aware mark, bold type, black/electric-blue contrast, and motion pulse.  
  https://www.pepsico.com/newsroom/press-releases/2023/pepsi-unveils-a-new-logo-and-visual-identity-marking-the-iconic-brands-next-era
- Reddit brand update: bespoke accessibility-oriented typography, conversation containers, and more expressive brand color while maintaining system consistency.  
  https://redditinc.com/blog/evolving-the-reddit-brand-a-more-accessible-bespoke-typography-new-conversation-bubbles-and-colors-and-a-new-snoo-logo-now-with-opposable-thumbs
- Pentagram / PayPal: simplified black-and-white foundation, calibrated blue accents, custom type, and motion derived from product gestures.  
  https://www.pentagram.com/work/paypal
- Pentagram / Navan: a single curve as a semiotic device for travel, portals, motion, and system recognizability.  
  https://www.pentagram.com/work/navan
- Koto / Bolt: minimal fintech identity with sharpness, speed, high-voltage color, and product-aligned motion.  
  https://koto.studio/work/bolt/
- Walmart Corporate and JKR / Walmart: heritage-aware refresh, custom wordmark logic, recognizable palette, and broad omnichannel scale.  
  https://corporate.walmart.com/news/2025/01/13/walmart-introduces-updated-look-and-feel-a-testament-to-heritage-and-innovation  
  https://www.jkrglobal.com/work/walmart
- Pentagram / Igluu: human-centered technology, warm type/color direction, and approachable clarity in a finance-adjacent category.  
  https://www.pentagram.com/work/igluu

## Translation into Deep Wave Research

### Core graphic idea

The dominant brand move is the modular **wavefront**: a wave line, a field grid, and a simple ∿ motif. This gives the site a distinctive memory structure without needing a large library of visual assets.

### Typography

The site uses a system UI stack that can be swapped later for Inter, IBM Plex Sans, Atkinson Hyperlegible, or a licensed proprietary face. The hierarchy emphasizes tall x-height sans-serif behavior, tight but readable headings, and clear utility text.

### Color

The palette is mostly paper, ink, and calibrated blue, with warm coral and acid-lime accents. This follows the PDF's recommendation to preserve distinction inside restraint while avoiding pale low-contrast pseudo-minimalism.

### Motion

The hero canvas, marquee, counters, reveal effects, and tab transitions are intentionally restrained. Motion is framed as research instrumentation: scanning, measuring, and surfacing signals.

### Accessibility

The draft uses semantic HTML, a skip link, visible focus states, reduced-motion handling, high contrast, large click targets, no justified text, and restrained all-caps usage.

## Production recommendations

1. Replace all prototype content with real positioning and case-study evidence.
2. Add real legal pages, privacy policy, analytics consent, and accessibility statement.
3. Choose and license a final type system; do not bundle commercial fonts without proper rights.
4. Run automated and manual accessibility testing before launch.
5. Connect the form to a secure backend or CRM instead of `mailto:`.
6. Compress and cache production assets.
7. Add structured data and metadata for the actual organization.
