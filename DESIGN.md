---
name: Leonida
description: Editorial night-city house for the Vice Ops boutique — keyed cinematic hero, rectangular metallic chrome, Bodoni/Bebas type, hot-pink conversion.
colors:
  void: "#07060A"
  night: "#0E0C14"
  ink: "#16131E"
  mist: "#F3EEE8"
  mute: "#9A928C"
  hot: "#FF2D6F"
  hot-dim: "#C91852"
  hot-hover: "#FF4D85"
  cyan: "#3EC8FF"
  champagne: "#C8B8A0"
  burgundy: "#4A1E2C"
  navy: "#0A1220"
  teal: "#5EC8C4"
  gold: "#D4B483"
  panel: "rgba(12, 10, 16, 0.72)"
  panel-edge: "rgba(200, 184, 160, 0.22)"
  glass-fill: "rgba(8, 7, 12, 0.55)"
  glass-chip: "rgba(255, 255, 255, 0.04)"
  card: "rgba(14, 12, 18, 0.88)"
typography:
  display:
    fontFamily: "Bebas Neue, Impact, sans-serif"
    fontSize: "clamp(3rem, 11vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2.5rem, 8vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "italic"
  title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  field: "12px"
  card: "2px"
  map: "2px"
  panel: "2px"
  chrome: "2px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"
  gutter: "64px"
components:
  button-primary:
    backgroundColor: "{colors.hot}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.chrome}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.hot-hover}"
    textColor: "#FFFFFF"
    rounded: "{rounded.chrome}"
  button-primary-active:
    backgroundColor: "{colors.hot-dim}"
    textColor: "#FFFFFF"
    rounded: "{rounded.chrome}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "#FFFFFF"
    rounded: "{rounded.chrome}"
    padding: "14px 28px"
  button-bag:
    backgroundColor: "{colors.hot}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.chrome}"
    padding: "6px 14px"
    height: "auto"
  nav-link:
    backgroundColor: "transparent"
    textColor: "rgba(243, 238, 232, 0.62)"
    rounded: "0"
    height: "auto"
    padding: "0.55rem 0.15rem"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "#FFFFFF"
    rounded: "0"
  chip:
    backgroundColor: "{colors.glass-chip}"
    textColor: "rgba(255, 255, 255, 0.65)"
    rounded: "{rounded.chrome}"
    padding: "8px 16px"
  chip-active:
    backgroundColor: "rgba(255, 45, 111, 0.14)"
    textColor: "{colors.hot}"
    rounded: "{rounded.chrome}"
  tag-hot:
    backgroundColor: "{colors.hot}"
    textColor: "#FFFFFF"
    rounded: "6px"
    padding: "2px 8px"
  panel-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.mist}"
    rounded: "{rounded.card}"
  input-field:
    backgroundColor: "rgba(10, 10, 14, 0.85)"
    textColor: "{colors.mist}"
    rounded: "{rounded.field}"
    padding: "0.7rem 0.85rem"
---

# Design System: Leonida

## Overview

**Creative North Star: "The Editorial Night House"**

Leonida is a cinematic night-city editorial house: photography and type carry the page; UI chrome recedes. One keyed dusk photograph, Bodoni italic against Bebas display, rectangular metallic glass, and a single hot-pink conversion color. It borrows GTA-VI–era night heat without Rockstar marks or affiliation. The first viewport is a full-bleed scene with a left type stack — Bodoni italic “Vice City” in hot pink over Bebas “Never plays / by the rules.” — then one rectangular primary CTA and a text secondary to the journal. No metric strip, no pill chip cluster, no centered SaaS logo stack, no gradient-filled display type.

Chrome is a floating rectangular metallic sheet (nav), not a pill. Nav links are tracked caps with a 1px hot underline, not glass chips. Merchandise cards are sharp charcoal slabs (`border-radius: 2px`). Journal pages are magazine layouts: asymmetric mastheads, full-bleed 16:9 / 21:9 covers, Bodoni feature titles, pull quotes. Atmosphere is film grain + vignette on cinematic black — not a full-bleed pink/blue aurora wallpaper. Cyan, burgundy, and navy exist as lighting in the body wash, not as button fills.

Density is generous editorial: `max-w-[1600px]`, gutters `20 / 32 / 48 / 64`, section padding `80 / 112`. Motion is exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), plus scroll-driven clip/rise reveals, staggered product and journal cards, a 2px hot progress line, and hero parallax that fades on scroll. Inner pages sit on void with the same fixed metallic nav; they are not a second product look.

**Key Characteristics:**
- Cinematic black ground (`#07060A`) with midnight stage (`#0E0C14`)
- Hot pink (`#FF2D6F`) as the only conversion color — CTAs, Bag, prices, active tags
- Rectangular metallic glass on the floating nav; opaque 2px charcoal on product cards
- Bebas Neue for LEONIDA / room shouts (Discover, Boutique, Journal), Bodoni Moda for editorial, Manrope for UI
- Keyed cinematic hero (character + car + highway) as the signature artifact
- Film grain + vignette; pink/blue/purple light only as residual CSS atmosphere, never as page wallpaper
- Magazine journal: feature split, Bodoni titles, pull quotes, `media-project` covers

## Colors

A single hot-pink accent on cinematic black. Neutrals are warm mist on cool void, not cream paper.

### Primary
- **Hot Pink** (`#FF2D6F`): Conversion. Primary CTA, Bag, prices, `tag-hot`, focus rings, hero “Vice City”, progress line. Keep it rare on any given pane.
- **Hot Hover** (`#FF4D85`): Primary / Bag hover fill.
- **Hot Dim** (`#C91852`): Pressed primary.
- **Hot Veil** (`rgba(255, 45, 111, 0.14)`): Active filter / chip fill. Never a large panel interior.

### Secondary
- **Champagne** (`#C8B8A0`): Soft metal. Nav rims, `.meta-label`, hairline borders (`--panel-edge`). Not a second CTA.
- **Cyan** (`#3EC8FF`): Lighting accent in the body wash and boutique hero. Not buttons or type fills.
- **Teal** (`#5EC8C4`): Rare cool accent on tile meshes. Not nav or buttons.
- **Gold** (`#D4B483`): Premium tile glow only.
- **Burgundy** (`#4A1E2C`) / **Navy** (`#0A1220`): Atmosphere in the fixed body gradient. Not panel chrome.

### Neutral
- **Void** (`#07060A`): Page ground, shop shell, hero fallback, readability wash.
- **Night** (`#0E0C14`): Raised stage (Discover, boutique band, journal cards).
- **Ink** (`#16131E`): Dense panel fill when not using translucent card.
- **Mist** (`#F3EEE8`): Primary text. Default `.title-italic` color.
- **Mute** (`#9A928C`): Supporting copy, placeholders, footers.
- **Panel Edge** (`rgba(200, 184, 160, 0.22)`): Champagne metal hairline on the nav sheet.

### Named Rules
**The Hot Rarity Rule.** `#FF2D6F` is conversion, not wallpaper. It belongs on the irreversible CTA, Bag, price, focus ring, progress line, and a hot tag. It does not fill heroes, cards, or nav bars.

**The Cinematic-Black Rule.** Ground and panels stay in the `#07060A / #0E0C14 / #16131E` family. Navy and burgundy may tint the body wash. Do not restyle the house onto `#0A0A0C` pill chrome or `#0B0716` / `#E85A9B` from stale brand-spec notes — those values are not the shipped CSS.

## Typography

**Display Font:** Bebas Neue (with Impact) via `--font-display`
**Editorial Font:** Bodoni Moda italic (with Georgia) via `--font-editorial`
**Body Font:** Manrope (with system-ui) via `--font-ui`

**Character:** Bebas is the house wordmark and the stacked room shout — Discover, Live map, Boutique, Journal, LEONIDA — weight through size and tracking, never a gradient fill. Bodoni Moda italic is the editorial voice (hero “Vice City”, Bag title, journal feature titles and deks). Manrope does nav, body, prices, and controls.

### Hierarchy
- **Display** (400, `clamp(3rem, 11vw, 7rem)`, 0.88, tracking `0.02em`): Hero stack and page wordmarks (`.title-display`).
- **Headline** (Bodoni italic 500, `clamp(2.5rem, 8vw, 5.25rem)`, tracking `-0.02em`): Hero “Vice City” (hot) and `.title-italic` (mist by default).
- **Title** (Bodoni 400, `text-xl`–`text-4xl`, tracking tight): Journal feature and card titles (`font-serif`).
- **Body** (Manrope 400, `14–18px`, 1.75–1.85): Dek, descriptions, article measure.
- **Label** (Manrope 600, `10–11px`, tracking `0.16–0.2em`, uppercase): `.meta-label`, CTA text, Bag, filters.

### Named Rules
**The Three-Voice Rule.** Bebas signs the house and the rooms. Bodoni Moda titles the editorial. Manrope does the work. Do not set body in Bebas or CTAs in serif. Do not revive Instrument Serif — `app/layout.tsx` loads Bodoni Moda.

**The No-Gradient-Type Rule.** Display type is solid white, mist, or hot pink. Do not fill headlines with gradients.

## Layout

Public pages are a photo-led magazine house, not a dashboard grid.

- **Nav:** Fixed, centered, `max-w-[1320px]`. Height 58px rest / 52px scrolled. Desktop (`lg+`) is a 3-column grid: brand | tracked links | Account + Bag. Below `lg`, brand | Bag + Menu, with a void scrim and a 2px glass sheet of Bebas links.
- **Hero:** `min-h-[100svh]`, type stack left (`max-w-2xl`), scene full-bleed. Mobile aligns type to the bottom; `md+` centers it. Top padding clears the nav (`pt-28`). One rectangular primary CTA; journal is a text link, not a second button.
- **Bands:** Discover (12-col type split on a blurred photo), Live map, Boutique (3-up), Journal (8-col feature + stacked thumbs). Horizontal padding `20 / 32 / 48 / 64`. Vertical padding `80 / 112` (`py-20 / md:py-28`).
- **Product grid:** 1 → 2 (`sm`) → 3 (`lg`) columns, 20–28px gap, 4:5 image tiles.
- **Journal index:** Magazine masthead + featured 7/8-col photo split + secondary 16:10 + thumbnail rows. Article: asymmetric masthead, 16:9 / 21:9 `media-project` cover, 6-col measure, sticky “In this issue”.
- **Map embed:** Fixed viewport height (`min(78vh, 820px)` full; `min(52vh, 420px)` compact), not an aspect-ratio box.
- **Checkout:** Narrow `max-w-lg` on void, not a multi-column funnel.

Spacing rhythm is 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 112.

## Elevation & Depth

Depth is keyed photography plus metallic glass plus charcoal slabs plus projected media. Cards do not use Material elevation or 16px radius.

### Shadow Vocabulary
- **Glass nav** (inset champagne highlight + `0 16px 48px rgba(0,0,0,0.45)`): The floating metallic sheet.
- **Primary CTA** (`0 12px 28px rgba(255, 45, 111, 0.28)`): Rest bloom.
- **Bag hover** (`0 0 28px rgba(255, 45, 111, 0.65)` plus 1px white ring): Stronger than the default CTA.
- **Logo chip** (`filter: drop-shadow` on hover of the outer wrap; inner glass is 2px champagne rim): Glow must not clip — overflow stays visible; do not put `backdrop-filter` on the outer chip.
- **Panel card** (`0 18px 40px rgba(0, 0, 0, 0.4)`; hover `0 22px 48px` + champagne rim): Product tiles.
- **Glass panel / drawer** (`0 24px 60px rgba(0, 0, 0, 0.55)`): Bag drawer and mobile menu.
- **Media project** (`0 28px 56px` + hot 8% halo): Journal covers that lift off the page.
- **Type project:** Layered lettering depth on `.title-italic`, `.type-project`, `.lettering-depth-display`.
- **Focus bloom** (`0 0 0 3px rgba(255, 45, 111, 0.15)` plus hot seam at 0.55): Fields. Global `:focus-visible` is a 2px hot outline, 3px offset.

### Named Rules
**The Rectangle-Is-Chrome Rule.** Nav sheet, chips, CTAs, Bag, logo lockup, and product cards are `border-radius: 2px`. Frosted glass belongs on the floating nav and the cart drawer. Do not revive pill chrome (`9999px`) or 16px card radii. `tag-hot` may stay 6px.

**The Photography-Leads Rule.** The hero still, journal covers, and Discover blur carry the page. Chrome recedes. Do not put a metric strip or a second product look in the first viewport.

**The One-Pixel Lift Rule.** Hover on chips, Bag, logo, and cards is `translateY(-1px)` (photos also `scale` 1.03–1.04). Anything larger leaves the house, except authored scroll reveals.

## Shapes

The silhouette is sharp rectangles for chrome and merchandise. Pills are leftover, not law.

- **Nav sheet, CTAs, Bag, chips, logo lockup, cards:** 2px.
- **Hot tags:** 6px (`rounded-md`).
- **Fields:** 12px (auth wells — do not spread this radius to cards).
- **Bag count badge:** 1px.
- **Mobile menu sheet:** 2px.

Borders are 1px champagne metal on the nav (`rgba(200, 184, 160, 0.22–0.38)`); slabs use white at ~7–10%. Selected filters pick up a hot rim at 0.50.

## Components

### Buttons
- **Shape:** 2px rectangle. Primary is `11px` uppercase Manrope, tracking `0.18em`.
- **Primary:** Hot fill, white text, `14×32` padding (`px-8 py-3.5`), hot bloom. Hover `#FF4D85`. Active `--hot-dim`.
- **Ghost:** Transparent fill, 1px mist rim at 0.35. Hover fills white at 0.06. Used on checkout, not the hero.
- **Bag:** Compact hot rectangle in the nav (`10px`). Count badge is a white 1px square with hot numerals.
- **Hero secondary:** Text `.meta-label` (“Read the Journal →”), not a second button.

### Nav links
- Tracked 11px caps, transparent, no chip fill. Active / hover draws a 1px hot underline (`scaleX`). Do not restore glass-chip nav links.

### Chips
- **Glass chips:** 2px, 10px blur, champagne rim, specular sweep on hover. Used for Bag Close and similar chrome, not primary nav.
- **Category filters:** Hairline rectangles; first “All” is hot veil + hot text.

### Cards / Containers
- **`.panel-card` / `.glass-card`:** 2px radius, `rgba(14, 12, 18, 0.88)`, 1px white 7% rim, 18px black cushion. Hover: champagne rim, no hot fill. Product photos are 4:5.
- **Journal tiles:** Magazine, not charcoal-with-tag overlay. Feature is a night slab with 16:10 / 16:9 photo, `.meta-label` category in hot, Bodoni title. Missing photos should not be invented — every live post has `coverImage`.
- **`.glass-panel`:** Drawer / mobile menu — 92% opaque night, 22px blur, champagne 18% rim.
- **`.media-project`:** Projected cover frame on article heroes.

### Inputs / Fields
- **Style:** 12px radius, near-black well, 1px white 12% rim, 14px mist text.
- **Focus:** Hot seam at 0.55 plus 3px hot bloom. Placeholder is mute.
- **Error:** Hot/rose copy in the auth dialog; do not turn the whole field red.

### Navigation
Fixed rectangular metallic glass sheet. Brand is Money Stack (alpha WebM/WebP, no plate) + LEONIDA in Bebas inside a 2px glass chip whose *glow lives on an outer wrap* (drop-shadow on hover) and whose *glass lives on an inner rectangle* (no `backdrop-filter` on the outer node). Desktop links are tracked caps; Account is a `.meta-label`; Bag is hot. Mobile Menu opens a void scrim and a 2px glass sheet of Bebas links. A 2px hot `ScrollProgress` line sits at `z-[60]` above the nav.

### Signature: keyed hero + magazine bands
The landing hero is one still (`/media/hero/leonida-scene.png`) with pointer parallax, scroll scale/fade, and a slow ken-burns — not a CSS gradient masquerading as a city. Film grain + vignette sit on the type. Discover is a 12-col Bebas/Manrope split on a blurred photo, not drifting orbs as the band’s identity. **Latest from Leonida** is a magazine feature + stacked thumbs with Krea covers (`launch-night`, `dual-skyline`, `leonida-map`). Collections on `/boutique` uses a quiet radial wash, not the old police-siren hero as the page’s first read. `PageAtmosphere` (aurora orbs) is **unused** in the tree — do not remount it as the journal ground.

## Motion

Scroll is part of the system, not decoration.

- **Ease:** `cubic-bezier(0.16, 1, 0.3, 1)` everywhere chrome and reveals run.
- **ScrollProgress:** 2px hot line, spring stiffness 120 / damping 28. Hidden when `prefers-reduced-motion`.
- **ScrollReveal:** `rise` (y 48), `clip` (inset 12% → 0), `fade`, `slide`. Duration 0.75s, once in view.
- **ScrollStagger / ScrollItem:** 0.08–0.12s stagger on product and journal grids.
- **Hero:** pointer parallax ±12/8px; scroll scale 1 → 1.12, y 0 → 72, opacity 1 → 0.35.
- **Reduced motion:** Reveal components render static tags; progress line unmounts; orb / ken-burns / chrome transform animations drop.

## Do's and Don'ts

### Do:
- **Do** keep void / night / ink as the ground family and `#FF2D6F` as the only conversion color.
- **Do** set room shouts in Bebas (`.title-display`) and editorial titles in Bodoni (`font-serif` / `.title-italic`).
- **Do** use Manrope for UI — it is what `--font-ui` loads.
- **Do** keep chrome at `border-radius: 2px`. Glass on the nav sheet and bag drawer; charcoal slabs on product cards.
- **Do** set journal as a magazine: feature split, Bodoni titles, pull quotes, object-cover photos. Copy stays house culture; affiliation never.
- **Do** keep the hero as one keyed scene with a left type stack, one rectangular CTA, and a text journal link.
- **Do** keep the logo glow on an outer `filter: drop-shadow` wrap so it does not clip to a rectangle.
- **Do** honor `prefers-reduced-motion` by dropping progress, reveals, ken-burns, and chrome transform animations.

### Don't:
- **Don't** introduce Inter, Roboto, Arial, Instrument Serif, or a cream/terracotta palette. Do not switch UI to DM Sans — the build is Manrope via `--font-ui`.
- **Don't** restore pill nav, pill CTAs, or 16px card radii. The rectangular metallic sheet won.
- **Don't** fill display type with gradients or put a metric/stat strip in the hero.
- **Don't** remount `PageAtmosphere` / aurora orbs as page wallpaper. Film grain + vignette on cinematic black is the inner-page atmosphere.
- **Don't** treat cyan / burgundy / navy as a brand palette for buttons or type.
- **Don't** use Rockstar, Take-Two, or GTA marks. Atmosphere is allowed; affiliation is not.
- **Don't** invent vanity commerce numbers. Sold counts stay at zero until real orders exist.
