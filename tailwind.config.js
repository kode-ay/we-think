/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        grad: "var(--background)",
      },
      backgroundColor: {
        btn: "var(--button)",
      },
      colors: {
        pur: "var(--button)",
      },
      fontFamily: {
        head: "Inter",
        para: "Montserrat",
        main: "Roboto",
        mainSlim: "Roboto Condensed",
      },
    },
  },
  plugins: [],
};
