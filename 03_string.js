var greet="Good Morning";
console.log("Given string is : ",greet);
console.log("Total character in the string is : ",greet.length);

console.log("");

var fname='..........        ...Dinesh';
console.log("string length for Dinesh:",fname.length);
console.log("character at position 3 :", fname.charAt(3));
console.log("character at position last :", fname.charAt(fname.length-1));

console.log('');
var totalLength=fname.length;
console.log("last chartacter:",fname.charAt(totalLength-1));

// ==========13 dec=======================

var firstName="Rajeshri ";
var lastName="Mane";
var result=firstName + lastName;
console.log('concatination using + is :',result);

var result = firstName.concat(lastName);
console.log('concatination using .concat is :',result);

var result = firstName.concat("Prakash ",lastName);
console.log('concatination using .concat is :',result);

var greet="Good Morning";
console.log(greet);
var indexOf= greet.indexOf("M");
console.log("index of M is : ",indexOf);
console.log("index of nin is : ",greet.indexOf("nin"));

// find and replace
console.log("Replace morning with afternoon : ",greet.replace("Morning","Afternoon")); 
console.log("Replace mor with eve : ",greet.replace("Mor","Eve")); 

// 
var greet="    Good Morning      ";
console.log(greet);
console.log("length of string",greet.length);
var trim = greet.trim();
console.log("Trimming : ",trim,"length",trim.length);

var trim1 = greet.trimStart;
var trim2 = greet.trimEnd;
console.log(trim1,trim2);

var greet="Good Morning";
console.log(greet);
var resultSlice=greet.slice(0,4);
console.log("Slice Method : for 0 to 4 :",resultSlice);
console.log("Slice () with start index 4 :",greet.slice(4));
console.log("Slice () with start index 4 :",greet.slice(4));
console.log("Slice () with  negative start index  :",greet.slice(-7));
console.log("Slice () with  negative start index and end index :",greet.slice(-7,-2));


// Spliting string
var studentList="abhi, Aaru,raj,amol,dinu";
console.log(studentList);
var stdtSplit=studentList.split(","); // stringName.split("Seperator")
console.log("student list after spliting by character i.e. comma :",stdtSplit);
console.log("total no of student:", stdtSplit.length);

 var studentName = "Rajeshri"
 console.log(studentName.split(""));


// 
var sentence="Yes you can do it guys,just keep learning andpracticing as well";
var totalNoOfWord=sentence.split(" ");
console.log("Total words in string : ",totalNoOfWord.length);

// using back tick
console.log(`I love "India"`);

// ${ } variable substitute

var firstName="Raj";
var lastName="Mane";
// using concat
console.log("First name is"+ firstName);
// using back tick ` and ${variableName }
console.log(`First name is ${firstName} and Last Name is ${lastName}`);







// sir code
// console.log( greet.replace("Mor", "Eve"));

// console.log("To upper case", greet.toUpperCase());
// console.log("To lower case", greet.toLowerCase());

// var greet = "    Good Morning     ";
//  console.log("Length ", greet.length);
//  var resultTrim = greet.trim();
//   console.log( "trim()", resultTrim, "Length: ", resultTrim.length);

// console.log("Include() ",greet.includes("Good"));

// var greet = "Good Morning";
// var resultSlice = greet.slice(0, 4);
// console.log("Slice method", resultSlice);

// console.log( "slice() with start index ",greet.slice(4));

// console.log("======== String template ==========");
// console.log(`Yes you can do it "Sanket"  `);


// var firstName = "Mohit ";
// var lastName = "Sharma";
// console.log("First name is: "+ firstName + "Last name is: "+ lastName );

// console.log(`First name is: ${firstName} and last name is ${lastName}`);

