"use client";

import { useEffect, useRef, useState } from "react";
import { LEONIDA_MAP } from "@/lib/map";

type Props = {
  /** Shorter embed for landing teaser */
  compact?: boolean;
  className?: string;
};

export function LeonidaLiveMap({ compact = false, className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const src = LEONIDA_MAP.embedSrc;

  // Mount iframe only on the client so password-manager extensions
  // cannot cause SSR hydration mismatches.
  useEffect(() => {
    setMounted(true);
  }, []);

  // After load, nudge layout so tile maps recalculate size (avoids soft/letterboxed canvases).
  useEffect(() => {
    if (!loaded || !frameRef.current) return;
    const el = frameRef.current;
    const bump = () => {
      el.style.height = "99.5%";
      requestAnimationFrame(() => {
        el.style.height = "100%";
      });
    };
    bump();
    const t = window.setTimeout(bump, 400);
    return () => window.clearTimeout(t);
  }, [loaded]);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Fixed viewport height — avoid aspect-ratio boxes that letterbox/squash map tiles */}
      <div
        className={`relative w-full overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#07060c] shadow-[0_0_40px_rgba(255,45,111,0.12)] ${
          compact
            ? "h-[min(52vh,420px)] min-h-[300px]"
            : "h-[min(78vh,820px)] min-h-[520px]"
        }`}
      >
        {(!mounted || !loaded) && (
          <div className="absolute inset-0 z-[1] flex items-center justify-center bg-void/80 text-[13px] tracking-[0.12em] text-mute">
            Loading Leonida map…
          </div>
        )}
        {mounted && (
          <iframe
            ref={frameRef}
            src={src}
            title="Interactive Leonida map"
            className="block h-full w-full border-0"
            loading="eager"
            allow="fullscreen"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] leading-relaxed text-mute">
          Live fan map via{" "}
          <a
            href={LEONIDA_MAP.creditHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-hot/90 underline-offset-2 hover:text-hot hover:underline"
          >
            {LEONIDA_MAP.creditName}
          </a>
          {compact ? "" : " — Filters inside the map for places & layers"}
          . Not affiliated with Rockstar Games or Take-Two Interactive.
        </p>
        <a
          href={LEONIDA_MAP.fullSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium tracking-[0.06em] text-hot/90 underline-offset-2 hover:text-hot hover:underline"
        >
          Open full map ↗
        </a>
      </div>
    </div>
  );
}
