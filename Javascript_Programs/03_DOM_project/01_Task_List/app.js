// Define UI Variable
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event Listeners
loadEventListeners();

// Load all event Listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add Task Event
  form.addEventListener("submit", addTask);
  //   Remove Task Event
  taskList.addEventListener("click", removeTask);
  //   Clear Task Event
  clearBtn.addEventListener("click", clearTasks);
  //   Filter Task event
  filter.addEventListener("keyup", filterTask);
}

// Get Task From local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    //   Create li elements
    const li = document.createElement("li");
    // Add Class
    li.className = "collection-item";
    // Create a Text Node and append to li
    li.appendChild(document.createTextNode(task));
    // Create New Link Element
    const link = document.createElement("a");
    // Add class
    link.className = "delete-item secondary-content";
    // Add Icon html
    link.innerHTML = '<i class="fas fa-minus-circle 3x"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //   Create li elements
  const li = document.createElement("li");
  // Add Class
  li.className = "collection-item";
  // Create a Text Node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create New Link Element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add Icon html
  link.innerHTML = '<i class="fas fa-minus-circle 3x"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = "";
  e.preventDefault();
}

function storeTaskInLocalStorage(task) {	
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();

      //   Remove From local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear Task
function clearTasks(e) {
  //   taskList.innerHTML = " ";

  // Faster Method
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  //   Clear Tasks From local storage
  clearTasksFromLocalStorage();

  // https://jsperf.com/innerhtml-vs-removechild
}

// Clear Tasks from Local Storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter Task
function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
