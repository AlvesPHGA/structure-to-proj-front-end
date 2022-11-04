const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
   mode: 'development',

   entry: {
      'index': './src/views/pages/index.pug', // => dist/index.html
   },

   output: {
      filename: 'assets/js/[name].[contenthash].js',
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
      static: './dist/',
      compress: true,
      // enable HMR live reload
      watchFiles: {
         paths: ['src/**/*.*'], 
         options: {
           usePolling: true,
         },
      },
   },

   plugins: [
      // render Pug files from Webpack entry into HTML, extract CSS and JS from sources defined in Pug
      new PugPlugin({
         pretty: true, // formatting HTML, should be used in development mode only
         extractCss: {
         // output filename of CSS files
         filename: 'assets/css/[name].[contenthash:8].css'
         },
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
            loader: PugPlugin.loader, // PugPlugin contain the '@webdiscus/pug-loader',
         },

         // css
         {
            test: /\.scss$/i,
            use: [
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
