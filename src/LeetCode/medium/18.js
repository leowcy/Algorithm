/**
 * 18. 4Sum
 * Given an array nums of n integers and an integer target, are there elements a, b, c,
 * and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 * Notice that the solution set must not contain duplicate quadruplets.
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[][]}
*/
var fourSum = function (nums, target) {
    if ((nums.length === 0 && target === 0) || nums.length < 4) return [];

    nums.sort((a, b) => a - b)

    let sum,
        res = [];

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let m = j + 1,
                n = nums.length - 1;

            while (m < n) {
                sum = nums[i] + nums[j] + nums[m] + nums[n];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[m], nums[n]]);

                    while (nums[m] === nums[m + 1]) m++;
                    while (nums[n] === nums[n - 1]) n--;

                    m++;
                    n--;
                } else if (sum < target) {
                    m++;
                } else
                    n--;
            }
            while(nums[j] === nums[j+1]) j++;
        }
        while(nums[i] === nums[i+1]) i++;
    }

    return res;
};