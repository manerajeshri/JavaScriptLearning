
console.log(`1] Voting Eligibility :`);
var voteEligibility = function (age) {
    if (age <= 0 || 120 < age) {
        console.log(`Age : ${age} \nResult : Invalid Data`);
    }
    
    if (age>=18 && age <= 120) {
        console.log(`Age : ${age} \nResult : You are Eligible for vote.`);
    }
    
    if (0<age && age<18) {
        console.log(`Age : ${age} \nResult : You are Minor. Not Eligible for voting.`);
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);

// ============================================== 2nd=================

console.log(`\n2] Grade System :\n`);

function gradeCalculation(marks) {
    if (90<= marks && marks<=100) {
        console.log(`Fantastic Marks : ${marks}. Your grade is "A+"\n`);
    }
    if (75<= marks && marks<90) {
        console.log(`Excellent Marks : ${marks}. Your grade is "A"\n`);
    }
    if (50<= marks && marks<75) {
        console.log(`Good Marks : ${marks}. Your grade is "B"\n`);
    }
    if (35<= marks && marks<50) {
        console.log(`Marks : ${marks}. Your grade is "C", Need improvement.\n`);
    }
    if (0< marks && marks<35) {
        console.log(`Marks : ${marks}. Result : Fail\n`);
    }
    if (0>= marks || marks>100) {
        console.log(`Marks : ${marks} Please provide valid marks.\n`);
    }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);