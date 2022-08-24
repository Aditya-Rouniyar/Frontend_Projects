const posts = [
  { title: "Post One", body: "This is Post one" },
  { title: "Post Two", body: "This is Post two" },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something Went Wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is Post Three" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
