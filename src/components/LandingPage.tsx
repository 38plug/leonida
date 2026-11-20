"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOUTIQUE, formatJournalDate, JOURNAL_POSTS } from "@/lib/catalog";
import { HeroScene } from "./hero/HeroScene";
import { ProductCard } from "./shop/ProductCard";
import { LeonidaLiveMap } from "./map/LeonidaLiveMap";

/**
 * Cinematic night-house landing — photography leads, chrome recedes.
 * Not affiliated with Rockstar Games.
 */

export function LandingPage() {
  const [feature, ...restPosts] = JOURNAL_POSTS;

  return (
    <div className="relative text-mist">
      <section className="relative min-h-[100svh] overflow-hidden">
        <HeroScene stillSrc="/media/hero/leonida-scene.png" videoSrc={null} />
        <div className="vignette" aria-hidden />
        <div className="film-grain" aria-hidden />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] items-end px-5 pb-14 pt-28 sm:px-8 md:items-center md:px-12 md:pb-20 lg:px-16">
          <div className="relative z-20 flex w-full max-w-2xl flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="meta-label mb-5 text-champagne"
            >
              Night House · Est. Leonida
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="hero-display"
            >
              <span className="title-italic block text-[clamp(2.5rem,8vw,5.25rem)] leading-[0.9] text-hot">
                Vice City
              </span>
              <span className="title-display mt-2 block text-[clamp(3rem,11vw,7rem)] text-white">
                Never plays
                <br />
                by the rules.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-6 max-w-[28rem] text-[15px] leading-[1.75] text-white/78 sm:mt-8"
            >
              Exclusive collections, night-house culture, and the Leonida experience — original characters, original house.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-9 flex w-full flex-col gap-3 sm:mt-11 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
            >
              <Link href="/boutique" className="btn-primary w-full justify-center sm:w-auto">
                Enter the Boutique
              </Link>
              <Link
                href="/journal"
                className="meta-label inline-flex items-center justify-center gap-2 px-2 py-3 text-white/80 transition hover:text-hot sm:justify-start"
              >
                Read the Journal →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="discover"
        className="relative isolate overflow-hidden border-y border-white/[0.07] bg-night"
      >
        <div aria-hidden className="discover-band-bg pointer-events-none absolute inset-0 -z-10">
          <picture className="discover-band-photo">
            <source srcSet="/media/discover/discover-blur.webp" type="image/webp" />
            <img
              src="/media/discover/discover-blur.png"
              alt=""
              className="h-full w-full object-cover opacity-55"
              width={2400}
              height={900}
              decoding="async"
            />
          </picture>
        </div>
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-20 sm:px-8 md:grid-cols-12 md:gap-12 md:px-12 md:py-28 lg:px-16">
          <h2 className="title-display text-[clamp(3rem,8vw,5.5rem)] text-white md:col-span-5">
            Discover
          </h2>
          <p className="max-w-xl self-end text-[16px] leading-relaxed text-mist/85 md:col-span-6 md:col-start-7">
            Leonida is a cinematic night-city house — original characters, gated agents, and a boutique
            built for the night. Not affiliated with Rockstar Games.
          </p>
        </div>
      </section>

      <section id="map" className="border-b border-white/[0.07] bg-void py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
            <div>
              <h2 className="title-display text-[clamp(2.75rem,7vw,4.5rem)] text-white">Live map</h2>
              <p className="mt-3 max-w-md text-[14px] text-mute">
                Explore Leonida — Vice City to the Keys — on the live community map.
              </p>
            </div>
            <Link
              href="/map"
              className="meta-label border-b border-hot/50 pb-1 text-hot transition hover:border-hot hover:text-white"
            >
              Open full map →
            </Link>
          </div>
          <LeonidaLiveMap compact />
        </div>
      </section>

      <section className="bg-night py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-12 flex items-end justify-between gap-4">
            <h2 className="title-display text-[clamp(2.75rem,7vw,4.5rem)] text-white">Boutique</h2>
            <Link href="/boutique" className="meta-label text-hot">
              Shop all →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {BOUTIQUE.filter((p) => p.inStock !== false).slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/[0.07] bg-void py-20 md:py-28">
        <div className="film-grain" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-12 flex items-end justify-between gap-4">
            <h2 className="title-display text-[clamp(2.75rem,7vw,4.5rem)] text-white">
              Latest from Leonida
            </h2>
            <Link href="/journal" className="meta-label text-hot">
              Journal →
            </Link>
          </div>

          {feature && (
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
              <Link
                href={`/journal/${feature.slug}`}
                className="group border border-white/10 bg-night lg:col-span-8"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.coverImage}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-3 flex gap-4">
                    <span className="meta-label text-hot">{feature.category}</span>
                    <span className="meta-label text-mute">
                      {formatJournalDate(feature.publishedAt)}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[14px] text-mute">{feature.dek}</p>
                </div>
              </Link>

              <div className="flex flex-col gap-4 lg:col-span-4">
                {restPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/journal/${post.slug}`}
                    className="group grid flex-1 grid-cols-[100px_1fr] gap-4 border border-white/10 bg-night/70 p-0 transition hover:border-champagne/25"
                  >
                    <div className="relative min-h-[100px] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-col justify-center py-3 pr-4">
                      <span className="meta-label text-hot">{post.category}</span>
                      <h3 className="mt-1 font-serif text-xl leading-snug text-white">{post.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-white/[0.07] bg-void">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 py-12 text-[12px] text-mute sm:px-8 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
          <p className="font-display text-lg tracking-[0.18em] text-white/80">LEONIDA</p>
          <p>Not affiliated with Rockstar Games</p>
        </div>
      </footer>
    </div>
  );
}
