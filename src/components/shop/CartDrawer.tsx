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
            className="fixed inset-0 z-[60] bg-void/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="glass-panel fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-mist/15"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
          >
            <div className="flex items-center justify-between border-b border-mist/10 px-5 py-4">
              <h2 className="font-display text-2xl tracking-[0.12em] text-mist">BAG</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[12px] tracking-[0.1em] text-mute hover:text-mist"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {lines.length === 0 ? (
                <p className="text-sm text-mute">Your bag is empty. The boutique is waiting.</p>
              ) : (
                <ul className="space-y-4">
                  {lines.map((line) => (
                    <li key={line.product.id} className="flex gap-3 border-b border-mist/10 pb-4">
                      <div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center border border-mist/10 font-display text-xl text-mist tile-glow-${line.product.accent}`}
                      >
                        {line.product.letter}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-mist">{line.product.name}</p>
                        <p className="text-[12px] text-mute">${line.product.priceUsd}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            className="h-7 w-7 border border-mist/20 text-mist"
                            onClick={() => setQty(line.product.id, line.qty - 1)}
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm text-mist">{line.qty}</span>
                          <button
                            type="button"
                            className="h-7 w-7 border border-mist/20 text-mist"
                            onClick={() => setQty(line.product.id, line.qty + 1)}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="ml-auto text-[11px] text-mute hover:text-mist"
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

            <div className="border-t border-mist/10 px-5 py-5">
              <div className="mb-4 flex justify-between text-sm">
                <span className="text-mute">Subtotal</span>
                <span className="font-medium text-mist">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mb-4 text-[11px] leading-relaxed text-mute">
                Checkout uses Leonida’s future payment rails. Cart state is saved locally — payment credentials are not configured yet.
              </p>
              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="btn-primary mb-2 flex w-full justify-center"
              >
                Checkout
              </Link>
              {lines.length > 0 && (
                <button type="button" onClick={clear} className="w-full py-2 text-[11px] text-mute hover:text-mist">
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
