
const myObject = {
    myname: "haider",
    age: 20
 }

 for (const key in myObject) {
//    console.log(`${key} : ${myObject[key]}`);
   
 }

 const arr = ["js", "rb", "py", "java" ,"cpp"];

 for (const key in arr) {
//    console.log(arr[key]); //give key
   
 }

 const map = new Map()

 map.set('IN', "India")
 map.set('US', "United States of america")
 map.set('Fr', "France")
 map.set('IN', "India")

//  console.log(map);

 for (const [key, value] in map) {
    // console.log(key, value); not iterable
    
 }

 