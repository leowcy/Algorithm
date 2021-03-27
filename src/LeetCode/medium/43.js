/**
 * 43. Multiply Strings
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function (num1, num2) {
    if (num1 == '0' || num2 == '0') return '0';

    let len1 = num1.length, len2 = num2.length, res = Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let sum = res[i + j + 1] + Number(num1[i]) * Number(num2[j]);
            res[i + j + 1] = sum % 10;
            res[i + j] += Math.floor(sum / 10);
        }
    }

    if (res[0] === 0) res.shift();
    return res.join('');
};