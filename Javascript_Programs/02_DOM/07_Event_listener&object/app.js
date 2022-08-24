// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log("Hello World");
//   e.preventDefault();
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  let val;

  val = e;
  // Event Target Element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  //   Event Type
  val = e.type;

  //   Time Stamp
  val = e.timeStamp;

  //   Coordinate event related to the window
  val = e.clientX;
  val = e.clientY;

  //   Coordiante event related to the element
  val = e.offsetX;
  val = e.offsetY;

  console.log(val);
}
