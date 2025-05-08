import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // J NATION KITCHEN colors
        black: "#000000",
        brown: {
          950: "#2C1A05", // Very dark brown (replacing black)
          900: "#3B2509",
          800: "#4E3214",
          700: "#5F3E1A",
          600: "#704A20",
          500: "#8B5D2C",
          400: "#A67939",
          300: "#C19456",
          200: "#D7B078",
          100: "#E9D0A8",
          50: "#F5E9D5",
        },
        green: {
          600: "#006B3F", // Jamaican green
          500: "#008C52",
          400: "#00A862",
          300: "#00C472",
          200: "#00DF83",
          100: "#00FF95",
          50: "#E6FFF2",
        },
        yellow: {
          500: "#FED100", // Jamaican yellow
          600: "#E5BC00",
          700: "#CCA700",
          400: "#FFDA33",
          300: "#FFE266",
          200: "#FFEB99",
          100: "#FFF8E6",
          50: "#FFFDF5",
        },
        red: {
          600: "#C50F1F", // Accent red from logo
          500: "#E01226",
          400: "#FF142C",
          300: "#FF4D5E",
          200: "#FF8690",
          100: "#FFBEC3",
        },
        beige: {
          50: "#FFFDF5",
          100: "#F5F0E5",
          200: "#EBE6D5",
          300: "#D8D0B8",
          400: "#C5BA9A",
          500: "#B2A47D",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
