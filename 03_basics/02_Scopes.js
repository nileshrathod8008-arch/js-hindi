//  let a = 20;
//  const b = 30;
//  var c = 40;


if (true) {
    let a = 20;
    const b = 30;
    var c = 40;

}




// console.log(a); // 20
// console.log(b); // 30
// console.log(c); // 40


function one (){
    const username = 'nilesh'

    function two (){
        const webstie = 'nilesh.com'
        console.log(username);
        console.log(webstie);
    }

    // console.log(webstie); // error
    // two();
}

// one();


if (true) {
    const username = 'nilesh'
    if (username === 'nilesh') {
        const website = ' nilesh.com'
        // console.log(username + website);
    }
    // console.log(website); // error
}

// console.log(username); // error



// ++++++++++++++++++ intersting example ++++++++++++++++++++++++

function addone (num){
    return num + 1;

}

addone(5); // 6

const addtwo = function (num){
    return num + 2;
}

addtwo(5); // 7