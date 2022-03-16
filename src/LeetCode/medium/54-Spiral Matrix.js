/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || matrix.length == 0) return [];

    let i = 0,
        j = 0,
        flag = 1,
        row = matrix.length,
        column = matrix[0].length,
        res = [],
        rowStart = 0,
        columnStart = 0;

    const totalNumber = row * column;

    while (res.length < totalNumber) {
        // if (matrix[i][j] != Infinity) {
        res.push(matrix[i][j]);
        matrix[i][j] = Infinity;
        // }
        if (flag == 1) {
            if (j < column - 1) {
                j++;
            } else if (j == column - 1) {
                rowStart++;
                i++;
                flag = 2;
            }
        } else if (flag == 2) {
            if (i < row - 1) {
                i++;
            } else if (i == row - 1) {
                column--;
                j--;
                flag = 3;
            }
        } else if (flag == 3) {
            if (j > columnStart) {
                j--;
            } else if (j == columnStart) {
                row--;
                i--;
                flag = 4;
            }
        } else {
            if (i > rowStart) {
                i--;
            } else if (i == rowStart) {
                columnStart++;
                j++;
                flag = 1;
            }
        }
    }

    return res;
};
spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);