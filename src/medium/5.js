/**
 * 5. Longest Palindromic Substring
 * Given a string s, return the longest palindromic substring in s.
 *
 * Input: s = "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 */

/**
 * @param {string} s
 * @return {string}
 */
// 2D DP
var longestPalindrome = function (s) {

    if (s.length <= 1) return s;

    // construct a 2D array
    const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));



    let lps = '';

    // fill data into the  2d array

    // for length === 1 substring
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[0];
    }

    // for length === 2 substring
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            lps = s.slice(i, i + 2);
        }
    }

    // for length > 2
    for (let i = s.length-1; i >= 0; i--) {
        for (let j = i + 2; j < s.length + 1; j++) {
            dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
            if (dp[i][j]) lps = lps.length > (j - i + 1) ? lps : s.slice(i, j + 1);
        }
    }

    return lps;
}

longestPalindrome("aaaaa")