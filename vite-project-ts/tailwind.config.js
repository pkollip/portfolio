/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        background: {
          DEFAULT: "#0a192f", // Dark navy blue background
        },
        text: {
          DEFAULT: "#e6f1ff", // Light text for readability
          ivory: "#f5f5f0",
          lavender: "#e6e6fa",
          accent: "#64ffda",
          accentAlt: "#ff6b6b",  // coral alternative
          secondary: "#8892b0",
        },
        particle: {
          DEFAULT: "#64ffda", // Matching teal for particles
          secondary: "#8be9fd", // Secondary particle color option
          tertiary: "#bd93f9", // Third particle color option
        },
        links: {
          DEFAULT: "#64ffda", // Teal for links
          hover: "#8be9fd", // Lighter teal for hover state
        }
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
}