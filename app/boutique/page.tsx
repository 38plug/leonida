"use client";

import Link from "next/link";
import { BOUTIQUE } from "@/lib/catalog";
import { ProductCard } from "@/components/shop/ProductCard";

export default function BoutiquePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-void pt-28 text-mist">
      <div className="vignette" aria-hidden />
      <div className="film-grain" aria-hidden />

      <section className="relative border-b border-white/[0.07]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_0%,rgba(255,45,111,0.12),transparent_55%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(62,200,255,0.06),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16">
          <p className="meta-label mb-4 text-champagne">Collections</p>
          <h1 className="title-display text-[clamp(3.5rem,10vw,7rem)] text-white">Boutique</h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mute">
            Exclusive drops for the Leonida night house — same cinematic system as the lobby.
          </p>
          <div id="collections" className="mt-10 flex flex-wrap gap-2">
            {["All", "Apparel", "Accessories", "Jewelry", "Print"].map((c, i) => (
              <span
                key={c}
                className={`border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                  i === 0
                    ? "border-hot/50 bg-hot/10 text-hot"
                    : "border-white/15 text-white/55"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1600px] px-5 py-16 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="title-display text-4xl text-white md:text-5xl">Featured</h2>
          <Link href="/#discover" className="meta-label text-mute hover:text-hot">
            Back to house →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {BOUTIQUE.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
