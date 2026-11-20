"use client";

import { COMMERCE } from "@/lib/catalog";
import { useAuth } from "@/lib/auth";

export function TopBar({
  view,
  onOpenAccount,
  onOpenShop,
}: {
  view: "shop" | "account";
  onOpenAccount: () => void;
  onOpenShop: () => void;
}) {
  const { user, ready, openAuth, logout } = useAuth();
  const crumb = view === "account" ? "Shop / Account" : "Shop / Night Pass";

  return (
    <header className="topbar-glass flex items-center justify-between gap-4 border-b border-mist/[0.1] px-5 py-3.5">
      <div className="flex min-w-0 items-center gap-3">
        {!ready ? (
          <div className="h-8 w-32 bg-mist/5" aria-hidden />
        ) : user ? (
          <>
            <button
              type="button"
              onClick={onOpenAccount}
              className="flex items-center gap-3 text-left transition hover:opacity-90"
              aria-label="Open customer area"
            >
              <span className="h-8 w-8 shrink-0 bg-pink/90" aria-hidden />
              <span>
                <span className="block text-sm font-medium text-mist">{user.name}</span>
                <span className="block text-[11px] text-mute">
                  LVL {user.level} · {user.roleLabel}
                </span>
              </span>
            </button>
            <span className="ml-1 hidden truncate text-sm text-mute sm:inline">{crumb}</span>
          </>
        ) : (
          <>
            <span className="font-display text-2xl tracking-[0.08em] text-mist">VICE OPS</span>
            <span className="hidden text-sm text-mute sm:inline">{crumb}</span>
          </>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {user ? (
          <>
            <div className="glass-chip flex items-center gap-1.5 px-3 py-2 text-sm text-gold">
              <span>{user.currencyVc || COMMERCE.currency}</span>
              <span className="text-[11px] text-mute">VC</span>
            </div>
            <button type="button" className="glass-chip-btn px-3.5 py-2 text-xs font-medium text-white/85">
              Enter code
            </button>
            <button
              type="button"
              className="rounded-full bg-gold px-3.5 py-2 text-xs font-semibold text-night transition hover:brightness-105"
            >
              Top up
            </button>
            {view === "shop" ? (
              <button
                type="button"
                onClick={onOpenAccount}
                className="glass-chip-btn px-3.5 py-2 text-xs font-medium text-white/85"
              >
                Account
              </button>
            ) : (
              <button
                type="button"
                onClick={onOpenShop}
                className="glass-chip-btn px-3.5 py-2 text-xs font-medium text-white/85"
              >
                Shop
              </button>
            )}
            <button
              type="button"
              onClick={logout}
              className="px-2.5 py-2 text-xs font-medium text-mute transition hover:text-mist"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => openAuth("login")}
              className="glass-chip-btn px-3.5 py-2 text-xs font-medium text-white/85"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => openAuth("register")}
              className="rounded-full bg-mist px-3.5 py-2 text-xs font-semibold text-night transition hover:bg-white"
            >
              Register
            </button>
          </>
        )}
      </div>
    </header>
  );
}
