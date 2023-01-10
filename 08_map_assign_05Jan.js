console.log(`\n Create a class 'Bank' with data members,initilise properties using constructor`);

console.log(`\nA. Created Class with Data members : `);
class Bank {
    constructor (bankName,location,accountNo,ifsc,interestRate){
        this.bankName = bankName;
        this.location= location;
        this.accountNo = accountNo;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    }
}

const axis_bank = new Bank (" AXIS Bank","Pune",1000011 ,"AXIS000011","6%"); 
// 0000 --> 0 01-->1  11 --> 9 , 22 --> 18 , 33--> 27....0077 -->63   0088 --> 88 , 99 --> 99
const sbi_Bank = new Bank (" SBI Bank"," Pune",200022," SBI00009","7% "); 
// if prefixed by 00 then
// Bank {bankName: ' SBI Bank', location: ' Pune', accountNo: 18, ifsc: ' SBI00009', interestRate: '7% '}
const icici_Bank = new Bank (" ICICI Bank"," Mumbai",3000033," ICIC000056","6% ");
const kotak_Bank = new Bank( " KOTAK Bank "," Vita",4000044," KOTAK000098","6.5% ");
const hdfc_Bank = new Bank( " HDFC Bank "," Sangli",5000055," HDFC000098","6.5% ");
const panjab_Bank = new Bank(" Panjab Bank "," Satara ", 6000066," PANJ000054","5.9% ");
console.log(`\nB. Created Objects : `);
console.log(axis_bank);
console.log(sbi_Bank);
console.log(icici_Bank);
console.log(kotak_Bank);
console.log(hdfc_Bank);
console.log(panjab_Bank);

console.log(`\n C. Creating Map :: (key) account no : (value) Object in step B`);

const mapOfBanks = new Map(); // Creating an Map
mapOfBanks.set(100011 , axis_bank); // Adding element in key value pair
mapOfBanks.set(200022 , sbi_Bank);
mapOfBanks.set(300033 , axis_bank);
mapOfBanks.set(400044 , icici_Bank);
mapOfBanks.set(500055 , kotak_Bank);
mapOfBanks.set(600066 , hdfc_Bank);
mapOfBanks.set(700077 , panjab_Bank);
console.log(mapOfBanks);
const keysOfMaps = mapOfBanks.keys();
console.log(keysOfMaps); // 100011 200022 300033 400044 500055 600066 700077

// ===== Traversing over map====
console.log(`\n D. Traverse map ; log Bank name, account no, interest rate`);


console.log(`Bank Details are as follows :`);
for (const key of keysOfMaps) {
    // console.log(mapOfBanks.get(key) ,key); // will get whole object
    const bankDetails = mapOfBanks.get(key);
    console.log(`Name:${bankDetails.bankName}` ,"Account no:",key, "Interest rate:",bankDetails.interestRate );
}