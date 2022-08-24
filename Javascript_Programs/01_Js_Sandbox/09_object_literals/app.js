const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "Florida",
  },
  getBirthYear: function () {
    return 1987;
  },
};

let val;

val = person;
// Get Specific Value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.address["state"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "Mike", age: 30 },
  { name: "John", age: 23 },
  { name: "Karen", age: 36 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
