const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { glob } = require('glob');

const entryFiles = glob
  .sync('./src/**/*.js')
  .filter((file) => !file.endsWith('.d.js'))
  .map((file) => `./${file.replace(/\\/g, '/')}`);

module.exports = (env) => {
  const isDev = env.mode === 'development';

  const config = {
    mode: env.mode ?? 'development',
    entry: entryFiles,
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      }),
      new webpack.ProgressPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(mp3|wav|ogg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/audio/[name][ext]',
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
  };

  return config;
};
