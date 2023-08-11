// 导入path模块
const path = require("path");

// 导出多个配置对象
module.exports = [
  {
    // 入口文件
    entry: "./src/main.js",
    // 出口文件
    output: {
      // 输出路径
      path: path.resolve(__dirname, "dist_more"),
      // 输出文件名
      filename: "index-amd.js",
      libraryTarget: "amd",
    },
    name: "amd",
    // 模式
    mode: "production",
  },
  {
    // 入口文件
    entry: "./src/main.js",
    // 出口文件
    output: {
      // 输出路径
      path: path.resolve(__dirname, "dist_more"),
      // 输出文件名
      filename: "index-common.js",
      // 使用commonjs规范
      libraryTarget: "commonjs",
    },
    name: "commonjs",
    mode: "production",
  },
];

// 下面的配置是指定并行构建的数量
// module.exports.parallelism = 2;
