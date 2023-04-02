function Student(name ,rollNo,age){
    this.name = name;
    this.rollNo = rollNo;
    this.age =age;
}

//let objectName = new FunctionConstructorName(parameters)
let s1 = new Student("Vinny",111,23);
let s2 = new Student("Jenny",22,35);
console.log(s1);
console.log(s2);


// to acess single property
// objectName.PropertyName
console.log(s1.name); // vinny

//instanceOf operator 

let isInstance = s1 instanceof Student;
console.log(isInstance); //true


function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 
 let vinny = new Student("Vinny", 111, 23);
 let jenny = new Student("Jenny", 44, 45);
 let minny = new Student("Minny", 55, 23);
 let tommy = new Student("Tommy", 66, 35);

  console.log(vinny);
 console.log(jenny);
 console.log(minny);
 console.log(tommy);

 // adding prototype
 Student.prototype.country = "India";
 console.log(vinny.country);
 console.log(minny.country);
 console.log(jenny.country);
 console.log(tommy.country);


 // acessing in build methods/functions

 let date = new Date("1989-02-10");
 let month = date.getMonth();
 let year =date.getFullYear();
 let day = date.getDay();
 console.log(month, year,day);

 // mathematical 

 console.log(Math.sqrt(25));

 console.log(Math.PI);