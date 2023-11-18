/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin.js";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            '[class~="lead"]': {
              color: theme("colors.gray.400"),
            },
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.500"),
              },
            },
            strong: {
              color: theme("colors.white"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.700"),
            },
            hr: {
              borderColor: theme("colors.gray.800"),
            },
            blockquote: {
              color: theme("colors.gray.300"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
            h4: {
              color: theme("colors.white"),
            },
            "figure figcaption": {
              color: theme("colors.gray.500"),
            },
            code: {
              color: theme("colors.white"),
            },
            "a code": {
              color: theme("colors.white"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            thead: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.gray.400"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.gray.600"),
            },

            // ... other styles as needed
          },
        },
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "custom-light": "#f1f5f9",
        "custom-dark": "#13151a",
        "card-dark": "#23262d",
        card: "#ffffff",
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
  plugins: [preline, require("@tailwindcss/typography")],
};
