

const arrayOfNumbers = [ 1,2,3,4,5,6,7,8,9,10];
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers.concat(11,12,13));
console.log(...arrayOfNumbers)
const array2= [44,55,66,77];
// console.log(arrayOfNumbers.concat('HI',[44,55,66,77],"RAj"));
console.log(arrayOfNumbers.concat(array2));

console.log(arrayOfNumbers.forEach((value,index) => console.log(index,"=>",value)));