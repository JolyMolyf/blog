/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'mainViolet': '#A1B5D8',
      'secondaryBlue': '#33658A',
      'lightBlue': '#E1EDF8'
    },
    textColor: {
      'mainViolet': '#A1B5D8',
      'secondaryBlue': '#33658A',
      'lightBlue': '#E1EDF8'
    },
    extend: {},
  },
  plugins: [],
}

