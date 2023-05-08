/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut 3s ease-in-out',
        fade4: 'fadeOut 4s ease-in-out',
        fade5: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '100%': { color: theme('colors.black') },
          '0%': { color: theme('colors.transparent') },
        },
      }),
    },
  } ,
	plugins: [],
};
