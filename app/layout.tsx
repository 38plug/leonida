import type { Metadata } from "next";
import { Bebas_Neue, Bodoni_Moda, Manrope } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const ui = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leonida — Vice City Night House",
  description:
    "Premium Leonida portal and boutique. Original characters. Not affiliated with Rockstar Games.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ui.variable} ${display.variable} ${editorial.variable}`}>
      <body className="font-ui antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
