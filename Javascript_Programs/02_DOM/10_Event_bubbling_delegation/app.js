// Event Bubbling

// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("Card Title");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("Card Content");
// });

// document.querySelector(".card").addEventListener("click", function () {
//   console.log("Card");
// });

// document.querySelector(".col").addEventListener("click", function () {
//   console.log("col");
// });

// Event Delegation

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  //   console.log("delete Item");
  //   console.log(e.target);

  //   if (e.target.parentElement.className === "delete-item secondary-content") {
  //     console.log("delete item");
  //   }

  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
    console.log("delete item");
  }
}
