import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1916",
        paper: "#f5f2ec",
        surface: "#fbf9f4",
        muted: "#6b6660",
        rule: "#ddd6c8",
        terra: "#c8451a",
        gold: "#9a7c3a",
        path: "#1d4e89",
        inno: "#1a6b3c",
        lead: "#6b1a1a",
        "ink-soft": "#2a2823",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
