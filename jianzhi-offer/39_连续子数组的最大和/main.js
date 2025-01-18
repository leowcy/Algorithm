/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if (!nums.length) return;
    if (nums.length == 1) return nums[0];

    let length = nums.length,
        max = nums[0],
        maxArr = [];

    maxArr[0] = max;

    for (let i = 1; i < length; i++) {
        maxArr[i] = Math.max(nums[i], (nums[i] + maxArr[i-1]));
    }

    return Math.max( ...maxArr );
};

// reduce the space complexity
var maxSubArray = function(nums) {
    if (!nums.length) return;
    if (nums.length == 1) return nums[0];

    let length = nums.length,
        max = Number.MIN_SAFE_INTEGER,
        pre = 0;

    for (let i = 0; i < length; i++) {
        pre = Math.max(nums[i], (nums[i] + pre));
        max = pre > max ? pre : max;
    }

    return max;
};