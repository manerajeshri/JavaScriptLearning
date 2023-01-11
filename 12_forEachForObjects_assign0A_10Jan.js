console.log(`Assignment 0A: Use only forEach()`);

// For the given employee objects

class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) { 
        this.emp_id = emp_id;    
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary= emp_salary;
        this.emp_company= emp_company;
    }
}
    const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS"); 
    const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro"); 
    const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS"); 
    const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy"); 
    const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro"); 
    const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS"); 
    const enp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

arrayOfEmp = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,enp_mahi];// creating array of object


// 1. Find out the 'TCS' employee details and log only name & company on console
console.log(`\n1. Find out the 'TCS' employee details and log only name & company on console`);

arrayOfEmp.forEach( (element ) => {
// console.log(element);
if (element.emp_company == "TCS") {
    console.log(`Employee Name: ${ element.emp_name}  and Company Name : ${element.emp_company }` );
}
} )

// 2. Find the employees with salary greater than or equal 50000 (Log the all employee details on console)
console.log(`\n2. Find the employees with salary greater than or equal 50000 (Log the all employee details on console)`);
arrayOfEmp.forEach( (element ) => {
if (element.emp_salary>=50000) {
    // console.log(element);
        console.log(`Employee ID: ${element.emp_id}, Name: ${ element.emp_name}, Department: ${element.emp_dept} salary: ${element.emp_salary}, Company Name : ${element.emp_company }` );
    }
})

// 3. Find the sum of all employees salary and log on console
console.log(`\n3. Find the sum of all employees salary and log on console `);
let sal= 0;
arrayOfEmp.forEach( ( element, index )=>{
// console.log(element.emp_salary);
if (index<= arrayOfEmp.length ) {
    sal = sal + element.emp_salary;
}
} )
console.log(`The sum of all employees salary : ${sal}`);


// 4. Find the average salary and log on console (Average = Total Salary / Number of employees)
console.log(`\n4. Find the average salary and log on console`);
console.log(`Total salary : ${sal}`);
console.log(`Total no of Employee : ${arrayOfEmp.length}`);
console.log(`Average salary : ${sal/arrayOfEmp.length }`);

// 5. Find the 'IT' OR 'HR' department employees whose salary is greater than or equal to 75000 
// and log complete employee details on console
console.log(`\n5. Find the 'IT' OR 'HR' department employees whose salary is greater than or equal to 75000 `);

arrayOfEmp.forEach(( element) => {
    // console.log(element.emp_dept,element.emp_salary);
if ((element.emp_dept== "IT" || element.emp_dept== "HR") && element.emp_salary>=75000) {
    console.log(`Employee ID: ${element.emp_id}, Name: ${ element.emp_name}, Department: ${element.emp_dept} salary: ${element.emp_salary}, Company Name : ${element.emp_company }` );  
    }

})