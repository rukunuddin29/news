module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  
        serif: ['Merriweather', 'serif'], // Example for a serif font
        mono: ['Menlo', 'monospace'], // Example for a monospace font
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
