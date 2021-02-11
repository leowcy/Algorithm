/**
 * 70.Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Constraints:
 * 1 <= n <= 45
 */

/**
* @param {number} n
* @return {number}
*/
// var climbStairs = function (n) {
//     //recursive
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     if (n>2) {
//         return climbStairs(n-1) + climbStairs(n-2);
//     }
// };

var climbStairs = function (n) {
    const a = [1,1];
    for(let i = 2; i <= n; i++) {
        a[i] = a[i-1] + a[i-2];
    }
    return a.pop();
}