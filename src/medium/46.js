/**
 * 46. Permutations
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 * 
 * Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length == 1) return [nums];

    let res = [];
    dfs(nums, [], Array(nums.length).fill(false), res);
    return res;
};

var dfs = function (nums, temp, used, res) {
    if (temp.length == nums.length) {
        // deep clone to avoid temp array usage
        res.push(Array.from(temp));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            // if never use before
            temp.push(nums[i]);
            used[i] = true;
            // recursively call
            dfs(nums, temp, used, res)
            // pop
            temp.pop();
            used[i] = false;
        }
        continue;
    }
}