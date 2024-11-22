// function --> a simple method


// function defination

function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("I");
    console.log("D");
    console.log("E");
    console.log("R");
}

// function reference --> sayMyName (mean function live there)
// Function Excution --> sayMyName()


// function add(num1, num2){
//    console.log(num1 + num2);
     
// }

// const result = add(3,5) what will value of result? --> undefined

function add(num1, num2){
    return num1 + num2;
    console.log("haider"); // --> never excute. by defult after return  [ function not excute anthing else ]
    
     
}

const result = add(3,5)

// console.log(result);

                //giving default value
function loginUserMsg(username = "sam"){
    // "", undefined => by default false in javscript
    if(!username){
         console.log("plese eneter a username");
         return
    }
    return `${username} just logged IN`
}

const test = loginUserMsg(); //when you pass nothnig its undefine [ you have to check ]


console.log(test);
