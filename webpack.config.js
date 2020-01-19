const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: '.'
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true
    }),
    new ExtractTextPlugin("bundle.css")
  ],
  module: {
    rules: [
      {
        test: require.resolve('./src/libs/purejs-onepage-scroll/onepagescroll.js'),
        use: 'exports-loader?onePageScroll=onePageScroll'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif|ttf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};