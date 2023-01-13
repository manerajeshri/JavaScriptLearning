// Assignment A: Sorting in Ascending/Descending order and reverse
console.log(`Given array :`);
const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
console.log(array_roll_numbers);

console.log(`\n1.Reverse the array :`);
array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log(`\n2. Use the sort() method as it is without any custom sorting logic (Without passing any arguments) & notice the issue`);
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`Remark : its sorting by considering 1st digit`);

// 3. Sort the array in ascending order
console.log(`\n3. Sort the array in ascending order`);
array_roll_numbers.sort( (a,b )=> {
    return a>b ? 1:-1;
} )
console.log(array_roll_numbers);


// 4. Sort the array in descending order without using reverse() method only use sort() 
console.log(`\n4. Sort the array in descending order without using reverse() method only use sort() `);
array_roll_numbers.sort( (a,b )=> {
    return a<b ? 1:-1;
} )
console.log(array_roll_numbers);
// 5. Sort the array in descending order with using reverse() method [Hint→ sort array first using

console.log(`\n5. Sort the array in descending order with using reverse() method `)
const ascendingArray = array_roll_numbers.sort( (a,b )=> {
    return a>b ? 1:-1;
} )
console.log(ascendingArray.reverse());

// 6. Find the Greatest number from the array
console.log(`\n6. Find the Greatest number from the array`);
console.log(`Greatest number from the array :`,ascendingArray[0]);
// 7. Find the smallest number from the array 
console.log(`\n7. Find the smallest number from the array `);
console.log(`smallest number from the array : `,ascendingArray[ascendingArray.length-1]);
console.log(`\n8. Remove duplicates from array`);
const array_roll_numbers1 = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
console.log(`Before : ${array_roll_numbers1}`);
const setArray = new Set(array_roll_numbers1)
console.log(`After  : `,...setArray);