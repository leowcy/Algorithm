/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length;
    if (n == 0 || n == 1) return matrix;
    const tempMatrix = matrix.slice().map(i => i.slice())

    for (let row = 0; row < n; row++) {
        const newColumn = n - 1 - row;
        for (let column = 0; column < n; column++) {
            const newRow = column;
            // swap the value
            tempMatrix[newRow][newColumn] = matrix[row][column];
        }
    }

    return tempMatrix;
};

/**
 * Js solution The Idea
Transpose the matrix
Reverse each row
 */

var rotate = function(matrix) {
    for (let i=0;i<matrix.length;i++) {
        for (let j=i;j<matrix[0].length;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let row of matrix) {
        row.reverse();
    }
};