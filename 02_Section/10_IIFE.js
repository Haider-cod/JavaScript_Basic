//Immediately Invoked function Expressins
//helps avoid polluting the global scope. 
// problem --> not know where to stop context



(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

// chai()


// (defination ) (call)


(() => {

    console.log(`DB CONNECTED 2`);
    
})(); //--> semicolen to end it


((name) => {

    console.log(`DB CONNECTED 3 ${name}`);
    
})("haider")