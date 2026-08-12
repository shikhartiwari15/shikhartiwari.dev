import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0F16",     // steel-black background
        panel: "#0F1620",    // raised panel
        panel2: "#131C28",   // hover / elevated
        line: "#1E2A38",     // hairline borders
        ink: "#E7EDF4",      // primary text
        muted: "#8A9AAB",    // secondary text
        faint: "#556472",    // tertiary
        amber: "#F0A93B",    // signal accent
        signal: "#34D399",   // operational status
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        flowX: {
          "0%": { backgroundPosition: "0% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        flowY: {
          "0%": { backgroundPosition: "0 0%" },
          "100%": { backgroundPosition: "0 200%" },
        },
        led: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flowX: "flowX 2.4s linear infinite",
        flowY: "flowY 2.4s linear infinite",
        led: "led 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
