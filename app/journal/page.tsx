import Link from "next/link";
import { JOURNAL_POSTS } from "@/lib/catalog";

export default function JournalPage() {
  const [featured, ...rest] = JOURNAL_POSTS;

  return (
    <div className="bg-void pt-28 text-mist">
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:px-14">
        <h1 className="title-italic text-[clamp(3rem,7vw,4.5rem)] leading-none">Journal</h1>
        <p className="mt-4 max-w-lg text-[15px] text-mute">
          Lifestyle dispatch for the night city — culture, ops, and the boutique.
        </p>

        {featured && (
          <Link
            href={`/journal/${featured.slug}`}
            className="panel-card mt-14 grid gap-0 overflow-hidden transition md:grid-cols-2"
          >
            <div
              className={`flex min-h-[260px] items-end p-6 tile-glow-${featured.coverAccent} md:p-8`}
            >
              <span className="tag-hot">{featured.category}</span>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <h2 className="font-serif text-3xl text-white md:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-mute">{featured.dek}</p>
              <span className="mt-8 text-[12px] font-medium tracking-[0.1em] text-hot">
                Read feature →
              </span>
            </div>
          </Link>
        )}

        <ul className="mt-8 space-y-3">
          {rest.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/journal/${post.slug}`}
                className="panel-card grid gap-3 p-5 transition md:grid-cols-12 md:items-center md:gap-8 md:p-6"
              >
                <span className="tag-hot w-fit md:col-span-2">{post.category}</span>
                <span className="font-serif text-2xl text-white md:col-span-4 md:text-3xl">
                  {post.title}
                </span>
                <span className="text-[14px] text-mute md:col-span-5 md:col-start-8">{post.dek}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
