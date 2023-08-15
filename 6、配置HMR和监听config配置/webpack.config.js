// 导入path模块
const path = require("path");
// 导入webpack
// const webpack = require("webpack");
// 导入HtmlWebpackPlugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 如果使用hash，每次打包都会生成一个新的文件，需要清除旧的文件
// 导入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: ["./index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  mode: "development",
  devServer: {
    // 配置主机地址
    host: "localhost",
    // 是否自动打开浏览器
    open: false,
    // 配置端口号
    port: 8000,
    // 是否开启热更新
    hot: false,
    // liveReload: false,
    compress: true, // 开启gzip压缩
    // watchFiles: ["./src/index.html"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
