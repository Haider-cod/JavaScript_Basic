// used in shopinng carts like total bill

const myNums = [1, 2, 3];

const myTotal = myNums.reduce((acc, num) => {
// console.log(`acc = ${acc} and num = ${num}`);

    return acc + num;

}, 0)

// console.log(myTotal);

// [ calculate shopping cart bill ]

const shopingcart = [
    {
        itemName: "js",
        price: 999,
    },
    {
        itemName: "Mobile dev",
        price: 1299,
    },
    {
        itemName: "python",
        price: 389,
    }
]
 
const totalBill =  shopingcart.reduce((acc, item) => {
    return acc + item.price;
}, 0)

console.log(totalBill);
