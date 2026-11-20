"use client";

/**
 * Global Town Square money brick — continuous orbit, transparent (no plate).
 * Animated WebP keeps alpha reliable across browsers; WebM is a progressive backup.
 */
export function MoneyStack({ className = "" }: { className?: string }) {
  return (
    <span
      className={`money-stack ${className}`}
      aria-hidden="true"
      title="Global Town Square"
    >
      {/* Prefer animated WebP (true alpha). Video WebM is fallback for older Chromium. */}
      <picture>
        <source srcSet="/media/brand/money-orbit.webp" type="image/webp" />
        <img
          className="money-stack-video"
          src="/media/brand/money-orbit-poster.png"
          alt=""
          width={128}
          height={128}
          decoding="async"
          draggable={false}
        />
      </picture>
    </span>
  );
}
