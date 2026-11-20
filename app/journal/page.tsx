"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formatJournalDate, JOURNAL_POSTS } from "@/lib/catalog";
import { ScrollItem, ScrollReveal, ScrollStagger } from "@/components/motion/ScrollReveal";

export default function JournalPage() {
  const [featured, second, ...rest] = JOURNAL_POSTS;

  return (
    <div className="relative min-h-screen overflow-hidden bg-void pt-28 text-mist">
      <div className="vignette" aria-hidden />
      <div className="film-grain" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-24 md:px-10 lg:px-14">
        <ScrollReveal
          as="header"
          variant="rise"
          className="mb-14 grid gap-6 border-b border-white/10 pb-10 md:mb-20 md:grid-cols-12 md:items-end md:pb-14"
        >
          <div className="md:col-span-7">
            <p className="meta-label mb-4">Leonida Editorial</p>
            <h1 className="title-display text-[clamp(4.5rem,14vw,9rem)] text-white">Journal</h1>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-mute md:col-span-5 md:justify-self-end md:text-right">
            Launch heat, stream culture, and the map that ate the timeline — written for the night house, not the license.
          </p>
        </ScrollReveal>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/journal/${featured.slug}`}
              className="group grid gap-0 overflow-hidden border border-white/10 bg-night md:grid-cols-12"
            >
              <div className="relative min-h-[320px] overflow-hidden md:col-span-7 md:min-h-[560px] lg:col-span-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.coverImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-void/40" />
              </div>
              <div className="flex flex-col justify-end p-7 md:col-span-5 md:p-10 lg:col-span-4 lg:p-12">
                <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="meta-label text-hot">{featured.category}</span>
                  <span className="meta-label text-mute">
                    {formatJournalDate(featured.publishedAt)}
                  </span>
                  <span className="meta-label text-mute">{featured.readMinutes} min</span>
                </div>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white transition group-hover:text-mist">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-sm font-serif text-lg italic leading-snug text-mute">
                  {featured.dek}
                </p>
                <span className="meta-label mt-10 text-hot">Read feature →</span>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-12 md:gap-8">
          {second && (
            <ScrollReveal variant="clip" className="md:col-span-7">
              <Link
                href={`/journal/${second.slug}`}
                className="group block border border-white/10 bg-night"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={second.coverImage}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex gap-4">
                    <span className="meta-label text-hot">{second.category}</span>
                    <span className="meta-label text-mute">
                      {formatJournalDate(second.publishedAt)}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                    {second.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[14px] leading-relaxed text-mute">{second.dek}</p>
                </div>
              </Link>
            </ScrollReveal>
          )}

          <ScrollStagger as="ul" className="flex flex-col gap-4 md:col-span-5" stagger={0.1}>
            {rest.map((post) => (
              <ScrollItem key={post.slug} as="li">
                <Link
                  href={`/journal/${post.slug}`}
                  className="group grid grid-cols-[112px_1fr] gap-4 border border-white/10 bg-night/80 transition hover:border-champagne/30 md:grid-cols-[140px_1fr]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.coverImage}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-4 pr-4">
                    <span className="meta-label mb-2 text-hot">{post.category}</span>
                    <h3 className="font-serif text-xl leading-snug text-white md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13px] text-mute">{post.dek}</p>
                  </div>
                </Link>
              </ScrollItem>
            ))}
          </ScrollStagger>
        </div>
      </div>
    </div>
  );
}
