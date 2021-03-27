/**
 * 55. Jump Game
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length <= 1) return true;
    //record the len
    let index = 0,
        max = 0;

    while (index < nums.length - 1) {
        max = index + nums[index] > max ? index + nums[index] : max;

        if (max >= nums.length - 1) {
            return true;
        }

        if (nums[index] === 0 && max <= index) {
            return false;
        }

        index++;
    }

    return false;
};

//canJump([3,2,1,4]);
canJump([3,0,8,2,0,0,1]);
//canJump([1, 2, 2, 6, 3, 6, 1, 8, 9, 4, 7, 6, 5, 6, 8, 2, 6, 1, 3, 6, 6, 6, 3, 2, 4, 9, 4, 5, 9, 8, 2, 2, 1, 6, 1, 6, 2, 2, 6, 1, 8, 6, 8, 3, 2, 8, 5, 8, 0, 1, 4, 8, 7, 9, 0, 3, 9, 4, 8, 0, 2, 2, 5, 5, 8, 6, 3, 1, 0, 2, 4, 9, 8, 4, 4, 2, 3, 2, 2, 5, 5, 9, 3, 2, 8, 5, 8, 9, 1, 6, 2, 5, 9, 9, 3, 9, 7, 6, 0, 7, 8, 7, 8, 8, 3, 5, 0]);