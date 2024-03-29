

const arrayOfNumbers = [ -1,2,-3,4,5];
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

    console.log(".forEach");
    arrayOfNumbers.forEach( (currentValue )=>{
        console.log(currentValue);
    } );
    console.log(".map");
    arrayOfNumbers.map( (currentValue )=>{
        console.log(currentValue);
    } );
     console.log(".filter");
    arrayOfNumbers.filter( (currentValue )=>{
        console.log(currentValue);
    } );
    console.log(".reduce");
    const result =arrayOfNumbers.reduce( (currentValue , val)=>{
        return currentValue + val;
    } );
    console.log(result);

//Removes the last element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.
    arrayOfNumbers.pop(2,1);
    console.log(arrayOfNumbers); // (4) [-1, 2, -3, 4]

    arrayOfNumbers.push(999) // add element at end
    console.log(arrayOfNumbers); //  (5) [-1, 2, -3, 4, 999]

    arrayOfNumbers.shift();
    console.log(arrayOfNumbers); // (4) [2, -3, 4, 999]

    arrayOfNumbers.unshift(5656); // add element at start
    console.log(arrayOfNumbers); // (5) [5656, 2, -3, 4, 999]

    arrayOfNumbers.toString();
    console.log(arrayOfNumbers);

    arrayOfNumbers.reverse()
    console.log(arrayOfNumbers);

    console.log(" befor sorting ",arrayOfNumbers);
     arrayOfNumbers.sort( (a,b )=> {
       return a>b ? 1:-1
    } );
    
    console.log("ascending order",arrayOfNumbers);

    arrayOfNumbers.sort( (a,b )=> {
        // return a<b ? 1:-1
        return a>b ? -1:1
    })
    //  } ).reverse();
     console.log("decending order",arrayOfNumbers);



    // Returns a copy of a section of an array
    // don't alter original array
    const arrayNum = [ 1,2,3,4,5,6,7,8,9]
    const resultSlice = arrayNum.slice(1,5);
    console.log("original",arrayNum);
    console.log("after slice",resultSlice); 
    console.log("original remains same",arrayNum);


    // Removes elements from an array and, 
    //if necessary, inserts new elements in their place, returning the deleted elements
    console.log("original",arrayNum); 
    const resultSplice = arrayNum.splice(2,0,88)
    console.log("after splice",resultSplice); 
    console.log("original remains same",arrayNum);