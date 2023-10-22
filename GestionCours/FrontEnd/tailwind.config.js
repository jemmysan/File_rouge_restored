/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors:{
      'color': {
        'white' : '#FFFFFF',

        'blue-600':'#1C64F2',
        'blue-300':'#A4CAFE',
        'blue-500':'#6875F5',

        'gray-700' :'#374151',
        'gray-600' :'#4B5563',
        'gray-300' :'#D1D5DB',
        'gray-900' : '#111827',
        'gray-100' : '#F3F4F6',
        'gray-200' :'#E5E7EB',
        'gray-440' :'#444',

        'rose-600' : '#D61F69',

        'orange-1': '#E76620',
        'green-2':'#43C2CE',
        'green-3':'#45C4D5'

    }
  }

  },
  
  plugins: [
    require('flowbite/plugin')
  ],
}

