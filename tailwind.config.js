/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#3D3B40',
        blue: '#525CEB',
        light: '#BFCFE7',
        lavender: '#F8EDFF',
      },
    },
  },
  plugins: [],
}