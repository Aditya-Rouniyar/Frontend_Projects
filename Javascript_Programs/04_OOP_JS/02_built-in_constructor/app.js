// String

const name1 = "Jeff";
const name2 = new String("Jeff");

// name2.foo = "bar";
// console.log(name2);

console.log(typeof name1);

if (name2 === "Jeff") {
  console.log("Yes");
} else {
  console.log("No");
}

// Number
const num1 = 5;
const num2 = new Number(2);

console.log(num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2);

// Function
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1+1");

console.log(getSum2(1, 1));

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });

console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr2);

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re2);
