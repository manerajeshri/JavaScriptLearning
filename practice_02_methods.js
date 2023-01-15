

const arrayOfNumbers = [ 1,2,3,4,5,6,7,8,9,10,2];
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers.concat(11,12,13));
console.log(...arrayOfNumbers)
const array2= [44,55,66,77];
// console.log(arrayOfNumbers.concat('HI',[44,55,66,77],"RAj"));
console.log(arrayOfNumbers.concat(array2));

console.log(arrayOfNumbers.forEach((value,index) => console.log(index,"=>",value)));

console.log(arrayOfNumbers.includes(9));
console.log(arrayOfNumbers.includes(99));

console.log(arrayOfNumbers.indexOf(4));
console.log(arrayOfNumbers.join());
console.log(arrayOfNumbers.join('*'));
console.log(arrayOfNumbers.keys());

arrayOfNumbers.keys()

console.log(arrayOfNumbers.lastIndexOf(2)); // Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

console.log(arrayOfNumbers.length);
arrayOfNumbers.map((value)=> {
    console.log("**",value*3)

})

console.log(arrayOfNumbers);

const ar = arrayOfNumbers.map( (value,index, array )=> {
// console.log(value,index, array);
 return value*0
})
console.log(ar);
// .method ( ): Calls a defined callback function on each element of an array, and returns an array that contains the results.
const returnedArray = arrayOfNumbers.map( (value,index, array )=> {
    if (index>5) {
        return value*2 // return gives  output in array
    }
    
    })

    console.log(returnedArray);


    //.filter() : Returns the elements of an array that meet the condition specified in a callback function.
    arrayOfNumbers.filter( (val,ind,arr)=> {
            // console.log(val,ind,arr);
            // console.log(val*0);// log output one by one
            if (ind>5) {
                console.log(val*2);
                return val*2 // return gives  output in array
                
            }

    } )

    console.log(arrayOfNumbers.entries());

    console.log(arrayOfNumbers.);