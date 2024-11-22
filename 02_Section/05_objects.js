//  Objects destructuring and JSON API

const course = {
    coursename: "Database",
    price: 0,
    courseInstructor: "haider"
}

// another menthod to access values
//this is object destructing
const {courseInstructor: teacher} = course

console.log(teacher);


// JSON API
//API is values comming from backend (come in json structure)

// {
//     "name": "ali",
//     "coursename": "databae",
//     "price": "free"
// }

// //also in array form
// [
//     {},{},{}
// ]


// in react
const navbar = ({company}) => {

}

navbar(company = 'haider')






