const coding = ["js", "ruby", "py", "python"];

//************* [ for each not return any value ]
// const value = coding.forEach((item) => {
//    // console.log("items : ", item);

//     return item;

// })

// console.log("value :" ,value)

// ******************** [ Filter Operation ] ******************

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = myNum.filter((num) => { return num > 5})

// console.log(values);

// ******************** [ using ForEach] ******************

const newNums = [];

// myNum.forEach((item) => { if(item > 4){
//     newNums.push(item)
// }})

// console.log(newNums);

const books = [
  { title: "book one", genre: "History", publish: "2081" },
  { title: "book two", genre: "Fiction", publish: "2085" },
  { title: "book three", genre: "Fiction", publish: "1990" },
  { title: "book four", genre: "History", publish: "1892" },
  { title: "book five", genre: "Fiction", publish: "2089" },
];

let userBooks = books.filter((book) => {
  return book.genre === "History";
});

userBooks = books.filter((book) => {
  return book.publish >= 2000 && book.genre === "History";
});

// console.log(userBooks);

// *********************** [ map ] ***********************

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numAddedby10 = myNumbers.map((num) => { return num + 10})

//  console.log(numAddedby10);

// ******************** [ channing ] **********************

const newNumbers = myNumbers
  .map((num) => {
    return num + 10; // [11,12,13,14 ,15 ,16 , 17, 18 ,19, 20]
  })
  .map((num) => {
    return num + 1; // [12,13,14,15,16 ,17 , 18, 19 ,20, 21]
  }).filter((num) => { return num >= 15 })

//   console.log(newNumbers);

const arr = [1, 2, 3]



arr.map(() => {}  )