/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n == 2) return 1;

    let max = 1;
    // the reason for loop from [2, n-1] is that when divide it into n sections, then result will always be 1. And n > 1 and m > 1 as requirement.
    for (let i = 2; i < n; i++) {
        max = Math.max(max, calculate(n, i));
    }
    return max;
};

var calculate = (lengthOfRope, numberOfSection) => {
    let result = 1;
    while (numberOfSection > 0) {
        let averageOfRope = Math.floor(lengthOfRope / numberOfSection);
        lengthOfRope -= averageOfRope;
        numberOfSection--;
        result *= averageOfRope;
    }
    return result;
}

// solution 2:
/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    const a = Math.floor(n / 3);
    const b = n % 3;

    if (b === 0) return Math.pow(3, a);
    if (b === 1) return Math.pow(3, a - 1) * 4;
    return Math.pow(3, a) * 2;
};