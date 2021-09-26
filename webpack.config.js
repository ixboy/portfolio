const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/javascript/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ismael Antonio | Web Developer',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html')
    }),
  ]


}
