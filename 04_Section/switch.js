//  if one case match and break keyword not use whole cases is excuted
// without match except default case.


const balance = 200;

switch (balance) {
  case 300:
    console.log("balnace is 300");
    break;
  case 500:
    console.log("balnace is 500");
    break;
  case 800:
    console.log("balnace is 800");
    break;
  case 1000:
    console.log("balnace is 1000");
    break;
  default:
    console.log("balnace is two low");
    break;
}
