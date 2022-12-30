// function constructor
function Bank (bankName,location,ifscCode,branchCode) {
    this.bankName =bankName;
    this.location =location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

let yesBank = new Bank("Yes Bank","Pune","IFSC001","Br-11");
let sbiBank = new Bank("SBI Bank","Satara","IFSC002","Br-22");
let mahBank = new Bank("MAHA Bank","Satara","IFSC003","Br-33");
let axisBank = new Bank("Axis Bank","Pune","IFSC004","Br-44");

console.log(`\n1] creating constructor function with name : Bank and data members`);
console.log(yesBank);
console.log(sbiBank);
console.log(mahBank);
console.log(axisBank);

console.log(`\n2] creating and logging object`);
// console.log(`Bank Details are : ${bankName} ,${location}, ${ifscCode},${branchCode}`);
console.log(`Bank Details are : Bank Name : ${yesBank.bankName},  Location : ${yesBank.location},  IFSC Code : ${yesBank.ifscCode},  Branch Code : ${yesBank.branchCode}`);
console.log(`Bank Details are : Bank Name : ${sbiBank.bankName},  Location : ${sbiBank.location},  IFSC Code : ${sbiBank.ifscCode},  Branch Code : ${sbiBank.branchCode}`);
console.log(`Bank Details are : Bank Name : ${mahBank.bankName},  Location : ${mahBank.location},  IFSC Code : ${mahBank.ifscCode},  Branch Code : ${mahBank.branchCode}`);
console.log(`Bank Details are : Bank Name : ${axisBank.bankName}, Location : ${axisBank.location}, IFSC Code : ${axisBank.ifscCode}, Branch Code : ${axisBank.branchCode}`);

// console.log(`\n3] openTime on prototype object`);
 Bank.prototype.openTime = "9 AM IST";

// console.log(`\n4] closeTime on prototype object`);
Bank.prototype.closeTime = "6 PM IST";

console.log(`\n5] open and close time of SBI Bank : `);
console.log(`SBI Bank Open Time :${sbiBank.openTime} and Close Time:${sbiBank.closeTime}`);

console.log(`\n6] Bank Name and close time of Axis Bank : `);
console.log(`Bank Name :${axisBank.bankName} and Close Time:${axisBank.closeTime}`);

console.log(`\n7] Bank Name, Branch code and open time of Yes Bank : `);
console.log(`Bank Name :${yesBank.bankName}, Branch code : ${yesBank.branchCode}  and Open Time:${yesBank.openTime}`);
