// Assignment 2: Using forEach() with arrow function and callback const array numbers = [1,-7, 40, 502, -77, 91, 0, 108, 89, -601
//     1. Log the array element with it's index using forEach() with arrow function
//     2 Find the positive numbers and log on console a. Using forEach() with arrow function 
//     3. Find the negative numbers, add into new array and and log new array on console using arrow function
//     4. Find the even numbers and log on console using forEach() with arrow function
//     5. Find the sum of all elements from array_numbers and log on sum value on console. 
//     6. Log the only even positioned array value on console. forEach() with arrow function prefered

console.log(`Assignment 2: Using forEach() with arrow function and callback\n Given array is :`);
const arrayOfNumbers = [1,-7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(arrayOfNumbers);

console.log(`\n1. Log the array element with it's index using forEach() with arrow function`);
arrayOfNumbers.forEach( (element,index )=>{
console.log(`Element:${element}, Index:${index}`);
} )

console.log(`\n2.& 3 Find the positive and negative no using callback`);

function positive(num) {
    console.log(`${num} : positive`);
}
function negative(num) {
    console.log(`${num} : negative`);
}

let evenOddCallback = function (callback1,callback2) {
    arrayOfNumbers.forEach((num)=>{
    if (num>=0) {
        callback1(num);
    } else {
        callback2(num);
    }
} )
}
evenOddCallback(positive,negative);

