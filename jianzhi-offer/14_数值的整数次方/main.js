/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 1: this solution will be timeout. Need to improve.
var myPow = function (x, n) {
    if (n == 0) return 1;
    if (x == 0) return 0;

    let absOfN = Math.abs(n);
    let res = 1;
    while (absOfN > 0) {
        res *= x;
        absOfN--;
    }

    return n > 0 ? res : 1 / res;
};

// solution 2: 位运算
var myPow = function (x, n) {
    if (n == 0) return 1;
    if (n == 1) return x;
    if (x == 0) return 0;

    let absOfN = Math.abs(n);
    let res = 1;
    while (absOfN > 0) {
        // absOfN the last/rightest digit is 1
        if (absOfN & 1) {
            res *= x;
        }
        x *= x;
        absOfN = Math.floor(absOfN / 2);
    }

    return n > 0 ? res : 1 / res;
};

// solution 3: 二分-递归法
var myPow = function (x, n) {
    const resultOfMyPow = calculateMyPow(x, Math.abs(n));
    return n > 0 ? resultOfMyPow : 1 / resultOfMyPow;
};

var calculateMyPow = function (x, absOfN) {
    if (absOfN == 0) return 1;
    if (absOfN == 1) return x;
    if (x == 1) return 1;
    const subRes = calculateMyPow(x, Math.floor(absOfN / 2));
    if (absOfN % 2) {
        // oddNumber
        return x * subRes * subRes;
    }
    // even number
    return subRes * subRes;
}