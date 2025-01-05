/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

    let row = matrix.length,
        column = matrix[0].length;

    let rowArr = [],
        columnArr = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (matrix[i][j] == 0) {
                if (!rowArr.includes(i)) {
                    rowArr.push(i);
                }
                if (!columnArr.includes(j)) {
                    columnArr.push(j);
                }
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (rowArr.includes(i) || columnArr.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};

// No extra space

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

    let row = matrix.length,
        column = matrix[0].length;

    let cFlag = false,
        rFlag = false;

    for (let i = 0; i < row; i++) {
        if (matrix[i][0] == 0) {
            rFlag = true;
            break;
        }
    }

    for (let i = 0; i < column; i++) {
        if (matrix[0][i] == 0) {
            cFlag = true;
            break;
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (rFlag) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0;
        }
    }

    if (cFlag) {
        for (let i = 0; i < column; i++) {
            matrix[0][i] = 0;
        }
    }
};