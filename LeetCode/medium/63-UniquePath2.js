/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let row = obstacleGrid.length,
        column = obstacleGrid[0].length;

    let res = new Array(row + 1).fill(-1).map(() => new Array(column + 1).fill(-1));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (obstacleGrid[i][j] == 1) {
                res[i][j] = 0;
            } else {
                if (i == 0 && j == 0) {
                    res[i][j] = 1;
                } else if (i == 0) {
                    res[i][j] = res[i][j - 1];
                } else if (j == 0) {
                    res[i][j] = res[i - 1][j];
                } else {
                    res[i][j] = res[i][j - 1] + res[i - 1][j];
                }
            }
        }
    }

    return res[row - 1][column - 1];
};
