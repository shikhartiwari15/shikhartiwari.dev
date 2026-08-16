import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#070A0F",     // deep steel-black background
        panel: "#0E141C",    // raised panel
        panel2: "#131D28",   // hover / elevated
        glass: "#0F1824",    // glass base (used with opacity)
        line: "#1E2A38",     // hairline borders
        line2: "#26374A",    // brighter hairline
        ink: "#EAF0F7",      // primary text
        muted: "#8A9AAB",    // secondary text
        faint: "#54636F",    // tertiary
        amber: "#F0A93B",    // signal accent
        signal: "#34D399",   // operational status
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 30px -12px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(240,169,59,0.25), 0 0 40px -8px rgba(240,169,59,0.35)",
      },
      keyframes: {
        flowX: { "0%": { backgroundPosition: "0% 0" }, "100%": { backgroundPosition: "200% 0" } },
        flowY: { "0%": { backgroundPosition: "0 0%" }, "100%": { backgroundPosition: "0 200%" } },
        led: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
        sweep: { "0%": { transform: "translateX(-120%)" }, "100%": { transform: "translateX(120%)" } },
        blip: { "0%, 100%": { opacity: "0.25" }, "50%": { opacity: "1" } },
      },
      animation: {
        flowX: "flowX 2.6s linear infinite",
        flowY: "flowY 2.6s linear infinite",
        led: "led 1.9s ease-in-out infinite",
        sweep: "sweep 3.2s ease-in-out infinite",
        blip: "blip 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
