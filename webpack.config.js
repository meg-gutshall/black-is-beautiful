const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  entry: './src/entry.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Black Is Beautiful',
      template: 'black-is-beautiful.html',
      scriptLoading: 'defer',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }, {
        test: /\.(eot|woff|woff2|ttf|otf)$/,
        use: ['file-loader']
      }, {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }
};