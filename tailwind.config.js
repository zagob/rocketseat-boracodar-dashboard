/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#292738",
        card: "#363447",
        green: {
          500: "#81FBB8",
        },
        pink: {
          100: "#CE9FFC",
          400: "#7367F0",
        },
      },
    },
  },
  plugins: [],
};
