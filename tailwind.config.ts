import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        surface: "#FFFFFF",
        primary: "#0F766E",
        accent: "#14B8A6",
        tint: "#CCFBF1",
        foreground: "#0F172A",
        muted: "#64748B",
      },
    },
  },
  plugins: [],
};
export default config;
