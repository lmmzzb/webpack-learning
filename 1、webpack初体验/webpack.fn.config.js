const path = require("path");
module.exports = (env, args) => {
  // 返回配置对象
  console.log(env, args);

  // { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true }
  // {
  //   config: [ 'webpack.config.fn.js' ],
  //   env: { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true }
  // }
  return {
    // 入口文件
    entry: "./src/main.js",
    // 出口文件
    output: {
      // 输出路径
      path: path.resolve(__dirname, "dist"),
      // 输出文件名
      filename: "fn.js",
    },
    // 模式
    mode: env.production ? "production" : "development",
  };
};
