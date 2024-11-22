
// ... --> rest operator or spread operator

function addToCart( val1, val2, ...num1){

     return num1;
}

const result = addToCart(200, 500, 600 , 800)
// console.log(result);


// passing object to function

const user = {
    username: "haider",
    price:199
}

function handleObject(anyobj){
       console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
       
}

// handleObject(user)

// //aslo pass object directly
// handleObject({
//     username: "sam",
//     price: 123
// })


const myNewArr = [200, 400, 100, 600]

function acceptArray(getArray){
 console.log( `Second value is ${getArray[1]}`);
   
}

// acceptArray(myNewArr);

// acceptArray([200, 500, 100 ,600])
