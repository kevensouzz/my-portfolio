/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.jsx',
    './app/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        primary: "url('/background-primary.svg')"
      },
      fontFamily: {
        sora: [`var(--font-sora)`, 'sans-serif']
      },
      container: {
        padding: {
          DEFAULT: '15px',
        }
      }
    }
  }
}
