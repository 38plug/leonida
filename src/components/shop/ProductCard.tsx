"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { BoutiqueProduct } from "@/lib/catalog";

export function ProductCard({ product }: { product: BoutiqueProduct }) {
  const { add } = useCart();

  return (
    <article className="group border border-mist/10 bg-ink/60 transition hover:border-mist/25">
      <Link href={`/boutique/${product.slug}`} className="block">
        <div
          className={`relative flex aspect-[4/5] items-center justify-center tile-glow-${product.accent}`}
        >
          {product.badge && (
            <span className="absolute left-3 top-3 text-[10px] tracking-[0.16em] text-champagne">
              {product.badge}
            </span>
          )}
          <span className="font-display text-6xl tracking-wide text-mist/80 transition group-hover:scale-105">
            {product.letter}
          </span>
        </div>
        <div className="space-y-1 px-3 py-4">
          <h3 className="text-sm font-medium text-mist">{product.name}</h3>
          <p className="text-[12px] text-mute">
            {product.inStock ? `$${product.priceUsd}` : "Sold out"}
          </p>
        </div>
      </Link>
      <div className="border-t border-mist/10 px-3 py-2">
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => add(product)}
          className="w-full py-2 text-[11px] tracking-[0.14em] text-mist transition hover:text-white disabled:cursor-not-allowed disabled:text-mute/50"
        >
          {product.inStock ? "Quick add" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}
