console.log(' ');console.log('1]');
function name1(){
    console.log('Java is a popular programming language.')
}
name1();
function name2(){
    console.log('Java is used to develop mobile apps, web apps, desktop apps, games and much more.')
}
name2();

console.log(' ');console.log('2]');
function personalDetails(firstName,lastName,collegeName) {
    console.log('Personal Details : ',firstName,lastName,collegeName);
}
personalDetails('Rajeshri','Mane.','RIT Islampur.');

console.log(' ');console.log('3]');
function swapValuesDude(val1,val2) {
    console.log('Before Swap : ',val1,val2);
var temp=val1;
val1=val2;
val2=temp;
console.log('After Swap  : ',val1,val2);
}
swapValuesDude('Virat','Anushka');
console.log(' ');
swapValuesDude( 1000,2000)

console.log(' ');console.log('4]');

function addThreeValues(val1,val2,val3) {
    console.log(val1 ,'+', val2,'+', val3);
    return val1 + val2 + val3;
}

// var output=addThreeValues(10.23,600,40);
// console.log('Addition is : ',output);
console.log(`\nAddition is = ${addThreeValues(10.23,600,40)}`);

console.log(' ');
// as its return some thing so we need variable to get it
var output=addThreeValues( 'Hello','Good','Morning' );
console.log('Addition is : ',output);