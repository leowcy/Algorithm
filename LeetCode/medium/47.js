/**
 * 46. Permutations
 * Given an array nums of integers, return all the possible permutations.
 * You can return the answer in any order.
 * 
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//     if (nums.length == 1) return [nums];

//     let res = [];
//     let everyRoot = new Array(nums.length).fill(0).map(() => new Array(nums.length).fill(0));
//     //console.log("everyRoot: ", everyRoot);
//     dfs(nums, [], Array(nums.length).fill(false), res, everyRoot);
//     console.log(res);
//     return res;
// };

var permute = function (nums) {
    if (nums.length == 1) return [nums];

    let res = [];
    let used = [];
    // extra the unique value of array
    let set1 = new Set(nums);
    nums.forEach(num => used[num] ? used[num]++ : used[num] = 1);
    dfs(nums, [], used, res, set1);
    console.log("res: ", res);
    return res;
};

var dfs = function (nums, temp, used, res, set1) {
    if (temp.length == nums.length) {
        // deep clone to avoid temp array usage
        res.push(Array.from(temp));
        return;
    }
    for (let eachNumber of set1) {
        if (used[eachNumber]) {
            // if never use before
            temp.push(eachNumber);
            used[eachNumber]--;
            // recursively call
            dfs(nums, temp, used, res, set1)
            // pop
            temp.pop();
            used[eachNumber]++;
        }
    }
}

// backtrack: 

var permuteUnique = function (nums) {
    let res = [], remain = [], set = new Set(nums);
    nums.forEach(num => remain[num] ? remain[num]++ : remain[num] = 1);

    function permute(depth, remain, cur) {
        if (depth == nums.length) {
            res.push(cur.slice());
            return;
        }
        // for loop the set here instead of the whole nums array -> then no duplicate number will be access
        for (let num of set) {
            if (remain[num]) {
                cur.push(num);
                remain[num]--;

                // move to the next depth
                permute(depth + 1, remain, cur);

                // backtrack to previous state
                cur.pop();
                remain[num]++;
            }
        }
        return res;
    }
    return permute(0, remain, []);
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    if (!nums || nums.length == 0) return [];

    let res = [],
        startArr = [],
        memo = [],
        visited = [];

    var permute = function (res, arr, memo, visited) {
        if (arr.length == nums.length) {
            const subArr = [...arr];
            const tempStr = subArr.join("");
            if (!memo.includes(tempStr)) {
                res.push(subArr);
                memo.push(tempStr);
            }
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited.includes(i)) continue;
            arr.push(nums[i]);
            visited.push(i);
            permute(res, arr, memo, visited);
            arr.pop();
            visited.pop();
        }
    }

    permute(res, startArr, memo, visited);

    return res;
};

permuteUnique3([1, 2, 3]);