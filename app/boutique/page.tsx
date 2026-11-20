"use client";

import Link from "next/link";
import { BOUTIQUE } from "@/lib/catalog";
import { ProductCard } from "@/components/shop/ProductCard";

export default function BoutiquePage() {
  return (
    <div className="bg-void pt-28 text-mist">
      <section className="relative overflow-hidden border-b border-mist/10">
        <div className="hero-atmosphere absolute inset-0 opacity-80" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-14">
          <p className="text-[11px] tracking-[0.24em] text-champagne">DIGITAL BOUTIQUE</p>
          <h1 className="mt-3 font-display text-6xl tracking-[0.06em] md:text-7xl">COLLECTIONS</h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mute">
            Exclusive drops for the Leonida night house. Same cinematic system as the lobby — not a bolted-on storefront.
          </p>
          <div id="collections" className="mt-8 flex flex-wrap gap-3">
            {["All", "Apparel", "Accessories", "Jewelry", "Print"].map((c) => (
              <span key={c} className="border border-mist/15 px-3 py-1.5 text-[11px] tracking-[0.12em] text-mute">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-14">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-3xl tracking-[0.08em]">FEATURED</h2>
          <Link href="/shop" className="text-[12px] tracking-[0.1em] text-mute hover:text-mist">
            Night Pass tracks →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BOUTIQUE.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
