/**
 * @param {number} n
 * @return {number}
 */

// solution 1: backtrack - dfs
var countVowelStrings = function (n) {
    const vowels = "aeiou";
    let res = 0;

    var dfs = function (index, tempArr) {
        if (tempArr.length == n) {
            res++;
            return;
        }

        for (let i = index; i < vowels.length; i++) {
            tempArr.push(vowels[i]);
            dfs(i, tempArr);
            tempArr.pop();
        }
    }

    dfs(0, []);

    return res;
};

// solution 2: math O(1) DP
var countVowelStrings = function (n) {
    let dp = Array(5).fill(1)
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < 5; j++) {
            dp[j] = dp[j] + dp[j - 1]
        }
    }
    return dp[4]
};