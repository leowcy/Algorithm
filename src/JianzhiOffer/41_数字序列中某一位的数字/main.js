/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {

    if (n >= 0 && n < 10) return n;

    for (let bit = 1; bit < 32; ++bit) {
        const startNum = Math.pow(10, bit - 1);
        const endNum = 9 * startNum * bit;
        if (n > endNum) {
            // keep finding the digit
            n -= endNum;
        } else {
            // find the actual number
            let num = startNum + Math.ceil(n / bit) - 1;
            // find the actual digit in number
            let pos = n - bit * (num - startNum) - 1;
            return num.toString(10)[pos];
        }
    }
};