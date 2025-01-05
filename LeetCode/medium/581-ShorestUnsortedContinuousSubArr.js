/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    if (!nums || nums.length == 0 || nums.length == 1) return 0;

    let min = Infinity, max = -Infinity, res;

    let flag = false;
    for (i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            flag = true;
        }
        if (flag) {
            min = Math.min(min, nums[i]);
        }
    }
    flag = false;
    for (j = nums.length - 2; j >= 0; j--) {
        if (nums[j] > nums[j + 1]) {
            flag = true;
        }
        if (flag) {
            max = Math.max(max, nums[j]);
        }
    }

    let m = 0,
        n = nums.length - 1;
    for (; m < nums.length; m++) {
        if (min < nums[m]) {
            break;
        }
    }

    for (; n >= 0; n--) {
        if (max > nums[n]) {
            break;
        }
    }

    return n - m < 0 ? 0 : n - m + 1;
};

// O(n) = n
/**
 * Algo:
 * 1. Loop the array first - Once found the not ascending order - Start recording the min value at this moment
 * 2. Similarly - Loop again from the back of array and once found the wrong order - Start recording the max value
 * 3. Loop the array - if the min value above is smaller than the nums[i] - Means we have found the left border of the output
 * 4. Similarly - Start from the end of the array - Once found the nums[j] value is smaller than max - Means we found the right border of the output
 * 5. Return the value base on conditions
 */

 var findUnsortedSubarray1 = function(nums) {
    // Left === the start of the subarray while right === the end of the subarray
    let left, right, largest = - Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        largest = Math.max(largest, nums[i]);

        // If the current value is less than the largest number encountered, 
        // then the current idx must be included in the to-be-sorted subarray, so expand the subarray
        if (nums[i] < largest) {
            if (left === undefined) {
                left = i - 1;
            }
            // If the current value is less than the value at the start of the subarray, expand the subarray start leftwards
            while (left >= 0 && nums[i] < nums[left]) {
                left--;
            }
            // Expand the subarray end to the current index
            right = i;
        }
    }
    
    if (left === undefined && right === undefined) return 0;
    else return right - left;
};

findUnsortedSubarray1([5,4,3,2,1])