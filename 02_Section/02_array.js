const marvel_heros = ["thor", "Ironman",  "Spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// push() --> push on existing array
// marvel_heros.push(dc_heros);

// console.log(marvel_heros[3][1])

// concat() --> return a new array
// const marvel = marvel_heros.concat(dc_heros)

// console.log(marvel); //combine 

// spread() --> one one element
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1 ,2 ,3, [4, 5, 6], 7, [6, 7 , [4, 5]]]

// flat() --> return single array
// let realArray = anotherArray.flat(Infinity)
// console.log(realArray);


// console.log(Array.isArray("Hitesh"));

// //convert into array
// console.log(Array.from("Hitesh"));

// //empty array because not directly convert
// console.log(Array.from({name:"haider"})); //intersting

let score1 = 100, score2 = 200, score3 = 300;

// return new array from set of elements
console.log(Array.of(score1,score2,score3));
