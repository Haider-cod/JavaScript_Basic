const useEmail = "ha9035@gmail.com";

// if(useEmail){
// console.log("got user email");

// }else{
//     console.log("not got email");
// }

//****************** [ falsy values ] *******************
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//****************** [ Truthy values ] *******************
// "0", 'false', " ", [], {}, function(){}


// *******************  [To check array] ******************* 

const userArray = [];

// if(userArray.length === 0){
// console.log("yup empty");

// }else{
//     console.log("not empty");
// }


//*******************  [To check object] ******************* 

const userobj = {};

//Object.keys(userobj) --> return an array
// if(Object.keys(userobj).length === 0){
// console.log("yup empty");

// }else{
//     console.log("not empty");
// }


//************* [ Nullish Coalescing Operator (??) ] *************
// : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 
// val1 = undefined ?? 15
val1 = null ?? undefined ?? 25

// console.log(val1);



//************* [  ternary Operator  ] *************
 
// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("yes greater") : console.log("not greator");
;

