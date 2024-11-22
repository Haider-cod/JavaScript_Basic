// ****************** [ for of ] **********************

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4 ,5]

for (const element of arr) {
  //  console.log(element);
}

const greeting = "hello world";

for (const element of greeting) {
  if(element === " "){
    continue
  }else{
    // console.log(element);
  }
    
}

// Maps --> like arrays
// Map --> itself an object hold key value pair. remember the insertion order
// know for their unique value
const map = new Map()

 map.set('IN', "India")
 map.set('US', "United States of america")
 map.set('Fr', "France")
 map.set('IN', "India")

//  console.log(map);

 for (const [key, value]of map) {
    // console.log(key, value);
    
 }


 const myObject = {
    myname: "haider",
    age: 20
 }

//  for (const element of myObject) {
//     console.log(element);
    
//  }
 