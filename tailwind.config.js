/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#171614',
        bistre: '#3a2618',
        garnet: '#754043',
        beaver: '#9a8873',
        'black-olive': '#37423d',
      },
    },
  },
  plugins: [],
}

