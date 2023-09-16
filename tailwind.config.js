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
        line: "var(--underline)",
      },
      backgroundColor: {
        btn: "var(--button)",
        lite: "var(--bg-l)",
      },
      colors: {
        pur: "var(--button)",
        grey: "var(--grey)",
        text: "var(--text)",
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
