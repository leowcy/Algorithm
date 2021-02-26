/**
 * 22. Generate Parentheses
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

/**
* @param {number} n
* @return {string[]}
*/

// Backtracking
var generateParenthesis = function (n) {
    if (n === 1) return ["()"];
    let allPossibleParenthesisList = [];
    backtrackingParenthesis(n, n, "", 2*n, allPossibleParenthesisList);
    console.log("allPossibleParenthesisList: ", allPossibleParenthesisList);
    return allPossibleParenthesisList;
};

var backtrackingParenthesis = function (leftP, rightP, s, max, allPossibleParenthesisList) {
    if (leftP > rightP) return;
    if (leftP === 0 && rightP === 0 && s.length === max) {
        allPossibleParenthesisList.push(s);
        return;
    }
    if (leftP > 0) {
        backtrackingParenthesis(leftP-1, rightP, s + "(", max, allPossibleParenthesisList);
    }
    if (rightP > leftP) {
        backtrackingParenthesis(leftP, rightP-1, s + ")", max, allPossibleParenthesisList);
    }
}

// DP

generateParenthesis(3);