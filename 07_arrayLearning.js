let arrayOfNames = [];// Empty Array
console.log(arrayOfNames);


let myName="Rajeshri";
let asrrayOfName = [myName];
console.log(asrrayOfName);


let arrayOfNumbers1 =[5, 10, 4, 6, 7, 10,6];
console.log(arrayOfNumbers1);
let totalElements1 = arrayOfNumbers1.length;
console.log(`Total elements in Array is : ${totalElements1}`);


// sir

let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

let typeOfArray =typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);

let indexOf7 = arrayOfNumbers.indexOf(7);
console.log(`Index of element 7 --> ${indexOf7}`)

let indexOf10 = arrayOfNumbers.indexOf(10);
console.log(`Index of element 10 --> ${indexOf10}`)// for double value /repetation

console.log(`Traversing array using loop`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
     const element = arrayOfNumbers[index];
     console.log(element);
}


console.log(`even positioned element `);
for (let index = 0; index < arrayOfNumbers.length; index++) {
   if (index%2==0) {
    const element = arrayOfNumbers[index];
    console.log(element);
   }
   
    
    
}






