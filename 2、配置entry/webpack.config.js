// 导入path模块
const path = require("path");
// 导入HtmlWebpackPlugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 如果使用hash，每次打包都会生成一个新的文件，需要清除旧的文件
// 导入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // entry: "./src/main.js",
  // entry: ["./src/index.js", "./src/main.js"], // 数组会将两个入口文件打包到一起
  context: path.resolve(__dirname, "src"), // 用于从配置中解析入口点(entry point)和 加载器(loader)
  entry: {
    hello: "./index.js",
    sum: "./main.js",
  }, // 对象形式的会将key作为打包的文件name
  // 注意，我在output中没有提供filename,则会自动生成一个main.js
  output: {
    // path: path.resolve(__dirname, "dist"),
    // path: path.resolve(__dirname, "dist1"),
    path: path.resolve(__dirname, "dist2"),
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
  mode: "development",
};
