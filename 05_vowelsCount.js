var sentence = "Yes just do it man, I know you can";
//print vowels only aeiou or AEIOU
var count=0;
for (let index = 0; index < sentence.length; index++) {
var char = sentence.charAt(index); 
if (char == 'a' || char == 'e'||char == 'i'||char == 'o'||char == 'u'||
    char == 'A' || char == 'E'||char == 'I'||char == 'O'||char == 'U') {
console.log(char);   
count=count + 1;
}
console.log(`count= ${count}`);  
}
console.log(`Total number of vowels = ${count}`);

// optimized

// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is : ${counter}`);


//string reverse
var sentence = "Yes";
console.log(`"Yes"`);
var reverseString = "";
var lastCharPosition = sentence.length - 1;
for (let index = lastCharPosition; index >=0; index= index - 1) {
   var char = sentence.charAt(index);
// var reverseString = "";
reverseString = reverseString.concat(char);
   console.log(char);
    
}
console.log(reverseString);

var sentence = "Yes Just do it man, I know you can";
// initi   cond  update 
var reverseString = "";
 var lastCharPosition = sentence.length-1;
for (let index = lastCharPosition; index >= 0; index-- ){
     var char = sentence.charAt(index);
      reverseString = reverseString.concat(char);
     // console.log(char);
    
}
console.log(reverseString);
