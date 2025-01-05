/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // DO solution

    let res = new Array(amount + 1).fill(Infinity);

    res[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const each of coins) {
            if (i >= each) {
                res[i] = Math.min(res[i], res[i - each] + 1);
            }
        }
    }

    return res[amount] == Infinity ? -1 : res[amount];
};