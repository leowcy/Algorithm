/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m <= 0 || n <= 0) return null;

    if (m == 0 && n == 0) return 1;

    let memo = new Array(m + 1).fill(-1).map(() => new Array(n + 1).fill(-1));

    return checkPaths(m, n, 0, 0, memo);
};

var checkPaths = function (m, n, i, j, memo) {
    if (i == m - 1 && j == n - 1) return 1;
    if (i > m - 1 || j > n - 1) return 0;

    if (memo[i][j] === -1) {
        var moveRight = checkPaths(m, n, i, j + 1, memo);
        var moveBottom = checkPaths(m, n, i + 1, j, memo);

        memo[i][j] = moveRight + moveBottom;
    }

    return memo[i][j];
}

// DP solution

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m <= 0 || n <= 0) return null;

    if (m == 0 && n == 0) return 1;

    let memo = new Array(m + 1).fill(-1).map(() => new Array(n + 1).fill(-1));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                memo[i][j] = 1;
            } else if (i == 0) {
                memo[i][j] = memo[i][j - 1];
            } else if (j == 0) {
                memo[i][j] = memo[i - 1][j];
            } else {
                memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
            }
        }
    }

    return memo[m - 1][n - 1];
}