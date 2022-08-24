// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if it is array
val = Array.isArray(numbers);
// Get a single value
val = numbers[3];
val = numbers[0];
// Insert into an array
numbers[2] = 100;
// Find the index of the value
val = numbers.indexOf(44);

// // Mutating Arrays
// // Add on to the end
// numbers.push(250);
// // Add on to the front
// numbers.unshift(130);
// // Take off from the end
// numbers.pop();
// // Splice values
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sorting
// val = fruit.sort();
// val = numbers.sort();

// // Use the "compare funtion"
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// Find
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
