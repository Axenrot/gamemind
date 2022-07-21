const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'Zinc': {
          400: '#b74285',
          'Purple': {
            400: '#6643aa',
            'Pink': {
              400: '#3d415e',
            }
          }
        }
      },
    },
  }
}
plugins: []

