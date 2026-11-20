"use client";

import type { Product } from "@/lib/catalog";

export function ProductTile({ product }: { product: Product; index: number }) {
  const premium = product.tier === "premium";
  const chip =
    product.rarity === "FREE"
      ? "text-teal"
      : product.rarity === "LOCK"
        ? "text-mute"
        : premium
          ? "text-gold"
          : "text-coral";

  return (
    <button
      type="button"
      disabled={product.locked}
      className="group relative flex w-[128px] shrink-0 flex-col items-stretch gap-2.5 border border-mist/[0.1] bg-ink/80 px-2.5 py-3 text-left transition hover:border-mist/25 disabled:cursor-not-allowed disabled:opacity-55"
      aria-label={`${product.name}${product.locked ? " (locked)" : ""}`}
    >
      <span className={`text-[10px] tracking-[0.12em] ${chip}`}>{product.rarity}</span>
      <span
        className={`relative flex h-[84px] w-full items-center justify-center border border-mist/[0.06] ${
          premium ? "tile-glow-gold" : "tile-glow-pink"
        }`}
      >
        <span className="font-display text-2xl tracking-wide text-mist/85">{product.name.slice(0, 1)}</span>
        {product.locked && (
          <span className="absolute inset-0 flex items-center justify-center bg-night/60">
            <LockIcon />
          </span>
        )}
      </span>
      <span className="truncate text-[12px] font-medium text-mist">{product.name}</span>
      <span className="text-[11px] text-mute">
        {product.priceUsd === 0 ? "Included" : `$${product.priceUsd}`}
      </span>
    </button>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="#F4F0EA" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="5" y="11" width="14" height="10" rx="1" stroke="#F4F0EA" strokeWidth="1.6" />
    </svg>
  );
}
