/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // keep the length of row and column
    let row = board.length,
        column = board[0].length,
        wordArr = word.split('');

    var dfs = (currentRow, currentColumn, wordArr) => {
        // if not qualified or char not match
        if (currentRow < 0 || currentRow >= row || currentColumn < 0 || currentColumn >= column || board[currentRow][currentColumn] != wordArr[0]) return false;
        // shift the match element from the wordArr
        wordArr.shift();
        // if shift() all the element -> All match -> return true
        if (!wordArr || wordArr.length == 0) return true;
        // if wordArr still remains element
        if (wordArr && wordArr.length > 0) {
            let tempValue = board[currentRow][currentColumn];
            // change the checked value in the array in case of double check issue
            board[currentRow][currentColumn] = "*";
            // dfs for 4 different directions
            const res = dfs(currentRow - 1, currentColumn, wordArr) || dfs(currentRow + 1, currentColumn, wordArr)
                || dfs(currentRow, currentColumn - 1, wordArr) || dfs(currentRow, currentColumn + 1, wordArr);
            // recover the value of board and wordArr
            board[currentRow][currentColumn] = tempValue;
            wordArr.unshift(tempValue);
            // return res
            return res;
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            // dfs for each element in the 2d array
            let res = dfs(i, j, wordArr);
            if (res) {
                // if found one -> return true
                return res;
            }
        }
    }
    // nothing found
    return false;
};