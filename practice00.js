class Bank{
    constructor(bankName,location,accountNo,ifsc,interestRate)
    {
        this.bankName=bankName;
        this.location=location;
        this.accountNo=accountNo;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    }
}
let bankAxis = new Bank("Axis Bank","Kolhapur",345672344,431202,"5%");
let bankSBI = new Bank("SBI Bank","Solapur",345672346,431202,"8%");
let bankIcici = new Bank("ICICI Bank","Pandharpur",34567237,431202,"7%");
let bankkotak = new Bank("Kotak Bank","Jalna",345672348,431202,"4%");
let bankHdfc = new Bank("HDFC Bank","Latur",8956782345,631202,"6%");
let bankPunjab = new Bank("Punjab Bank","Buldhana",345672345,431202,"3%");

const mapOfBanks = new Map();
mapOfBanks.set(bankAxis.accountNo,bankAxis ); 
mapOfBanks.set(bankSBI.accountNo,bankSBI ); 
mapOfBanks.set(bankIcici.accountNo,bankIcici);
mapOfBanks.set(bankkotak.accountNo,bankkotak);
mapOfBanks.set(bankHdfc.accountNo,bankHdfc);
mapOfBanks.set(bankPunjab.accountNo,bankPunjab);

const keyOfMapBanks = mapOfBanks.keys();
console.log(keyOfMapBanks);

for (const key of keyOfMapBanks) 
{
    const bank = mapOfBanks.get(key);
    console.log(bank.bankName, bank.accountNo,bank.interestRate);
}