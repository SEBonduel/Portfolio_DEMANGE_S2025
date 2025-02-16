/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: '#00e5ff',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  // Pour Internet Explorer et Edge
          'scrollbar-width': 'none',    // Pour Firefox
          '&::-webkit-scrollbar': {
            display: 'none',            // Pour Chrome, Safari et Opera
          },
        },
      });
    },
  ],
};
