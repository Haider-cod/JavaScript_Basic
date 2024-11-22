//array is an object

//array syntax
//0, 1, 2 "haider", true --> are elements
const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["superman", "batman" ]
const myArray2 = new Array(1,2,3,4);




// interview realted
// Array copy operations create shallow copy
//shallow copy --> change also done in orignal array
//deep copy --> properties dont share the same reference


//[ Array methods ]


// myArray.push(27) // add values in array end
// myArray.pop() //remove last value in array

// myArray.unshift(9) //insert in array start
// myArray.shift() //remove the first value

// console.log(myArray.includes(3));//check 3 include or not
myArray.indexOf(19) //if value not exit output = -1

// join() --> type change to string + bind value
// const newArray = myArray.join() 
// console.log(myArray);
// console.log(newArray);

//slice, splice
// slice --> last range not included 
// splice --> last range included + orignal array change (part remove)
console.log("A ", myArray);

const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3);
console.log(myn2);
console.log("C", myArray);


