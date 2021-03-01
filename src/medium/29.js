/**
 * 29. Divide two integers
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
Return the quotient after dividing dividend by divisor.
The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
For this problem, assume that your function returns 2^31 − 1 when the division result overflows.
Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
 */

/**
* @param {number} dividend
* @param {number} divisor
* @return {number}
*/
var divide = function (dividend, divisor) {
    const isNegative = ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) ? true : false;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let res = 0;
    while (divisor <= dividend) {
        let value = divisor
        let multiple = 1
        while (value + value <= dividend) { 
            value += value
            multiple += multiple
        }
        dividend -= value;
        res += multiple;
    }

    const border = Math.pow(2, 31);
    if (res > border - 1) {
        return isNegative ? -border : border - 1;
    }
    return isNegative ? -res : res;
};