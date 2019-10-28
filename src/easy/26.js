/*
26. Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

//Method 2
var removeDuplicates = function(nums) {
    let len = nums.length;
    if (len == 0) return 0;
    let i = 0;
    for (let j = 1; j<len; j++) {
        if (nums[j] != nums[i]) {
            nums[i+1] = nums[j];
            i++;
        }
    }
    nums.length = i+1;
    return nums;
};

// Method 1: Create a new Array. Not allow.
// var removeDuplicates = function(nums) {
//     let len = nums.length;
//     let temp = nums[0];
//     let res = [];
//     res.push(temp);
//     for (let i = 1; i < len; i++) {
//         if (nums[i] != temp) {
//             temp = nums[i];
//             res.push(temp);
//         } 
//     }
//     return res;
// };

console.log(removeDuplicates([1,1,2,2,3]))