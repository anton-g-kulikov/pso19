module.exports = {
  content: [
    "./_includes/**/*.{html,js,md}",
    "./_layouts/**/*.{html,js,md}",
    "./_posts/**/*.{html,md}",
    "./_pages/**/*.{html,md}",
    "./*.{html,md}",
    "./assets/css/*.css",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#4a5568",
        "accent-green": "#68d391",
        "primary-orange": "#F0801C",
        "accent-orange": "#F0801C",
        "text-color": "#2d3748",
        background: "#f7fafc",
        "header-green": "#89BE41",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#2d3748",
            h1: {
              color: "#4a5568",
            },
            h2: {
              color: "#4a5568",
            },
            a: {
              color: "#4a5568",
              "&:hover": {
                color: "#68d391",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
