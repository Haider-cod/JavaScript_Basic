//if statement

const isUserLoggedIn = true
const temp = 41;


// if(temp < 50){
//         console.log("less than 50");
        
// }else{
//     console.log("greator than 50");
// }


// <, >, <=, >=, ==, !=, !==
//  === -> also check the type


const score = 200;
 
// if(score > 100){
//    // var power = "fly" --> scope compeltely global
//     const power = "fly";
//     console.log(`user power: ${power}`);
    
// }

// console.log(`user power: ${power}`);

//******************** [ short hand ] *******************/

const balnace = 1000;
// --> implicit scope
// if(balnace >= 300) console.log("test"), console.log("test2");
// ;



//******************** [ Nesting ] *******************/
// if(balnace < 500){
//      console.log("less than 500"); 
// }else if(balnace < 750){
//     console.log("less than 750");
// }else if(balnace < 1000){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
//}


//******************** [Real life use] *******************/
const userLoggedIn = true;
const debitCard = false;
const loggedInfromGoogle = true;
const loggedInfromEmail= false;

if(userLoggedIn && debitCard){
    console.log("allow to buy courses");
    
}else if(loggedInfromEmail || loggedInfromGoogle){
    if(loggedInfromEmail){
        console.log("user just logged in from email");
        return
    }else if(loggedInfromGoogle){
        console.log("user just logged in from google");
        return
    }
}