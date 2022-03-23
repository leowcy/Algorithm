/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let row = grid.length,
        column = grid[0].length;

    let res = new Array(row + 1).fill(-1).map(() => new Array(column + 1).fill(-1));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i == 0 && j == 0) {
                res[i][j] = grid[0][0];
            } else if (i == 0) {
                res[i][j] = res[i][j - 1] + grid[i][j];
            } else if (j == 0) {
                res[i][j] = res[i - 1][j] + grid[i][j];
            } else {
                res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j];
            }
        }
    }

    return res[row - 1][column - 1];
};