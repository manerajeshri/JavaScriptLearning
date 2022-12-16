console.log(``);
console.log(`if block`);
console.log(``);
console.log(`1] Check no is positive or negative`);

var myNumber =10;
if(myNumber>=0){
console.log(`My number ${myNumber} is "Positive"`);
}

var myNum =-10;
if(myNum<0){
console.log(`My number ${myNum} is "Negative"`);
}

console.log(`2] finding greater number`);
var num1 =100;
var num2 =200;
var num3 =99;

if (num1>num2 && num1>num3) {
    console.log(`The greater num is ${num1}`);
}
if (num2>num1 && num2>num3) {
    console.log(`The greater num is ${num2}`);
}
if (num3>num1 && num3>num1) {
    console.log(`The greater num is ${num3}`);
}