"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOUTIQUE, JOURNAL_POSTS } from "@/lib/catalog";
import { HeroScene } from "./hero/HeroScene";
import { ProductCard } from "./shop/ProductCard";

/**
 * Unified cinematic hero: one keyed scene (character + car + highway),
 * left type overlay, glass conversion chrome. Not affiliated with Rockstar.
 */

export function LandingPage() {
  return (
    <div className="landing-universe text-mist">
      <section className="relative min-h-[100svh] overflow-hidden pt-20">
        <HeroScene stillSrc="/media/hero/leonida-scene.png" videoSrc={null} />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] items-center px-6 pb-12 pt-8 md:px-10 lg:px-14">
          <div className="relative z-20 flex w-full max-w-xl flex-col justify-center md:max-w-[34rem]">
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
              className="hero-display max-w-[11ch] font-display text-[3.6rem] leading-[0.88] tracking-[0.04em] text-mist sm:text-[5.5rem] lg:text-[6.75rem]"
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
              className="mt-6 max-w-[28rem] text-[15px] leading-[1.7] text-mute"
            >
              Your gateway to the Vice City lifestyle. Discover exclusive collections, explore the
              culture, and unlock the Leonida experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
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
              className="glass-bar mt-10 grid max-w-md grid-cols-3 overflow-hidden"
            >
              {[
                ["Drops", "Live"],
                ["Pass", "Open"],
                ["Orders", "0"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`px-3 py-3 text-center ${i > 0 ? "border-l border-[rgba(150,200,255,0.25)]" : ""}`}
                >
                  <p className="text-[10px] tracking-[0.16em] text-white/60">{k}</p>
                  <p className="mt-1 font-display text-2xl tracking-wide text-white">{v}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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

      <section className="bg-void py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-champagne">BOUTIQUE</p>
              <h2 className="mt-2 font-display text-5xl tracking-[0.06em] text-mist md:text-6xl">
                NEW ARRIVALS
              </h2>
            </div>
            <Link
              href="/boutique"
              className="text-[13px] tracking-[0.1em] text-mute underline decoration-mist/20 underline-offset-4 hover:text-mist"
            >
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
                  <span className="font-serif text-2xl text-mist md:col-span-4 md:text-3xl">
                    {post.title}
                  </span>
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
