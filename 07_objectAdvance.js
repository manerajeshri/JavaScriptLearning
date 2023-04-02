const interestRate = 7.5; // can not redeclare and reassign

// interestRate=8.5; // can not using const

let interestRat = 7.5;
// let interestRat // can't redeclare
interestRat=8.5;// can reassign
console.log(interestRat);//8.5


const billgates = { // as const so we cant redeclare and reassign
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company : "microsoft",
    valuation : "130 B$"

}
// billgates={   // as previously defined as const so we cant redeclare and reassign
//     city:"pune"
// }

Object.freeze(billgates); // can not add delete or alter

billgates.city = "pune" // cant add bz its freezed
console.log(billgates.city); // undefined

billgates.age = "140"  // cant update bz its freeze
console.log(billgates.age);


