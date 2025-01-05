/********
 *
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 */

 /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if ((haystack == "" || haystack == null) && (needle == "" || needle == null)) return 0;
    if (needle == "" || needle == null) return 0;
    let haystackCharArr = haystack.split('');
    let needleCharArr = needle.split('');
    let arr = [];
    if (haystackCharArr.length < needleCharArr.length) return -1;
    for (let i = 0; i<haystackCharArr.length; i++) {
        if (haystackCharArr[i] == needleCharArr[0]) {
            arr.push(i);
        }
    }
    let res = [];
    for (let j = 0; j<arr.length; j++) {
        if (haystackCharArr.length - arr[j] >= needleCharArr.length){
            res.push(compare(arr[j], haystack, needle));
        }
    }
    for (let k = 0; k<res.length; k++) {
        if (res[k] != -1) {
            return res[k];
        }
    }
    return -1;
};

var compare = function(postion, haystack, needle) {
    let haystackCharArr = haystack.split('');
    let needleCharArr = needle.split('');
    haystackCharArr = haystackCharArr.splice(postion,needleCharArr.length);
    if (haystackCharArr.join('') === needle) {
        return postion;
    } else return -1;
};

//One Line solution using indexOf
// var strStr = function(haystack, needle) {
//     if (needle === '') return 0;
//     return haystack.indexOf(needle);
// };

console.log(strStr("aabaabbbaabbbbabaaab", "abaa"));