// Immediately Invoked Function Expression (IIFE)

(function chai() { /// named IIFE
    let name = "Nilesh"
    console.log(`DB connected ${name}`);
})();



((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Nilesh Rathod");