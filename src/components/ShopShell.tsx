"use client";

import { useCallback, useState } from "react";
import { useAuth } from "@/lib/auth";
import type { ShopView } from "@/lib/shop-view";
import { CustomerArea } from "./CustomerArea";
import { HeroPass } from "./HeroPass";
import { PassTracks } from "./PassTracks";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function ShopShell() {
  const { user, openAuth } = useAuth();
  const [view, setView] = useState<ShopView>("shop");

  const openAccount = useCallback(() => {
    if (!user) {
      openAuth("login");
      return;
    }
    setView("account");
  }, [user, openAuth]);

  const openShop = useCallback(() => setView("shop"), []);

  return (
    <div className="shop-shell flex min-h-screen pt-20 text-mist">
      <Sidebar view={view} onOpenAccount={openAccount} onOpenShop={openShop} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar view={view} onOpenAccount={openAccount} onOpenShop={openShop} />
        <div className="flex flex-1 flex-col overflow-y-auto">
          {view === "shop" ? (
            <>
              <HeroPass />
              <PassTracks />
            </>
          ) : (
            <CustomerArea onNeedAuth={() => openAuth("login")} />
          )}
        </div>
      </div>
    </div>
  );
}
