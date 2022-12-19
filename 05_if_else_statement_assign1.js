
console.log(`\n1] Voting Eligibility using if else`);
var votingEligibility = function (age) {
if (typeof age==="number") {
    // console.log('Valid');
     if (age<=0 || age>120) {
        console.log(`Entered Age : ${age}. \nResult : Invalid Data.`);
    } else {
        if (age>0 && age<18) {
            console.log(`Entered Age : ${age}.\nResult : Minor! Not Eligible for voting.`);
        } else {
            console.log(`Entered Age : ${age}.\nResult : Congratulation! You are Eligible for voting.`);
        }
    }
} else {
    console.log(`Entered Age ${age}(${typeof age})Invalid Value Entered!`);
}   
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);votingEligibility("25");votingEligibility("ten");
// ================================================================================================
console.log(`\n2] Grade System using if else\n`);

function gradeCalculation(marks) {
    if (typeof marks ==="number") {
        if (0>= marks || marks>100) {
            console.log(`Marks : ${marks} Please provide valid marks.\n`);
        } else {
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
      
    } else {
        console.log(`Entered marks ${marks}(${typeof marks}) Please proviod Valid marks!\n`);
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
gradeCalculation("91");
gradeCalculation("Eighty");