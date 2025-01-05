/**
 * 69. Sqrt(x)
 * Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 */

/**
* @param {number} x
* @return {number}
*/
var mySqrt = function (x) {
    return Math.floor(Math.sqrt(x))
};

console.log(mySqrt(0))