"use client";

import { useEffect, useMemo, useState } from "react";
import { LEONIDA_MAP, mapEmbedUrl } from "@/lib/map";

type Props = {
  /** Shorter embed for landing teaser */
  compact?: boolean;
  className?: string;
};

export function LeonidaLiveMap({ compact = false, className = "" }: Props) {
  const [region, setRegion] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const src = useMemo(() => mapEmbedUrl(region || undefined), [region]);

  // Mount iframe only on the client so password-manager extensions
  // (e.g. Dashlane data-dashlane-frameid) cannot cause SSR hydration mismatches.
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {!compact && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setLoaded(false);
              setRegion("");
            }}
            className={`glass-chip px-3 py-1.5 text-[11px] tracking-[0.08em] ${
              !region ? "glass-chip-active text-white" : "text-white/70"
            }`}
          >
            All Leonida
          </button>
          {LEONIDA_MAP.regions.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => {
                setLoaded(false);
                setRegion(r.id);
              }}
              className={`glass-chip px-3 py-1.5 text-[11px] tracking-[0.08em] ${
                region === r.id ? "glass-chip-active text-white" : "text-white/70"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      )}

      <div
        className={`relative overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#0c0a14] shadow-[0_0_40px_rgba(255,45,111,0.12)] ${
          compact ? "aspect-[16/11] min-h-[280px]" : "aspect-[16/10] min-h-[420px] md:min-h-[560px]"
        }`}
      >
        {(!mounted || !loaded) && (
          <div className="absolute inset-0 z-[1] flex items-center justify-center bg-void/80 text-[13px] tracking-[0.12em] text-mute">
            Loading Leonida map…
          </div>
        )}
        {mounted && (
          <iframe
            key={src}
            src={src}
            title="Interactive Leonida map"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allow="fullscreen"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>

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
        . Not affiliated with Rockstar Games or Take-Two Interactive.
      </p>
    </div>
  );
}
