/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums || nums.length === 0) {
        return 0;
    }
    if(nums.length === 1) return nums[0];

    let max = nums[0];
    let dp = [];
    dp[0] = max;

    for(let i = 1; i < nums.length; i++) {
        dp[i] = dp[i-1] > 0 ? nums[i] + dp[i-1] : nums[i];
        // if larger than the max -> replace it
        max = dp[i] > max ? dp[i]: max;
    }
    return max;
};