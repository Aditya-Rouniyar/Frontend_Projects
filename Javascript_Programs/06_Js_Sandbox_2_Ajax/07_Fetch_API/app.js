document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

// Get Local text file data
function getText() {
  fetch("test.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.getElementById("output").textContent = data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// Get Local Json data
function getJson() {
  fetch("posts.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
}

// Get Local external API
function getExternal() {
  fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
}
