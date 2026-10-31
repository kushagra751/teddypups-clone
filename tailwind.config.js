/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbf1e1", // page background
        paper: "#fffaf0", // card background
        ink: "#241508", // near-black chocolate text
        cocoa: "#6b4a35", // secondary text
        terracotta: "#a8562e", // primary rust/terracotta
        terracottaDark: "#8a431f",
        umber: "#a3592f", // mid-brown section background
        espresso: "#2b1b12", // dark brown section/footer background
        apricot: "#a8562e", // alias kept for existing usage
        peach: "#f5e3c8",
        blush: "#f6d8c4",
        sage: "#f0dfb3",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 0 0 rgba(36, 21, 8, 0.9)",
        pop: "0 4px 0 0 rgba(36, 21, 8, 0.9)",
      },
    },
  },
  plugins: [],
};
