// // document.getElementById()

// console.log(document.getElementById("task-title"));

// // Get things from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");

// // Changing the Styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// // taskTitle.style.display = "none";

// // Changing Content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Task";
// taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-action"));
console.log(document.querySelector("h5"));

document.querySelector("#task-title").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";
