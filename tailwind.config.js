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
        '4xl': '2.5rem',
        readTitle: '2.3rem'
      },
      backgroundImage: {
        'banner-gradient':
          'linear-gradient(101.4deg, #b74285 0%, #9E4290 30.65%, #6643aa 99.75%)'
      },
      colors: {
        pinkbutton: '#b74284',
        purplebg: '#6543aa',
        purplebg2: '#6643aa',
        gray: '#e3e3f1',
        bluegray: '#7686a6',
        pink: '#b74285',
        pinkbutton2: '#b74185',
        slateblue: '#202d46',
        slateblue2: '#051441',
        lightpink: '#fdc8e0'
      }
    }
  }
}
plugins: []
