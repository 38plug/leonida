"use client";

/**
 * Global Town Square money brick — continuous orbit video, transparent (no ground).
 * Sits to the left of the LEONIDA wordmark.
 */
export function MoneyStack({ className = "" }: { className?: string }) {
  return (
    <span
      className={`money-stack ${className}`}
      aria-hidden="true"
      title="Global Town Square"
    >
      <video
        className="money-stack-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/brand/money-orbit-poster.webp"
        width={128}
        height={128}
      >
        <source src="/media/brand/money-orbit.webm" type="video/webm" />
        <source src="/media/brand/money-orbit.mp4" type="video/mp4" />
      </video>
    </span>
  );
}
