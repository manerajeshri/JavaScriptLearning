
const sbiBank = {
    bankName : " SBI Bank",
    location : " Pune",
    accountNo : "10000897 ",
    ifsc : " SBI00009",
    interestRate : "7% ",
    showDetails : function () {
        console.log(`Bank Name:${sbiBank.bankName}, Location:${sbiBank.location}, Account NO:${sbiBank.accountNo}, IFSC:${sbiBank.ifsc}, Interest Rate:${sbiBank.interestRate}`);
    }
}

const axisBank = {
    bankName : " Axis Bank",
    location : " Mumbai",
    accountNo : " 00007654",
    ifsc : " AXIS000056",
    interestRate : "6.8% ",
    showDetails : function () {
        console.log(`Bank Name:${axisBank.bankName}, Location:${axisBank.location}, Account NO:${axisBank.accountNo}, IFSC:${axisBank.ifsc}, Interest Rate:${axisBank.interestRate}`);
}
}

const hdfcBank = {
    bankName : " HDFC Bank ",
    location : " Sangli",
    accountNo : " 678543548 ",
    ifsc : " HDFC000098",
    interestRate : "6.5% ",
    showDetails : function () {
        console.log(`Bank Name:${hdfcBank.bankName}, Location:${hdfcBank.location}, Account NO:${hdfcBank.accountNo}, IFSC:${hdfcBank.ifsc}, Interest Rate:${hdfcBank.interestRate}`);
}
}
const yesBank = {
    bankName : " YES Bank ",
    location : " Satara ",
    accountNo : " 2345123",
    ifsc : " YES000054",
    interestRate : "5.9% ",
    showDetails : function () {
        console.log(`Bank Name:${yesBank.bankName}, Location:${yesBank.location}, Account NO:${yesBank.accountNo}, IFSC:${yesBank.ifsc}, Interest Rate:${yesBank.interestRate}`);
}
}

console.log(`\nA,B] Creating object with data members and values :`);
console.log(sbiBank);
console.log(axisBank);
console.log(hdfcBank);
console.log(yesBank);
console.log(`\nC,D] Adding member function and invoke for each object :`);
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
