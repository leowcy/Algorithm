/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let flagBoard = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0));

    // check for each cell and keep marks on flagBoard
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const liveNei = check(board, i - 1, j) + check(board, i + 1, j) + check(board, i, j - 1) + check(board, i, j + 1) + check(board, i - 1, j - 1) + check(board, i - 1, j + 1) + check(board, i + 1, j - 1) + check(board, i + 1, j + 1);
            if (board[i][j] == 0) {
                if (liveNei == 3) {
                    flagBoard[i][j] = 1;
                }
            } else {
                if (liveNei < 2 || liveNei > 3) {
                    flagBoard[i][j] = 1;
                }
            }
        }
    }

    // update board
    for (let i = 0; i < flagBoard.length; i++) {
        for (let j = 0; j < flagBoard[0].length; j++) {
            if (flagBoard[i][j] == 1) {
                board[i][j] = board[i][j] == 0 ? 1 : 0;
            }
        }
    }
};

var check = function (board, i, j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return 0;
    if (board[i][j] == 1) return 1;
    return 0;
}

var check = function (board, i, j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return 0;
    if (board[i][j] == 1) return 1;
    return 0;
}
