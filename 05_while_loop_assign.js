//  initialisation  condition    update
console.log(`while loop`);
console.log(`\n1] print no from 5 to 15 incrementing by 1`);
var i=5;
while (i<=15) {
    console.log(`${i }`);
    i++;
}
console.log(`using do while loop`);
var i=5;
do { 
    console.log(`${i }`);
    i++;    
} while (i<=15);

console.log(`\n2] print numbers from 50 to 40 by decrementing by 1` );
var i=50;
while (i>=40) {
    console.log(`${i}`);
    --i; //i-- both work
}
console.log(`\n3.1] first 15 ODD numbers`);
var i =1, num=1;
while (i<=15) {
    if ((num%2)!=0) {
        console.log(`${num}`);
        i++;
        num=num+2; //method 1
    }
}

console.log(`\n3.2] first 15 ODD numbers`);
var i =1, num=1;
while (i<=15) {
    if ((num%2)!=0) {
        console.log(`${num}`);
        i++;
        num++;// method 2
    }
    num++; // method 2
}


console.log(`\n4.1] first 10 Even numbers`);

var i=1, num=0;
while (i<=10) {
    if ((num%2)==0) {
        console.log(`${num}`);
        i++;
        num=num+2;
    }
}
console.log(`\n4.2] first 10 Even numbers`);

var i=1, num=0;
while (i<=10) {
    if ((num%2)==0) {
        console.log(`${num}`);
        i++;
        num++;
    }
    num++;
}

console.log(`\n5] Table of 5`);
var i=5;
while (i<=50) {
    console.log(`${i}`);
    i=i+5;
}
console.log(`using do while loop`);
var i=5;
do {
    console.log(`${i}`);
    i=i+5;
} while (i<=50);

console.log(`\n6] table of 10`);
var i=10;
while (i<=100) {
    console.log(`${i}`);
    i=i+10;
}
console.log(`using do while loop`);
var i=10;
do {
    console.log(`${i}`);
    i=i+10;
} while (i<=100);

console.log(`\n7] Table of 10 in reverse 100--->10`);
var i=100;
while (i>=10) {
    console.log(`${i}`);
    i=i-10;
}
console.log(`using do while loop`);
var i=100;
do {
    console.log(`${i}`);
    i=i-10;
} while (i>=10);