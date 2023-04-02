
// array of salaries

let arrayOfSalaries = [10000 ,20000, 30000, 20000, 40000];
console.log(`1] salary array is : ${arrayOfSalaries}`);
let sumOfSal = 0;
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];
    sumOfSal = sumOfSal + element;  
}
console.log(`Total salary of all employee is : ${sumOfSal}\n`);
// (5) [10000, 20000, 30000, 20000, 40000]

console.log(`2] updating value of array using index arrayOfSal[1] = 40000`);
let arrayOfSal = [10000 ,20000, 30000, 20000, 40000];
console.log(`Before : ${arrayOfSal}`);
arrayOfSal[1] = 40000; //updating value of array using index
console.log(`After : ${arrayOfSal}`);


//Adding element to array at the end of array
console.log(`\n3] push() : Adding element at the end of array`);
let arrayOfNum =[1,2,3,4,5,6];
console.log(arrayOfNum);
console.log(`adding 7 in last : arrayOfNum.push(7)`);
arrayOfNum.push(7);//adding 7 in last
console.log(arrayOfNum); // (7) [1, 2, 3, 4, 5, 6, 7]

console.log(`adding 8 9 10 in last : arrayOfNum.push(8,9,10)`);
arrayOfNum.push(8,9,10);//adding 8,9,10 in last
console.log(arrayOfNum);

console.log(`\n 4] pop() method : Removing last element of array`);
var arrayOfNumbers =[1,2,3,4,5,6];
console.log(arrayOfNumbers); // (6) [1, 2, 3, 4, 5, 6]
var popResult = arrayOfNumbers.pop(2);
console.log(`arrayOfNumbers.pop() :`,popResult); //6  pop() removes last element of array
console.log(arrayOfNumbers); // (5) [1, 2, 3, 4, 5

console.log(`Adding element at start of array : arrayOfNum.unshift(0);`);
arrayOfNum.unshift(0);//adding 0 at start
console.log(arrayOfNum);

console.log(`Adding element at start of array : arrayOfNum.unshift(-3,-2,-1);`);
arrayOfNum.unshift(-3,-2,-1,);// adding -3,-2,-1, at start
console.log(arrayOfNum);

console.log(`\n shift() method : Removing first element of array`);
var arrayOfNumbers =[1,2,3,4,5,6];
console.log(arrayOfNumbers);
var shiftResult = arrayOfNumbers.shift();
console.log(shiftResult);
console.log(arrayOfNumbers);

console.log(`\nslice() method : Removing middle element of array`);
var arrayOfNumbers =[1,2,3,4,5,6,7];

let sliceResult = arrayOfNumbers.slice(3);//start to end all returned
console.log(`Result of arrayOfNumbers.slice(3) : ${sliceResult}`);

let sliceResult1 = arrayOfNumbers.slice(2,5); //start and end given
console.log(`Result of arrayOfNumbers.slice(2,5) : ${sliceResult1}`);

console.log(`\nsplice() method : Removing / deleting element of array`);
var arrayOfNumbers =[1,2,3,4,5,6,7];
var spliceResult = arrayOfNumbers.splice(3);
console.log(`Result of arrayOfNumbers.splice(3) : ${spliceResult}`);
console.log(`array after splice (3) ${arrayOfNumbers}`);

var arrayOfNumbers =[1,2,3,4,5,6,7];
var spliceResult = arrayOfNumbers.splice(2,3);//start and length
console.log(`Result of arrayOfNumbers.splice(2,3) start and length : ${spliceResult}`);
console.log(`array after splice (2,3) ${arrayOfNumbers}`);

// Inserting element in array
console.log(`Inserting element in array arrayOfNumbers.splice(2,0,88) //add 88 befor index2 , 0 means no delete just insert 88`);
var arrayOfNumbers =[1,2,3,4,5,6,7];
console.log(arrayOfNumbers);
console.log(`add 88 befor index2 , 0 means no delete just insert 88`);
var resultOfSplice = arrayOfNumbers.splice(2,0,88) //add 88 befor index2 , 0 means no delete just insert 88
console.log(arrayOfNumbers);
console.log(`add 88 99 77 befor index2 , 0 means no delete just insert 88 99 77`);
var resultOfSplice = arrayOfNumbers.splice(2,0,88,99,77) //add 88 99 77 befor index2 , 0 means no delete just insert 88
console.log(arrayOfNumbers);


// replacing element in array
console.log(`replacing element in array`);
var arrayOfNumbers =[0,1,2,3,4,5,6,7,8,9,10];
console.log(arrayOfNumbers);
arrayOfNumbers.splice(3,1,22);
console.log(arrayOfNumbers);
console.log(`.splice(2, 3, 99 ,77, 88): replacing from index2 next 3 element `);
arrayOfNumbers.splice(2, 3, 99 ,77, 88);//replacing from index2 next 3 element
console.log(arrayOfNumbers);


console.log(`include(x) : Is this array include value (x)`);
var arrayOfNumbers =[0,1,2,3,4,5,6,7,8,9,10];
console.log(arrayOfNumbers);
var resultOfInclude = arrayOfNumbers.includes(7);
console.log(`Is this array include value (7) :`, resultOfInclude);