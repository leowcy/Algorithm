/**
 * Search in 2D array - Given a 2d array which shares the same length of the 1d array of it.
 * each row and column are in ascending order. Please write a Find function to determine if the target number is inside the array.
 * 
 * Example 1:
 *  Input: 7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
 *  Return: true
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// solution 1: divide and conquer with a great starting position
var searchMatrix = function (matrix, target) {
    // write code here
    if (matrix.length == 0) return false;

    const lengthOfRow = matrix.length,
        lengthOfColumn = matrix[0].length;

    var find = function (row, column) {
        if (row >= lengthOfRow || column < 0) return false;
        if (matrix[row][column] == target) return true;
        // do some Pruning - adding for bigger value -> stop the recursive call which is not enough
        if (matrix[row][column] > target) return find(row, column - 1);
        else return find(row + 1, column);
    }

    return find(0, lengthOfColumn - 1);
};

// solution 2: binary search
var searchMatrix1 = function (matrix, target) {
    // write code here
    let lengthOfRow = matrix.length,
        lengthOfColumn = matrix[0].length;

    if (lengthOfRow == 0 || lengthOfColumn == 0 || target < matrix[0][0] || target > matrix[lengthOfRow - 1][lengthOfColumn - 1]) return false;

    return binarySearch(0, lengthOfRow - 1, 0, lengthOfColumn - 1, matrix, target);
};

var binarySearch = (startRow, row, startColumn, column, matrix, target) => {
    if (startRow > row || startColumn > column) return false;

    const midOfRow = Math.floor((row - startRow) / 2) + startRow,
        midOfColumn = Math.floor((column - startColumn) / 2) + startColumn,
        currentValue = matrix[midOfRow][midOfColumn];

    // found
    if (currentValue == target) return true;
    // bigger than target value
    else if (currentValue > target) {
        return binarySearch(startRow, midOfRow - 1, midOfColumn, column, matrix, target) ||
            binarySearch(startRow, row, startColumn, midOfColumn - 1, matrix, target);
    } else {
        // smaller than target value
        return binarySearch(midOfRow + 1, row, startColumn, column, matrix, target) ||
            binarySearch(startRow, midOfRow, midOfColumn + 1, column, matrix, target);
    }
}

searchMatrix1([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],
    15);