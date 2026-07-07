---
name: IOFDigital — red-remnant
description: Marketing site for a Gummersbach digital agency, sky-gradient glassmorphism by day, near-black proof-driven sections by night.
colors:
  morgenhimmel-light: "#8fd3f4"
  morgenhimmel-mid: "#4a9fd0"
  rhein-deep: "#1e5f97"
  rhein-dusk: "#144870"
  koelner-blau: "#3b7dd8"
  koelner-blau-hover: "#2f6ec8"
  void-black: "#000000"
  nebelweiss: "#f8fbff"
  bernstein-gold: "#EAB308"
  side-ray-blue: "#96c8ff"
  status-live: "rgb(74,222,128)"
  status-progress: "rgb(96,165,250)"
  status-production: "rgb(249,115,22)"
  glass-border: "rgba(255,255,255,0.28)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(52px, 8vw, 152px)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-3px to -4px"
  display-italic:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 500
    fontStyle: "italic"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(34px, 4vw, 58px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-1.5px"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "14.5px to 17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "10px to 13px"
    fontWeight: 700
    letterSpacing: "2px to 3px"
    textTransform: "uppercase"
rounded:
  pill: "999px"
  card-lg: "28px"
  card-md: "20px"
  card-sm: "14px"
  chip: "8px"
spacing:
  section-y: "112px to 128px"
  card-padding: "32px to 40px"
components:
  button-primary:
    backgroundColor: "{colors.koelner-blau}"
    textColor: "{colors.nebelweiss}"
    rounded: "{rounded.pill}"
    padding: "13px 28px"
  button-primary-hover:
    backgroundColor: "{colors.koelner-blau-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.nebelweiss}"
  nav-pill:
    backgroundColor: "rgba(255,255,255,0.16)"
    rounded: "{rounded.pill}"
---

# Design System: IOFDigital — red-remnant

## 1. Overview

**Creative North Star: "Golden Hour Over Köln"**

The system runs on a day/night rhythm. Hero and services live in an expansive sky-blue gradient, morning light over the Rhine, optimistic and open, the visual promise of digital transformation. As the story turns to proof (hard stats, testimonials, the final ask), the surface drops to a near-black night sky, and a single warm amber ray cuts through it, the one moment of true saturation in an otherwise cool-blue system. Glass panels float on both: frosted, soft-edged, never harsh. This is not a SaaS dashboard aesthetic, it should never read as generic-agency-blue-gradient-with-stock-icons, nor as cold enterprise-consultancy sterility, nor as flashy startup bravado (see PRODUCT.md anti-references). The warmth has to come through even at full technical polish: Plus Jakarta Sans carries the confident, direct voice; Playfair Display italic is the human aside, the moment the site speaks in its own words rather than a headline.

**Key Characteristics:**
- Two backgrounds only: the sky gradient (day, momentum, possibility) and near-black (night, proof, focus). No third background color competes with this rhythm.
- One accent color with intent: Kölner Blau (#3b7dd8) for every call-to-action, nowhere else.
- One rare warmth: Bernstein gold rays appear exactly once, in the hard-numbers section, as the visual signal "pay attention, this is real."
- Glass, not shadow, is the elevation model. Depth comes from blur + a hairline highlight, not drop shadows.

## 2. Colors

Cool and expansive at rest, one warm accent used with total discipline.

### Primary
- **Kölner Blau** (#3b7dd8, hover #2f6ec8): every actionable element, the primary CTA pill, the giant final-CTA button, hover-state accents. Nowhere else. If it shows up on a non-interactive element, that's a bug, not a design choice.

### Secondary
- **Bernstein Gold** (#EAB308): the single warm color in the entire system. Used only in the Infographics section's light-ray shader, paired with Side Ray Blue. It exists to mark "this is the proof section," not as general decoration.

### Tertiary
- **Morgenhimmel → Rhein Deep gradient** (#8fd3f4 → #4a9fd0 → #1e5f97 → #144870): the sky-scene background for Hero, Services (the "wheel"), and Products. Reads as one continuous descent from light dawn blue to deep dusk blue across the scroll, not as separate flat sections.

### Neutral
- **Nebelweiß** (#f8fbff): primary text color on all dark/blue surfaces, stepped down in opacity (0.85 / 0.70 / 0.55 / 0.40 / 0.28) for hierarchy instead of switching hues.
- **Void Black** (#000000): background for Infographics, CTA, and Footer. Currently literal black; see Named Rule below, this should be tinted, not pure.
- **Glass White** (rgba(255,255,255,0.05–0.22)): the full range of glass-panel fills, opacity is the only variable, never a different hue.

### Named Rules
**The No-Pure-Black Rule.** Void Black is currently `#000000`. Per the shared color law (never `#000`/`#fff`, tint neutrals toward the brand hue), this should shift to a near-black with a trace of the brand blue (chroma 0.005–0.01 at very low lightness, e.g. `oklch(8% 0.01 250)`) so the "night" sections still feel like the same sky, just after dark, not a different product's dark mode bolted on.

**The One Warmth Rule.** Bernstein Gold appears in exactly one section (Infographics). If gold starts showing up in buttons, badges, or icons elsewhere, the rule is broken and the "proof section" signal is diluted.

## 3. Typography

**Display Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)
**Body Font:** Plus Jakarta Sans (same family, lighter weight)
**Accent/Serif Font:** Playfair Display, italic only (with Georgia, serif fallback)

**Character:** A confident, geometric grotesque carries almost everything at heavy weight (800–900) with tight negative tracking, the "direct" half of the brand. Playfair Display italic is used exclusively as a one- or two-word aside inside headlines, never for full sentences, the "human" half. The pairing works because the serif never competes for space, it only ever punctuates.

### Hierarchy
- **Display** (900, clamp(52px, 8vw, 152px), line-height 0.95–0.97): Hero headline and the final CTA headline only. The two loudest moments on the site.
- **Headline** (800, clamp(34px, 4vw, 58px), line-height 1.08): every section header (Vision, Services, Products, Clients).
- **Title** (900, clamp(24px, 3vw, 44px)): sub-headlines inside interactive components (Services wheel, Products cards).
- **Body** (400, 14.5px–17px, line-height 1.65, max ~65ch): all supporting paragraph copy, always at reduced opacity (0.55–0.75) against its background, never full-opacity white.
- **Label** (700, 10px–13px, letter-spacing 2–3px, uppercase): eyebrow labels above every section headline, and stat/status captions.

### Named Rules
**The Italic-Is-A-Word-Not-A-Sentence Rule.** Playfair Display italic wraps a phrase, never a paragraph. The moment it carries body copy, the pairing collapses into "generic serif-body site."

## 4. Elevation

Flat backgrounds, layered glass. There are no traditional drop shadows conveying "this button is raised above the page." Depth instead comes from `backdrop-filter: blur()` + `saturate()` panels sitting on top of a flat gradient or black field, edged with a 1px `rgba(255,255,255,0.16–0.30)` border and a soft blue-tinted ambient shadow (`rgba(10,40,80,x)`), never a neutral gray shadow.

### Shadow Vocabulary
- **Ambient card** (`0 8px 32px rgba(20,60,110,0.18), 0 1.5px 4px rgba(20,60,110,0.10)`): nav pill, standard glass panels at rest.
- **Floating deep** (`0 30px 70px -20px rgba(10,40,80,0.55), inset 0 1px 0 rgba(255,255,255,0.18)`): product cards, testimonial cards, anything meant to feel like it's hovering over the scene.
- **Front-most** (`0 55px 110px -25px rgba(4,14,36,0.90), inset 0 1px 0 rgba(255,255,255,0.22)`): the active/hovered state in the Products card stack, dramatically deeper than the resting shadow.

### Named Rules
**The Blue-Not-Gray Shadow Rule.** Every shadow in the system carries a navy tint (`rgba(10,40,80,x)` or `rgba(20,60,110,x)`), never a neutral black/gray shadow. A gray shadow here reads as a bootstrap component, not this system.

## 5. Components

### Buttons
- **Shape:** full pill (999px radius) for primary/ghost pairs in nav and hero; softer 14–20px radius for the giant final-CTA button, which is the one exception to the pill rule because of its scale.
- **Primary:** Kölner Blau fill (#3b7dd8), white text, 1px `rgba(255,255,255,0.20–0.25)` border, blue ambient shadow. Padding 13px×28px standard, up to 28px×52px for the hero-scale CTA.
- **Hover/Focus:** darkens to #2f6ec8, lifts 2–3px on translateY, shadow deepens. The final-CTA button additionally runs a one-shot diagonal shimmer sweep on hover.
- **Ghost:** transparent background, white text at 0.70 opacity rising to full white on hover, no border. Used for secondary links (e.g. "Unsere Leistungen"), never for a second competing call-to-action.

### Chips / Tags
- **Style:** small pill or 8px-radius rectangle, `rgba(255,255,255,0.09–0.22)` fill, 1px matching-opacity border, no drop shadow. Used for service bullet points, product tech-stack tags, testimonial topic tags.
- **State:** no interactive state, these are informational, not clickable.

### Cards / Containers
- **Corner Style:** 20–28px radius, larger radius for hero-scale containers (final CTA card), smaller for in-grid cards (Vision principles, Infographics stat cards).
- **Background:** glass fill per Colors > Neutral > Glass White, opacity varies by visual priority (a "quieter" card in a row uses less opacity than the one meant to lead).
- **Shadow Strategy:** see Elevation > Floating Deep.
- **Border:** always present at 1px, opacity tracks the fill opacity (never a hard-edged card).
- **Internal Padding:** 32–40px standard, more generous (40px+) on hero-scale cards.

### Navigation
- Floating glass pill, centered, fixed to top with 20px offset, `rgba(255,255,255,0.16)` fill at rest darkening to `rgba(40,100,170,0.30)` after 60px of scroll. Links at 70% white opacity rising to full on hover, no underline, no active-state indicator beyond the hover color shift. The primary CTA is an oversized pill that intentionally overflows the nav bar's own padding by 2px, a deliberate "breaking the frame" detail.

### Signature Component: WebGL Light Rays
Two custom GLSL shader components (`LightRays.astro`, `SideRays.astro`, via `ogl`) render animated, mouse-reactive light rays as ambient background texture. `SideRays` (amber + light blue, top-right origin) marks the Infographics/proof section specifically, see Colors > Named Rules > The One Warmth Rule. This is the system's one moment of technical flourish and should stay rare for the same reason gold stays rare.

## 6. Do's and Don'ts

### Do:
- **Do** keep Kölner Blau (#3b7dd8) as the only interactive-element color across the entire site.
- **Do** use Playfair Display italic only for short phrases inside headlines, never for body copy or full sentences.
- **Do** build elevation with blur + navy-tinted shadow + hairline border, never a flat gray drop shadow.
- **Do** keep the sky-gradient → near-black rhythm as the only two background modes; a third competing background reads as inconsistent.
- **Do** respect `prefers-reduced-motion` for the scroll-hijacked ScrollText/Services-wheel sections and both WebGL ray shaders (per PRODUCT.md accessibility).

### Don't:
- **Don't** use pure `#000000` going forward without a hue tint, per the No-Pure-Black Rule; shift toward `oklch(8% 0.01 250)` or similar.
- **Don't** let Bernstein Gold spread beyond the Infographics section; it is a proof-section signal, not a decorative accent.
- **Don't** introduce stock-photo handshakes, generic icon-grid feature blocks, or gradient-text hero numbers, these are named anti-references in PRODUCT.md (SaaS/agency template clichés).
- **Don't** add a second competing call-to-action on any given screen; every section funnels to one action (Erstgespräch).
- **Don't** use a neutral gray shadow anywhere; it immediately reads as an off-the-shelf component library rather than this system.
