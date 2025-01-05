/**
 * 34. Find First and Last Position of Element in Sorted Array
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
Follow up: Could you write an algorithm with O(log n) runtime complexity?
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

// binary search
var searchRange = function (nums, target) {
    let l = 0, r = nums.length - 1, finalStartIndex = -1, finalEndIndex = -1, found = false;
    if (!nums || nums.length === 0 || nums[l] > target || nums[r] < target) return [finalStartIndex, finalEndIndex];

    while (l <= r && !found) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            found = true;
            // if index of mid is equal to target
            finalStartIndex = mid;
            finalEndIndex = mid;
            // find the edges
            while (nums[finalStartIndex - 1] === target) finalStartIndex--;
            while (nums[finalEndIndex + 1] === target) finalEndIndex++;
        }
    }

    return [finalStartIndex, finalEndIndex];
};

// clean solution but slower
// var searchRange = function (nums, target) {
//     let l = 0, r = nums.length - 1;
//     if (!nums || nums.length === 0 || nums[l] > target || nums[r] < target) return [-1, -1];

//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);
//         if (nums[mid] < target) {
//             l = mid + 1;
//         } else if (nums[mid] > target) {
//             r = mid - 1;
//         } else {
//             // if index of mid is equal to target
//             l = mid;
//             r = mid;
//             break;
//         }
//     }

//     if (l > r) return [-1, -1];

//     // find the edges
//     while (nums[l - 1] === target) l--;
//     while (nums[r + 1] === target) r++;
//     return [l, r];
// };