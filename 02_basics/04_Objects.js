//// Object singleton

// const tnderUser = new Object(); // singleton object created using the Object constructor
const tnderUser = {}; // singleton object created using object literal syntax

// console.log(tnderUser); // {}

tnderUser.name = "Alice"; // Adding properties to the object
tnderUser.age = 25;
tnderUser.location = "Los Angeles";
tnderUser.email = "nilesh@google.com";

// console.log(tnderUser); // { name: 'Alice', age: 25, location: 'Los Angeles', email: '  

const tnderUser2 = {
  name: "Bob",
  age: 30,
  location: "San Francisco",
  email: "bob@example.com",
  fullname: {
    firstname: "Bob",
    lastname: "Smith"
  }
};          

// console.log(tnderUser2.name); // Bob
// console.log(tnderUser2.fullname.lastname); // Smith

// console.log(tnderUser2); // { name: 'Bob', age: 30, location: 'San Francisco', email: 'bob@example.com' }

const object1 = { 1: "one", 2: "two", 3: "three" };
const object2 = { 4: "four", 5: "five", 6: "six" };
const object3 = { 7: "seven", 8: "eight", 9: "nine" };


const mergedObject = Object.assign({}, object1, object2, object3); // Merging multiple objects into one
// console.log(mergedObject); // { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' }
const mergedObject2 = { ...object1, ...object2, ...object3 }; // Merging multiple objects into one using spread operator

// console.log(mergedObject2); // { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' }


const course = {
  title: "JavaScript Basics",
  duration: "4 weeks",
  instructor: "John Doe",
  topics: "data"
};

const {instructor} = course; // Destructuring assignment to extract the instructor property from the course object

console.log(instructor); // John Doe