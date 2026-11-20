import Link from "next/link";
import { JOURNAL_POSTS } from "@/lib/catalog";

export default function JournalPage() {
  const [featured, ...rest] = JOURNAL_POSTS;

  return (
    <div className="bg-void pt-28 text-mist">
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:px-14">
        <p className="text-[11px] tracking-[0.24em] text-champagne">LEONIDA NEWS</p>
        <h1 className="mt-3 font-display text-6xl tracking-[0.06em] md:text-7xl">JOURNAL</h1>
        <p className="mt-4 max-w-lg text-[15px] text-mute">
          A premium lifestyle dispatch for the night city — culture, ops, and the boutique.
        </p>

        {featured && (
          <Link
            href={`/journal/${featured.slug}`}
            className="glass-card mt-14 grid gap-8 p-6 transition md:grid-cols-2 md:p-10"
          >
            <div className={`flex min-h-[240px] items-end tile-glow-${featured.coverAccent} p-6`}>
              <span className="font-display text-5xl tracking-[0.06em]">{featured.category}</span>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-mute">{featured.dek}</p>
              <span className="mt-6 text-[12px] tracking-[0.12em] text-champagne">Read feature →</span>
            </div>
          </Link>
        )}

        <ul className="mt-6 divide-y divide-mist/10 border-y border-mist/10">
          {rest.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/journal/${post.slug}`}
                className="grid gap-3 py-10 transition hover:bg-mist/[0.02] md:grid-cols-12"
              >
                <span className="text-[11px] tracking-[0.16em] text-champagne md:col-span-2">{post.category}</span>
                <span className="font-serif text-2xl md:col-span-4 md:text-3xl">{post.title}</span>
                <span className="text-[14px] text-mute md:col-span-5 md:col-start-8">{post.dek}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
