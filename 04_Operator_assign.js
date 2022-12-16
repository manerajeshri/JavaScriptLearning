
var result = (0 == '');
console.log(`1] Statement : 0 =='' \n   Result    : ${result}`);
// console.log(`   Reason    : string length is  0`);

var result = 0 =='0';
console.log(`2] Statement : 0 =='0' \n   Result    : ${result}`);
// console.log(`   Reason    : valueOf '0' =  ${text.valueOf()}`);


var result = 0 == false;
console.log(`3] Statement : 0 == false \n   Result    : ${result}`);
// console.log(`   Reason    : `);

var result = null == undefined;
console.log(`4] Statement : null == undefined \n   Result    : ${result}`);
// console.log(`   Reason    : `);
var result = 1 == [1];
console.log(`5] Statement : 1 == [1] \n   Result    : ${result}`);
// console.log(`   Reason    : `);
var result = 1 == true;
console.log(`6] Statement : 1 == true \n   Result    : ${result}`);
// console.log(`   Reason    : `);
var result = 1 =='1';
console.log(`7] Statement : 1 =='1' \n   Result    : ${result}`);
// console.log(`   Reason    : `);


// var text = '1'; 
//  console.log(`   valueOf text =  ${text.valueOf()}`);
//  console.log(` typeof  type of data : ${typeof(text)}`); 