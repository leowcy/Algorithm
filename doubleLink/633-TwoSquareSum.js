/**
 * @param {number} c
 * @return {boolean}
 */

// 思路： 使用双指针，先把c开根号向下取证，作为大指针的边界。
// 然后从两边向中间靠拢。
var judgeSquareSum = function(c) {
    if (c<0) return false;
    let i = 0, j = Math.floor(Math.sqrt(c));
    while (i<=j) {
        let sumOfSquare = Math.pow(i, 2) + Math.pow(j, 2);
        if (sumOfSquare == c){
            return true;
        } else if (sumOfSquare < c) {
            i++;
        } else {
            j--;
        }
    }
    return false;
};