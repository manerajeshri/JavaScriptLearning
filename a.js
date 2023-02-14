// const num=[10,11,12,20];
// num.splice(3,0,15);
// console.log(num);

// const num=[10,11,12,20];
// const num1 = [2, 3, 4, 5]
// console.log(num.concat(num1));
// const array= [...num,...num1];
// console.log(array); 


// shallow clonning

// const num=[10,11,12,20];
// const clonnedArray= num;
// console.log(`clonnedArray`,clonnedArray);

// removing duplicates
// const num=[10,11,12,20, 11, 10, 20]
// const newArray = [...new Set(num)];
// console.log(num);
// console.log(newArray);

// (
//     function () {
        
//     }
// ) ();


const num=[10,11,12,20, 11, 10, 20];

const sum = num.reduce((CurrentVal , val)=>{
return CurrentVal + val;
})

console.log(`Sum =`,sum);
















