const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'development',

   entry: {
      index: './src/index.js',
   },

   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
   },

   // now - 02-11-22
   optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',

      splitChunks: {
         cacheGroups: {
            vendor: {
               test: /[\\/]node_modules[\\/]/,
               name: 'vendors',
               chunks: 'all',
            },
         },
      },
   },

   devtool: 'inline-source-map',

   devServer: {
      static: './dist/views/',
      compress: true,
   },

   plugins: [
      new MiniCssExtractPlugin({
         filename: './[name].css',
      }),

      new HtmlWebpackPlugin({
         template: './src/views/pages/index.pug',
         filename: './views/index.html',
         inject: true,
      }),
   ],

   module: {
      rules: [
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

         // pug
         {
            test: /\.pug$/,
            loader: '@webdiscus/pug-loader',
         },

         // css
         {
            test: /\.scss$/i,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
               },
               'css-loader',
               'sass-loader',
            ],
         },

         // medias
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
};
