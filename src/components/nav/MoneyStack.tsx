"use client";

/**
 * Global Town Square branded money brick — continuous orbit on a white ground,
 * sits to the left of the LEONIDA wordmark.
 */
export function MoneyStack({ className = "" }: { className?: string }) {
  return (
    <span
      className={`money-stack ${className}`}
      aria-hidden="true"
      title="Global Town Square"
    >
      <span className="money-stack-stage">
        <span className="money-stack-ground" />
        <span className="money-stack-orbit">
          <img
            src="/media/brand/money-stack.webp"
            alt=""
            width={128}
            height={128}
            draggable={false}
            decoding="async"
          />
        </span>
      </span>
    </span>
  );
}
