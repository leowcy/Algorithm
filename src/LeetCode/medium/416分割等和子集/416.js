/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = 0, n = nums.length;
    sum = nums.reduce((a, b) => a + b, 0);
    // check if sum is odd - since no odd sum will be qualified for two subset
    if (sum & 1) {
        return false;
    }
    sum = sum / 2;
    let dp = new Array(n + 1).fill(0).map(() => new Array(sum + 1).fill(false));
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }
    for (let i = 1; i <= n; i++) {
        let num = nums[i - 1];
        for (let j = 0; j <= sum; j++) {
            if (j - num < 0) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
            }
        }
    }
    return dp[n][sum];
};
