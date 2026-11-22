// Dates 

let myDate = new Date(); // Current date and time
console.log(myDate); // Output: Current date and time
// console.log(myDate.toString()); // Output: Current date and time in string format
// console.log(myDate.toDateString()); // Output: Current date in string format
// console.log(myDate.toISOString()); // Output: Current date in ISO format
// console.log(myDate.toLocaleString()); // Output: Current date and time in local format
// console.log(myDate.toLocaleDateString()); // Output: Current date in local format
// console.log(myDate.toJSON()); // Output: Current date in JSON format
// console.log(myDate.toUTCString()); // Output: Current date in UTC format
// console.log(myDate.getTimezoneOffset()); // Output: Current date in ISO format

console.log(myDate.toLocaleString('default', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long'
})) ; // Output: Current date and time in local format for Asia/Kolkata timezone

