//******************** [ for loop ] *********************

for (let index = 0; index <= 10; index++) {
    const element = index;
if(element == 5){
   // console.log("5 is best number");  
   
}
 // console.log(element); // 0, 1, 2 ,3 ,4, 5 best num, 5, 6, 7 ,8 ,9 10
}


for (let i = 1; i <= 10; i++) {
   
   // console.log(`Outer loop ${i}`)
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop ${j} and Outer loop ${i}`)
       //  console.log(`${i} x ${j} = ${i * j}`);
         
    }
    
}

// ******************* [for Loop on ARRAY ] ****************

let myArray = ["superman", "spiderman", "batman"];


for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i]; 
    // console.log(element);
    
    
}

//************** [ break and continue ] *************** */

// kisi bi control flow ko break karna ho hum break likhta ha

for (let i = 1; i <= 20; i++) {
    const element = i;
    if(element === 5){
        // console.log("Detected");
        break;
    }
    // console.log(element);
    
    
}

// ik baar maaf karo but continue

for (let i = 1; i <= 20; i++) {
    const element = i;
    if(element === 5){
        console.log("Detected");
       continue;
    }
    console.log(element);
    
    
}