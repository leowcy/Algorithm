/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    if (!nums || nums.length == 0 || nums.length == 1) return nums ? nums[0] : null;

    let left = Math.max(...nums),
        right = 0,
        ans = 0;

    // get sum of nums
    for (const each of nums) {
        right += each;
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (isCheckedPass(nums, mid, m)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};

var isCheckedPass = function (nums, val, m) {
    let base = 1,
        temp = 0;

    for (let i = 0; i < nums.length; i++) {
        temp += nums[i];

        if (temp > val) {
            base++;
            temp = nums[i];
        }
    }

    return base <= m;
}

// O(n) = N * log S -> S is the sum of integers in array && N is the length of nums
// The binary search algo is -> the lowest side is the Max number in nums -> The highest side is the sum of nums -> Then we can do binary search to check if the mid num is qualified