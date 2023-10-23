/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/tw-elements/types/tw-elements.d.ts',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    // fontFamily: {
    //   sans: ['Inter', 'sans-serif'],
    //   body: ['Inter', 'sans-serif'],
    //   mono: ['ui-monospace', 'monospace'],
    //   colors: {},
    // },
    extend: {
      colors: {
        'primary-color': '#2d6a4f',
        'secondary-color': '#2d6a4f',
        'tertiary-color': '#74c69d',
        'quaternary-color': '#95d5b2',
        'impress-color': '#BF968F',
        'impress-bold-color': '#6B362D',
        'text-color-1': '#473933',
        'text-color-2': '#33473D',
      },
    },
    variants: {
      extend: {
        backgroundColor: ['dark'],
        color: ['dark'],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs'), require('flowbite/plugin')],
  darkMode: 'class',
};
