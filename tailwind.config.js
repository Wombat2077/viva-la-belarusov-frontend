/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        'button-blue' : '#59ABE8',
        'button-blue-light' : '#6ABCF9',
        'secondary-bg': '#11263A',
        'secondary-bg-light': '#22374B',
        'min-cost': '#59ABE8',
        'button-yellow' : '#FAEE9D',
        'button-yellow-light' : '#FBFFAE',
        
      },
      margin: {
        '1/4' : '25%'
      }
    },
  },
  plugins: [],
}

