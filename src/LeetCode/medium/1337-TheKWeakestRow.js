/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {

    let res = [];

    while (res.length < k) {
        let weakestRow = findWeakestRow(mat);
        res.push(weakestRow);
    }

    return res;
};

var findWeakestRow = function (mat) {
    let minSum = Infinity,
        row = -1;
    for (let i = 0; i < mat.length; i++) {
        if (mat[i][0] !== -1) {
            let rowSum = mat[i].reduce((a, b) => a + b, 0)
            if (rowSum < minSum) {
                minSum = rowSum;
                row = i;
            }
        }
    }
    mat[row][0] = -1;

    return row;
}

// since 1 <= k <= row
// O(n) = row * row * column