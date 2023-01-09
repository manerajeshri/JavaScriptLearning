// Arrow function assign

/* Write a arrow function such that-Pls don't forget to log result on console with meaningful msg */

//1. With no args and no return value, log message on console inside arrow function a. "Good Morning. Today is Sunday"
console.log(`\n1] With no args and no return value, log message on console inside arrow function`);
let show = ()=>{
console.log(`"Good Morning. Today is Monday"`);
}
show();
//2. With 3 args and no return value, for received 3 parameters perform the multiplication 
//a. Values to be passed ➡+ 5,5,2 -
//b. Invoke the same function for values 10, 4 [Note: assign default value to 3rd arg]

console.log(`\n2] With 3 args and no return value, for received 3 parameters perform the multiplication `);

let mul = (val1,val2,val3=1) => {
console.log(`Multiplication of ${val1},${val2},${val3} : ${val1*val2*val3}`);
}
console.log(`a. Values to be passed : 5,5,2`);
mul(5,5,2);
console.log(`b. Values to be passed : 10,4 `);
mul(10,4)


//3. With 5 args and return value such as, for received params it should do the addition 
// a. Values to be passed 100, 100, 200, 349, 756
// b. Log the returned result on console with meaningful message for both step 3.a and 3.c
// c. Invoke the same arrow function for values: "I am", "Leaming"." ES6", "features", "in depth"

console.log(`\n3] With 5 args and return value such as, for received params it should do the addition `);
let add = (v1,v2,v3,v4,v5)=>{
return v1+v2+v3+v4+v5;
}

console.log(`a. Addition of 100, 100, 200, 349, 756 : ${add(100, 100, 200, 349, 756)}`)
console.log(`c.  Addition of "I am", "Leaming"," ES6", "features", "in depth": ${add("I am", " Leaming"," ES6", " features", " in depth")}`);