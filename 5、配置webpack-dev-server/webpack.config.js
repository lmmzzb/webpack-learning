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
  devServer: {
    // 配置主机地址
    host: "localhost",
    // 是否自动打开浏览器
    open: true,
    // 配置端口号
    port: 9000,
    // 是否开启热更新
    hot: true,
    client: {
      // 开启错误提示
      overlay: { errors: true, warnings: true },
      // 开启进度条
      progress: true,
    },
    compress: true, // 开启gzip压缩
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 代理的目标地址
        pathRewrite: { "^/api": "" }, // 重写路径
        changeOrigin: true, // 是否改变源地址
        secure: false, // 是否验证SSL证书
      },
    },
  },
};
