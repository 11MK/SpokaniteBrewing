module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nord-black": "#232a2f",
        "nord-dark-grey": "#2b3339",
        "nord-dark-foot": "#374149",
        "nord-dark-slate": "#555454",
        "nord-dark-orange": "#D96630",
        "nord-dark-yellow": "#D9A130",
        "nord-white": "#e5e9f0",
        "nord-orange": "#e69875",
        // "nord-orange": "#D96630",
        "nord-blue": "#7393b3", 
        "nord-secondary": "#e4e4e4",
        // "nord-secondary": "#eaeeea",
        "nord-yellow": "#ebcb8b",
      },
      fontFamily: {
        splinesans: "'Spline Sans Mono', monospace",
        aldrich: "'Saira', sans-serif",
        inter: "'Inter', 'sans-serif",
      },
      rotate: {
        r45: "-45deg",
      },
    },
  },
  plugins: [],
};
