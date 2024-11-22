//const mean --> cannot change value
const accountId = 144553; //declartion syntax
// accountId =2 [ not allowed ]
console.log(accountId);

//variable --> can be change

/*  
    --> two types to declare variable [let, var]
    --> there was a problem in [var] scope {} know use only [let]
    --> prefer not to use var because of issue in block scope and functional scope
*/
let accountEmail = "ha903540@gmail.com";
accountEmail = "public@gmail.com";

var accountPassword = "haider27";
accountPassword = "public123";

// variable also declere like this
accountCity = "Gujrat";
accountCity = "Lahore";

let accountState; //what will be the value ? [Undefine] if the value is note define

// second method of console [all variable show]
console.table([accountEmail, accountPassword, accountCity, accountState]);
