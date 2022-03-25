/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) return nums.length;

    let slow = 0,
        fast = 0;

    for (; fast < nums.length; fast++) {
        if (nums[fast] !== nums[fast + 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
};