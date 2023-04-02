
console.log();
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
                        //  0       1           2     3        4    

console.log(`Given fruit array : ${fruits_seasonal}`);
console.log(`\n1] logging first and last element`);
console.log(`Given fruit array : ${fruits_seasonal}`);
console.log(`first element :${fruits_seasonal[0]}  \nlast element :${fruits_seasonal[fruits_seasonal.length-1]}`);

console.log(`\n2] Adding "Papaya" before element "Banana"`);
console.log(`Before : ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`After  : ${fruits_seasonal}`);// After : Papaya,Banana,Orange,Apple,Mango,Water Melon

console.log(`\n3] Removing Mango from array`);
const fruits_seasonal1 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Before : ${fruits_seasonal1}`);
var mango = fruits_seasonal1.splice(3,1);
console.log(`After  : ${fruits_seasonal1}`);// After : Papaya,Banana,Orange,Apple,Water Melon

console.log(`\n4] Inserting "Pineapple" at the last position`);
const fruits_seasonal2 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Before : ${fruits_seasonal2}`);
fruits_seasonal2.push("Pineapple");
console.log(`After  : ${fruits_seasonal2}`);

console.log(`\n5] Inserting "dragon Fruit" before "Water Melon"`);
const fruits_seasonal3 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Before : ${fruits_seasonal3}`);
fruits_seasonal3.splice(4,0,"dragon Fruit");
console.log(`After  : ${fruits_seasonal3}`);

console.log(`\n6] Replacing "Orange" with "Kiwi"`);
const fruits_seasonal4 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Before : ${fruits_seasonal4}`);
fruits_seasonal4.splice(1,1,"Kiwi");
console.log(`After  : ${fruits_seasonal4}`);

console.log(`\n7] log elements starting from index 1 to 4`);
const fruits_seasonal5 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Before : ${fruits_seasonal5}`);
console.log(`After using splice  : ${fruits_seasonal5.splice(1,4)}`);
// console.log(`After using slice  : ${fruits_seasonal5.slice(1,4)}`);  // Orange,Apple,Mango
console.log(`Before : ${fruits_seasonal5}`); // slice dosent modify original array: Banana,Orange,Apple,Mango,Water Melon

console.log(`\n8] log last 3 elements using length property`);
const fruits_seasonal6 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Before : ${fruits_seasonal6}`);
// var k = fruits_seasonal6.splice(fruits_seasonal6.length-3,fruits_seasonal6.length-1)
// console.log(`After  : ${k}`);

var lastThreeElements = fruits_seasonal6.slice(fruits_seasonal6.length-3)
console.log(`After  : ${lastThreeElements}`);

