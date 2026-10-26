/** Configuração para compilar o CSS do Fabi Burguer (Tailwind 3.4.17).
 *  Depois de mudar classes no index.html, rode: npm run css */
module.exports = {
  content: ["./index.html"],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      transitionTimingFunction: { DEFAULT: "cubic-bezier(.23,1,.32,1)" },
      transitionDuration: { DEFAULT: "180ms" },
      colors: { red: { 400: "#e5604d", 500: "#d93b27", 600: "#c12612", 700: "#a11f0e", 950: "#2b0c07" } },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
