// how data store and access in memory on this basis two type [ primitive and non-primitive ]
// difference [ call by value and call by reference ]

//primitive --> call by value ( copy data )
//7types [string, Number, Boolen, null, undefine, symbol, BigInt ]

//symbol --> use to make value unique
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false

const bigNumber = 33333333343222233n; //using bigInt

//non-primitive --> call by reference
//types [ array , Objects, Functions ]

const classMate = ["haider", "saad"]; //array

// object in culry braces
let myObj = {
  name: "haider",
  age: 20,
};

//function like variable
const myFunction = function () {
  console.log("hello from haider");
};

//to check type of variable
console.log(typeof bigNumber);

// is javaScript dynamic or static language
// javascript is a dynamic language and not static
//beacuse you not need to declare type of variable
