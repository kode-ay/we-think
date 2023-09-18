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

        bg: "var(--bg)",
      },
      backgroundColor: {
        btn: "var(--button)",
        lite: "var(--bg-l)",

        fg: "var(--fg)",
      },
      colors: {
        pur: "var(--button)",
        grey: "var(--grey)",
        text: "var(--text)",

        prim: "var(--main)",
        lt: "var(--fg)",
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
