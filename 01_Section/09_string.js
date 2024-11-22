const name = "haider"

const repoCount = 50

// console.log(name + repoCount + "value"); outdated
 
// string interpolation (make placeholder) --> using Backticks ``
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

/*
//also delcare string like this
const gameName = new String('Ali')

//access key value pair
console.log(gameName[0]);

// acces prototype
console.log(gameName.__proto__);

//access length property
console.log(gameName.length);

// access method
console.log(gameName.toUpperCase()); //not change orginal value
console.log(gameName.charAt(2)); //check charcter
console.log(gameName.indexOf('i'))//check charcter location
 
*/

const myName = new String('haider-Ali');

console.log(myName.substring(0,4)) //last value not included

//in slice i can give neagtive value (it can start from reverse)
myName.slice();

const input = "   haider@gmail.com    ";
console.log(input);

//trim() --> remove the whitespace and newline
// console.log(input.trim()); 

// const url = "https://haider.com/haider%20aLi";

// console.log(url.replace('%20','-')); //replace value

// console.log(url.includes('haider')); //true 

const splitName = "haider-ali-com";

console.log(splitName.split('-'));