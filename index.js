demo();

// Function Declaration
function demo() {
  console.log("Hello Baby");
}

// Function expressions
const demo2 = function () {
  console.log("hemkk");
};

// Arrow Function
const demo1 = (a, b) => {
  let sum = a + b;
  console.log(sum);
};

demo1(34, 56);

const user = {
  name: "Arvind",
  age: 25,
  height: "5.5f",
};

// Object Destructuring
const { name, age, height } = user;

console.log(name);
console.log(age);

// Template Literals
console.log(`Hello ${name}`);

// Spread Operators
const arr = [1, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [...arr, 10, 20, 30, 40];
console.log("arr2", arr2);
console.log("arr", arr);

// Rest Operators

const sum = (...num) => {
  console.log("add", num);
};

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

const arr3 = [10, 3, 50, 1, 6, 2, 0];
const number = new Set(arr3);

console.log("number", number);
