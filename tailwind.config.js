/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      maxHeight: {
        '700': '43.75rem',
      },
      // colors: {
      //   'gray': '#333',
      //   'blue': '#0071eb',
      //   'gray-black':'#232323'
      // },
      maxWidth: {
        '1375': '1375px',
      },
      padding: {
        '4.5rem': '4.5rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

