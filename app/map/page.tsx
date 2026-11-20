import type { Metadata } from "next";
import Link from "next/link";
import { LeonidaLiveMap } from "@/components/map/LeonidaLiveMap";

export const metadata: Metadata = {
  title: "Leonida Live Map — Explore Vice City & the State",
  description:
    "Interactive live map of Leonida — Vice City, the Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga. Fan-made companion map. Not affiliated with Rockstar Games.",
  openGraph: {
    title: "Leonida Live Map",
    description: "Explore the state of Leonida on the live interactive map.",
  },
};

export default function MapPage() {
  return (
    <div className="bg-void pt-28 text-mist">
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-6 sm:px-6 md:px-10 md:pb-24 lg:px-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
          <div>
            <p className="text-[11px] tracking-[0.24em] text-champagne">LIVE MAP</p>
            <h1 className="mt-2 font-display text-5xl tracking-[0.06em] md:text-6xl">LEONIDA</h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute">
              Pan the state — beaches, wetlands, keys, and the night strip. Spoiler-aware fan map that
              updates as locations land.
            </p>
          </div>
          <Link
            href="/boutique"
            className="border-b border-hot/60 pb-0.5 text-[13px] font-semibold tracking-[0.08em] text-hot transition hover:border-hot hover:text-white"
          >
            Shop the night →
          </Link>
        </div>

        <LeonidaLiveMap />
      </div>
    </div>
  );
}
