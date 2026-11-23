///// Arrays Part-2 ////////

const Marvel_Heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];

const DC_Heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern", "Aquaman"];

// 1. Accessing Array Elements
console.log(Marvel_Heroes[0]); // Iron Man
console.log(DC_Heroes[2]); // Wonder Woman

// 2. Modifying Array Elements
Marvel_Heroes[1] = "Captain Marvel";/// Modifies the second element of the array
console.log(Marvel_Heroes); // ["Iron Man", "Captain Marvel", "Thor", "Hulk", "Black Widow", "Hawkeye"]

// 3. Adding Elements to an Array
Marvel_Heroes.push("Spider-Man");/// Adds a new element to the end of the array
console.log(Marvel_Heroes); // ["Iron Man", "Captain Marvel", "Thor", "Hulk", "Black Widow", "Hawkeye", "Spider-Man"]

// 4. Removing Elements from an Array
DC_Heroes.pop();/// Removes the last element from the array
console.log(DC_Heroes); // ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"]

// const all_Heroes = Marvel_Heroes.concat(DC_Heroes);
// console.log(all_Heroes); // ["Iron Man", "Captain Marvel", "Thor", "Hulk", "Black Widow", "Hawkeye", "Spider-Man", "Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"]

const all_Heroes = [...Marvel_Heroes, ...DC_Heroes]; // Using spread operator to merge arrays
