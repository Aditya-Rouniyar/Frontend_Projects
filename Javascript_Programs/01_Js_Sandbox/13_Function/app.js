// Function Declarations

function greet(firstName = "John", lastName = "Doe") {
  //   if (typeof firstName === "undefined") {
  //     firstName = "John";
  //   }
  //   if (typeof lastName === "undefined") {
  //     lastName = "Doe";
  //   }
  //   console.log("Hello");
  return "hello " + firstName + " " + lastName;
}

// console.log(greet());

// Function Expressions

const square = function (x = 3) {
  return x * x;
};

// console.log(square());

// Immediately Invokable Function Expression : IIFEs

// (function () {
//   console.log("IIFE Ran...");
// })();

// (function (name) {
//   console.log("Name: " + name);
// })("Brad");

// Property Methods

const todo = {
  add: function () {
    console.log("Add Todo...");
  },
  edit: function (id) {
    console.log(`Edit Todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete Todo...");
};

todo.add();
todo.edit(23);
todo.delete();
