/**
 *
 * @version 2.0.0
 * @author Aditya Rouniyar
 * @license MIT
 *
 */

class EasyHTTP {
  // Make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return resolve(data);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  }

  // Make HTTP POST Request
  post(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return resolve(data);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return resolve(data);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  }

  // Make a HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then(() => {
          return resolve("Resource Deleted");
        })
        .catch((err) => {
          return reject(err);
        });
    });
  }
}
