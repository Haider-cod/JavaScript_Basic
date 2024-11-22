// this keyword --> tell us about current context
// context --> means value

const user = {
    username: "haider",
    email: "ha902540@gmail.com",
    age: 20,
    welcomeMessage:  function(){
      console.log("welcome", this.username); 
    //   console.log(this);
      
    }
}

// user.welcomeMessage()

// user.username = "sam" 

// user.welcomeMessage()

// console.log(this);


// function one(){
//     // not use this keyword in function
//     let username = "haider"
//     console.log(this.username);
    
// }
// one()


// explicit return --> when you use return keyword
const two = () => {
        let username = "haider"
       console.log(this);
}

// two()

// implicit return --> when you not use return
const add = (num1,num2) => num1 + num2;
const subtract = (num1,num2) => ( num1 - num2 );
// to return object
const objReturn = () => ({username : "haider"});