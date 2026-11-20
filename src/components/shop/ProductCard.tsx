"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { BoutiqueProduct } from "@/lib/catalog";

export function ProductCard({ product }: { product: BoutiqueProduct }) {
  const { add } = useCart();

  return (
    <article className="glass-card group overflow-hidden">
      <Link href={`/boutique/${product.slug}`} className="block">
        <div
          className={`relative flex aspect-[4/5] items-center justify-center tile-glow-${product.accent}`}
        >
          {product.badge && (
            <span className="glass-chip absolute left-3 top-3 px-2.5 py-1 text-[10px] tracking-[0.16em] text-white/90">
              {product.badge}
            </span>
          )}
          <span className="font-display text-6xl tracking-wide text-white/85 transition group-hover:scale-105">
            {product.letter}
          </span>
        </div>
        <div className="space-y-1 px-3 py-4">
          <h3 className="text-sm font-medium text-white">{product.name}</h3>
          <p className="text-[12px] text-white/60">
            {product.inStock ? `$${product.priceUsd}` : "Sold out"}
          </p>
        </div>
      </Link>
      <div className="border-t border-[rgba(150,200,255,0.22)] px-3 py-2">
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => add(product)}
          className="w-full rounded-full py-2 text-[11px] tracking-[0.14em] text-white/85 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:text-white/35"
        >
          {product.inStock ? "Quick add" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}
