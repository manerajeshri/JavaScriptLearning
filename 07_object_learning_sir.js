const datta = {
    "height":6,
    "weight": 70,
    "age": 23
  }
  
  const myLaptop ={
      OS: "Bug sur",
      companyName: "Apple",
      ram: "8GB",
      color: "Silver",
      processor: "M1 Processor"
  }

  

  const person1 = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates"
  }
  console.log(typeof person1);
  console.log(person1);
  
  const personAge1 = person1.age;
  console.log(`Person age is: ${personAge1}`);


  const personName1 = person1["name"];
console.log(personName1);


const person = {
  height: 6,
  weight: 70,
  age: 23,
  name: "Billgates",
  speak: function(){
    console.log(`Hey I can speak English and Hindi`);
  }

}
console.log(typeof person);
console.log(person);
console.log(`Accessing object properties using dot notation`);
const personAge = person.age;
console.log(`Person age is: ${personAge}`);
console.log(`Accessing object properties using square bracket notation`);
const personName = person["name"];
console.log(personName);

console.log(`=== Adding an property into an object====`);
person.company = "Microsoft";
console.log(person);

console.log(`=== Updating an property into an object====`);
person.age = 65;
console.log(person);

console.log(`=== Deleting an property into an object====`);
delete person.weight;
console.log(person);



console.log(`=== Creating an empty object====`);
const mobile = {

}
mobile.company = "Micromax";
mobile.camera = "20Px";
console.log(mobile);




console.log(`Nested object`);
const student = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70,
        math: 90,
        english: 87,
        add: function() {
          return this.science+this.math+this.english;
       },
       familyMemberNames: [ 'Tony', 'Lonny', 'Jenny', 'Watigton']


    }
}

console.log(`Accessing an Nested object property`);
const scienceMark =  student.marks.science;
console.log(scienceMark);

console.log(`Updating an Nested object property`);
student.marks.english = 97;

console.log(`Adding an Nested object property`);
student.marks.programming = 100;

 // calling function add

 console.log(`${student.marks.add()}`);

console.log(`Deleting an Nested object property`);
delete student.marks.english;

 




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

