module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f4f9f8',
          '100': '#e8f2f1',
          '200': '#c6dfdb',
          '300': '#a4cbc5',
          '400': '#60a59a',
          '500': '#1c7e6e',
          '600': '#155f53',
          '700': '#0e4038',
          '800': '#08201c',
          '900': '#00191c',
        },
      },
      cursor: {
        'ew-resize': 'ew-resize',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
