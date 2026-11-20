"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { BoutiqueProduct } from "@/lib/catalog";

const ACCENT_MESH: Record<BoutiqueProduct["accent"], string> = {
  pink: "from-[#2a1020] via-[#1a0e18] to-[#0e0e14]",
  gold: "from-[#2a2218] via-[#1a1610] to-[#0e0e14]",
  champagne: "from-[#242018] via-[#181610] to-[#0e0e14]",
  teal: "from-[#102428] via-[#0e181c] to-[#0e0e14]",
};

const ACCENT_ORB: Record<BoutiqueProduct["accent"], string> = {
  pink: "bg-hot/30",
  gold: "bg-champagne/25",
  champagne: "bg-champagne/25",
  teal: "bg-teal/25",
};

export function ProductCard({ product }: { product: BoutiqueProduct }) {
  const { add } = useCart();

  return (
    <article className="panel-card group overflow-hidden transition duration-300 hover:-translate-y-1">
      <Link href={`/boutique/${product.slug}`} className="block">
        <div
          className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-b ${ACCENT_MESH[product.accent]}`}
        >
          <div
            className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full ${ACCENT_ORB[product.accent]} blur-3xl transition duration-500 group-hover:scale-125`}
          />
          <div
            className={`pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full ${ACCENT_ORB[product.accent]} opacity-60 blur-3xl`}
          />
          {product.badge && (
            <span className="tag-hot absolute left-3 top-3 z-10">{product.badge}</span>
          )}
          <span className="relative z-[1] font-display text-[5.5rem] tracking-[0.08em] text-white/55 transition duration-300 group-hover:scale-[1.04] group-hover:text-white/85">
            {product.letter}
          </span>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0c] to-transparent" />
          <p className="absolute bottom-3 left-4 z-[1] font-serif text-sm italic text-white/40">
            {product.category}
          </p>
        </div>
        <div className="space-y-1 px-4 py-4">
          <h3 className="text-[15px] font-medium tracking-wide text-white">{product.name}</h3>
          <p className="text-[15px] font-semibold tabular-nums text-hot">
            {product.inStock ? `$${product.priceUsd}` : "Sold out"}
          </p>
        </div>
      </Link>
      <div className="border-t border-white/[0.06] px-4 py-3">
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => add(product)}
          className="w-full rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 transition hover:bg-hot hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Quick add" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}
