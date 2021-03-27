/**
 * 50. Pow(x,n)
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 */

/**
 * Algorithm:
 * 0. if the n == 0 -> return 1
 * 1. take the math.abs(n)
 * 2. Instead of for loop, recursively call the function myPow. Take the value of x and get the remainder of %2.
 * if x % 2 == 0 -> Even number -> continue the recursive call
 * if x % 2 != 0 -> Odd number -> continue take the value of (x-1)%2 and time the x one more time for the result
 * 3. At the end check if the n is positive integration or not. If yes -> return result 
 * if No -> return 1/result
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n == 0) return 1;

    const absoluteOfN = Math.abs(n);

    let result = x % 2 == 0 ? myPow(x*x, absoluteOfN/2) : myPow(x*x, (absoluteOfN-1)/2) * x;

    return n > 0 ? result : 1 / result;
};