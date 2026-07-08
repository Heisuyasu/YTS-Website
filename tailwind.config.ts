import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#05152C",
          900: "#082247",
          800: "#0B3167",
          700: "#0E4187",
          600: "#114EA4",
          500: "#1355B2",
        },
        royal: {
          500: "#2F69BB",
          600: "#1355B2",
          700: "#0F448E",
        },
        accent: {
          300: "#FAB3D2",
          400: "#F885B7",
          500: "#F5569B",
          600: "#CE4882",
          700: "#A73A69",
        },
        blush: {
          DEFAULT: "#FFCBEB",
          50: "#FFF3FA",
          100: "#FFE6F5",
          200: "#FFCBEB",
        },
        mist: "#F4F7FB",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(10, 22, 43, 0.08)",
        lift: "0 20px 45px rgba(10, 22, 43, 0.14)",
        glow: "0 0 0 6px rgba(245, 86, 155, 0.15)",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "4xl": "2rem",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "road-dash": {
          to: { strokeDashoffset: "-24" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.2, 0.6, 0.4, 1) infinite",
        "float-y": "float-y 6s ease-in-out infinite",
        "road-dash": "road-dash 1.2s linear infinite",
        marquee: "marquee 68s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
