import type { Config } from "tailwindcss";

const withOpacity = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: withOpacity("--base"),
        panel: withOpacity("--panel"),
        panel2: withOpacity("--panel2"),
        line: withOpacity("--line"),
        line2: withOpacity("--line2"),
        ink: withOpacity("--ink"),
        muted: withOpacity("--muted"),
        faint: withOpacity("--faint"),
        amber: withOpacity("--amber"),
        signal: withOpacity("--signal"),
        onAmber: withOpacity("--on-amber"),
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        panel: "0 1px 0 0 rgb(255 255 255 / 0.03) inset, 0 8px 30px -12px rgb(0 0 0 / 0.35)",
        glow: "0 0 0 1px rgb(var(--amber) / 0.25), 0 0 40px -8px rgb(var(--amber) / 0.35)",
      },
      keyframes: {
        flowX: { "0%": { backgroundPosition: "0% 0" }, "100%": { backgroundPosition: "200% 0" } },
        flowY: { "0%": { backgroundPosition: "0 0%" }, "100%": { backgroundPosition: "0 200%" } },
        led: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
        sweep: { "0%": { transform: "translateX(-120%)" }, "100%": { transform: "translateX(120%)" } },
      },
      animation: {
        flowX: "flowX 2.6s linear infinite",
        flowY: "flowY 2.6s linear infinite",
        led: "led 1.9s ease-in-out infinite",
        sweep: "sweep 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
