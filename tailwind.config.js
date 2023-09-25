/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "primary-light": "#3b82f6",
        "primary-dark": "#1d4ed8",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
