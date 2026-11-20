"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { useCart } from "@/lib/cart";
import { MoneyStack } from "./MoneyStack";

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
          className={`glass-nav grid w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 transition-all duration-500 md:gap-3 md:px-4 ${
            scrolled ? "glass-nav-scrolled" : ""
          }`}
          style={{ height: scrolled ? 52 : 58 }}
        >
          <div className="relative z-[2] flex min-w-0 items-center justify-self-start">
            <Link href="/" className="nav-brand shrink-0" aria-label="Leonida home">
              <MoneyStack />
              <span className="nav-logo">
                <span className="nav-logo-mark lettering-depth font-display text-[1.15rem] text-white md:text-[1.25rem]">
                  LEONIDA
                </span>
              </span>
            </Link>
          </div>

          <nav
            className="relative z-[2] hidden items-center justify-center gap-1.5 justify-self-center lg:flex"
            aria-label="Primary"
          >
            {LINKS.map((l) => {
              const active =
                (l.href.startsWith("/boutique") && pathname.startsWith("/boutique")) ||
                (l.href.startsWith("/journal") && pathname.startsWith("/journal")) ||
                (l.href === "/about" && pathname === "/about");
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`glass-nav-link text-[12px] font-medium tracking-[0.06em] ${
                    active ? "glass-nav-link-active" : ""
                  }`}
                >
                  <span className="relative z-[1]">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="relative z-[2] flex items-center justify-end gap-2 justify-self-end">
            {ready &&
              (user ? (
                <button
                  type="button"
                  onClick={logout}
                  className="glass-chip-btn hidden px-3.5 py-1.5 text-[11px] tracking-[0.04em] text-white/85 sm:inline-flex"
                >
                  <span className="relative z-[1]">{user.name}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => openAuth("login")}
                  className="glass-chip-btn hidden px-3.5 py-1.5 text-[11px] tracking-[0.06em] text-white/85 sm:inline-flex"
                >
                  <span className="relative z-[1]">Account</span>
                </button>
              ))}

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-bag"
              aria-label="Open bag"
            >
              Bag
              {count > 0 && (
                <span className="ml-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[9px] font-bold text-hot">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              className="glass-chip-btn inline-flex px-3 py-1.5 text-[11px] tracking-[0.08em] text-white lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Menu"
            >
              <span className="relative z-[1]">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-void/70 pt-24 backdrop-blur-xl lg:hidden">
          <nav
            className="glass-panel mx-4 flex max-w-sm flex-col gap-1 rounded-3xl p-4"
            aria-label="Mobile"
          >
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="rounded-2xl px-4 py-3.5 font-display text-3xl tracking-[0.08em] text-white transition hover:bg-white/5 hover:text-hot"
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
              className="btn-primary mt-4 w-full justify-center"
            >
              Account
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
