console.log(`for loop`);
console.log(`\n1] print no from 5 to 15 incrementing by 1`);
//  initialisation  condition    update
for (let index = 5; index <= 15; index = index+1) {
    console.log(`${index}`);
}

console.log(`\n2] print numbers from 50 to 40 by decrementing by 1` );
for (let index = 50; index >= 40; index = index-1) {
    console.log(`${index}`);
}

console.log(`\n3] first 15 ODD numbers`);
for (let index = 1; index <= 30; index = index+2) {
    console.log(`${index}`);
}

console.log(`\n4] first 10 Even numbers`);
for (let index = 2; index <= 20; index = index+2) {
    console.log(`${index}`);
}

console.log(`\n5] Table of 5`);
for (let index = 5; index <= 50; index = index+5) {
    console.log(`${index}`);
}
console.log(`\n6] table of 10`);
for (let index = 10; index <= 100; index = index+10) {
    console.log(`${index}`);
}
console.log(`\n7] Table of 10 in reverse 100--->10`);
for (let index = 100; index >= 10; index = index-10) {
    console.log(`${index}`);
}