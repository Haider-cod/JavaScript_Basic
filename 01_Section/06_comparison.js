/* may be true or false

console.log( 2 > 1)
console.log( 2 >= 1)
console.log( 2 < 1)
console.log( 2 <= 1)
console.log( 2 == 1)
console.log( 2 != 1) 

*/

/* problem come when diffrent data type */
//js automatically convert "2" into 2
console.log("2" > 1); //true

/* Comparison and equaltiy check work diffrently in js*/
console.log(null > 0); //false
console.log(null == 0); //false

// comparison convert null into a num treating it as zero
console.log(null >= 0); //true

// strick check by ( === )
console.log("1" == 1); //true
console.log("1" === 1); //not convert string into num
