/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Solution 1: O(n) = nlogN time - O(1) space
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

// solution 2: Hashmap - O(n) time & O(n) space
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    if (!nums || nums.length == 0) return 0;

    let numsMap = new Map(),
        res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.get(k - nums[i])) {
            if (numsMap.get(k - nums[i]) == 1) {
                numsMap.delete(k - nums[i]);
            } else {
                numsMap.set(k - nums[i], numsMap.get(k - nums[i]) - 1);
            }
            res++;
        } else {
            numsMap.set(nums[i], numsMap.get(nums[i]) + 1 || 1);
        }
    }

    return res;
};