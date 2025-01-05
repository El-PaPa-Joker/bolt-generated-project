/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#004085',
        primaryGreen: '#28a745',
        accentGray: '#f8f9fa',
        accentWhite: '#ffffff',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
