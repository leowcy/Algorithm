/**
 * 33. Search in Rotated Sorted ArrayThere is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length)
such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function (nums, target) {
    if (nums.length === 1) return nums[0] === target ? 0 : -1;

    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[l] <= nums[mid]) {
            // if left part is ascending
            if (target >= nums[l] && target < nums[mid]) {
                // if target number is inside the left ascending half
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            // if left part is not ascending
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search([3,4,5,6,7,8,1,2], 2));