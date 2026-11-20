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
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-3 transition-all duration-500 md:px-6 ${
          scrolled ? "pt-3" : "pt-4 md:pt-5"
        }`}
      >
        <div
          className={`glass-nav flex w-full max-w-[1180px] items-center justify-between gap-3 px-3 pl-5 transition-all duration-500 md:gap-4 md:px-4 md:pl-6 ${
            scrolled ? "glass-nav-scrolled h-12 md:h-13" : "h-14 md:h-15"
          }`}
          style={{ height: scrolled ? 52 : 58 }}
        >
          <Link href="/" className="flex shrink-0 items-baseline gap-2">
            <span className="font-display text-[1.25rem] tracking-[0.22em] text-white drop-shadow-sm md:text-[1.35rem]">
              LEONIDA
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 rounded-full bg-white/[0.06] p-1 ring-1 ring-white/10 lg:flex"
            aria-label="Primary"
          >
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="glass-nav-link text-[12px] font-medium tracking-[0.06em] text-white/75"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {!ready ? (
              <span className="hidden h-8 w-16 rounded-full bg-white/10 sm:block" aria-hidden />
            ) : user ? (
              <button
                type="button"
                onClick={logout}
                className="glass-chip-btn hidden px-3.5 py-1.5 text-[11px] tracking-[0.06em] text-white/85 sm:inline"
              >
                {user.name}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => openAuth("login")}
                className="glass-chip-btn hidden px-3.5 py-1.5 text-[11px] tracking-[0.08em] text-white/85 sm:inline"
              >
                Account
              </button>
            )}

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="glass-chip-btn relative px-3.5 py-1.5 text-[11px] tracking-[0.12em] text-white"
              aria-label="Open bag"
            >
              Bag
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-magenta px-1 text-[9px] font-semibold text-white shadow-sm">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              className="glass-chip-btn px-3 py-1.5 text-[11px] tracking-[0.1em] text-white lg:hidden"
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
        <div className="fixed inset-0 z-40 bg-void/55 pt-24 backdrop-blur-2xl lg:hidden">
          <nav
            className="glass-nav mx-4 flex max-w-sm flex-col gap-1 p-4 !rounded-3xl"
            aria-label="Mobile"
          >
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="rounded-2xl px-4 py-3.5 font-display text-3xl tracking-[0.08em] text-white transition hover:bg-white/10"
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
              className="glass-chip-btn mt-4 w-full py-3 text-center text-sm tracking-[0.1em] text-white/90"
            >
              Account
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
