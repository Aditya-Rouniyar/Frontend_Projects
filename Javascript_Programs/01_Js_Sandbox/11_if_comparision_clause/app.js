const id = 100;

// // Equal to
// if (id == 101) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// // Not Equal to
// if (id != 101) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// // Equal to value & type
// if (id === 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// // Not Equal to value & type
// if (id !== 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// // Test if undefined
// if (typeof id !== "undefined") {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log("No ID");
// }

// // Greater or Less than
// if (id >= 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// IF ELSE
const color = "yellow";

// if (color === "red") {
//   console.log("Color is red");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("Color is not red or blue");
// }

// Logical Operators
const name = "steve";
const age = 15;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is a adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary  Operator
console.log(id === 100 ? "correct" : "incorrect");

// Without Braces
if (id === 100) console.log("Correct");
else console.log("Incorrect");
