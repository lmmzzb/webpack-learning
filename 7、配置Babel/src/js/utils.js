export function toUpcase(str) {
  // console.log("toUpcase");
  return str.toUpperCase();
}

export const sum = (a, b) => {
  return a + b;
};
console.log(Promise.resolve().then(() => console.log("async")));

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const p = new Person("jack");
console.log(p);
