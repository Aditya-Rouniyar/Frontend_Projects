const firstName = "Williams";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Aditya";
const tags = "Web Design, Web Development, Programming";
let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Brad";
val = "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

val = firstName[2];

// IndexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt("2");

// Get last charAt()
val = firstName.charAt(firstName.length - 1);

// SubStirng
val = firstName.substring(0, 4);

// Slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// Split
val = str.split(" ");
val = tags.split(",");

// Replace
val = str.replace("Aditya", "Ady");

// Include
val = str.includes("Aditya");
val = str.includes("Ady");

console.log(val);
