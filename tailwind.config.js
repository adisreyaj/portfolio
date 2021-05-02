module.exports = {
  purge: [
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './styles/**/*.scss',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        dark: 'var(--dark)',
        darker: 'var(--darker)',
      },
      backgroundImage: {
        'primary-gradient': 'var(--primary-gradient)',
        'dark-gradient': 'var(--dark-gradient)',
      },
    },
    fontFamily: {
      heading: ['Poppins'],
      body: ['Inter'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
