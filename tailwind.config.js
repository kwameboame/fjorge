/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'rift-regular': ['Rift-Regular', 'Arial'], // Add the new font family here
      'rift-medium': ['Rift-Medium', 'Arial'], 
      'rift-light': ['Rift-Light', 'Arial'], // Add the new font family here
      'rift-bold': ['Rift-Bold', 'Arial']
    },
    extend: {
      colors: {
        'cust-darkblue-bg': '#014152', 
        'cust-darkerblue': '#003E52', 
      },
      textColor: {
        'cust-darkblue': '#416F7E',
      },
    },
  },
  plugins: [],
}

