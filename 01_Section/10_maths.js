//math library come with javascript --> by default

console.log(Math); //itself an object

// console.log(Math.abs(-4)); //change " - " into " + " 

// console.log(Math.round(4.5)); //round off

// console.log(Math.ceil(5.2)); //choose top value to round off

// console.log(Math.floor(4.9)); //choose lowest value to round off

// console.log(Math.min(23,4,2,4,3)) //find min value in array

// console.log(Math.max(23,4,2,4,3)) //find max value in array

//where math library used ?
// console.log(Math.random()) // value b/w 0 and 1

// result + 1 to avoid zero
// console.log((Math.random() * 10) + 1); //value shift 


const min = 10;
const max = 20;
                        //  20 - 10 + 1(to avoid zero)
console.log(Math.floor(Math.random()  * (max - min + 1)) + min)
