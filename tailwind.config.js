/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': "url('./src/assets/bgmovie.jpg')"
      }
    },
  },
  plugins: [],
}

