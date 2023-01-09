// Assignment 2: Using forEach() with arrow function and callback const array numbers = [1,-7, 40, 502, -77, 91, 0, 108, 89, -601
console.log(`Assignment 2: Using forEach() with arrow function and callback\n Given array is`);
const array_numbers = [1,-7, 40, 502, -77, 91, 0, 108, 89, -601]
console.log(array_numbers);

//     From the given array_numbers, try the hands-on for
    
//     1. Log the array element with it's index using forEach() with arrow function
    console.log(`\n1] Log the array element with it's index using forEach() with arrow function`);
    array_numbers.forEach( (element , index )=>{
            console.log(`element is : ${element}  index is : ${index}`);
    } )
//     2 Find the positive numbers and log on console a. Using forEach() with arrow function 
console.log(`\n2] Find the positive numbers and log on console Using forEach() with arrow function`);
array_numbers_positive =[];
array_numbers.forEach( (element) => {
if (element>0) {
    // console.log(`Found positive no : ${element}`);
    array_numbers_positive.push(element);
}
} )
console.log(`Array of positive numbers : `);
console.log(array_numbers_positive);


//     3. Find the negative numbers, add into new array and and log new array on console using arrow function

console.log(`\n3] Find the negative numbers, add into new array and and log new array on console using arrow function`);
array_numbers_negative =[];
array_numbers.forEach( (element) => {
if (element<0) {
    // console.log(`Found negative no : ${element}`);
    array_numbers_negative.push(element);
}
} )
console.log(`Array of negative numbers : `);
console.log(array_numbers_negative);
    
//     4. Find the even numbers and log on console using forEach() with arrow function

console.log(`\n4] Find the even numbers and log on console using forEach() with arrow function`);
array_even =[];
array_numbers.forEach( (element )=> {
if (element%2==0) {
    array_even.push(element);
}
} )
console.log(array_even);
console.log(`Even numbers are : ${array_even}`);
    
//     5. Find the sum of all elements from array_numbers and log on sum value on console. 

console.log(`\n5] Find the sum of all elements from array_numbers and log on sum value on console`);
let sum = 0;
array_numbers.forEach( (element,index )=> {
    if (index < array_numbers.length) {
        sum = sum + element; 
    }
} )
console.log(`sum of all elements : ${sum}`);
// 6. Log the only even positioned array value on console. forEach() with arrow function prefered
console.log(`\n6] Log the only even positioned array value on console. forEach() with arrow function prefered`);
arrayEvenPositioned=[];
array_numbers.forEach( ( element , index ) => { 
        if (index%2==0) {
            // console.log(` ${element} is Even positioned emement as index is ${index}`);
            arrayEvenPositioned.push(element);
        }
} )
console.log(arrayEvenPositioned);
console.log(`even positioned array value : ${arrayEvenPositioned}`);