/**
 * 16. 3Sum Closet
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var threeSumClosest = function (nums, target) {
    let sum = nums[0] + nums[1] + nums[2];
    if (nums.length === 3) return sum;

    //Complexity is O(nlogn)
    const sortedNums = nums.sort((a, b) => a - b);
    let map = {};
    let flag = false;
    let diff;

    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (flag) break;
        let j = i + 1,
            k = sortedNums.length - 1;
        while (j < k) {
            let temp = sortedNums[i] + sortedNums[j] + sortedNums[k];
            let tempDiff = Math.abs(target - temp);
            if (!diff || tempDiff < diff) {
                diff = tempDiff;
                map[temp] = tempDiff;
            }
            if (temp === target) {
                sum = temp;
                flag = true;
                break;
            } else if (temp > target) {
                k--;
            } else
                j++;
        }
    }
    if (flag) return sum;
    else {
        // find the most close and return the sum value
        var [lowestItems] = Object.entries(map).sort(([,v1], [,v2]) => v1 - v2)
        return parseInt(lowestItems, 10);
    }
};

console.log(threeSumClosest([1, 1, 1, 1], 0));