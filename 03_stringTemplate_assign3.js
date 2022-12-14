console.log(`1]`);

function squareOfWordLength(stringValue) {
  console.log(`Length of word "${stringValue}" : ${stringValue.length}`);
  console.log(`Length Square  : ${stringValue.length * stringValue.length}`);
}

console.log(`1.1]`);
squareOfWordLength("JavaScript");
console.log(``);
console.log(`1.2]`);
squareOfWordLength("Google Chrome");
console.log(``);
console.log(`1.3]`);
squareOfWordLength("Developer Smart");

console.log(` `);

var givenString = function () {
  var givenStringIs = "I am Angular Developer";
  console.log(`2] The given string is: ${givenStringIs}`);
  console.log(`The string length is : ${givenStringIs.length}`);
  var stringslice = givenStringIs.split(" ");
  console.log(`Total no of words    : ${stringslice.length}`);
  console.log(``);
  console.log(`2.1] String length / Total no of words : ${givenStringIs.length / stringslice.length}`);
  console.log(``);
  console.log(`2.2] String length * Total no of words : ${givenStringIs.length * stringslice.length}`);
};
givenString();
