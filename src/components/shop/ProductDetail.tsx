"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { BoutiqueProduct } from "@/lib/catalog";
import { BOUTIQUE } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/shop/ProductCard";

export function ProductDetail({ product }: { product: BoutiqueProduct }) {
  const { add } = useCart();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [qty, setQty] = useState(1);

  const related = BOUTIQUE.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-void pt-28 text-mist">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 md:grid-cols-2 md:px-10 lg:px-14">
        <div
          className={`panel-card relative flex aspect-[4/5] items-center justify-center overflow-hidden tile-glow-${product.accent}`}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.seoTitle || product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <span className="font-display text-[8rem] tracking-wide text-white/80">
              {product.letter}
            </span>
          )}
          {product.badge && (
            <span className="tag-hot absolute left-4 top-4 z-10">{product.badge}</span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.2em] text-mute">{product.category}</p>
          <h1 className="mt-2 font-display text-5xl tracking-[0.06em] md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 text-xl text-champagne">
            {product.inStock
              ? `$${Number.isInteger(product.priceUsd) ? product.priceUsd : product.priceUsd.toFixed(2)}`
              : "Sold out"}
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">
            {product.description}
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <p className="mb-2 text-[11px] tracking-[0.14em] text-mute">Color</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`glass-chip px-3 py-1.5 text-[12px] ${
                      color === c ? "glass-chip-active text-white" : "text-white/70"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-[11px] tracking-[0.14em] text-mute">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`glass-chip px-3 py-1.5 text-[12px] ${
                      size === s ? "glass-chip-active text-white" : "text-white/70"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[11px] tracking-[0.14em] text-mute">Qty</p>
              <button
                type="button"
                className="glass-chip-btn flex h-8 w-8 items-center justify-center text-white"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="w-6 text-center">{qty}</span>
              <button
                type="button"
                className="glass-chip-btn flex h-8 w-8 items-center justify-center text-white"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            disabled={!product.inStock}
            onClick={() => add(product, qty)}
            className="btn-primary mt-10 w-full max-w-sm disabled:opacity-40"
          >
            {product.inStock ? "Add to bag" : "Sold out"}
          </button>
          <p className="mt-4 text-[12px] text-mute">
            Ships China → customer. Stock shown is editorial — live inventory wires later.
          </p>
        </div>
      </div>

      <section className="border-t border-mist/10 px-6 py-16 md:px-10 lg:px-14">
        <h2 className="mb-8 font-display text-3xl tracking-[0.08em]">RELATED</h2>
        <div className="mx-auto grid max-w-[1440px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
