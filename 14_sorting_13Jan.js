const arrayOfNames = ["A" , "S","M","Y","B"];
console.log("given array");
console.log(arrayOfNames); // given array
console.log("in ascending order");
arrayOfNames.sort();
console.log(arrayOfNames); // in ascending order
console.log("in Descending order");
arrayOfNames.reverse();
console.log(arrayOfNames); // in Descending order


const arrayOfNumbers = [23 , 111, 5, 99, 32];
// arrayOfNumbers.sort(); // by this its concidering only first didit of number
console.log(arrayOfNumbers);

// sorting using ternary operator
arrayOfNumbers.sort( (a,b )=> {
   return a > b ? 1 : -1 ;
} );

console.log(arrayOfNumbers);

// sorting in descending order
console.log("sorting in descending order : method 1 using sort + reverse");
arrayOfNumbers.reverse();
console.log(arrayOfNumbers);

console.log("sorting in descending order : method 2 using ");
const arrayOfNums = [45,888,5,99,67]; // 
console.log(arrayOfNums);
arrayOfNums.sort( (a,b) => {
    // return a<b ? 1 : -1;// working
    // or 
    return a>b ? -1 : 1;

}  );
console.log(arrayOfNums);



class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

 const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];


arrayOfVehicles.sort( (vehical1 , vehical2 )=> {
    return vehical1.price > vehical1.price ? 1 :-1;
} )

arrayOfVehicles.forEach( (currentValue )=> {
    console.log(currentValue.company, currentValue.price);
})


















