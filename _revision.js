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

console.clear();
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

console.clear();

// Assignment 35 → Object cloning and Traversing
// 1. Create the object → ‘bank_sbi’ using literals with at least 4 properties
// 2. Create the object → ‘bank_location’ using literals with properties: street, city, pin_code
// 3. Clone the step 1 ( bank_sbi ) and step 2 ( bank_location ) objects using
// ○ Object.assign( )
// ○ Spread Operator
// Note: Log the cloned object details on console with meaning message using strings
// template
// 4. Create the object using literals → rate_of_interest with properties
// ○ home_loan_interest, personal_loan_interest, due_interest
// 5. Merge the step 1, step 2 and step 4 objects into new object namely → sbi_details
// Log all the properties that ‘sbi_details’ got after merging with meaning message
// 6. Traverse this merged object - step 5 using loop




