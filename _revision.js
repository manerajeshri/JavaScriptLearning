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

// Function Expression and string
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


// String

console.log(`\n===================String======================================`);
var stringHandsOn = function () {
    var givenString = "     Hey you are doing good, keep it up     " ;
    console.log(givenString);
    //Calculate length of the String
    console.log(`length of the String : ${givenString.length}`);
// 3. Remove the leading and trailing extra spaces
console.log(`Remove the leading and trailing extra spaces : "${givenString.trim()}"`);
// 4. Print the total number extra spaces count that is removed in step 3.
console.log(`total number extra spaces count that is removed in step 3 : ${givenString.length - givenString.trim().length}`);
// 5. Print the first and last character on the same line after trim()
console.log(`Print the first and last character on the same line after trim() : First: ${givenString.trim().charAt(0)} Last:${givenString.trim().charAt(givenString.trim().length-1)}`);
// 6. Print the count of total words available in the string after step 3
console.log(`Print the count of total words available in the string after step 3 :`, givenString.trim().split(" ").length);
// 7. Print the index of word “good” from the given string
console.log(`Print the index of word “good” from the given string : ${givenString.indexOf("good")}`);
// 8. Print the substring starting from index 22, using substring() and slice()
console.log(`Print the substring starting from index 22, using substring() and slice() :`,givenString.substring(22) , givenString.slice(22));
// 9. Check, is string ends with word “up” after step 3?
console.log(`Check, is string ends with word “up” after step 3? : `, givenString.trim().endsWith("up"));
// 10. Check is string starts with word “Hey” after trimming → i.e after step 3 output string value
console.log(`Check is string starts with word “Hey” after trimming → i.e after step 3 output string value : `, givenString.trim().startsWith("Hey")); 
}
stringHandsOn();


// Assignment 11

function squareOfWordLength(string) {
    console.log(`given Word ${string} Length : ${string.length}`);
    return string.length*string.length;
}
 console.log(`Word Length Square  :${squareOfWordLength("JavaScript")}`);  
 console.log(`Word Length Square  :${squareOfWordLength("Google Chrome")}`); 
 console.log(`Word Length Square  :${squareOfWordLength("Developer Smart")}`); 

// FE

var myFunction= function () {
    var string= "I am Angular Developer ";
    console.log(`String length is :${string.length} , Tota No of words : ${string.split(" ").length} 
    (Length / Words)= ${string.length / string.split(" ").length}
    (Length * Words)= ${string.length * string.split(" ").length}`);
}
myFunction();

// Operators
// Assignment 12

// find greater no
var greaterNo = function (num1,num2) {

    num1>num2 ? console.log(`Given no are : ${num1},${num2} and greater no is ${num1}`) : console.log(`Given no are : ${num1} ,${num2} and greater no is ${num2}`); 
}
greaterNo(10,-10);
greaterNo(800,899);

// find even odd num
var isEvenOdd = function (num) {
    var result =  (num%2==0) ? "True " : "False";
    return console.log(`Is number ${num} is Even ? : ${result}`);
}
isEvenOdd(29);

// find word length even or odd
 var wordLengthEvenOdd = function (string) {
    return (string.length%2 == 0)? console.log(`Given word ${string} length = ${string.length} is Even`) : console.log(`Given word ${string} length = ${string.length} is Odd`)
 }
 wordLengthEvenOdd("JavaScript");
 wordLengthEvenOdd("Google");
 wordLengthEvenOdd("developer");


 // assignment 13 ternery operator

 function maleMarriageEligibility(gender, age, boyName) {
    return (gender==="Male" && age>=21) ? console.log(`Hey ${boyName} You are elogible for Marriage`) : console.log(`Not Eligible for Marriage`);
 }
 maleMarriageEligibility("Male",25,"Bill Gates");
 maleMarriageEligibility("Male",17, "Stew Jobs");

 function femaleMarriageEligibility(gender, age, girlName) {
    if (gender==="Female" && age>=18) {
        console.log(`Hey ${girlName} You are elogible for Marriage`)
    } else {
        console.log(`Not Eligible for Marriage`);
    }
 }
  femaleMarriageEligibility("Female",27, "Malinda");
  femaleMarriageEligibility("Female",16,"Jenny");

// Assignment 14
var eligibility = function (grad, hsc,ssc,name) {
    (grad>=70 || hsc>=80 || ssc>=90)? console.log(`Congo! ${name} you are eligible for TCS interview`): console.log(`Not Eligible`);
}
eligibility(80,6,90, "Aaradhya");
eligibility(60,79,88,"abc")

//  Flow Control
// Assignment 16 



