/**
 * 31. Next Permutation
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
The replacement must be in place and use only constant extra memory.

Example 1:
Input: nums = [1,2,3]
Output: [1,3,2]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 2 3 6 5
var nextPermutation = function (nums) {
    let flag = false;
    for (let i = nums.length - 1; i > 0; i--) {
        // if found one digit less than the digit next to it(right side)
        if (nums[i - 1] < nums[i]) {
            flag = true;
            // find the larger digit from the right side of the nums array with the less difference
            const largerDigitIndex = findLarger(nums, i - 1);
            // swap the i-1 with the first larger digit
            nums = swap(nums, i - 1, largerDigitIndex);
            // reverse the nums from i to end of the array
            nums = reverser(nums, i);
            // return nums
            break;
        }
    }
    // if never enter into the if condition -> that means this nums is descending. So just simply reverse it and return
    if (!flag) nums = reverser(nums, 0);
    return nums;
};

var findLarger = function (nums, index) {
    const value = nums[index];
    for (let i = nums.length - 1; i > index; i--) {
        if (nums[i] - value > 0) return i;
    }
}

var swap = function (nums, a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]];
    return nums;
}

var reverser = function (nums, i) {
    let j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
    return nums;
}

// rewrite 04/03 same solution: swap and reverse the swapped part
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let numsLen = nums.length;

    let flag = false;

    for (let i = numsLen - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            flag = true;
            // from the end of the list to find the first Larger digit that great than nums[i-1] and swap them
            for (let j = numsLen - 1; j > i - 1; j--) {
                if (nums[j] > nums[i - 1]) {
                    [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]];
                    break;
                }
            }
            // reverse the part after index i and we will get the expected result
            let left = i,
                right = numsLen - 1;
            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
            break;
        }
    }

    if (!flag) {
        nums.reverse();
    }
};