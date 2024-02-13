const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TreaserMinimizerPlugin = require("terser-webpack-plugin");
module.exports={
    mode:"production",
    "entry":"./assets/js/script.js",
    "output":{
     filename:"index.[hash].js",
     path:path.resolve(__dirname,"out")  
    },
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
          new TreaserMinimizerPlugin()
        ],
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