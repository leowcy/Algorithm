/**
 * @param {number[]} nums
 * @return {number[]}
 */

// solution 1: fast+slow pointers
var exchange = function (nums) {
    if (nums.length == 0 || nums.length == 1) return nums;

    let i = j = 0;

    while (j < nums.length) {
        // if the current number is odd
        if (nums[j] % 2 == 1) {
            nums = swap(nums, i, j);
            i++;
            j++;
        } else {
            j++;
        }
    }

    return nums;
};

var swap = (nums, i, j) => {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
    return nums;
}