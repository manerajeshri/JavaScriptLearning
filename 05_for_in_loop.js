console.log(`Object entries using for in loop`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company : "microsoft",
    valuation : "130 B$"

}

console.log(`For In loop`);

for (const key in billgates) {
    if (Object.hasOwnProperty.call(billgates, key)) {
        const element = billgates[key];
        // console.log(element); // acess only value
        console.log(key,element); // acess key and value
    }
}
