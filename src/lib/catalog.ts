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
    priceUsd: 59.99,
    category: "Gear",
    badge: "NEW",
    description:
      "Open-design 3D dock for dual-sense style pads — neon palm accents, Night Pass plaque, grab-and-go inclined support. Controller not included.",
    colors: ["Night Pink", "Void"],
    sizes: ["One size"],
    letter: "C",
    accent: "pink",
    inStock: true,
    image: "/media/products/controller-stand.png",
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
    slug: "night-lane-opens",
    title: "The night lane opens",
    category: "Dispatch",
    dek: "China factory QC, then carrier to the door. No warehouse fiction.",
    body: "The boutique ships from verified factory floors — inspection first, then carrier. Leonida News will not invent transit stories. When an order leaves China, you see the same trail Pedro sees.",
    coverAccent: "pink" as const,
  },
  {
    slug: "agents-stay-gated",
    title: "Agents stay gated",
    category: "Ops",
    dek: "Spend and publish never auto-fire. The wallet stays human.",
    body: "Vice Ops agents work the floor. Budgets and publishes wait for Pedro. That gate is the product — AI speed with human brakes.",
    coverAccent: "gold" as const,
  },
  {
    slug: "night-pass-zero",
    title: "Night Pass at zero",
    category: "Boutique",
    dek: "Tracks are live. Metrics stay empty until someone buys.",
    body: "Standard and premium rails are seeded. Points, orders, and revenue start at zero. Vanity dashboards are not Leonida.",
    coverAccent: "teal" as const,
  },
  {
    slug: "vice-city-dusk",
    title: "Dusk over the swamp",
    category: "Culture",
    dek: "The skyline is a mood, not a license.",
    body: "Leonida borrows atmosphere — swamp light, neon edge, night heat — without claiming Rockstar’s world. Original characters. Original house.",
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
