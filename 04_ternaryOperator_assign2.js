console.log(``);

function maleMarriageEligibility(gender,age,boyName) {
    console.log(`Personal Details : Name : ${boyName}, Gender : ${gender}, Age : ${age}`);

    var result = ((gender==="Male") && (age>=21)) ? console.log(`Hey ${boyName} you are Eligible for Marriage`) : console.log("Not Eligible for Marriage. ");
    return result;
} 
console.log(`1]`);
maleMarriageEligibility("Male",25,"Billgates");
// console.log(`Eligibility Result : Hey ${maleMarriageEligibility("Male",25,"Billgates") } you are Eligible for Marriage.`);

console.log(``);
console.log(`2]`);
maleMarriageEligibility("Male",17,"Stew Jobs"); 
// console.log(`Eligibility Result : Hey, ${maleMarriageEligibility("Male",17,"Stew Jobs") } `);
// =========================================================================
console.log(``);

function femaleMarriageEligibility(gender,age,girlName) {
    console.log(`Personal Details : Name : ${girlName}, Gender : ${gender}, Age : ${age}`);

    var result = ((gender==="Female") && (age>=18)) ? console.log(`Hey ${girlName} you are Eligible for Marriage`) : console.log("Not Eligible for Marriage. ");
    return result;
} 
console.log(`1]`);
femaleMarriageEligibility("Female",16,"Jenifer");
// console.log(`Eligibility Result : Hey ${maleMarriageEligibility("Male",25,"Billgates") } you are Eligible for Marriage.`);

console.log(``);
console.log(`2]`);
femaleMarriageEligibility("Female",27,"Malinda Gates");