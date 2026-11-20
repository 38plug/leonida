export type Tier = "standard" | "premium";

export interface Product {
  id: string;
  name: string;
  tier: Tier;
  rarity: "FREE" | "DROP" | "LOCK";
  locked: boolean;
  priceUsd: number;
  sold: number;
}

export interface BoutiqueProduct {
  id: string;
  name: string;
  slug: string;
  priceUsd: number;
  category: string;
  badge?: "NEW" | "DROP" | "EXCLUSIVE" | "SOLD OUT";
  description: string;
  /** Search / social title (~60 chars). Falls back to name. */
  seoTitle?: string;
  /** Meta description (~155 chars). Falls back to description. */
  seoDescription?: string;
  colors: string[];
  sizes: string[];
  letter: string;
  accent: "pink" | "gold" | "teal" | "champagne";
  inStock: boolean;
  image?: string;
}

/** Night Pass track placeholders — sold counts stay 0 until real commerce. */
export const STANDARD_TRACK: Product[] = [
  { id: "std-1", name: "Neon Tee", tier: "standard", rarity: "FREE", locked: false, priceUsd: 0, sold: 0 },
  { id: "std-2", name: "Vice Cap", tier: "standard", rarity: "DROP", locked: false, priceUsd: 28, sold: 0 },
  { id: "std-3", name: "Night Hoodie", tier: "standard", rarity: "DROP", locked: false, priceUsd: 68, sold: 0 },
  { id: "std-4", name: "Leonida Mug", tier: "standard", rarity: "DROP", locked: false, priceUsd: 22, sold: 0 },
  { id: "std-5", name: "Pink Slip", tier: "standard", rarity: "DROP", locked: false, priceUsd: 18, sold: 0 },
  { id: "std-6", name: "Aqua Socks", tier: "standard", rarity: "LOCK", locked: true, priceUsd: 16, sold: 0 },
  { id: "std-7", name: "Gold Pin", tier: "standard", rarity: "LOCK", locked: true, priceUsd: 14, sold: 0 },
  { id: "std-8", name: "City Poster", tier: "standard", rarity: "LOCK", locked: true, priceUsd: 24, sold: 0 },
];

export const PREMIUM_TRACK: Product[] = [
  { id: "prm-1", name: "Gold Chain", tier: "premium", rarity: "DROP", locked: false, priceUsd: 120, sold: 0 },
  { id: "prm-2", name: "Limited Jersey", tier: "premium", rarity: "DROP", locked: false, priceUsd: 98, sold: 0 },
  { id: "prm-3", name: "Night Runner", tier: "premium", rarity: "DROP", locked: false, priceUsd: 140, sold: 0 },
  { id: "prm-4", name: "Signed Drop", tier: "premium", rarity: "DROP", locked: false, priceUsd: 160, sold: 0 },
  { id: "prm-5", name: "VIP Case", tier: "premium", rarity: "LOCK", locked: true, priceUsd: 210, sold: 0 },
  { id: "prm-6", name: "Mirror Specs", tier: "premium", rarity: "LOCK", locked: true, priceUsd: 88, sold: 0 },
  { id: "prm-7", name: "Boss Jacket", tier: "premium", rarity: "LOCK", locked: true, priceUsd: 240, sold: 0 },
  { id: "prm-8", name: "Elite Pass", tier: "premium", rarity: "LOCK", locked: true, priceUsd: 0, sold: 0 },
];

export const BOUTIQUE: BoutiqueProduct[] = [
  {
    id: "b0",
    name: "Leonida Controller Stand",
    slug: "leonida-controller-stand",
    // Seller ~$15.68 free ship → $49.99 (~3.2×) balances conversion + margin
    priceUsd: 49.99,
    category: "Gear",
    badge: "NEW",
    description:
      "Open-design DualSense-style dock with neon palm accents and an inclined grab-and-go front support. Desk-ready night-city gear — controller not included.",
    seoTitle: "Leonida PS5 Controller Stand — Neon Palm Grab-and-Go Dock",
    seoDescription:
      "Open-design DualSense-style controller stand with neon palms and inclined grab-and-go support. Leonida boutique desk gear. Controller not included. Ships China → door.",
    colors: ["Night Pink", "Void"],
    sizes: ["One size"],
    letter: "C",
    accent: "pink",
    inStock: true,
    image: "/media/products/controller-stand.png",
  },
  {
    id: "b-neon-sign",
    name: "Leonida Neon Wall Sign",
    slug: "leonida-neon-wall-sign",
    // Seller ~$8.90 free ship → $39.99 (~4.5×); under-$40 impulse, strong margin
    priceUsd: 39.99,
    category: "Decor",
    badge: "NEW",
    description:
      "USB LED neon wall light with sunset-road art and a hot-pink frame glow. Dimmer dial, hang chains, adhesive hooks, and floating standoffs in the box.",
    seoTitle: "Leonida Neon Wall Sign — Pink LED Night-City Glow",
    seoDescription:
      "Pink LED neon wall sign with dusk coastal art, USB power, and dimmer. Hang kit + floating mounts included. Leonida boutique gaming decor. Ships China → door.",
    colors: ["Hot Pink"],
    sizes: ["One size"],
    letter: "V",
    accent: "pink",
    inStock: true,
    image: "/media/products/neon-wall-sign.png",
  },
  {
    id: "b1",
    name: "Neon Tee",
    slug: "neon-tee",
    priceUsd: 48,
    category: "Apparel",
    badge: "NEW",
    description: "Soft heavyweight cotton with dusk gradient print. Made for night drives.",
    colors: ["Mist", "Night"],
    sizes: ["S", "M", "L", "XL"],
    letter: "N",
    accent: "pink",
    inStock: true,
    image: "/media/products/neon-tee.png",
  },
  {
    id: "b2",
    name: "Vice Cap",
    slug: "vice-cap",
    priceUsd: 38,
    category: "Accessories",
    badge: "DROP",
    description: "Structured wool blend, champagne embroidery, adjustable strap.",
    colors: ["Black", "Burgundy"],
    sizes: ["One size"],
    letter: "V",
    accent: "champagne",
    inStock: true,
    image: "/media/products/vice-cap.png",
  },
  {
    id: "b3",
    name: "Night Hoodie",
    slug: "night-hoodie",
    priceUsd: 128,
    category: "Apparel",
    badge: "EXCLUSIVE",
    description: "Brushed fleece, oversized fit, hidden zip pocket for the Night Pass.",
    colors: ["Void", "Magenta mist"],
    sizes: ["S", "M", "L", "XL"],
    letter: "H",
    accent: "gold",
    inStock: true,
    image: "/media/products/night-hoodie.png",
  },
  {
    id: "b4",
    name: "Gold Chain",
    slug: "gold-chain",
    priceUsd: 180,
    category: "Jewelry",
    badge: "DROP",
    description: "18k-look plated link chain. Weight without the warehouse fiction.",
    colors: ["Champagne"],
    sizes: ["One size"],
    letter: "G",
    accent: "gold",
    inStock: true,
    image: "/media/products/gold-chain.png",
  },
  {
    id: "b5",
    name: "Mirror Specs",
    slug: "mirror-specs",
    priceUsd: 96,
    category: "Accessories",
    description: "Polarized lenses, thin metal frame, Leonida dusk gradient.",
    colors: ["Chrome", "Smoke"],
    sizes: ["One size"],
    letter: "M",
    accent: "teal",
    inStock: true,
  },
  {
    id: "b6",
    name: "Boss Jacket",
    slug: "boss-jacket",
    priceUsd: 280,
    category: "Apparel",
    badge: "EXCLUSIVE",
    description: "Cropped leather with satin lining. Limited cut for the boutique.",
    colors: ["Black"],
    sizes: ["S", "M", "L"],
    letter: "B",
    accent: "pink",
    inStock: true,
  },
  {
    id: "b7",
    name: "City Poster",
    slug: "city-poster",
    priceUsd: 42,
    category: "Print",
    description: "Swamp-to-skyline print on archival paper. 24×36.",
    colors: ["Dusk"],
    sizes: ["24×36"],
    letter: "C",
    accent: "champagne",
    inStock: true,
  },
  {
    id: "b8",
    name: "Elite Pass",
    slug: "elite-pass",
    priceUsd: 0,
    category: "Membership",
    badge: "SOLD OUT",
    description: "Season access to premium track drops. Restocks with the next event.",
    colors: ["Gold"],
    sizes: ["Digital"],
    letter: "E",
    accent: "gold",
    inStock: false,
  },
];

export const JOURNAL_POSTS = [
  {
    slug: "vice-city-unlock",
    title: "Vice City unlocks at midnight",
    category: "Dispatch",
    dek: "Nov 19 drop on PS5 and Xbox. The night city is no longer a trailer.",
    author: "Leonida Desk",
    publishedAt: "2026-11-19",
    readMinutes: 4,
    pullQuote: "We are the mood board for the night that finally arrived.",
    body:
      "Grand Theft Auto VI hit consoles at midnight local on November 19 — PlayStation 5 and Xbox Series first, PC still queued for 2027. New Zealand opened the door a beat early; the rest of the map followed.\n\nLeonida Journal covers the culture around the launch, not the license. We are not Rockstar. We are the mood board for the night that finally arrived — and the merch desk for people living in that glow.\n\nWhat matters now is the texture of the first week: who is live, which counties feel real, and how the night house dresses for it. The boutique stays timed to that heat — neon that matches the skyline, stands that hold the controller through the first credits.",
    coverImage: "/media/journal/launch-night.webp",
    coverAccent: "pink" as const,
  },
  {
    slug: "twitch-breaks-the-grid",
    title: "Twitch breaks the grid",
    category: "Culture",
    dek: "Nearly 8M concurrent across platforms. Leonida ate the livestream chart.",
    author: "Night Desk",
    publishedAt: "2026-11-20",
    readMinutes: 5,
    pullQuote: "Dual protagonists make co-watch culture feel inevitable.",
    body:
      "Launch week rewrote the stream board: peaks near 3.3 million on Twitch alone and close to eight million concurrent across Twitch, YouTube, and Kick. DE-CIX clocked a fresh internet-exchange high the night before unlock.\n\nEnglish rooms mattered; Spanish and Brazilian rooms roared louder than the old playbook. Dual protagonists make co-watch culture feel inevitable — Lucia and Jason as the new shared camera.\n\nWe track the heat so the boutique stays timed to what people actually talk about — not vanity charts, not invented metrics. Empty until someone buys. Loud when the city is live.",
    coverImage: "/media/journal/dual-skyline.webp",
    coverAccent: "gold" as const,
  },
  {
    slug: "six-regions-one-map",
    title: "Six regions, one map",
    category: "Ops",
    dek: "Vice City, Keys, Grassrivers, Port Gellhorn, Ambrosia, Mount Kalaga.",
    author: "Cartography",
    publishedAt: "2026-11-20",
    readMinutes: 3,
    pullQuote: "Atmosphere first. Affiliation never.",
    body:
      "The official Leonida layout is out of rumor and into pins — six regions spanning neon downtown, keys, wetlands, ports, inland Ambrosia, and Mount Kalaga National Park.\n\nFan maps are already stacking hundreds of markers for shops, missions, and jumps. Our live map page rides that same hunger: orient fast, then buy the neon that matches the skyline.\n\nAtmosphere first. Affiliation never.",
    coverImage: "/media/journal/leonida-map.webp",
    coverAccent: "teal" as const,
  },
  {
    slug: "dusk-over-the-swamp",
    title: "Dusk over the swamp",
    category: "Boutique",
    dek: "The skyline is a mood, not a license.",
    author: "House Edit",
    publishedAt: "2026-11-18",
    readMinutes: 3,
    pullQuote: "Original characters. Original house.",
    body:
      "Leonida borrows swamp light, neon edge, and night heat without claiming Rockstar’s world. Original characters. Original house.\n\nWhen the internet floods with launch clips, we keep the boutique honest — controller stands, wall neon, Night Pass rails — built for people who want the vibe after the stream ends.",
    coverImage: "/media/journal/launch-night.webp",
    coverAccent: "champagne" as const,
  },
];

export const COMMERCE = {
  currency: 0,
  points: 0,
  pointsMax: 10_000,
  progressPct: 0,
  orders: 0,
  revenueUsd: 0,
} as const;

export const NAV_ITEMS = [
  { id: "character", label: "Character", href: "#" },
  { id: "shop", label: "Shop", href: "#" },
  { id: "night-pass", label: "Night Pass", href: "#pass", active: true },
  { id: "tasks", label: "Tasks", href: "#" },
  { id: "rating", label: "Rating", href: "#" },
  { id: "catalog", label: "Catalog", href: "#catalog" },
  { id: "agency", label: "Agency HQ", href: process.env.NEXT_PUBLIC_OFFICE_URL || "http://127.0.0.1:3000", external: true },
  { id: "settings", label: "Settings", href: "#" },
] as const;

export function getBoutiqueBySlug(slug: string) {
  return BOUTIQUE.find((p) => p.slug === slug);
}

export function getJournalBySlug(slug: string) {
  return JOURNAL_POSTS.find((p) => p.slug === slug);
}

export function formatJournalDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Phnom_Penh",
  });
}
