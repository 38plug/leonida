import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0F060C",
        night: "#0B0716",
        ink: "#1A0E16",
        mist: "#F1F2F7",
        mute: "#B9BCD4",
        burgundy: "#53273A",
        magenta: "#A233B6",
        neon: "#E85A9B",
        coral: "#E8926A",
        mutedRed: "#A74C46",
        champagne: "#B2A584",
        deepPurple: "#5F2896",
        teal: "#7EC8C4",
        gold: "#D4B483",
        pink: "#E85A9B",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        script: ["var(--font-caveat)", "cursive"],
        ui: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-dm)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(15, 6, 12, 0.45)",
        neonGlow: "0 0 24px rgba(162, 51, 182, 0.35)",
        ctaGlow: "0 0 28px rgba(232, 90, 155, 0.4)",
      },
      backdropBlur: {
        glass: "18px",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        breathe: "breathe 4.5s ease-in-out infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
