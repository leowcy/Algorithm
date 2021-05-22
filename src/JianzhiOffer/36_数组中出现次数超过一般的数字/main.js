/**
 * @param {number[]} nums
 * @return {number}
 */

// solution 1: Hash Map to help building the result
var majorityElement = function (nums) {

    let numsMap = new Map();
    const len = nums.length;
    if (len == 1) return nums[0];
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

// solution 2: sort - sort完了之后，中间的数字一定是出现次数超过一半的数字 - 不写了 - TC: O(nlogn) SC: 1

// solution 3: Moore vote
var majorityElement = function (nums) {
    let ans = 0, count = 0;
    for(let i = 0; i < nums.length; i++){
        if(!count) {
            ans = nums[i];
            count++;
        }else count += nums[i] === ans ? 1 : -1;
    }
    return ans;
};