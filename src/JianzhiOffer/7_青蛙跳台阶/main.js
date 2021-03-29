/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n <= 1) return n;
    let sum = 0, s0 = 1, s1 = 1;

    for (let i = 0; i <= n; i++) {
        sum = (s0 + s1) % (1e9 + 7);
        s0 = s1;
        s1 = sum
    }

    return sum;
};