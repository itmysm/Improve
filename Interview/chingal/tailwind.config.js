/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    colors: {
      transparent: 'var(--color-transparent)',

      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      'primary-100': 'rgb(var(--color-primary-100) / <alpha-value>)',
      'primary-200': 'rgb(var(--color-primary-200) / <alpha-value>)',
      'primary-300': 'rgb(var(--color-primary-300) / <alpha-value>)',
      'primary-400': 'rgb(var(--color-primary-400) / <alpha-value>)',
      'primary-500': 'rgb(var(--color-primary-500) / <alpha-value>)',
      'primary-600': 'rgb(var(--color-primary-600) / <alpha-value>)',
      'primary-700': 'rgb(var(--color-primary-700) / <alpha-value>)',
      'primary-800': 'rgb(var(--color-primary-800) / <alpha-value>)',
      'primary-900': 'rgb(var(--color-primary-900) / <alpha-value>)',

      surface: 'rgb(var(--color-surface) / <alpha-value>)',
      'surface-100': 'rgb(var(--color-surface-100) / <alpha-value>)',
      'surface-200': 'rgb(var(--color-surface-200) / <alpha-value>)',
      'surface-300': 'rgb(var(--color-surface-300) / <alpha-value>)',
      'surface-400': 'rgb(var(--color-surface-400) / <alpha-value>)',
      'surface-500': 'rgb(var(--color-surface-500) / <alpha-value>)',
      'surface-600': 'rgb(var(--color-surface-600) / <alpha-value>)',
      'surface-700': 'rgb(var(--color-surface-700) / <alpha-value>)',
      'surface-800': 'rgb(var(--color-surface-800) / <alpha-value>)',
      'surface-900': 'rgb(var(--color-surface-900) / <alpha-value>)',

      gray: 'rgb(var(--color-gray) / <alpha-value>)',
      'gray-100': 'rgb(var(--color-gray-100) / <alpha-value>)',
      'gray-200': 'rgb(var(--color-gray-200) / <alpha-value>)',
      'gray-300': 'rgb(var(--color-gray-300) / <alpha-value>)',
      'gray-400': 'rgb(var(--color-gray-400) / <alpha-value>)',
      'gray-500': 'rgb(var(--color-gray-500) / <alpha-value>)',
      'gray-600': 'rgb(var(--color-gray-600) / <alpha-value>)',
      'gray-700': 'rgb(var(--color-gray-700) / <alpha-value>)',
      'gray-800': 'rgb(var(--color-gray-800) / <alpha-value>)',
      'gray-900': 'rgb(var(--color-gray-900) / <alpha-value>)',

      green: 'rgb(var(--color-green) / <alpha-value>)',
      'green-100': 'rgb(var(--color-green-100) / <alpha-value>)',
      'green-200': 'rgb(var(--color-green-200) / <alpha-value>)',
      'green-300': 'rgb(var(--color-green-300) / <alpha-value>)',
      'green-400': 'rgb(var(--color-green-400) / <alpha-value>)',
      'green-500': 'rgb(var(--color-green-500) / <alpha-value>)',
      'green-600': 'rgb(var(--color-green-600) / <alpha-value>)',
      'green-700': 'rgb(var(--color-green-700) / <alpha-value>)',
      'green-800': 'rgb(var(--color-green-800) / <alpha-value>)',
      'green-900': 'rgb(var(--color-green-900) / <alpha-value>)',

      orange: 'rgb(var(--color-orange) / <alpha-value>)',
      'orange-100': 'rgb(var(--color-orange-100) / <alpha-value>)',
      'orange-200': 'rgb(var(--color-orange-200) / <alpha-value>)',
      'orange-300': 'rgb(var(--color-orange-300) / <alpha-value>)',
      'orange-400': 'rgb(var(--color-orange-400) / <alpha-value>)',
      'orange-500': 'rgb(var(--color-orange-500) / <alpha-value>)',
      'orange-600': 'rgb(var(--color-orange-600) / <alpha-value>)',
      'orange-700': 'rgb(var(--color-orange-700) / <alpha-value>)',
      'orange-800': 'rgb(var(--color-orange-800) / <alpha-value>)',
      'orange-900': 'rgb(var(--color-orange-900) / <alpha-value>)',

      pink: 'rgb(var(--color-pink) / <alpha-value>)',
      'pink-100': 'rgb(var(--color-pink-100) / <alpha-value>)',
      'pink-200': 'rgb(var(--color-pink-200) / <alpha-value>)',
      'pink-300': 'rgb(var(--color-pink-300) / <alpha-value>)',
      'pink-400': 'rgb(var(--color-pink-400) / <alpha-value>)',
      'pink-500': 'rgb(var(--color-pink-500) / <alpha-value>)',
      'pink-600': 'rgb(var(--color-pink-600) / <alpha-value>)',
      'pink-700': 'rgb(var(--color-pink-700) / <alpha-value>)',
      'pink-800': 'rgb(var(--color-pink-800) / <alpha-value>)',
      'pink-900': 'rgb(var(--color-pink-900) / <alpha-value>)',

      purple: 'rgb(var(--color-purple) / <alpha-value>)',
      'purple-100': 'rgb(var(--color-purple-100) / <alpha-value>)',
      'purple-200': 'rgb(var(--color-purple-200) / <alpha-value>)',
      'purple-300': 'rgb(var(--color-purple-300) / <alpha-value>)',
      'purple-400': 'rgb(var(--color-purple-400) / <alpha-value>)',
      'purple-500': 'rgb(var(--color-purple-500) / <alpha-value>)',
      'purple-600': 'rgb(var(--color-purple-600) / <alpha-value>)',
      'purple-700': 'rgb(var(--color-purple-700) / <alpha-value>)',
      'purple-800': 'rgb(var(--color-purple-800) / <alpha-value>)',
      'purple-900': 'rgb(var(--color-purple-900) / <alpha-value>)',

      red: 'rgb(var(--color-red) / <alpha-value>)',
      'red-100': 'rgb(var(--color-red-100) / <alpha-value>)',
      'red-200': 'rgb(var(--color-red-200) / <alpha-value>)',
      'red-300': 'rgb(var(--color-red-300) / <alpha-value>)',
      'red-400': 'rgb(var(--color-red-400) / <alpha-value>)',
      'red-500': 'rgb(var(--color-red-500) / <alpha-value>)',
      'red-600': 'rgb(var(--color-red-600) / <alpha-value>)',
      'red-700': 'rgb(var(--color-red-700) / <alpha-value>)',
      'red-800': 'rgb(var(--color-red-800) / <alpha-value>)',
      'red-900': 'rgb(var(--color-red-900) / <alpha-value>)',

      'sky-blue': 'rgb(var(--color-sky-blue) / <alpha-value>)',
      'sky-blue-100': 'rgb(var(--color-sky-blue-100) / <alpha-value>)',
      'sky-blue-200': 'rgb(var(--color-sky-blue-200) / <alpha-value>)',
      'sky-blue-300': 'rgb(var(--color-sky-blue-300) / <alpha-value>)',
      'sky-blue-400': 'rgb(var(--color-sky-blue-400) / <alpha-value>)',
      'sky-blue-500': 'rgb(var(--color-sky-blue-500) / <alpha-value>)',
      'sky-blue-600': 'rgb(var(--color-sky-blue-600) / <alpha-value>)',
      'sky-blue-700': 'rgb(var(--color-sky-blue-700) / <alpha-value>)',
      'sky-blue-800': 'rgb(var(--color-sky-blue-800) / <alpha-value>)',
      'sky-blue-900': 'rgb(var(--color-sky-blue-900) / <alpha-value>)',

      'yellow': 'rgb(var(--color-yellow) / <alpha-value>)',
      'yellow-100': 'rgb(var(--color-yellow-100) / <alpha-value>)',
      'yellow-200': 'rgb(var(--color-yellow-200) / <alpha-value>)',
      'yellow-300': 'rgb(var(--color-yellow-300) / <alpha-value>)',
      'yellow-400': 'rgb(var(--color-yellow-400) / <alpha-value>)',
      'yellow-500': 'rgb(var(--color-yellow-500) / <alpha-value>)',
      'yellow-600': 'rgb(var(--color-yellow-600) / <alpha-value>)',
      'yellow-700': 'rgb(var(--color-yellow-700) / <alpha-value>)',
      'yellow-800': 'rgb(var(--color-yellow-800) / <alpha-value>)',
      'yellow-900': 'rgb(var(--color-yellow-900) / <alpha-value>)',
    },

    fontFamily: {
      'sans': ['yekan', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}