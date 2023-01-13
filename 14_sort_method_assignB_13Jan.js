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
    const enp_mahi = new Employee(99, "Mahesh", "HR",85000,"Infy");

    array_employees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,enp_mahi];// creating array of object
// console.log(arrayOfEmp);


// 1. Sort the 'array_employees' in ascending order of Employee Id's and log employee details → Id, Name, Department

console.log(`\n1. In ascending order of Employee Id's\n`);
array_employees.sort( (a,b )=> {
return a>b ? -1:1;

} )
// console.log(array_employees);

array_employees.forEach(element => {
    console.log(`ID:`,element.emp_id, `Name:`,element.emp_name, `Department:`,element.emp_dept);
});


console.log(`\n2. In ascending order of Employee Department\n`);
array_employees.sort( (emp1,emp2 )=> {
    return emp1.emp_dept > emp2.emp_dept  ? 1 : -1;
} )

array_employees.forEach(element => {
    console.log(`ID:`,element.emp_id, `Department:`,element.emp_dept, `Company:`,element.emp_company);
});

console.log(`\n3. In descending order of Employee Salary\n`);
array_employees.sort( (emp1,emp2 )=> {
    return emp1.emp_salary < emp2.emp_salary  ? 1 : -1;// either change 1 and -1 or < >
} )

array_employees.forEach(element => {
    console.log(`Name:`,element.emp_name, `Salary:`,element.emp_salary, `Company:`,element.emp_company);
});
