/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp',
        'fade-out-down': 'fadeOutDown',
        'pulse-slow': 'pulseSlow .2s ease infinite',
      }
    },
  },
  plugins: [],
}
