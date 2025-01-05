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

// solution 3: (DP)
/**
 * @param {number} n - 2 <= n <= 1000
 * @return {number}
 */
 var cuttingRope = function (n) {
    const ropeLength = n;

    if (ropeLength <= 3) return ropeLength - 1;

    // product[2] = 2 -> reason is that for a subRope of length two, its maximum product value will be itself. So product[2] = 2 > 1*1. Same as product[3] = 3
    let product = [];
    product[1] = 1;
    product[2] = 2;
    product[3] = 3;

    // i here represents the length of the rope
    for (let i = 4; i <= ropeLength; i++) {
        let max = 0;
        /**
         * j here represents the length of the 'first' cut half of the rope
         * 巧妙在于只用考虑切一刀的情况，第一刀分成1/2/3/4... 然后计算乘积，然后对比第一刀分为几的结果会最大。
         * 原因是我们已经保存了每一步的最优解，因为只用考虑切一刀的情况，就能知道最优解的答案是多少，然后简单比对即可。
         */

        for (let j = 1; j <= Math.floor(i / 2); j++) {
            let tempProduct = product[j] * product[i - j];
            max = Math.max(max, tempProduct);
            product[i] = max;
        }
    }

    return product[n];
};