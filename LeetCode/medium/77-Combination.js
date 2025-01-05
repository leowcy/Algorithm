/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    let res = [];

    // main code
    var helper = function (str, index) {
        if (str.length == k) {
            res.push([...str]);
            return;
        }

        for (let i = index; i <= n; i++) {
            str.push(i);
            helper(str, i + 1);
            str.pop();
        }

        return;
    }

    helper([], 1);

    return res;
};

// O(n) = n * 2^n