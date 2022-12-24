console.log(`factorial of number`);

function factorialNumber(num) {
    // console.log(`Given number is : ${num}`);

    var fact = 1;
    for (var index = num; index >= 1; index--) {
        //     5
        fact = fact * (index); // 5 * 4
    }
    console.log(`Factorial of Number ${num} is : ${fact}`);
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);