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

// if bolock
//  1] Even odd number
function evenOdd(val) {
    if (typeof val == "number" && val%2 == 0) {
       return console.log(`The number ${val} is Even`);
    }
    if (typeof val == "number" && val%2 != 0) {
        return console.log(`The number ${val} is Odd`);
     }
}
evenOdd(45)
evenOdd(70)
evenOdd(67)
evenOdd(98)

// 2] voting eligibility
function votingEligibility(age) {
    if (typeof age === "number" && age>=18 && age<120) {
        return console.log(`Your age is ${age} : Eligible for voting`);
    }
}
votingEligibility(18)
votingEligibility(20)
votingEligibility(17)
votingEligibility(140)

//3] string character count
function stringCharacterCount(string) {
    if (string.length>=10) {
         console.log(`given string is ${string} contains ${string.length} Charatcers`);
    }
    return "Contain more than 10 chracter"
}
 var result= stringCharacterCount("JavaScript-ES6")
 console.log(result);

 // 4] check if string starts with Java
function startCheck(string) {
    if (string.startsWith("Java")) {
        console.log(`Given string is ${string} and it starts with java`);
    }
}
startCheck("JavaScript Language")

// Assignment 17


// Assignment 21
// check leap year  if ((year%4 == 0 && year%100 != 0) || (year%100==0 && year%400==0))=============================================================
// step 1]
// See if the number is evenly divisible by 4. 
// Dividing the year by 4 will result in a whole number with no remainder if the number is evenly divisible.
// The number must be evenly divisible by 4! Otherwise, it is not a leap year.
// step 2]
// Confirm the number isn't evenly divisible by 100. If a year is evenly divisible by 4, 
// but it is not evenly divisible 100, then it is a leap year. 
// If a year is divisible by both 4 and 100,
//  then it might not be a leap year, and you will have to perform 1 more calculation to check
// step 3]
// the number is evenly divisible by 100 then it should be divisible by 400


var check_Leap_Year = function (year) {
    //  condition to check input valid or not
    if (typeof year !== "number" || isNaN(year)) {
      console.log(`Year: ${year} ${typeof year} : Invalid year entered`);
    } else {
      // console.log(`Year: ${year} ${typeof year} : Valid year entered`);
      // condition to check leap year ==> If a year is evenly divisible by 4,
      // but it is not evenly divisible 100, then it is a leap year.
    //   or
    //   If a year is divisible by both 100 and 400, then it is a leap year
      if ((year%4 == 0 && year%100 != 0) || (year%100==0 && year%400==0)) {
        console.log(`entered year ${year} : Leap Year`);
      } else {
        console.log(`entered year ${year} : Not a Leap Year`);
      }
    }
   
}
check_Leap_Year(2020);
check_Leap_Year(1999)
check_Leap_Year(1600)
check_Leap_Year(2022)
check_Leap_Year(1945)
check_Leap_Year(null)
check_Leap_Year("Twenty Twenty")
check_Leap_Year(undefined)
check_Leap_Year(NaN)
check_Leap_Year(1750)

// Assignment 22 switch case

function workingDay(dayInNumber) {
    switch (dayInNumber) {
            case 1:
            console.log(`${dayInNumber}: Monday : Working `);
            break;
            case 2:
            console.log(`${dayInNumber}: Tuesday : Working `);
            break;
            case 3:
            console.log(`${dayInNumber}: Wed : Working `);
            break;
            case 4:
            console.log(`${dayInNumber}: Thur : Working `);
            break;
            case 5:
            console.log(`${dayInNumber}: Fri : Working `);
            break;
            case 6:
            console.log(`${dayInNumber}: Sat : Not Working `);
            break;
            case 7:
            console.log(`${dayInNumber}: Sun :Not Working `);
            break;
    
        default:
            console.log(`${dayInNumber}: Invalid Day Entered `);
            break;
    }
}
workingDay(7)

// Assignment 23

function monthofYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`${monthNumber} : Jan`);
            break;
            case 2:
                console.log(`${monthNumber} : Feb`);
            break;
            case 12:
                console.log(`${monthNumber} : Dec`);
            break;
    
        default:
            console.log(`${monthNumber} : Invalid month entered`);
            break;
    }
}
monthofYear(19)

// Assignment 25
// while

// 1. WAP to print numbers from 5 to 15 by incrementing 1 ICU
console.log(`WAP to print numbers from 5 to 15 by incrementing 1 ICU`);
var i=5; // initilize
while (i<=15) {   // condition 
    console.log(i);
    i++ // update
}

// 2. WAP to print numbers from 50 to 40 by decrementing by 1
console.log(`WAP to print numbers from 50 to 40 by decrementing by 1`);
var i=50
while (i>=40) {
    console.log(i);
    i--;
}
// 3. WAP to find first 15 odd numbers
console.log(`WAP to find first 15 odd numbers`);
var count=1,i=1
while (count<=15) {
 if (i%2!=0) {
    console.log(i);
    count++ 
 }   
 i++ 
}

// 4. WAP to find first 10 even numbers
console.log(`4. WAP to find first 10 even numbers`);
var i=2, count=1;
while (count<=10) {
    console.log(i);
    i=i+2;
    count++
}

// 5. WAP to print table of 5 like → 5 10 15 20 25 …… 50
console.log(`5. WAP to print table of 5 like → 5 10 15 20 25 …… 50`);
var i=5;
while (i<=50) {
    console.log(i);
    i=i+5
}
// 6. WAP to print table of 10 like 10 20 30 40 …… 100
console.log(`6. WAP to print table of 10 like 10 20 30 40 …… 100`);
var i=10;
do {
    console.log(i);
    i=i+10
} while (i<=100);

// 7. WAP to print table of 10 in reverse order like → 100 90 80 70 …… 10
console.log(`7. WAP to print table of 10 in reverse order like → 100 90 80 70 …… 10`);
var i=100;
do {
    console.log(i);
    i=i-10
} while (i>=10);

// IMP Questions
// Assignment no 26
// 1. What is vowels in alphabets ?
// 2. What is Factorial of a number ?
// 3. What is Prime Number ?
// 4. What is Fibonacci Series ?
// 5. What is leap year ?
// 6. Palindrome



// Control Flow
// Assignment no 27
// 1. Count the total number vowels for string → “I am very good IT Developer”
console.log(`\nAssignment no 27
// 1. Count the total number vowels for string → “I am very good IT Developer”`);
function countVowels(string) {
    var count=0
// console.log(`given string is : ${string}`);
for (let index = 0; index < string.length; index++) {
    var char = (string.charAt(index).toLowerCase())
    if (char == "a" || char == "e" || char == "i"|| char == "o"|| char == "u") {
        // console.log((string.charAt(index)));
        count++
    }
}
console.log(`the total number vowels for string "${string}" is ${count}`);
}
countVowels("I am very good IT Developer")

console.log(`\n2.Write a function to get the sum of cube of numbers from 1 to 5.
Ex→ 1*1*1 + 2*2*2 + 3*3*3 + 4*4*4 + 5*5*5`);

function sumOfCube() {
  var sumOfCube = 0,
    cube = 1;
  for (let index = 1; index <= 5; index++) {
    cube = index * index * index;
    sumOfCube = sumOfCube + cube;
  }
  console.log(`sum of cube of numbers from 1 to 5 =${sumOfCube}`);
}
sumOfCube();

console.log(`3. For the given string Log only odd positioned chars on console and do not consider empty spaces`);
// 3. For the given string1→ “Hard work always pays back”, 
// string2 → “Soon I will be Angular IT Champ” write a functions as mentioned below.
// 3.1. Function oddPositionedChars() with one arg
// 3.1.1. Log only odd positioned chars on console and do not consider empty spaces
// 3.1.2. Invoke or call this function for above given string1 and string2 separately

function oddPositionedChars(string) {
    var result=""
   var modifiedString = string.split(" ").join("");
   console.log(modifiedString);
   
   for (let index = 0; index <= modifiedString.length; index++) {
    if (index%2!==0) {
        // console.log(modifiedString.charAt(index));
        result =  result.concat(" " , modifiedString.charAt(index));
    }
   }
   console.log(result);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ")


// Design a function factorialNumber() Call this function for value one by one like → 5, 7, 8, 12
console.log(`4. Design a function factorialNumber()`);
// 1*2*3*4*5
function factorialNumber(num) {
    var factorial=1;
    for (let index = 1; index<=num; index++) {
       factorial =  factorial * index
    }
    console.log(`number = ${num} factorial = ${factorial}`);
}
factorialNumber(5) // 120
factorialNumber(7) // 5040
factorialNumber(8) // 40320
factorialNumber(12) // 479001600


// Assignment 28
//Reverse string and ignore the spaces
console.log(`\nReverse string and ignore the spaces`);

function reverseString(string) {
    var modifiedString= string.split(" ").join("")
    console.log(modifiedString);
// using for loop
var reversedString = ""
for (let index = modifiedString.length-1; index >=0; index--) {
    // console.log(modifiedString.charAt(index));
    reversedString = reversedString.concat(modifiedString.charAt(index));
}
console.log(reversedString,`\n`);
}
reverseString("Hard work always pays back")
reverseString("Soon I will be Angular IT Champ")

// using methods
function reverseString1(string) {
    var modifiedString= string.split(" ").join("")
    console.log(modifiedString.split("").reverse().join(""));
    // console.log(string.split("").reverse().join("").split(" ").join(""));
}
reverseString1("Hard work always pays back")
reverseString1("Soon I will be Angular IT Champ")

// 
// Assignment 29 == To count character ‘a’ or ‘A’
console.log(`To count character ‘a’ or ‘A’`);
function countCharA(string) {
    var count=0;
    for (let index = 0; index < string.length; index++) {
        if (string.charAt(index).toLowerCase() == "a" ) {
            count ++
        }
    }
    console.log(count);
}
countCharA("I AM Learning JavaScript, The Language of internet")
countCharA("My favourite movie is LAggAn")
countCharA("AaaAaAA")

console.log(`6. Palindrome`);

function IsPalindrome(string) {
    string.trim().toLowerCase() == string.trim().split("").reverse().join("").toLowerCase() ? console.log("Palindrome") : console.log("No Palindrome");
}
IsPalindrome("MadAm ") // Palindrome


console.log(`3. find Prime Number ?`);
function isPrimeNumber(num) {
    var count=0;
    for (let i = 1; i <=num; i++) {
        if (num%i===0) {
            count++
        }
    }
    // console.log(count);
    if (count==2) {
        console.log(`Number ${num} : Prime Number`);
    }else {
        console.log(`Number ${num} : Not Prime Number`);
    }
}
isPrimeNumber(1);
// isPrimeNumber(9);
// isPrimeNumber(1);

console.clear();

// print prime number from 1 to 10

function findPrimeNumber(num) {
    
}
findPrimeNumber(10);
// 4. What is Fibonacci Series ?


















// Assignment 31