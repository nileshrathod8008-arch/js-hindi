///// Objects

// Objects are collections of key-value pairs
// They can be used to store and organize data

// Creating an object

/// Singleton object 

// Object literal syntax

const mysymbol = Symbol("key1");

const person = {
  name: "John",
  age: 30,
  [mysymbol]: "key1",
  location: "New York",
  email: "john@example.com",
  isloggedIn: true,
  lastLogin: new Date(),
 }
  
//  console.log(person.name); // John
//  console.log(person.age); // 30
//  console.log(person[mysymbol]); // key1
//  console.log(person.location); // New York
//  console.log(person.email); // john@example.com 
//  console.log(person.isloggedIn); // true
//  console.log(person.lastLogin); // [Date object]

 person.greeting = function() {
    console.log("Hello, JS Developers!"); // Adding a method to the object
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);// Using 'this' keyword to access object properties
  };

console.log(person.greeting()); // Hello, my name is John and I am 30 years old.
