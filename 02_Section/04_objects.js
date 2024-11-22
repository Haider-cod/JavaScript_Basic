// siglenton

const tinderUser = new Object();

tinderUser.id = '123abc'
tinderUser.name = 'Haider'
tinderUser.isLoggedIn = 'false'


// console.log(tinderUser);

const regularUser = {
    email : "ha903540@gmail.com",
    fullname: {
        userfullname: {
            firstname: "haider",
            lastname: 'ali'
        }
    }
}

// console.log(regularUser);

// combine object 

const obj1 = {
    1:"a",
    2: "b"
}

const obj2 = {
    3:"a",
    4: "b"
}

// const obj3 = {obj1, obj2}

// Object.assign() --> a static method copies all numberable own properties
// const obj3 = Object.assign({/*target*/}, obj1, obj2)

// spread opertion (mostly used syntax)
const obj3 = {...obj1,...obj2}

//syntax --> when get value from database
//date come from database like
const users = [
    {
        id:1,
        email:"h90@gmail.com"
    },
    {
        id:2,
        email:"h90@gmail.com"
    },
    {
        id:3,
        email:"h90@gmail.com"
    },
    {
        id:4,
        email:"h90@gmail.com"
    },
]

users[1].email


console.log(tinderUser); 

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// check if the property exist
console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
