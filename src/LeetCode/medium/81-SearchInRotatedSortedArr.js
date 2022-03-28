/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    if (!nums || nums.length == 0) return false;

    let left = 0,
        right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // compare it with mid & left & right
        if (nums[mid] == nums[right]) right--;
        // right half is sorted already
        else if (nums[mid] < nums[right]) {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } else {
            // left half is sort
            if (nums[mid] < target || target < nums[left]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

    }

    return nums[left] == target;

};

// O(n) = best case log(n) worse case (n)