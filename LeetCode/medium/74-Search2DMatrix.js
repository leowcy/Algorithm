/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// ** Diagonal search from top right - O(m + n)**
var searchMatrix = function (matrix, target) {
    // start from top right corner - if smaller move left - if larger move down
    let i = 0,
        j = matrix[0].length - 1;

    while (i < matrix.length && j >= 0) {
        if (matrix[i][j] == target) return true;
        if (matrix[i][j] < target) {
            i++;
        } else {
            j--;
        }
    }

    return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// O(n) = log(m*n)
var searchMatrix = function (matrix, target) {

    // binary search and treat the 2d matrix as an ascending sorted array
    let start = 0,
        end = (matrix.length * matrix[0].length) - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let midNumber = matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];

        if (midNumber == target) return true;
        else if (midNumber > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return false;
};