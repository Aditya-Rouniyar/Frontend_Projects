// Create element
const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add Id
li.id = "new-item";

// Set Attribute
li.setAttribute("title", "New Item");

// Create text node and append
li.appendChild(document.createTextNode("Hello World"));

// Create a new link element
const link = document.createElement("a");

// Add Class
link.className = "delete-item secondary-content";

// Add Icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
