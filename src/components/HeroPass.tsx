"use client";

import { COMMERCE } from "@/lib/catalog";

export function HeroPass() {
  return (
    <section id="pass" className="hero-atmosphere relative overflow-hidden px-8 pb-6 pt-10">
      <h1 className="relative font-display text-7xl leading-none tracking-[0.06em] text-mist md:text-8xl">
        NIGHT
      </h1>
      <p className="relative mt-1 font-serif text-4xl italic leading-none text-coral md:text-5xl">Pass</p>
      <p className="relative mt-4 text-[13px] text-mute">
        Event open · Points {COMMERCE.points} / {COMMERCE.pointsMax}
      </p>
    </section>
  );
}
