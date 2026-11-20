"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOUTIQUE, JOURNAL_POSTS } from "@/lib/catalog";
import { HeroScene } from "./hero/HeroScene";
import { ProductCard } from "./shop/ProductCard";

/**
 * Cinematic night-house landing.
 * Visual language: hot-pink CTAs, charcoal panels, italic pink titles.
 * Not affiliated with Rockstar Games.
 */

export function LandingPage() {
  return (
    <div className="landing-universe text-mist">
      <section className="relative min-h-[100svh] overflow-hidden pt-[4.5rem] sm:pt-20">
        <HeroScene stillSrc="/media/hero/leonida-scene.png" videoSrc={null} />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1440px] items-end px-5 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:min-h-[calc(100svh-5rem)] md:items-center md:px-10 md:pb-20 lg:px-14">
          <div className="relative z-20 flex w-full max-w-xl flex-col justify-center md:max-w-[36rem]">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="hero-display"
            >
              <span className="title-italic block text-[clamp(2.25rem,9vw,5.5rem)] leading-[0.92]">
                Vice City
              </span>
              <span className="lettering-depth-display mt-1 block font-display text-[clamp(2.55rem,10vw,6.5rem)] leading-[0.86] tracking-[0.02em] text-white">
                NEVER PLAYS
                <br />
                BY THE RULES.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-5 max-w-[26rem] text-[14px] leading-[1.7] text-white/75 sm:mt-7 sm:text-[15px] sm:leading-[1.75] sm:text-mute"
            >
              Exclusive collections, night-house culture, and the Leonida experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-7 flex w-full flex-col gap-2.5 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
            >
              <Link href="/boutique" className="btn-primary w-full justify-center sm:w-auto">
                Enter the Boutique
              </Link>
              <Link href="/journal" className="btn-ghost w-full justify-center sm:w-auto">
                Read the Journal
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="discover"
        className="discover-band relative isolate overflow-hidden border-y border-white/[0.06]"
      >
        <div aria-hidden className="discover-band-bg pointer-events-none absolute inset-0 -z-10">
          <picture className="discover-band-photo">
            <source srcSet="/media/discover/discover-blur.webp" type="image/webp" />
            <img
              src="/media/discover/discover-blur.png"
              alt=""
              className="h-full w-full object-cover"
              width={2400}
              height={900}
              decoding="async"
            />
          </picture>
          <span className="discover-orb discover-orb-pink" />
          <span className="discover-orb discover-orb-purple" />
          <span className="discover-orb discover-orb-blue" />
          <span className="discover-orb discover-orb-magenta" />
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-20 md:grid-cols-12 md:gap-12 md:px-10 md:py-28 lg:px-14">
          <h2 className="title-italic text-[clamp(2.5rem,5vw,3.75rem)] leading-none md:col-span-5">
            Discover
          </h2>
          <p className="max-w-xl self-end text-[16px] leading-relaxed text-mist/85 md:col-span-6 md:col-start-7">
            Leonida is a cinematic night-city house — original characters, gated agents, and a boutique
            built for the night. Not affiliated with Rockstar Games.
          </p>
        </div>
      </section>

      <section className="bg-void py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="title-italic text-[clamp(2.5rem,5vw,3.75rem)] leading-none">
                New Arrivals
              </h2>
              <p className="mt-3 max-w-md text-[14px] text-mute">
                Drops for the night house — apparel, metal, and print.
              </p>
            </div>
            <Link
              href="/boutique"
              className="border-b border-hot/60 pb-0.5 text-[13px] font-semibold tracking-[0.08em] text-hot transition hover:border-hot hover:text-white"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {BOUTIQUE.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-night py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="mb-12 flex items-end justify-between gap-4">
            <h2 className="title-italic text-[clamp(2.5rem,5vw,3.75rem)] leading-none">
              Latest from Leonida
            </h2>
            <Link
              href="/journal"
              className="shrink-0 text-[13px] font-medium text-hot transition hover:text-white"
            >
              Journal →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-7">
            {JOURNAL_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="panel-card group flex flex-col overflow-hidden"
              >
                <div
                  className={`relative flex min-h-[180px] items-end p-5 tile-glow-${post.coverAccent}`}
                >
                  <span className="tag-hot">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl leading-snug text-white transition group-hover:text-hot">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-mute">{post.dek}</p>
                  <span className="mt-5 text-[12px] tracking-[0.08em] text-white/50 transition group-hover:text-hot">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] bg-void">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-12 text-[12px] text-mute md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <p className="font-display text-lg tracking-[0.18em] text-white/80">LEONIDA</p>
          <p>Not affiliated with Rockstar Games</p>
        </div>
      </footer>
    </div>
  );
}
