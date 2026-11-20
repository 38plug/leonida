import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#07060A",
        night: "#0E0C14",
        ink: "#16131E",
        mist: "#F3EEE8",
        mute: "#9A928C",
        hot: "#FF2D6F",
        hotDim: "#C91852",
        cyan: "#3EC8FF",
        burgundy: "#4A1E2C",
        navy: "#0A1220",
        champagne: "#C8B8A0",
        teal: "#5EC8C4",
        gold: "#D4B483",
        pink: "#FF2D6F",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        serif: ["var(--font-editorial)", "Georgia", "serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        ui: ["var(--font-ui)", "system-ui", "sans-serif"],
        mono: ["var(--font-ui)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 12px 40px rgba(0, 0, 0, 0.55)",
        project:
          "0 1px 0 rgba(255,255,255,0.06), 0 18px 40px rgba(0,0,0,0.45), 0 40px 80px rgba(0,0,0,0.35)",
        cta: "0 10px 28px rgba(255, 45, 111, 0.28)",
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
