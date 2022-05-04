/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    if (!nums || nums.length == 0) return 0;

    nums.sort((a, b) => a - b);

    let left = 0,
        right = nums.length - 1;


    let res = 0;
    while (left < right) {
        if (nums[left] + nums[right] == k) {
            left++;
            right--;
            res++;
        } else if (nums[left] + nums[right] < k) {
            left++;
        } else {
            right--;
        }
    }

    return res;
};