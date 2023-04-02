const employeeAnil = {
    name: "Anil",
    id:11,
    age:26,
    city:"pune"
}
const employeeSunil = {
    name: "Sunil",
    id:22,
    age:26,
    city:"pune"
}
const employeeSmith = {
    name: "Smith",
    id:33,
    age:26,
    city:"pune"
}
const employeePoonam = {
    name: "Poonam",
    id:44,
    age:26,
    city:"pune"
}
// ================================ creating class
class Employee{
    
       constructor(name,id,age,city){
        this.name = name;//this is used to point current object
        this.id = id;
        this.age = age;
        this.city = city;
       }
        details(){ // method
            console.log(this.name, this.id, this.age, this.city)

        }
            
    }
    

//new-used to create new object     className
let empRaj = new Employee ("Raj",55,32,"satara");
let empJay = new Employee ("Jay",66,34,"Delhi");
let empAaru = new Employee ("Aaru",77,2,"pune");
console.log(empRaj); 
console.log(`type of empRaj`, typeof empRaj);
console.log(`instance of == >` , empRaj instanceof Employee);
// console.log(empJay);
// console.log(empAaru);
// calling method from Raj object
empRaj.details();
empJay.details();
empAaru.details();