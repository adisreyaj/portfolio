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
      },
      backgroundImage: {
        'primary-gradient': 'var(--primary-gradient)',
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
  plugins: [],
};
