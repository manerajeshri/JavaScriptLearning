// we can store a function as value in JS
var addition=function (n1,n2) {
    console.log(n1+n2);
}
addition(1,3);

console.log('');

var addition=function (n1,n2) {
    // console.log(n1+n2);
    return n1+n2;
}
var result=addition("Good ",3);
console.log(result);

// sir code
var myName = "Mohit";
console.log(myName);

// Function Expression
var showResult = function() {
    console.log("show.....");
};
showResult();

// We can store a function as value in JS
var substraction = function(num1, num2){
    var result = num1 - num2;
    console.log("substraction.......", result);
    return result;
}
var result = substraction(45, 20);
console.log(result);
