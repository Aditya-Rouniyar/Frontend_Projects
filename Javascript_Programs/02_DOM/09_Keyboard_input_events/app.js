const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

// Clear Input
taskInput.value = "";

// form.addEventListener("submit", runEvent);

// KeyDown
// taskInput.addEventListener("keydown", runEvent);
// Keyup
// taskInput.addEventListener("keyup", runEvent);
// Keypress
// taskInput.addEventListener("keypress", runEvent);
// Focus
// taskInput.addEventListener("focus", runEvent);
// Blur
// taskInput.addEventListener("blur", runEvent);
// Cut
// taskInput.addEventListener("cut", runEvent);
// Paste
// taskInput.addEventListener("paste", runEvent);
// Input
// taskInput.addEventListener("input", runEvent);
// Change
// taskInput.addEventListener("change", runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  //   console.log(e.target.value);

  //   heading.innerText = e.target.value;
  //   Get Input value
  //   console.log(taskInput.value);

  //   e.preventDefault();
}
