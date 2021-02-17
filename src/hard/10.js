/**
 * 10. Regular Expression Matching
 Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
 */

/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/

/**
 *  recursive call - if the first char not match and the firstChar.next in P is not *, then return false directly.
 *  If match or the char in P is no connection with S -> slice it
 */


var isMatch = function (s, p) {
    let map = {},
        lengthOfS = s.length,
        lengthOfP = p.length;

    var check = function (indexOfS, indexOfP) {
        if (indexOfS === lengthOfS && indexOfP === lengthOfP) return true;
        if (indexOfS > lengthOfS) return false;
        if (map[indexOfS + ":" + indexOfP] !== undefined) return map[indexOfS + ":" + indexOfP];

        if (s[indexOfS] === p[indexOfP] || p[indexOfP] === ".") {
            map[indexOfS + ":" + indexOfP] = p[indexOfP + 1] === "*" ? check(indexOfS + 1, indexOfP) || check(indexOfS, indexOfP + 2) : check(indexOfS + 1, indexOfP + 1);
        } else {
            map[indexOfS + ":" + indexOfP] = p[indexOfP + 1] === "*" ? check(indexOfS, indexOfP + 2) : false;
        }
        return map[indexOfS + ":" + indexOfP];
    }

    return check(0, 0);
};
