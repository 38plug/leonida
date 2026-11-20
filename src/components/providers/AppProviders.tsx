"use client";

import type { ReactNode } from "react";
import { AuthProvider } from "@/lib/auth";
import { CartProvider } from "@/lib/cart";
import { AuthModal } from "../AuthModal";
import { CartDrawer } from "../shop/CartDrawer";
import { GlassNav } from "../nav/GlassNav";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <GlassNav />
        <main className="min-h-screen">{children}</main>
        <CartDrawer />
        <AuthModal />
      </CartProvider>
    </AuthProvider>
  );
}
