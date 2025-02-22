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
    fontFamily: {
      sans: [
        "Rubik",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
    },
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
            fontFamily:
              'Rubik, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            h1: {
              marginBottom: "0.5em", // Reduced margin
              fontFamily: "Rubik, system-ui, sans-serif",
              fontWeight: "700",
            },
            h2: {
              marginBottom: "0.5em", // Reduced margin
              fontFamily: "Rubik, system-ui, sans-serif",
              fontWeight: "600",
            },
            h3: {
              marginBottom: "0.5em", // Reduced margin
              fontFamily: "Rubik, system-ui, sans-serif",
              fontWeight: "600",
            },
            p: {
              fontFamily: "Rubik, system-ui, sans-serif",
            },
            color: "#2d3748",
            a: {
              color: "#4a5568",
              "&:hover": {
                color: "#68d391",
              },
            },
          },
        },
        lg: {
          // This covers .prose-lg
          css: {
            h1: {
              marginBottom: "0.5em",
              fontFamily: "Rubik, system-ui, sans-serif",
              fontWeight: "700",
            },
            h2: {
              marginBottom: "0.5em",
              fontFamily: "Rubik, system-ui, sans-serif",
              fontWeight: "600",
            },
            // etc.
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
