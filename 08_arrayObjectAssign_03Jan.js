console.log(`\nA. Created Class with Data members : `);
class Bank {
    constructor (bankName,location,accountNo,ifsc,interestRate){
        this.bankName = bankName,
        this.location= location,
        this.accountNo = accountNo,
        this.ifsc=ifsc,
        this.interestRate=interestRate
    }
}
const axisBank = new Bank (" Axis Bank"," Mumbai"," 00007654"," AXIS000056","6.8% ");
const sbiBank = new Bank (" SBI Bank"," Pune","10000897 "," SBI00009","7% ");
const iciciBank = new Bank (" ICICI Bank"," Mumbai"," 00007654"," ICIC000056","6% ");
const kotakBank = new Bank( " KOTAK Bank "," Vita"," 678543548 "," KOTAK000098","6.5% ");
const hdfcBank = new Bank( " HDFC Bank "," Sangli"," 678543548 "," HDFC000098","6.5% ");
const panjabBank = new Bank(" Panjab Bank "," Satara ",  " 2345123"," PANJ000054","5.9% ");


console.log(`\nB. Created Objects : `);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);

console.log(`\nC. Adding all object in array and transverse array using for of`);

const allBankArray =[axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,panjabBank];

for (const bank of allBankArray) {
    console.log(`Bank Name: ${bank.bankName} Location: ${bank.location} `);
}

console.log(`\nD. from array finding Kotak Bank using for of loop`);

for (const iterator of allBankArray) {
    if (iterator.bankName == " KOTAK Bank ") {
        console.log(`Bank Name: ${iterator.bankName} Location: ${iterator.location}`);        
    }
}
console.log(`\nE. Log details using for loop`);

for (let index = 0; index < allBankArray.length; index++) {
    const element = allBankArray[index];
    console.log(element);
}