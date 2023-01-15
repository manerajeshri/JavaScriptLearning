class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha =new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi =new Employee(55,"Rishi","Finance",45000,"TCS");
const emp_sonali =new Employee(66,"Sonali","Finance",47000,"Infy");
const emp_monika =new Employee(77,"monika","IT",40000,"Wipro");
const emp_viny =new Employee(88,"vinayak","IT",75000,"TCS");
const emp_mahi =new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayOFEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`                   1] Find only TCS employee & print their Name & company`);
arrayOFEmployee.forEach(arrayOFEmployee =>
     {
    if(arrayOFEmployee.emp_company=="TCS")
    {
        console.log(`Employee Name= ${arrayOFEmployee.emp_name}   Company Name= ${arrayOFEmployee.emp_company}`);
    }
});
console.log(`===============================================================================`);

console.log(`                2] Find employee's with salary greater than or equal to 50,000`);
arrayOFEmployee.forEach(arrayOFEmployee => 
    {
        if (arrayOFEmployee.emp_salary>=50000)
         {
            console.log(`Employee ID =${arrayOFEmployee.emp_id}   Name =${arrayOFEmployee.emp_name}   Department = ${arrayOFEmployee.emp_dept}   Salary = ${arrayOFEmployee.emp_salary}   Company = ${arrayOFEmployee.emp_company}`);
        }
    });


console.log(`===============================================================================`);

console.log(`                3] Find sum of all employee's salary `);
     var sum=0;
arrayOFEmployee.forEach(arrayOFEmployee => 
    {
      sum += arrayOFEmployee.emp_salary;
      
 });
 console.log(`Sum of All Employee Salaries = ${sum}`);


 console.log(`===============================================================================`);

console.log(`                4] Find Average salary `);

var totemp=arrayOFEmployee.length;
console.log(`Total Number of Employees = ${totemp}`);
var sum=0;
sum += arrayOFEmployee.emp_salary;
console.log(sum);

// arrayOFEmployee.forEach(arrayOFEmployee => 
//     {
//         var avgsal = sum / totemp;
//     }); console.log(avgsal);


    console.log(`===============================================================================`);
    
    console.log(`                4] Find IT / HR department employees whose salary >=75000  `);

    arrayOFEmployee.forEach(arrayOFEmployee => 
        {
            if(arrayOFEmployee.emp_dept== "HR" || "IT"  &&  arrayOFEmployee.emp_salary >= 75000)
            {
                console.log(arrayOFEmployee);
            }
        });