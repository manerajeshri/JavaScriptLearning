

//Given home work

// Anil -> Homework
function anilHomework(callback) {
    console.log("Anil is doing homework.");
    console.log("After some time.. Anil did homework");
    callback();
}
// Sunil -> Homework
function sunilHomework() {
    console.log("I am Happy you have completed homework");
    console.log("Copying as it..");
}
anilHomework(sunilHomework);
// sunilHomework();


function show() {
    console.log("HI setTimeout");
}

setTimeout(show,3000);