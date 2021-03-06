module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'p-black': '#19191a',
        'p-white': '#f9f9f9',
        'p-yellow': '#f9c140',
        'p-brown': '#af5936',
        'p-gray': '#8a938c'
      },
      fontFamily: {
        poppins: ['Poppins', 'Sans-Serif']
      },
      spacing: {
        128: '32rem'
      },
      minHeight: {
        'screen-50': '50vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-90': '90vh'
      },
      height: {
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
