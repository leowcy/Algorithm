/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (!nums || nums.length == 0) return null;



    let l = 0,
        r = nums.length,
        res = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (isPeak(nums, mid)) {
            res = mid;
            break;
        }

        // if mid index number is not peak
        if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
            r = mid - 1;
        } else if (mid + 1 < nums.length && nums[mid + 1] > nums[mid]) {
            l = mid + 1;
        }
    }

    return res;
};

var isPeak = function (nums, i) {
    if ((i - 1 < 0 || nums[i - 1] < nums[i]) && (i + 1 >= nums.length || nums[i + 1] < nums[i])) {
        return true;
    }
    return false;
}

// O(n) = logN - binary search