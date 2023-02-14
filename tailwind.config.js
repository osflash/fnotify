/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'skin-bg': 'var(--bg-color)',
        'skin-text': 'var(--text-color)',
        'skin-link': 'var(--link-color)',
        'skin-submit': 'var(--submit-color)',
        'skin-heading': 'var(--heading-color)',
        'skin-border': 'var(--border-color)',
        'skin-header-bg': 'var(--header-bg)',
        'skin-shadow': 'var(--shadow-color)',
        fnotify: {
          red: '#FF0000',
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA'
        }
      },
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.fnotify.pink')
          },
          '40%': {
            ['border-color']: theme('colors.fnotify.pink')
          }
        }
      })
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}
