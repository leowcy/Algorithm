/**
 * 36. Valid Sudoku
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 */

/**
* @param {character[][]} board
* @return {boolean}
*/
var isValidSudoku = function (board) {
    if (!board) return false;
    let row, column, box = [];

    for (let i = 0; i < 9; i++) {
        row = new Set();
        column = new Set();
        for (let j = 0; j < 9; j++) {
            let boxIndex = (3 * Math.floor(i / 3) + Math.floor(j / 3));
            if (!box[boxIndex]) {
                box[boxIndex] = new Set();
            }
            let boardRowCurrentValue = board[i][j];
            let boardColumnCurrentValue = board[j][i];
            if (row.has(boardRowCurrentValue) || column.has(boardColumnCurrentValue) || box[boxIndex].has(boardRowCurrentValue)) {
                return false;
            }
            if (boardRowCurrentValue !== '.') {
                row.add(boardRowCurrentValue);
                box[boxIndex].add(boardRowCurrentValue);
            }
            if (boardColumnCurrentValue !== '.') {
                column.add(boardColumnCurrentValue);
            }
        }
    }
    return true;
};

// [
//     [".", "8", "7", "6", "5", "4", "3", "2", "1"],
//     ["2", ".", ".", ".", ".", ".", ".", ".", "."],
//     ["3", ".", ".", ".", ".", ".", ".", ".", "."],
//     ["4", ".", ".", ".", ".", ".", ".", ".", "."],
//     ["5", ".", ".", ".", ".", ".", ".", ".", "."],
//     ["6", ".", ".", ".", ".", ".", ".", ".", "."],
//     ["7", ".", ".", ".", ".", ".", ".", ".", "."],
//     ["8", ".", ".", ".", ".", ".", ".", ".", "."],
//     ["9", ".", ".", ".", ".", ".", ".", ".", "."]
// ]