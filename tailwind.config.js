module.exports = {
  theme: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      colors: {
        dark: 'rgb(33, 33, 33)',
        // primary: {
        //   lighter: 'hsl(207, 73%, 52%)',
        //   default: 'hsl(207, 73%, 57%)',
        //   darker: 'hsl(207, 73%, 44%)'
        // },
        // orange: {
        //   '100': '#ee7203',
        //   '200': '#ee7203',
        //   '300': '#ee7203',
        //   '400': '#ee7203',
        //   '500': '#ee7203',
        //   '600': '#ee7203',
        //   '700': '#ee7203',
        //   '800': '#ee7203',
        //   '900': '#ee7203',
        // }
      },
      screens: {
        'print': {'raw': 'print'},
        // => @media print { ... }
      }
    
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    transformOrigin: false,
    clear: false,
  }
};