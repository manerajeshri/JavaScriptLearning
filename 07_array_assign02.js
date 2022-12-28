
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is : ${arrayNumbers}`);
console.log(`\n1] Total element available / Length : ${arrayNumbers.length}`);
console.log(`\n2] first element : ${arrayNumbers[0]} & Last element : ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`\n3] Third last element using length property : ${arrayNumbers[arrayNumbers.length-3]}`);
// console.log(`\n4] Finding all Even numbers from array : ${arrayNumbers}`);

    let evenArray =[];
for (let index = 0; index < arrayNumbers.length; index++) {
      if ((arrayNumbers[index] %2 == 0)) {
        // console.log(arrayNumbers[index]);
        evenArray = evenArray + ' ' + arrayNumbers[index];
    }
}
console.log(`\n4] All Even numbers from array : `,evenArray);

// console.log(`\n5] Finding all Odd numbers from array : ${arrayNumbers}`);

    let oddArray =[];
for (let index = 0; index < arrayNumbers.length; index++) {
      if ((arrayNumbers[index] %2 !== 0)) {
        // console.log(arrayNumbers[index]);
        oddArray = oddArray + ' ' + arrayNumbers[index];
    }
}
console.log(`\n5] All Odd numbers from array : `,oddArray);

// console.log(`\n6] Finding All Even Positioned Elements : ${arrayNumbers}`);
evenPositionedElements =[];
for (let index = 0; index < arrayNumbers.length; index=index+2) {
    // console.log(arrayNumbers[index]);
    evenPositionedElements = evenPositionedElements + " " + arrayNumbers[index];
}
console.log(`\n6] All Even Positioned Elements : ${evenPositionedElements}`);

// console.log(`\n7] Finding All Odd Positioned Elements : ${arrayNumbers}`);
oddPositionedElements =[];
for (let index = 1; index < arrayNumbers.length; index=index+2) {
    // console.log(arrayNumbers[index]);
    oddPositionedElements = oddPositionedElements + " " + arrayNumbers[index];
}
console.log(`\n7] All Odd Positioned Elements : ${oddPositionedElements}`);

// console.log(`\n8] Sum of all elements from array : ${arrayNumbers}`);
var sum=0 ;
for (const i of arrayNumbers) {
    sum = sum + i;
}
console.log(`\n8] Sum of all elements from array : ${sum}`);

// console.log(`\n9] Finding numbers multiple of 5 : ${arrayNumbers}`);
let mulofArray =[];
for (let index = 0; index < arrayNumbers.length; index++) {
      if ((arrayNumbers[index] %5 == 0)) {
        // console.log(arrayNumbers[index]);
        mulofArray = mulofArray + ' ' + arrayNumbers[index];
    }
}
console.log(`\n9] Numbers multiple of 5 : ${mulofArray}`);

console.log(`\n10] Is number 115 available in arrayNumbers : ${arrayNumbers.includes(115)}`);
console.log(`\n11] Is number 23 available in arrayNumbers : ${arrayNumbers.includes(23)}`);

// // Is number available in array?
// var findNumber =function (num) {
// for (let index = 0; index < arrayNumbers.length; index++) {
//     // console.log( arrayNumbers[index] , num);
//      if ((arrayNumbers[index] == num)) {
//        var result = `Available`;
//        break;
//      }    
//      else{
//         var result = `Not Available`;
//      }    
// }
//  return result
// // console.log(`\n Number ${num} is ${result} in array`);
// }
// console.log(`\n10] Number 115 is : ${findNumber(115)} in array`) // use with return
// console.log(`\n11] Number  23 is : ${findNumber(23)} in array`) // use with return
// // findNumber(115);
// // findNumber(23); 


console.log(`\n12] Inserting number 55,66 before index 3`);//[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is : ${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66)
console.log(`After array is : ${arrayNumbers}`);

console.log(`\n13] Deleting 3 elements starting from index 4`);

var arrayOfNumbers =[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is : ${arrayOfNumbers}`);
var spliceResult = arrayOfNumbers.splice(4,3);//start and length
console.log(`Result of arrayNumbers.splice(4,3) start and length : ${spliceResult}`);
console.log(`array after splice (4,3) :  ${arrayOfNumbers}`);
