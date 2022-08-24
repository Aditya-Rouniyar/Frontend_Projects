// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there, I am ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

// console.log(person1.greeting());
// console.log(person1);

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-55-555", "Standard");

console.log(customer1);

// Customer Greeting
Customer.prototype.greeting = function () {
  return `Hello there, I am ${this.firstName} ${this.lastName}. I Welcome You`;
};

console.log(customer1.greeting());
