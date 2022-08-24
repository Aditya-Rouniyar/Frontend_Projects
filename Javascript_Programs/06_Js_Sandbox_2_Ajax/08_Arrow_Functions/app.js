// const sayHello = function () {
//   console.log("Hello");
// };
// sayHello()

// const sayHello = () => {
//   console.log("Hello");
// };
// sayHello()

// One line function does not need braces
// const sayHello = () => console.log("Hello");
// sayHello()

// One line returns
// const sayHello = () => "Hello";

// console.log(sayHello());

// Return Object
// const sayHello = () => ({ msg: "Hello" });

// console.log(sayHello());

// Single Param does not parenthesis
// const sayHello = (name) => console.log(name);
// sayHello("Aditya");

// Multiple Param need parenthesis
// const sayHello = (firstName, lastName) => console.log(firstName, lastName);
// sayHello("Aditya", "Rouniyar");

const users = ["Aditya", "Ritu", "Sijana"];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map(name => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
