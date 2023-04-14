

let globalVariable = 100;
function outer(){ 
    let outerVariable = 200;
    let inner = function(){
        let innerVariable = 300;
        console.log("Inner function");
        console.log(`globalVariable =`, globalVariable);
        console.log(`outerVariable`, outerVariable);
        console.log(`innerVariable`, innerVariable);
    }
    return inner;
}

// let returnValue = outer();
// returnValue();

outer()(); // We can invoke inner function with like this too

