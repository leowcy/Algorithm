/**
 * 35. Search Insert Position
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const lengthOfNums = nums.length;
    if (!nums || lengthOfNums === 0) {
        return 0;
    }
    for (let i = 0; i < lengthOfNums; i++) {
        if (nums[i] >= target) {
            return i;
        }
        if (i === lengthOfNums - 1) {
            return lengthOfNums;
        }
    }
};