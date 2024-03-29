
// Shallow and Deep cloning

let empSumit = {

    empName : "Sumit",
    empSalary : "70K"
}

console.log(`1. shallow clonning example`);
// let empMohit = empSumit;
// empMohit.empName = "Mohit";// chnges made to mohit will affect sumit
// console.log(`empMohit`,empMohit); //o/p --> {empName: 'Mohit', empSalary: '70K'}
// console.log(`empSumit`,empSumit); //        {empName: 'Mohit', empSalary: '70K'}

//...Spread operator use
// console.log(`empSumit`,empSumit); // empSumit {empName: 'Sumit', empSalary: '70K'}
// console.log(`...Spread operator`,{...empSumit}); // ...Spread operator {empName: 'Sumit', empSalary: '70K'}

console.log(`\n 2 Partial Deep clonning Using ...Spread operator`);
let empMohit = {...empSumit}; //Using ...Spread operator
empMohit.empSalary = "75k";// chnges made to mohit will affect onlymohit not sumit
empMohit.name = "Mohit"; // adding new prop
empMohit.empName = "Mohit" // updating existing prop
console.log(`empMohit`,empMohit);
console.log(`empSumit`,empSumit);

// 2. Deep clone using JSON.stringfy
console.log(" \n 3 Deep clone using JSON.stringfy ======");
const empStew = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70, 
        math: 90,
        english: 87
    }
}
let empBill = JSON.parse(JSON.stringify(empStew));
empBill.marks.science = 90;
empBill.name = "Bill Gates";
console.log(empStew);
console.log(empBill);
console.log(empStew.marks.science);
console.log(empBill.marks.science);



/* Sir
// Spread Operator 
let empSumit = {
    empName : "Sumit",
    empSalary : "70K"
}
// ... Spread Operator
// console.log(empSumit);
// console.log({... empSumit});
let empMohit = {...empSumit}; // Deep Cloning using spread operator (... ) 
empMohit.empName = "Mohit";
console.log(empMohit);
console.log(empSumit);
*/