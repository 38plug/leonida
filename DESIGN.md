# Design system — Leonida / Vice Ops

Art direction: cinematic night-city lifestyle house. Visual language adapted from premium GTA-VI–era dashboard references (hot pink CTAs, dark charcoal panels, italic pink titles) without Rockstar marks or affiliation.

## World

Charcoal night stage. One keyed cinematic hero (character + car + highway). Hot-pink action color for conversion. Surfaces are dark frosted panels — not cyan “liquid glass” everywhere.

## Color

| Token | Hex | Role |
| --- | --- | --- |
| void | `#0A0A0C` | Page ground |
| night | `#121218` | Raised stage |
| ink | `#1A1A22` | Panel fill |
| mist | `#F4F0F2` | Primary text |
| mute | `#9A94A0` | Secondary |
| hot | `#FF2D6F` | Primary CTA / active / tags |
| hotDim | `#C91852` | Hover / pressed |
| champagne | `#C4B5A0` | Soft metal |
| teal | `#5EC8C4` | Rare cool accent |

## Type

- **Bebas Neue** — LEONIDA wordmark, display headlines (weight through size, not gradient)
- **Instrument Serif italic** — section titles & “Vice City” flourish in hot pink
- **DM Sans** — UI, body, controls

## Layout

- Hero: full-bleed keyed scene; left type stack; no eyebrow, no metric strip, no gradient text
- Nav: dark charcoal pill; hot pink Bag; quiet link hover
- Boutique / journal: dark panels, pink category tags, generous rhythm
- Glass only where it earns depth (nav, drawer) — not every card

## Motion

- One hero entrance; hover on primary CTA; card lift on boutique
- Prefer exponential ease-out; no identical section fades

## Assets

- Hero: `/media/hero/leonida-scene.png`
- Ref (internal): `/media/refs/gta-dashboard-ref.png`
