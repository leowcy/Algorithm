/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    if (!nums || nums.length == 0) return [[]];

    let res = [];

    // push k=0 and k=nums.length cases
    res.push([]);
    res.push(nums);

    let k = 1,
        len = nums.length - 1;

    var helper = function (arr, index, targetLength) {
        if (arr.length == targetLength) {
            res.push([...arr]);
            return;
        }

        for (let i = index; i <= len; i++) {
            arr.push(nums[i]);
            helper(arr, i + 1, targetLength);
            arr.pop();
        }

        return;
    }

    while (k <= len) {
        helper([], 0, k);
        k++;
    }

    return res;
};