// solution 1: brute force
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let res = [];
    for (let i = 1; i < Math.pow(10, n); i++) {
        res.push(i);
    }
    return res;
};

// solution 2: using string to solve this problem for BigInt
var printNumbers = function (n) {
    let max = '';
    while (n--) {
        // will get the maxNumber of string type -> '9'/'99'/'999'/'9..9' -> this will avoid the bigInt issue
        max += '9';
    }

    for (let i = 1, l = max - '0'; i <= l; i++) res.push(i);
};

// solution 3: bit operation
var printNumbers = function (n) {
    let max = 1, x = 10;
    while (n) {
        if (n & 1) {
            max = max * x;
        }
        x *= x;
        n >>= 1;
    }
    let res = [];
    for (let i = 1; i < max; i++) {
        res.push(i);
    }
    return res;
}

// solution 4: DFS
var printNumbers = function (n) {
    let res = [];

    var dfs = function (stringOfNumber, lengthOfBit) {
        if (stringOfNumber.length == lengthOfBit) {
            res.push(stringOfNumber);
            return;
        }
        for (let i = '0'; i <= '9'; i++) {
            stringOfNumber += i.toString();
            dfs(stringOfNumber, lengthOfBit);
            // remove the last digit after using it
            stringOfNumber = stringOfNumber.slice(0,-1);
        }
    }

    for (let m = 1; m <= n; m++) {
        for (let i = '1'; i <= '9'; i++) {
            dfs(i.toString(), m);
        }
    }

    return res;
}