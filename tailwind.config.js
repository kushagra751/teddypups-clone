/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fffdf8",
        ink: "#2b2118",
        cocoa: "#6b4a35",
        apricot: "#f4a259",
        peach: "#ffe8d1",
        blush: "#ffd9c9",
        sage: "#dfe8d5",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(107, 74, 53, 0.35)",
      },
    },
  },
  plugins: [],
};
