// 1] function with No arguments No return
function show() {
  // task to perform
  console.log("RIT Islampur");
}
show(); // calling / invoke function
// 2] function with arguments No return
function swapvalues(value1, value2) {
  console.log("Before", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After", value1, value2);
}
swapvalues(100,200);
swapvalues('you','me');
