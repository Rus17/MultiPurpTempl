let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

let conf = {
   entry: './src/index.js',

   output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js',
   },

   module: { 
      rules: [
         {
            test: /\.js$/,
            loader: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               use:[{
                  loader: "css-loader",                  
                  options: {
                     url: false
                  }
               }]
            })
         },
         {
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
               use: [               
                  {
                     loader: "css-loader",
                     options: {
                        url: false
                     }
                  },
                  {
                     loader: 'postcss-loader',
                     options: {
                        sourceMap: true,
                        config: {
                          path: 'postcss.config.js'
                        }
                     }
                  },
                  {
                     loader: "sass-loader"
                  }
               ]
            })
         }
      ]
   },

   plugins: [
      new  ExtractTextPlugin("style.css"),
      new CopyWebpackPlugin([
         {
            from: './src/fonts',
            to: './fonts'
         },
         {
           from: './src/img',
           to: './img'
         }
      ])
   ]
};

module.exports = (env, options) => {
   let production = options.mode === 'production';
   conf.devtool =  production
      ? 'source-map'
   : 'eval-sourcemap';

   return conf;
}