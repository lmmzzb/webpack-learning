import { toUpcase } from "./js/utils.js";
console.log(toUpcase("hello world"));
console.log(toUpcase("my name is zzb"));
if (module.hot) {
  module.hot.accept();
}
