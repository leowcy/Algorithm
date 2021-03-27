/**
 * 45. Jump Game 2
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Your goal is to reach the last index in the minimum number of jumps.
You can assume that you can always reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (!nums) return 0;
    let length = nums.length,
        res = 0,
        newMax = 0,
        oldMax = 0;

    for (let i = 0; i < length - 1; i++) {
        newMax = Math.max(newMax, i + nums[i]);
        if (i == oldMax) {
            res++;
            oldMax = newMax;
        }
    }

    return res;
};

jump([2,3,1,1,4]);