

// function add(num1,num2) {
//     var result =num1 + num2;
//     console.log(`result is : ${result}`);

// }

// var singerName = "Kishor Kumar";
// const PI = 3.1412;

// let actorName;
// console.log(actorName);

var isMarried = true;
if (isMarried) {
  var greet1 = " testing Congratulation";
  // console.log(greet1);
}
console.log(greet1); // cant acess greet outside if{} if it  is let or const  local scope block scope and can acess if its var

function add(num1, num2) {
  var result = num1 + num2;
  let PIN = 431202;
  console.log(`Result is : ${result}`);
  var isMarried = true;
  if (isMarried) {
    var greet = "Congratulation";
    const PI = 3.14; 
    let myName = "Mohit";
  }
  // console.log(PI); // not acessable as it is const
  // console.log(myName); // not acessable as it is let
  console.log(greet); // can acess greet as its var has functional scope
  console.log(`Result is : ${result}`);
  return result;
}
add(5, 5);
// console.log(`Outside Result is : ${result}`);
// console.log(PIN);
