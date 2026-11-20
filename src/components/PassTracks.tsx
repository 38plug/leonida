"use client";

import { COMMERCE, PREMIUM_TRACK, STANDARD_TRACK } from "@/lib/catalog";
import { ProductTile } from "./ProductTile";

export function PassTracks() {
  return (
    <div id="catalog" className="space-y-8 px-5 pb-12">
      <div className="space-y-2">
        <div className="relative h-px overflow-hidden bg-mist/10">
          <div className="absolute inset-y-0 left-0 bg-gold" style={{ width: `${Math.max(COMMERCE.progressPct, 2)}%` }} />
        </div>
        <p className="text-[12px] text-mute">
          Progress {COMMERCE.progressPct}% · first order unlocks the rail · {COMMERCE.orders} orders · $
          {COMMERCE.revenueUsd} revenue
        </p>
      </div>

      <TrackRow title="Standard" accent="pink" products={STANDARD_TRACK} />
      <TrackRow title="Premium" accent="gold" products={PREMIUM_TRACK} />
    </div>
  );
}

function TrackRow({
  title,
  accent,
  products,
}: {
  title: string;
  accent: "pink" | "gold";
  products: typeof STANDARD_TRACK;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline gap-3 border-b border-mist/[0.08] pb-2">
        <h2 className={`font-serif text-xl ${accent === "pink" ? "text-mist" : "text-gold"}`}>{title}</h2>
        <span className="text-[11px] uppercase tracking-[0.16em] text-mute">Track</span>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {products.map((p, i) => (
          <ProductTile key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
