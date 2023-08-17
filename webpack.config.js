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
    hot: true,
    liveReload: false,
    // compress: true, // 开启gzip压缩
    // watchFiles: ["./src/index.html"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 匹配mjs或者js文件
        test: /\.m?js$/,
        // 排除node_modules目录下的文件
        exclude: /node_modules/,
        // 使用babel-loader转换
        use: {
          loader: "babel-loader",
          // 配置参数，如果在项目根目录下有babel.config.js或者.babelrc文件，会自动读取配置
          // options: {
          //   // 预设，作用是指示babel做怎么样的兼容性处理
          //   presets: [["@babel/preset-env", { targets: "ie 11" }]],
          // },
        },
      },
    ],
  },
};
