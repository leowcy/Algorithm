/**
 * 58. Length of Last Word
 * Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
 * A word is a maximal substring consisting of non-space characters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s || s === " ") return 0;
    let length = 0, max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            length++;
            max = length;
        } else {
            length = 0;
        }
    }
    return max;
};