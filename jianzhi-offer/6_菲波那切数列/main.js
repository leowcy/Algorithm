/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let mod = 1e9 + 7, f0 = 0, f1 = 1;
    if (n == 0) return f0;
    if (n == 1) return f1;
    for (let i = 2; i <= n; i++) {
        let sum = (f0 + f1) % mod;
        f0 = f1;
        f1 = sum;
    }
    return sum;
};