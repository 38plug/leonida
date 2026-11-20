"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function CheckoutPage() {
  const { lines, subtotal } = useCart();

  return (
    <div className="bg-void px-6 pt-32 text-mist md:px-10">
      <div className="mx-auto max-w-lg">
        <h1 className="font-display text-5xl tracking-[0.08em]">CHECKOUT</h1>
        <p className="mt-4 text-sm leading-relaxed text-mute">
          Payment infrastructure is not wired in this environment. Your bag ({lines.length} line
          {lines.length === 1 ? "" : "s"}, ${subtotal.toFixed(2)}) is stored locally. Connect Stripe
          or another processor credentials to complete live checkout — we will not pretend it works.
        </p>
        <ul className="mt-8 space-y-3 border-y border-mist/10 py-6">
          {lines.map((l) => (
            <li key={l.product.id} className="flex justify-between text-sm">
              <span>
                {l.product.name} × {l.qty}
              </span>
              <span>${(l.product.priceUsd * l.qty).toFixed(2)}</span>
            </li>
          ))}
          {lines.length === 0 && <li className="text-mute">Bag is empty.</li>}
        </ul>
        <Link href="/boutique" className="btn-ghost mt-8 inline-flex">
          Return to boutique
        </Link>
      </div>
    </div>
  );
}
