/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function (m, n, k) {
    if (k == 0) return 1;

    let blockSet = new Set();

    var dfs = (row, column) => {
        let sum = getSum(row, column);
        let rowColumnString = row.toString() + ',' + column.toString();
        if (row < 0 || row >= m || column < 0 || column >= n || sum > k || blockSet.has(rowColumnString)) return;

        // set checked block as used
        blockSet.add(rowColumnString);
        dfs(row + 1, column);
        //dfs(row - 1, column);
        dfs(row, column + 1);
        //dfs(row, column - 1);
    }

    dfs(0, 0);
    return blockSet.size;
};

// get sum using the reduce function call
var getSum = (a, b) => {
    let digitOfA = a.toString().split(''),
        digitOfB = b.toString().split('');
    const digitCombination = digitOfA.concat(digitOfB);
    return digitCombination.reduce((a, b) => Number(a) + Number(b), 0)
}

// get sum using the math
var getSum1 = (a, b) => {
    let sumOfA = 0, sumOfB = 0;

    while (a) {
        sumOfA += a % 10;
        a = Math.floor(a / 10);
    }

    while (b) {
        sumOfB += b % 10;
        b = Math.floor(b / 10);
    }

    return sumOfA + sumOfB;
}


//movingCount(1,2,1)