console.log(`\n1] Even Odd number\n`);
function numEvenOdd(num) {
    if ((typeof num)=== "number") { // q2 Accept == !== ===  not accept !===
        // console.log(`It is a ${(typeof num)} ${num} : Valid Data`);
        
if (num%2==0) {
    console.log(`The number ${num} is Even`);
} else {
    console.log(`The number ${num} is Odd`);
}

    } else {
        console.log(`It is a ${(typeof num)} "${num}" : InValid Data`);
    }
} 
numEvenOdd(2);// Vaid data
numEvenOdd(45);
numEvenOdd(13);
numEvenOdd(0);
numEvenOdd("70");// Invaid data
numEvenOdd("Raj");
// numEvenOdd(Raj); // q1 how to handle this

// ==============================Greatest number from three given number
console.log(`\n2] Greatest number from three given number`);

function greatestNum(num1,num2,num3) {
    if ((typeof num1 ==="number") && (typeof num2 ==="number")&& (typeof num3 === "number")) {
        console.log(`Valid numbers : num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);

if (num1>=num2) {
    if (num1>=num3) {
        console.log(`Greatest no is ${num1}\n`);
    } else {
        console.log(`Greatest no is ${num3}\n`);
    }
} else {
    if (num2>=num3) {
        console.log(`Greatest no is ${num2}\n`);
    } else {
        console.log(`Greatest no is ${num3}\n`);
    }
}
    }        
     else {
        console.log(`InValid numbers : num1 = ${num1}, num2 = ${num2}, num3 = ${num3}\n`);
     }
    }//function
greatestNum(56,70,"80");
greatestNum(-20,-90,0);
greatestNum(120,90,10);
greatestNum(-120,90,10);
greatestNum(-120,-90,10);
greatestNum(-120,-90,-10);