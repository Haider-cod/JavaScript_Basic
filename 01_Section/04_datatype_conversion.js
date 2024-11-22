/* conversion in number */
let score = "33abc";
console.log(typeof score); //stirng

// grantee that value in score is number
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //NAN --> [not a number] --> also with undefine

let mark = null;
console.log(typeof mark); //object

let markInNumber = Number(mark);
console.log(typeof markInNumber);
console.log(markInNumber); //0

/* conversion in boolean */
let logIn = "haider";

let boolLogIn = Boolean(logIn);
console.log(typeof boolLogIn); //boolean
console.log(boolLogIn); //true

// value = 1 => conversion(true), value = 0 => conversion(false)
// value = "haider" => conversion(true), value = "" => conversion(false)
