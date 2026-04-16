/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-space': '#07071e',
        'space-mid':  '#0a0a2e',
        'space-light': '#12134a',
        gold:         '#d4af37',
        'gold-light': '#f0d060',
        saffron:      '#ff9933',
        cream:        '#f0e8d0',
        'cream-dim':  '#c8b87a',
      },
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        body:  ['"Noto Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
