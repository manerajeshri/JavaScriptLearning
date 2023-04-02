console.log(`\n1] Create an object using literals namely→ personalDetails with your actual detail`);
const personalDetails= {
    name : "Rajeshri Mane",
    contact : 987654321,
    email : "abc.gmail.com",
    personCity : "Pune"
}
console.log(personalDetails);

console.log(`\n2] Create an object using literals → collegeDetails with your college details`);
const collegeDetails = {
    collegename : "RIT",
    city : "Islampur",
    passingYear : 2013,
    graduatioin : "Graduation",
    collegename1 : "KBP",
    city1 : "Satara",
    passingYear1 : 2010
}
console.log(collegeDetails);

console.log(`\n3] Merge these two objects`);

const meargePersonCollege = Object.assign({},personalDetails,collegeDetails);
console.log(`After Mearging : using Object.assign({},personalDetails,collegeDetails)`)
console.log(meargePersonCollege);

console.log(`\n4] Create an array of your friend names and freeze it`);

const friendsArray =["Aaradhya","Shiv","Yug","Chaitanya","Anu","Vihan"];
console.log(friendsArray);
Object.freeze(friendsArray); // freeze array

console.log(`\n5] Iterate step 4 array using for of loop and log friend names on console`);

for (const iterator of friendsArray) {
    console.log(iterator);
}

console.log(`\n6] Given a string company = "Codemind Technology" 
a. Write a code to reverse only → Technology word`);

function reverseString(string) {
    console.log(`\nGiven string is : ${string}`);
    var tech = string.split(" ");
    // console.log(tech); //  (2) ['Codemind', 'Technology']
    // console.log(tech[1]); // Technology
    let reversedWord=[];
    for (let index = (tech[1].length) - 1; index >= 0; index--) {
        const element = (tech[1][index]);
        reversedWord= reversedWord + element;
    }
    // console.log(reversedWord); //ygolonhceT
    return tech[0] +" "+ reversedWord
}
console.log(`After Reverse   : ${reverseString("Codemind Technology")} `);

