/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ChangeOne: ['"Changa One"'],
        Neonderthaw: ['"Neonderthaw"'],
        Arial: ['"Arial"'],
      },

      maxWidth: {
        '8/10': '80%',
        '9/10': '90%',
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        navWhite: '#e5e7eb',
        rightCard: '#fcc78d',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
      },
    },
  },

  plugins: [],
};
