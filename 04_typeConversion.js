
var numAdd = 10 + 40;
console.log(`numAdd`, numAdd);
var strAdd = "Raj " + 7 ;
console.log(`strAdd is : ${strAdd}`);

// Explicit conversion
// converting string to number use + before string==>
console.log(` + operator can do the the type conversion as well from string to number `);
console.log(``);
console.log(`converting string to number`);
var numStr = "100" ;
var num = + numStr;
console.log(`type of "${numStr}" is: ${typeof numStr}`);// type of "100" is: string
console.log(`type of ${num} is: ${typeof num}`); // type of 100 is: number

console.log(``);
var numStr = "chandra" ;
var num = + numStr;
console.log(`type of "${numStr}" is: ${typeof numStr}`); //type of "chandra" is: string
console.log(`value is ${num} type of is: ${typeof num}`); // value is NaN type of is: number

console.log(``);

// num => string

var myNum=77;
console.log(`My number is ${myNum} Datatype is ${typeof myNum}`);
//My number is 77 Datatype is number

var convToString = myNum.toString();
console.log(`My number is ${convToString} Datatype is ${typeof convToString}`);


var numAdd = 10 + 40; // 50
var strAdd = "Pooja " + 70; // concating using +
 console.log(`"Pooja " + 70 is: ${strAdd}`);


 console.log(`\nImplicit conversion == comparison \n Is 20 == "20"? result :  ${20 == "20"}`); // Implicit conversion

 // My number is 77 Datatype is string
 var myNumber = -77.333;
console.log(`\nmyNumber values ${myNumber} and it's type is: ${typeof myNumber}`);
 var strMyNumber = myNumber.toString();
 console.log(`strMyNumber values ${strMyNumber} and it's type is: ${typeof strMyNumber}`);
