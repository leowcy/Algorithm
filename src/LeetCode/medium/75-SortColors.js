/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    let red = 0,
        white = 0,
        blue = 0;

    for (const each of nums) {
        if (each == 0) {
            red++;
        } else if (each == 1) {
            white++;
        } else {
            blue++;
        }
    }

    let i = 0;

    while (i < red) {
        nums[i] = 0;
        i++;
    }

    while (i < (red + white)) {
        nums[i] = 1;
        i++;
    }

    while (i < (red + white + blue)) {
        nums[i] = 2;
        i++;
    }
};

// solution 2: three index slow mid high pointer

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    let low = 0,
        mid = 0,
        high = nums.length - 1;

    while (mid <= high) {

        if (nums[mid] == 0) {
            swap(nums, low, mid);
            low++;
            mid++;
        }

        else if (nums[mid] == 1) {
            mid++;
        }

        else if (nums[mid] == 2) {
            swap(nums, mid, high);
            high--;
        }
    }

};

var swap = function (nums, a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]]
}

