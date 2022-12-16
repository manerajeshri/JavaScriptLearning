console.log(``);
console.log(`1] Finding greater Number`);
var greaterNo = function (num1,num2) {
    
    // condition? true:false
    //   var result= ( num1>num2 ?  console.log(`${num1}`):console.log(`${num2}`));
    var result=  num1>num2 ?  num1:num2;

       console.log(`The given Numbers are : ${num1} , ${num2}`);
       console.log(`The greater Number is : ${result}`);
}
console.log(`1.1]`);
greaterNo(10,-10);
console.log(`1.2]`);
greaterNo(800,899);

console.log(``);
console.log(`2] Finding Even or odd Number`);

var isEvenOdd = function (num) {
    var resultIsEvenOdd = (num%2==0 ? "EVEN Number": "ODD Number");
    return resultIsEvenOdd;
}

console.log(`2.1] The given Number is 29 and it is " ${isEvenOdd(29)} "`); 
console.log(`2.2] The given Number is 44 and it is " ${isEvenOdd(44)} "`); 
console.log(`2.3] The given Number is 0 and it is " ${isEvenOdd(0)} "`); 
console.log(`2.4] The given Number is 101 and it is " ${isEvenOdd(101)} "`); 

console.log(``);
console.log(`3] Finding word length is Even or odd`);

var lengthEvenOdd = function (string) {

    var resultlengthEvenOdd = ( (string.length) % 2 ? " ODD ": " EVEN ");
    return resultlengthEvenOdd;

}

console.log(`3.1] The given word is "JavaScript" and it has " ${lengthEvenOdd("JavaScript")} " Length.`); 
console.log(`3.2] The given word is "developer" and it has " ${lengthEvenOdd("developer")} " Length.`); 
console.log(`3.3] The given word is "Google" and it has " ${lengthEvenOdd("Google")} " Length.`); 

