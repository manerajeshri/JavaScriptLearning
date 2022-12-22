
console.log(`To count character 'a' or 'A'`);

function countCharA(givenString) {
    console.log(`\nGiven String is : ${givenString}`);    
    var counter=0;
    for (let index = 0; index <= givenString.length-1; index++) {

        if (givenString.charAt(index)== 'a' || givenString.charAt(index) == 'A') {
            counter = counter + 1;
        }
    }    
    return counter
    // console.log(`Total number of 'a' or 'A' ingiven string : ${counter}`);
}

console.log(`Total number of 'a' or 'A' ingiven string : ${countCharA("I AM Learning JavaScript, The Language of internet")}`);
console.log(`Total number of 'a' or 'A' ingiven string : ${countCharA("My favourite movie is LAggAn")}`);
// countCharA("I AM Learning JavaScript, The Language of internet");
// countCharA("My favourite movie is LAggAn")