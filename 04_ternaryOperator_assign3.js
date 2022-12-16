
console.log(`TCS interview Eligibility :`);
var eligibility = function (gradScore,hscScore,sscScore,candidateName) {
    var result = (gradScore>=70 || hscScore>=80 || sscScore>=90)? `congratulations!! ${candidateName} you are eligible for TCS interview` : `Unfortunately you are Not eligible for interview`
    console.log(`${result}`);
 }

console.log(`1]`);
eligibility(80,86,90,"Raj");
// console.log(`1] ${eligibility(80,86,90,"Raj")}`); //op undefined 
console.log(`2]`);
eligibility(70,65,55,"Ram");
console.log(`3]`);
eligibility(60,79,88,"Shaym");

console.log(`\n================================= using return============`);

console.log(`\nTCS interview Eligibility :`);
var eligibility = function (gradScore,hscScore,sscScore,candidateName) {
    var result = (gradScore>=70 || hscScore>=80 || sscScore>=90)? `congratulations!! ${candidateName} you are eligible for TCS interview` : `Unfortunately you are Not eligible for interview`
    return result  // using return
}
 console.log(`1] ${eligibility(80,86,90,"Raj")}`); // using return
 console.log(`2] ${eligibility(70,65,55,"Ram")}`); // using return
 console.log(`3] ${eligibility(60,79,88,"Shaym")}`); // using return