/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (!board || word.length == 0) return false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == word[0]) {
                if (helper(board, word, wordIndex = 0, row = i, column = j)) {
                    return true;
                }
            }
        }
    }

    return false;
};

var helper = function (board, word, wordIndex, i, j) {
    if (wordIndex == word.length) {
        return true;
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != word[wordIndex]) {
        return false;
    }

    let temp = board[i][j];
    board[i][j] = "*";
    let res = helper(board, word, wordIndex + 1, i + 1, j) || helper(board, word, wordIndex + 1, i - 1, j) || helper(board, word, wordIndex + 1, i, j + 1) || helper(board, word, wordIndex + 1, i, j - 1);
    board[i][j] = temp;

    return res;
}

// O(n) = O(m*n*3^word.length) always 3 directions since the move will come from one direction and 3 directions left for searching