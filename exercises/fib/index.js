// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Iterative Solution

/*function fib(n) {
    const fibArray=[0,1]
    
    for(let i=2;i<=n;i++){
        const a =fibArray[i-1];
        const b=fibArray[i-2];
        fibArray.push(a+b);
    }
    return fibArray[n];

}*/

//Recursive solution(O(2^n) time)

/*function fib(n){

    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2)
}*/

//Memoization Solution
function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        } else {
            let result = fn.apply(this, args);
            cache[args] = result;
            return result;
        }

    }
}

function fib(n) {

    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib);

module.exports = fib;