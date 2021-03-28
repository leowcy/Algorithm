/**
 * @param {number[]} nums
 * @return {number}
 */

// solution 1: create a Map to store and compare the elements -> TC: O(n) / SC: O(n)
var findRepeatNumber = function (nums) {
    let numsMap = new Map(), max = 0, index;

    for (let num of nums) {
        let tempValue = numsMap.get(num);
        if (tempValue) {
            return num;
        } else {
            tempValue = 1;
        }
        numsMap.set(num, tempValue);
    }

    return 0;
};

// solution 2: findRepeatNumber -> TC: O(n) / SC: O(1)
var findRepeatNumber = function (nums) {
    if (!nums || nums.length == 0) return -1;

    for (let index = 0; index < nums.length; index++) {
        if (index == nums[index]) {
            continue;
        } else {
            if (nums[nums[index]] === nums[index]) {
                return nums[index];
            } else {
                let temp = nums[index];
                nums[nums[index]] = temp;
                nums[index] = index;
            }
        }
    }

    return -1;
};