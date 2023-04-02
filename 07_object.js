// creating object

let age = 31; // variable

myLaptop = {
    os : "Windows",
    company : "HP",
    ram: "4gb",
    color : "black",
    processor : "i3 Processor"
}

const mobile ={

}
mobile.company = "Microsoft"; // adding properties to object
mobile.camera = "20px" // adding properties to object

console.log(mobile);


//object is container which can store different values in key(property) : value pair
let person = {
    // key : value
    "height":6,  // kay can be : string, variabe, method , function
    "weight" : 70,
    "age" : 23,
    name : "Raj",
    speak : function () {
        console.log("I can speak english ,Hindi");
    }
}
console.log("typeof person : ",typeof person);
console.log(person);// log object

// object name . property
person.age; // acessing single element // objectName.Property
const personAge = person.age;
console.log(`Person Age is : ${personAge}`);
const personName = person.name;
console.log(`Person Name is : ${personName}`);
// or 
console.log(`or`);
const personName1 = person["name"]; // objectName ["property name"]
console.log(`Person Name is : ${personName1}`);

console.log(`Adding property into object`);
person.company = "Microsoft";
console.log(person);
person.city = "Pune"
console.log(person);

console.log(`Updating property into object`);
person.age =65;
console.log(person);


console.log(`Deleting property into object`);
delete person.age ;
console.log(person);

console.log(`=== Accessing an function from an object====`);
person.speak(); // call Invoke function

// nested object : object inside object
const student ={
    name : "Stew Jobs",
    age : 50 ,
    city : "Pune",
    marks : {
        science :70,
        math : 90,
        english: 87,
        city : "Pune",
        add : function () {
          return  this.science+this.math+this.english;

        }
    },
    familyMemberNames: [ 'Tony', 'Lonny', 'Jenny', 'Watigton']
}

console.log(`Accessing Nested object property`);
const scienceMark = student.marks.science;
console.log(`Science Mark : ${scienceMark}`);
const scienceMark1 = student.marks.english;
console.log(`english Mark : ${scienceMark1}`);

console.log(`Updating science Mark :97`);
student.marks.science=97;
student.marks.programming=100;
// console.log(`Deleting property `);
// delete student.marks.engligh;


// sir

// console.log(`Accessing an Nested object property`);
// const scienceMark =  student.marks.science;
// console.log(scienceMark);

// console.log(`Updating an Nested object property`);
// student.marks.english = 97;

// console.log(`Adding an Nested object property`);
// student.marks.programming = 100;

// console.log(`Deleting an Nested object property`);
// delete student.marks.english;


console.log(`Science Mark : ${student.marks.english}`);
console.log(`Acessing an Nested object function`);
const totalMarks = student.marks.add();
console.log(`Total marks : ${totalMarks}`);

console.log(`Acessing array`);
console.log(student.familyMemberNames);

console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company : "microsoft",
    valuation : "130 B$"

}
console.log(Object.entries(billgates));
console.log(Object.keys(billgates));
console.log(Object.values(billgates));

// using for in loop for obect iteration
// syntax
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


for (const key in billgates) {
    if (Object.hasOwnProperty.call(billgates, key)) {
        const element = billgates[key];
        // console.log(element); // acess only value
        console.log(key,element); // acess key and value
    }
}

console.log(`=================== in operator ==============`);
let isAvailable = "height" in billgates;
console.log(isAvailable);//true
if (isAvailable) {// if loop execute when condition is true
    delete billgates.height;
    console.log(`"height" property is deleted successfully`);
}else{
    console.log(`"height" property is Not deleted successfully`);
}

console.log(`is company property present in billgate object??checking using in operator ==> `,"company" in billgates );
console.log(`is city property present in billgate object??checking using in operator ==> `,"city" in billgates );