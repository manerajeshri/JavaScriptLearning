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

// Assignment 24
var key = true;
switch (key) {
    case true:
        console.log(`ONE`);
        break;
        case false:
        console.log(`Two`);
        break;
    default:
        break;
}

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

// print prime number from 1 to 10

function findPrimeNumber(givenNum) {
var primeNumbers="";
var primeNoCount=0;
for (let num = 1; num <=givenNum; num++) {
    var count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    primeNumbers= primeNumbers.concat(" ", num);
    primeNoCount++;
  } 
}
console.log(`Prime numbers between 1 and ${givenNum} : ${primeNumbers} Count : ${primeNoCount}`);
}
findPrimeNumber(100);

// 4. What is Fibonacci Series ?
// The are the numbers in the following integer sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
console.log(`Fibonacci Series`);
let values=[0,1];
for (let i = 2; i <15; i++) {
    values.push( values[i-1] + values[i-2])
}
console.log(values);

// Assignment 31
// For a given array fruits perform below operations as:
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
                        // 0          1        2           3           4
console.log(`Given array : ${fruits_seasonal}`);
// 1. Log the first and last element on console
console.log(`1. first and last element                          ::`,fruits_seasonal[0], fruits_seasonal[fruits_seasonal.length-1]);
// 2. Add element → Papaya before the element ‘Banana’ and then log array on console
fruits_seasonal.unshift("Papaya")
console.log(`2. Add element → Papaya before the element ‘Banana’::${fruits_seasonal} `);
// 3. Remove ‘Mango’ from the array
fruits_seasonal.splice(4,1)
console.log(`3. Remove ‘Mango’ from the array                   ::${fruits_seasonal}`);
// 4. Add element or insert an element ‘Pineapple’ at the last position
fruits_seasonal.push("Pineapple")
console.log(`4. Add / insert an ‘Pineapple’ at the last position ::${fruits_seasonal}`);
// 5. Insert an element - ‘Dragon Fruit’ before “Water Melon”
fruits_seasonal.splice(4,0,"Dragon Fruit")
console.log(`5. Insert       ‘Dragon Fruit’ before “Water Melon” ::${fruits_seasonal}`);
// 6. Replace an element ‘Orange’ with ‘Kiwi’
fruits_seasonal.splice(2,1,"Kiwi")
console.log(`6. Replace an element ‘Orange’ with ‘Kiwi’          ::${fruits_seasonal}`);
// 7. Log the elements starting from index 1 to 4
console.log(`7. Log the elements starting from index 1 to 4      :: ${fruits_seasonal.slice(1,5)}`);
// 8. Only select last 3 element and log on console: Use the length property
console.log(`8. Only select last 3 elementUse the length property::${fruits_seasonal.slice(fruits_seasonal.length-3)}`);

// Assignment 32

const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`arrayNumbers : ${arrayNumbers}`);
console.log(`1. Find the total elements available or length and log on console= ${arrayNumbers.length}`);
console.log(`2. Log the first element= ${arrayNumbers[0]} and last element= ${arrayNumbers[arrayNumbers.length-1]} in arrayNumbers and log on console`);
console.log(`3. Log the third last element=${arrayNumbers[arrayNumbers.length-3]} using length property and log on console`);
// `4. Find the all even numbers and log on console
let arrayEven =[]
for (let i = 0; i < arrayNumbers.length; i++) {
    const element = arrayNumbers[i];
    if (element%2 == 0) {
        arrayEven.push(element)
    }
}
console.log(`4. Find the all even numbers and log on console ${arrayEven}`);
// console.log(`5. Find the odd numbers and log on console`);
let arrayOdd =[]
for (let i = 0; i < arrayNumbers.length; i++) {
    const element = arrayNumbers[i];
    if (element%2 !== 0) {
        arrayOdd.push(element)
    }
}
console.log(`5. Find the all Odd numbers and log on console ${arrayOdd}`);
// console.log(`6. Find all the even positioned elements from arrayNumbers, for loop`);
var even_positioned=[]
for (let i = 0; i < arrayNumbers.length; i++) {
    if (i%2==0) {
        even_positioned.push(arrayNumbers[i])
    }
}
console.log(`6. Find all the even positioned elements from arrayNumbers, ${even_positioned}`);
// console.log(`7. Find all the odd positioned elements from arrayNumbers, log on console`);
var odd_positioned=[]
for (let i = 0; i < arrayNumbers.length; i++) {
    if (i%2!=0) {
        odd_positioned.push(arrayNumbers[i])
    }
}
console.log(`7. Find all the odd positioned elements from arrayNumbers, ${odd_positioned}`);
// console.log(`8. Find the sum of all elements from arrayNumbers, log on console`);
let sum=0;
for (let i = 0; i < arrayNumbers.length; i++) {
    const element = arrayNumbers[i];
    sum= sum + element;
}
console.log(`8. Find the sum of all elements from arrayNumbers= ${sum}`);
// console.log(`9. Find the numbers which are multiple of 5`);
let mulOf5 = []
for (let i = 0; i < arrayNumbers.length; i++) {
    const element = arrayNumbers[i];
    if (element%5==0) {
        mulOf5.push(element)
    }
}
console.log(`9. Find the numbers which are multiple of 5 == ${mulOf5}`);
console.log(`10. Is number 115 available in arrayNumbers ?:: ${arrayNumbers.includes(115)}`);
console.log(`11. Is number 23 available in arrayNumbers ? :: ${arrayNumbers.includes(23)} `);
// console.log(`12. Insert numbers → 55, 66 before index 3 and log array on console`);
arrayNumbers.splice(3,0,55,66)
console.log(`12. Insert numbers → 55, 66 before index 3 :::${arrayNumbers}`);
// console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
arrayNumbers.splice(4,3)
console.log(`13. Delete 3 elements starting from index 4 == ${arrayNumbers}`);

const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
function is_include(num, replaceValue) {
//   console.log(`arrayNumber`, arrayNumber);
  var count=0;
  for (let i = 0; i < arrayNumber.length; i++) {
    const element = arrayNumber[i];
    if (element === num) {
      arrayNumber[i] = replaceValue;
      count++;
    }
  }
  if (count != 0) {
    console.log(`arrayNumber`, arrayNumber, `count : ${count}`);
  } else {
    console.log(`arrayNumber ${arrayNumber} ==> Doesn't include ${num}`);
  }
}
is_include(77, "**");

// Assignment 33
// Create an empty object with name → professor
let professor ={} ; console.log(`professor //Create an empty object with name → professor ==>`, professor);
// 1. Think of all the properties that you could add
professor.name="Rajeshri"; 
professor.qualification ="Mtech";
professor.age = 34;
console.log(`1. Think of all the properties that you could add==>`, professor);
// 2. Also include nested object ‘degrees’ like engineering: ‘CSC’, PHD: ‘Adv Computing’ and few  more.
let degrees={
        engineering: "CSC", 
        PHD: "Adv Computing"
    }
professor.degree = degrees;
console.log(`professor`,professor);
console.log(`Also include nested object ‘degrees’ ==> professor.degree==>`, professor.degree);

// 3. Also add one more nested object ‘certificates’ with his certificates like ‘Hacker Rank
// Participation’, ‘Certificate in IFE course’, ‘Certificate in Adv Programming’
let certificates = {
  certificate1: "Hacker Rank Participation",
  certificate2: "Certificate in IFE course",
  certificate3: "Certificate in Adv Programming",
};
professor.certificates=certificates;
console.log(professor.certificates);
// 4. Add function as a value which should concat all degrees in step 2,
// please return as string and log on console with - Teacher total degrees are
var concatDegrees = function () {
   return console.log(`Teacher total degrees are : ${professor.degree.PHD.concat(" and ",professor.degree.engineering)}`);
}
professor.concatDegrees= concatDegrees;
professor.concatDegrees();
// 5. Try to add new property and log on console
professor.mobile=77930074;
console.log(`5. Try to add new property and log on console==>professor.mobile`, professor.mobile);
// 6. Modify any existing property and log complete object on console
console.log(`6. Modify any existing property and log complete object on console`);
professor.mobile=99999999999
console.log(`modified mobile:`,professor.mobile);
// 7. Delete any one certificate from nested object
console.log(`7. Delete any one certificate from nested object`);
console.log(`professor.certificates`, professor.certificates);
delete professor.certificates.certificate2
console.log(`After delete professor.certificates.certificate2`,professor.certificates);
// 8. Add new certificate in nested object - ‘certificates’
console.log(`8. Add new certificate in nested object - ‘certificates’`);
professor.certificates.certificate4 = "Angular"
console.log(`After professor.certificates.certificate4 ==>`, professor.certificates );
// 9. Log the nested object ‘certificate’ on console

// Assignment 34: Object with data member and member function
console.log(`Create an objects → sbiBank, axisBank, hdfcBank, yesBank with data members such as
A. Data members: bankName, location, accountNo, ifsc, interestRate`);
// B. Set the values separately according to their bank details
// C. Add a member function → showDetails( ), In this function log the data members of that
// object in one line. Note: This function doesn’t have return value and no args
let sbiBank = {
    bankName : "SBI Bank", 
    location : "pune", 
    accountNo : 76767, 
    ifsc: "SBIIFSC07", 
    interestRate : "9%",
    showDetails : function () {
        console.log(`**bankName : ${this.bankName} **location : ${this.location}   account No   ${this.accountNo}    ifsc  ${this.ifsc } interest rate : ${this.interestRate}`);
        // return  `**bankName : ${this.bankName} **location : ${this.location}   account No   ${this.accountNo}    ifsc  ${this.ifsc } interest rate : ${this.interestRate}`
    }
}
// D. Invoke the function showDetails( ) on each object separately
sbiBank.showDetails();
// console.log(`${sbiBank.showDetails()}`); // log when using return

// Assignment 35 → Object cloning and Traversing
console.log(`1. Create the object → ‘bank_sbi’ using literals with at least 4 properties`);
let bank_sbi= {
bankName : "SBI Bank",
ifsc : "IFSCSBI77",
branch : "PUNE",
interestRate : "7%"
}
console.log(`bank_sbi`,bank_sbi);
console.log(`// 2. Create the object → ‘bank_location’ using literals with properties: street, city, pin_code`);
let bank_location ={
    street : "punawale street",
     city : "Pune",
      pin_code :"411033"
}
// 3. Clone the step 1 ( bank_sbi ) and step 2 ( bank_location ) objects using Object.assign( ) & Spread Operator
// Note: Log the cloned object details on console with meaning message using strings template
let objectassign_bank = Object.assign({},bank_sbi )
let objectassign_location = Object.assign({},bank_location )
console.log(`objectassign_bank : `, objectassign_bank ,`\n objectassign_location `, objectassign_location);

let spreadOperator_bank = {...bank_sbi}
console.log(`spreadOperator_bank`, spreadOperator_bank);
let spreadOperator_location = {...bank_location}
console.log(`spreadOperator_location`, spreadOperator_location);

console.log(`// 4. Create the object using literals → rate_of_interest with properties`);
let rate_of_interest = {
    home_loan_interest : "10%",
    personal_loan_interest : "11%",
    due_interest : "12%"
}

console.log(`// 5. Merge the step 1, step 2 and step 4 objects into new object namely → sbi_details
 Log all the properties that ‘sbi_details’ got after merging with meaning message`);

// let sbi_details = Object.assign({},bank_sbi,bank_location,rate_of_interest) // using object Assign
let sbi_details = {...bank_sbi,...bank_location,...rate_of_interest} // using spread operator
console.log(`sbi_details`,sbi_details);
console.log(sbi_details.bankName, sbi_details.branch, sbi_details.ifsc, sbi_details.pin_code, sbi_details.home_loan_interest);

console.log(` 6. Traverse this merged object - step 5 using loop`);

for (const key in sbi_details) {
    const element = sbi_details[key];
    console.log(key,'==>',element);
}

// Assignment 36
console.log(`1. Define a class for Vehicle which should contains.
● Properties or attributes or data members:   ● Constructor
Create 5 objects from Vehicle class and log on console`);

class Vehicle {
    wheels; color ; fuel ; year
    constructor(wheels, color , fuel , year){
this.wheels = wheels,
this.color = color,
this.fuel = fuel,
this.year= year
    }
}

let maestro = new Vehicle("2 Wheelar", "Silver", "Petrol", "2013");
let i10     = new Vehicle("4 Wheelar", "Blue" , "Petrol","2020")

console.log(`maestro ==>`, maestro);
console.log(`i10`, i10, `\nchecking is object belongs to class ==> i10 instanceof Vehicle==>`, i10 instanceof Vehicle); // checking object belongs to class or not
console.log(`checking is property exist in object == "fuel" in maestro ==>`,"fuel" in maestro); // true checking property exist in object 

// 2. Define a class for College which must contain
// ● Properties or attributes or data members:
// ● Constructor
// ● Member function to log the details of college
// Create 4 objects from College class and invoke the method to log details for each object
class College {
    collegeName;
    city;
    constructor(collegeName , city){
        this.collegeName=collegeName,
        this.city=city
    };
    details(){
console.log(`College Details : Name==> ${this.collegeName} city==> ${this.city}`)
    };
    traverseObject(object){
        for (const key in object) {
                const element = object[key];
                console.log(`${key} ${element}`)          
        }
    }
}

let kbp = new College("KBP","Satara");
kbp.details();
let rit =new College("RIT", "Islampur")
rit.details();

console.log(`3. Write a function → traverseObject() with one arg. such that it should traverse the complete given
// object using for in loop and log the output `);
// 3.1 Call this traverseObject() function by passing one by one object of College class
kbp.traverseObject(kbp)
rit.traverseObject(rit)

// Assignment 37  Object, Array Freeze and merge
console.log(`1. Create an object using literals namely→ personalDetails with your actual detail.`);
let personalDetail ={
    name: "Rajeshri",
    age : 34
}
console.log(`personalDetail`, personalDetail);
console.log(`2. Create an object using literals → collegeDetails with your college details`);
let collegeDetails ={
    college : "RIT",
    university : "Autonomous"
}
console.log(`collegeDetails`,collegeDetails);
console.log(`3. Merge these two objects and log details on console with meaning message.`);
let mergedDetails = {...personalDetail, ...collegeDetails}
console.log(`mergedDetails`,mergedDetails);

console.log(`4. Create an array of your friend names and freeze it.`);
let friendsArray= ["a","b","c"]
Object.freeze(friendsArray)
friendsArray[0]="A"  // cant bz its freezed
console.log(`friendsArray`,friendsArray); //friendsArray (3) ['a', 'b', 'c']

console.log(`5. Iterate step 4 array using for of loop and log friend names on console`);
for (const i of friendsArray) {
    console.log(i);
}

console.log(`6. Given a string company = “Codemind Technology”;
 a. Write a code to reverse only → Technology word
 b. Expected output → “Codemind ygolonhceT” `);

function reverseWord(string) {
    let resultSplit = string.split(" ")
    console.log(`Method 1 Output==>`, resultSplit[0].concat(" ",resultSplit[1].split("").reverse().join("")));
}
reverseWord("Codemind Technology")

function reverseWord1(string) {
    let resultSplit = string.split(" ")
    let reverse = []
    for (const i of resultSplit[1]) { // for of
        reverse.unshift(i)
    }
    console.log(`Method 2 Output==>`,resultSplit[0] + " " + reverse.join(""));
}
reverseWord1("Codemind Technology")

function reverseWord2(string) {
    let resultSplit = string.split(" ")
    let secondWord = resultSplit[1]
    let reverse = []
    for (let i = 0; i < secondWord.length; i++) {
        reverse.unshift(secondWord.charAt(i))
        
    }
    console.log(`Method 3 Output==>`,resultSplit[0] + " " + reverse.join(""));
}
reverseWord2("Codemind Technology")

// Assignment 38: 07_ObjectCloneAssign.js, Please log output on console with step number and meaningful message
const arrayNums = [ 20, 3, 4, 56, 90, 400, 49 ]
console.log(`Given a array →  arrayNums : `,arrayNums);
// 1. Perform shallow clone on arrayNums, Update cloned array with values → 55, 66 using push () and log original and cloned array on console
let shallow_clone =  arrayNums;
shallow_clone.push(55,66)
console.log(`Given a array →  arrayNums : `,arrayNums);
console.log(`shallow_clone`,shallow_clone);
// 2. Perform deep clone using spread operator, Update original array i.e arrayNums with values 10, 25 at last position and log original and cloned array
// on console
let deep_clone = [...arrayNums];
arrayNums.push(10,25)
console.log(`Given a array →  arrayNums : `,arrayNums); // changes
console.log(`deep_clone`, deep_clone); //unchanged
// 3. Given other array → arrayEven = [ 2, 30, 14, 8], Merge or concat this array with ‘arrayNums’ using spread operator, log result on console after merge
// array operation
let arrayEvn = [ 2, 30, 14, 8]
let mergedArray = [...arrayNums,...arrayEvn]
console.log(`arrayNums`,arrayNums,`\narrayEvn`, arrayEvn,`\nmergedArray`,mergedArray);

console.log(`Create the employee_info object as shown in snippet→`);
const employee_info ={
    emp_id :27,
    emp_name : "John Doe",
    salary: {
        july_month:"40,000INR",
        aug_month:"50,000INR",
        jun_month:"65,000INR"
    },
    address:{
        locality:{
            colony: "OM Vrindavan Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles : ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(`employee_info`,employee_info);
console.log(`5. Log the employee details on console like
a. Address: Locality, city, state and country b. Mobile numbers`);
console.log(`a. Address :Locality ==> `);
for (const key in employee_info.address.locality) {
        const element = employee_info.address.locality[key];
        console.log(element);
}
console.log(employee_info.address.city,employee_info.address.state,employee_info.address.country );
for (const key in employee_info.address) {
    const element = employee_info.address[key];
    console.log(element);
}

console.log(`mobile no==>`, employee_info.mobiles[0] , employee_info.mobiles[1],employee_info.mobiles[2]);
for (const i of employee_info.mobiles) {
    console.log(i);
}

console.log(`6. Perform deep copy using JSON.stringfy( )`);
let deep_copy = JSON.parse(JSON.stringify(employee_info));
console.log(`a. Update property ‘july_month’ salary to 80K on cloned object`);
deep_copy.salary.july_month = "80k";
console.log(`b. Update property ‘country’ to ‘United Kingdom’ On original object`);
employee_info.address.country = "United Kingdom";
console.log(`c. Log - Updated values for original & cloned object on console`);
console.log(`employee_info`,employee_info , `.salary.july_month`,employee_info.salary.july_month, `country`,employee_info.address.country);
console.log(`deep_copy`,deep_copy, `.salary.july_month`, deep_copy.salary.july_month  , `country`, deep_copy.address.country );

// Assignment 40: 07_ObjectMergeAssign2.js
 console.log(`Given a object car and carEngine merge or concat these two objects using
 1. Object.assign() 2. Spread operator …`);
// Note: ● Log the step 1 merged object details with meaning message // ● Log the step 2 merged object details
const car = {
  carName: "Creta SX",
  company: "Hundai",
  launchYear: 2017,
};

const carEngine = {
  enginePower: "1499CC",
  maxPower: "113 BHP",
};
let object_assign = Object.assign({},car,carEngine)
console.log(`object_assign`, object_assign);
for (const key in object_assign) {
        const element = object_assign[key];    
    console.log(key , element);
}

let spread_operator  = {...car, ...carEngine}
console.log(`spread_operator`, spread_operator);
for (const key in spread_operator) {
    const element = spread_operator[key];    
console.log(key , element);
}


// Assignment 44: Array Of Objects, 08_arrayObjectAssignmnet.js
// Create a class ‘Bank’ with all possible data members in such as way that all properties
// should be initialized using constructor.
// A. Data members: bank_name, location, account_no, ifsc, interest_rate
class Bank {
    bank_name; location; account_no; ifsc; interest_rate;
    constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name=bank_name, 
        this.location = location,
        this.account_no= account_no, 
        this.ifsc = ifsc, 
        this.interest_rate = interest_rate
    }
}
// B. Create objects - axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank
let axis_bank= new Bank("Axis_bank","Pune","1","ifscAxis","7%")
let sbi_bank = new Bank("sbi","Pune","2","ifscsbi","8%")
let icici_bank= new Bank("icici","Pune","3","icici","9%")
let kotak_bank = new Bank("Kotak bank","Punekotak","4","kotak","9.%")

// C. Add all object elements in a array and Traverse this array using for of loop 
// then just log on console - Bank name and Location
let arrayOfBanks =[axis_bank, sbi_bank, icici_bank, kotak_bank]
for (const i of arrayOfBanks) {
    console.log(i);
}
for (const i of arrayOfBanks) {
    console.log(`Bank name ==> ${i.bank_name} and Location==> ${i.location}`);
}
// D. From the array(Step C) find the object which has name → Kotak bank using for of loop
for (const i of arrayOfBanks) {
    if (i.bank_name === "Kotak bank") {
        console.log(`Kotak bank ==>`,i);
    }
}

// E. Log the details on console using for loop of array

for (let i = 0; i < arrayOfBanks.length; i++) {
    const element = arrayOfBanks[i];
    console.log(element);
    console.log(element.bank_name , element.account_no);
    
}

// Assignment 45: Set and Map hands on for objects
// Create a class ‘Bank’ with all possible data members in such a way that all properties should
// be initialized using constructor.
// A. Data members: bank_name, location, account_no, ifsc, interest_rate
class Bankk {
    bank_name; location; account_no; ifsc; interest_rate;
    constructor(bank_name, location, account_no, ifsc, interest_rate){
this.bank_name,
this.location, 
this.account_no, 
this.ifsc, 
this.interest_rate
    }
}

// B. Create objects - axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank
let axisbank= new Bank("Axis_bank","Pune","1","ifscAxis","7%")
let sbibank = new Bank("sbi","Pune","2","ifscsbi","8%")
let icicibank= new Bank("icici","Pune","3","iciciifsc","9%")
let kotakbank = new Bank("Kotak bank","Punekotak","4","kotakifsc","9.%")

// 1. Add all object elements in a array and just log on console - Bank name and Location
let bankArray = [axisbank,sbibank,icicibank,kotakbank]
for (const i of bankArray) {
    console.log(`Bank name ${i.bank_name} and Location ${i.location}`);
}

// 2. Add all object elements in a Set and traverse using for of loop and log on console just
// Bank name with it’s IFSC code

let setOfBanks = new Set();
setOfBanks.add(axisbank);
setOfBanks.add(sbibank);
setOfBanks.add(icicibank);
setOfBanks.add(kotakbank);
console.log(`set`,setOfBanks);
// console.log(`set`,...setOfBanks);

for (const i of setOfBanks) {
    // console.log(i);
    console.log(`Bank name ${i.bank_name} IFSC code ${i.ifsc}`);
}

// 3. Create a Map in such way that key should be account_number and value is object that
// is created in step B. Traverse the map and log on console all object details

let mapOfBank = new Map();
mapOfBank.set(1,axisbank)
mapOfBank.set(2,sbibank)
mapOfBank.set(3,icicibank)
mapOfBank.set(4,kotakbank)

console.log(`mapOfBank mapOfBank.keys() == >`, mapOfBank.keys());

for (const i of mapOfBank.keys()) {
    console.log(`i`,i);
    console.log(mapOfBank.get(i));
}

// 4. From the array(Step A) find the object which has name → Kotak bank

for (const i of bankArray) {
    if (i.bank_name == "Kotak bank") {
        console.log(`found  Kotak bank ==> ${i.bank_name} ${i.ifsc}`);
    }
}

// Assignment 46: Arrow function
// Write a arrow function such that - Pls don’t forget to log result on console with meaningful msg
// 1. With no args and no return value, log message on console inside arrow function
// a. “Good Morning, Today is Monday”
let show= ()=>{
    console.log(`“Good Morning, Today is Monday”`);
}
show();
// 2. With 3 args and no return value, for received 3 parameters perform the multiplication
// a. Values to be passed ⇒ 5, 5, 2
let mul = (n1,n2,n3=1)=>{
console.log(`Multiplication is `, n1*n2*n3);
}
mul(5,5,2)
// b. Invoke the same function for values ⇒ 10, 4 [Note: assign default value to 3rd arg as 1 ]
mul(10,4)
// 3. With 5 args and return value such as, for received params it should do the addition
let add5 = (n1,n2,n3,n4,n5)=>{
return console.log(`Addition = `, n1+n2+n3+n4+n5);
}
// a. Values to be passed ⇒ 100, 100, 200, 349, 756
add5(100, 100, 200, 349, 756)
// b. Log the returned result on console with meaningful message for both step 3.a and 3.c
// c. Invoke the same arrow function for values: “I am”, “learning”, “ ES6”, ‘ features’, “ in depth”
add5("I am", " learning", " ES6", " features", " in depth")

// Assignment 47
// Note: Please create the Employee class as it →
// - While creating objects pass the values as it is →
// - Add all the created emp objects inside array namely  as ‘array_employess’
// Solve the below problem statements as  & log result on console with meaningful msg

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) { 
        this.emp_id = emp_id;    
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary= emp_salary;
        this.emp_company= emp_company;
    }
}
    const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS"); 
    const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro"); 
    const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS"); 
    const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy"); 
    const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro"); 
    const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS"); 
    const enp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

arrayOfEmp = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,enp_mahi];// creating array of object

// 1. Find the all the employees working in ‘TCS’ and log only employee names and company name on console

for (const i of arrayOfEmp) {
 if (i.emp_company === "TCS") {
    console.log(`employee names ${i.emp_name} and company name ${i.emp_company}`);
 }   
}

// 2. Find the ‘Finance’ department employees, log only department and employee name on console
for (const i of arrayOfEmp) {
    if (i.emp_dept === "Finance") {
        console.log(`department ${i.emp_dept} and employee name ${i.emp_name}`);
    }
}

// 3. Find the employees whose name starts with ‘R’ and complete employee details on console [ hint –> startsWith(R“) ]
for (const i of arrayOfEmp) {
    if (i.emp_name.startsWith("R") ) {
        console.log(`department ${i.emp_dept} and employee name ${i.emp_name}`);
    }
}

// 4. Find the employees whose salary is greater than 70000, and emp name, company and salary on console
for (const i of arrayOfEmp) {
    if (i.emp_salary >=70000 ) {
        console.log(`company ${i.emp_company}  salary ${i.emp_salary} and employee name ${i.emp_name}`);
    }
}

// 5. Find the emp’s whose salary greater than or equal 50000 and from ‘IT’ department, log complete emp details on console
for (const i of arrayOfEmp) {
    if (i.emp_salary >=50000 && i.emp_dept === "IT" ) {
        console.log(`company ${i.emp_company} department ${i.emp_dept} salary ${i.emp_salary} and employee name ${i.emp_name}`);
    }
}

// console.clear();
// Assignment 48: Using forEach( ) with arrow function and callback
const array_numbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
// From the given array_numbers, try the hands-on for
// 1. Log the array element with it’s index using forEach( ) with arrow function
array_numbers.forEach((currentValue,index,array)=>{
console.log(`array element ${currentValue} it’s index ${index}`);
})
// 2. Find the positive numbers and log on console // a. Using forEach( ) with arrow function
array_numbers.forEach((element)=>{
    if (element>=0) {
        console.log(`positive number ${element}`);
    }
})

// 3. Find the negative numbers, add into new array and and log new array on console using arrow
// function
let negativeArray = []
console.log(`array_numbers`, array_numbers);
array_numbers.forEach((element)=>{
    if (element<0) {
        // console.log(`negative number ${element}`);
        negativeArray.push(element)
    }
})
console.log(`negativeArray`, negativeArray);

// 4. Find the even numbers and log on console using forEach( ) with arrow function
array_numbers.forEach((element)=>{
    if (element%2===0) {
        console.log(`even no`, element);
    }
})
// 5. Find the sum of all elements from array_numbers and log on sum value on console.
let summ = 0;
array_numbers.forEach((element)=>{
    sum = sum + element
})
console.log(`sum =`, sum);
// 6. Log the only even positioned array value on console. forEach( ) with arrow function prefered
array_numbers.forEach((element, index)=>{
    if (index%2===0) {
        console.log(`even positioned`,element);
    }
})


// Assignment 49: Use only forEach( ) // Create new file pls
// For the given employee objects refering line no 1214
arrayOfEmp = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,enp_mahi];// creating array of object
// 1. Find out the ‘TCS’ employee details and log only name & company on console
arrayOfEmp.forEach((employeeObject)=>{
    if (employeeObject.emp_company === "TCS") {
        console.log(`name  ${employeeObject.emp_name} & company ${employeeObject.emp_company}`);
    }
})
// 2. Find the employees with salary greater than or equal 50000 ( Log the all employee details on console )
arrayOfEmp.forEach((empObj)=>{
    if (empObj.emp_salary >=50000) {
        console.log(`employee details`,empObj);
    }
})
// 3. Find the sum of all employees salary and log on console
let salsum=0;
arrayOfEmp.forEach((empObj)=>{
    salsum =salsum + empObj.emp_salary
})
console.log(`salsum`,salsum);
// 4. Find the average salary and log on console (Average = Total Salary / Number of employees)
console.log(`Average salary = ${salsum / arrayOfEmp.length}`);
// 5. Find the ‘IT’ OR ‘HR’ department employees whose salary is greater than or equal to 75000 and log complete employee details on console
arrayOfEmp.forEach((empobj)=>{
    if ((empobj.emp_dept === 'IT' || empobj.emp_dept ==='HR')&& empobj.emp_salary>= 75000) {
        console.log(empobj);
        for (const key in empobj) {
            console.log(key +  " : " + empobj[key]);
        }
    }
})

//  forEach() on SET

const setofNum = new Set()
setofNum.add(60); setofNum.add(70);setofNum.add(80);
setofNum.add(20);setofNum.add(30);setofNum.add(40);

setofNum.forEach((currentValue, index,set)=>{
console.log(`currentValue, index,set ==>`,`currentValue ==>`,currentValue,`index==>`, index,`set==>`,set);
})

setofNum.forEach((currentValue)=>{
    console.log(`currentValue ==>`,currentValue);
})

// forEach() ==> MAP
console.log(`\nforEach() with callback ==> MAP`);
const map =new Map;
map.set(11, "Anil"); map.set(22, "Sunil");
map.set(33, "Radha"); map.set(44, "Rani")
// forEach with callback
map.forEach(function(key,value){
    console.log(`key,value ==>`,key,value);
})

console.log(`\nforEach() with arrowfunction ==> MAP`);
map.forEach((key,value)=>{
console.log(`key,value== > `, key,value);
})


// Assignment 50: Create new file pls For the given Employee class, objects are created as shown in snippet
// Create a Map Collection with name ‘map_employees’ and entries in such a way that employee id is the key and
// value is the employee object Ex. map_employees.set(22, emp_anil);In this way add all entries
let map_employees = new Map;
map_employees.set(22,emp_anil)
map_employees.set(33,emp_radha)
map_employees.set(55, emp_rishi)
map_employees.set(66,emp_sonali)
map_employees.set(77,emp_monika)
map_employees.set(88,emp_viny)
map_employees.set(99,enp_mahi)
    
// Log the details in format  Emp id ===> Name: emp_name , Dept: emp_dept, Company: emp_company, Salary: emp_salary
// Please traverse using forEach() loop
// Example:  22 ===> Name: Anil, Dept: IT, Company: TCS, Salary: 50000

map_employees.forEach((key, value)=>{
    console.log(key, value);
    console.log(`Emp id ${value} ===> Name: ${key.emp_name} , Dept: ${key.emp_dept}, Company: ${key.emp_company}, Salary: ${key.emp_salary}`);
    for (const i in key) {
        console.log(i,key[i]);
    }
})


// Assignment 51: map( )
const array_number = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
// For the given array Perform the below operations as
// 1. Add 10 into each element and log new array result on console using map( )
let new_array_number = array_number.map((element,index,array)=>{
return element + 10;
})
console.log(`array_number`, array_number);
console.log(`new_array_number`, new_array_number);
// 2. Square the each array element and log on console
let square_array_number = array_number.map((element)=>{
    return element * element
})
console.log(`square_array_number`, square_array_number);
// 3. Add the index value into its corresponding each array element and log new array result on console
let add_index_aray = array_number.map((element,index)=>{
    return element + index
})
console.log(`add_index_aray`,add_index_aray);

// Assignment 52 : map( )
// Add the all employee objects inside array
arrayOfEmp = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,enp_mahi];// creating array of object
// 1. Get the list of all employee names &  log new array on console.
let employee_names = arrayOfEmp.map((element)=>{
return element.emp_name
})
console.log(`employee_names`, employee_names);
// 2. Get the list of departments & log on  console
let departments = arrayOfEmp.map((element)=>{
    return element.emp_dept
    })
    console.log(`departments`,departments);
// 3. Get the list of employee id’s and log on console
let employee_ids = arrayOfEmp.map((element)=>{
    return element.emp_id
    })
console.log(`employee_ids`,employee_ids);

// Assignment 53 - for filter( ) method
const arrayNumberss = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`arrayNumberss`,arrayNumberss);
// 1. Find out all the numbers which are greater than 50 and log on console
let greater_than_50 = arrayNumberss.filter((element)=>{
    return element>50
})
console.log(`greater_than_50`, greater_than_50);
// 2. Find out all the even number and log on console
let even_number = arrayNumberss.filter((element)=>{
    return element%2==0
})
console.log(`even_number`, even_number);
// 3. Find out all the odd numbers and log on console
let odd_numbers = arrayNumberss.filter((element)=>{
    return element%2!==0
})
console.log(`odd_numbers`,odd_numbers);
// 4. Find out all the numbers which are multiple of 5
let multiple_of_5 = arrayNumberss.filter((element)=>{
    return element%5==0
})
console.log(`multiple_of_5`, multiple_of_5);
// 5. Find out all numbers which are between 20 and 50
let between20and50 = arrayNumberss.filter((element)=>{
    return 20<element && element<50
})
console.log(`between20and50`, between20and50);


// Assignment:54 filter( )
// Add the all employee objects inside array
arrayOfEmp = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,enp_mahi];// creating array of object
console.log(`arrayOfEmp`, arrayOfEmp);
// 1. Find out all the objects from ‘TCS’  using filter( ), 
let arrayTCS = arrayOfEmp.filter((element)=>{
    return element.emp_company === "TCS"
})
console.log(`arrayTCS`, arrayTCS);
// and then from the Final array result log Company name & Employee name.
console.log(`using foreach()`);
arrayTCS.forEach((element)=>{
    // console.log(element);
    console.log(`Company name ${element.emp_company} & Employee name ${element.emp_name}.`);
})

console.log(`using for of`);
for (const iterator of arrayTCS) {
    // console.log(iterator);
    console.log(`Company name ${iterator.emp_company} & Employee name ${iterator.emp_name}.`);
}

// Assignment 55 - for reduce( ) method
const array_numberss = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// 1. Find the sum of all numbers
let summm = array_numberss.reduce((runningTotal, element)=>{
  console.log(runningTotal, element);
  return runningTotal+ element
})
console.log(`summm = `,summm);
// 2. Find the sum of all even numbers [ Hint → filter first then use reduce( ) ]
let even_numbers =  array_numberss.filter((element)=>{
    console.log(element);
    return element%2===0
})
console.log(`even_numbers`, even_numbers);
let sum_even_numbers= even_numbers.reduce((currentValue,value)=>  currentValue + value);
console.log(`sum_even_numbers`, sum_even_numbers);

console.log(`optimized == > using chaining`);
// let chaining_sum_even= array_numberss.filter((element)=>{
// return element%2==0;
// }).reduce((currentValue,values)=>{
//     return currentValue+values
// })

// more optimised
let chaining_sum_even= array_numberss.filter(element=>element%2==0 ).reduce((currentValue,values)=> currentValue+values)
console.log(`chaining_sum_even`, chaining_sum_even);

// Find the average using reduce( )
const arrayy_numbers = [20,11,40,25,23,11,9,90,60,2,19];
let totalsum =0;
let sum_arrayy_numbers = arrayy_numbers.reduce((runningTotal,values)=>{

    return totalsum = runningTotal+values
})
console.log(`avg_arrayy_numbers`,sum_arrayy_numbers/arrayy_numbers.length);


// Assignment 56 - Using filter( ) and reduce( )
// Given the Employee class Add all employee object inside array namely ‘array_emps’
array_emps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,enp_mahi];// creating array of object
// 1. Find all the employees from ‘Wipro’ company
let employees_from_Wipro = array_emps.filter((element)=>{
return element.emp_company === "Wipro"
})
console.log(`employees_from_Wipro`, employees_from_Wipro);
employees_from_Wipro.forEach((element,)=>{
console.log(element);
for (const key in element) {
    console.log(key , element[key]);
    }
})
//2. Find all the employees from ‘IT’ OR ‘HR’ dept
let empItHr = array_emps.filter((element)=>{
    return element.emp_dept=== "IT" ||  element.emp_dept=== "HR"
})
console.log(`empItHr`, empItHr);

empItHr.forEach((element)=>{
    console.log(element);
    for (const key in element) {
        console.log(key,element[key] );
     }
})

//3. Find all the employees whose emp id’s are greater than 50
let id50 = array_emps.filter((element)=>{
    return element.emp_id>=50
})
console.log(`id50`, id50);
id50.forEach((element)=> console.log(element))

//4. Find all the employees whose names start with letter ‘A’ or ‘V’ or ‘M’ [ Hint→ startsWith( “A”) || startsWith( “V”)
// startsWith( “M”) inside if ( ) block as a condition ]
let avm = array_emps.filter((element)=>{
    return element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")
})
console.log(`avm`, avm);
avm.forEach((element)=>{
    console.log(element.emp_name ,element.emp_company , );
})

// 5. Find the average salary of the employee for all the department
let sal =[]
 array_emps.filter((element)=>{
     sal.push(element.emp_salary)
})
console.log(sal);
let suum= sal.reduce((runningTotal,values)=>{
    return runningTotal + values
},0)
console.log(`sum =`, suum, `avg sal = `, suum/ array_emps.length);

// 6. Find the average salary for ‘IT’ department [ Hint → Filter the ‘IT’ department employee using filter( ) which
// return new array with only ‘IT’ department employees and then use reduce( ) to get the average ]

let arrayofIT = array_emps.filter((element)=>{
    if (element.emp_dept === "IT") {
        return element.emp_salary
    }

})
console.log(`arrayofIT`,arrayofIT);
let sall =[]
arrayofIT.forEach((element)=>{
sall.push(element.emp_salary)
})

let totalSal = sall.reduce((rt,v)=>{
    return rt+v
})
console.log(`totalSal = `, totalSal, `avg sal = `,  totalSal/array_emps.lengthv);

// Assignment 57: Sorting in Ascending / Descending order and reverse
const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ]
console.log(`Given array `, array_roll_numbers);
// 1. Reverse the array
let reverse_array = array_roll_numbers.reverse()
console.log(`reverse_array  `, reverse_array);
// 2. Use the sort() method as it is without any custom sorting logic 
// (Without passing any arguments) & notice the issue
console.log(`sort() as it is`, array_roll_numbers.sort());
// 3. Sort the array in ascending order, by writing your custom logic
console.log(`Sort the array in ascending order, by writing your custom logic`);
let ascending_array = array_roll_numbers.sort((a,b)=>{
    return a>b? 1 :-1
})
console.log(`ascending_array`, ascending_array);
let descending_array = ascending_array.reverse();
console.log(`descending_array`, descending_array);

// 4. Find the Greatest number from the array
console.log(`Greatest number from the array :`,ascending_array[0] );
// 5. Find the smallest number from the array
console.log(`smallest number from the array :`,ascending_array[ascending_array.length-1]);
// 6. Remove duplicates from array
let newArray = [...new Set(array_roll_numbers)]
console.log(`Remove duplicates from array :`, newArray);

console.clear();
// Assignment 58: Sorting in ascending & Descending
// For the given Employee class objects are Created please add all them in array. namely ‘array_employees’
let array_employees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,enp_mahi];// creating array of object
// Try the below:
// 1. Sort the ‘array_employees’ in ascending order of Employee Id’s and log employee details → Id, Name, Department

let ascending_order = array_employees.sort((a,b)=>{
    return a.emp_id > b.emp_id ? 1 :-1
})
console.log(`ascending_order`,ascending_order);
ascending_order.forEach((element)=>{
    console.log(`employee details → Id : ${element.emp_id}, Name : ${element.emp_name}, Department : ${element.emp_dept}`);
})

// 2. Sort the ‘array_employees’ in ascending order of employee department & log Id, dept, & Company
let employee_department = array_employees.sort((a,b)=>{
    return a.emp_dept > b.emp_dept ? 1:-1
})
console.log(employee_department);

employee_department.forEach((element)=>{
    console.log(`log Id ${element.emp_id}, dept ${element.emp_dept}, & Company ${element.emp_company}`);
})

// 3. Sort the employee array in descending order of employee salary and log Name, Salary & Company
let descending_order = array_employees.sort((a,b)=>{
return a.emp_salary > b.emp_salary ? -1:1
})
descending_order.forEach((element)=>{
    console.log(`Name ${element.emp_name}, Salary ${element.emp_salary} & Company ${element.emp_company}`);
})
























