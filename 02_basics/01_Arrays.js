/// Array 

const myArray = [1, 2, 3, 4, 5];
// console.log(myArray[0]); // 1
// console.log(myArray[1]); // 2
// console.log(myArray[2]); // 3
// console.log(myArray[3]); // 4
// console.log(myArray[4]); // 5

// // Array methods
// myArray.push(6); // adds 6 to the end of the array
// console.log(myArray); // [1, 2, 3, 4, 5, 6]

// myArray.pop(); // removes the last element (6)
// console.log(myArray); // [1, 2, 3, 4, 5]

// myArray.shift(); // removes the first element (1)
// console.log(myArray); // [2, 3, 4, 5]

// myArray.unshift(0); // adds 0 to the beginning of the array
// console.log(myArray); // [0, 2, 3, 4, 5]

// console.log(myArray.length); // 5

// console.log(myArray.indexOf(3)); // 2
// console.log(myArray.includes(3)); // true
// console.log(myArray.includes(6)); // false


// slice method and splice method
const myArray2 = [1, 2, 3, 4, 5];
console.log(myArray2.slice(1, 4)); // [2, 3, 4]
console.log(myArray2); // [1, 2, 3, 4, 5]

myArray2.splice(1, 2); // removes 2 elements starting from index 1
console.log(myArray2); // [1, 4, 5]     
