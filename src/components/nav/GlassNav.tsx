"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { useCart } from "@/lib/cart";

const LINKS = [
  { href: "/#discover", label: "Discover" },
  { href: "/boutique", label: "Boutique" },
  { href: "/boutique#collections", label: "Collections" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export function GlassNav() {
  const pathname = usePathname();
  const { user, ready, openAuth, logout } = useAuth();
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-300 md:px-6 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <div
          className={`glass-nav flex w-full max-w-[1280px] items-center justify-between gap-4 px-4 transition-all duration-300 md:px-6 ${
            scrolled ? "h-14 bg-void/80" : "h-16 bg-void/55"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-baseline gap-2">
            <span className="font-display text-[1.35rem] tracking-[0.2em] text-mist">LEONIDA</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12px] font-medium tracking-[0.08em] text-mute transition hover:text-mist"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {!ready ? (
              <span className="hidden h-3 w-16 bg-mist/10 sm:block" aria-hidden />
            ) : user ? (
              <button
                type="button"
                onClick={logout}
                className="hidden text-[12px] text-mute transition hover:text-mist sm:inline"
              >
                {user.name}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => openAuth("login")}
                className="hidden text-[12px] tracking-[0.06em] text-mute transition hover:text-mist sm:inline"
              >
                Account
              </button>
            )}

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative border border-mist/15 px-3 py-1.5 text-[11px] tracking-[0.12em] text-mist transition hover:border-mist/35"
              aria-label="Open bag"
            >
              Bag
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center bg-magenta px-1 text-[9px] font-semibold text-mist">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              className="border border-mist/15 px-2.5 py-1.5 text-[11px] tracking-[0.1em] text-mist lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-void/90 pt-24 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-sm flex-col gap-1 px-6" aria-label="Mobile">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="border-b border-mist/10 py-4 font-display text-3xl tracking-[0.08em] text-mist"
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openAuth("login");
              }}
              className="mt-6 py-3 text-left text-sm tracking-[0.1em] text-mute"
            >
              Account
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
