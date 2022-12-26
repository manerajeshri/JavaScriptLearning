
let array =[4,6,7,8,3,2];
console.log(`Given array is   : ${array}`); //Given array is   : 4,6,7,8,3,2

let reversedArray = array.reverse();
console.log(`Reverse array is : ${reversedArray}`);  //Reverse array is : 2,3,8,7,6,4

console.log(`Reversing array / traversing array using for loop in reverse order`);
let lastIndex = array.length-1;
for (let index = lastIndex; index >= 0 ; index--) {
    const element = array[index];
    // console.log(`**************\n Reversing array using loop :`);
    console.log(element);
    
}

var evenPosition = [], oddPosition =[];
for (let index = 0; index < reversedArray.length; index++) {
    
    if (index%2==0) {
        // console.log(reversedArray[index]);// 2 8 6 
        evenPosition = evenPosition +" " + reversedArray[index] // concating o/p // 2 8 6
        
    }   
    else {
        oddPosition = oddPosition +" " + reversedArray[index] // concating o/p // 2 8 6
    }
    // console.log(evenPosition);
}
console.log(`Even positioned value : ${evenPosition}`); //Even positioned value :  2 8 6
console.log(`Odd positioned value : ${oddPosition}`); //Odd positioned value :  3 7 4