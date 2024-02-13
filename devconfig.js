const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    "mode":"development",
    "devtool":"hidden-source-map",
    "entry":"./assets/js/script.js",
    "output":{
     filename:"index.[hash].js",
     path:path.resolve(__dirname,"out")  
    },
    module: {

        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader,"css-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.svg/,
            type: 'asset'
          }
            
        ],
      },
    plugins: [new HtmlWebpackPlugin(
        {
         template:"./index.html",

        }
    ),new CleanWebpackPlugin(),new MiniCssExtractPlugin({ filename:"index.[hash].css"})
],
}