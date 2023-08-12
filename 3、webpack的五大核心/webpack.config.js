// 导入path模块
const path = require("path");
// 导入HtmlWebpackPlugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 如果使用hash，每次打包都会生成一个新的文件，需要清除旧的文件
// 导入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    hello: "./index.js",
    sum: "./main.js",
  },
  output: {
    // path: path.resolve(__dirname, "dist"),
    // path: path.resolve(__dirname, "dist1"),
    path: path.resolve(__dirname, "dist2"),
    filename: "[name][hash].js",
    // ext 为文件的后缀名
    assetModuleFilename: "./images/[name][hash][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "development",
  // 配置loader
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset/resource",
        generator: {
          // 覆盖assetModuleFilename
          // filename: "./images/[name][ext]",
        },
        include: [
          path.resolve(__dirname, "src/assets"),
          // path.join(__dirname, "assets/images"),
        ],
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 小于10kb的图片会被base64处理
          },
        },
      },
    ],
  },
};
