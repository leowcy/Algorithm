/**
 * 41. First Missing Positive
 * Given an unsorted integer array nums, find the smallest missing positive integer.
Example 1:
Input: nums = [1,2,0]
Output: 3

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {

    //sort it first -> O(nlog(n))
    nums.sort((a, b) => a - b);

    let flag = 1;

    if (nums.length === 1) return nums[0] === 1 ? 2 : 1;

    for (let i = 0; i < nums.length - 1; i++) {
        // skip the number lesser or eql to 0
        if (nums[i] <= 0) {
            if (i === nums.length - 2) {
                flag = nums[i + 1] === 1 ? 2 : 1;
                break;
            }
            continue;
        }
        // if the smaller number is larger than 1 -> return 1
        if (nums[i] > flag) break;
        // if the smaller number is 1
        if (nums[i + 1] === nums[i]) {
            if (i === nums.length - 2) {
                flag++;
                break;
            }
            continue;
        }
        // if the next is 1 difference
        if (nums[i + 1] > nums[i] + 1) {
            flag++;
            break;
        }
        if (i === nums.length - 2) flag++;
        // if the next number is larger
        flag++;
    }
    return flag;
};

// Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space?
var firstMissingPositive = function (nums) {
    let length = nums.length,
        flag = 1;

    // O(n^2) -> the reason is array.indexOf() complexity is O(n)
    while (flag <= length) {
        if (nums.indexOf(flag) !== -1) flag++;
        else break;
    }

    return flag;
}

// O(n) but space complexity is O(n)
var firstMissingPositive = function(nums) {    
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], 1);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!m.has(i)) return i;
    }
    return nums.length + 1; // the array is [1,2,...,n]
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    /*
    The worst case (the first missing positive being the greatest) is
    when the array is [1,2..,n]. Therefore, in all other cases except this case, 
    the first missing positive number is less than or equal to n (nums.length).
    */
}


// O(nlogn)
var firstMissingPositive = function(nums) {
    nums = Array.from(new Set(nums));
    nums = nums.sort((a,b) => a-b).filter(num => num > 0);
    let j = 1;
    for (let i = 0; i < nums.length; i++) {
        if (j == nums[i]) j++;
        else return j;
    }
    return j;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
};

// O(n) and O(n) 核心思想： 把1放在index=0的位置，2放在1的位置，以此类推。然后遍历nums数组，如果在对应index没有找到对应的数字，则认为缺失该数，故return。
var firstMissingPositive = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        } else {
            i++;
        }
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return i + 1;
};
