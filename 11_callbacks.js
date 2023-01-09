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

function add(n1,n2) {
    console.log(`\nAddition is : ${n1+n2}`);
}
function mul(n1,n2) {
    console.log(`Multiplication is : ${n1*n2}`);
}

function addMul() {
   console.log(`Callback==============================`);
}

addMul(add(1,3),mul(5,6))

function show() {
    console.log("\nHI setTimeout : inserts delay");
}
setTimeout(show,3000); // inserts delay