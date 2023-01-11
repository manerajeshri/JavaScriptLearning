const arrayOfNumber = [0, 2, 3, 5, 6, 8 ];
console.log(arrayOfNumber);

const result = arrayOfNumber.reduce( ( runningTotal , value)=> {
    // console.log(runningTotal , value);
    return runningTotal + value;
} )
console.log(result);

const result1 = arrayOfNumber.reduce( ( runningTotal , value)=> {
    return runningTotal + value;
} ,200)
console.log(result1);

const resultMul = arrayOfNumber.reduce( ( runningTotal , value)=> {
    // console.log(runningTotal , value);
    return runningTotal * value;
} ) //
console.log(resultMul);

const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// // Sum of all even numbers
// // Even Numbers
// // Sum 

//  const arrayEven = array.filter( ( value)=> {
//     return value%2 == 0;
//  } )

//  optimized
 const arrayEven = array.filter(  value => value%2 == 0  );
const total = arrayEven.reduce( (runningTotal,value )=> runningTotal+value );
console.log(arrayEven);
console.log(total);

 console.log("Chaining methods");

const finalResult = array.filter(  value => value%2 == 0  ).reduce( (runningTotal,value )=> runningTotal+value );
console.log(finalResult);

// const evenNums = array.filter( value => value%2==0 );
// const finalResult = evenNums.reduce((runningTotal, value) => runningTotal + value);
// console.log(evenNums);
// console.log(finalResult);

// console.log("Chaining methods");
// const resultSum = array.filter( value => value%2==0)
//     .reduce((runningTotal, value) => runningTotal + value);
// console.log(resultSum);
