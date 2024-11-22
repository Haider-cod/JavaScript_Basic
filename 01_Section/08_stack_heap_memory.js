//how memory work in javascript?
// two types of memory [ stack , Heap ]
//stack use -->  on primitive type
//heap use --> non - primtive type

let myYoutubeName = "College Cuts";

let anotherName = myYoutubeName;
anotherName = "Public Channel";
console.log(anotherName);
console.log(myYoutubeName);

// object
let userOne = {
  email: "ha90@gmail.com",
  upi: "userAybl",
};

let userTwo = userOne; // Both userOne and userTwo refer to the same object

userTwo.email = "rh@gmail.com"; // This changes the email property in the same object

console.log(userOne.email);
console.log(userTwo.email);
