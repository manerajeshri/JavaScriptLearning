console.log(`1] Total number of vowels for string`);

function totalVowels(string) {
    console.log(`Given string is : ${string}`);
    var counter =0;
    for (let index = 0; index <= string.length-1; index++) {
         var pointer =  string.charAt(index)
        // console.log(`${pointer}`);
        if (pointer=='a'|| pointer=='e'|| pointer=='i'||pointer=='o'|| pointer=='u'||
            pointer=='A'|| pointer=='E'|| pointer=='I'||pointer=='O'|| pointer=='U') {
            
                counter = counter+1;
        }
    }
    return counter; //10
}

console.log(`Total no of vowels : ${totalVowels("I am very good IT Developer")}\n`);


console.log(`2] Sum of cube of numbers from 1 to 5`);
// 1*1*1 + 2*2*2 + 3*3*3 + 4*4*4 +5*5*5

function sumOfCube() {
    var result=1,sumOfResult=0;
    for (let index = 1; index <= 5; index++) {
        result=index*index*index;
        sumOfResult = sumOfResult + result;
    }
    console.log(`Sum of cube of numbers from 1 to 5 : ${sumOfResult}\n`); //225
}
sumOfCube();
// console.clear();

console.log(`3] Finding odd position characters`);
function oddPositionedChars(string) {
    console.log(`Given String is : ${string}`);// Given String is : Hard work always pays back
    var resultSplitJoin = string.split(" ").join("") // removes spaces between words
    console.log(`After removing Spaces : ${resultSplitJoin}`);// Hardworkalwayspaysback
   
    for (let index = 0; index <= resultSplitJoin.length-1; index++) {
        if ((index%2)!== 0) {
            console.log(`${resultSplitJoin.charAt(index)}`);//character at output
        }        
    }
}
console.log(`\n3.1] string 1`);
oddPositionedChars("Hard work always pays back");
console.log(`\n3.2] string 2`);
oddPositionedChars("Soon I will be Angular IT Champ");