/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',
        'dark-text': '#C850C0',
        'dark-bt' : '#C850C0',
       
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
