/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let min = 1,
        max = 45;

    if (n < min || n > max) return [];

    var hasDuplicate = function (input) {
        let tempMap = new Map();

        for (const each of input) {
            if (tempMap.get(each) != null) {
                return true;
            } else {
                tempMap.set(each, 1);
            }
        }

        return false;
    }

    var dfs = function (res, arr, init, recorded) {
        if (arr.reduce((a, b) => a + b, 0) == n && arr.length == k && hasDuplicate(arr) == false) {
            let copyArr = [...arr];
            copyArr.sort((a, b) => a - b);
            const tempStr = copyArr.join("");
            if (!recorded.includes(tempStr)) {
                recorded.push(tempStr);
                res.push(copyArr);
            }
            return;
        }

        for (let i = init; i <= 9; i++) {
            arr.push(i);
            dfs(res, arr, init + 1, recorded);
            arr.pop();
        }
    }

    let res = [],
        arr = [],
        init = 1,
        recorded = [];

    dfs(res, arr, init, recorded);

    return res;
};