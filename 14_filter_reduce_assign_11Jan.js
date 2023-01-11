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
arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,enp_mahi];// creating array of object
// // console.log("Array of employee : ");

// arrayOfEmp.forEach( (element )=>{
// // console.log(element);
// } )

console.log(`\n1.All employee from Wipro`);
const resultWipro = arrayOfEmp.filter( (currentValue)=>{
return currentValue.emp_company == "Wipro"
} );
// console.log(resultArray);
resultWipro.forEach( (element )=>{
    console.log(element);
} )

console.log(`\n2.All employee from IT or HR department`);
const resultArrayItHr = arrayOfEmp.filter( (currentValue)=>{
    return currentValue.emp_dept == "IT" || currentValue.emp_dept == "HR"
    } );
    // console.log(resultArray);
    resultArrayItHr.forEach( (element )=>{
        console.log(element);
    } )

    console.log(`\n3.All employee having emp id greater than 50`);
    const resultArrayId = arrayOfEmp.filter( (currentValue)=>{
        return currentValue.emp_id>=50
        } );
        // console.log(resultArray);
        resultArrayId.forEach( (element )=>{
            console.log(element);
        } )
    
        console.log(`\n4.All employee name starts with letter 'A' or 'V' or 'M'`);

const resultName= arrayOfEmp.filter( (currentValue )=>{
return currentValue.emp_name.startsWith("A") || currentValue.emp_name.startsWith("V")||currentValue.emp_name.startsWith("M")
} )

resultName.forEach( (element )=>{
console.log(element.emp_name);
} )

console.log(`\n5.Average salary`);

const salary =[]
arrayOfEmp.filter( value => salary.push(value.emp_salary))
console.log(salary);
const averageSalary = salary.reduce( (runningTotal,value )=>  (runningTotal+value))
console.log( `Average Salary is = ${averageSalary/salary.length}`);

console.log(`\n6.Average salary for 'IT' department`);
 const salaryIt = []
    arrayOfEmp.filter((value )=>{
    if (value.emp_dept == 'IT') { 
     return salaryIt.push(value.emp_salary);
    }
 } )
 const averageSalryIt =  salaryIt.reduce ( ( runningTotal,value) => ((runningTotal+value)) );
 console.log(`Average salary for 'IT' department =`,averageSalryIt/salaryIt.length);
 