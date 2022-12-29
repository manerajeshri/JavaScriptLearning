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
mobile.company = "Microsoft";
mobile.camera = "20px"

console.log(mobile);


//object is container which can store different values
let person = {
    // key : value
    "height":6,
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
        engligh: 87,
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
const scienceMark1 = student.marks.engligh;
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
    name: "Billgates"
}
console.log(Object.entries(billgates));
console.log(Object.keys(billgates));
console.log(Object.values(billgates));