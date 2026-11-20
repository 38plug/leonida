"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { formatJournalDate, getJournalBySlug, JOURNAL_POSTS } from "@/lib/catalog";
import { ScrollItem, ScrollReveal, ScrollStagger } from "@/components/motion/ScrollReveal";

export default function JournalArticlePage() {
  const params = useParams();
  const slug = String(params.slug || "");
  const post = useMemo(() => getJournalBySlug(slug), [slug]);

  if (!post) {
    return (
      <div className="bg-void px-6 pt-32 text-mist">
        <p>Article not found.</p>
        <Link href="/journal" className="mt-4 inline-block text-champagne">
          Back to journal
        </Link>
      </div>
    );
  }

  const related = JOURNAL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const paragraphs = post.body.split(/\n\n+/).filter(Boolean);

  return (
    <article className="relative min-h-screen overflow-hidden bg-void pt-24 text-mist md:pt-28">
      <div className="vignette" aria-hidden />
      <div className="film-grain" aria-hidden />

      <div className="relative z-10">
        {/* Editorial masthead — asymmetric magazine header */}
        <header className="mx-auto grid max-w-[1600px] gap-8 px-5 pb-8 pt-10 md:grid-cols-12 md:gap-10 md:px-10 md:pb-12 md:pt-14 lg:px-14">
          <div className="md:col-span-8 lg:col-span-7">
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="meta-label text-hot">{post.category}</span>
              <span className="meta-label text-mute">
                {formatJournalDate(post.publishedAt)}
              </span>
              <span className="meta-label text-mute">{post.readMinutes} min read</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.98] tracking-[-0.025em] text-white"
            >
              {post.title}
            </motion.h1>
          </div>
          <aside className="flex flex-col justify-end border-t border-white/10 pt-6 md:col-span-4 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:col-span-5 lg:pl-12">
            <p className="font-serif text-xl italic leading-snug text-mute md:text-2xl">{post.dek}</p>
            <p className="meta-label mt-8 text-champagne">By {post.author}</p>
          </aside>
        </header>

        {/* Full-bleed cinematic hero */}
        <div className="relative mx-auto max-w-[1760px] px-0 md:px-6 lg:px-10">
          <div className="media-project relative aspect-[16/9] overflow-hidden border-y border-white/10 md:aspect-[21/9] md:border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Body: controlled measure + pull quote breakout */}
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-14 md:grid-cols-12 md:gap-10 md:px-10 md:py-20 lg:px-14">
          <div className="hidden md:col-span-2 md:block lg:col-span-3">
            <div className="sticky top-28">
              <p className="meta-label mb-3 text-mute">Share the night</p>
              <Link href="/journal" className="meta-label text-hot transition hover:text-white">
                ← All dispatches
              </Link>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-6">
            {paragraphs.map((para, i) => (
              <ScrollReveal key={i} variant="rise" delay={i * 0.04}>
                {i === 1 && "pullQuote" in post && post.pullQuote ? (
                  <blockquote className="my-12 border-l border-hot pl-6 md:my-16 md:pl-8">
                    <p className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] italic leading-snug text-white">
                      {post.pullQuote}
                    </p>
                  </blockquote>
                ) : null}
                <p className="mb-7 text-[17px] leading-[1.85] text-mist/88 md:text-[18px]">{para}</p>
              </ScrollReveal>
            ))}

            <div className="mt-14 border-t border-white/10 pt-8 md:hidden">
              <Link href="/journal" className="meta-label text-hot">
                ← All dispatches
              </Link>
            </div>
          </div>

          <aside className="md:col-span-2 lg:col-span-3">
            <div className="sticky top-28 border border-white/10 bg-night/60 p-5 backdrop-blur-sm">
              <p className="meta-label mb-4 text-champagne">In this issue</p>
              <ul className="space-y-4">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/journal/${p.slug}`} className="group block">
                      <span className="meta-label text-hot">{p.category}</span>
                      <span className="mt-1 block font-serif text-lg leading-snug text-white transition group-hover:text-champagne">
                        {p.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/boutique"
                className="btn-primary mt-8 inline-flex w-full justify-center text-center"
              >
                Enter Boutique
              </Link>
            </div>
          </aside>
        </div>

        <ScrollReveal
          as="section"
          variant="clip"
          className="border-t border-white/10 bg-night/40 px-5 py-16 md:px-10 lg:px-14"
        >
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2 className="title-display text-4xl text-white md:text-5xl">More from Leonida</h2>
              <Link href="/journal" className="meta-label text-hot">
                View all →
              </Link>
            </div>
            <ScrollStagger className="grid gap-5 md:grid-cols-3 md:gap-6" stagger={0.1}>
              {related.map((p) => (
                <ScrollItem key={p.slug}>
                  <Link href={`/journal/${p.slug}`} className="group block">
                    <div className="relative mb-4 aspect-[16/10] overflow-hidden border border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.coverImage}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <span className="meta-label text-hot">{p.category}</span>
                    <h3 className="mt-2 font-serif text-2xl leading-snug text-white">{p.title}</h3>
                  </Link>
                </ScrollItem>
              ))}
            </ScrollStagger>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
