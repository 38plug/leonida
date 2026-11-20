"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { open, setOpen, lines, subtotal, setQty, remove, clear } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close bag"
            className="fixed inset-0 z-[60] bg-void/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="glass-panel fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-5">
              <h2 className="title-italic text-3xl">Bag</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="glass-chip-btn px-3 py-1.5 text-[12px] text-white/75"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {lines.length === 0 ? (
                <p className="text-sm text-mute">Your bag is empty. The boutique is waiting.</p>
              ) : (
                <ul className="space-y-3">
                  {lines.map((line) => (
                    <li key={line.product.id} className="panel-card flex gap-3 !rounded-xl p-3">
                      <div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg font-display text-xl text-white tile-glow-${line.product.accent}`}
                      >
                        {line.product.letter}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white">{line.product.name}</p>
                        <p className="text-[12px] text-hot">${line.product.priceUsd}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            className="glass-chip-btn flex h-7 w-7 items-center justify-center text-white"
                            onClick={() => setQty(line.product.id, line.qty - 1)}
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm text-white">{line.qty}</span>
                          <button
                            type="button"
                            className="glass-chip-btn flex h-7 w-7 items-center justify-center text-white"
                            onClick={() => setQty(line.product.id, line.qty + 1)}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="ml-auto text-[11px] text-mute hover:text-hot"
                            onClick={() => remove(line.product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-white/[0.08] px-5 py-5">
              <div className="mb-4 flex justify-between text-sm">
                <span className="text-mute">Subtotal</span>
                <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mb-4 text-[11px] leading-relaxed text-mute">
                Checkout uses Leonida’s future payment rails. Cart state is saved locally — payment
                credentials are not configured yet.
              </p>
              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="btn-primary mb-2 flex w-full justify-center"
              >
                Checkout
              </Link>
              {lines.length > 0 && (
                <button
                  type="button"
                  onClick={clear}
                  className="w-full py-2 text-[11px] text-mute hover:text-white"
                >
                  Clear bag
                </button>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
