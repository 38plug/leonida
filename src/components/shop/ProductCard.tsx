"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { BoutiqueProduct } from "@/lib/catalog";

const ACCENT_MESH: Record<BoutiqueProduct["accent"], string> = {
  pink: "from-[#2a1020] via-[#1a0e18] to-[#0e0e14]",
  gold: "from-[#2a2218] via-[#1a1610] to-[#0e0e14]",
  champagne: "from-[#242018] via-[#181610] to-[#0e0e14]",
  teal: "from-[#102428] via-[#0e181c] to-[#0e0e14]",
};

export function ProductCard({ product }: { product: BoutiqueProduct }) {
  const { add } = useCart();

  return (
    <article className="panel-card group overflow-hidden transition duration-300 hover:-translate-y-1">
      <Link href={`/boutique/${product.slug}`} className="block">
        <div
          className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-b ${ACCENT_MESH[product.accent]}`}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <span className="font-display text-[5.5rem] tracking-[0.08em] text-white/50">
              {product.letter}
            </span>
          )}
          {product.badge && (
            <span className="tag-hot absolute left-3 top-3 z-10">{product.badge}</span>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0c] to-transparent" />
        </div>
        <div className="space-y-1 px-4 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-mute">
            {product.category}
          </p>
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
