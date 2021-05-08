/**
 * @param {number[]} nums
 * @return {number}
 */

// solution 1: Hash Map to help building the result
var majorityElement = function (nums) {

    let numsMap = new Map();
    const len = nums.length;
    const targetLen = Math.floor(nums.length / 2);
    let res;
    for (let i = 0; i < len; i++) {
        let temp = numsMap.get(nums[i]);
        if (temp) {
            temp++;
            if (temp > targetLen) {
                res = nums[i];
                break;
            } else {
                numsMap.set(nums[i], temp);
            }
        } else {
            numsMap.set(nums[i], 1);
        }
    }

    return res;
};
