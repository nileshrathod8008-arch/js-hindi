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
console.log(loginUserMessage()); // Calling the function without an argument and logging the returned message