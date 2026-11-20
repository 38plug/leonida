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
  { href: "/map", label: "Map" },
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
          scrolled ? "pt-3" : "pt-4 md:pt-6"
        }`}
      >
        <div
          className={`glass-nav grid w-full max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 transition-all duration-500 md:gap-6 md:px-6 ${
            scrolled ? "glass-nav-scrolled" : ""
          }`}
          style={{ height: scrolled ? 52 : 58 }}
        >
          <div className="relative z-[2] flex min-w-0 items-center">
            <Link href="/" className="nav-brand min-w-0" aria-label="Leonida home">
              <MoneyStack className="nav-money" />
              <span className="nav-logo">
                <span className="nav-logo-inner">
                  <span className="nav-logo-mark font-display text-[1.05rem] tracking-[0.14em] text-white md:text-[1.2rem]">
                    LEONIDA
                  </span>
                </span>
              </span>
            </Link>
          </div>

          <nav
            className="relative z-[2] hidden items-center justify-center lg:flex"
            aria-label="Primary"
          >
            {LINKS.map((l) => {
              const active =
                (l.href.startsWith("/boutique") && pathname.startsWith("/boutique")) ||
                (l.href === "/map" && pathname.startsWith("/map")) ||
                (l.href.startsWith("/journal") && pathname.startsWith("/journal")) ||
                (l.href === "/about" && pathname === "/about");
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`glass-nav-link ${active ? "glass-nav-link-active" : ""}`}
                >
                  <span className="relative z-[1]">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="relative z-[2] flex shrink-0 items-center justify-end gap-2 justify-self-end sm:gap-3">
            {ready &&
              (user ? (
                <button
                  type="button"
                  onClick={logout}
                  className="meta-label hidden text-white/70 transition hover:text-white sm:inline-flex"
                >
                  {user.name}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => openAuth("login")}
                  className="meta-label hidden text-white/70 transition hover:text-white sm:inline-flex"
                >
                  Account
                </button>
              ))}

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-bag btn-bag-compact"
              aria-label="Open bag"
            >
              Bag
              {count > 0 && (
                <span className="ml-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-[1px] bg-white px-1 text-[9px] font-bold text-hot">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              className="meta-label inline-flex border border-white/15 px-3 py-2 text-white lg:hidden"
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
        <div className="fixed inset-0 z-40 bg-void/80 pt-24 backdrop-blur-xl lg:hidden">
          <nav
            className="glass-panel mx-4 flex max-w-sm flex-col gap-1 rounded-[2px] p-5"
            aria-label="Mobile"
          >
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="border-b border-white/[0.06] px-2 py-4 font-display text-4xl tracking-[0.08em] text-white transition hover:text-hot"
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
              className="btn-primary mt-6 w-full justify-center"
            >
              Account
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
