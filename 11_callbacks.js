//Given home work
// Anil -> Homework
function anilHomework(rollNo , callback) { // I addede roll no
    console.log(`My Roll no is ${ rollNo } and Anil is doing homework.`);
    console.log("After some time.. Anil did homework");
    callback();
}
// Sunil -> Homework
function sunilHomework() {
    console.log("I am Happy you have completed homework");
    console.log("Copying as it..");
}
anilHomework(11,sunilHomework);
// sunilHomework();

// callback example 2

function ad(n1,n2) {
    console.log(`\nAddition is : ${n1+n2}`);
}
function ml(n1,n2) {
    console.log(`Multiplication is : ${n1*n2}`);
}

function adMl() {
   console.log(`Callback==============================`);
}
adMl(ad(1,3),ml(5,6))
// adMl()

// console.log("Callback with arg functions");
// let add = function (n1, n2){
//     console.log(n1+n2);
// }
// let multiply = function (n1, n2){
//     console.log(n1*n2);
// }

// function operation(callbackAdd, callbackMultiply) {
//     console.log('operation');
//     callbackAdd(5, 5);
//     callbackMultiply(2, 2);
// } 
// operation(add, multiply);




function show() {
    console.log("\nHI setTimeout : inserts delay");
}
// setTimeout(show,3000); // inserts delay