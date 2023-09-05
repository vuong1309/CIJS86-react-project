/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      maxHeight: {
        '700': '43.75rem',
      },
      colors: {
        'gray': '#333',
        'blue': '#0071eb',
        'gray-black':'#232323'
      },
      maxWidth: {
        '1375': '1375px',
      },
      padding: {
        '4.5rem': '4.5rem',
      },
      backgroundImage: {
        'netflix': "url('https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'size960': '960px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

