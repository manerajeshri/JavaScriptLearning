
var resultDivide = 0/0;
console.log(`Result is : ${resultDivide}`);
console.log(`Type of  result : ${typeof resultDivide}`);

var resulAdd = resultDivide +10;
console.log(`resulAdd is : ${resulAdd}`);
var resulMul = resultDivide  * 10;
console.log(`resulMul is : ${resulMul}`);

var num1 = "100";
console.log(`num1 is : ${num1}`); //100
console.log(`typeof num1 is : ${typeof num1}`); //string

var num = new Number("Prathamesh"); 
console.log(`Prathamesh is: ${num}`); //Nan
console.log(`typeof num is : ${typeof num}`); //Object

var num2 = new Number("100"); 
console.log(`num2 is: ${num2}`); //100
console.log(`typeof num is : ${typeof num2}`); //object
