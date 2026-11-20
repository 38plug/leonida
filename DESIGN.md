---
name: Leonida
description: Charcoal night-city house for the Vice Ops boutique — keyed cinematic hero, hot-pink conversion, sunset-rim glass chrome.
colors:
  void: "#0A0A0C"
  night: "#121218"
  ink: "#1A1A22"
  mist: "#F4F0F2"
  mute: "#9A94A0"
  hot: "#FF2D6F"
  hot-dim: "#C91852"
  hot-hover: "#FF4D85"
  champagne: "#C4B5A0"
  teal: "#5EC8C4"
  gold: "#D4B483"
  panel: "rgba(18, 18, 24, 0.78)"
  panel-edge: "rgba(255, 255, 255, 0.08)"
  glass-fill: "rgba(18, 14, 24, 0.42)"
  glass-chip: "rgba(255, 255, 255, 0.05)"
  card: "rgba(22, 22, 30, 0.92)"
typography:
  display:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(2.55rem, 10vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
    fontVariation: "italic"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  field: "12px"
  card: "16px"
  map: "20px"
  panel: "24px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"
  gutter: "40px"
components:
  button-primary:
    backgroundColor: "{colors.hot}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.hot-hover}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
  button-primary-active:
    backgroundColor: "{colors.hot-dim}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
  button-ghost:
    backgroundColor: "rgba(0, 0, 0, 0.35)"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-bag:
    backgroundColor: "{colors.hot}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
    height: "auto"
  nav-link:
    backgroundColor: "{colors.glass-chip}"
    textColor: "rgba(255, 255, 255, 0.78)"
    rounded: "{rounded.pill}"
    height: "2.15rem"
    padding: "0 0.95rem"
  nav-link-active:
    backgroundColor: "rgba(255, 255, 255, 0.12)"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
  chip:
    backgroundColor: "{colors.glass-chip}"
    textColor: "rgba(255, 255, 255, 0.65)"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  chip-active:
    backgroundColor: "rgba(255, 45, 111, 0.14)"
    textColor: "{colors.hot}"
    rounded: "{rounded.pill}"
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

**Creative North Star: "The Charcoal Night House"**

Leonida is a cinematic night-city lifestyle house: one keyed dusk photograph, charcoal panels, and a single hot-pink conversion color. It borrows GTA-VI–era dashboard heat (hot CTAs, italic pink titles, dark raised stages) without Rockstar marks or affiliation. The first viewport is a full-bleed scene with a left type stack — Instrument Serif italic “Vice City” over Bebas “NEVER PLAYS / BY THE RULES.” — then two pill CTAs. No metric strip, no centered SaaS logo stack, no gradient-filled display type.

Chrome is sunset-rim glass (nav pill, chips, bag-adjacent controls). Merchandise cards are opaque charcoal slabs, not liquid-glass tiles. Atmosphere (Discover orbs, Collections siren wash) is pink / purple / blue light in the air, not a second brand fill.

Density is generous editorial: `max-w-[1440px]`, gutters `24 / 40 / 56`, section padding `80 / 112`. Motion is exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), one authored entrance in the hero, then hover lift on chrome and cards. Inner pages sit on void with a fixed glass nav; they are not a second product look.

**Key Characteristics:**
- Near-black void ground (`#0A0A0C`) with a charcoal raised stage (`#121218`)
- Hot pink (`#FF2D6F`) as the only conversion color — CTAs, Bag, prices, active tags
- Sunset-rim glass on nav/chips; opaque charcoal on product and journal cards
- Bebas Neue for LEONIDA / display stacks, Instrument Serif italic for section titles, Manrope for UI
- Keyed cinematic hero (character + car + highway) as the signature artifact
- Pink/blue/purple light only as atmospheric wash, never as card chrome

## Colors

A single hot-pink accent on charcoal night. Neutrals are cool ink, not warm gray or cream.

### Primary
- **Hot Pink** (`#FF2D6F`): Conversion. Primary CTA, Bag, prices, `tag-hot`, focus rings, active Collection chip. Keep it rare on any given pane.
- **Hot Hover** (`#FF4D85`): Primary / Bag hover fill.
- **Hot Dim** (`#C91852`): Pressed primary.
- **Hot Veil** (`rgba(255, 45, 111, 0.14)`): Active glass-chip fill. Never a large panel interior.

### Secondary
- **Champagne** (`#C4B5A0`): Soft metal. Rare labels, gold-family tile glows. Not a second CTA.
- **Teal** (`#5EC8C4`): Rare cool accent on tile meshes and hero atmosphere. Not nav or buttons.
- **Gold** (`#D4B483`): Premium tile glow only.

### Neutral
- **Void** (`#0A0A0C`): Page ground, shop shell, hero fallback, scrollbar track.
- **Night** (`#121218`): Raised stage (journal band, live-map band, auth scrim).
- **Ink** (`#1A1A22`): Dense panel fill when not using translucent card.
- **Mist** (`#F4F0F2`): Primary text.
- **Mute** (`#9A94A0`): Supporting copy, placeholders, footers.
- **Panel Edge** (`rgba(255, 255, 255, 0.08)`): Default 1px hairline.

### Named Rules
**The Hot Rarity Rule.** `#FF2D6F` is conversion, not wallpaper. It belongs on the irreversible CTA, Bag, price, focus ring, and a hot tag. It does not fill heroes, cards, or nav bars.

**The Charcoal-Not-Navy Rule.** Ground and panels stay in the `#0A0A0C / #121218 / #1A1A22` family. Do not restyle the house onto `#0B0716` / `#E85A9B` from stale brand-spec notes — those values are not the shipped CSS.

## Typography

**Display Font:** Bebas Neue (with sans-serif) via `--font-bebas`
**Editorial Font:** Instrument Serif italic (with Georgia) via `--font-instrument`
**Body Font:** Manrope (with sans-serif) via `--font-dm` — this is the live UI face, even though the CSS variable is named `dm`

**Character:** Bebas is the house wordmark and the stacked hero shout — weight through size, tracking, and lettering depth, never a gradient fill. Instrument Serif italic in hot pink is the section voice (“Discover”, “Collections”, “Bag”, “Vice City”). Manrope does nav, body, prices, and controls.

### Hierarchy
- **Display** (400, `clamp(2.55rem, 10vw, 6.5rem)`, 0.86, tracking `0.02em`): Hero stack and page wordmarks (`LEONIDA`, `CHECKOUT`).
- **Headline** (Instrument Serif italic 400, `clamp(2.5rem, 5vw, 3.75rem)`, line-height 1): Section titles; `.title-italic` also carries a pink glow.
- **Title** (Manrope 500, `15px`): Product names, journal titles use Instrument Serif at `text-2xl` on cards.
- **Body** (Manrope 400, `14–16px`, 1.7–1.8): Dek, descriptions, about copy. Max measure ~26–36rem in the hero.
- **Label** (Manrope 600, `10–12px`, tracking `0.12–0.14em`, uppercase): CTA text, Bag, category, chips.

### Named Rules
**The Three-Voice Rule.** Bebas signs the house. Instrument Serif italic titles the rooms. Manrope does the work. Do not set body in Bebas or CTAs in serif.

**The No-Gradient-Type Rule.** Display type is solid white or hot pink. Do not fill headlines with gradients.

## Layout

Public pages are a photo-led editorial house, not a dashboard grid.

- **Nav:** Fixed, centered, `max-w-[1180px]`. Height 54px rest / 48px scrolled. Desktop (`lg+`) is a 3-column grid: brand | links | Account + Bag. Below `lg`, brand | Bag + Menu, with a full-screen glass sheet for links.
- **Hero:** `min-h-[100svh]`, type stack left, scene full-bleed. Top padding clears the nav (`4.5rem` / `5rem`). CTAs stack full-width on small screens, row on `sm+`.
- **Bands:** Discover, Live map, New Arrivals, Journal. Horizontal padding `24 / 40 / 56`. Vertical padding `80 / 112` (`py-20 / md:py-28`). Journal index is a featured 2-col split plus thumbnail rows; landing journal is a 3-col photo-cover grid.
- **Product grid:** 1 → 2 (`sm`) → 4 (`lg`) columns, 24–28px gap, 4:5 image tiles.
- **Map embed:** Fixed viewport height (`min(78vh, 820px)` full; `min(52vh, 420px)` compact), not an aspect-ratio box.
- **Checkout:** Narrow `max-w-lg` on void, not a multi-column funnel.

Spacing rhythm is 8 / 12 / 16 / 24 / 40 / 56 / 80 / 112.

## Elevation & Depth

Depth is keyed photography plus glass chrome plus charcoal slabs. Cards do not use Material elevation. Display type uses layered lettering depth (stacked dark offsets + atmospheric bloom) on the hero wordmark only — that is lettering, not a card shadow language.

### Shadow Vocabulary
- **Glass nav** (inset peach highlight + `0 10px 32px rgba(0,0,0,0.22)` + pink/violet outer glow): The floating pill.
- **Primary CTA** (`0 0 0 1px rgba(255, 45, 111, 0.4), 0 8px 28px rgba(255, 45, 111, 0.35)`): Rest bloom.
- **Bag hover** (`0 0 28px rgba(255, 45, 111, 0.65)` plus 1px white ring): Stronger than the default CTA.
- **Logo chip** (`filter: drop-shadow(...)` on the outer wrap; inner glass has inset peach highlight only): Glow must not clip to a rectangle — overflow stays visible; do not put `backdrop-filter` on the outer chip.
- **Panel card** (`0 8px 28px rgba(0, 0, 0, 0.28)`; hover `0 14px 36px` + 1px lift): Product / journal tiles.
- **Glass panel / drawer** (`0 24px 60px rgba(0, 0, 0, 0.5)`): Bag drawer and mobile menu.
- **Focus bloom** (`0 0 0 3px rgba(255, 45, 111, 0.15)` plus hot seam at 0.55): Fields. Global `:focus-visible` is a 2px hot outline, 3px offset.
- **Map frame** (`0 0 40px rgba(255, 45, 111, 0.12)`): Soft hot halo, not a heavy drop.

### Named Rules
**The Glass-Is-Chrome Rule.** Frosted glass belongs on the nav pill, chips, Bag-adjacent controls, and the cart drawer. Product and journal cards are charcoal slabs (`panel-card`). Do not glass every tile.

**The One-Pixel Lift Rule.** Hover on chips, Bag, logo, and cards is `translateY(-1px)` (cards also `scale` on the photo). Anything larger leaves the house.

## Shapes

The silhouette is pills for chrome and soft rectangles for merchandise.

- **Nav, CTAs, Bag, chips, logo lockup:** full pill (`9999px`).
- **Hot tags:** 6px (`rounded-md`).
- **Fields:** 12px.
- **Cards / bars:** 16px (`1rem`).
- **Map frame:** 20px (`1.25rem`).
- **Mobile menu sheet:** 24px (`rounded-3xl`).

Borders are 1px white at ~8–12% on slabs; glass chrome uses a warm peach rim (`rgba(255, 200, 180, 0.22–0.40)`), not cyan. Selected chips pick up a hot rim at 0.55.

## Components

### Buttons
- **Shape:** Full pill. Primary and ghost are `12px` uppercase Manrope, tracking `0.12–0.14em`.
- **Primary:** Hot fill, white text, `14×32` padding, hot bloom. Hover `#FF4D85`. Active `--hot-dim`.
- **Ghost:** Black 35% fill, 1.5px hot rim at 0.75, inset 1px veil. Hover fills hot at 0.18.
- **Bag:** Compact hot pill in the nav (`11px` / `10px` on small screens). Count badge is a white pill with hot numerals.

### Chips
- **Glass chips:** Pill, 8px blur, peach rim, specular sweep on hover (`::after` screen-blend). Active = hot veil + hot text (`glass-chip-active`).
- **Category filters:** Same chip; first “All” is the active example on Collections.

### Cards / Containers
- **`.panel-card` / `.glass-card`:** 16px radius, `rgba(22, 22, 30, 0.92)`, 1px white 8% rim, 8px black cushion. Hover: hot rim at 0.35, 1px lift. Product photos are 4:5.
- **Journal cards:** Same charcoal slab. Cover is an object-cover photo (`coverImage` under `/media/journal/`) with a void-to-transparent gradient and a `tag-hot` category. Missing photos fall back to a `tile-glow-*` mesh. Landing tiles hover-scale the photo `1.03`; the index is a 2-col featured split plus thumbnail rows; article pages sit the photo in a `tile-glow-*` frame (`min-h-[220px]` / `md:min-h-[320px]`).
- **`.glass-panel`:** Drawer / mobile menu — 92% opaque night, 20px blur, 1px white 10% rim.

### Inputs / Fields
- **Style:** 12px radius, near-black well, 1px white 12% rim, 14px mist text.
- **Focus:** Hot seam at 0.55 plus 3px hot bloom. Placeholder is mute.
- **Error:** Hot/rose copy in the auth dialog; do not turn the whole field red.

### Navigation
Fixed sunset-rim glass pill. Brand is Money Stack (alpha WebM/WebP, no plate) + LEONIDA in Bebas inside a glass chip whose *glow lives on an outer wrap* (drop-shadow) and whose *glass lives on an inner pill* (no `backdrop-filter` on the outer node). Desktop links are glass chips; Account is a glass chip; Bag is hot. Mobile Menu opens a void scrim and a rounded glass sheet of Bebas links.

### Signature: keyed hero + atmospheric bands
The landing hero is one still (`/media/hero/leonida-scene.png`) with pointer parallax and a slow scroll ken-burns — not a CSS gradient masquerading as a city. Discover drifts a blurred photo under pink/purple/blue orbs (`7–12s` ease-in-out). Collections uses a slower siren wash (`cubic-bezier(0.45, 0.05, 0.55, 0.95)`, ~5.5s) behind the italic title. Both washes are atmosphere behind type, not content. **Latest from Leonida** is three charcoal journal tiles with Krea covers (`launch-night`, `dual-skyline`, `leonida-map`) — photos on slabs, not a second product look.

## Do's and Don'ts

### Do:
- **Do** keep void / night / ink as the ground family and `#FF2D6F` as the only conversion color.
- **Do** set section titles in Instrument Serif italic (`.title-italic`) and house wordmarks in Bebas.
- **Do** use Manrope for UI — it is what `--font-dm` actually loads.
- **Do** put glass on nav, chips, and the bag drawer; put charcoal slabs on product and journal cards.
- **Do** set journal covers as object-cover photos with a void gradient overlay and `tag-hot` — fall back to `tile-glow-*` only when `coverImage` is missing.
- **Do** keep the hero as one keyed scene with a left type stack and two pill CTAs.
- **Do** keep the logo glow on an outer `filter: drop-shadow` wrap so it does not clip to a rectangle.
- **Do** honor `prefers-reduced-motion` by dropping orb, siren, ken-burns, and chrome transform animations.

### Don't:
- **Don't** introduce Inter, Roboto, Arial, or a cream/terracotta palette. Do not switch UI to DM Sans to match stale docs — the build is Manrope.
- **Don't** fill display type with gradients or put a metric/stat strip in the hero.
- **Don't** glass every card or restyle chrome as cyan “liquid glass.”
- **Don't** copy page-title eyebrows (`LIVE MAP`, `ABOUT` in 11px tracked champagne) onto new surfaces — they are inner-page leftovers, not system law.
- **Don't** treat pink/blue/purple orb washes as a brand palette for buttons or type.
- **Don't** use Rockstar, Take-Two, or GTA marks. Atmosphere is allowed; affiliation is not.
- **Don't** invent vanity commerce numbers. Sold counts stay at zero until real orders exist.
