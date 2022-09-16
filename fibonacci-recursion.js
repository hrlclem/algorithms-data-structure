function fibonacciRecursion(n) {
    if(n < 2) {
        return n;
    }
    else {
        return fibonacciRecursion(n-1) + fibonacciRecursion(n-2);
    }
}


function fibonacci(a){
    for(let i = 0; i < a; i++) {
        console.log(fibonacciRecursion(i));
    }
}

fibonacci(10);