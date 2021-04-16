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

// solution 2:
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) return [];

    const row = matrix.length, column = matrix[0].length;
    const size = row * column;

    // create a new array to keep records of the visited node - create 2D array
    const visited = new Array(row).fill(0).map(() => new Array(column).fill(false));
    // create a output array of length of size which is the total possible nodes in the array
    const output = new Array(size).fill(0);

    let directionIndex = 0, rowIndex = 0, columnIndex = 0;
    // predefine a directions array point to right->down->left->up
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];

    for(let i = 0; i < size; i++) {
        output[i] = matrix[rowIndex][columnIndex];
        visited[rowIndex][columnIndex] = true;
        const nextRow = rowIndex + directions[directionIndex][0], nextColumn = columnIndex + directions[directionIndex][1];
        if (!(0 <= nextRow && nextRow < row && 0 <= nextColumn && nextColumn < column && !(visited[nextRow][nextColumn]))) {
            directionIndex = (directionIndex + 1) % 4;
        }
        rowIndex += directions[directionIndex][0];
        columnIndex += directions[directionIndex][1];
    }

    return output;
}