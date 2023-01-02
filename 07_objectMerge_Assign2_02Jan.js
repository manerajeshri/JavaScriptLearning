//Given a object car and carEngine merge or concat these two objects using
// 1. Object.assign()
// 2. Spread operator...

const car = {
carName: "Creta SX",
company: "Hundai",
launchYear: 2017
}

const carEngine = {
    enginePower: "1499CC",
    maxPower: "113 BHP"
}
console.log(`\ncar:`, car);
console.log("\ncarEngine:", carEngine);

console.log(`\n1] merge or concat using : Object.assign()`);
const merge_ObjectAssign = Object.assign({},car,carEngine)
console.log(merge_ObjectAssign);

console.log(`\n2] merge or concat using : Spread operator...`);
const merge_SpreadOperator = {...car,...carEngine}
console.log(merge_SpreadOperator);