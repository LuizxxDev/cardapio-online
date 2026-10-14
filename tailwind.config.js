/** Configuração para compilar o CSS do Fabi Burguer (Tailwind 3.4.17) */
module.exports = {
  content: ["./fabi-burguer.html"],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: { red: { 400: "#e5604d", 500: "#d93b27", 600: "#c12612", 700: "#a11f0e", 950: "#2b0c07" } },
      fontFamily: {
        display: ['"Bowlby One"', "Impact", "sans-serif"],
        body: ["Nunito", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
