/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
    if (n == 1) return 1;

    if (n < 1) return -1;

    let ans = 1,
        mod = 1e9 + 7;

    for (let i = 2; i <= n; i++) {
        ans = ans * (2 * i - 1) * i % mod;
    }

    return ans;
};