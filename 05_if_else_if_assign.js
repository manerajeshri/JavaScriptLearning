console.log(`\nMarriage eligibility checker system`);
// condition male>=21 Female>=18
function marriageEligibility(gender,age) {
    if (gender=="Male" && age>=21) {
        console.log(`\nGender : ${gender}, Age : ${age} :: Congratulation! You are eligible for Marriage.`);
    } else if(gender=="Female" && age>=18){
    console.log(`\nGender : ${gender}, Age : ${age} :: Congratulation! You are eligible for Marriage.`);
    } else {
        console.log(`\nGender : ${gender}, Age : ${age} :: You are Not eligible for Marriage.`);
    }
}
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("Female",28);
marriageEligibility("Female",16);
marriageEligibility("Other",35);
marriageEligibility("Other",41);
