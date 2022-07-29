const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{html,js,jsx}', './components/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1200px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '4xl': '2.5rem'
      },
      backgroundImage: {
        'banner-gradient':
          'linear-gradient(101.4deg, #b74285 0%, #9E4290 30.65%, #6643aa 99.75%)'
<<<<<<< HEAD
      },
      colors: {
        pinkbutton: '#b74284',
        purplebg: '#6543aa'
=======
>>>>>>> 22c06f084c77f0fddd6e32c728e3a799c8a3ced4
      }
    }
  }
}
plugins: []