import Link from "next/link";
import { JOURNAL_POSTS } from "@/lib/catalog";
import { PageAtmosphere } from "@/components/PageAtmosphere";

export default function JournalPage() {
  const [featured, ...rest] = JOURNAL_POSTS;

  return (
    <div className="page-aurora-shell pt-28 text-mist">
      <PageAtmosphere />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:px-14">
        <h1 className="title-italic text-[clamp(3rem,7vw,4.5rem)] leading-none">Journal</h1>
        <p className="type-project-soft mt-4 max-w-lg text-[15px] text-mute">
          Hottest Leonida dispatches — launch night, stream records, and the map that ate the timeline.
        </p>

        {featured && (
          <Link
            href={`/journal/${featured.slug}`}
            className="panel-card media-project mt-14 grid gap-0 overflow-hidden transition md:grid-cols-2"
          >
            <div
              className={`relative flex min-h-[260px] items-end overflow-hidden p-6 tile-glow-${featured.coverAccent} md:p-8`}
            >
              {"coverImage" in featured && featured.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={featured.coverImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/25 to-transparent" />
              <span className="tag-hot relative z-10">{featured.category}</span>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <h2 className="type-project font-serif text-3xl text-white md:text-4xl">
                {featured.title}
              </h2>
              <p className="type-project-soft mt-4 text-[15px] leading-relaxed text-mute">
                {featured.dek}
              </p>
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
                className="panel-card media-project-sm grid gap-3 overflow-hidden p-0 transition md:grid-cols-12 md:items-stretch md:gap-0"
              >
                <div className="relative min-h-[120px] overflow-hidden md:col-span-3">
                  {"coverImage" in post && post.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.coverImage}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className={`absolute inset-0 tile-glow-${post.coverAccent}`} />
                  )}
                </div>
                <div className="flex flex-col gap-3 p-5 md:col-span-9 md:grid md:grid-cols-9 md:items-center md:gap-8 md:p-6">
                  <span className="tag-hot w-fit md:col-span-2">{post.category}</span>
                  <span className="type-project font-serif text-2xl text-white md:col-span-3 md:text-3xl">
                    {post.title}
                  </span>
                  <span className="type-project-soft text-[14px] text-mute md:col-span-4">
                    {post.dek}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
