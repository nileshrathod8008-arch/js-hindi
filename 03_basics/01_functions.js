///// Function

function sayMyName(){
    console.log("N")
    console.log("I")
    console.log("L")
    console.log("E")
    console.log("S")
    console.log("H")   
}

// sayMyName(); // Calling the function to execute its code

// function addNumbers(num1, num2){
//     console.log(num1 + num2); // Returning the sum of num1 and num2

// }
addNumbers(5, 10); // Calling the function with arguments 5 and 10

function addNumbers(num1, num2){
    let add = num1 + num2; // Returning the sum of num1 and num2
    return add;
}

const result = addNumbers(5, 10);
// console.log(result);


// function loginUserMessage(username){
//     return `Welcome back ${username}`; // Returning a welcome message with the username 
    
// }

// console.log(loginUserMessage("Nilesh")); // Calling the function with the argument "Nilesh" and logging the returned message    



function loginUserMessage(username){

    if(!username){
        console.log("Please provide a username"); // Logging an error message if the username is not provided
        return; // Exiting the function early if the username is not provided
    }
    return `Welcome back ${username}`; // Returning a welcome message with the username 
    
}

// console.log(loginUserMessage("Nilesh")); // Calling the function with the argument "Nilesh" and logging the returned message
// console.log(loginUserMessage()); // Calling the function without an argument and logging the returned message


function calculateCartPrice(...prices){ // Using rest parameter to accept multiple price arguments
    return prices
}
// console.log(calculateCartPrice(10, 20, 30, 40)); // Calling the function with multiple price arguments and logging the returned total price

const user = {
    username: "Nilesh",
    price: 100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Logging the username and price from the passed object
}
// handleObject(user); // Calling the function with the user object as an argument

handleObject({
    username: "Alice",
    price: 200 

})


const myNewArray = [1, 2, 3, 4, 5];

function returnArray(array){
    return array; // Returning the passed array
}

console.log(returnArray(myNewArray)); // Calling the function with the myNewArray and logging the returned array