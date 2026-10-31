/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ivory: '#faf7f2', linen: '#efe8dc', char: '#2b2724', terra: { 400: '#c98159', 500: '#b5683f', 600: '#94512e' }, sage: '#8a9a83' },
      fontFamily: { serif: ['Cormorant', 'serif'], sans: ['Jost', 'sans-serif'] },
      keyframes: { fadeUp: { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'none' } } },
      animation: { fadeUp: 'fadeUp 1s cubic-bezier(.2,.7,.2,1) both' },
    },
  },
  plugins: [],
}
