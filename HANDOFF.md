# Leonida — System Handoff

> Ground truth is the shipped code, not prior intent.
> **Documented from:** `09b4f996087b1684d2945927a06130c854ecba08` (2026-11-20, “Fix LEONIDA logo glow rectangular clipping” on `cursor/leonida-complete-rebuild-3858`)
> **Visual system:** [`DESIGN.md`](./DESIGN.md) + [`.impeccable/design.json`](./.impeccable/design.json) — tokens extracted from `app/globals.css` and `tailwind.config.ts`.
> **Refresh this file** whenever the studio is built or rebuilt. If `HEAD` still matches **Documented from**, leave both docs untouched.

## What it is

Persuade-mode **night-city house** plus a boutique: public landing, collections, journal, live map, and a Night Pass shop shell. One Next.js app. There is no separate marketing site. Agents Office (wallet / spend) is a different app; this storefront only links out.

After first paint:

1. **Landing** (`/`) — keyed hero, Discover band, live-map teaser, New Arrivals, journal.
2. **Boutique** (`/boutique`, `/boutique/[slug]`) — Collections hero with siren wash + product grid / PDP.
3. **Map** (`/map`) — full-bleed Vice Map embed.
4. **Journal** (`/journal`, `/journal/[slug]`) — editorial posts from `JOURNAL_POSTS`.
5. **About** (`/about`) — house copy + Rockstar disclaimer.
6. **Night Pass** (`/shop`) — `ShopShell` tracks + customer area.
7. **Checkout** (`/checkout`) — local bag summary; **payment is not wired**.

Auth and the bag are global overlays (`AuthModal`, `CartDrawer`), not routes. The public house does **not** gate the catalog behind a session.

## Surfaces

| Surface | Gate | Component / route |
| --- | --- | --- |
| Glass nav | Always | `GlassNav` in `AppProviders` |
| Landing | Public | `LandingPage` |
| Boutique / PDP | Public | `app/boutique/*` + `ProductCard` / `ProductDetail` |
| Live map | Public | `LeonidaLiveMap` (`/map` + landing teaser) |
| Auth dialog | Overlay | `AuthModal` |
| Bag drawer | Overlay | `CartDrawer` |
| Night Pass shell | Public; customer tabs need session | `ShopShell` + `CustomerArea` |
| Checkout | Public (local bag) | `app/checkout/page.tsx` |

Unsigned visitors see the house and can add to the bag. Account is optional localStorage identity.

## Runtime topology

```
Browser (Next.js 15 App Router)
  ├─ Public pages     →  RSC + client islands (framer-motion)
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
- **Fonts (live):** Bebas Neue, Instrument Serif, Manrope (loaded into `--font-dm`). Caveat is imported in `app/layout.tsx` and is unused in components.
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

Checkout does not charge. Quick-add opens the drawer. PDP lives at `/boutique/[slug]`. SEO title/description fields exist on the two hardware drops.

## Live map

`src/lib/map.ts` points at **Vice Map** (`https://vice-map.com/embed/map`). The iframe mounts **after** client hydration so password-manager extensions cannot break SSR. After `onLoad`, height is nudged `99.5% → 100%` so tiles fill the frame. Compact teaser uses a shorter viewport height; the `/map` page uses `min(78vh, 820px)`. Credit the fan map. **Not affiliated with Rockstar.**

## File map

```
app/globals.css                      → tokens + glass/button/hero/siren CSS
app/layout.tsx                       → fonts, AppProviders, metadata
app/page.tsx                         → LandingPage
app/boutique/page.tsx                → Collections + grid
app/boutique/[slug]/page.tsx         → PDP
app/map/page.tsx                     → full map
app/journal/page.tsx + [slug]
app/about/page.tsx
app/shop/page.tsx                    → Night Pass ShopShell
app/checkout/page.tsx                → unwired payment copy
src/components/nav/GlassNav.tsx
src/components/nav/MoneyStack.tsx    → alpha WebM/WebP, no plate
src/components/hero/HeroScene.tsx    → keyed still + parallax
src/components/LandingPage.tsx
src/components/map/LeonidaLiveMap.tsx
src/components/shop/ProductCard.tsx
src/components/shop/ProductDetail.tsx
src/components/shop/CartDrawer.tsx
src/components/AuthModal.tsx
src/components/ShopShell.tsx         → tracks + CustomerArea
src/lib/catalog.ts
src/lib/auth.tsx
src/lib/cart.tsx
src/lib/customer.ts
src/lib/map.ts
tailwind.config.ts
public/media/hero/leonida-scene.png
public/media/products/*
```

## Invariants for the next build

1. **Keyed hero, left type stack.** Do not replace the cinematic still with a CSS-gradient city or a centered logo stack.
2. **Hot pink is conversion.** Do not introduce a second CTA color. Atmosphere orbs may be pink/blue/purple; buttons may not.
3. **Glass is chrome.** Nav, chips, drawer. Cards stay charcoal slabs.
4. **Logo glow must not clip.** Outer `.nav-logo` = `filter: drop-shadow` + overflow visible. Inner `.nav-logo-inner` = the rounded glass. Do not put `backdrop-filter` on the outer wrap (that paints a rectangular plate).
5. **Money stack has no plate.** Alpha WebM/WebP only; transparent background.
6. **Manrope is the UI face.** `--font-dm` loads Manrope. Do not “fix” it back to DM Sans to match stale `brand-spec.md`.
7. **No vanity metrics.** `COMMERCE` and track `sold` stay at 0 until real orders exist. Checkout must not fake a charge.
8. **Map stays a client-mounted iframe** with a fixed viewport height, not an aspect-ratio letterbox.
9. **No Rockstar / Take-Two marks.** Fan map credit + “Not affiliated” stay.
10. **Visual world is The Charcoal Night House.** New UI goes through `DESIGN.md`. Do not revive `#0B0716` / `#E85A9B` from `brand-spec.md` / `.cursor/rules/vice-ops-design.mdc` unless the CSS is deliberately rebuilt to those values.
11. **Do not commit secrets.** There is no processor key in-repo; do not add one to docs.

## How this documentation stays current

An hourly Cursor automation (“Design and System documentation”) compares `HEAD` on `cursor/leonida-complete-rebuild-3858` to the **Documented from** SHA above.

- If the SHA matches and `DESIGN.md` / `HANDOFF.md` exist, it reports **No changes**.
- If the studio was built or rebuilt (new commits touching UI, nav, catalog, map, or tokens), it re-extracts the visual system into `DESIGN.md` + `.impeccable/design.json` and rewrites this handoff from the shipped artifact.
- Confirmed incumbent decisions stay; the build wins where they diverge.
- `master` is a parallel history with no common ancestor. After this rebuild merges (or becomes default), switch the tracked branch to the default.
- Do not commit secrets, env values, or identity tokens into either file.
