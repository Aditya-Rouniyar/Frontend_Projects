// REPLACE ELEMENT

// CREATE AN ELEMENT
const newHeading = document.createElement("h2");

// Add id
newHeading.id = "task-title";

// New Text Node
newHeading.appendChild(document.createTextNode("Task List"));

// Get Old Heading
const oldHeading = document.getElementById("task-title");
// Parent
const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENTS
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove List Items
lis[0].remove();

// Remove Child Element
list.removeChild(lis[3]);

// Class & Attribute
const firstli = document.querySelector("li:first-child");
const link = firstli.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");

val = link;

// Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://www.google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;

console.log(val);
