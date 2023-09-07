module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: { config: './styles/tailwind.config.js' },
    autoprefixer: {},
  },
}
