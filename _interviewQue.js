Arr =[ 1,2,3,4,5,6,7,8,9]
// 1) find even number 
const evennumber = Arr.filter(element => {
    return element%2==0
});
console.log(`evennumber`, evennumber);
// 2) find odd number
let oddnumber = []
Arr.forEach(element => {
    if (element%2 != 0) {
        oddnumber.push(element)
    }
});
console.log(`oddnumber`, oddnumber);
// 3) sum of all number 
let sum =0
const totalsum = Arr.reduce((element)=>{
    return sum = sum + element
})
console.log(`totalsum`, totalsum);
// 4) seprate 5,6 only

const arr56 = Arr.filter((element)=>{
    return element===5 || element === 6
})
console.log(`arr56`, arr56);