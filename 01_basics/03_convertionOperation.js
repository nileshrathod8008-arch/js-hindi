let score = "33abs"

console.log(typeof score) // number
console.log(typeof (score)) // string

let valueInNumber = Number(score) // convert score to number
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // 33


// ""33abs" => 33
// "33abs" => NaN
// true => 1; false => 0
// "" => false; "nilesh" => true

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // convert isLoggedIn to boolean
console.log(booleanIsLoggedIn) // true