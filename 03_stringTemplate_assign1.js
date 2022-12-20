// String template Assignment use `` and $()
function stringTemplateAssig() {
  console.log(`1]`);
  console.log(`My dream company is "TCS"`);
  console.log(`2]`);

  var hobby1 = "Programming";
  var hobby2 = "Reading";
  var hobby3 = "Cooking";
  console.log(`2.1] Using Variable Substitution : `);
  console.log(`My Hobbies are : ${hobby1},${hobby2},${hobby3}`);
  console.log(``);

  // let text1 = "Hello";
  // let text2 = "world!";
  // let text3 = "Have a nice day!";
  // let result = text1.concat(" ", text2, " ", text3);
  console.log(`2.2] Using Concat and string template : `);
  // console.log(`My Hobbies are : ${hobby1}${hobby2}${hobby3}`);
  console.log(`"My Hobbies are : ${hobby1} ${hobby2} ${hobby3}"`);

  // using concat
var resultConcat = hobby1 .concat( hobby2 , hobby3)
console.log(`Result using Concat : ${resultConcat}`);

}
stringTemplateAssig();
