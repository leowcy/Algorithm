/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    if (!matrix) return null;

    let r = matrix.length,
        c = matrix[0].length,
        res = 0,
        memo = new Map();

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            res = Math.max(res, dfs(matrix, i, r, j, c, memo, -Infinity));
        }
    }

    return res;
};

const d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];

var dfs = function (m, i, r, j, c, memo, pre) {
    if (i < 0 || i >= r || j < 0 || j >= c || m[i][j] <= pre) return 0;

    let key = i.toString() + "-" + j.toString();

    const cur = memo.get(key);

    if (!cur) {
        let res = 0;

        for (const [x, y] of d) {
            pre = m[i][j];
            const temp = 1 + dfs(m, i + x, r, j + y, c, memo, pre);
            res = Math.max(res, temp);
        }

        memo.set(key, res);
        return res;
    }

    return cur;
}