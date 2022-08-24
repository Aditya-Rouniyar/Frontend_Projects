// Object.prototype
// Person.prototype

function person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  //   this.calculateAge = function () {
  //     const diff = Date.now() - this.birthday.getTime();
  //     const ageDate = new Date(diff);
  //     return Math.abs(ageDate.getUTCFullYear() - 1970);
  //   };
}

// Calculate Age
person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get Full Name
person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new person("John", "Doe", "8-12-90");
const mary = new person("Mary", "Johnson", "8-12-90");

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried("Smith");

console.log(mary.getFullName());

console.log(mary.hasOwnProperty("firstName"));

console.log(mary.hasOwnProperty("getFullName"));
