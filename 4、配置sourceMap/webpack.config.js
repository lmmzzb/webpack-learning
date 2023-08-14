// 导入path模块
const path = require("path");
// 导入HtmlWebpackPlugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 如果使用hash，每次打包都会生成一个新的文件，需要清除旧的文件
// 导入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "development",
  // devtool: "eval", // 生成eval打包文件，不生成map文件，将source-map放在eval中
  // devtool: "source-map", // 生成source-map打包文件，生成map文件
  // devtool: "eval-cheap-source-map", // 生成eval-cheap-source-map打包文件，不生成map文件，会帮你定位到行，不会定位到列
};
