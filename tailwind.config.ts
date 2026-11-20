import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0C",
        night: "#121218",
        ink: "#1A1A22",
        mist: "#F4F0F2",
        mute: "#9A94A0",
        hot: "#FF2D6F",
        hotDim: "#C91852",
        burgundy: "#53273A",
        magenta: "#A233B6",
        neon: "#FF2D6F",
        coral: "#E8926A",
        mutedRed: "#A74C46",
        champagne: "#C4B5A0",
        deepPurple: "#5F2896",
        teal: "#5EC8C4",
        gold: "#D4B483",
        pink: "#FF2D6F",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        script: ["var(--font-caveat)", "cursive"],
        ui: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-dm)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.45)",
        neonGlow: "0 0 24px rgba(255, 45, 111, 0.4)",
        ctaGlow: "0 0 28px rgba(255, 45, 111, 0.45)",
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
        kenburns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.05) translate(-0.8%, 0.4%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        breathe: "breathe 4.5s ease-in-out infinite",
        kenburns: "kenburns 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
