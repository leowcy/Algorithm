/**
 * 32. Longest Valid Parentheses
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 */

/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function (s) {
    if (!s || s.length <= 0) return "";

    let longest = 0
    let stack = [-1]

    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (char === '(') {
            stack.push(i)
            continue
        }

        stack.pop()
        if (!stack.length) stack.push(i)
        else longest = Math.max((i - stack[stack.length - 1]), longest)
    }

    return longest
};