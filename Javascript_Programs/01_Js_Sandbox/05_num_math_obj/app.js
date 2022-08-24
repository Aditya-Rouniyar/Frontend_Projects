const var1 = 50;
const var2 = 4;
let val;

// Simple math with numbers
val = var1 + var2;
val = var1 - var2;
val = var1 * var2;
val = var1 / var2;
val = var1 % var2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 8, 55);
val = Math.max(2, 33, 4, 1, 8, 55);
val = Math.random();

// Random number from 1 - 20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);
