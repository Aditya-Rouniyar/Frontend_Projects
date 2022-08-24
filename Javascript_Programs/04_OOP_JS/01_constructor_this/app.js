// Person Constructor
function person(name, dob) {
  this.name = name;
  //   this.age = age;
  this.birthday = new Date(dob);

  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const brad = new person("Brad", 33);
// const john = new person("John", 24);

// console.log(john.age);

const brad = new person("Brad", "11-23-1998");

console.log(brad.calculateAge());
