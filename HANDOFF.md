# Leonida — System Handoff

> Ground truth is the shipped code, not prior intent.
> **Documented from:** `3d2f30b62abbda55ddfcddddfbed2f8d1ac333cf` (2026-11-20, “Add scroll-driven page motion across Leonida” on `cursor/leonida-complete-rebuild-3858` / `master`)
> **Visual system:** [`DESIGN.md`](./DESIGN.md) + [`.impeccable/design.json`](./.impeccable/design.json) — tokens extracted from `app/globals.css` and `tailwind.config.ts`.
> **Refresh this file** whenever the studio is built or rebuilt. If `HEAD` still matches **Documented from**, leave both docs untouched.

## What it is

Persuade-mode **editorial night house** plus a boutique: public landing, collections, magazine journal, live map, and a Night Pass shop shell. One Next.js app. There is no separate marketing site. Agents Office (wallet / spend) is a different app; this storefront only links out.

After first paint:

1. **Landing** (`/`) — keyed hero, Discover band, live-map teaser, Boutique 3-up, magazine journal.
2. **Boutique** (`/boutique`, `/boutique/[slug]`) — Collections hero + product grid / PDP.
3. **Map** (`/map`) — full-bleed Vice Map embed.
4. **Journal** (`/journal`, `/journal/[slug]`) — launch-week dispatches from `JOURNAL_POSTS` with `coverImage` webps, magazine mastheads, pull quotes.
5. **About** (`/about`) — house copy + Rockstar disclaimer.
6. **Night Pass** (`/shop`) — `ShopShell` tracks + customer area.
7. **Checkout** (`/checkout`) — local bag summary; **payment is not wired**.

Auth and the bag are global overlays (`AuthModal`, `CartDrawer`), not routes. The public house does **not** gate the catalog behind a session. A 2px hot `ScrollProgress` line tracks page scroll above the nav.

## Surfaces

| Surface | Gate | Component / route |
| --- | --- | --- |
| Metallic nav | Always | `GlassNav` in `AppProviders` |
| Scroll progress | Always (motion-safe) | `ScrollProgress` |
| Landing | Public | `LandingPage` |
| Boutique / PDP | Public | `app/boutique/*` + `ProductCard` / `ProductDetail` |
| Live map | Public | `LeonidaLiveMap` (`/map` + landing teaser) |
| Journal | Public | `app/journal/*` + `JOURNAL_POSTS` covers |
| Auth dialog | Overlay | `AuthModal` |
| Bag drawer | Overlay | `CartDrawer` |
| Night Pass shell | Public; customer tabs need session | `ShopShell` + `CustomerArea` |
| Checkout | Public (local bag) | `app/checkout/page.tsx` |

Unsigned visitors see the house and can add to the bag. Account is optional localStorage identity.

## Runtime topology

```
Browser (Next.js 15 App Router)
  ├─ Public pages     →  RSC + client islands (framer-motion)
  ├─ Scroll motion    →  ScrollReveal / ScrollStagger / ScrollProgress
  ├─ Catalog          →  src/lib/catalog.ts (static)
  ├─ Session          →  localStorage vice-ops-shop-session-v1
  ├─ Users            →  localStorage vice-ops-shop-users-v1 (plaintext password)
  ├─ Bag              →  localStorage leonida-cart-v1
  ├─ Live map         →  iframe https://vice-map.com/embed/map
  └─ Office bridge    →  NEXT_PUBLIC_OFFICE_URL (default http://127.0.0.1:3000)
```

- **Framework:** Next.js 15.5, React 19, Tailwind 3 (`app/globals.css` + `tailwind.config.ts`), Framer Motion 12.
- **Dev server:** `npm run dev` → `scripts/run-dev.sh` → `http://127.0.0.1:3001`.
- **Build:** `next build`. Images are `unoptimized: true`.
- **Fonts (live):** Bebas Neue → `--font-display`, Bodoni Moda → `--font-editorial`, Manrope → `--font-ui`. Instrument Serif and Caveat are **not** loaded.
- **No server database.** No Stripe. Checkout says so.

## Auth

Client-only. Passwords are stored in `localStorage` on the device — not a production identity provider.

| Action | Role |
| --- | --- |
| `openAuth("login" \| "register")` | Opens `AuthModal` |
| `login` / `register` | Match or append `vice-ops-shop-users-v1`; write session |
| `logout` | Clears session; users remain in the users key |
| Password rule | ≥ 6 characters on register |

Session shape: `{ id, name, email, level, roleLabel, currencyVc, createdAt }`. Default `roleLabel` is `"Operator"`. Currency starts at 0.

There is no Better Auth, no cookies, no middleware. Do not pretend hosted auth exists until it is wired.

## Commerce

| Store | What | Where |
| --- | --- | --- |
| `BOUTIQUE` | Real SKUs (controller stand `$49.99`, neon wall sign `$39.99`, plus apparel placeholders) | `src/lib/catalog.ts` |
| `STANDARD_TRACK` / `PREMIUM_TRACK` | Night Pass placeholders; `sold: 0` | same |
| `COMMERCE` | `orders: 0`, `revenueUsd: 0` | same |
| Bag | Lines + qty | `leonida-cart-v1` |
| Orders / billings / messages | Empty arrays | `src/lib/customer.ts` |

Checkout does not charge. Quick-add opens the drawer. PDP lives at `/boutique/[slug]`. SEO title/description fields exist on the two hardware drops. Landing Boutique band shows the first three in-stock SKUs.

## Live map

`src/lib/map.ts` points at **Vice Map** (`https://vice-map.com/embed/map`). The iframe mounts **after** client hydration so password-manager extensions cannot break SSR. After `onLoad`, height is nudged `99.5% → 100%` so tiles fill the frame. Compact teaser uses a shorter viewport height; the `/map` page uses `min(78vh, 820px)`. Credit the fan map. **Not affiliated with Rockstar.**

## Journal

`JOURNAL_POSTS` in `src/lib/catalog.ts` is the editorial desk. Four launch-week dispatches, each with a `coverImage` under `public/media/journal/` and an optional `pullQuote`:

| Slug | Title | Cover |
| --- | --- | --- |
| `vice-city-unlock` | Vice City unlocks at midnight | `launch-night.webp` |
| `twitch-breaks-the-grid` | Twitch breaks the grid | `dual-skyline.webp` |
| `six-regions-one-map` | Six regions, one map | `leonida-map.webp` |
| `dusk-over-the-swamp` | Dusk over the swamp | `launch-night.webp` (reused) |

Landing **Latest from Leonida** is a magazine 8-col feature plus three stacked thumbs (object-cover, hover `scale-[1.03]` / `1.04`). Index is a masthead + featured 7/8-col split + secondary 16:10 + thumbnail rows. Article pages use an asymmetric masthead, a `media-project` 16:9 / 21:9 cover, a 6-col measure with pull quote after the first body break, and a sticky “In this issue” rail. Copy covers launch culture, not the license — no Rockstar marks.

`PageAtmosphere` (`src/components/PageAtmosphere.tsx`) still exists and still paints aurora orbs, but **nothing imports it**. Inner pages use `.film-grain` + `.vignette` on `bg-void`. Do not remount the aurora as the journal ground.

## Motion

`src/components/motion/ScrollReveal.tsx` and `ScrollProgress.tsx` are global language:

- `ScrollProgress` — 2px hot line, `z-[60]`, spring 120/28; unmounts under reduced motion.
- `ScrollReveal` — `rise` / `clip` / `fade` / `slide`, 0.75s expo ease, once in view.
- `ScrollStagger` + `ScrollItem` — product and journal grids.
- `HeroScene` — pointer parallax, scroll scale 1→1.12, opacity fade, ken-burns.

Landing Discover and journal bands use `clip`; map/boutique/product grids use `rise`.

## File map

```
app/globals.css                      → tokens + metallic nav / button / grain CSS
app/layout.tsx                       → Manrope / Bebas / Bodoni, AppProviders, metadata
app/page.tsx                         → LandingPage
app/boutique/page.tsx                → Collections + 3-col grid
app/boutique/[slug]/page.tsx         → PDP
app/map/page.tsx                     → full map
app/journal/page.tsx + [slug]        → magazine index + article
app/about/page.tsx
app/shop/page.tsx                    → Night Pass ShopShell
app/checkout/page.tsx                → unwired payment copy
src/components/nav/GlassNav.tsx      → rectangular metallic sheet
src/components/nav/MoneyStack.tsx    → alpha WebM/WebP, no plate
src/components/hero/HeroScene.tsx    → keyed still + parallax + scroll fade
src/components/LandingPage.tsx
src/components/motion/ScrollProgress.tsx
src/components/motion/ScrollReveal.tsx
src/components/map/LeonidaLiveMap.tsx
src/components/shop/ProductCard.tsx
src/components/shop/ProductDetail.tsx
src/components/shop/CartDrawer.tsx
src/components/AuthModal.tsx
src/components/ShopShell.tsx         → tracks + CustomerArea
src/components/PageAtmosphere.tsx    → unused leftover aurora
src/lib/catalog.ts
src/lib/auth.tsx
src/lib/cart.tsx
src/lib/customer.ts
src/lib/map.ts
tailwind.config.ts
public/media/hero/leonida-scene.png
public/media/products/*
public/media/journal/*.webp          → launch-night, dual-skyline, leonida-map
```

## Invariants for the next build

1. **Keyed hero, left type stack.** Do not replace the cinematic still with a CSS-gradient city or a centered logo stack. One rectangular primary CTA; journal is a text link.
2. **Hot pink is conversion.** Do not introduce a second CTA color. Cyan / burgundy / navy may tint atmosphere; buttons may not.
3. **Rectangle is chrome.** Nav sheet, CTAs, Bag, chips, cards: `border-radius: 2px`. Do not restore pill nav.
4. **Logo glow must not clip.** Outer `.nav-logo` = overflow visible; glow on hover via `filter: drop-shadow`. Inner `.nav-logo-inner` = the 2px glass. Do not put `backdrop-filter` on the outer wrap.
5. **Money stack has no plate.** Alpha WebM/WebP only; transparent background.
6. **Manrope is the UI face.** `--font-ui` loads Manrope. Editorial is Bodoni Moda (`--font-editorial`), not Instrument Serif. Do not “fix” fonts back to DM Sans or Instrument Serif to match stale `brand-spec.md` / `PRODUCT.md`.
7. **No vanity metrics.** `COMMERCE` and track `sold` stay at 0 until real orders exist. Checkout must not fake a charge.
8. **Map stays a client-mounted iframe** with a fixed viewport height, not an aspect-ratio letterbox.
9. **No Rockstar / Take-Two marks.** Fan map credit + “Not affiliated” stay.
10. **Visual world is The Editorial Night House.** New UI goes through `DESIGN.md`. Do not revive `#0A0A0C` pill chrome, Instrument Serif pink section titles, or `#0B0716` / `#E85A9B` from `brand-spec.md` / `.cursor/rules/vice-ops-design.mdc` unless the CSS is deliberately rebuilt to those values.
11. **Journal is a magazine.** Feature split, Bodoni titles, pull quotes, `coverImage` photos. Do not default back to mesh-only tiles or glass journal cards. Do not remount `PageAtmosphere`. Copy stays house culture; affiliation never.
12. **Scroll motion is system.** Keep `ScrollReveal` / `ScrollProgress` and honor `prefers-reduced-motion`. Do not add bounce easings to room reveals.
13. **Do not commit secrets.** There is no processor key in-repo; do not add one to docs.

## How this documentation stays current

An hourly Cursor automation (“Design and System documentation”) compares `HEAD` on `master` (rebuild and default now share history) to the **Documented from** SHA above. The rebuild branch `cursor/leonida-complete-rebuild-3858` is kept in sync while it still points at the same tip.

- If the SHA matches and `DESIGN.md` / `HANDOFF.md` exist, it reports **No changes**.
- If the studio was built or rebuilt (new commits touching UI, nav, catalog, journal, map, motion, or tokens), it re-extracts the visual system into `DESIGN.md` + `.impeccable/design.json` and rewrites this handoff from the shipped artifact.
- Confirmed incumbent decisions stay; the build wins where they diverge.
- Track `master`. If the rebuild branch diverges again, document the branch that holds the live house until it is merged.
- Do not commit secrets, env values, or identity tokens into either file.
