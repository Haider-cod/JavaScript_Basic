//scope story starts form let, var, and const.

//--> global scope

// var c = 300 
let a = 300;

// {} --> block scope 
if(true){
    let a = 10
    const b = 20
//    console.log("innerr", a);
   
}


// console.log(a);
// console.log(b);
// console.log(c);

// clousre --> a technique in JS 

//nested scope

function one(){
    const userName = "haider";

    function two(){
         const website = "Youtube"

        console.log(" calling from two", userName);
        
    }

    // console.log(website);
    console.log("fist ecxute");
    
    
    two();
}

// one();

if(true){
    const userName = "haider"

    if(userName === "haider"){

        const website = " Youtube";
        // console.log(userName + website);
        
    }

    // console.log(website); //error
    
}

// console.log(userName); //error

// ********************** Intersting ***********************

// a baisc function

console.log(addone(5)); //acces it 

function  addone(num){

     return num + 1
}



// this is experssion  [ just like a variable]
// addTwo(5) //--> cannot access it before declaration [ concept of hoisting ]

const addTwo = function(num){
return num + 2;
}















