/**
 * @param {number[]} nums
 * @return {number}
 */

// bottom up solution
var rob = function (nums) {
    if (!nums || nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);

    nums[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] + nums[i - 2] > nums[i - 1]) {
            nums[i] += nums[i - 2];
        } else {
            nums[i] = nums[i - 1];
        }
    }

    return nums[nums.length - 1];
};