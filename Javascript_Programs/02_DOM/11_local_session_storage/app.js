// set local Storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

// set session storage item
// sessionStorage.setItem("name", "Beth");

// remove from the storage
// localStorage.removeItem("name");

// get from local Storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// Clear Local Storage
// localStorage.clear();

// console.log(name, age);

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task Saved");
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});
