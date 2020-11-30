const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript'
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          inject: true,
          hash: true,
        }),
    ],
    devServer: {
      port: 4200
    }
};