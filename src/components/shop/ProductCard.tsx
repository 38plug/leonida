"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { BoutiqueProduct } from "@/lib/catalog";

export function ProductCard({ product }: { product: BoutiqueProduct }) {
  const { add } = useCart();

  return (
    <article className="panel-card group overflow-hidden">
      <Link href={`/boutique/${product.slug}`} className="block">
        <div
          className={`relative flex aspect-[4/5] items-center justify-center tile-glow-${product.accent}`}
        >
          {product.badge && (
            <span className="tag-hot absolute left-3 top-3">{product.badge}</span>
          )}
          <span className="font-display text-7xl tracking-wide text-white/70 transition duration-300 group-hover:scale-105 group-hover:text-white/90">
            {product.letter}
          </span>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void/80 to-transparent" />
        </div>
        <div className="space-y-1.5 px-4 py-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-mute">{product.category}</p>
          <h3 className="text-[15px] font-medium text-white">{product.name}</h3>
          <p className="text-[14px] font-semibold text-hot">
            {product.inStock ? `$${product.priceUsd}` : "Sold out"}
          </p>
        </div>
      </Link>
      <div className="border-t border-white/[0.06] px-4 py-3">
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => add(product)}
          className="w-full rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:bg-hot hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Quick add" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}
