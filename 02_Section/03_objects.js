//two method to delcare object

//singleton --> when obj make with constructor
//no signleton --> when declre with literals

//declaring symbol
const mySym = Symbol("key1")

// declaring :- object literals
const user = {
//  key[system understood as string] : value
    name : 'haider',
    "full name": 'haider ali',
// symbol
    [mySym] : "mekey1",
    age: 20,
    email: 'ha903540@gmail.com',
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

//accessing object
// console.log(user.email);  // --> method 1
// console.log(user["email"]); //--> method 2
// console.log(user["full name"]); //--> method 2
// console.log(typeof user[mySym]); //--> method 2

// change object value
user["full name"] = "Sheikh Haider Ali";
// console.log(user["full name"]);

//if you want no chnages to happen
// Object.freeze(user);// --> no chnages propogate
// console.log(user);

user.greeting = function(){
    console.log('hello JS User');
    
}

user.greetingTwo = function(){
  //if want to refer same object use this keyword
    console.log(`hello JS User, ${this["full name"]}`);
    
}

console.log(user.greetingTwo());
