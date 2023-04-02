console.log(`\n1] Vehicle : `);
class Vehicle{
    constructor(type,company, model, color, insurance){
        this.type = type;
        this.company = company;
        this.model = model;
        this.color = color;
        this.insurance = insurance;
    }

}

let vehicle1 = new Vehicle ("4 Wheelar","Hundai","i10","red","Yes");
console.log(vehicle1);
let vehicle2 = new Vehicle ("4 Wheelar","Hundai","i12","white","Yes");
console.log(vehicle2);
let vehicle3 = new Vehicle ("2 Wheelar","Hero","Maestro","Gray","Yes");
console.log(vehicle3);
let vehicle4 = new Vehicle ("2 Wheelar","Honda","Activa","red","No");
console.log(vehicle4);
let vehicle5 = new Vehicle ("4 Wheelar","Hundai","Creta","white","Yes");
console.log(vehicle5);

console.log(`\n2] College : `);
class College {
    constructor(collegeName,city,university,totalDepartments,collegeGrade){
    this.collegeName= collegeName;
    this.city=city;
    this.university=university;
    this.totalDepartments=totalDepartments;
    this.collegeGrade=collegeGrade;
}
collegeDetails(){
    console.log(`College Details :: Name:${this.collegeName} City:${ this.city} University:${this.university} Departments:${this.totalDepartments} Grade:${this.collegeGrade}`);
}
// write method using for in loop to traverse objects
traverseObject(collegeNam) {
    for (const key in collegeNam) {
        if (Object.hasOwnProperty.call(collegeNam, key)) {
             const element = collegeNam[key];
            console.log(`${key} : ${element}`);
        }
    }
}

}
let college1 = new College ("RIT", "Islampur","Autonomous",7,"A++")
let college2 = new College ("KBP", "Satara","BATU",4,"B")
let college3 = new College ("YCIS", "Satara","Autonomous",1,"A++")
let college4 = new College ("JSPM", "Pune","Autonomous",5,"A")
college1.collegeDetails();
college2.collegeDetails();
college3.collegeDetails();
college4.collegeDetails();

console.log(`\n3] traverse objects using for in loop :`);
console.log(``);
college1.traverseObject(college1);
console.log(``);
college2.traverseObject(college2);
console.log(``);
college3.traverseObject(college3);
console.log(``);
college4.traverseObject(college4);