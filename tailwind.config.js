// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "var(--theme)",
        theme50: "var(--theme50)",
        theme20: "var(--theme20)",
        bg1: "var(--bg1)",
        textcolor: "var(--textcolor)"
      },
    },
  },
  plugins: [],
};
