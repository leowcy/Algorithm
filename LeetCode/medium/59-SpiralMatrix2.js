/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n < 0) return [];
    if (n == 1) return [[1]];

    const total = n * n;

    let num = 1,
        res = new Array(n).fill(0).map(() => new Array(n).fill(0)),
        rStart = 0,
        cStart = 0,
        rEnd = n - 1,
        cEnd = n - 1;

    while (num <= total) {
        // left - right
        for (let i = cStart; i <= cEnd; i++) {
            if (res[rStart][i] == 0) {
                res[rStart][i] = num;
                num++;
            }
        }
        rStart++;

        // right top - right bottom
        for (let j = rStart; j <= rEnd; j++) {
            if (res[j][cEnd] == 0) {
                res[j][cEnd] = num;
                num++;
            }
        }
        cEnd--;

        // right - left
        for (let m = cEnd; m >= cStart; m--) {
            if (res[rEnd][m] == 0) {
                res[rEnd][m] = num;
                num++;
            }
        }
        rEnd--;

        // left bottom - left top
        for (let n = rEnd; n >= rStart; n--) {
            if (res[n][cStart] == 0) {
                res[n][cStart] = num;
                num++;
            }
        }
        cStart++;
    }

    return res;
};