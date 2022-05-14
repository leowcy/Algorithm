/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    let temp = new Array(n + 1).fill(Infinity);
    temp[k] = 0;

    for (let i = 0; i < n; i++) {
        for (const [u, v, w] of times) {
            if (temp[u] == Infinity) continue;
            if (temp[v] > temp[u] + w) {
                temp[v] = temp[u] + w;
            }
        }
    }

    let res = -1;

    for (let i = 1; i <= n; i++) {
        res = Math.max(res, temp[i]);
    }

    return res == Infinity ? -1 : res;
};