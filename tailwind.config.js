/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#F59E0B",
        "brand-yellow-dark": "#F97316",
        canvas: "#0F172A",
        elevated: "#1E293B",
        primary: "#FFFFFF",
        secondary: "#E5E7EB",
        "border-default": "rgba(255,255,255,0.12)",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        full: "9999px",
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "1.2" }],
        h2: ["2.25rem", { lineHeight: "1.2" }],
        h3: ["1.875rem", { lineHeight: "1.2" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        label: ["0.875rem", { lineHeight: "1.4" }],
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0,0,0,0.1)",
        elevated: "0 6px 12px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
