const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Bangalore";
let html;

// Without Template String (es5)
html =
  "<ul> <li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

htm =
  "<ul>" +
  "<li>Name: " +
  name +
  "</li>" +
  "<li>Age: " +
  age +
  "</li>" +
  "<li>Job: " +
  job +
  "</li>" +
  "<li>City: " +
  city +
  "</li>" +
  "</ul>";

function hello() {
  return "Hello";
}

//   With Template String (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>Sum: ${2 + 2}</li>
    <li>Function: ${hello()}</li>
    <li>Conditional: ${age > 30 ? "Over 30" : "Under 30"}</li>
  </ul>
`;

document.body.innerHTML = html;
