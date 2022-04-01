/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s || s.length == 0) return 0;

    let memo = [];

    var helper = function (index) {
        let res = 0;

        if (index == s.length) {
            return 1;
        }

        // Before I was using !== and it always goes into the if condition.
        // Suppose a new array = [], but new array[0] != null -> false 
        // However new array[0] !== null -> true
        // So it means new array[0] just normally not equal to null but not fully or completely not equal to null
        // Interesting point!
        if (memo[index] != null) {
            return memo[index];
        }
        if (s[index] > 0) {
            res += helper(index + 1);
        }

        if (s[index] != 0 && s[index + 1] != null && s[index] + s[index + 1] < 27) {
            res += helper(index + 2);
        }

        memo[index] = res;

        return res;
    }

    return helper(0);
};

// solution 2: DP - O(n) = n

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s || s.length == 0) return 0;

    let dp = new Array(s.length + 1).fill(0);

    dp[0] = 1; // in case of out of bound
    dp[1] = s[0] == 0 ? 0 : 1;

    for (let i = 2; i <= s.length; i++) {
        if (s[i - 1] > 0) {
            dp[i] += dp[i - 1];
        }
        if (s[i - 2] == 1 || s[i - 2] == 2 && s[i - 1] < 7) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];
};