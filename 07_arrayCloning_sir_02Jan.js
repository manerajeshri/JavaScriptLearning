console.log("Array shallow Cloning");
let arrayOfEvenNum = [0, 2, 4, 6, 8 ];
let arrayOfNum = arrayOfEvenNum; // Shallow Cloning
arrayOfEvenNum[1] = 10;
console.log(arrayOfEvenNum);
console.log(arrayOfNum);

// Deep Cloning
console.log("Array Deep Cloning");
let arrayEven = [0, 2, 4, 6, 8 ];
let arrayClone =  [... arrayEven]; // Deep Clone
arrayEven[2] = 100;
arrayClone[2] = 200;
console.log(arrayEven);
console.log(arrayClone);


// Concat or Merge array
console.log(" ====== array merge or concat====== ");
let arrayNum = [0, 2, 4, 6, 8 ];
let arrayNumb = [1, 2, 3, 4];
let concatArray = arrayNum.concat(arrayNumb); // array merge using concat()
console.log(arrayNum);
console.log(arrayNumb);
console.log(concatArray);
console.log("Array merge or concat using spread operator ");
let mergeArray = [...arrayNum, ... arrayNumb];
console.log(mergeArray);


// for object
let kat = {
    name : "Katrina",
    role: "actress"
} 
let jack = kat;
console.log(`object kat`,kat);
console.log(`object jack`,jack);

console.log("===== Object merge using spread operator ======");
let empAnil = {
    name : "Anil",
    role: "Software Developer"
} 
let empAddress = {
    city: "Pune",
    street: "Wakad - 411057"
}
console.log(`empAnil`,empAnil);
console.log(`empAddress`,empAddress);
   let mergedObject = {...empAnil, ...empAddress};
   console.log(`mergedObject `,mergedObject);