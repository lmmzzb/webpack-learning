// 导入path模块
const path = require("path");
module.exports = {
  entry: "./src/main.js",
  // 注意，我在output中没有提供filename,则会自动生成一个main.js
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
