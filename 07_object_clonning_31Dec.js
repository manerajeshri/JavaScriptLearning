let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(`myName`,myName); // myName Sunil
console.log(`yourName`,yourName); // yourName Sunil

yourName = "Jenifer";
console.log(myName); // Sunil
console.log(yourName); // Jenifer

let anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
let sunil = {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anil = sunil; // Shallow cloning
sunil.country = "India";

console.log(anil); // {age: 26, name: 'Sunil', company: 'Google', country: 'India'}
console.log(sunil);// {age: 26, name: 'Sunil', company: 'Google', country: 'India'}
// update in one will reflects in second