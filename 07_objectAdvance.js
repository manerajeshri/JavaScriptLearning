const interestRate = 7.5;

// interestRate=8.5; // can not using const

let interestRat = 7.5;

interestRat=8.5;
console.log(interestRat);//8.5


const billgates = { // as const so we cant update
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company : "microsoft",
    valuation : "130 B$"

}
// billgates={
//     city:"pune"
// }

Object.freeze(billgates);

billgates.city = "pune"
console.log(billgates);

billgates.age = "140 B$"
console.log(billgates);


