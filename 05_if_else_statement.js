console.log(`\n1] Road example`);
console.log(`boom boom`);
var isRoadBlocked =true;//to execute if block condition must be true
// var isRoadBlocked =false; ////to execute else block condition must be false
if (isRoadBlocked) {
    console.log(`Travel through express way`);
    console.log(`Travel through express way 2 hrs`);
} else {
    console.log(`Travel through tunnel`);
    console.log(`Travel through tunnel 5 hrs`);
}

console.log(`\n2] Voting Eligibility`);
var votingEligibility =function (age) {
    if (age<=0 || age>120) {
        console.log(`age is ${age} Invalid Age Entered`);
    } else {
        console.log(`age is ${age} Valid Age Entered`);
        if (age>=18) {
            console.log(`age is ${age} You are eligible for vote`);
        } else {
            console.log(`age is ${age} You are Not eligible for vote`);
        }
        }
}
votingEligibility(230);
votingEligibility(-20);
votingEligibility(56);
votingEligibility(16);

// ===========================Even odd no
console.log(`\n3] Even Odd Number`);
console.log(``);
function EvenOdd(num) {
if ((typeof num) ==("number")) {
    console.log(`Valid`);
    if (num%2 === 0) { // entered i/p is string it == implisit means autoconvert to number
        console.log(`No is : ${num} it is "Even"`);
    } else {
        console.log(`No is : ${num} it is "Odd"`);
    }
}
else {
    console.log(` No is : ${num} : Invalid`);
}
    
    }
    EvenOdd(20);
    EvenOdd(21);
    EvenOdd("14");// entered i/p is string it implisit means autoconvert to number
    EvenOdd("1");

    console.log(`\n4] Grading System`);

    function gradeCalculation(marks){
        if (marks<=0 || marks>100) {
            console.log(`Marks : ${marks}. Please provide valid marks\n`);
        } else {
            // console.log(`Marks : ${marks}. Valid marks`);
            if (90<= marks && marks<=100) {
                console.log(`Fantastic Marks : ${marks}. Your grade is "A+"\n`);
            } else {
                if (75<= marks && marks<90) {
                    console.log(`Excellent Marks : ${marks}. Your grade is "A"\n`);
                } else {
                    if (50<= marks && marks<75) {
                        console.log(`Good Marks : ${marks}. Your grade is "B"\n`);
                    } else {
                        if (35<= marks && marks<50) {
                            console.log(`Marks : ${marks}. Your grade is "C", Need improvement.\n`);
                        } else {
                            console.log(`Marks : ${marks}. Result : Fail\n`);
                        }
                    }
                }
                
            }
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