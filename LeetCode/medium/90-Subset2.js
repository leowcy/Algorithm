/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    if (!nums || nums.length == 0) return [[]];

    let k = 1,
        len = nums.length,
        res = [];

    nums.sort((a, b) => a - b);

    res.push([]);
    res.push(nums);

    var findSubset = function (index, start = 0, arr = []) {
        if (arr.length == index) {
            res.push([...arr]);
            return;
        }

        for (let i = start; i < len; i++) {
            if (i !== start && nums[i - 1] == nums[i]) continue;
            arr.push(nums[i]);
            findSubset(index, i + 1, arr);
            arr.pop();
        }
        return;
    }

    while (k <= len - 1) {
        findSubset(k++);
    }

    return res;
};

// O(n) = N * 2 ^ N - N has 2 ^ N subsets and for loop N times