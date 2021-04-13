/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    if (!matrix) return [];
    let row = matrix.length;
    if (!row || row == 0) return [];
    let column = matrix[0].length;
    if (!column || column == 0) return [];
    const size = row * column;

    return getResByPriorityOrder(matrix, 0, row, 0, column, [], false, size);
};

// move right -> down -> left -> up. If going up, then keep going up until reach the unmovable index.
var getResByPriorityOrder = (matrix, indexOfRow, row, indexOfColumn, column, res, upFlag, size) => {

    if (indexOfRow >= row || indexOfRow < 0
        || indexOfColumn >= column || indexOfColumn < 0
        || matrix[indexOfRow][indexOfColumn] == null || res.length == size
    ) {
        return;
    }

    res.push(matrix[indexOfRow][indexOfColumn]);
    matrix[indexOfRow][indexOfColumn] = null;
    if (!upFlag) {
        // 1st priority: move right
        getResByPriorityOrder(matrix, indexOfRow, row, indexOfColumn + 1, column, res, upFlag, size);
        // 2nd priority: move down
        getResByPriorityOrder(matrix, indexOfRow + 1, row, indexOfColumn, column, res, upFlag, size);
        // 3rd priority: move left
        getResByPriorityOrder(matrix, indexOfRow, row, indexOfColumn - 1, column, res, upFlag, size);
    }
    if (res.length < size) {
        upFlag = true;
        if (matrix[indexOfRow - 1][indexOfColumn] == null) {
            upFlag = false;
            matrix[indexOfRow][indexOfColumn] = res.pop();
            getResByPriorityOrder(matrix, indexOfRow, row, indexOfColumn, column, res, upFlag, size);
        } else {
            // 4th: move up
            getResByPriorityOrder(matrix, indexOfRow - 1, row, indexOfColumn, column, res, upFlag, size);
        }
    }
    return res;

}