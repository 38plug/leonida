import type { Metadata } from "next";
import { Bebas_Neue, Caveat, DM_Sans, Instrument_Serif } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leonida — Vice City Night House",
  description:
    "Premium Leonida portal and boutique. Original characters. China → customer. Not affiliated with Rockstar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dm.variable} ${bebas.variable} ${caveat.variable} ${instrument.variable}`}
    >
      <body className="font-ui antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
