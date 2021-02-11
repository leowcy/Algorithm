/**
 * 67. Add Binary
 * Given two binary strings a and b, return their sum as a binary string.
 * Input: a = "11", b = "1"
 * Output: "100"
 */

/**
* @param {string} a
* @param {string} b
* @return {string}
*/
var addBinary = function (a, b) {
    // 0b111 -> binary 111 -> 7
    const valueOfA = `0b${a}`;
    const valueOfB = `0b${b}`;
    console.log(valueOfA);
    console.log(valueOfB);
    const sum = BigInt(valueOfA) + BigInt(valueOfB);
    return sum.toString(2);
};

// function binaryToValue(n) {
//     let value = 0;
//     for(let i = 0; i < n.length; i++) {
//         value += n[i] * Math.pow(2, (n.length - 1 - i));
//     }
//     return value;
// }
