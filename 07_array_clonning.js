console.log("Array shallow Cloning");
let arrayOfEvenNum = [0, 2, 4, 6, 8 ];
let arrayOfNum = arrayOfEvenNum; // Shallow Cloning
arrayOfEvenNum[1] = 10;
console.log(arrayOfEvenNum);
console.log(arrayOfNum);

// Deep Cloning
console.log("Array Deep Cloning");
let arrayOfNumber = [0, 2, 4, 6, 8 ];
let arrayClone =  [... arrayOfNumber]; // Deep Clone using spread operator
arrayOfNumber[2] = 100;
arrayClone[0] = 200;
console.log(arrayOfNumber); // if we change either array the other will not change
console.log(arrayClone);

