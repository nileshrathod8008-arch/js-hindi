const user = {
    username: "JohnDoe",
    price : 100,

    welcomeMessage: function () {
        console.log(`Welcome back  ${this.username}, to our website.`);
    }
        
}

// user.welcomeMessage(); // Welcome back JohnDoe, to our website. 
// user.username = "Nilesh";
// user.welcomeMessage(); // Welcome back Nilesh, to our website.


// function chai(){

//     let username = "Nilesh";
//     console.log(username); // Nilesh
// }

// chai(); // window object

// const user1 = (num1, num2) => {
//      return num1 + num2; // Explicit return 

//  }

//  user1(5, 10); // 15


// const user1 = (num1, num2) => num1 + num2; // implicit return

const user1 = (num1, num2) => ( num1 + num2 ); /// return likhne ki jarurt nhi jab implicit me paranthisis lagate he tb


 console.log(user1(5, 10)); // 15


