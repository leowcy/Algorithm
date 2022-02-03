/**
 * 37. Sudoku solver
 * Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    if (!board) return false;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let currentValue = board[i][j];
            if (currentValue !== '.') continue;
            for (let num = 1; num <= 9; num++) {
                if (isValid(board, i, j, num.toString())) {
                    board[i][j] = num.toString();
                    if (solveSudoku(board)) {
                        return true;
                    } else {
                        // revert it back
                        board[i][j] = ".";
                    }
                }
            }
            return false;
        }
    }
    // if all passed -> return true
    return true;
};

// check if the num filled in the index of [i][j] which is valid or not
var isValid = function (board, i, j, checkValue) {
    let row = 3 * Math.floor(i / 3),
        column = 3 * Math.floor(j / 3);

    // check row and column
    for (let m = 0; m < 9; m++) {
        let valueOfRow = board[i][m];
        let valueOfColumn = board[m][j];
        if (valueOfRow === checkValue || valueOfColumn === checkValue) return false;
        const currentRow = row + Math.floor(m / 3);
        const currentColumn = column + Math.floor(m % 3);
        if (board[currentRow][currentColumn] === checkValue) return false;
    }
    return true;
}

let input = [
    [".", "8", "7", "6", "5", "4", "3", "2", "1"],
    ["2", ".", ".", ".", ".", ".", ".", ".", "."],
    ["3", ".", ".", ".", ".", ".", ".", ".", "."],
    ["4", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", ".", "."],
    ["6", ".", ".", ".", ".", ".", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    ["8", ".", ".", ".", ".", ".", ".", ".", "."],
    ["9", ".", ".", ".", ".", ".", ".", ".", "."]
];

solveSudoku(input);

//["1", "2", "3", "4", "5", "6", "7", "8", "9"]
