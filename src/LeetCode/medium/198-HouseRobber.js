/**
 * @param {number[]} nums
 * @return {number}
 */

// DP: bottom up solution
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

// DP: Top down solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums || nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);

    let memoMap = new Map();

    return maxRobMoney(nums, nums.length - 1, memoMap);
};

var maxRobMoney = function (nums, index, memoMap) {
    if (index < 0) {
        return 0;
    }

    if (memoMap.has(index)) {
        return memoMap.get(index);
    }

    let vaule = Math.max((nums[index] + maxRobMoney(nums, index - 2, memoMap)), maxRobMoney(nums, index - 1, memoMap));

    memoMap.set(index, vaule);
    return vaule;
}