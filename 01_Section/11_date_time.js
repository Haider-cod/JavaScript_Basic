// Date objects represent a single moment 

// moment define --> January 1, 1970

//date ususally calculate in miliseconds

let myDate = new Date(); //date instance
// console.log(myDate.toString());
// console.log(myDate.toDateString()) ; //Thu Oct 24 2024
// console.log(myDate.toISOString()); //024-10-24T04:26:12.709Z
// console.log(myDate.toTimeString()); //09:26:50 GMT+0500 (Pakistan Standard Time)

console.log(typeof myDate); //an object


//to declare specific date

// let myOwnDate = new Date(10,24,2024)
// month start in js with 0

let myOwnDate = new Date(2024, 0,23, 9, 32)
// console.log(myOwnDate.toDateString()); //Mon Jul 16 1917
// console.log(myOwnDate.toLocaleString());

// mm//dd/yyyy
// Date("01-14-2023")

// time stamp  --> use when design quizez, poles in js

let myTimeStamp = Date.now();

// console.log(Math.round(Date.now()/1000)); //to convert in seconds


let newDate = new Date()
console.log(newDate.getMonth() + 1); //as month is 0 

// mostly used

newDate.toLocaleTimeString('default', {
    weekday:"long",
    // timeZone: 
})