// 导入path模块
const path = require("path");
module.exports = {
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    // 输出路径
    path: path.resolve(__dirname, "dist"),
    // 输出文件名
    filename: "bundle.js",
  },
};
