/*
First Ten Prime Numbers

The first ten primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

Prime numbers are natural numbers that are divisible by only 1 and the number itself. 
In other words, prime numbers are positive integers greater than 1 with exactly two factors, 1 and the number itself. 
Some of the prime numbers include 2, 3, 5, 7, 11, 13, etc. Always remember that 1 is neither prime nor composite.
Also, we can say that except for 1, the remaining numbers are classified as prime and composite numbers. 
All prime numbers are odd numbers except 2, 2 is the smallest prime number and is the only even prime number.

Prime numbers are the natural numbers greater than 1 with exactly two factors, i.e. 1 and the number itself.
*/

console.log(`Find the given number is prime or not :`);

let primeNo = function (n) {
    if (n==2) {
        console.log(`${n} is Prime No`);
    } else if (n>2 && n%2!==0 && n%n==0  ){
        console.log(`${n} is Prime No`);
    } else {
        console.log(`${n} is Non Prime`);
    }
}

primeNo(1); primeNo(2);primeNo(3);primeNo(4);primeNo(5);primeNo(6);primeNo(7);primeNo(8);primeNo(9);primeNo(10);










// monika

// let number = 6;
//    let isPrime = true;

//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }

// shubhangi

// function primenum(n){
//     for (let index = 2; index < n; index++) {
//         if (n % index == 0) {
//             console.log(`Given number ${n} Not prime number`);
//             break;
//         }
//         else{
//             console.log(`Given number ${n} is prime number`);
//         }    
//     }
    
// }
// primenum(4);
// console.log(`**********`);
// primenum(2);
// console.log(`**********`);
// primenum(7);