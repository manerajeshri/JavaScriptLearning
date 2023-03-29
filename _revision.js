var myFullName ;
console.log(myFullName);
myFullName = "Rajeshri Mane"
console.log(myFullName);
myFullName = "Rajeshri Prakash Mane"
console.log(myFullName);

// swap variable
var sweety = "Sweety"
var cutie = "Cutie"
console.log(`Before: `,sweety,cutie);
var temp;
temp = sweety 
sweety = cutie;
cutie = temp;
console.log(`After: `,sweety,cutie);

// Assign 3 type of

var bankName;
console.log(`bankName = ${bankName} , typeof = ${typeof bankName}`);
bankName = "SBI BANK"
console.log(`bankName = ${bankName} , typeof = ${typeof bankName}`);

var bankName = "YES bank" // redeclare variabe // reassign variable
console.log(`bankName = ${bankName} , typeof = ${typeof bankName}`);

// define multiple variable in single line
console.log(`\n define multiple variable in single line`);
var num1= 1, num2=2, num3=3;
console.log(`num1,num2,num3 :`,num1,num2,num3);

console.log(`data types`);
var myNum = 307;
var myString= "Home"
var myBoolean = true;

console.log(`variable = ${myNum} Type = ${typeof myNum}`);
console.log(`variable = ${myString} Type = ${typeof myString}`);
console.log(`variable = ${myBoolean} Type = ${typeof myBoolean}`);

var a =null;
console.log(`variable = ${a} Type = ${typeof a}`);

var x;
console.log(`variable = ${x} Type = ${typeof x}`);


// function

console.log(`1] function : No argument No return`);
function myFunction() {
    console.log(`function : No argument No return`);
}
myFunction();

console.log(`2] function : with argument No return`);
function personalDetails(name,age) {
    console.log(`My name is ${name}, and I am ${age} yrs Old`);
}
personalDetails("Rajeshri",34);

console.log(`3] function : SWAP`);

function swap(val1,val2) {
    console.log(`Before: ${val1}, ${val2}`);
var temp;
temp=val1;
val1=val2
val2=temp;
    console.log(`After: ${val1}, ${val2}`);
}
swap("Virat" , "Anuska");
swap(1000,2000)

console.log(`4] function : with argument with return`);
function add(val1,val2,val3) {
    console.log(`Given values: ${val1}, ${val2}, ${val3}`);
    return val1 + val2 + val3
}
console.log(`Addition is ${add(10.23, 600, 40)}`); 
console.log(`Addition is ${add("Hello", " Good", " Morning")}`); 

// Function Expression
console.log(`Function Expression`);

var stringFunction =function (myString) {
    console.log(`Given string : ${myString}`);
    console.log(`total character available in the string : ${myString.length}`);
    console.log(`character at index 6  ${myString.charAt(6)}`);
    console.log(`character at index 12`, myString.charAt(12));
    console.log(`last character using length property`, myString.charAt(myString.length-1));
    console.log(`very first character from the given string`, myString.charAt(0));
    console.log(`length of the given string and then calculate the square of length and log it.`,`squre = ${myString.length * myString.length}` );

}
stringFunction("JS the most popular language");




