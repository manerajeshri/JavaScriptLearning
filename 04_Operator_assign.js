
var result = (0 == ''); // true
console.log(`1] Statement : 0 =='' \n   Result    : ${result}`);
// console.log(`   Reason    : string length is  0`);

var result = 0 =='0'; // true
console.log(`2] Statement : 0 =='0' \n   Result    : ${result}`);
// console.log(`   Reason    : valueOf '0' =  ${text.valueOf()}`);


var result = 0 == false; // true
console.log(`3] Statement : 0 == false \n   Result    : ${result}`);
// console.log(`   Reason    : `);

var result = null == undefined; // true
console.log(`4] Statement : null == undefined \n   Result    : ${result}`);
var result = null === undefined; // true
console.log(`4.1] Statement : null// object === undefined // undefined \n   Result    : ${result}`,typeof undefined);
// console.log(`   Reason    : `);
var result = 1 == [1]; // true
console.log(`5] Statement : 1 == [1] \n   Result    : ${result}`);
// console.log(`   Reason    : `);
var result = 1 == true; //true
console.log(`6] Statement : 1 == true \n   Result    : ${result}`);
// console.log(`   Reason    : `);
var result = 1 =='1';// true
console.log(`7] Statement : 1 =='1' \n   Result    : ${result}`);
// console.log(`   Reason    : `);

// var text = '1'; 
//  console.log(`   valueOf text =  ${text.valueOf()}`);
//  console.log(` typeof  type of data : ${typeof(text)}`); 