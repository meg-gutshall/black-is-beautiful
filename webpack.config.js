const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = (env, argv) => {
  return {
    entry: './src/entry.js',
    mode: env.WEBPACK_SERVE ? 'development' : 'production',
    devtool: env.WEBPACK_SERVE ? 'eval-source-map' : 'source-map',
    module: {
      rules: [
        {
          test: /\.(s[ac]ss)$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'file-loader',
          },
        },
        {
          test: /\.(ttf|svg|otf|eot|woff(2)?)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        },
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js'],
    },
    plugins: [
      new WebpackManifestPlugin(),
      new HtmlWebpackPlugin({
        title: 'Black Is Beautiful',
        template: 'black-is-beautiful.html',
        scriptLoading: 'defer',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
      }),
    ],
    output: {
      path: path.resolve(__dirname, '../', 'dist'),
      filename: '[name].bundle.js',
      clean: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, '../', 'dist'),
      },
      compress: true,
      port: 9000,
      open: true,
    },
  };
};
