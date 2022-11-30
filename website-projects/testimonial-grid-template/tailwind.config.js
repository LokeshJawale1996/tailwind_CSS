module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow semi Condesed', 'sans-serif'],
      },
    },
  },
  plugins:[require('@tailwindcss/line-clamp')],
}
