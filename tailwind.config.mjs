/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin.js";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "custom-light": "#ffffff",
        "custom-dark": "#13151a",
        "card-dark": "#23262d",
      },
      textColor: {
        "custom-light": "#ffffff",
        "custom-dark": "#13151a",
        "card-dark": "#23262d",
      },
      gradientColorStops: {
        "accent-light": "rgb(255, 255, 255)",
        accent: "rgb(135, 206, 235)",
        "accent-dark": "rgb(128, 0, 128)",
      },
    },
  },
  plugins: [preline],
};
