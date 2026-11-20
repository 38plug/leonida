/**
 * Fan-made Leonida interactive map embed.
 * Not affiliated with Rockstar Games / Take-Two.
 */
export const LEONIDA_MAP = {
  /** Primary embed (Leonida Explorer — frame-ancestors *, spoiler-aware). */
  embedSrc: "https://leonidaexplorer.com/map/embed/",
  fullSrc: "https://leonidaexplorer.com/map/",
  creditName: "Leonida Explorer",
  creditHref: "https://leonidaexplorer.com/map/",
  /** Optional region deep-link: vice-city | leonida-keys | grassrivers | port-gellhorn | ambrosia | mount-kalaga */
  regions: [
    { id: "vice-city", label: "Vice City" },
    { id: "leonida-keys", label: "Leonida Keys" },
    { id: "grassrivers", label: "Grassrivers" },
    { id: "port-gellhorn", label: "Port Gellhorn" },
    { id: "ambrosia", label: "Ambrosia" },
    { id: "mount-kalaga", label: "Mount Kalaga" },
  ] as const,
} as const;

export function mapEmbedUrl(region?: string) {
  if (!region) return LEONIDA_MAP.embedSrc;
  const ok = LEONIDA_MAP.regions.some((r) => r.id === region);
  if (!ok) return LEONIDA_MAP.embedSrc;
  const base = LEONIDA_MAP.embedSrc.replace(/\/?$/, "/");
  return `${base}?region=${encodeURIComponent(region)}`;
}
