/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'light-pink': '#DAABB5',
        'dark-pink': '#B66878',
        'text-pink': '#3B0D0D'
      },
    },
  },
  plugins: [],
}

