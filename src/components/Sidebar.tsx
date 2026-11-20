"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import type { ShopView } from "@/lib/shop-view";

const OFFICE_URL = process.env.NEXT_PUBLIC_OFFICE_URL || "http://127.0.0.1:3000";

const BASE_NAV = [
  { id: "character", label: "Character", action: "account" as const },
  { id: "shop", label: "Shop", action: "shop" as const },
  { id: "night-pass", label: "Night Pass", action: "shop" as const },
  { id: "tasks", label: "Tasks", action: "shop" as const },
  { id: "rating", label: "Rating", action: "shop" as const },
  { id: "catalog", label: "Catalog", action: "shop" as const },
  { id: "account", label: "My Account", action: "account" as const },
  { id: "agency", label: "Agency HQ", href: OFFICE_URL, external: true },
  { id: "settings", label: "Settings", action: "account" as const },
];

export function Sidebar({
  view,
  onOpenAccount,
  onOpenShop,
}: {
  view: ShopView;
  onOpenAccount: () => void;
  onOpenShop: () => void;
}) {
  const { user, openAuth } = useAuth();
  const [searchReady, setSearchReady] = useState(false);
  useEffect(() => setSearchReady(true), []);

  return (
    <aside className="panel-glass flex h-full w-[248px] shrink-0 flex-col gap-2 border-r border-white/10 px-4 py-6">
      <div className="mb-3 px-1">
        <a href="/" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/vice-city-logo.png" alt="VICE City" className="h-auto w-[132px] object-contain" />
        </a>
        <a href="/" className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-mute hover:text-mist">
          ← Leonida home
        </a>
      </div>

      <div className="mb-2 flex min-h-[42px] items-center gap-2 rounded-[10px] bg-night px-3 py-2.5">
        <SearchIcon />
        {searchReady ? (
          <input
            type="search"
            name="catalog-search"
            placeholder="Search catalog…"
            autoComplete="off"
            data-1p-ignore
            data-lpignore="true"
            data-form-type="other"
            className="w-full bg-transparent text-sm text-mist placeholder:text-mute outline-none"
          />
        ) : (
          <span className="w-full text-sm text-mute">Search catalog…</span>
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-1" aria-label="Shop">
        {BASE_NAV.map((item) => {
          if ("external" in item && item.external && item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="relative rounded-[10px] px-3.5 py-2.5 text-sm font-medium text-mist/90 transition hover:bg-white/5"
              >
                <span className="relative flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-mute/70" />
                  {item.label}
                </span>
              </a>
            );
          }

          const goesAccount = item.action === "account";
          const active =
            (goesAccount && view === "account" && (item.id === "account" || item.id === "character" || item.id === "settings")) ||
            (!goesAccount && view === "shop" && item.id === "night-pass");

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (goesAccount) {
                  if (!user) openAuth("login");
                  else onOpenAccount();
                } else {
                  onOpenShop();
                }
              }}
              className="relative rounded-[10px] px-3.5 py-2.5 text-left text-sm font-medium text-mist/90 transition hover:bg-white/5"
            >
              {active && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-[10px] bg-white/8 ring-1 ring-pink/40"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${active ? "bg-pink" : "bg-mute/70"}`} />
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <a
        href={OFFICE_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-2 flex items-center justify-center rounded-[10px] bg-teal px-3.5 py-3 text-sm font-bold text-night transition active:scale-[0.98] hover:brightness-110"
      >
        Open Agents Office
      </a>
    </aside>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-mute">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
