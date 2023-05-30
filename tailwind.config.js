/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkCyanHeader: "#5ba4a4",
        lightCyanBG: "#effafa",
        lightCyan: "#eef6f6",
        darkCyan: "#7b8e8e",
        lightDarkCyan: "#2c3a3a",
      },
    },
  },
  plugins: [],
};
