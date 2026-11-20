"use client";

import Link from "next/link";
import { BOUTIQUE } from "@/lib/catalog";
import { ProductCard } from "@/components/shop/ProductCard";

export default function BoutiquePage() {
  return (
    <div className="bg-void pt-28 text-mist">
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="hero-atmosphere absolute inset-0 opacity-90" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20 lg:px-14">
          <h1 className="title-italic text-[clamp(3rem,7vw,4.5rem)] leading-none">Collections</h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mute">
            Exclusive drops for the Leonida night house — same cinematic system as the lobby.
          </p>
          <div id="collections" className="mt-10 flex flex-wrap gap-2">
            {["All", "Apparel", "Accessories", "Jewelry", "Print"].map((c, i) => (
              <span
                key={c}
                className={`glass-chip px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] ${
                  i === 0 ? "glass-chip-active text-hot" : "text-white/65"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-14">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl tracking-[0.08em] text-white">Featured</h2>
          <Link href="/shop" className="text-[12px] tracking-[0.08em] text-hot hover:text-white">
            Night Pass tracks →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {BOUTIQUE.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
