
console.log(`Given array arrayNums : [20, 3, 4, 56, 90, 400, 49]`);
const arrayNums=[20, 3, 4, 56, 90, 400, 49];

console.log(`\n1] Shallow clone on arrayNjums, and push() 55,66`);
let shallowClone = arrayNums;
console.log(`shallow cloned Array : `,shallowClone );
shallowClone.push(55 ,66);
console.log(`After push() updated cloned array : `,shallowClone);
console.log(`arrayNjums : `,arrayNums);

console.log(`\n2] Deep clone using spread operator Update original array`);

let deepClone = [...arrayNums]
console.log(`deep cloned Array : ${deepClone}`); //(9) [20, 3, 4, 56, 90, 400, 49, 55, 66]
// console.log(`deep cloned Array with index : `,{...arrayNums}); // shows with index : value
//deep cloned Array :  {0: 20, 1: 3, 2: 4, 3: 56, 4: 90, 5: 400, 6: 49, 7: 55, 8: 66}

arrayNums.push(10,25);
console.log(`Original array with 10, 25 at last position : ${arrayNums}` );

console.log(`\n3] given arrayEven merge/concat with arrayNums : `);
arrayEven = [2,30,14,8];
console.log(`Before mearge :: arrayEven : ${arrayEven}  arrayNums : ${arrayNums}`  );
let merge = [...arrayEven,...arrayNums]
console.log(`After merge : ${merge}`);

console.log(`\n4] Creating employee_info object`);
const employee_info ={
    emp_id :27,
    emp_name : "John Doe",
    salary: {
        july_month:"40,000INR",
        aug_month:"50,000INR",
        jun_month:"65,000INR"
    },
    address:{
        locality:{
            colony: "OM Vrindavan Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles : ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(employee_info);

console.log(`\n5] Employee details :`);
console.log(` Employee Id : ${employee_info.emp_id}.\n Employee Name : ${employee_info.emp_name}`);
console.log(`a. Address:`);
for (const key in employee_info.address.locality) {
    if (Object.hasOwnProperty.call(employee_info.address.locality, key)) {
        const element = employee_info.address.locality[key];
        console.log(key,element);
    }
}
for (const key in employee_info.address) {
    if (Object.hasOwnProperty.call(employee_info.address, key)) {
        const element = employee_info.address[key];
        console.log(key,element); 
    }
}

console.log(`b. Mobile Numbers:`);
for (const key in employee_info.mobiles) {
    if (Object.hasOwnProperty.call(employee_info.mobiles, key)) {
        const element = employee_info.mobiles[key];
        console.log(element);
        
    }
}

console.log(`\n6] Deep copy using JSON.stringify()`);

let deepCopyEmployee_info = JSON.parse(JSON.stringify(employee_info));
// let deepCopyEmployee_info = JSON.stringify(employee_info);
console.log(deepCopyEmployee_info);

console.log(`6.a.`);
console.log("Before : ",deepCopyEmployee_info.salary.july_month);
deepCopyEmployee_info.salary.july_month="80,000INR";
console.log("After  : ",deepCopyEmployee_info.salary.july_month);
console.log(`6.b.`);
console.log("Before : ", employee_info.address.country);
employee_info.address.country = "United Kingdom";
console.log("After  : ",employee_info.address.country);
console.log(`6.c.`);
console.log(deepCopyEmployee_info.salary);
console.log("After  : ",employee_info.address);