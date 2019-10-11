module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true
    }),
    require('postcss-uncss')({
      html: './src/index.html'
    })
  ]
}