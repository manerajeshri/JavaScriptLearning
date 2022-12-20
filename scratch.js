// function addTwoNo(v1,v2) {
//   var result=v1+v2;
//     // return result;
//     // console.log(result);
// }
// addTwoNo(1,2);

// function someName(param1,param2) {
  
//     var a= param1+ 'Love'+ param2;
//     // console.log(a);
//     return a;
//     // console.log(a);
// }
// var b=someName('Me','You')
// console.log(b);

// // charCodeAt() returns unicode value
// var myString = "Rajeshri";
// console.log(`unicode value is ${myString.charCodeAt(0)}`);


// // valueOf() returns the primitive value of a string:</p>

//  text = "Hello World!";
//  console.log(`"Hello World!"`);
//  console.log(` typeof returns type of data : ${typeof(text)}`); 
//  console.log(`value of returns the value : ${text.valueOf()}`);

// var evenOrOdd = function(value) {

//   if (value%2==0) {
//     return "Even";
//   }
//   if (value%2==1) {
//     return "Odd";
//   }

// }
// console.log(`Result: ${evenOrOdd(45)}`)
// console.log(`Result: ${evenOrOdd(40)}`)

// var evenOrOdd = function(val1,val2) {

//   if (val1==val2) {
//     return "true";
//   }
//   if (val1!==val2) {
//     return "false";
//   }

// }
// console.log(`Result: ${evenOrOdd(0,' ')}`)
// console.log(`Result: ${evenOrOdd(0,'0')}`)
// console.log(`Result: ${evenOrOdd(0,false)}`)
// console.log(`Result: ${evenOrOdd(null,undefined)}`)
// console.log(`Result: ${evenOrOdd(1,[1])}`)
// console.log(`Result: ${evenOrOdd(1,true)}`)
// console.log(`Result: ${evenOrOdd(1,'1')}`)

// =============================================================================anuja

var ageGrade=function(age)
{
    
      if (age>0 && age<18) 
      {
        console.log(`${age}: Age is not eligible for voting  `);
      }
      if (age>=18 && age<120) 
      {
        console.log(`${age}: Age is eligible for voting  `);
      }
      if (age<=0 || age>120 ) {
        console.log(`${age}: " This is Invalid data"`);
        
      }
     
}
ageGrade(45);
ageGrade(17);
ageGrade(8);
ageGrade(20);
ageGrade(-10);
ageGrade(200);
// console.clear();// clear console
ageGrade(0);








