// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book to List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert Col
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

  list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // Create a div
  const div = document.createElement("div");
  //  Add Classes
  div.className = `alert ${className}`;
  //   Add Text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector(".container");
  // Get Form
  const form = document.querySelector("#book-form");
  //   Insert Alert
  container.insertBefore(div, form);

  //   TimeOut after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Store Constructor
function Store() {}

// Get Books
Store.prototype.getBook = function () {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }

  return books;
};

// Display Books
Store.prototype.displayBooks = function () {
  const store = new Store();

  const books = store.getBook();

  books.forEach(function (book) {
    const ui = new UI();

    // Add book to UI
    ui.addBookToList(book);
  });
};

// Add Books
Store.prototype.addBook = function (book) {
  const store = new Store();

  const books = store.getBook();

  books.push(book);

  localStorage.setItem("books", JSON.stringify(books));
};

// Remove Books
Store.prototype.removeBook = function (isbn) {
  const store = new Store();

  const books = store.getBook();

  books.forEach(function (book, index) {
    if (book.isbn === isbn) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem("books", JSON.stringify(books));
};

// DOM Load Event
const store = new Store();

document.addEventListener("DOMContentLoaded", store.displayBooks);

// Event Listener to add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get Form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all the fields", "error");
  } else {
    //   Add book to list
    ui.addBookToList(book);

    // Add to Local Storage
    const store = new Store();

    store.addBook(book);

    // Show Success
    ui.showAlert("Book Added Successfully", "success");

    // Clear Fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener to delete book
document.getElementById("book-list").addEventListener("click", function (e) {
  // Instantiate UI
  const ui = new UI();

  //   Delete Book
  ui.deleteBook(e.target);

  //   Remove From Local Storage
  const store = new Store();

  store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  //   Show book deleted successfully
  ui.showAlert("Book Deleted Successfully", "success");

  e.preventDefault();
});
