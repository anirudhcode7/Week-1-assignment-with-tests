/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const startTime = new Date();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const endTime = new Date();
    return (endTime - startTime) / 1000;
}

// nearly 0 secs
console.log(calculateTime(100));
// 0.001 seconds
console.log(calculateTime(100000));
// 1.051 seconds
console.log(calculateTime(1000000000));
