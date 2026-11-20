"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { getJournalBySlug, JOURNAL_POSTS } from "@/lib/catalog";
import { PageAtmosphere } from "@/components/PageAtmosphere";

export default function JournalArticlePage() {
  const params = useParams();
  const slug = String(params.slug || "");
  const post = useMemo(() => getJournalBySlug(slug), [slug]);

  if (!post) {
    return (
      <div className="page-aurora-shell px-6 pt-32 text-mist">
        <PageAtmosphere />
        <div className="relative z-10">
          <p>Article not found.</p>
          <Link href="/journal" className="mt-4 inline-block text-champagne">
            Back to journal
          </Link>
        </div>
      </div>
    );
  }

  const related = JOURNAL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="page-aurora-shell pt-28 text-mist">
      <PageAtmosphere />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 py-10 md:px-10">
        <p className="text-[11px] tracking-[0.2em] text-champagne">{post.category}</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{post.title}</h1>
        <p className="mt-6 font-serif text-xl italic text-mute">{post.dek}</p>
        <div
          className={`relative mt-10 min-h-[220px] overflow-hidden border border-mist/10 tile-glow-${post.coverAccent} md:min-h-[320px]`}
        >
          {"coverImage" in post && post.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}
        </div>
        <div className="prose-night mt-10 max-w-[65ch] text-[16px] leading-[1.8] text-mist/80">
          <p>{post.body}</p>
        </div>
        <Link href="/journal" className="mt-12 inline-block text-[12px] tracking-[0.12em] text-mute hover:text-mist">
          ← Journal
        </Link>
      </div>

      <section className="relative z-10 border-t border-white/[0.08] px-6 py-14 md:px-10">
        <h2 className="mx-auto mb-6 max-w-[900px] font-display text-2xl tracking-[0.1em]">RELATED</h2>
        <ul className="mx-auto max-w-[900px] divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {related.map((p) => (
            <li key={p.slug}>
              <Link href={`/journal/${p.slug}`} className="block py-6 hover:text-champagne">
                <span className="font-serif text-xl">{p.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
