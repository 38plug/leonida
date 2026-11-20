"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOUTIQUE, JOURNAL_POSTS } from "@/lib/catalog";
import { HeroCharacter } from "./hero/HeroCharacter";
import { ProductCard } from "./shop/ProductCard";

/**
 * GTA-style boosting UI reference (Dribbble 27133946) adapted for Leonida:
 * left bold headline + CTA, right character centerpiece, glass floating UI,
 * cinematic dark magenta/cyan atmosphere. Original character via Krea.
 */

export function LandingPage() {
  return (
    <div className="landing-universe text-mist">
      {/* HERO — Dribbble-style character conversion composition */}
      <section className="relative min-h-[100svh] overflow-hidden pt-20">
        <div className="hero-atmosphere absolute inset-0" aria-hidden />
        <div className="hero-city-fade absolute inset-0" aria-hidden />
        <div className="landing-hero-grain absolute inset-0 z-[1]" aria-hidden />

        {/* Mobile character — anchored in first viewport */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[52vh] md:hidden">
          <HeroCharacter src="/media/character/leonida-hero.png" />
          <div
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void to-transparent"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] grid-cols-1 items-center gap-6 px-6 pb-10 md:grid-cols-12 md:gap-4 md:px-10 lg:px-14">
          <div className="relative z-20 flex flex-col justify-center pb-[42vh] pt-6 md:col-span-6 md:pb-10 md:pt-10 lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-5 text-[11px] font-medium tracking-[0.28em] text-champagne"
            >
              LEONIDA NIGHT HOUSE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-display max-w-[11ch] font-display text-[3.4rem] leading-[0.88] tracking-[0.04em] text-mist sm:text-[5.5rem] lg:text-[6.75rem]"
            >
              VICE CITY
              <br />
              NEVER PLAYS
              <br />
              <span className="text-gradient-dusk">BY THE RULES.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-5 max-w-[28rem] text-[14px] leading-[1.65] text-mute sm:mt-7 sm:text-[15px] sm:leading-[1.7]"
            >
              Your gateway to the Vice City lifestyle. Discover exclusive collections, explore the
              culture, and unlock the Leonida experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
            >
              <Link href="/boutique" className="btn-primary">
                Enter the Boutique
              </Link>
              <Link href="/journal" className="btn-ghost">
                Explore the Journal
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="glass-chip mt-8 grid max-w-md grid-cols-3 gap-px overflow-hidden border border-mist/10 sm:mt-10"
            >
              {[
                ["Drops", "Live"],
                ["Pass", "Open"],
                ["Orders", "0"],
              ].map(([k, v]) => (
                <div key={k} className="bg-void/40 px-3 py-3 text-center backdrop-blur-md">
                  <p className="text-[10px] tracking-[0.16em] text-mute">{k}</p>
                  <p className="mt-1 font-display text-2xl tracking-wide text-mist">{v}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative z-10 hidden h-[min(90vh,860px)] md:col-span-6 md:block lg:col-span-7">
            <HeroCharacter src="/media/character/leonida-hero.png" />
          </div>
        </div>
      </section>

      {/* Discover strip */}
      <section id="discover" className="border-y border-mist/10 bg-ink/80">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 md:grid-cols-12 md:px-10 lg:px-14">
          <h2 className="font-display text-5xl tracking-[0.08em] text-mist md:col-span-4 md:text-6xl">
            DISCOVER
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-mute md:col-span-7 md:col-start-6 md:self-end">
            Leonida is a cinematic night-city house — original characters, gated agents, and a boutique
            that ships China → door. Not affiliated with Rockstar Games.
          </p>
        </div>
      </section>

      {/* Featured boutique */}
      <section className="bg-void py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-champagne">BOUTIQUE</p>
              <h2 className="mt-2 font-display text-5xl tracking-[0.06em] text-mist md:text-6xl">
                NEW ARRIVALS
              </h2>
            </div>
            <Link href="/boutique" className="text-[13px] tracking-[0.1em] text-mute underline decoration-mist/20 underline-offset-4 hover:text-mist">
              View all
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BOUTIQUE.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Journal teaser */}
      <section className="border-t border-mist/10 bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="mb-12 flex items-end justify-between gap-4">
            <h2 className="font-display text-5xl tracking-[0.06em] text-mist md:text-6xl">JOURNAL</h2>
            <Link href="/journal" className="text-[13px] tracking-[0.1em] text-mute hover:text-mist">
              Read more
            </Link>
          </div>
          <ul className="divide-y divide-mist/10 border-y border-mist/10">
            {JOURNAL_POSTS.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/journal/${post.slug}`}
                  className="grid gap-3 py-10 transition hover:bg-mist/[0.02] md:grid-cols-12 md:gap-8"
                >
                  <span className="text-[11px] tracking-[0.18em] text-champagne md:col-span-2">
                    {post.category}
                  </span>
                  <span className="font-serif text-2xl text-mist md:col-span-4 md:text-3xl">{post.title}</span>
                  <span className="text-[14px] leading-relaxed text-mute md:col-span-5 md:col-start-8">
                    {post.dek}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-mist/10 bg-void">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-10 text-[12px] text-mute md:flex-row md:justify-between md:px-10 lg:px-14">
          <p>Vice Ops · Leonida</p>
          <p>Not affiliated with Rockstar Games · China → customer</p>
        </div>
      </footer>
    </div>
  );
}
